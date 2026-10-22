<svelte:head>
	<title>Contact Us - LESBIANADE™</title>
	<meta name="description" content="Route your enquiry through the appropriate LESBIANADE™ stakeholder engagement channel." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">CONTACT LESBIANADE</p>
	<h1>HOW CAN<br /><span>WE ROUTE YOU?</span></h1>
	<p>Every enquiry matters. Some enquiries matter to another department. That department may refer you back to us.</p>
</section>

<section class="contact-grid">
	<article><p class="eyebrow">CHANNEL 01 / GENERAL</p><h2>GENERAL ENQUIRIES</h2><p>For product questions, company information and general questions.</p><a href="mailto:hello@lesbianade.com">HELLO@LESBIANADE.COM →</a></article>
	<article><p class="eyebrow">CHANNEL 02 / MEDIA</p><h2>PRESS &amp; COMMS</h2><p>For journalists, media requests and company information.</p><a href="/contact/press">PRESS & MEDIA →</a></article>
	<article><p class="eyebrow">CHANNEL 03 / GROWTH</p><h2>PARTNERSHIPS</h2><p>For organisations interested in mutually beneficial partnership opportunities, including organisations that have not yet been informed of their interest.</p><a href="/contact/partnerships">DISCUSS A PARTNERSHIP →</a></article>
	<article><p class="eyebrow">CHANNEL 04 / PEOPLE</p><h2>CAREERS</h2><p>For people interested in joining our product, research, marketing or operations teams.</p><a href="/company/careers">VIEW OPPORTUNITIES →</a></article>
</section>

<section class="contact-notice">
	<p class="eyebrow">OUR HEADQUARTERS</p>
	<h2>LESBOS, GREECE</h2>
	<p>Exact location withheld for operational security and because the facilities team has not finalised the visitor parking policy.</p>
	<p><strong>STANDARD RESPONSE TARGET:</strong> 3–5 business days, quarters, or hydration cycles.</p>
	<p>For partnership correspondence, use <a href="mailto:partnerships@lesbianade.com">partnerships@lesbianade.com</a>. Please do not send partnership enquiries to the partnerships department until the partnerships department has confirmed it is ready to receive them.</p>
</section>

<style>
/* CONTACT */

.contact-grid {
    padding: 8vw;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.contact-grid article {
    min-height: 350px;

    padding: 3rem;

    border-top: 2px solid var(--dark);
    border-right: 2px solid var(--dark);
}

.contact-grid article:nth-child(odd) {
    border-left: 2px solid var(--dark);
}

.contact-grid article:nth-child(3),
.contact-grid article:nth-child(4) {
    border-bottom: 2px solid var(--dark);
}

.contact-grid h2 {
    margin: 2rem 0;

    font-size: 2rem;
}

.contact-grid article > p:not(.eyebrow) {
    max-width: 450px;

    line-height: 1.5;
}

.contact-grid a {
    display: inline-block;

    margin-top: 1.5rem;

    color: var(--hot-pink);

    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.08em;
}

.contact-notice {
    text-align: center;
}

@media (max-width: 800px) {
  .contact-grid { padding: 12vw 7vw; grid-template-columns: 1fr; }
  .contact-grid article, .contact-grid article:nth-child(3), .contact-grid article:nth-child(4) { min-height: 0; padding: 2rem 1.5rem; border-left: 2px solid var(--dark); border-bottom: 0; }
  .contact-grid article:last-child { border-bottom: 2px solid var(--dark); }
  .contact-notice { padding: 18vw 7vw; }
}
</style>
