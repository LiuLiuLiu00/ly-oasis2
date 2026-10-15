"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { labItems } from "@/lib/content";
import { cn } from "@/lib/utils";

const labSteps = [
  ["输入任务", "粘贴一句真实需求或一个工具链接，先判断它属于学习、评测还是工程任务。"],
  ["拆成变量", "提取目标、输入、约束、输出格式和验收标准，减少模型自由发挥空间。"],
  ["生成练习", "输出可复用提示词、操作步骤和复盘问题，沉淀到手记或工具抽屉。"]
];

export function LabSwitcher() {
  const [active, setActive] = useState(0);
  const current = labItems[active];
  const Icon = current.icon;

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-3">
        {labItems.map((item, index) => {
          const ItemIcon = item.icon;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "flex items-start gap-4 rounded-card border border-neutral-200 bg-white p-4 text-left transition-colors",
                active === index && "border-ink shadow-line"
              )}
            >
              <span className="grid h-10 w-10 flex-none place-items-center rounded-card bg-mist text-ink">
                <ItemIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="flex items-center gap-2 text-base font-black text-ink">
                  {item.title}
                  <span className="rounded bg-lemon px-2 py-0.5 text-xs font-bold">{item.status}</span>
                </span>
                <span className="mt-2 block text-sm leading-6 text-neutral-600">{item.description}</span>
              </span>
            </button>
          );
        })}
      </div>

      <Card className="overflow-hidden">
        <div className="border-b border-neutral-200 bg-ink p-5 text-white">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-card bg-moss text-ink">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase text-neutral-400">Interactive Lab</p>
              <h2 className="text-2xl font-black">{current.title}</h2>
            </div>
          </div>
        </div>
        <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-neutral-200 bg-white p-5 md:border-b-0 md:border-r">
            <p className="text-sm font-bold text-neutral-500">练习输入</p>
            <div className="mt-4 rounded-card border border-neutral-200 bg-paper p-4 font-mono text-sm leading-7 text-neutral-700">
              我想学习一个新的 AI 工具，但不知道如何判断它是否适合我的工作流。
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold text-ink">
              生成任务包
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>
          <div className="bg-white p-5">
            <p className="text-sm font-bold text-neutral-500">练习输出</p>
            <div className="mt-4 grid gap-3">
              {labSteps.map(([title, body]) => (
                <div key={title} className="flex gap-3 rounded-card border border-neutral-200 bg-paper p-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-coral" />
                  <div>
                    <p className="font-black text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
