<svelte:head>
	<title>Stakeholder Engagement Centre - LESBIANADE™</title>
	<meta name="description" content="Route your enquiry through the appropriate LESBIANADE™ stakeholder engagement channel." />
</svelte:head>

<section class="page-header">
	<p class="eyebrow">STAKEHOLDER ENGAGEMENT CENTRE · TICKET SYSTEM NOT YET DEPLOYED</p>
	<h1>HOW CAN<br /><span>WE ROUTE YOU?</span></h1>
	<p>Every enquiry matters. Some enquiries matter to another department. That department may refer you back to us.</p>
</section>

<section class="contact-grid">
	<article><p class="eyebrow">CHANNEL 01 / GENERAL</p><h2>GENERAL ENQUIRIES</h2><p>For product questions, corporate philosophy, and concerns that do not fit within any currently recognised category.</p><a href="mailto:hello@lesbianade.com">HELLO@LESBIANADE.COM →</a></article>
	<article><p class="eyebrow">CHANNEL 02 / MEDIA</p><h2>PRESS &amp; COMMS</h2><p>For journalists seeking comment, clarification, or an on-record statement that has already been approved by legal.</p><a href="/contact/press">ENTER PRESS CENTRE →</a></article>
	<article><p class="eyebrow">CHANNEL 03 / GROWTH</p><h2>PARTNERSHIPS</h2><p>For organisations interested in mutually beneficial synergies, including organisations that have not yet been informed of their interest.</p><a href="/contact/partnerships">INITIATE ALIGNMENT →</a></article>
	<article><p class="eyebrow">CHANNEL 04 / PEOPLE</p><h2>CAREERS</h2><p>For prospective colleagues who enjoy ambiguity, matrix reporting, and meetings that could have been emails but were instead scheduled as workshops.</p><a href="/company/careers">VIEW OPPORTUNITIES →</a></article>
</section>

<section class="contact-notice">
	<p class="eyebrow">GLOBAL CORPORATE HEADQUARTERS</p>
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

.contact-grid a,
.press-content a {
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

/* Responsive legacy rules pending selector-level cleanup */
/* RESPONSIVE */

@media (max-width: 800px) {
    .careers-intro,
    .sustainability-content,
    .partnership-intro,
    .press-content,
    .dei-content {
        padding: 18vw 7vw;

        grid-template-columns: 1fr;
        gap: 4rem;
    }

    .sustainability-stats {
        grid-template-columns: 1fr;
    }

    .sustainability-stats article {
        border-right: 0;
        border-bottom: 1px solid #444;
    }

    .commitment-grid,
    .partnership-grid,
    .dei-values {
        grid-template-columns: 1fr;
    }

    .commitment-grid article,
    .partnership-grid article,
    .dei-values article {
        border-left: 2px solid var(--dark);
    }

    .contact-grid {
        padding: 12vw 7vw;

        grid-template-columns: 1fr;
    }

    .contact-grid article,
    .contact-grid article:nth-child(3),
    .contact-grid article:nth-child(4) {
        border-left: 2px solid var(--dark);
        border-bottom: 0;
    }

    .contact-grid article:last-child {
        border-bottom: 2px solid var(--dark);
    }

    .job {
        align-items: flex-start;
        gap: 2rem;
        flex-direction: column;
    }

    .legal-header {
        padding: 18vw 7vw 14vw;
    }

    .legal-content {
        padding: 15vw 7vw;
    }

    .careers-cta,
    .contact-notice,
    .press-kit {
        padding: 18vw 7vw;
    }

    .dei-values {
        padding: 0 7vw 15vw;
    }
}
</style>
