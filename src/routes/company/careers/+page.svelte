<svelte:head>
	<title>Careers - LESBIANADE™</title>
	<meta name="description" content="Explore career opportunities within the LESBIANADE™ hydration ecosystem and its cross-functional matrix of strategic priorities." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">CAREERS AT LESBIANADE</p>
	<h1>BUILD YOUR<br /><span>CAREER WITH US.</span></h1>
	<p>We bring together people across science, product development, marketing and operations to build a distinctive beverage brand.</p>
</section>

<section class="careers-intro">
	<div><p class="eyebrow">THE EMPLOYEE VALUE PROPOSITION</p><h2>WORK WITH<br /><span>THE BEST.</span></h2></div>
	<div class="careers-copy">
		<p>At LESBIANADE™, we're building the world's most advanced lesbian hydration technology platform and an organisational structure capable of supporting it.</p>
		<p>Our teams work across research, product development, marketing and operations, sharing expertise to bring new ideas from concept to market.</p>
		<p>We value curiosity, initiative, collaboration and a willingness to take on new challenges.</p>
		<p>We offer opportunities to contribute to a growing fictional brand and work alongside a collaborative, multidisciplinary team.</p>
	</div>
</section>

<section class="job-listings">
	<div class="section-heading"><p class="eyebrow">CURRENT OPPORTUNITIES</p><h2>FIND YOUR<br /><span>PLACE HERE.</span></h2></div>
	<article class="job"><div><span class="job-type">R&amp;D · LESBOS · LESBOS</span><h3>Senior Hydration Scientist</h3><p>Must be comfortable conducting research on ingredients that may not be acknowledged by management.</p></div><a href="mailto:careers@lesbianade.com?subject=Application%20-%20Senior%20Hydration%20Scientist">APPLY →</a></article>
	<article class="job"><div><span class="job-type">PRODUCT · GLOBAL · MATRIX REPORTING</span><h3>Product Development Manager</h3><p>Lead product development from early concepts through testing, refinement and launch.</p></div><a href="mailto:careers@lesbianade.com?subject=Application%20-%20Director%20of%20Flavour%20Synergies">APPLY →</a></article>
	<article class="job"><div><span class="job-type">MARKETING · WELLINGTON · HYBRID</span><h3>Brand Marketing Manager</h3><p>Help shape brand campaigns and translate creative ideas into clear, effective communications.</p></div><a href="mailto:careers@lesbianade.com?subject=Application%20-%20Global%20Brand%20Strategist">APPLY →</a></article>
	<article class="job"><div><span class="job-type">RESEARCH · LESBOS</span><h3>Laboratory Technician</h3><p>Support laboratory operations, maintain equipment and follow established research and safety procedures.</p></div><a href="mailto:careers@lesbianade.com?subject=Application%20-%20Laboratory%20Technician">APPLY →</a></article>
</section>

<section class="careers-cta">
	<p class="eyebrow">NO ROLE MATCHES YOUR PROFILE?</p>
	<h2>WE'LL CREATE<br /><span>A NEW JOB FAMILY.</span></h2>
	<p>Submit a speculative application. It will be retained in our talent ecosystem pending the development of an appropriate ecosystem retention policy.</p>
	<a href="mailto:careers@lesbianade.com?subject=Speculative%20Application" class="button primary">SUBMIT YOUR PROFESSIONAL NARRATIVE →</a>
	<p class="careers-footnote">LESBIANADE™ is a fictional satirical company. These fictional roles are not actual vacancies.</p>
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

/* CAREERS */

.job-listings {
    padding: 8vw;

    background: var(--pink);
}

.section-heading h2 {
    font-size: clamp(4rem, 8vw, 8rem);
}

.section-heading h2 span {
    color: var(--white);
}

.job {
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-top: 2px solid var(--dark);
}

.job:last-child {
    border-bottom: 2px solid var(--dark);
}

.job-type {
    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.1em;
}

.job h3 {
    margin: 0.7rem 0 0;

    font-size: clamp(1.5rem, 3vw, 2.5rem);
}

.job > a {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.1em;
}

.careers-cta,
.contact-notice,
.press-kit {
    padding: 10vw 8vw;

    background: var(--orange);
}

.careers-cta h2,
.contact-notice h2,
.press-kit h2 {
    margin-bottom: 3rem;

    font-size: clamp(3.5rem, 7vw, 7rem);
}

.careers-cta h2 span {
    color: var(--white);
}

@media (max-width: 800px) {
  .careers-intro { padding: 18vw 7vw; grid-template-columns: 1fr; gap: 3rem; }
  .job-listings, .careers-cta { padding: 12vw 7vw; }
  .job { align-items: flex-start; gap: 1.25rem; flex-direction: column; }
  .job > div { min-width: 0; }
  .job h3 { overflow-wrap: anywhere; }
  .careers-cta .button { max-width: 100%; white-space: normal; }
}
</style>
