import type { Post } from '$types/posts';
import type { RequestHandler } from '@sveltejs/kit';
import * as gm from 'gray-matter';
import { marked } from 'marked';
import * as path from 'node:path';

const postsLocation = 'blog-posts';

export async function get({ params }): RequestHandler {
	const { slug } = params;
	const contents = gm.read(path.join(postsLocation, `${slug}.md`));
	return { body: { post: marked(contents.content) } };
}
