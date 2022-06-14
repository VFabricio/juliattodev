<script>
	import Header from '../components/Header.svelte';
</script>

<Header />
<main>
	<slot />
</main>

<style>
	main {
		padding: 2.5em 1em;
	}
</style>
