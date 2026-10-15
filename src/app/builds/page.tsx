import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { builds } from "@/lib/content";

export const metadata = {
  title: "Builds"
};

export default function BuildsPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <SectionHeading
            eyebrow="Builds"
            title="自制 Skill 项目"
            description="记录个人自制 AI 技能、自动化流程和可复用案例，让教程沉淀成可以复用的生产力资产。"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {builds.map((item) => (
            <Reveal key={item.slug}>
              <Link href={`/builds/${item.slug}`} className="group block h-full">
                <Card className="h-full overflow-hidden transition-transform duration-200 hover:-translate-y-1">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={item.cover}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-4 p-5">
                    <Badge>{item.status}</Badge>
                    <div>
                      <h2 className="text-xl font-black text-ink">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-neutral-600">{item.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.stack.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm font-black text-ink">
                      查看项目详情
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
