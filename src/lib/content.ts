import {
  Bot,
  Boxes,
  Braces,
  Code2,
  Image,
  Laptop,
  Music,
  PlayCircle,
  Sparkles,
  Wand2,
  Workflow,
  type LucideIcon
} from "lucide-react";

export type ContentKind = "tutorial" | "video";

export type ContentItem = {
  slug: string;
  kind: ContentKind;
  title: string;
  excerpt: string;
  category: string;
  level: string;
  duration: string;
  date: string;
  accent: "aqua" | "coral" | "lemon" | "moss" | "grape";
  cover: string;
  tags: string[];
  featured?: boolean;
  steps: Array<{
    title: string;
    body: string;
    image: string;
    code?: string;
  }>;
};

export type ToolCategory =
  | "大模型"
  | "AI 编程"
  | "图片视频 AI"
  | "设计 Demo"
  | "办公效率"
  | "AI 音乐";

export type ToolItem = {
  name: string;
  category: ToolCategory;
  description: string;
  href: string;
  bestFor: string;
};

export type BuildItem = {
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  stack: string[];
  scenario: string;
  cover: string;
  outcomes: string[];
  reusableCases: string[];
};

export const sections: Array<{
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    title: "学习手记",
    href: "/labs",
    description: "图文步骤、练习卡片和实操截图放在同一个学习入口里。",
    icon: Workflow,
    accent: "bg-aqua"
  },
  {
    title: "工具抽屉",
    href: "/tools",
    description: "按真实使用场景归档模型、编程、设计和效率工具。",
    icon: Boxes,
    accent: "bg-lemon"
  },
  {
    title: "Builds",
    href: "/builds",
    description: "记录个人自制 Skill、自动化脚本和可复用 AI 项目。",
    icon: Braces,
    accent: "bg-moss"
  }
];

export const tutorials: ContentItem[] = [
  {
    slug: "prompt-to-workflow",
    kind: "tutorial",
    title: "从提示词到工作流：给 AI 工具学习者的第一套笔记系统",
    excerpt: "把零散提示词整理成可复用流程，包含采集、拆解、验证和复盘四个阶段。",
    category: "AI 学习方法",
    level: "入门",
    duration: "12 min read",
    date: "2026-05-01",
    accent: "aqua",
    cover: "/visuals/tutorial-workflow.svg",
    tags: ["Prompt", "Workflow", "Notion"],
    featured: true,
    steps: [
      {
        title: "定义一个最小任务边界",
        body: "先把学习对象压缩成一个可执行任务，例如生成一段脚本、改写一篇文章或调试一次模型输出。边界越小，反馈越快。",
        image: "/visuals/step-board.svg",
        code: "目标：把一篇工具教程拆成 5 个可执行动作\n输入：原文链接 + 当前问题\n输出：步骤、风险点、复盘问题"
      },
      {
        title: "把提示词拆成角色、输入和验收标准",
        body: "好提示词不是长，而是验收标准清楚。为每次实验记录输入材料、希望模型做什么、如何判断它是否可用。",
        image: "/visuals/step-prompt.svg",
        code: "你是 AI 工具学习教练。\n请把下面的工具能力拆成：使用场景、操作步骤、常见失败、改进提示词。"
      },
      {
        title: "用复盘卡片沉淀下一次可复用模板",
        body: "每次跑完流程，记录一次成功条件和一次失败原因。博客里的教程就从这些复盘卡片自然长出来。",
        image: "/visuals/step-review.svg"
      }
    ]
  },
  {
    slug: "nextjs-static-knowledge-site",
    kind: "tutorial",
    title: "用 Next.js 做一个纯静态 AI 知识站",
    excerpt: "用 App Router、静态数据和无刷新路由搭建个人垂直知识站的基础架构。",
    category: "前端工程",
    level: "进阶",
    duration: "18 min read",
    date: "2026-04-24",
    accent: "coral",
    cover: "/visuals/tutorial-next.svg",
    tags: ["Next.js", "Static", "Tailwind"],
    featured: true,
    steps: [
      {
        title: "选择静态导出优先的架构",
        body: "个人知识站的访问路径简单，内容以阅读为主，静态导出可以获得稳定、便宜和极速的部署体验。",
        image: "/visuals/step-static.svg",
        code: "const nextConfig = {\n  output: \"export\",\n  images: { unoptimized: true }\n};"
      },
      {
        title: "用结构化数据驱动页面",
        body: "教程、视频、工具和项目都放进 TypeScript 数据模型，页面只负责渲染。等内容变多后，可以平滑迁移到 MDX 或 CMS。",
        image: "/visuals/step-data.svg"
      },
      {
        title: "把搜索作为全局入口",
        body: "轻量站点不需要复杂账号系统，但需要足够快的检索。Command K 能让旧内容再次被找到。",
        image: "/visuals/step-search.svg",
        code: "useEffect(() => {\n  const onKeyDown = (event: KeyboardEvent) => {\n    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === \"k\") {\n      event.preventDefault();\n      setOpen(true);\n    }\n  };\n}, []);"
      }
    ]
  },
  {
    slug: "ai-coding-agent-handoff",
    kind: "tutorial",
    title: "如何把需求交给 AI 编程 Agent：从一句话到可验收任务",
    excerpt: "给 AI 编程工具准备上下文、验收标准和边界，减少返工和幻觉式实现。",
    category: "AI 编程",
    level: "进阶",
    duration: "15 min read",
    date: "2026-04-12",
    accent: "moss",
    cover: "/visuals/tutorial-agent.svg",
    tags: ["Agent", "Coding", "PRD"],
    steps: [
      {
        title: "先写行为，不写技术方案",
        body: "让 Agent 理解用户在页面上要完成什么，而不是直接要求它套某个组件。行为描述越清楚，技术选择越稳。",
        image: "/visuals/step-brief.svg"
      },
      {
        title: "补上验收清单",
        body: "验收清单最好覆盖空状态、错误状态、移动端和可访问性。它会逼迫 Agent 在实现时检查更多真实路径。",
        image: "/visuals/step-checklist.svg",
        code: "- 桌面端 1440px 内容不溢出\n- 移动端导航可打开和关闭\n- 搜索无结果时有明确反馈\n- 构建命令通过"
      },
      {
        title: "让它先读代码再动手",
        body: "成熟项目里，最危险的不是不会写代码，而是不理解已有系统。要求先读取结构、命名和组件习惯。",
        image: "/visuals/step-codebase.svg"
      }
    ]
  }
];

