import { notFound } from "next/navigation";

import { ContentDetail } from "@/components/site/content-detail";
import { getContentBySlug, tutorials } from "@/lib/content";

export function generateStaticParams() {
  return tutorials.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getContentBySlug("tutorial", params.slug);
  return {
    title: item?.title ?? "学习手记"
  };
}

export default function LabDetailPage({ params }: { params: { slug: string } }) {
  const item = getContentBySlug("tutorial", params.slug);

  if (!item) {
    notFound();
  }

  return <ContentDetail item={item} />;
}
