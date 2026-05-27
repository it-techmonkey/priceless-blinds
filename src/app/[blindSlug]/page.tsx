import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlindDetailTemplate } from "../../components/blinds/blind-detail-template";
import { blindDetailPageMap, blindDetailPages } from "../../data/blinds";

type BlindPageProps = {
  params: Promise<{ blindSlug: string }>;
};

export function generateStaticParams() {
  return blindDetailPages.map((page) => ({
    blindSlug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlindPageProps): Promise<Metadata> {
  const { blindSlug } = await params;
  const page = blindDetailPageMap[blindSlug];

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} - Priceless Blinds`,
    description: page.metaDescription,
  };
}

export default async function BlindCategoryPage({ params }: BlindPageProps) {
  const { blindSlug } = await params;
  const page = blindDetailPageMap[blindSlug];

  if (!page) {
    notFound();
  }

  return <BlindDetailTemplate data={page} />;
}