export const videos: ContentItem[] = [
  {
    slug: "cursor-rules-live",
    kind: "video",
    title: "视频：30 分钟搭好 Cursor Rules 与项目记忆",
    excerpt: "用一次真实项目演示如何把个人编码偏好写成可复用规则。",
    category: "AI 编程",
    level: "入门",
    duration: "31 min watch",
    date: "2026-04-30",
    accent: "grape",
    cover: "/visuals/video-cursor.svg",
    tags: ["Cursor", "Rules", "Demo"],
    featured: true,
    steps: [
      {
        title: "建立规则分层",
        body: "视频先从全局偏好、项目规范和任务临时约束三个层级讲起，避免所有规则挤在同一个文件里。",
        image: "/visuals/video-frame-one.svg",
        code: "global: 个人偏好\nproject: 仓库规范\ntask: 本次临时要求"
      },
      {
        title: "现场修一次组件",
        body: "用一个按钮组件演示规则如何影响命名、可访问性、样式复用和提交前检查。",
        image: "/visuals/video-frame-two.svg"
      },
      {
        title: "复盘规则质量",
        body: "最后删掉空泛规则，只保留能影响行为的规则。规则越像判断标准，越值得留下。",
        image: "/visuals/video-frame-three.svg"
      }
    ]
  },
  {
    slug: "image-model-pipeline",
    kind: "video",
    title: "视频：从图片模型到前端素材管线",
    excerpt: "生成、筛选、压缩和落库，一次讲清 AI 图片如何进入真实网页。",
    category: "图片视频 AI",
    level: "进阶",
    duration: "24 min watch",
    date: "2026-04-18",
    accent: "lemon",
    cover: "/visuals/video-image.svg",
    tags: ["Image AI", "Assets", "Frontend"],
    steps: [
      {
        title: "为页面用途写提示词",
        body: "素材不是孤立图片，要先明确它在页面中的比例、留白、主体位置和色彩约束。",
        image: "/visuals/video-frame-four.svg"
      },
      {
        title: "检查文字和版权风险",
        body: "图片模型容易生成错误文字，也可能出现不适合商业使用的品牌元素。上线前要把这些风险列入检查表。",
        image: "/visuals/video-frame-five.svg"
      },
      {
        title: "输出多端尺寸",
        body: "同一张图至少准备列表卡片、详情封面和社交分享三类尺寸，避免前端强行裁切。",
        image: "/visuals/video-frame-six.svg",
        code: "cover: 1600x900\ncard: 960x720\nopenGraph: 1200x630"
      }
    ]
  },
  {
    slug: "weekly-ai-tool-review",
    kind: "video",
    title: "视频：我的每周 AI 工具评测流程",
    excerpt: "如何快速判断一个新工具是否值得学习、收藏、付费和写成教程。",
    category: "工具评测",
    level: "入门",
    duration: "19 min watch",
    date: "2026-03-29",
    accent: "aqua",
    cover: "/visuals/video-review.svg",
    tags: ["Review", "Toolbox", "Product"],
    steps: [
      {
        title: "先测核心任务",
        body: "不要被官网案例牵着走，选择自己每周都会遇到的真实任务来测试。",
        image: "/visuals/video-frame-seven.svg"
      },
      {
        title: "记录失败边界",
        body: "一个工具最值得写的地方往往不是它有多强，而是它什么时候会失败。",
        image: "/visuals/video-frame-eight.svg"
      },
      {
        title: "决定归档位置",
        body: "工具只有放进分类和场景里，之后才会被重新找到。",
        image: "/visuals/video-frame-nine.svg"
      }
    ]
  }
];

