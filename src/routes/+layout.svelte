<script>
	import { onMount } from 'svelte';
	import '#lib/styles/base.css';
	import Navbar from '#lib/components/Navbar.svelte';
	import Footer from '#lib/components/Footer.svelte';
	import Name from '#lib/components/Name.svelte';

	let { children } = $props();

	onMount(() => {
		function configureExternalLinks(root = document) {
			const links = [];

			if (root instanceof HTMLAnchorElement) {
				links.push(root);
			}

			if (typeof root.querySelectorAll === 'function') {
				links.push(...root.querySelectorAll('a[href]'));
			}

			for (const link of links) {
				const href = link.getAttribute('href');
				if (!href) continue;

				const isEmailOrTelephone = /^(mailto|tel):/i.test(href);
				let isExternalUrl = false;

				try {
					const url = new URL(href, window.location.href);
					isExternalUrl =
						(url.protocol === 'http:' || url.protocol === 'https:') &&
						url.origin !== window.location.origin;
				} catch {
					// Ignore invalid URLs and leave the link unchanged.
				}

				if (isEmailOrTelephone || isExternalUrl) {
					link.target = '_blank';
					const relValues = new Set(link.rel.split(/\s+/).filter(Boolean));
					relValues.add('noopener');
					relValues.add('noreferrer');
					link.rel = [...relValues].join(' ');
				}
			}
		}

		configureExternalLinks();

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				for (const node of mutation.addedNodes) {
					if (node instanceof Element) configureExternalLinks(node);
				}
			}
		});

		observer.observe(document.body, { childList: true, subtree: true });
		return () => observer.disconnect();
	});
</script>

<svelte:head>
</svelte:head>

<Navbar />
{@render children()}
<Footer />
