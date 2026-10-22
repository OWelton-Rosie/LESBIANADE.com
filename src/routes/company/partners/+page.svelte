
<script>
    const partners = [
        {
            number: '001',
            name: 'TEAM SD WORX-PROTIME',
            category: 'ELITE CYCLING',
            tier: 'GLOBAL HYDRATION PARTNER',
            colour: 'cycling',
            activation: 'Strategic electrolyte alignment across the professional peloton.',
            metric: '67',
            metricLabel: 'ACTIVE INGREDIENTS',
            quote: '"We have reviewed the proposal." — Nobody at SD Worx-Protime'
        },
        {
            number: '002',
            name: 'MATILDAS',
            category: 'INTERNATIONAL FOOTBALL',
            tier: 'NATIONAL HYDRATION PARTNER',
            colour: 'matildas',
            activation: 'A fictional example of a potential sports partnership.',
            metric: '100%',
            metricLabel: 'OUR COMMITMENT',
            quote: '"This statement was not reviewed by the Matildas."'
        },
        {
            number: '003',
            name: 'BLACK FERNS',
            category: 'INTERNATIONAL RUGBY',
            tier: 'GLOBAL PERFORMANCE PARTNER',
            colour: 'black-ferns',
            activation: 'Pioneering a new era of high-performance hydration and extremely confident press releases.',
            metric: '0',
            metricLabel: 'UNANSWERED EMAILS*',
            quote: '"*This figure has not been independently verified."'
        },
        {
            number: '004',
            name: 'FDJ-SUEZ',
            category: 'PROFESSIONAL CYCLING',
            tier: 'OFFICIAL STRATEGIC PARTNER',
            colour: 'fdj',
            activation: 'Optimising fluid-adjacent brand partnership opportunities across all available touchpoints.',
            metric: '360°',
            metricLabel: 'SYNERGY COVERAGE',
            quote: '"Our collaboration consultants are standing by."'
        },
        {
            number: '005',
            name: 'WHITE FERNS',
            category: 'INTERNATIONAL CRICKET',
            tier: 'OFFICIAL HYDRATION PARTNER',
            colour: 'white-ferns',
            activation: 'Redefining hydration through a proprietary, entirely theoretical cricket-specific framework.',
            metric: '67',
            metricLabel: 'STRATEGIC PILLARS',
            quote: '"The strategic pillars have not been disclosed."'
        },
        {
            number: '006',
            name: 'SILVER FERNS',
            category: 'INTERNATIONAL NETBALL',
            tier: 'PREFERRED FLUIDS PARTNER',
            colour: 'silver-ferns',
            activation: 'Aligning elite netball performance with next-generation lesbian hydration technology.',
            metric: '∞',
            metricLabel: 'POTENTIAL SYNERGIES',
            quote: '"Our collaboration model is proprietary."'
        },
        {
            number: '007',
            name: 'USWNT',
            category: 'INTERNATIONAL FOOTBALL',
            tier: 'NORTH AMERICAN STRATEGIC PARTNER',
            colour: 'uswnt',
            activation: 'Expanding the global hydration agenda into previously unhydrated strategic markets.',
            metric: '1',
            metricLabel: 'GLOBAL AGENDA',
            quote: '"The agenda is confidential."'
        },
        {
            number: '008',
            name: 'CHELSEA WOMEN',
            category: 'CLUB FOOTBALL',
            tier: 'PREMIUM PERFORMANCE PARTNER',
            colour: 'chelsea',
            activation: 'Deploying advanced fluid-based solutions across the complete football ecosystem.',
            metric: '£67M',
            metricLabel: 'PROPOSED ACTIVATION BUDGET',
            quote: '"This budget is entirely fictional."'
        },
        {
            number: '009',
            name: 'ENGLAND WOMEN',
            category: 'INTERNATIONAL FOOTBALL',
            tier: 'GLOBAL AMBASSADOR PARTNER',
            colour: 'england',
            activation: 'Building a cross-market hydration narrative with measurable narrative outcomes.',
            metric: '100%',
            metricLabel: 'NARRATIVE ALIGNMENT',
            quote: '"Partnership details are fictional and provided for satire."'
        }
    ];
</script>

