<script>
	import Name from './Name.svelte';
</script>

<footer>
	<div class="footer-main">
		<div class="footer-brand">
			<div class="footer-logo"><Name /></div>
			<h1>FUEL THE UPRISING.™</h1>
			<p class="footer-manifesto">A globally integrated hydration ecosystem with a localised commitment to highly specific thirst.</p>
		</div>

		<div class="footer-links">
			<div class="footer-column">
				<h2>THE ENTERPRISE</h2>
				<a href="/company/history">CORPORATE MEMORY</a>
				<a href="/company/products">PRODUCT PORTFOLIO</a>
				<a href="/company/partners">STRATEGIC ALLIANCES</a>
				<a href="/company/science">RESEARCH &amp; DEVELOPMENT</a>
				<a href="/company/sustainability">ESG &amp; PLANETARY ALIGNMENT</a>
				<a href="/company/careers">TALENT ECOSYSTEM</a>
			</div>
			<div class="footer-column">
				<h2>GOVERNANCE</h2>
				<a href="/legal/privacy">DATA GOVERNANCE</a>
				<a href="/legal/terms">TERMS &amp; CONDITIONS</a>
				<a href="/legal/dei">PEOPLE &amp; BELONGING</a>
			</div>
			<div class="footer-column">
				<h2>STAKEHOLDER ACCESS</h2>
				<a href="/contact">ENGAGEMENT CENTRE</a>
				<a href="/contact/press">EXTERNAL NARRATIVE</a>
				<a href="/contact/partnerships">STRATEGIC PARTNERSHIPS</a>
				<a href="mailto:partnerships@lesbianade.com">PARTNERSHIPS EMAIL</a>
			</div>
		</div>
	</div>

	<div class="footer-disclosure">
		<strong>IMPORTANT CORPORATE DISCLOSURE · PLEASE READ BEFORE CONTINUING</strong>
		<p><Name /> is a fictional satirical beverage company. The products, research programmes, performance language, corporate metrics, facilities, vacancies, and partnerships described on this website are fictional unless explicitly stated otherwise. Named sports organisations are not affiliated with or endorsing LESBIANADE™. No actual beverage is offered for sale through this website.</p>
		<p>All forward-looking statements are subject to uncertainty, interpretive flexibility, and the possibility that the statement was written for a joke.</p>
	</div>

	<div class="footer-bottom">
		<small>© 1967–2026 LESBIANADE™ · ALL RIGHTS RESERVED IN PRINCIPLE · NO RIGHTS HAVE BEEN INDEPENDENTLY AUDITED.</small>
	</div>
</footer>

<style>
footer {
    padding: 6rem 6vw 2rem;

    background: var(--dark);
    color: var(--white);
}

.footer-main {
    max-width: 1500px;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 8vw;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-logo {
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 900;
    line-height: 0.8;
    letter-spacing: -0.08em;
}

.footer-brand h1 {
    max-width: 450px;

    margin: 5rem 0 0;

    color: var(--pink);

    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 0.9;
}

/* LINK COLUMNS */

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}

.footer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-column h2 {
    margin: 0 0 1.5rem;

    color: var(--pink);

    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.15em;
}

.footer-column a {
    margin-bottom: 0.8rem;

    color: var(--white);

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.04em;

    transition:
        color 0.15s ease,
        transform 0.15s ease;
}

.footer-column a:hover {
    color: var(--pink);
    transform: translateX(4px);
}

/* BOTTOM */

.footer-bottom {
    max-width: 1500px;

    margin: 6rem auto 0;
    padding-top: 1.5rem;

    border-top: 1px solid #444;
}

.footer-bottom small {
    display: block;

    max-width: 700px;

    color: #888;

    font-size: 0.65rem;
    line-height: 1.5;
}

/* MOBILE */

