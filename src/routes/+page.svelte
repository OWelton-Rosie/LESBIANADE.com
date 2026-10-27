<svelte:head>
	<title>LESBIANADE® — FUEL THE UPRISING™</title>
	<meta name="description" content="Discover LESBIANADE®, a fictional sports hydration brand established in 1967 on the Greek island of Lesbos." />
</svelte:head>

<section class="hero">
	<div class="hero-content">
		<p class="eyebrow">EST. 1967 · LESBOS, GREECE</p>
		<h1>FUEL THE<br /><em>UPRISING™</em></h1>
		<p class="hero-text">
			A distinctive sports hydration brand for active people, built around bold flavours and an unapologetically independent point of view.
		</p>
		<div class="hero-buttons">
			<a href="/company/products" class="button primary">EXPLORE OUR FLAVOURS →</a>
			<a href="/company/science" class="button secondary">VIEW THE SCIENCE</a>
		</div>
		<p class="hero-microcopy">FORWARD-LOOKING HYDRATION STATEMENTS MAY CONTAIN WATER.</p>
	</div>
	<div class="hero-product">
		<div class="bottle">
			<div class="bottle-cap"></div>
			<div class="bottle-label">
				<span class="bottle-small">STRATEGIC FLUID SOLUTIONS</span>
				<strong>LESBIANADE®</strong>
				<span class="bottle-flavour">TRADITIONAL</span>
				<span class="bottle-active">67 ACTIVE INGREDIENTS*</span>
			</div>
		</div>
		<p class="bottle-disclaimer">*The 67-ingredient formulation is part of the site's fictional premise.</p>
	</div>
</section>

<section class="statement">
	<p class="eyebrow">HYDRATION, REDEFINED · DEFINITIONS PENDING</p>
	<h2>67 ACTIVE INGREDIENTS.<br /><span>ONE VERY SPECIFIC DEMOGRAPHIC.</span></h2>
	<p>
		From the world's most demanding sporting arenas to the local community
		rugby pitch, LESBIANADE® delivers a scalable hydration ecosystem
		designed to unlock synergies at the intersection of performance,
		identity, and quarterly growth.
	</p>
	<p class="statement-footnote">
		No clinical conclusions should be inferred from the phrase “unlock synergies”.
	</p>
</section>

<section class="home-cta">
	<p class="eyebrow">DISCOVER COMPANY</p>
	<h2>HYDRATION<br /><span>FOR EVERYONE.</span></h2>
	<p>Explore the range and discover the story behind the brand.</p>
	<a href="/company/products" class="button primary">EXPLORE PRODUCTS →</a>
    <a href="/company/about" class="button secondary">LEARN ABOUT US</a>
</section>

<style>.hero {
    min-height: calc(100vh - 82px);

    padding: 8vw;

    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;

    background:
        linear-gradient(
            135deg,
            var(--pink) 0%,
            var(--pink) 48%,
            var(--orange) 48%,
            var(--orange) 100%
        );
}

.hero h1 {
    margin-bottom: 2rem;

    font-size: clamp(4rem, 9vw, 9rem);
}

.hero h1 em {
    color: var(--white);
    font-style: normal;
}

.hero-text {
    max-width: 550px;

    font-size: 1.15rem;
    line-height: 1.5;
}

.hero-buttons {
    margin-top: 2.5rem;

    display: flex;
    gap: 1rem;
}

.hero-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bottle {
    width: min(260px, 60%);
    height: 540px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 4px solid var(--dark);
    border-radius: 70px 70px 35px 35px;

    background:
        linear-gradient(
            110deg,
            var(--white) 0%,
            #ffe8ef 45%,
            var(--white) 100%
        );

    box-shadow: 18px 20px 0 var(--dark);

    position: relative;

    transform: rotate(7deg);
}

.bottle-cap {
    width: 90px;
    height: 55px;

    border-radius: 12px 12px 4px 4px;

    background: var(--dark);

    position: absolute;
    top: -45px;
}

.bottle-label {
    width: 100%;

    padding: 2rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    border-top: 4px solid var(--dark);
    border-bottom: 4px solid var(--dark);

    background: var(--pink);

    text-align: center;
}

.bottle-small,
.bottle-active {
    font-size: 0.55rem;
    font-weight: 900;
    letter-spacing: 0.08em;
}

.bottle-label strong {
    margin: 1rem 0;

    font-size: 2.3rem;
    line-height: 0.85;
    letter-spacing: -0.08em;
}

.bottle-flavour {
    font-size: 0.8rem;
    font-weight: 900;
    letter-spacing: 0.15em;
}

.bottle-active {
    margin-top: 1.5rem;
}

