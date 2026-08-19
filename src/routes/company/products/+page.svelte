<script>
    const products = [
        {
            number: '01',
            name: 'TRADITIONAL',
            tagline: 'THE CLASSIC. THE ONE YOUR PARENTS WARNED ABOUT.',
            class: 'traditional'
        },
        {
            number: '02',
            name: 'STRAWBERRY U-HAUL',
            tagline: 'NO TRIAL PERIOD. NO WAITING. NO GOING BACK.',
            class: 'strawberry'
        },
        {
            number: '03',
            name: 'LAVENDER MOTORCYCLE',
            tagline: 'RIDE OR DIE.',
            class: 'lavender'
        },
        {
            number: '04',
            name: 'ORANGE FLANNEL',
            tagline: 'SEASONLESS.',
            class: 'orange'
        },
        {
            number: '05',
            name: 'BLUE RASPBERRY DOC MARTENS',
            tagline: "WE CAN'T EXPLAIN IT EITHER.",
            class: 'blue'
        }
    ];
</script>

<svelte:head>
    <title>Products - LESBIANADE &reg;</title>
</svelte:head>

<section class="page-header">
    <p class="eyebrow">THE RANGE</p>

    <h1>FIND YOUR<br><span>FLAVOUR.</span>
    </h1>

    <p>Five scientifically formulated flavours. Sixty-seven active ingredients.</p>
</section>

<section class="products-page">
    {#each products as product}
        <article class={`product-card ${product.class}`}>
            <span class="product-number">{product.number}</span>

            <div class="product-orb"></div>

            <div class="product-information">
                <h2>{product.name}</h2>
                <span>{product.tagline}</span>
            </div>
        </article>
    {/each}
</section>

<section class="products-footer">
    <p>Every LESBIANADE &reg; flavour contains exactly <strong>67 active ingredients.</strong></p>
</section>