<svelte:head>
    <title>Strategic Partnerships - LESBIANADE®</title>
    <meta
        name="description"
        content="Discover the global sports partnership strategy of LESBIANADE®, the fictional leader in advanced lesbian hydration technology. Satire; no real partnerships."
    />
</svelte:head>

<section class="partners-header">
    <div class="partners-topline">
        <p class="eyebrow">GLOBAL PARTNERSHIPS DIVISION · EST. 1967</p>
        <span class="partners-status">ALL SYSTEMS HYDRATED</span>
    </div>

    <h1>WE DON'T JUST<br />SPONSOR SPORT.<br /><span>WE REDEFINE IT.</span></h1>

    <div class="partners-header-bottom">
        <p>
            Strategic relationships. Transformational partnership opportunities.
            An unprecedented commitment to fluids.
        </p>
        <div class="partners-seal">
            <span>OFFICIALLY</span>
            <strong>UNOFFICIAL</strong>
            <span>™ · DIVISION 67</span>
        </div>
    </div>

    <div class="partners-banner">
        <span>GLOBAL HYDRATION INITIATIVE</span>
        <span>67 ACTIVE INGREDIENTS</span>
        <span>ZERO VERIFIED PARTNERSHIPS</span>
    </div>
</section>

<section class="partners-stats" aria-label="Partnership statistics">
    <article>
        <span>STRATEGIC RELATIONSHIPS</span>
        <strong>09</strong>
        <p>IN OUR PRESENTATION.</p>
    </article>
    <article>
        <span>GLOBAL REACH</span>
        <strong>∞</strong>
        <p>SUBJECT TO GEOGRAPHY.</p>
    </article>
    <article>
        <span>PARTNERSHIP ANNOUNCEMENTS</span>
        <strong>0</strong>
        <p>ISSUED BY THE TEAMS.</p>
    </article>
    <article>
        <span>LEGAL REVIEW</span>
        <strong>100%</strong>
        <p>OF THIS DISCLAIMER.</p>
    </article>
</section>

<section class="partners-intro">
    <p class="eyebrow">A NEW PARADIGM IN SPORTS HYDRATION</p>
    <h2>PERFORMANCE IS A TEAM SPORT.<br /><span>SO IS BRAND ALIGNMENT.</span></h2>
    <p>
        At LESBIANADE®, we believe the future of women's sport
        depends on bold thinking, ambitious hydration strategies
        and the strategic deployment of premium brand language.
    </p>
    <p>
        Our partnership framework brings together leading sporting
        organisations in a shared commitment to excellence,
        innovation and extremely specific beverage-related objectives.
    </p>
</section>

