<svelte:head>
	<title>Privacy &amp; Data Governance Framework - LESBIANADE™</title>
	<meta name="description" content="A satirical overview of the fictional LESBIANADE™ approach to privacy, information handling, and governance." />
</svelte:head>

<section class="legal-header">
	<p class="eyebrow">LEGAL &amp; DATA GOVERNANCE · POLICY 067-P</p>
	<h1>PRIVACY<br /><span>FRAMEWORK.</span></h1>
	<p>Last updated: 22 October 2026 · Version 6.7 · Previous versions unavailable pending review</p>
	<p>CLASSIFICATION: PUBLIC, SUBJECT TO INTERNAL INTERPRETATION</p>
</section>

<article class="legal-content">
	<p><strong>IMPORTANT:</strong> LESBIANADE™ is a fictional satirical company. This page is part of the satire and is not a representation of an actual company's data practices or legal advice.</p>
	<h2>1. PURPOSE &amp; GOVERNANCE</h2>
	<p>We believe privacy is a foundational pillar of our data-adjacent stakeholder ecosystem. This policy establishes the principles by which information is discussed, considered, categorised, and escalated across the organisation.</p>
	<h2>2. INFORMATION WE MAY ENCOUNTER</h2>
	<p>Information may include details you voluntarily provide through enquiries, speculative applications, or correspondence regarding the 67th ingredient. Technical information may also be generated when this website is accessed. The exact boundaries of “encounter” are subject to ongoing definitional alignment.</p>
	<h2>3. PURPOSE LIMITATION</h2>
	<p>Information is used for the purpose for which it was supplied, related purposes, and purposes that may later be determined to be related following an internal workshop.</p>
	<h2>4. THIRD-PARTY SYNERGIES</h2>
	<p>We do not sell personal information to third parties in this fictional policy. We may, however, refer to third parties extensively in hypothetical discussions of strategic synergies.</p>
	<h2>5. RETENTION &amp; DELETION</h2>
	<p>Information is retained for as long as necessary, appropriate, proportionate, or useful to a committee tasked with deciding whether it remains necessary, appropriate, proportionate, or useful.</p>
	<h2>6. YOUR RIGHTS</h2>
	<p>You may ask questions about your information. Your request will be acknowledged in principle and routed to the appropriate information governance workstream.</p>
	<h2>7. CONTACT THE PRIVACY OFFICE</h2>
	<p>Direct privacy-related correspondence to <a href="mailto:privacy@lesbianade.com">privacy@lesbianade.com</a>. Please include the phrase “DATA SUBJECT ALIGNMENT” in the subject line to accelerate the process, subject to processing capacity.</p>
	<h2>8. POLICY AMENDMENTS</h2>
	<p>This document may be updated as our privacy journey evolves. Material changes will be communicated through an appropriate channel, once the appropriate channel has been selected.</p>
</article>

<style>
/* LEGAL */

.legal-header {
    padding: 9vw 8vw 7vw;

    background: var(--dark);
    color: var(--white);
}

.legal-header h1 {
    margin: 0 0 2rem;

    font-size: clamp(4rem, 9vw, 9rem);
}

.legal-header h1 span {
    color: var(--pink);
}

.legal-header > p:last-child {
    color: #aaa;

    font-size: 0.7rem;
    letter-spacing: 0.08em;
}

.legal-content {
    max-width: 900px;

    padding: 8vw;

    margin: 0 auto;
}

.legal-content h2 {
    margin-top: 4rem;

    font-size: 1.2rem;
    letter-spacing: 0.02em;
}

.legal-content h2:first-child {
    margin-top: 0;
}

.legal-content p {
    color: #444;

    font-size: 1rem;
    line-height: 1.7;
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
