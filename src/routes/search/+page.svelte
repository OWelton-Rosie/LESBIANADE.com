
<script>
    import { page } from '$app/state';


const entries = [
    {
        title: 'TRADITIONAL',
        category: 'PRODUCTS',
        description: 'The classic flavour. The original LESBIANADE formula.',
        href: '/company/products',
        keywords: 'classic original hydration sports drink citrus'
    },
    {
        title: 'CARABINER CRUSH',
        category: 'PRODUCTS',
        description: 'Clip in. Chug out.',
        href: '/company/products',
        keywords: 'carabiner climbing outdoors lime green'
    },
    {
        title: 'LESBIAN AGENDA',
        category: 'PRODUCTS',
        description: 'The future is hydrated. The contents of our agenda remain confidential.',
        href: '/company/products',
        keywords: 'gay agenda tropical punch politics conspiracy'
    },
    {
        title: 'DOC MARTENS & FEELINGS',
        category: 'PRODUCTS',
        description: "We can't explain it either.",
        href: '/company/products',
        keywords: 'doc martens boots black cherry fashion alternative'
    },
    {
        title: 'FLANNEL DYNASTY',
        category: 'PRODUCTS',
        description: 'Soft on the outside. Seasonless on the inside.',
        href: '/company/products',
        keywords: 'flannel shirt blood orange fashion clothing'
    },
    {
        title: 'U-HAUL BY FRIDAY',
        category: 'PRODUCTS',
        description: 'No trial period. No waiting. No going back.',
        href: '/company/products',
        keywords: 'uhaul u haul strawberry lemonade relationship moving'
    },
    {
        title: 'JOINT MORTGAGE',
        category: 'PRODUCTS',
        description: 'A long-term commitment to hydration.',
        href: '/company/products',
        keywords: 'mortgage house home kiwi lime relationship commitment'
    },
    {
        title: 'THE SCIENCE',
        category: 'INGREDIENTS',
        description: 'Discover our classified 67-active-ingredient formulation.',
        href: '/company/science',
        keywords: 'ingredients research scientists formulation laboratory'
    },
    {
        title: 'OUR HISTORY',
        category: 'COMPANY',
        description: 'Established in 1967 on the Greek island of Lesbos.',
        href: '/company/history',
        keywords: '1967 timeline greek greece lesbos origin'
    },
    {
        title: 'OUR PARTNERS',
        category: 'COMPANY',
        description: "Explore our fictional partnerships across women's sport.",
        href: '/company/partners',
        keywords: 'cycling rugby football soccer cricket netball teams'
    },
    {
        title: 'SUSTAINABILITY',
        category: 'COMPANY',
        description: 'Our approach to packaging, manufacturing and the environment.',
        href: '/company/sustainability',
        keywords: 'planet environment recycling packaging carbon'
    },
    {
        title: 'CAREERS',
        category: 'COMPANY',
        description: 'Explore opportunities at LESBIANADE.',
        href: '/careers',
        keywords: 'jobs employment work recruitment'
    },
    {
        title: 'CONTACT US',
        category: 'CONTACT',
        description: 'Get in touch with our team.',
        href: '/contact',
        keywords: 'email enquiries questions'
    },
    {
        title: 'PRESS INQUIRIES',
        category: 'CONTACT',
        description: 'Information for journalists and media organisations.',
        href: '/contact/press',
        keywords: 'media journalism press kit'
    },
    {
        title: 'PARTNERSHIP INQUIRIES',
        category: 'CONTACT',
        description: 'Discuss a potential partnership with our team.',
        href: '/contact/partnerships',
        keywords: 'sponsorship collaboration'
    },
    {
        title: 'PRIVACY POLICY',
        category: 'LEGAL',
        description: 'How this fictional company handles privacy.',
        href: '/legal/privacy',
        keywords: 'data personal information cookies'
    },
    {
        title: 'TERMS AND CONDITIONS',
        category: 'LEGAL',
        description: 'The terms governing this fictional website.',
        href: '/legal/terms',
        keywords: 'terms conditions rules'
    },
    {
        title: 'DIVERSITY, EQUITY AND INCLUSION',
        category: 'LEGAL',
        description: 'Our fictional corporate inclusion commitments.',
        href: '/legal/dei',
        keywords: 'diversity equity inclusion community'
    }
];



    let query = $derived(
        (page.url.searchParams.get('q') ?? '').trim()
    );

    let results = $derived.by(() => {
        const normalise = (value) =>
            value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

        const terms = normalise(query)
            .split(/\s+/)
            .filter(Boolean);

        if (!terms.length) return [];

        return entries
            .map((entry) => {
                const title = normalise(entry.title);
                const category = normalise(entry.category);
                const description = normalise(entry.description);
                const keywords = normalise(entry.keywords);

                const searchable = `${title} ${category} ${description} ${keywords}`;

                const matched = terms.every((term) =>
                    searchable.includes(term)
                );

                let score = 0;

                for (const term of terms) {
                    if (title.includes(term)) score += 10;
                    if (category.includes(term)) score += 4;
                    if (description.includes(term)) score += 3;
                    if (keywords.includes(term)) score += 2;
                }

                return { ...entry, matched, score };
            })
            .filter((entry) => entry.matched)
            .sort((a, b) => b.score - a.score);
    });