.statement {
    padding: 10vw 8vw;

    background: var(--dark);
    color: var(--white);
}

.statement h2 {
    max-width: 1000px;

    font-size: clamp(3rem, 7vw, 7rem);
}

.statement h2 span {
    color: var(--pink);
}

.statement > p:last-child {
    max-width: 650px;

    margin-top: 3rem;

    font-size: 1.1rem;
    line-height: 1.6;
}

.home-cta {
    padding: 10vw 8vw;

    background: var(--orange);
}

.home-cta h2 {
    margin-bottom: 3rem;

    font-size: clamp(4rem, 8vw, 8rem);
}

.home-cta h2 span {
    color: var(--white);
}

@media (max-width: 800px) {
    .hero {
        min-height: auto;

        padding: 15vw 7vw;

        grid-template-columns: 1fr;
        gap: 6rem;
    }

    .hero h1 {
        font-size: 18vw;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .hero-product {
        padding: 2rem 0;
    }

    .bottle {
        width: 220px;
        height: 450px;
    }

    .statement,
    .home-cta {
        padding: 18vw 7vw;
    }
}

/* FINE PRINT, BECAUSE LEGAL HAS A BRAND */

.hero-microcopy,
.bottle-disclaimer,
.statement-footnote {
    color: #44343c;
    font-size: 0.62rem;
    font-weight: 800;
    line-height: 1.6;
    letter-spacing: 0.09em;
    text-transform: uppercase;
}

.hero-microcopy {
    max-width: 500px;
    margin: 1.25rem 0 0;
    padding-left: 0.8rem;
    border-left: 3px solid var(--dark);
}

.bottle-disclaimer {
    max-width: 260px;
    margin: 2.5rem 0 0;
    color: #5d4438;
    font-size: 0.58rem;
    text-align: center;
    letter-spacing: 0.06em;
}

.statement .statement-footnote {
    max-width: 650px;
    margin-top: 3rem;
    padding-top: 1rem;
    border-top: 1px solid #51474f;
    color: #aaa0a8;
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: none;
}

@media (max-width: 800px) {
    .hero-microcopy {
        font-size: 0.58rem;
    }

    .bottle-disclaimer {
        margin-top: 1.75rem;
    }
}


/* Mobile hero: keep display type, copy and CTAs inside the viewport. */
.hero,
.hero-content,
.hero-product {
    min-width: 0;
}

.hero-content {
    width: 100%;
}

.hero h1 {
    max-width: 100%;
    font-size: clamp(3.15rem, 15vw, 7rem);
    overflow-wrap: anywhere;
}

.hero .eyebrow {
    max-width: 100%;
    overflow-wrap: anywhere;
    line-height: 1.5;
}

.hero-text {
    width: 100%;
    overflow-wrap: break-word;
}

.hero-buttons .button {
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
}

@media (max-width: 800px) {
    .hero {
        padding: clamp(2rem, 9vw, 4rem) clamp(1.1rem, 6vw, 2rem);
        gap: clamp(3rem, 12vw, 5rem);
        grid-template-columns: minmax(0, 1fr);
        overflow: clip;
        background: linear-gradient(
            160deg,
            var(--pink) 0%,
            var(--pink) 54%,
            var(--orange) 54%,
            var(--orange) 100%
        );
    }

    .hero-content {
        min-width: 0;
    }

    .hero h1 {
        font-size: clamp(3rem, 14.5vw, 7rem);
        letter-spacing: -0.065em;
        line-height: 0.86;
        overflow-wrap: normal;
    }

    .hero-buttons {
        align-items: stretch;
        gap: 0.75rem;
    }

    .hero-buttons .button {
        width: 100%;
        padding: 0.9rem 0.8rem;
        text-align: center;
        line-height: 1.35;
    }

    .hero-product {
        width: 100%;
        min-width: 0;
        padding: 0.5rem 0 1rem;
    }

    .bottle {
        width: min(220px, 68vw);
        max-width: 100%;
        height: clamp(360px, 112vw, 450px);
        flex-shrink: 0;
    }

    .bottle-label strong {
        font-size: clamp(1.8rem, 8vw, 2.3rem);
        overflow-wrap: anywhere;
    }

    .bottle-small,
    .bottle-active {
        overflow-wrap: anywhere;
    }

    .bottle-disclaimer {
        width: min(260px, 100%);
        padding-inline: 0.5rem;
    }
}

@media (max-width: 380px) {
    .hero h1 {
        font-size: clamp(2.7rem, 13.8vw, 3.4rem);
    }

    .hero .eyebrow {
        font-size: 0.65rem;
        letter-spacing: 0.1em;
    }

    .hero-text {
        font-size: 1rem;
    }
}

</style>
