import { ArrowRight, CheckCircle2, Compass, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContentCard } from "@/components/site/content-card";
import { LikeButton } from "@/components/site/like-button";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { TypingText } from "@/components/site/typing-text";
import { allContent, builds, sections, tutorials, videos } from "@/lib/content";

export default function HomePage() {
  const featured = allContent.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="pb-20">
      <section className="relative overflow-hidden border-b border-ink bg-paper">
        <div className="absolute inset-x-0 top-0 h-2 bg-[repeating-linear-gradient(90deg,#171717_0_44px,#5ed6d1_44px_88px,#f6d94b_88px_132px,#ff7c66_132px_176px)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <Reveal className="flex flex-col justify-center">
            <div className="mb-6 flex flex-wrap gap-2">
              <Badge className="border-ink bg-ink text-white">IT 工作者的工具手记</Badge>
              <Badge className="border-ink bg-white shadow-[3px_3px_0_#171717]">学习手记 / 视频 / 工具抽屉 / Builds</Badge>
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.12] text-ink md:text-6xl lg:text-7xl">
              我把 AI 工具学习，
              <br />
              <span className="mt-2 inline-block min-h-[1.18em] border-b-4 border-ink bg-lemon px-2 shadow-[8px_8px_0_#171717]">
                <span>
                  <TypingText
                    words={["写成手记。", "拆成练习。", "收进工具抽屉。", "做成可复用 Skill。"]}
                    delay={0.4}
                  />
                </span>
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
              这里不是工具清单仓库，而是一张持续更新的个人工作台：记录我怎么试工具、怎么踩坑、怎么把一次学习变成下一次能直接复用的流程。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/labs">
                  读学习手记
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/tools">
                  打开工具抽屉
                  <Compass className="h-4 w-4" />
                </Link>
              </Button>
              <LikeButton className="hidden sm:inline-flex" />
            </div>
          </Reveal>

          <Reveal className="min-w-0">
            <div className="-rotate-1 overflow-hidden rounded-card border-2 border-ink bg-white shadow-[12px_12px_0_#171717]">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/visuals/home-console.svg"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-0 border-t border-neutral-200 md:grid-cols-3">
                {[
                  ["手记", tutorials.length],
                  ["视频", videos.length],
                  ["Builds", builds.length]
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-neutral-200 p-4 md:border-b-0 md:border-r md:last:border-r-0">
                    <p className="text-2xl font-black text-ink">{value}</p>
                    <p className="mt-1 text-xs font-bold text-neutral-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <SectionHeading
          eyebrow="Core"
          title="三个内容抽屉"
          description="长文手记、工具抽屉和 Builds 构成主路径，首页只保留真正高频的浏览方式。"
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {sections.map((item) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.href}>
                <Link href={item.href} className="group block h-full">
                  <Card className="flex h-full flex-col justify-between border-ink p-5 shadow-[6px_6px_0_#171717] transition-transform duration-200 hover:-translate-y-1">
                    <div>
                      <div className={`${item.accent} mb-5 grid h-11 w-11 place-items-center rounded-card text-ink`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-black text-ink">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-neutral-600">{item.description}</p>
                    </div>
                    <div className="mt-6 flex items-center text-sm font-black text-ink">
                      快速直达
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
          <SectionHeading
            eyebrow="Featured"
            title="最近摆上工作台的内容"
            description="先看主题、难度、阅读时长和核心收获，再进入详情阅读。"
            href="/labs"
            action="查看学习手记"
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((item) => (
              <Reveal key={item.slug}>
                <ContentCard
                  item={item}
                  href={item.kind === "tutorial" ? `/labs/${item.slug}` : `/videos/${item.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="sticky top-24 rounded-card border-2 border-ink bg-ink p-6 text-white shadow-[8px_8px_0_#5ed6d1]">
              <PlayCircle className="h-10 w-10 text-moss" />
              <h2 className="mt-5 text-2xl font-black">学习站的内容节奏</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                日常输出不追求大而全，而是围绕一个 AI 工具或一个实操问题，把输入、过程、结果和复盘写清楚。
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {[
              "先把工具能力拆成真实工作场景",
              "再用学习手记记录稳定流程",
              "用视频拆解展示操作细节",
              "最后沉淀成工具抽屉或自制 Skill"
            ].map((item) => (
              <Reveal key={item}>
                <Card className="flex items-start gap-4 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-coral" />
                  <p className="text-base font-bold leading-7 text-ink">{item}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
