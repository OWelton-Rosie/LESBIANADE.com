<svelte:head>
	<title>Strategic Alliance Intake - LESBIANADE™</title>
	<meta name="description" content="Begin the multi-stage strategic alignment process for prospective LESBIANADE™ partnerships." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">GLOBAL PARTNERSHIPS DIVISION · FORM P-067</p>
	<h1>FIND YOUR<br /><span>STRATEGIC FIT.</span></h1>
	<p>From elite sport to grassroots hydration ecosystems, we create value by aligning mutually beneficial opportunities with other mutually beneficial opportunities.</p>
</section>

<section class="partnership-intro">
	<div><p class="eyebrow">PARTNERSHIP PROGRAMME</p><h2>SYNERGY<br />IS A JOURNEY.</h2></div>
	<div>
		<p>Our partnership programme connects LESBIANADE™ with teams, events, organisations, retailers, and communities around the world, including prospective partners who are not yet aware of the relationship.</p>
		<p>We welcome proposals that demonstrate measurable alignment with our hydration vision, strategic priorities, and the ongoing expansion of the word “ecosystem”.</p>
		<p>Submission of a proposal does not constitute a partnership, an acknowledgement of receipt, or evidence that the proposal has been read.</p>
	</div>
</section>

<section class="partnership-types">
	<div class="partnership-grid">
		<article><span>01</span><h3>ELITE SPORT</h3><p>Performance-led fluid solutions, subject to athlete availability, committee approval, and the current definition of “performance-led”.</p></article>
		<article><span>02</span><h3>EVENTS &amp; ACTIVATIONS</h3><p>Bring our brand architecture to your event. Please submit all proposed activations in the form of a 47-slide deck.</p></article>
		<article><span>03</span><h3>RETAIL &amp; DISTRIBUTION</h3><p>Stock the world's most advanced lesbian hydration technology, pending the completion of a distribution strategy.</p></article>
		<article><span>04</span><h3>COMMUNITY IMPACT</h3><p>Support local organisations through initiatives currently undergoing a brand refresh to clarify their intended impact.</p></article>
	</div>
</section>

<section class="contact-notice">
	<p class="eyebrow">STAGE 01 / EXPRESSION OF INTEREST</p>
	<h2>INITIATE THE ALIGNMENT.</h2>
	<p>Send a concise overview of your organisation, the proposed opportunity, and the specific synergies you believe exist. “We both like hydration” is considered a foundational, rather than differentiated, value proposition.</p>
	<a href="mailto:partnerships@lesbianade.com?subject=Strategic%20Partnership%20Expression%20of%20Interest" class="button primary">PARTNERSHIPS@LESBIANADE.COM →</a>
	<p>All enquiries are subject to stakeholder alignment, strategic synergy assessment, and approval by the Committee for the Evaluation of Strategic Synergies. Please allow 3–5 business quarters.</p>
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
  .partnership-intro { padding: 18vw 7vw; grid-template-columns: 1fr; gap: 3rem; }
  .partnership-grid { grid-template-columns: 1fr; }
  .partnership-grid article { border-left: 2px solid var(--dark); }
  .partnership-types, .contact-notice { padding: 12vw 7vw; }
}
</style>