export const tools: ToolItem[] = [
  {
    name: "ChatGPT",
    category: "大模型",
    description: "适合通用问答、代码辅助、内容规划和多模态学习复盘。",
    href: "https://chatgpt.com",
    bestFor: "日常 AI 学习中枢"
  },
  {
    name: "Claude",
    category: "大模型",
    description: "长文阅读、写作润色和复杂需求拆解体验稳定。",
    href: "https://claude.ai",
    bestFor: "长上下文分析"
  },
  {
    name: "Gemini",
    category: "大模型",
    description: "适合结合搜索生态、文档理解和多模态信息整理。",
    href: "https://gemini.google.com",
    bestFor: "资料交叉验证"
  },
  {
    name: "Cursor",
    category: "AI 编程",
    description: "面向工程项目的 AI IDE，适合改造已有代码库和快速试验功能。",
    href: "https://cursor.com",
    bestFor: "代码库协作"
  },
  {
    name: "GitHub Copilot",
    category: "AI 编程",
    description: "深度集成 GitHub 和主流 IDE，适合日常补全、解释和小范围重构。",
    href: "https://github.com/features/copilot",
    bestFor: "稳定编码助手"
  },
  {
    name: "Runway",
    category: "图片视频 AI",
    description: "面向视频生成、镜头控制和创意短片试验的综合工具。",
    href: "https://runwayml.com",
    bestFor: "视频概念验证"
  },
  {
    name: "Midjourney",
    category: "图片视频 AI",
    description: "适合视觉风格探索、封面图和高质感概念图生成。",
    href: "https://www.midjourney.com",
    bestFor: "视觉方向探索"
  },
  {
    name: "v0",
    category: "设计 Demo",
    description: "用自然语言快速生成 React 界面原型，适合产品概念验证。",
    href: "https://v0.dev",
    bestFor: "界面草稿"
  },
  {
    name: "Framer",
    category: "设计 Demo",
    description: "适合快速搭建高完成度展示站、交互原型和个人作品页。",
    href: "https://www.framer.com",
    bestFor: "交互展示"
  },
  {
    name: "Notion AI",
    category: "办公效率",
    description: "把会议记录、学习笔记和项目复盘接入知识库。",
    href: "https://www.notion.so/product/ai",
    bestFor: "知识整理"
  },
  {
    name: "Perplexity",
    category: "办公效率",
    description: "适合带引用的资料检索、竞品调研和主题入门。",
    href: "https://www.perplexity.ai",
    bestFor: "检索式学习"
  },
  {
    name: "Suno",
    category: "AI 音乐",
    description: "适合生成短音乐 Demo、氛围音和创意音频草稿。",
    href: "https://suno.com",
    bestFor: "音乐概念"
  },
  {
    name: "Udio",
    category: "AI 音乐",
    description: "面向歌曲创作和声音风格试验，适合音乐 AI 观察记录。",
    href: "https://www.udio.com",
    bestFor: "歌曲实验"
  }
];

