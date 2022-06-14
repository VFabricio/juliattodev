interface PostProperties {
	title: string;
	date: number; // as Unix timestamp
	slug: string;
}

interface Post extends PostProperties {
	contents: string;
}

export type { Post, PostProperties };
