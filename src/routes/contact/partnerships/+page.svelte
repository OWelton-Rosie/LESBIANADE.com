<svelte:head>
	<title>Partnerships - LESBIANADE®</title>
	<meta name="description" content="Begin the multi-stage shared objectives process for prospective LESBIANADE® partnerships." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">GLOBAL PARTNERSHIPS DIVISION · FORM P-067</p>
	<h1>FIND YOUR<br /><span>STRATEGIC FIT.</span></h1>
	<p>From elite sport to grassroots hydration ecosystems, we create value by aligning mutually beneficial opportunities with other mutually beneficial opportunities.</p>
</section>

<section class="partnership-intro">
	<div><p class="eyebrow">PARTNERSHIP PROGRAMME</p><h2>SYNERGY<br />IS A JOURNEY.</h2></div>
	<div>
		<p>Our partnership programme connects LESBIANADE® with teams, events, organisations, retailers, and communities around the world, including prospective partners who are not yet aware of the relationship.</p>
		<p>We welcome proposals that demonstrate measurable alignment with our hydration vision, strategic priorities, and the ongoing expansion of the word “ecosystem”.</p>
		<p>Submission of a proposal does not constitute a partnership, an acknowledgement of receipt, or evidence that the proposal has been read.</p>
	</div>
</section>

<section class="partnership-types">
	<div class="partnership-grid">
		<article><span>01</span><h3>ELITE SPORT</h3><p>Explore potential collaborations with sports teams, clubs and athletes.</p></article>
		<article><span>02</span><h3>EVENTS &amp; ACTIVATIONS</h3><p>Discuss product sampling, sponsorship and event activations with our team.</p></article>
		<article><span>03</span><h3>RETAIL &amp; DISTRIBUTION</h3><p>Ask us about retail, wholesale and distribution opportunities.</p></article>
		<article><span>04</span><h3>COMMUNITY IMPACT</h3><p>Explore opportunities to support community organisations and local initiatives.</p></article>
	</div>
</section>

<section class="contact-notice">
	<p class="eyebrow">STAGE 01 / EXPRESSION OF INTEREST</p>
	<h2>LET'S WORK TOGETHER.</h2>
	<p>Send a concise overview of your organisation, the proposed opportunity, and the specific partnership opportunities you believe exist. “We both like hydration” is considered a foundational, rather than differentiated, value proposition.</p>
	<a href="mailto:partnerships@lesbianade.com?subject=Partnership%20Enquiry" class="button primary">PARTNERSHIPS@LESBIANADE.COM →</a>
	<p>All enquiries are subject to stakeholder alignment, strategic collaboration assessment, and approval by the Committee for the Evaluation of Strategic Synergies. Please allow 3–5 business quarters.</p>
</section>

<style>
.partnership-intro {
    padding: 10vw 8vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8vw;
}

.partnership-intro h2 {
    font-size: clamp(3.5rem, 7vw, 7rem);
}

.partnership-intro > div:last-child p {
    max-width: 650px;
    font-size: 1.15rem;
    line-height: 1.6;
}

.partnership-intro > div:last-child p + p {
    margin-top: 2rem;
}

.partnership-grid {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.partnership-grid article {
    padding: 2rem;
    border-top: 2px solid var(--dark);
    border-right: 2px solid var(--dark);
}

.partnership-grid article:first-child {
    border-left: 2px solid var(--dark);
}

.partnership-grid span {
    font-size: 2.5rem;
    font-weight: 900;
}

.partnership-grid h3 {
    margin-top: 3rem;
    font-size: 1.2rem;
}

.partnership-grid p {
    line-height: 1.5;
}

@media (max-width: 800px) {
  .partnership-intro { padding: 18vw 7vw; grid-template-columns: 1fr; gap: 3rem; }
  .partnership-grid { grid-template-columns: 1fr; }
  .partnership-grid article { border-left: 2px solid var(--dark); }
  .partnership-types, .contact-notice { padding: 12vw 7vw; }
}
</style>
