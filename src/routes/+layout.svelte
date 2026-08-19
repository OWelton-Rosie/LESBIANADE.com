<script>

    import '$lib/styles/base.css';
    import '$lib/styles/navigation.css';
    import '$lib/styles/hero.css';
    import '$lib/styles/products.css';
    import '$lib/styles/science.css';
    import '$lib/styles/history.css';
    import '$lib/styles/partners.css';
    import '$lib/styles/footer.css';

    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
	import Name from '$lib/components/Name.svelte';


	let { children } = $props();
</script>

<svelte:head>
</svelte:head>

<Navbar />
{@render children()}
<Footer />
