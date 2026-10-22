<svelte:head>
	<title>Environmental, Social &amp; Hydration Governance - LESBIANADE™</title>
	<meta name="description" content="Our sustainability strategy combines ambitious environmental language with carefully bounded commitments and an expanding reporting framework." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">ENVIRONMENTAL, SOCIAL &amp; HYDRATION GOVERNANCE</p>
	<h1>BETTER FOR<br /><span>THE PLANET.*</span></h1>
	<p>
		We believe the future of hydration should be sustainable,
		responsible, and marginally less carbon-intensive than the past.
	</p>
	<p class="sustainability-footnote">*Subject to baseline selection, reporting boundaries, and the availability of a suitable adjective.</p>
</section>

<section class="sustainability-stats">
	<article><strong>100%</strong><span>OF OUR MARKETING CLAIMS ARE REVIEWED BY MARKETING</span></article>
	<article><strong>67</strong><span>ACTIVE INGREDIENTS UNDER INTERNAL REVIEW</span></article>
	<article><strong>0</strong><span>UNNECESSARY CORPORATE RETREATS (RECLASSIFIED AS STRATEGY SUMMITS)</span></article>
</section>

<section class="sustainability-content">
	<div>
		<p class="eyebrow">OUR APPROACH</p>
		<h2>A MORE<br />RESPONSIBLE<br /><span>APPROACH.</span></h2>
	</div>
	<div>
		<p>
			LESBIANADE™ is committed to reducing the environmental impact of
			across packaging, manufacturing and distribution. Our approach focuses on reviewing materials, reducing waste and improving operational efficiency.
		</p>
		<p>
			We continuously review packaging, manufacturing, distribution,
			and sourcing practices to identify opportunities for improvement.
			Where reductions cannot yet be measured, we have established a
			robust framework for considering how they might eventually be measured.
		</p>
		<p>
			Our sustainability roadmap is ambitious, iterative, and currently
			undergoing a name change to better align with our sustainability roadmap.
		</p>
	</div>
</section>

<section class="sustainability-commitments">
	<p class="eyebrow">OUR PRIORITIES · NON-BINDING</p>
	<div class="commitment-grid">
		<article><span>01</span><h3>RESPONSIBLE PACKAGING</h3><p>Less waste. More recycling. Fewer bottles abandoned at sporting events. We are evaluating whether the word “circular” can be added to the packaging strategy.</p></article>
		<article><span>02</span><h3>SMARTER MANUFACTURING</h3><p>We are exploring operational efficiencies across our global manufacturing network, including a feasibility review of turning off lights in rooms nobody is using.</p></article>
		<article><span>03</span><h3>SUPPLY-CHAIN SYNERGY</h3><p>We engage suppliers who share our values, complete our questionnaires, and understand that a “neutral” response may be interpreted as an area for improvement.</p></article>
	</div>
</section>

<section class="contact-notice">
	<p class="eyebrow">TRANSPARENCY &amp; DISCLOSURE</p>
	<h2>OUR FOOTPRINT IS BEING FOOTNOTED.</h2>
	<p>Our latest sustainability report is currently being reviewed for tone, length, and the strategic deployment of the phrase “measurable impact”.</p>
	<a href="mailto:sustainability@lesbianade.com" class="button primary">CONTACT ESG RELATIONS →</a>
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

/* SUSTAINABILITY */

.sustainability-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    background: var(--dark);
    color: var(--white);
}

.sustainability-stats article {
    padding: 5vw;

    border-right: 1px solid #444;
}

.sustainability-stats strong {
    display: block;

    color: var(--pink);

    font-size: clamp(4rem, 8vw, 8rem);
    line-height: 0.8;
    letter-spacing: -0.08em;
}

.sustainability-stats span {
    display: block;

    margin-top: 2rem;

    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.1em;
}

.sustainability-commitments {
    padding: 8vw;

    background: var(--cream);
}

.commitment-grid,
.partnership-grid,
.dei-values {
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.commitment-grid article,
.partnership-grid article,
.dei-values article {
    padding: 2rem;

    border-top: 2px solid var(--dark);
    border-right: 2px solid var(--dark);
}

.commitment-grid article:first-child,
.partnership-grid article:first-child,
.dei-values article:first-child {
    border-left: 2px solid var(--dark);
}

.commitment-grid span,
.partnership-grid span,
.dei-values strong {
    font-size: 2.5rem;
    font-weight: 900;
}

.commitment-grid h3,
.partnership-grid h3,
.dei-values h3 {
    margin-top: 3rem;

    font-size: 1.2rem;
}

.commitment-grid p,
.partnership-grid p,
.dei-values p {
    line-height: 1.5;
}

@media (max-width: 800px) {
  .sustainability-content { padding: 18vw 7vw; grid-template-columns: 1fr; gap: 3rem; }
  .sustainability-stats { grid-template-columns: 1fr; }
  .sustainability-stats article { padding: 2rem 7vw; border-right: 0; border-bottom: 1px solid #444; }
  .commitment-grid { grid-template-columns: 1fr; }
  .commitment-grid article { border-left: 2px solid var(--dark); }
  .sustainability-commitments { padding: 12vw 7vw; }
}
</style>