export const toolCategoryMeta: Record<ToolCategory, { icon: LucideIcon; color: string }> = {
  大模型: { icon: Bot, color: "bg-aqua" },
  "AI 编程": { icon: Code2, color: "bg-moss" },
  "图片视频 AI": { icon: Image, color: "bg-coral" },
  "设计 Demo": { icon: Wand2, color: "bg-grape" },
  办公效率: { icon: Laptop, color: "bg-lemon" },
  "AI 音乐": { icon: Music, color: "bg-aqua" }
};

export const builds: BuildItem[] = [
  {
    slug: "prompt-clinic-skill",
    title: "Prompt Clinic Skill",
    subtitle: "把松散提示词诊断成可执行任务卡",
    status: "可复用",
    stack: ["Skill", "Prompt QA", "Checklist"],
    scenario: "适用于学习新 AI 工具前，把一个模糊想法变成输入、输出、约束和验收标准。",
    cover: "/visuals/build-clinic.svg",
    outcomes: ["生成提示词体检报告", "输出可直接复制的优化版本", "标注风险项和缺失上下文"],
    reusableCases: ["教程写作前的需求澄清", "AI 编程任务派发", "工具评测模板生成"]
  },
  {
    slug: "tool-radar-board",
    title: "Tool Radar Board",
    subtitle: "每周 AI 工具观察和打分看板",
    status: "迭代中",
    stack: ["Next.js", "Static Data", "Scoring"],
    scenario: "适用于持续追踪新工具，把收藏夹里的链接转成按场景、成熟度和学习价值排序的目录。",
    cover: "/visuals/build-radar.svg",
    outcomes: ["按分类记录工具", "对学习价值打分", "沉淀周报素材"],
    reusableCases: ["工具抽屉内容维护", "AI 资讯周报", "团队内部工具推荐"]
  },
  {
    slug: "article-to-lab",
    title: "Article to Lab",
    subtitle: "把长文教程转成互动练习脚本",
    status: "原型",
    stack: ["Parser", "AI Agent", "Exercise"],
    scenario: "适用于把外部文章、视频逐字稿或自己的长文拆成可操作实验。",
    cover: "/visuals/build-lab.svg",
    outcomes: ["提取核心步骤", "生成练习提示词", "输出验收问题"],
    reusableCases: ["课程脚本拆解", "视频教程复盘", "内部培训练习"]
  }
];

export const labItems = [
  {
    title: "Prompt Diff",
    description: "比较两个提示词版本在目标、约束、输入和验收标准上的变化。",
    icon: Sparkles,
    status: "练习"
  },
  {
    title: "Agent Handoff",
    description: "把一句产品需求扩展成 AI 编程 Agent 可执行的任务包。",
    icon: Workflow,
    status: "模板"
  },
  {
    title: "Tool Triage",
    description: "用 5 分钟判断一个 AI 工具是否值得写进工具抽屉。",
    icon: Boxes,
    status: "清单"
  },
  {
    title: "Video Notes",
    description: "把视频教程拆成关键镜头、操作步骤和复盘问题。",
    icon: PlayCircle,
    status: "流程"
  }
];

export const allContent = [...tutorials, ...videos];

export function getContentBySlug(kind: ContentKind, slug: string) {
  const source = kind === "tutorial" ? tutorials : videos;
  return source.find((item) => item.slug === slug);
}

export function getBuildBySlug(slug: string) {
  return builds.find((item) => item.slug === slug);
}

export const searchItems = [
  ...allContent.map((item) => ({
    title: item.title,
    description: item.excerpt,
    href: item.kind === "tutorial" ? `/labs/${item.slug}` : `/videos/${item.slug}`,
    type: item.kind === "tutorial" ? "学习手记" : "视频教程",
    keywords: [item.title, item.excerpt, item.category, ...item.tags].join(" ")
  })),
  ...tools.map((item) => ({
    title: item.name,
    description: item.description,
    href: "/tools",
    type: item.category,
    keywords: [item.name, item.description, item.category, item.bestFor].join(" ")
  })),
  ...builds.map((item) => ({
    title: item.title,
    description: item.subtitle,
    href: `/builds/${item.slug}`,
    type: "Builds",
    keywords: [item.title, item.subtitle, item.scenario, ...item.stack].join(" ")
  }))
];
