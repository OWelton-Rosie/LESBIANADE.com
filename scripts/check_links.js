
import { parse } from 'node-html-parser';

const START_URL = 'https://lesbianade.com';
const START_HOST = new URL(START_URL).host;

const visited = new Set();
const broken = new Map();
const warnings = new Map();
const queue = [START_URL];

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

async function checkLink(url, source) {
	let response;

	try {
		response = await checkUrl(url);
	} catch (error) {
		broken.set(
			url,
			`fetch failed: ${error.message} (linked from ${source})`
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
		warnings.set(
			url,
			`${response.status} ${response.statusText} (linked from ${source})`
		);

		return null;
	}

	// 4xx/5xx responses other than the above are considered broken.
	if (response.status >= 400) {
		broken.set(
			url,
			`${response.status} ${response.statusText} (linked from ${source})`
		);

		return null;
	}

	return response;
}

async function crawl(url) {
	if (visited.has(url)) return;

	visited.add(url);

	console.log(`Checking ${url}`);

	const response = await checkLink(url, 'site crawl');

	if (!response) return;

	const contentType = response.headers.get('content-type') ?? '';

	// Non-HTML resources don't contain links for us to crawl.
	if (!contentType.includes('text/html')) {
		return;
	}

	const html = await response.text();

	// A successful response with no body is suspicious.
	if (!html.trim()) {
		broken.set(
			url,
			'HTTP 200 but empty response body'
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
			broken.set(
				`${url} -> ${href}`,
				'invalid URL'
			);

			continue;
		}

		// Fragments don't change the page being requested.
		target.hash = '';

		const targetUrl = target.href;

		// Internal links are crawled so we can discover more links.
		if (target.host === START_HOST) {
			if (!visited.has(targetUrl)) {
				queue.push(targetUrl);
			}

			continue;
		}

		// External links are checked, but not crawled.
		console.log(`  External: ${targetUrl}`);

		await checkLink(targetUrl, url);
	}
}

while (queue.length > 0) {
	const url = queue.shift();

	await crawl(url);
}

console.log('\n----------------------------------------');
console.log(`Checked ${visited.size} internal pages`);

if (warnings.size > 0) {
	console.log(
		`\n⚠ ${warnings.size} links could not be verified:\n`
	);

	for (const [url, reason] of warnings) {
		console.log(`  ${url}`);
		console.log(`    ${reason}`);
	}
}

if (broken.size === 0) {
	console.log('\n✓ No confirmed broken links found');
	process.exit(0);
}

console.log(
	`\n✗ ${broken.size} confirmed broken links found:\n`
);

for (const [url, reason] of broken) {
	console.log(`  ${url}`);
	console.log(`    ${reason}`);
}

process.exit(1);