</script>

<svelte:head>
    <title>
        {query ? `Search: ${query}` : 'Search'} - LESBIANADE™
    </title>
    <meta
        name="description"
        content="Search products, ingredients and company information from LESBIANADE™."
    />
</svelte:head>

<section class="page-header">
    <p class="eyebrow">FIND YOUR FORMULA</p>
    <h1>SEARCH <span>LESBIANADE™.</span></h1>
    <p>Products, ingredients, history and everything in between.</p>
</section>

<section class="site-search-results">
    <form action="/search" method="GET" class="site-search-form">
        <label for="search-query">WHAT ARE YOU LOOKING FOR?</label>

        <div class="search-input">
            <input
                id="search-query"
                name="q"
                type="search"
                value={query}
                placeholder="Try 'strawberry', 'history' or '67'..."
                autocomplete="off"
            />
            <button type="submit">SEARCH →</button>
        </div>
    </form>

    {#if query}
        <div class="results-heading">
            <p class="eyebrow">SEARCH RESULTS</p>
            <h2>
                {results.length}
                {results.length === 1 ? 'RESULT' : 'RESULTS'}
            </h2>
            <p>FOR “{query}”</p>
        </div>

        {#if results.length}
            <div class="results-list">
                {#each results as result (result.href + result.title)}
                    <a class="result-item" href={result.href}>
                        <div>
                            <span class="result-category">{result.category}</span>
                            <h3>{result.title}</h3>
                            <p>{result.description}</p>
                        </div>
                        <span class="result-arrow" aria-hidden="true">↗</span>
                    </a>
                {/each}
            </div>
        {:else}
            <div class="no-results">
                <h2>NOTHING IN THE FRIDGE.</h2>
                <p>
                    We couldn't find anything matching “{query}”.
                    Try a product name, ingredient or company section.
                </p>
                <a href="/company/products" class="button primary">
                    EXPLORE OUR PRODUCTS →
                </a>
            </div>
        {/if}
    {:else}
        <div class="search-suggestions">
            <p class="eyebrow">NOT SURE WHERE TO START?</p>
            <div>
                <a href="/company/products">EXPLORE PRODUCTS ↗</a>
                <a href="/company/science">OUR SCIENCE ↗</a>
                <a href="/company/history">OUR HISTORY ↗</a>
            </div>
        </div>
    {/if}
</section>

<style>
    .site-search-results {
        padding: 6rem 8vw 9rem;
    }

    .site-search-form {
        max-width: 900px;
        margin: 0 auto;
    }

    .site-search-form label {
        display: block;
        margin-bottom: 1rem;
        font-size: 0.7rem;
        font-weight: 900;
        letter-spacing: 0.12em;
    }

    .results-heading {
        margin-top: 5rem;
        margin-bottom: 2rem;
    }

    .results-heading h2,
    .no-results h2 {
        margin-bottom: 0.8rem;
        font-size: clamp(2.5rem, 6vw, 5rem);
    }

    .results-heading > p:last-child {
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.08em;
    }

    .results-list {
        border-top: 2px solid var(--dark);
    }

    .result-item {
        padding: 1.75rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        border-bottom: 1px solid #d8d0cb;
        transition: padding 0.15s ease, color 0.15s ease;
    }

    .result-item:hover {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        color: var(--hot-pink);
    }

    .result-category {
        font-size: 0.65rem;
        font-weight: 900;
        letter-spacing: 0.12em;
    }

    .result-item h3 {
        margin: 0.7rem 0;
        font-size: clamp(1.4rem, 3vw, 2.2rem);
    }

    .result-item p {
        margin-bottom: 0;
        color: #625a56;
        line-height: 1.5;
    }

    .result-arrow {
        font-size: 1.8rem;
        font-weight: 800;
    }

    .no-results {
        padding: 3rem 0;
        max-width: 650px;
    }

    .no-results p {
        margin-bottom: 2rem;
        line-height: 1.7;
    }

    .search-suggestions {
        margin-top: 4rem;
    }

    .search-suggestions > div {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
    }

    .search-suggestions a {
        font-size: 0.75rem;
        font-weight: 900;
        letter-spacing: 0.05em;
    }

    .search-suggestions a:hover {
        color: var(--hot-pink);
    }

    @media (max-width: 700px) {
        .site-search-results {
            padding: 4rem 7vw 6rem;
        }

        .result-item {
            gap: 1rem;
        }

        .result-item p {
            font-size: 0.9rem;
        }

        .search-suggestions > div {
            flex-direction: column;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        .result-item {
            transition: none;
        }
    }
</style>
