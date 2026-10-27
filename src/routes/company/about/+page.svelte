
<script>
    const principles = [
        {
            number: '01',
            title: 'HYDRATION',
            description:
                'Water is important. We have elected to make this considerably more complicated.'
        },
        {
            number: '02',
            title: 'INNOVATION',
            description:
                'We challenge convention, disrupt expectations, and occasionally introduce a new flavour.'
        },
        {
            number: '03',
            title: 'COMMUNITY',
            description:
                'We believe in bringing people together, preferably somewhere with adequate refrigeration.'
        }
    ];

    const milestones = [
        {
            year: '1967',
            title: 'A HISTORIC BEGINNING',
            description:
                'Founded on the Greek island of Lesbos, LESBIANADE began with a simple ambition: to put hydration on the agenda.'
        },
        {
            year: '1984',
            title: 'A BOLDER DIRECTION',
            description:
                'A renewed commitment to innovation transformed the brand from a local curiosity into a developing beverage phenomenon.'
        },
        {
            year: '2006',
            title: 'THE MODERN ERA',
            description:
                'Seven distinctive formulations. Sixty-seven active ingredients. An entirely reasonable number of meetings.'
        },
        {
            year: 'TODAY',
            title: 'THE UPRISING CONTINUES',
            description:
                'We remain committed to challenging expectations, expanding the range, and making hydration everybody’s business.'
        }
    ];
</script>

<svelte:head>
    <title>About Us - LESBIANADE®</title>
    <meta
        name="description"
        content="Discover the history, mission, and questionable corporate priorities of LESBIANADE®, the hydration brand fueling the uprising."
    />
</svelte:head>

<section class="about-hero">
    <p class="eyebrow">OUR STORY · EST. 1967</p>

    <h1>
        WE DIDN'T<br />
        COME HERE<br />
        TO <span>BLEND IN.</span>
    </h1>

    <div class="hero-bottom">
        <p>
            A different kind of hydration company. An unnecessarily ambitious
            vision. Absolutely no intention of toning it down.
        </p>

        <span class="hero-stamp">FUEL<br />THE<br />UPRISING™</span>
    </div>

    <span class="hero-index">CORPORATE PROFILE / 001</span>
</section>

<section class="about-introduction">
    <div class="section-label">
        <span>01 / THE COMPANY</span>
        <span>WHO WE ARE</span>
    </div>

    <div class="introduction-grid">
        <h2>HYDRATION<br />WITH A<br /><span>POINT OF VIEW.</span></h2>

        <div class="introduction-copy">
            <p class="lead">
                LESBIANADE® is more than a beverage company. According to our
                internal communications team, it is a movement.
            </p>

            <p>
                Established in 1967 on the Greek island of Lesbos, we have
                spent decades pursuing the perfect intersection of hydration,
                innovation, and exceptionally confident branding.
            </p>

            <p>
                Today, our portfolio spans seven distinctive flavours, each
                engineered to deliver a unique experience and supported by
                precisely the level of corporate infrastructure you would
                expect from a company of our entirely fictional scale.
            </p>

            <p>
                We don't believe in doing things halfway. We believe in
                doing them with a dedicated strategy department.
            </p>

            <a href="/products" class="section-link">
                MEET THE RANGE <span aria-hidden="true">↗</span>
            </a>
        </div>
    </div>
</section>

<section class="about-manifesto">
    <p class="eyebrow">OUR CORPORATE PHILOSOPHY</p>

    <h2>
        THE FUTURE<br />
        IS <span>UNAPOLOGETICALLY</span><br />
        HYDRATED.
    </h2>

    <p>
        We are here to challenge the ordinary, question the expected, and
        ensure that every bottle communicates a clear and compelling brand
        narrative.
    </p>

    <span class="manifesto-signature">LESBIANADE® / OFFICE OF THE UPRISING</span>
</section>

