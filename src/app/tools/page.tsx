import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { tools, toolCategoryMeta, type ToolCategory } from "@/lib/content";

export const metadata = {
  title: "工具抽屉"
};

const categories: ToolCategory[] = [
  "大模型",
  "AI 编程",
  "图片视频 AI",
  "设计 Demo",
  "办公效率",
  "AI 音乐"
];

export default function ToolsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <SectionHeading
            eyebrow="Toolbox"
            title="工具抽屉"
            description="按固定分类纵向翻阅全部工具，保留外部官网跳转和个人使用场景说明。"
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-2">
            <p className="mb-3 text-xs font-black uppercase text-neutral-500">分类</p>
            {categories.map((category) => (
              <a
                key={category}
                href={`#${category}`}
                className="block rounded-card border border-neutral-200 bg-white px-3 py-2 text-sm font-bold text-neutral-600 hover:text-ink"
              >
                {category}
              </a>
            ))}
          </div>
        </aside>

        <div className="space-y-8">
          {categories.map((category) => {
            const Icon = toolCategoryMeta[category].icon;
            const items = tools.filter((tool) => tool.category === category);

            return (
              <Reveal key={category}>
                <section id={category} className="scroll-mt-24">
                  <div className="mb-4 flex items-center gap-3">
                    <span className={`${toolCategoryMeta[category].color} grid h-11 w-11 place-items-center rounded-card text-ink`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-black text-ink">{category}</h2>
                      <p className="text-sm text-neutral-500">{items.length} 个工具</p>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {items.map((tool) => (
                      <a key={tool.name} href={tool.href} target="_blank" rel="noreferrer" className="group block">
                        <Card className="h-full p-5 transition-transform duration-200 hover:-translate-y-1">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-lg font-black text-ink">{tool.name}</h3>
                              <p className="mt-3 text-sm leading-7 text-neutral-600">{tool.description}</p>
                            </div>
                            <ArrowUpRight className="h-5 w-5 flex-none text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                          </div>
                          <div className="mt-5 flex flex-wrap gap-2">
                            <Badge>{tool.category}</Badge>
                            <Badge>{tool.bestFor}</Badge>
                          </div>
                        </Card>
                      </a>
                    ))}
                  </div>
                </section>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