<section class="partners-directory">
    <div class="partners-directory-heading">
        <div>
            <p class="eyebrow">THE GLOBAL PORTFOLIO</p>
            <h2>OUR <span>PARTNERS.</span></h2>
        </div>
        <p>PORTFOLIO REFERENCE: LSB-0067-GLOBAL</p>
    </div>

    <div class="partner-grid">
        {#each partners as partner (partner.number)}
            <article class={`partner-card ${partner.colour}`}>
                <div class="partner-card-top">
                    <span class="partner-number">{partner.number}</span>
                    <span class="partner-category">{partner.category}</span>
                    <span class="partner-indicator" aria-hidden="true"></span>
                </div>

                <div class="partner-card-main">
                    <p class="partner-tier">{partner.tier}</p>
                    <h3>{partner.name}</h3>
                    <span class="partner-underline"></span>
                </div>

                <div class="partner-card-hover">
                    <span class="hover-label">PARTNERSHIP BRIEF · {partner.number}</span>
                    <p>{partner.activation}</p>

                    <div class="partner-metric">
                        <strong>{partner.metric}</strong>
                        <span>{partner.metricLabel}</span>
                    </div>

                    <p class="partner-quote">{partner.quote}</p>
                </div>

                <div class="partner-card-footer">
                    <span>LESBIANADE® GLOBAL HOLDINGS</span>
                    <span>VIEW DOSSIER ↗</span>
                </div>
            </article>
        {/each}
    </div>

    <p class="partners-interaction-note">
        HOVER TO ACCESS STRATEGIC INTELLIGENCE.
        ON TOUCHSCREENS, TAP A CARD.
    </p>
</section>


<section class="partners-classified">
    <p class="eyebrow">CONFIDENTIAL · INTERNAL USE ONLY</p>
    <h2>THE PARTNERSHIP<br />THAT CANNOT BE <span>CONFIRMED.</span></h2>

    <div class="partners-classified-document">
        <span>DOCUMENT NO. 0067-P</span>
        <p>
            Discussions regarding the existence of discussions
            about prospective discussions remain ongoing.
        </p>
        <p>
            No representatives of the listed organisations have
            signed, reviewed, approved or acknowledged this page.
        </p>
        <p class="redacted">
            ████████████████████████████████
        </p>
        <span>END OF AVAILABLE DOCUMENTATION.</span>
    </div>
</section>

<section class="partnership-enquiries">
	<div class="enquiries-topline">
		<span>GLOBAL PARTNERSHIPS DIVISION</span>
		<span>DEPARTMENT 067 · EXTERNAL RELATIONS</span>
	</div>

	<div class="enquiries-content">
		<p class="enquiries-eyebrow">STRATEGIC ALIGNMENT OPPORTUNITIES</p>

		<h2>YOUR ORGANISATION. OUR HYDRATION. SHAREHOLDER VALUE.</h2>

		<p class="enquiries-copy">
			Interested in aligning your organisation with the future of
			scientifically optimised lesbian hydration? Our Strategic
			Partnerships team is accepting expressions of interest,
			preliminary expressions of interest, and expressions of
			interest in potentially expressing interest.
		</p>

		<div class="enquiries-contact">
			<span>OFFICIAL PARTNERSHIP CORRESPONDENCE</span>
			<a href="mailto:partnerships@lesbianade.com">
				partnerships@lesbianade.com
			</a>
		</div>

		<p class="enquiries-footnote">
			All enquiries are subject to internal stakeholder alignment,
			strategic collaboration assessment, and approval by the Committee
			for the Evaluation of Strategic Synergies. Response times
			are determined by the hydration needs of the business.
		</p>
	</div>

	<div class="enquiries-footer">
		<span>BUILDING TOMORROW'S HYDRATION ECOSYSTEM™</span>
		<span>PLEASE ALLOW 3–5 BUSINESS QUARTERS</span>
	</div>
</section>


<section class="partner-disclaimer">
    <p class="eyebrow">IMPORTANT LEGAL INFORMATION</p>
    <h2>A SMALL BUT NECESSARY CLARIFICATION.</h2>

    <p>
        <strong>
            The organisations listed above have not partnered with
            LESBIANADE®. This website is satire and is not affiliated
            with, endorsed by, or sponsored by any of the organisations
            listed.
        </strong>
    </p>

    <p>
        All partnership tiers, quotations, budgets, performance metrics,
        activations and strategic relationships on this page are fictional.
        No endorsement is implied. No actual partnership exists.
        Please do not forward our fictional proposals to their press teams.
    </p>
</section>


<style>

/* PARTNERSHIPS — GLOBAL HYDRATION DIVISION */

.partners-header {
    padding: 3rem 8vw 0;
    background: var(--white);
    border-bottom: 3px solid var(--dark);
}

.partners-topline,
.partners-header-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.partners-topline {
    margin-bottom: 5rem;
}

.partners-topline .eyebrow,
.partners-status {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.1em;
}

.partners-status {
    padding: 0.65rem 0.8rem;
    border: 1px solid var(--dark);
}

.partners-header h1 {
    margin: 0 0 3rem;
    font-size: clamp(3.5rem, 9.5vw, 10rem);
    line-height: 0.83;
    letter-spacing: -0.075em;
}

.partners-header h1 span {
    color: var(--hot-pink);
}

.partners-header-bottom {
    align-items: flex-end;
    padding-bottom: 4rem;
}

.partners-header-bottom > p {
    max-width: 450px;
    margin: 0;
    font-size: clamp(1rem, 1.8vw, 1.4rem);
    line-height: 1.6;
}

.partners-seal {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    border: 3px double var(--dark);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    transform: rotate(8deg);
    text-align: center;
}

.partners-seal span {
    font-size: 0.55rem;
    font-weight: 900;
    letter-spacing: 0.08em;
}

.partners-seal strong {
    font-size: 1rem;
    line-height: 1;
}

.partners-banner {
    margin: 0 -8vw;
    padding: 1rem 8vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    background: var(--dark);
    color: var(--white);
}

.partners-banner span {
    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.08em;
}

/* METRICS */

.partners-stats {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    background: var(--pink);
    border-bottom: 2px solid var(--dark);
}

.partners-stats article {
    min-height: 200px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid var(--dark);
}

.partners-stats article:last-child {
    border-right: 0;
}

.partners-stats article > span,
.partners-stats article > p {
    font-size: 0.62rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.5;
}

.partners-stats article strong {
    font-size: clamp(2.8rem, 5vw, 5rem);
    line-height: 1;
    letter-spacing: -0.07em;
}

.partners-stats article p {
    margin: 0;
}

/* CORPORATE INTRODUCTION */

.partners-intro {
    padding: 9vw 14vw;
    background: var(--cream);
}

.partners-intro .eyebrow {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.partners-intro h2 {
    margin: 2rem 0;
    font-size: clamp(2.5rem, 6vw, 6rem);
    line-height: 0.95;
    letter-spacing: -0.06em;
}

.partners-intro h2 span {
    color: var(--hot-pink);
}

.partners-intro > p:not(.eyebrow) {
    max-width: 700px;
    font-size: 1rem;
    line-height: 1.8;
}

/* PARTNER DIRECTORY */

.partners-directory {
    padding: 7vw 6vw 9vw;
    background: var(--white);
}

.partners-directory-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 4rem;
}

.partners-directory-heading .eyebrow {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.partners-directory-heading h2 {
    margin: 1rem 0 0;
    font-size: clamp(3rem, 8vw, 8rem);
    line-height: 0.85;
    letter-spacing: -0.075em;
}

.partners-directory-heading h2 span {
    color: var(--hot-pink);
}

.partners-directory-heading > p {
    max-width: 220px;
    margin: 0;
    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.6;
    text-align: right;
}

.partner-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}

/* INTERACTIVE CARDS */

.partner-card {
    --card-accent: var(--hot-pink);
    --card-background: var(--cream);
    --card-foreground: var(--dark);

    min-width: 0;
    min-height: 390px;
    padding: 1.25rem;

    display: flex;
    flex-direction: column;
    position: relative;
    isolation: isolate;
    overflow: hidden;

    color: var(--card-foreground);
    background: var(--card-background);
    border: 2px solid var(--dark);

    transition:
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.partner-card:hover,
.partner-card:focus-within {
    z-index: 2;
    transform: translateY(-6px);
    box-shadow: 8px 8px 0 var(--dark);
}

/* Each partner gets a distinct brand-inspired colour treatment */

.partner-card.cycling {
    --card-background: #f4d9e7;
    --card-accent: #d51d68;
}

.partner-card.matildas {
    --card-background: #d4ed9c;
    --card-accent: #236c40;
}

.partner-card.black-ferns {
    --card-background: #242424;
    --card-foreground: #ffffff;
    --card-accent: #c9f36c;
}

.partner-card.fdj {
    --card-background: #d9d0f2;
    --card-accent: #5738a0;
}

.partner-card.white-ferns {
    --card-background: #f0ede6;
    --card-accent: #39835a;
}

.partner-card.silver-ferns {
    --card-background: #dce8ee;
    --card-accent: #537b95;
}

.partner-card.uswnt {
    --card-background: #dce4f7;
    --card-accent: #334a9d;
}

.partner-card.chelsea {
    --card-background: #c5d9f4;
    --card-accent: #1749a1;
}

.partner-card.england {
    --card-background: #f8d5df;
    --card-accent: #bd1e50;
}

.partner-card-top {
    display: flex;
    align-items: center;
    gap: 0.7rem;
}

.partner-number {
    font-size: 0.7rem;
    font-weight: 900;
}

.partner-category {
    font-size: 0.55rem;
    font-weight: 900;
    letter-spacing: 0.06em;
    line-height: 1.5;
}

.partner-indicator {
    width: 9px;
    height: 9px;
    margin-left: auto;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--card-accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--card-accent) 20%, transparent);
}

