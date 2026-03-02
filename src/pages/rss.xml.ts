import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { isEnVariant } from '../content.config';
import site from '../data/site.json';

export async function GET(context: { site: URL }) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft && !isEnVariant(p.id))
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishedAt,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>${site.locale}</language>`,
  });
}
