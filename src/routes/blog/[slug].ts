import type { RequestHandler } from '@sveltejs/kit';
import gm from 'gray-matter';
import { marked } from 'marked';
import * as path from 'path';

const postsLocation = 'blog-posts';

export async function get({ params }): RequestHandler {
	const { slug } = params;
	const contents = gm.read(path.join(postsLocation, `${slug}.md`));
	return { body: { post: marked(contents.content) } };
}