.partner-card-main {
    margin-top: auto;
    padding: 4rem 0 3rem;
    transition: transform 0.3s ease;
}

.partner-tier {
    margin-bottom: 1rem;
    font-size: 0.58rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.5;
}

.partner-card-main h3 {
    margin: 0;
    font-size: clamp(1.8rem, 3vw, 3rem);
    line-height: 0.95;
    letter-spacing: -0.055em;
    overflow-wrap: anywhere;
}

.partner-underline {
    display: block;
    width: 45px;
    height: 5px;
    margin-top: 1.25rem;
    background: var(--card-accent);
    transition: width 0.3s ease;
}

.partner-card:hover .partner-underline,
.partner-card:focus-within .partner-underline {
    width: 100%;
}

/* Hover reveal */

.partner-card-hover {
    position: absolute;
    inset: 0;
    z-index: 2;

    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: var(--card-foreground);
    background: var(--card-background);
    border-top: 7px solid var(--card-accent);

    opacity: 0;
    visibility: hidden;
    transform: translateY(16px);

    transition:
        opacity 0.25s ease,
        transform 0.25s ease,
        visibility 0.25s ease;

    pointer-events: none;
}

.partner-card:hover .partner-card-hover,
.partner-card:focus-within .partner-card-hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.hover-label {
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.5;
}

