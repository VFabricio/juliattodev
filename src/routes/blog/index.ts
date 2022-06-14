import type { PostProperties } from '$types/posts';

export async function get() {
	const posts: Array<PostProperties> = [
		{
			title: 'Post 1',
			date: Date.parse('2022-06-14T00:30-03:00'),
			slug: 'post-1'
		},
		{
			title: 'Post 2',
			date: Date.parse('2022-05-14T00:30-03:00'),
			slug: 'post-2'
		}
	];
	return { body: { posts } };
}
