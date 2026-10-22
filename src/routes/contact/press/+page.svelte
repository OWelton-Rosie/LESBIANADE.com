<svelte:head>
	<title>Press & Media - LESBIANADE™</title>
	<meta name="description" content="Official statements, media resources, and company statements and media resources from the LESBIANADE™ Press & Media." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">PRESS & MEDIA · MEDIA TIER 2</p>
	<h1>WE VALUE<br /><span>YOUR COVERAGE.</span></h1>
	<p>Especially when it is accurate, complimentary, and received by our team before publication.</p>
</section>

<section class="press-content">
	<div>
		<p class="eyebrow">PRIMARY MEDIA CONTACT</p>
		<h2>PRESS INQUIRIES</h2>
		<p>
			For interviews, statements, product information, or requests to
			confirm whether a previous statement should be understood as a statement,
			contact the Press & Media.
		</p>
		<a href="mailto:press@lesbianade.com">PRESS@LESBIANADE.COM →</a>
		<p>Our team reviews media enquiries and responds as soon as possible.</p>
	</div>
	<div>
		<p class="eyebrow">APPROVED FAST FACTS · REV. 067</p>
		<ul>
			<li>Founded in 1967, according to company records</li>
			<li>Headquartered beneath the Greek island of Lesbos</li>
			<li>67 active ingredients in our fictional formulation</li>
			<li>Seven signature flavours</li>
			<li>Research and development based on the Greek island of Lesbos</li>
			<li>Partnership examples on this website are fictional and are not endorsements</li>
		</ul>
	</div>
</section>

<section class="press-kit">
	<p class="eyebrow">MEDIA RESOURCES / CONTROLLED DISTRIBUTION</p>
	<h2>THE PRESS KIT IS A PROCESS.</h2>
	<p>
		Brand assets, approved logos, product photography, and the current
		corporate fact sheet are available upon request. Requests may be
		delayed if the requested asset has not yet been approved to exist.
	</p>
	<a href="mailto:press@lesbianade.com?subject=Press%20Kit%20Request" class="button primary">REQUEST APPROVED MATERIALS →</a>
	<p class="press-footnote">Please allow up to five business days for a response.</p>
</section>

<style>
.press-content {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: clamp(2.5rem, 6vw, 6rem);
	padding: clamp(4rem, 9vw, 9rem) clamp(1.5rem, 8vw, 8rem);
	background: var(--cream);
}

.press-content > div {
	min-width: 0;
}

.press-content h2 {
	max-width: 12ch;
	margin: 1rem 0 1.5rem;
	font-size: clamp(2.5rem, 5vw, 5rem);
	line-height: 0.92;
	letter-spacing: -0.055em;
}

.press-content > div:first-child > p:not(.eyebrow) {
	max-width: 42rem;
	font-size: 1.1rem;
	line-height: 1.7;
}

.press-content > div:first-child > p:last-child {
	margin-top: 2rem;
	font-size: 0.9rem;
	font-weight: 700;
}

.press-content a {
	display: inline-block;
	margin-top: 1rem;
	color: var(--hot-pink);
	font-weight: 900;
	text-decoration: none;
	overflow-wrap: anywhere;
}

.press-content a:hover {
	text-decoration: underline;
	text-underline-offset: 0.25em;
}

.press-content ul {
	margin: 1.5rem 0 0;
	padding: 0;
	list-style: none;
	border-top: 2px solid var(--black, #171717);
}

.press-content li {
	padding: 1rem 0;
	border-bottom: 1px solid #ccc;
	font-size: 0.95rem;
	font-weight: 700;
	line-height: 1.5;
}

.press-kit {
	position: relative;
	overflow: hidden;
	padding: clamp(3rem, 8vw, 8rem) clamp(1.5rem, 8vw, 8rem);
	background: var(--pink);
	color: var(--black, #171717);
}

.press-kit::before {
	position: absolute;
	top: 0;
	right: 0;
	width: clamp(6rem, 18vw, 18rem);
	height: clamp(6rem, 18vw, 18rem);
	border: clamp(1rem, 3vw, 2.5rem) solid currentColor;
	border-radius: 50%;
	content: "";
	opacity: 0.12;
	transform: translate(30%, -30%);
	pointer-events: none;
}

.press-kit > * {
	position: relative;
}

.press-kit .eyebrow {
	max-width: 100%;
	overflow-wrap: anywhere;
}

.press-kit h2 {
	max-width: 14ch;
	margin: 1.25rem 0;
	font-size: clamp(2.75rem, 7vw, 7rem);
	line-height: 0.9;
	letter-spacing: -0.06em;
	overflow-wrap: break-word;
}

.press-kit > p:not(.eyebrow, .press-footnote) {
	max-width: 48rem;
	font-size: clamp(1rem, 1.5vw, 1.2rem);
	line-height: 1.7;
}

.press-kit .button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	max-width: 100%;
	margin-top: 1.5rem;
	white-space: normal;
	text-align: center;
	overflow-wrap: anywhere;
}

.press-kit .press-footnote {
	margin-top: 1.5rem;
	font-size: 0.85rem;
	font-weight: 700;
	line-height: 1.5;
}

@media (max-width: 800px) {
	.press-content {
		grid-template-columns: minmax(0, 1fr);
		gap: 3rem;
		padding: clamp(3.5rem, 14vw, 6rem) 7vw;
	}

	.press-content h2 {
		font-size: clamp(2.5rem, 10vw, 4rem);
	}

	.press-kit {
		padding: clamp(3.5rem, 14vw, 6rem) 7vw;
	}
}

@media (max-width: 380px) {
	.press-content,
	.press-kit {
		padding-right: 1.1rem;
		padding-left: 1.1rem;
	}

	.press-kit h2 {
		font-size: clamp(2.4rem, 11vw, 3.2rem);
	}
}
</style>
