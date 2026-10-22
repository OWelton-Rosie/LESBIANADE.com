<script>
	import Name from './Name.svelte';

	let menuOpen = $state(false);
	let searchOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	function toggleMenu() {
		menuOpen = !menuOpen;
		searchOpen = false;
	}

	function toggleSearch() {
		searchOpen = !searchOpen;
		menuOpen = false;
	}
</script>

<header class:menu-open={menuOpen} class:search-open={searchOpen}>
	<div class="announcement-bar">
		<p>FREE SHIPPING ON ORDERS OVER $50</p>
		<a href="/company/products">SHOP NOW →</a>
	</div>

	<div class="navbar">
		<a href="/" class="logo" onclick={closeMenu} aria-label="LESBIANADE® home"><Name /></a>
		<div class="header-actions">
			<button class="icon-button search-button" aria-label="Search" aria-expanded={searchOpen} onclick={toggleSearch}>
				<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>
				<span>SEARCH</span>
			</button>
		</div>
		<button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onclick={toggleMenu}>
			<span></span><span></span><span></span>
		</button>
	</div>

	{#if searchOpen}
		<div class="search-panel">
			<form action="/search" method="GET">
				<label for="site-search">SEARCH LESBIANADE®</label>
				<div class="search-input">
					<input id="site-search" name="q" type="search" placeholder="Search products, ingredients and company information..." autocomplete="off" />
					<button type="submit">SEARCH →</button>
				</div>
			</form>
		</div>
	{/if}

	<nav class="primary-nav">
		<div class="nav-inner">
			<a href="/company/products" onclick={closeMenu}>PRODUCTS</a>
			<a href="/company/science" onclick={closeMenu}>INGREDIENTS</a>
			<a href="/company/partners" onclick={closeMenu}>PARTNERS</a>
			<a href="/company/history" onclick={closeMenu}>OUR HISTORY</a>
			<a href="/company/sustainability" onclick={closeMenu}>SUSTAINABILITY</a>
			<a href="/company/careers" onclick={closeMenu}>CAREERS</a>
			<a href="/contact" onclick={closeMenu}>CONTACT</a>
		</div>
	</nav>
	<p class="nav-disclaimer">*Shipping, progress, and the word “free” are terms and conditions apply.</p>
</header>

<style>
/* ========================================
   ANNOUNCEMENT BAR
======================================== */

.announcement-bar {
    min-height: 32px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background: var(--dark);
    color: var(--white);

    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.announcement-bar p {
    margin: 0;
}

.announcement-bar a {
    color: var(--pink);
    transition: color 0.15s ease;
}

.announcement-bar a:hover {
    color: var(--white);
}


/* ========================================
   MAIN HEADER
======================================== */

header:has(.navbar) {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--cream);
}

.navbar {
    min-height: 92px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    background: var(--cream);
    border-bottom: 1px solid #d8d0cb;
}

.logo {
    font-size: clamp(1.4rem, 2vw, 2rem);
    font-weight: 900;
    letter-spacing: -0.07em;

    transition: color 0.15s ease;
}

.logo:hover {
    color: var(--hot-pink);
}


/* ========================================
   HEADER ACTIONS
======================================== */

.header-actions {
    display: flex;
    align-items: center;
    gap: 1.75rem;
}

.icon-button {
    padding: 0;

    display: flex;
    align-items: center;
    gap: 0.45rem;

    border: 0;
    background: transparent;
    color: var(--dark);

    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.08em;

    cursor: pointer;

    transition: color 0.15s ease;
}

.icon-button:hover {
    color: var(--hot-pink);
}

.icon-button svg {
    width: 19px;
    height: 19px;

    flex-shrink: 0;

    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ========================================
   PRIMARY NAVIGATION
======================================== */

.primary-nav {
    background: var(--cream);
    border-bottom: var(--border);
}

.nav-inner {
    min-height: 48px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(1.5rem, 4vw, 4rem);
}

.nav-inner a {
    padding: 0.9rem 0;

    position: relative;

    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0.1em;

    transition: color 0.15s ease;
}

.nav-inner a::after {
    width: 0;
    height: 2px;

    content: "";

    position: absolute;
    bottom: 5px;
    left: 0;

    background: var(--hot-pink);

    transition: width 0.2s ease;
}

.nav-inner a:hover::after {
    width: 100%;
}

.nav-inner a:hover {
    color: var(--hot-pink);
}


/* ========================================
   SEARCH PANEL
======================================== */

.search-panel {
    padding: 2rem 5vw;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;

    background: var(--white);
    border-bottom: var(--border);
    box-shadow: 0 12px 20px rgb(0 0 0 / 8%);
}

.search-panel form {
    max-width: 1100px;
    margin: 0 auto;
}

.search-panel label {
    display: block;
    margin-bottom: 0.8rem;

    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.search-input {
    display: flex;

    border: 2px solid var(--dark);
}

.search-input input {
    min-width: 0;
    flex: 1;

    padding: 1rem;

    border: 0;
    outline: 0;

    background: transparent;

    font: inherit;
    font-size: 0.9rem;
}

.search-input input:focus-visible {
    outline: 2px solid var(--hot-pink);
    outline-offset: -3px;
}

.search-input button {
    padding: 0 1.5rem;

    border: 0;
    background: var(--dark);
    color: var(--white);

    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.08em;

    cursor: pointer;
    transition: background 0.15s ease;
}

.search-input button:hover {
    background: var(--hot-pink);
}


/* ========================================
   MOBILE MENU BUTTON
======================================== */

.menu-button {
    display: none;

    width: 30px;
    min-width: 30px;

    padding: 5px 0;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border: 0;
    background: transparent;

    cursor: pointer;
}

.menu-button span {
    width: 25px;
    height: 2px;

    display: block;
    flex-shrink: 0;

    background: var(--dark);

    transform-origin: center;

    transition:
        transform 0.2s ease,
        opacity 0.2s ease;
}


/* Keyboard accessibility */

.navbar a:focus-visible,
.nav-inner a:focus-visible,
.icon-button:focus-visible,
.menu-button:focus-visible,
.announcement-bar a:focus-visible,
.search-input button:focus-visible {
    outline: 3px solid var(--hot-pink);
    outline-offset: 4px;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
    .header-actions {
        gap: 1rem;
    }

    .icon-button span {
        display: none;
    }

    .nav-inner {
        gap: 2rem;
    }
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 700px) {
    /* Announcement */

    .announcement-bar {
        min-height: 30px;
        padding: 0 1rem;

        font-size: 0.5rem;
        text-align: center;
    }

    .announcement-bar a {
        display: none;
    }


    /* Header row */

    .navbar {
        min-height: 72px;
        padding: 0 6vw;

        gap: 0.75rem;
    }

    .logo {
        font-size: clamp(1.15rem, 5vw, 1.5rem);
    }

    .header-actions {
        margin-left: auto;
        margin-right: 0.25rem;

        gap: 1rem;
    }

    .icon-button {
        padding: 0.25rem;
    }
/* Hamburger visibility */

    .menu-button {
        display: flex;
        position: relative;
        z-index: 102;
    }


    /* Collapsed navigation */

    .primary-nav {
        display: none;

        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 101;

        background: var(--cream);
        border-bottom: var(--border);
        box-shadow: 0 12px 20px rgb(0 0 0 / 8%);
    }

    /*
     * IMPORTANT:
     * menu-open is applied to <header>,
     * not to .navbar.
     */

    header.menu-open .primary-nav {
        display: block;
    }

    .nav-inner {
        min-height: auto;
        padding: 0 6vw;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }

    .nav-inner a {
        padding: 1rem 0;

        border-bottom: 1px solid #ddd;

        font-size: 0.8rem;
    }

    .nav-inner a:last-child {
        border-bottom: 0;
    }

    .nav-inner a::after {
        display: none;
    }

    .nav-inner a:hover {
        background: var(--pink);
        color: var(--dark);
    }


    /* Hamburger → close icon */

    header.menu-open .menu-button span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    header.menu-open .menu-button span:nth-child(2) {
        opacity: 0;
    }

    header.menu-open .menu-button span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }


    /* Search */

    .search-panel {
        padding: 1.5rem 6vw;
    }

    .search-input {
        flex-direction: column;
    }

    .search-input input {
        width: 100%;
        padding: 1rem;
    }

    .search-input button {
        min-height: 48px;
        padding: 1rem;
    }
}


/* ========================================
   REDUCED MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {
    .logo,
    .icon-button,
    .nav-inner a,
    .nav-inner a::after,
    .menu-button span,
    .search-input button,
    .announcement-bar a {
        transition: none;
    }
}


/* CORPORATE QUALIFICATIONS */

.nav-disclaimer {
    margin: 0;
    padding: 0.55rem 5vw 0.65rem;
    border-bottom: 1px solid #d8d0cb;
    background: #f1e9e4;
    color: #6c625f;
    font-size: 0.58rem;
    font-weight: 600;
    line-height: 1.45;
    letter-spacing: 0.025em;
    text-align: center;
}

.nav-disclaimer::before {
    content: "† ";
    color: var(--hot-pink);
    font-weight: 900;
}

@media (max-width: 700px) {
    .nav-disclaimer {
        padding: 0.55rem 6vw;
        font-size: 0.52rem;
    }
}

/* ========================================
   ANNOUNCEMENT BAR
======================================== */

.announcement-bar {
    min-height: 32px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    background: var(--dark);
    color: var(--white);

    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.announcement-bar p {
    margin: 0;
}

.announcement-bar a {
    color: var(--pink);
    transition: color 0.15s ease;
}

.announcement-bar a:hover {
    color: var(--white);
}


/* ========================================
   MAIN HEADER
======================================== */

header:has(.navbar) {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--cream);
}

.navbar {
    min-height: 92px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    background: var(--cream);
    border-bottom: 1px solid #d8d0cb;
}

.logo {
    font-size: clamp(1.4rem, 2vw, 2rem);
    font-weight: 900;
    letter-spacing: -0.07em;

    transition: color 0.15s ease;
}

.logo:hover {
    color: var(--hot-pink);
}


/* ========================================
   HEADER ACTIONS
======================================== */

.header-actions {
    display: flex;
    align-items: center;
    gap: 1.75rem;
}

.icon-button {
    padding: 0;

    display: flex;
    align-items: center;
    gap: 0.45rem;

    border: 0;
    background: transparent;
    color: var(--dark);

    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.08em;

    cursor: pointer;

    transition: color 0.15s ease;
}

.icon-button:hover {
    color: var(--hot-pink);
}

.icon-button svg {
    width: 19px;
    height: 19px;

    flex-shrink: 0;

    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
}

/* ========================================
   PRIMARY NAVIGATION
======================================== */

.primary-nav {
    background: var(--cream);
    border-bottom: var(--border);
}

.nav-inner {
    min-height: 48px;
    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(1.5rem, 4vw, 4rem);
}

.nav-inner a {
    padding: 0.9rem 0;

    position: relative;

    font-size: 0.68rem;
    font-weight: 900;
    letter-spacing: 0.1em;

    transition: color 0.15s ease;
}

.nav-inner a::after {
    width: 0;
    height: 2px;

    content: "";

    position: absolute;
    bottom: 5px;
    left: 0;

    background: var(--hot-pink);

    transition: width 0.2s ease;
}

.nav-inner a:hover::after {
    width: 100%;
}

.nav-inner a:hover {
    color: var(--hot-pink);
}


/* ========================================
   SEARCH PANEL
======================================== */

.search-panel {
    padding: 2rem 5vw;

    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;

    background: var(--white);
    border-bottom: var(--border);
    box-shadow: 0 12px 20px rgb(0 0 0 / 8%);
}

.search-panel form {
    max-width: 1100px;
    margin: 0 auto;
}

.search-panel label {
    display: block;
    margin-bottom: 0.8rem;

    font-size: 0.65rem;
    font-weight: 900;
    letter-spacing: 0.12em;
}

.search-input {
    display: flex;

    border: 2px solid var(--dark);
}

.search-input input {
    min-width: 0;
    flex: 1;

    padding: 1rem;

    border: 0;
    outline: 0;

    background: transparent;

    font: inherit;
    font-size: 0.9rem;
}

.search-input input:focus-visible {
    outline: 2px solid var(--hot-pink);
    outline-offset: -3px;
}

.search-input button {
    padding: 0 1.5rem;

    border: 0;
    background: var(--dark);
    color: var(--white);

    font-size: 0.7rem;
    font-weight: 900;
    letter-spacing: 0.08em;

    cursor: pointer;
    transition: background 0.15s ease;
}

.search-input button:hover {
    background: var(--hot-pink);
}


/* ========================================
   MOBILE MENU BUTTON
======================================== */

.menu-button {
    display: none;

    width: 30px;
    min-width: 30px;

    padding: 5px 0;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;

    border: 0;
    background: transparent;

    cursor: pointer;
}

.menu-button span {
    width: 25px;
    height: 2px;

    display: block;
    flex-shrink: 0;

    background: var(--dark);

    transform-origin: center;

    transition:
        transform 0.2s ease,
        opacity 0.2s ease;
}


/* Keyboard accessibility */

.navbar a:focus-visible,
.nav-inner a:focus-visible,
.icon-button:focus-visible,
.menu-button:focus-visible,
.announcement-bar a:focus-visible,
.search-input button:focus-visible {
    outline: 3px solid var(--hot-pink);
    outline-offset: 4px;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
    .header-actions {
        gap: 1rem;
    }

    .icon-button span {
        display: none;
    }

    .nav-inner {
        gap: 2rem;
    }
}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 700px) {
    /* Announcement */

    .announcement-bar {
        min-height: 30px;
        padding: 0 1rem;

        font-size: 0.5rem;
        text-align: center;
    }

    .announcement-bar a {
        display: none;
    }


    /* Header row */

    .navbar {
        min-height: 72px;
        padding: 0 6vw;

        gap: 0.75rem;
    }

    .logo {
        font-size: clamp(1.15rem, 5vw, 1.5rem);
    }

    .header-actions {
        margin-left: auto;
        margin-right: 0.25rem;

        gap: 1rem;
    }

    .icon-button {
        padding: 0.25rem;
    }
/* Hamburger visibility */

    .menu-button {
        display: flex;
        position: relative;
        z-index: 102;
    }


    /* Collapsed navigation */

    .primary-nav {
        display: none;

        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 101;

        background: var(--cream);
        border-bottom: var(--border);
        box-shadow: 0 12px 20px rgb(0 0 0 / 8%);
    }

    /*
     * IMPORTANT:
     * menu-open is applied to <header>,
     * not to .navbar.
     */

    header.menu-open .primary-nav {
        display: block;
    }

    .nav-inner {
        min-height: auto;
        padding: 0 6vw;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }

    .nav-inner a {
        padding: 1rem 0;

        border-bottom: 1px solid #ddd;

        font-size: 0.8rem;
    }

    .nav-inner a:last-child {
        border-bottom: 0;
    }

    .nav-inner a::after {
        display: none;
    }

    .nav-inner a:hover {
        background: var(--pink);
        color: var(--dark);
    }


    /* Hamburger → close icon */

    header.menu-open .menu-button span:nth-child(1) {
        transform: translateY(7px) rotate(45deg);
    }

    header.menu-open .menu-button span:nth-child(2) {
        opacity: 0;
    }

    header.menu-open .menu-button span:nth-child(3) {
        transform: translateY(-7px) rotate(-45deg);
    }


    /* Search */

    .search-panel {
        padding: 1.5rem 6vw;
    }

    .search-input {
        flex-direction: column;
    }

    .search-input input {
        width: 100%;
        padding: 1rem;
    }

    .search-input button {
        min-height: 48px;
        padding: 1rem;
    }
}


/* ========================================
   REDUCED MOTION
======================================== */

@media (prefers-reduced-motion: reduce) {
    .logo,
    .icon-button,
    .nav-inner a,
    .nav-inner a::after,
    .menu-button span,
    .search-input button,
    .announcement-bar a {
        transition: none;
    }
}


/* CORPORATE QUALIFICATIONS */

.nav-disclaimer {
    margin: 0;
    padding: 0.55rem 5vw 0.65rem;
    border-bottom: 1px solid #d8d0cb;
    background: #f1e9e4;
    color: #6c625f;
    font-size: 0.58rem;
    font-weight: 600;
    line-height: 1.45;
    letter-spacing: 0.025em;
    text-align: center;
}

.nav-disclaimer::before {
    content: "† ";
    color: var(--hot-pink);
    font-weight: 900;
}

@media (max-width: 700px) {
    .nav-disclaimer {
        padding: 0.55rem 6vw;
        font-size: 0.52rem;
    }
}
</style>