@media (max-width: 900px) {
    footer {
        padding: 5rem 7vw 2rem;
    }

    .footer-main {
        grid-template-columns: 1fr;
        gap: 5rem;
    }

    .footer-brand h1 {
        margin-top: 3rem;
    }

    .footer-links {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 600px) {
    .footer-links {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .footer-column h2 {
        margin-bottom: 1rem;
    }

    .footer-bottom {
        margin-top: 4rem;
    }
}

/* CORPORATE DISCLOSURE */

.footer-disclosure {
    max-width: 1500px;
    margin: 5rem auto 0;
    padding: 1.5rem 1.75rem;
    border: 1px solid #494148;
    border-left: 4px solid var(--pink);
    background: #211b20;
    color: #c7bdc4;
}

.footer-disclosure strong {
    display: block;
    margin-bottom: 1rem;
    color: var(--pink);
    font-size: 0.68rem;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0.13em;
}

.footer-disclosure p {
    max-width: 1100px;
    margin: 0.65rem 0 0;
    color: #c7bdc4;
    font-size: 0.75rem;
    line-height: 1.7;
}

.footer-disclosure p:first-of-type {
    margin-top: 0;
}

.footer-disclosure p:last-child {
    color: #91858e;
    font-size: 0.68rem;
}

.footer-bottom small + small {
    margin-top: 0.4rem;
}

@media (max-width: 600px) {
    .footer-disclosure {
        margin-top: 3.5rem;
        padding: 1.2rem;
    }

    .footer-disclosure strong {
        font-size: 0.62rem;
    }
}


/* FOOTER BRAND HIERARCHY */

.footer-brand .footer-manifesto {
    max-width: 420px;
    margin: 1.5rem 0 0;
    color: #c7bdc4;
    font-size: 0.9rem;
    line-height: 1.7;
}

</style>


<style>
footer {
    padding: 6rem 6vw 2rem;

    background: var(--dark);
    color: var(--white);
}

.footer-main {
    max-width: 1500px;

    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 8vw;
}

.footer-brand {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-logo {
    font-size: clamp(3rem, 7vw, 7rem);
    font-weight: 900;
    line-height: 0.8;
    letter-spacing: -0.08em;
}

.footer-brand h1 {
    max-width: 450px;

    margin: 5rem 0 0;

    color: var(--pink);

    font-size: clamp(2rem, 4vw, 4rem);
    line-height: 0.9;
}

/* LINK COLUMNS */

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
}

.footer-column {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-column h2 {
    margin: 0 0 1.5rem;

    color: var(--pink);

    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.15em;
}

.footer-column a {
    margin-bottom: 0.8rem;

    color: var(--white);

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: 0.04em;

    transition:
        color 0.15s ease,
        transform 0.15s ease;
}

.footer-column a:hover {
    color: var(--pink);
    transform: translateX(4px);
}

/* BOTTOM */

.footer-bottom {
    max-width: 1500px;

    margin: 6rem auto 0;
    padding-top: 1.5rem;

    border-top: 1px solid #444;
}

.footer-bottom small {
    display: block;

    max-width: 700px;

    color: #888;

    font-size: 0.65rem;
    line-height: 1.5;
}

/* MOBILE */

@media (max-width: 900px) {
    footer {
        padding: 5rem 7vw 2rem;
    }

    .footer-main {
        grid-template-columns: 1fr;
        gap: 5rem;
    }

    .footer-brand h1 {
        margin-top: 3rem;
    }

    .footer-links {
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
}

@media (max-width: 600px) {
    .footer-links {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .footer-column h2 {
        margin-bottom: 1rem;
    }

    .footer-bottom {
        margin-top: 4rem;
    }
}

/* CORPORATE DISCLOSURE */

.footer-disclosure {
    max-width: 1500px;
    margin: 5rem auto 0;
    padding: 1.5rem 1.75rem;
    border: 1px solid #494148;
    border-left: 4px solid var(--pink);
    background: #211b20;
    color: #c7bdc4;
}

.footer-disclosure strong {
    display: block;
    margin-bottom: 1rem;
    color: var(--pink);
    font-size: 0.68rem;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0.13em;
}

.footer-disclosure p {
    max-width: 1100px;
    margin: 0.65rem 0 0;
    color: #c7bdc4;
    font-size: 0.75rem;
    line-height: 1.7;
}

.footer-disclosure p:first-of-type {
    margin-top: 0;
}

.footer-disclosure p:last-child {
    color: #91858e;
    font-size: 0.68rem;
}

.footer-bottom small + small {
    margin-top: 0.4rem;
}

@media (max-width: 600px) {
    .footer-disclosure {
        margin-top: 3.5rem;
        padding: 1.2rem;
    }

    .footer-disclosure strong {
        font-size: 0.62rem;
    }
}


/* FOOTER BRAND HIERARCHY */

.footer-brand .footer-manifesto {
    max-width: 420px;
    margin: 1.5rem 0 0;
    color: #c7bdc4;
    font-size: 0.9rem;
    line-height: 1.7;
}

</style>
