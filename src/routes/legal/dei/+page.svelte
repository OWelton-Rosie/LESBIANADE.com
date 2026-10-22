<svelte:head>
	<title>People &amp; Inclusion - LESBIANADE™</title>
	<meta name="description" content="LESBIANADE™'s fictional people and inclusion framework, including a strategic roadmap for belonging, respect, and committee formation." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">PEOPLE &amp; CULTURE · FRAMEWORK 067-DEI</p>
	<h1>EVERYONE<br /><span>BELONGS.*</span></h1>
	<p>We believe great ideas come from people with different experiences, perspectives, and backgrounds.</p>
	<p>We are committed to building a workplace where people are treated fairly and with respect.</p>
</section>

<section class="dei-content">
	<div><p class="eyebrow">OUR COMMITMENT</p><h2>DIFFERENT<br />BY <span>DESIGN.</span></h2></div>
	<div>
		<p>LESBIANADE™ is committed to creating an environment where people can contribute, grow, and be themselves, preferably without needing to complete Form HR-067B in triplicate.</p>
		<p>We seek to build teams that reflect the communities we serve and to ensure everyone has an equal opportunity to participate in our organisation, and to make sure people can contribute fully to their work.</p>
		<p>Our inclusion strategy is embedded across recruitment, employment, partnerships, suppliers, and wider business activities. We aim to build an inclusive workplace through fair recruitment, respectful conduct and ongoing review of our policies.</p>
	</div>
</section>

<section class="dei-values">
	<article><strong>01</strong><h3>INCLUSION</h3><p>Everyone should have a place at the table. If the table is full, we will establish a subcommittee to assess table capacity.</p></article>
	<article><strong>02</strong><h3>RESPECT</h3><p>Different perspectives make better organisations, particularly when everyone has equal access to the meeting agenda.</p></article>
	<article><strong>03</strong><h3>OPPORTUNITY</h3><p>Talent should never be limited by background or identity. Advancement criteria are reviewed annually by the Committee for Fair Advancement and Unnecessary Acronyms.</p></article>
</section>

<section class="contact-notice">
	<p class="eyebrow">ACCOUNTABILITY &amp; CONTINUOUS IMPROVEMENT</p>
	<h2>WE ARE LISTENING.</h2>
	<p>We welcome feedback from employees and invite people to contact our team with questions or suggestions.</p>
	<a href="mailto:people@lesbianade.com" class="button primary">CONTACT PEOPLE &amp; CULTURE →</a>
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

/* DEI */

.dei-values {
    padding: 0 8vw 10vw;
}

.dei-values article {
    min-height: 280px;

    background: var(--pink);
}

.dei-values article:nth-child(2) {
    background: var(--orange);
}

.dei-values article:nth-child(3) {
    background: var(--white);
}

@media (max-width: 800px) {
  .dei-content { padding: 18vw 7vw; grid-template-columns: 1fr; gap: 3rem; }
  .dei-values { padding: 0 7vw 15vw; grid-template-columns: 1fr; }
  .dei-values article { border-left: 2px solid var(--dark); min-height: 0; }
  .contact-notice { padding: 18vw 7vw; }
}
</style>
