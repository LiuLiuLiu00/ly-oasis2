import { CalendarDays, Clock, PlayCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { ContentItem } from "@/lib/content";

export function ContentDetail({ item }: { item: ContentItem }) {
  const backHref = item.kind === "tutorial" ? "/labs" : "/videos";

  return (
    <article className="pb-20">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge>{item.category}</Badge>
              <Badge>{item.level}</Badge>
              <Badge>{item.kind === "tutorial" ? "学习手记" : "视频教程"}</Badge>
            </div>
            <h1 className="text-3xl font-black leading-tight text-ink md:text-5xl">{item.title}</h1>
            <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg">{item.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                {item.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {item.duration}
              </span>
            </div>
            <div className="mt-8">
              <Button asChild variant="secondary">
                <Link href={backHref}>返回列表</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-neutral-200 bg-neutral-100 shadow-soft">
            <Image
              src={item.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {item.kind === "video" ? (
        <section className="mx-auto max-w-5xl px-4 pt-10 md:px-6">
          <div className="relative aspect-video overflow-hidden rounded-card border border-neutral-200 bg-ink shadow-soft">
            <Image
              src={item.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 grid place-items-center bg-ink/25">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-white text-ink shadow-soft">
                <PlayCircle className="h-10 w-10" />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:px-6 lg:grid-cols-[220px_minmax(0,1fr)]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3">
            <p className="text-xs font-black uppercase text-neutral-500">目录</p>
            {item.steps.map((step, index) => (
              <a
                key={step.title}
                href={`#step-${index + 1}`}
                className="block rounded-card border border-neutral-200 bg-white px-3 py-2 text-sm font-bold text-neutral-600 hover:text-ink"
              >
                {index + 1}. {step.title}
              </a>
            ))}
          </div>
        </aside>

        <div className="article-prose space-y-8">
          {item.steps.map((step, index) => (
            <Card key={step.title} id={`step-${index + 1}`} className="overflow-hidden">
              <div className="border-b border-neutral-200 bg-white p-5 md:p-7">
                <p className="text-sm font-black text-coral">Step {index + 1}</p>
                <h2 className="mt-2 text-2xl font-black leading-tight text-ink">{step.title}</h2>
                <p className="mt-4 text-base leading-8 text-neutral-600">{step.body}</p>
              </div>
              <div className="grid gap-0 md:grid-cols-[1fr_0.9fr]">
                <div className="relative min-h-[260px]">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-neutral-200 bg-neutral-950 p-5 md:border-l md:border-t-0">
                  {step.code ? (
                    <pre>
                      <code>{step.code}</code>
                    </pre>
                  ) : (
                    <div className="flex h-full min-h-[220px] items-center justify-center rounded-card border border-white/10 bg-neutral-900 p-5 text-center text-sm leading-7 text-neutral-300">
                      这一节以流程图和实操截图为主，适合在阅读时对照操作。
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </article>
  );
}
