import { ContentCard } from "@/components/site/content-card";
import { LabSwitcher } from "@/components/site/lab-switcher";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { tutorials } from "@/lib/content";

export const metadata = {
  title: "学习手记"
};

export default function LabsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-neutral-200 bg-white/85">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <SectionHeading
            eyebrow="Labs"
            title="学习手记"
            description="长文步骤、截图、代码和互动练习放在同一个入口里，让每次工具学习都能沉淀成可复用流程。"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <SectionHeading
          eyebrow="Notes"
          title="长文教程"
          description="把每次 AI 工具学习写成一张可追溯的工作台记录。"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((item) => (
            <Reveal key={item.slug}>
              <ContentCard item={item} href={`/labs/${item.slug}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 md:px-6">
        <SectionHeading
          eyebrow="Practice"
          title="交互式练习"
          description="把提示词、Agent 任务交接、工具评测和视频笔记拆成小练习。"
        />
        <Reveal>
          <div className="mt-8">
            <LabSwitcher />
          </div>
        </Reveal>
      </section>
    </div>
  );
}
