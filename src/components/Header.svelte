<div class="container">
	<div class="photo" />
	<a href="/" class="main-link">juliatto.dev</a>
	<a href="/blog" class="blog-link">Blog</a>
	<a href="/about" class="about-link">About</a>
</div>

<style>
	.about-link {
		margin-left: 1em;
	}

	.blog-link {
		margin-left: auto;
	}

	.container {
		align-items: center;
		background-color: var(--color-neutral-2-strong);
		display: flex;
		height: 4rem;
		padding: 0 1em;
	}

	.main-link {
		font-size: 1.5rem;
		margin-left: 1em;
	}

	.photo {
		aspect-ratio: 1;
		border-radius: 100%;
		background-color: lightgrey;
		height: 100%;
		transform: translateY(0.5em);
	}
</style>