.partner-card-hover > p:not(.partner-quote) {
    margin: 1.5rem 0;
    font-size: 0.95rem;
    line-height: 1.7;
}

.partner-metric {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
    padding: 1rem 0;
    border-top: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
}

.partner-metric strong {
    color: var(--card-accent);
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1;
    letter-spacing: -0.07em;
}

.partner-metric span {
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.5;
}

.partner-card-hover .partner-quote {
    margin: 1rem 0 0;
    font-size: 0.7rem;
    font-style: italic;
    line-height: 1.6;
}

.partner-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid currentColor;
}

.partner-card-footer span {
    font-size: 0.52rem;
    font-weight: 900;
    letter-spacing: 0.05em;
    line-height: 1.5;
}

.partner-card-footer span:last-child {
    text-align: right;
}

.partners-interaction-note {
    margin: 1.5rem 0 0;
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    line-height: 1.6;
}

/* CLASSIFIED DOCUMENT */

.partners-classified {
    padding: 8vw 12vw;
    background: var(--dark);
    color: var(--white);
}

.partners-classified > .eyebrow {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.partners-classified h2 {
    margin: 2rem 0 3rem;
    font-size: clamp(3rem, 8vw, 8rem);
    line-height: 0.9;
    letter-spacing: -0.07em;
}

.partners-classified h2 span {
    color: var(--pink);
}

.partners-classified-document {
    max-width: 750px;
    padding: 2rem;
    border: 1px solid #777;
}

.partners-classified-document > span {
    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.1em;
    line-height: 1.7;
}

.partners-classified-document p {
    font-size: 0.95rem;
    line-height: 1.8;
}

.partners-classified-document .redacted {
    overflow: hidden;
    background: var(--pink);
    color: var(--pink);
    user-select: none;
    height: 0.8rem;
    margin: 1.5rem 0;
}

/* DISCLAIMER */

.partner-disclaimer {
    max-width: 850px;
    margin: 0 auto;
    padding: 7rem 2rem;
}

.partner-disclaimer .eyebrow {
    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.partner-disclaimer h2 {
    margin: 1.5rem 0;
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1;
    letter-spacing: -0.05em;
}

.partner-disclaimer p {
    font-size: 0.85rem;
    line-height: 1.8;
}

.partner-disclaimer strong {
    color: var(--hot-pink);
}

/* TABLET */

@media (max-width: 1000px) {
    .partners-stats {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .partners-stats article:nth-child(2) {
        border-right: 0;
    }

    .partners-stats article:nth-child(-n + 2) {
        border-bottom: 1px solid var(--dark);
    }

    .partner-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .partners-intro {
        padding: 12vw 8vw;
    }

    .partners-classified {
        padding: 12vw 8vw;
    }
}

/* MOBILE */

@media (max-width: 600px) {
    .partners-header {
        padding: 2rem 7vw 0;
    }

    .partners-topline,
    .partners-header-bottom {
        align-items: flex-start;
        flex-direction: column;
    }

    .partners-topline {
        margin-bottom: 4rem;
    }

    .partners-header h1 {
        font-size: clamp(3rem, 13vw, 5.5rem);
    }

    .partners-header-bottom {
        padding-bottom: 3rem;
    }

    .partners-seal {
        width: 120px;
        height: 120px;
        align-self: flex-end;
    }

    .partners-banner {
        margin: 0 -7vw;
        padding: 1rem 7vw;
        flex-direction: column;
    }

    .partners-stats article {
        min-height: 165px;
        padding: 1.25rem;
    }

    .partners-stats article > span,
    .partners-stats article > p {
        font-size: 0.55rem;
    }

    .partners-directory {
        padding: 15vw 6vw;
    }

    .partners-directory-heading {
        align-items: flex-start;
        flex-direction: column;
        margin-bottom: 2.5rem;
    }

    .partners-directory-heading > p {
        text-align: left;
    }

    .partner-grid {
        grid-template-columns: 1fr;
    }

    .partner-card {
        min-height: 360px;
    }

    .partner-card-main h3 {
        font-size: clamp(2rem, 9vw, 3rem);
    }

    /*
     * Touchscreens: keep the information visible.
     * Hover isn't a reliable interaction on mobile.
     */
    .partner-card-hover {
        position: relative;
        inset: auto;
        display: flex;
        padding: 1.25rem 0 0;
        margin-top: 0;
        border-top: 1px solid currentColor;
        background: transparent;
        transform: none;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
    }

    .partner-card-main {
        padding: 3rem 0 2rem;
    }

    .partner-card-footer {
        margin-top: 1.5rem;
    }

    .partners-classified {
        padding: 16vw 7vw;
    }

    .partners-classified-document {
        padding: 1.25rem;
    }

    .partner-disclaimer {
        padding: 5rem 7vw;
    }
}

/* ACCESSIBILITY */

@media (prefers-reduced-motion: reduce) {
    .partner-card,
    .partner-card-main,
    .partner-underline,
    .partner-card-hover {
        transition: none;
    }

    .partner-card:hover,
    .partner-card:focus-within {
        transform: none;
    }
}


.partnership-enquiries {
	margin-top: 0;
	border-top: 5rem solid var(--white);
	background: var(--dark);
	color: var(--cream);
	border: 1px solid var(--dark);
}

.enquiries-topline,
.enquiries-footer {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 0.85rem 1.25rem;
	font-family: monospace;
	font-size: 0.68rem;
	letter-spacing: 0.09em;
}

.enquiries-topline {
	border-bottom: 1px solid rgb(255 255 255 / 18%);
	color: var(--pink);
}

.enquiries-content {
	max-width: 850px;
	padding: clamp(2rem, 6vw, 5rem);
	margin: 0 auto;
}

.enquiries-eyebrow,
.enquiries-contact > span {
	font-family: monospace;
	font-size: 0.72rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	color: var(--pink);
}

.enquiries-content h2 {
	max-width: 700px;
	margin: 1rem 0;
	font-size: clamp(2rem, 5vw, 4rem);
	line-height: 0.98;
	letter-spacing: -0.045em;
	text-transform: uppercase;
}

.enquiries-copy {
	max-width: 650px;
	color: rgb(255 255 255 / 78%);
	line-height: 1.8;
}

.enquiries-contact {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
	margin-top: 2rem;
	padding: 1.5rem;
	border: 1px solid var(--pink);
	background: rgb(255 255 255 / 4%);
}

.enquiries-contact a {
	color: var(--cream);
	font-size: clamp(1.1rem, 3vw, 1.7rem);
	font-weight: 800;
	text-decoration-thickness: 2px;
	text-underline-offset: 5px;
	overflow-wrap: anywhere;
}

.enquiries-contact a:hover {
	color: var(--pink);
}

.enquiries-footnote {
	margin-top: 1.5rem;
	color: rgb(255 255 255 / 55%);
	font-size: 0.8rem;
	line-height: 1.7;
}

.enquiries-footer {
	border-top: 1px solid rgb(255 255 255 / 18%);
	color: rgb(255 255 255 / 55%);
}

@media (max-width: 600px) {
	.partnership-enquiries {
		margin-top: 0;
		border-top-width: 3rem;
	}

	.enquiries-topline,
	.enquiries-footer {
		flex-direction: column;
		gap: 0.4rem;
	}
}

</style>