<section class="about-principles">
    <div class="section-label">
        <span>02 / OUR VALUES</span>
        <span>NON-NEGOTIABLES</span>
    </div>

    <h2>THREE PILLARS.<br />ONE VERY LARGE LOGO.</h2>

    <div class="principles-grid">
        {#each principles as principle}
            <article class="principle">
                <span class="principle-number">{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
            </article>
        {/each}
    </div>

    <div class="section-link-row">
        <p>OUR AMBITIONS EXTEND BEYOND THE BOTTLE.</p>

        <a href="/company/sustainability" class="section-link">
            OUR APPROACH TO SUSTAINABILITY
            <span aria-hidden="true">↗</span>
        </a>
    </div>
</section>

<section class="about-history">
    <div class="section-label">
        <span>03 / OUR HISTORY</span>
        <span>A BRIEF CORPORATE TIMELINE</span>
    </div>

    <h2>DECADES IN THE MAKING.<br /><span>MINUTES TO CONSUME.</span></h2>

    <div class="timeline">
        {#each milestones as milestone}
            <article class="timeline-entry">
                <span class="timeline-year">{milestone.year}</span>

                <div class="timeline-content">
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                </div>
            </article>
        {/each}
    </div>

    <p class="timeline-disclaimer">
        Historical claims, milestones, and corporate achievements are part of
        the LESBIANADE® fictional brand universe.
    </p>

    <a href="/history" class="section-link">
        EXPLORE OUR FULL HISTORY <span aria-hidden="true">↗</span>
    </a>
</section>

<section class="about-closing">
    <p class="eyebrow">THE NEXT CHAPTER</p>

    <h2>THE UPRISING<br />IS <span>JUST GETTING</span><br />STARTED.</h2>

    <p>
        Seven flavours. Sixty-seven active ingredients. One very ambitious
        hydration strategy.
    </p>

    <a href="/products" class="about-cta">
        EXPLORE THE RANGE <span aria-hidden="true">↗</span>
    </a>
</section>

<style>
    .about-hero {
        position: relative;
        overflow: hidden;
        padding: 8vw 7vw 4vw;
        background: var(--pink);
        color: var(--dark);
    }

    .eyebrow {
        margin: 0 0 2rem;
        font-size: 0.7rem;
        font-weight: 900;
        letter-spacing: 0.16em;
        text-transform: uppercase;
    }

    .about-hero h1 {
        margin: 0;
        font-size: clamp(4rem, 12.5vw, 12rem);
        line-height: 0.78;
        letter-spacing: -0.09em;
        overflow-wrap: anywhere;
    }

    .about-hero h1 span {
        color: var(--white);
    }

    .hero-bottom {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 5rem;
    }

    .hero-bottom > p {
        max-width: 440px;
        margin: 0;
        font-size: clamp(1.1rem, 2vw, 1.6rem);
        font-weight: 700;
        line-height: 1.35;
    }

    .hero-stamp {
        flex: 0 0 auto;
        display: grid;
        place-items: center;
        width: 130px;
        aspect-ratio: 1;
        border: 2px solid var(--dark);
        border-radius: 50%;
        font-size: 0.85rem;
        font-weight: 900;
        line-height: 1.05;
        text-align: center;
        transform: rotate(10deg);
    }

    .hero-index {
        display: block;
        margin-top: 4rem;
        padding-top: 1rem;
        border-top: 1px solid rgb(0 0 0 / 35%);
        font-size: 0.65rem;
        font-weight: 900;
        letter-spacing: 0.12em;
    }

    .about-introduction,
    .about-principles,
    .about-history {
        padding: 7vw;
        background: var(--cream);
        color: var(--dark);
    }

    .section-label {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--dark);
        font-size: 0.65rem;
        font-weight: 900;
        letter-spacing: 0.12em;
    }

    .introduction-grid {
        display: grid;
        grid-template-columns: 1fr 0.8fr;
        gap: 8vw;
        padding-top: 5rem;
    }

    .introduction-grid h2,
    .about-principles > h2,
    .about-history > h2 {
        margin: 0;
        font-size: clamp(3rem, 7vw, 7rem);
        line-height: 0.87;
        letter-spacing: -0.075em;
    }

    .introduction-grid h2 span,
    .about-history > h2 span {
        color: var(--hot-pink);
    }

    .introduction-copy {
        max-width: 580px;
    }

    .introduction-copy p {
        margin: 0 0 1.5rem;
        line-height: 1.75;
    }

    .introduction-copy .lead {
        font-size: clamp(1.25rem, 2.2vw, 1.8rem);
        font-weight: 800;
        line-height: 1.3;
    }

    .about-manifesto {
        padding: 9vw 7vw;
        background: var(--dark);
        color: var(--white);
    }

    .about-manifesto h2,
    .about-closing h2 {
        margin: 0;
        font-size: clamp(3rem, 9vw, 9rem);
        line-height: 0.85;
        letter-spacing: -0.08em;
        overflow-wrap: anywhere;
    }

    .about-manifesto h2 span,
    .about-closing h2 span {
        color: var(--pink);
    }

    .about-manifesto > p:not(.eyebrow) {
        max-width: 580px;
        margin: 3rem 0;
        font-size: clamp(1.1rem, 2vw, 1.5rem);
        line-height: 1.6;
    }

    .manifesto-signature {
        display: block;
        padding-top: 1rem;
        border-top: 1px solid rgb(255 255 255 / 35%);
        font-size: 0.65rem;
        font-weight: 900;
        letter-spacing: 0.12em;
    }

    .about-principles > h2,
    .about-history > h2 {
        margin-top: 4rem;
    }

    .principles-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        margin-top: 4rem;
        border-top: 2px solid var(--dark);
        border-bottom: 2px solid var(--dark);
    }

    .principle {
        min-width: 0;
        padding: 2rem 1.5rem 2.5rem 0;
    }

    .principle + .principle {
        padding-left: 1.5rem;
        border-left: 1px solid var(--dark);
    }

    .principle-number {
        font-size: 0.7rem;
        font-weight: 900;
    }

    .principle h3 {
        margin: 3rem 0 1rem;
        font-size: clamp(1.5rem, 2.5vw, 2.5rem);
        letter-spacing: -0.05em;
    }

    .principle p {
        max-width: 300px;
        margin: 0;
        line-height: 1.7;
    }

    .timeline {
        margin-top: 4rem;
        border-top: 2px solid var(--dark);
    }

    .timeline-entry {
        display: grid;
        grid-template-columns: 180px 1fr;
        gap: 2rem;
        padding: 2.5rem 0;
        border-bottom: 1px solid var(--dark);
    }

    .timeline-year {
        font-size: clamp(1.8rem, 4vw, 3.5rem);
        font-weight: 900;
        letter-spacing: -0.06em;
    }

    .timeline-content h3 {
        margin: 0 0 0.75rem;
        font-size: clamp(1.2rem, 2vw, 1.8rem);
    }

    .timeline-content p {
        max-width: 650px;
        margin: 0;
        line-height: 1.7;
    }

    .timeline-disclaimer {
        max-width: 700px;
        margin: 1.5rem 0 0;
        font-size: 0.75rem;
        line-height: 1.6;
        opacity: 0.75;
    }

    .about-closing {
        padding: 9vw 7vw;
        background: #8e294b;
        color: var(--white);
    }

    .about-closing > p:not(.eyebrow) {
        max-width: 550px;
        margin: 2rem 0;
        font-size: 1.1rem;
        line-height: 1.7;
    }

    .about-cta {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 1rem;
        padding: 1.1rem 1.4rem;
        border: 2px solid var(--white);
        color: var(--white);
        font-size: 0.75rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        text-decoration: none;
        transition: background 0.2s ease, color 0.2s ease;
    }

    .about-cta:hover {
        background: var(--white);
        color: var(--dark);
    }

    .about-cta span {
        font-size: 1.1rem;
    }

    /* Contextual links */

    .section-link {
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        width: fit-content;
        max-width: 100%;
        margin-top: 1.5rem;
        padding: 0.85rem 0;
        border-bottom: 2px solid currentColor;
        color: inherit;
        font-size: 0.7rem;
        font-weight: 900;
        letter-spacing: 0.08em;
        line-height: 1.5;
        text-decoration: none;
    }

    .section-link span {
        font-size: 1.1rem;
        transition: transform 0.2s ease;
    }

    .section-link:hover span {
        transform: translate(3px, -3px);
    }

    .section-link:focus-visible,
    .about-cta:focus-visible {
        outline: 3px solid var(--hot-pink);
        outline-offset: 5px;
    }

    .section-link-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        margin-top: 2rem;
        padding-top: 1.5rem;
        border-top: 1px solid var(--dark);
    }

    .section-link-row p {
        margin: 0;
        font-size: 0.7rem;
        font-weight: 900;
        letter-spacing: 0.08em;
    }

    .section-link-row .section-link {
        flex-shrink: 0;
        margin-top: 0;
    }

    @media (max-width: 800px) {
        .about-hero,
        .about-introduction,
        .about-principles,
        .about-history,
        .about-manifesto,
        .about-closing {
            padding: 12vw 6vw;
        }

        .introduction-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            padding-top: 3rem;
        }

        .principles-grid {
            grid-template-columns: 1fr;
        }

        .principle,
        .principle + .principle {
            padding: 2rem 0;
            border-left: 0;
        }

        .principle + .principle {
            border-top: 1px solid var(--dark);
        }

        .principle h3 {
            margin-top: 1.5rem;
        }

        .timeline-entry {
            grid-template-columns: 100px 1fr;
            gap: 1rem;
        }

        .hero-bottom {
            margin-top: 3rem;
        }
    }

    @media (max-width: 600px) {
        .section-link-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    @media (max-width: 480px) {
        .about-hero h1 {
            font-size: clamp(3.5rem, 15vw, 5.5rem);
        }

        .hero-stamp {
            width: 90px;
            font-size: 0.7rem;
        }

        .hero-bottom {
            align-items: start;
        }

        .section-label {
            font-size: 0.55rem;
        }

        .timeline-entry {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .about-cta,
        .section-link span {
            transition: none;
        }
    }
</style>
