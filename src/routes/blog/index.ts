import type { PostProperties } from '$types/posts';
import * as gm from 'gray-matter';
import * as fs from 'node:fs';
import * as path from 'node:path';

const parsePost = (path: string): PostProperties => {
	const { data } = gm.read(path);
	return {
		title: data.title,
		date: Date.parse(data.date),
		slug: data.slug
	};
};

const postsLocation = 'blog-posts';

export async function get() {
	const postFiles = fs.readdirSync(postsLocation).map((p) => path.join(postsLocation, p));

	const posts = postFiles.map(parsePost);
	return { body: { posts } };
}
