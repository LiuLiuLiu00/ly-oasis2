import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ContentItem } from "@/lib/content";
import { cn } from "@/lib/utils";

const accentClass = {
  aqua: "bg-aqua",
  coral: "bg-coral",
  lemon: "bg-lemon",
  moss: "bg-moss",
  grape: "bg-grape"
};

export function ContentCard({ item, href }: { item: ContentItem; href: string }) {
  return (
    <Link href={href} className="group block">
      <Card className="h-full overflow-hidden border-ink shadow-[5px_5px_0_#171717] transition-transform duration-200 hover:-translate-y-1">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-100">
          <Image
            src={item.cover}
            alt=""
            fill
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span
            className={cn(
              "absolute left-4 top-4 rounded-card px-2.5 py-1 text-xs font-bold text-ink",
              accentClass[item.accent]
            )}
          >
            {item.kind === "tutorial" ? "手记" : "视频"}
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{item.category}</Badge>
            <Badge>{item.level}</Badge>
            <span className="text-xs font-medium text-neutral-500">{item.duration}</span>
          </div>
          <div>
            <h3 className="text-lg font-black leading-snug text-ink">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600">{item.excerpt}</p>
          </div>
          <div className="flex items-center justify-between border-t border-neutral-100 pt-4 text-sm font-bold text-ink">
            <span>{item.date}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
