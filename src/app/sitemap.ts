import type { MetadataRoute } from "next";
import { blogPosts } from "../data/blog-posts";
import { blindDetailPages } from "../data/blinds";
import { roomBlindPages } from "../data/room-blinds";

const siteUrl = "https://www.pricelessblinds.ie";
const lastModified = new Date();

const staticRoutes = [
  { path: "/", priority: 1 },
  { path: "/about-windows-blinds-in-ireland", priority: 0.8 },
  { path: "/ireland-blinds-quality-blinds-in-dublin", priority: 0.9 },
  { path: "/before-and-after-blinds", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/locations", priority: 0.7 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms-conditions", priority: 0.3 },
];

function absoluteUrl(path: string) {
  return path === "/" ? `${siteUrl}/` : `${siteUrl}${path}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));

  const blindPages = blindDetailPages.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const roomPages = roomBlindPages.map((page) => ({
    url: absoluteUrl(`/${page.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const posts = blogPosts.map((post) => ({
    url: absoluteUrl(`/${post.slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...blindPages, ...roomPages, ...posts];
}
