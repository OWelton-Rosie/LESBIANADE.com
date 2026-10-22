
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
            name: 'U-HAUL BY FRIDAY',
            tagline: 'NO TRIAL PERIOD. NO WAITING. NO GOING BACK.',
            class: 'strawberry'
        },
        {
            number: '03',
            name: 'LESBIAN AGENDA',
            tagline: 'THE FUTURE IS HYDRATED.',
            class: 'agenda'
        },
        {
            number: '04',
            name: 'DOC MARTENS & FEELINGS',
            tagline: "WE CAN'T EXPLAIN IT EITHER.",
            class: 'docs'
        },
        {
            number: '05',
            name: 'FLANNEL DYNASTY',
            tagline: 'SOFT ON THE OUTSIDE. SEASONLESS ON THE INSIDE.',
            class: 'flannel'
        },
                {
            number: '06',
            name: 'CARABINER CRUSH',
            tagline: 'CLIP IN. CHUG OUT.',
            class: 'carabiner'
        },
        {
            number: '07',
            name: 'JOINT MORTGAGE',
            tagline: 'A LONG-TERM COMMITMENT TO HYDRATION.',
            class: 'mortgage'
        }
    ];
</script>

<svelte:head>
    <title>Products - LESBIANADE™</title>
</svelte:head>

<section class="page-header">
    <p class="eyebrow">THE RANGE</p>

    <h1>FIND YOUR<br><span>FLAVOUR.</span>
    </h1>

    <p>Seven scientifically formulated flavours. Sixty-seven active ingredients.</p>
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
    <p>Every LESBIANADE™ flavour contains exactly <strong>67 active ingredients.</strong></p>
</section>
