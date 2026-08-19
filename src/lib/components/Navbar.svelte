<script>
    import Name from './Name.svelte';

    let menuOpen = $state(false);
    let searchOpen = $state(false);

    function closeMenu() {
        menuOpen = false;
    }

    function toggleSearch() {
        searchOpen = !searchOpen;
        menuOpen = false;
    }
</script>

<header class:menu-open={menuOpen} class:search-open={searchOpen}>
    <div class="announcement-bar">
        <p>FREE SHIPPING ON ORDERS OVER $67</p>

        <a href="/company/products">SHOP NOW →</a></div>

    <div class="navbar">
        <a href="/" class="logo" onclick={closeMenu} aria-label="LESBIANADE™ home"><Name /></a>

        <div class="header-actions">
            <button class="icon-button search-button" aria-label="Search" aria-expanded={searchOpen} onclick={toggleSearch}>
                <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>

                <span>SEARCH</span>
            </button>
        </div>

        <button class="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onclick={() => (menuOpen = !menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>

    {#if searchOpen}
        <div class="search-panel">
            <form action="/search" method="GET">
                <label for="site-search">SEARCH LESBIANADE™</label>

                <div class="search-input">
                    <input id="site-search" name="q" type="search" placeholder="Search products, ingredients, history..." autocomplete="off" />

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

            <a href="/contact" onclick={closeMenu}>CONTACT</a>
        </div>
    </nav>
</header>