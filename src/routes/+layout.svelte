<script>

    import '$lib/styles/base.css';
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
