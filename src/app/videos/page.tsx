import { ContentCard } from "@/components/site/content-card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { videos } from "@/lib/content";

export const metadata = {
  title: "视频教程"
};

export default function VideosPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <SectionHeading
            eyebrow="Videos"
            title="AI 技术视频教程"
            description="用视频封面、章节拆解、命令文本和截图复盘来呈现操作型内容，适合作为学习手记的补充。"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((item) => (
            <Reveal key={item.slug}>
              <ContentCard item={item} href={`/videos/${item.slug}`} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
