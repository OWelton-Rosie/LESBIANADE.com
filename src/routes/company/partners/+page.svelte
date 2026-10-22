
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
            activation: 'Delivering hydration solutions at the intersection of performance and national identity.',
            metric: '100%',
            metricLabel: 'CORPORATE CONFIDENCE',
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
            activation: 'Optimising fluid-adjacent brand synergies across all available touchpoints.',
            metric: '360°',
            metricLabel: 'SYNERGY COVERAGE',
            quote: '"Our synergy consultants are standing by."'
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
            quote: '"Our synergy model is proprietary."'
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
            quote: '"The narrative has been aligned."'
        }
    ];
</script>

<svelte:head>
    <title>Strategic Partnerships - LESBIANADE™</title>
    <meta
        name="description"
        content="Discover the global sports partnership strategy of LESBIANADE™, the fictional leader in advanced lesbian hydration technology. Satire; no real partnerships."
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
            Strategic relationships. Transformational synergies.
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
        At LESBIANADE™, we believe the future of women's sport
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
                    <span>LESBIANADE™ GLOBAL HOLDINGS</span>
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
			strategic synergy assessment, and approval by the Committee
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
            LESBIANADE™. This website is satire and is not affiliated
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
