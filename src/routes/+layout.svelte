<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<style>
    :global(body) {
		background-color: #494949;
	}
</style>

{@render children()}
