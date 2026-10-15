import type { Metadata } from "next";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
