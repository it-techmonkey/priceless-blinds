import type { Metadata } from "next";
import { BlogArticleTemplate } from "../../components/blog/blog-article-template";
import { blogPostMap } from "../../data/blog-posts";

const post = blogPostMap["window-designer-blinds-dublin-incredible-value"];

export const metadata: Metadata = {
  title: `${post.title} - Priceless Blinds`,
  description: post.metaDescription,
};

export default function WindowDesignerBlindsBlogPage() {
  return <BlogArticleTemplate post={post} />;
}
