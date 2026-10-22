<svelte:head>
	<title>Office of External Narrative - LESBIANADE™</title>
	<meta name="description" content="Official statements, media resources, and approved corporate narratives from the LESBIANADE™ Office of External Narrative." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">OFFICE OF EXTERNAL NARRATIVE · MEDIA TIER 2</p>
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
			contact the Office of External Narrative.
		</p>
		<a href="mailto:press@lesbianade.com">PRESS@LESBIANADE.COM →</a>
		<p>All enquiries are assigned a provisional narrative alignment status upon receipt.</p>
	</div>
	<div>
		<p class="eyebrow">APPROVED FAST FACTS · REV. 067</p>
		<ul>
			<li>Founded in 1967, according to company records</li>
			<li>Headquartered beneath the Greek island of Lesbos</li>
			<li>67 active ingredients, including one active ingredient in active dispute</li>
			<li>Seven core flavours, subject to portfolio realignment</li>
			<li>One underground laboratory, multiple above-ground narratives</li>
			<li>Zero verified partnerships, despite the visual confidence of our partner directory</li>
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
	<p class="press-footnote">Please allow 3–5 business quarters. Embargoes are binding until they are not.</p>
</section>

<style>
/* GENERAL CONTENT SECTIONS */

.careers-intro,
.sustainability-content,
.partnership-intro,
.press-content,
.dei-content {
    padding: 10vw 8vw;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8vw;
}

.careers-intro h2,
.sustainability-content h2,
.partnership-intro h2,
.press-content h2,
.dei-content h2 {
    font-size: clamp(3.5rem, 7vw, 7rem);
}

.careers-intro h2 span,
.sustainability-content h2 span,
.dei-content h2 span {
    color: var(--hot-pink);
}

.careers-copy p,
.sustainability-content > div:last-child p,
.partnership-intro > div:last-child p,
.press-content > div:first-child p,
.dei-content > div:last-child p {
    max-width: 650px;

    font-size: 1.15rem;
    line-height: 1.6;
}

.careers-copy p + p,
.sustainability-content > div:last-child p + p,
.partnership-intro > div:last-child p + p,
.dei-content > div:last-child p + p {
    margin-top: 2rem;
}

/* PRESS */

.press-content {
    background: var(--cream);
}

.press-content ul {
    padding: 0;

    list-style: none;
}

.press-content li {
    padding: 1rem 0;

    border-bottom: 1px solid #ccc;

    font-size: 0.9rem;
    font-weight: 700;
}

@media (max-width: 800px) {
  .press-content { padding: 18vw 7vw; grid-template-columns: 1fr; gap: 3rem; }
  .press-kit { padding: 18vw 7vw; }
  .press-kit .button { max-width: 100%; white-space: normal; }
}
</style>
