import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  action?: string;
};

export function SectionHeading({ eyebrow, title, description, href, action }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 w-fit rounded-card border border-ink bg-white px-2 py-1 text-xs font-black uppercase text-ink shadow-[3px_3px_0_#171717]">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl font-black text-ink md:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-sm leading-7 text-neutral-600 md:text-base">{description}</p>
        ) : null}
      </div>
      {href && action ? (
        <Button asChild variant="secondary">
          <Link href={href}>
            {action}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : null}
    </div>
  );
}
