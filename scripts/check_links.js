import { parse } from 'node-html-parser';

const START_URL = 'https://lesbianade.com';
const START_HOST = new URL(START_URL).host;

const visited = new Set();
const checked = new Set();
const broken = new Map();
const warnings = new Map();
const queue = [START_URL];

// Tracks every location where an internal URL is linked.
const internalLinks = new Map();

const ignoredProtocols = [
	'mailto:',
	'tel:',
	'javascript:',
	'data:'
];

async function checkUrl(url) {
	return fetch(url, {
		redirect: 'follow',
		headers: {
			'User-Agent': 'LESBIANADE.com link checker'
		}
	});
}

function recordResult(collection, url, reason, source) {
	if (!collection.has(url)) {
		collection.set(url, {
			reason,
			locations: []
		});
	}

	const entry = collection.get(url);

	if (
		source &&
		!entry.locations.some(
			(location) =>
				location.source === source.source &&
				location.element === source.element
		)
	) {
		entry.locations.push(source);
	}
}

async function checkLink(url, source) {
	if (checked.has(url)) return null;

	checked.add(url);

	let response;

	try {
		response = await checkUrl(url);
	} catch (error) {
		recordResult(
			broken,
			url,
			`fetch failed: ${error.message}`,
			source
		);

		return null;
	}

	// These responses mean the server was reached, but automated
	// requests may be blocked or require authentication.
	if (
		response.status === 401 ||
		response.status === 403 ||
		response.status === 429
	) {
		recordResult(
			warnings,
			url,
			`${response.status} ${response.statusText}`,
			source
		);

		return null;
	}

	// 4xx/5xx responses other than the above are considered broken.
	if (response.status >= 400) {
		recordResult(
			broken,
			url,
			`${response.status} ${response.statusText}`,
			source
		);

		return null;
	}

	return response;
}

async function crawl(url) {
	if (visited.has(url)) return;

	visited.add(url);

	console.log(`Checking ${url}`);

	const sources = internalLinks.get(url) ?? [];

	const response = await checkLink(
		url,
		sources.length > 0 ? sources[0] : null
	);

	if (!response) return;

	const contentType = response.headers.get('content-type') ?? '';

	// Non-HTML resources don't contain links for us to crawl.
	if (!contentType.includes('text/html')) {
		return;
	}

	const html = await response.text();

	// A successful response with no body is suspicious.
	if (!html.trim()) {
		recordResult(
			broken,
			url,
			'HTTP 200 but empty response body',
			sources[0] ?? {
				source: url,
				element: 'N/A'
			}
		);

		return;
	}

	const document = parse(html);

	for (const anchor of document.querySelectorAll('a[href]')) {
		const href = anchor.getAttribute('href');

		if (!href) continue;

		if (
			ignoredProtocols.some((protocol) =>
				href.toLowerCase().startsWith(protocol)
			)
		) {
			continue;
		}

		let target;

		try {
			target = new URL(href, url);
		} catch {
			recordResult(
				broken,
				`${url} -> ${href}`,
				'invalid URL',
				{
					source: url,
					element: anchor.toString()
				}
			);

			continue;
		}

		// Fragments don't change the page being requested.
		target.hash = '';

		const targetUrl = target.href;

		// Ignore Cloudflare infrastructure endpoints.
		if (
			target.host === START_HOST &&
			target.pathname.startsWith('/cdn-cgi/')
		) {
			continue;
		}

		const source = {
			source: url,
			element: anchor.toString()
		};

		// Internal links are tracked and queued for checking.
		if (target.host === START_HOST) {
			if (!internalLinks.has(targetUrl)) {
				internalLinks.set(targetUrl, []);
			}

			internalLinks.get(targetUrl).push(source);

			if (!visited.has(targetUrl)) {
				queue.push(targetUrl);
			}

			continue;
		}

		// External links are checked, but not crawled.
		console.log(`  External: ${targetUrl}`);

		await checkLink(targetUrl, source);
	}
}

while (queue.length > 0) {
	const url = queue.shift();

	await crawl(url);
}

console.log('\n----------------------------------------');
console.log(`Checked ${visited.size} internal pages`);
console.log(`Checked ${checked.size} unique URLs`);

// Display warnings.
if (warnings.size > 0) {
	console.log(
		`\n⚠ ${warnings.size} links could not be verified:\n`
	);

	for (const [url, details] of warnings) {
		console.log(`  Destination: ${url}`);
		console.log(`  Reason:      ${details.reason}`);

		for (const location of details.locations) {
			console.log(`\n    Source:  ${location.source}`);
			console.log(`    Element: ${location.element}`);
		}

		console.log('');
	}
}

// Display broken links.
if (broken.size === 0) {
	console.log('\n✓ No confirmed broken links found');
	process.exit(0);
}

console.log(
	`\n✗ ${broken.size} confirmed broken links found:\n`
);

for (const [url, details] of broken) {
	console.log(`  Destination: ${url}`);
	console.log(`  Reason:      ${details.reason}`);

	if (details.locations.length === 0) {
		console.log('  Source:      Unknown');
	}

	for (const location of details.locations) {
		console.log(`\n    Source:  ${location.source}`);
		console.log(`    Element: ${location.element}`);
	}

	console.log('');
}

process.exit(1);