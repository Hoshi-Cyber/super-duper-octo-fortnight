import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;

export async function GET(ctx: APIContext) {
  const posts = await getCollection("blog");

  const items = posts.map((post) => {
    // post.slug looks like "category/filename"
    const [category, ...rest] = post.slug.split("/");
    const slug = rest.join("/");
    return {
      title: String(post.data.title ?? ""),
      description: String(post.data.description ?? ""),
      pubDate: post.data.date ? new Date(post.data.date as any) : undefined,
      // final URL: /blog/<category>/<slug>/
      link: `/blog/${category}/${slug}/`,
    };
  });

  return rss({
    title: "CVWriting Blog",
    description: "Latest articles from CVWriting",
    site: String(ctx.site), // required by @astrojs/rss
    items,
  });
}
