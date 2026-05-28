import type { Metadata } from "next";
import { BlogArticleTemplate } from "../../components/blog/blog-article-template";
import { blogPostMap } from "../../data/blog-posts";

const post = blogPostMap[
  "custom-made-window-blinds-shutters-in-dublin-ireland"
];

export const metadata: Metadata = {
  title: `${post.title} - Priceless Blinds`,
  description: post.metaDescription,
};

export default function CustomMadeWindowBlindsBlogPage() {
  return <BlogArticleTemplate post={post} />;
}
