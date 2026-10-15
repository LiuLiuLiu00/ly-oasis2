import { notFound } from "next/navigation";

import { ContentDetail } from "@/components/site/content-detail";
import { getContentBySlug, videos } from "@/lib/content";

export function generateStaticParams() {
  return videos.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getContentBySlug("video", params.slug);
  return {
    title: item?.title ?? "视频教程"
  };
}

export default function VideoDetailPage({ params }: { params: { slug: string } }) {
  const item = getContentBySlug("video", params.slug);

  if (!item) {
    notFound();
  }

  return <ContentDetail item={item} />;
}
