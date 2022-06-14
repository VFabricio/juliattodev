<script lang="ts">
	import type { Post } from '$types/posts';
	export let post: Post;
</script>

<article>
	{@html post}
</article>

<style>
	article :global(:is(h1, h2)) {
		color: var(--color-accent);
	}

	article :global(h1) {
		margin-bottom: 1.5rem;
	}

	article :global(h2) {
		margin-bottom: 1.25rem;
	}

	article :global(p) {
		line-height: 1.5;
		text-align: justify;
	}

	article :global(p + p) {
		margin-top: 1rem;
	}
</style>
