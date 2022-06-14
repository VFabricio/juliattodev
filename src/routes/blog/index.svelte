<script lang="ts">
	import type { PostProperties } from '$types/posts';
	export let posts: Array<PostProperties>;

	$: orderedPosts = [...posts].sort((p1, p2) => p1.date - p2.date);

	const relativizePath = (slug: string) => `/blog/${slug}`;
</script>

<h1>Latest Posts</h1>
<ul>
	{#each orderedPosts as post}
		<li>
			<a sveltekit:prefetch href={relativizePath(post.slug)}>{post.title}</a>
		</li>
	{/each}
</ul>

<style>
	h1 {
		color: var(--color-accent);
	}

	ul {
		margin-top: 1.25rem;
	}

	li {
		font-size: 1.25rem;
		line-height: 1.5;
		list-style: inside disc;
	}
</style>
