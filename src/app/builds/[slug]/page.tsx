import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { builds, getBuildBySlug } from "@/lib/content";

export function generateStaticParams() {
  return builds.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getBuildBySlug(params.slug);
  return {
    title: item?.title ?? "Builds"
  };
}

export default function BuildDetailPage({ params }: { params: { slug: string } }) {
  const item = getBuildBySlug(params.slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="pb-20">
      <section className="border-b border-neutral-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center">
            <Badge className="mb-5 w-fit">{item.status}</Badge>
            <h1 className="text-3xl font-black leading-tight text-ink md:text-5xl">{item.title}</h1>
            <p className="mt-5 text-lg leading-8 text-neutral-600">{item.subtitle}</p>
            <p className="mt-5 text-base leading-8 text-neutral-600">{item.scenario}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.stack.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="secondary">
                <Link href="/builds">返回 Builds</Link>
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

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:px-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-black text-ink">项目用途</h2>
          <div className="mt-5 grid gap-3">
            {item.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 rounded-card border border-neutral-200 bg-paper p-4">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-coral" />
                <p className="text-sm font-semibold leading-7 text-neutral-700">{outcome}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-6">
          <h2 className="text-2xl font-black text-ink">实战可复用案例</h2>
          <div className="mt-5 grid gap-3">
            {item.reusableCases.map((useCase) => (
              <div key={useCase} className="rounded-card border border-neutral-200 bg-white p-4">
                <p className="text-sm font-black text-ink">{useCase}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </article>
  );
}
