import { BookOpen, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import { CopyInstall } from "@/components/copy-install";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { HeroCodePanel } from "@/components/hero-code-panel";

const API_SNIPPET = `import { defineEnv } from "@anchor/env";

export const env = defineEnv({
  DATABASE_URL:  url(),
  PORT:          number().default(3000),
  STRIPE_KEY:    string().startsWith("sk_"),
});
// ✅ fully typed. validated at build time.`;

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-24 sm:px-6 sm:pt-28 sm:pb-32 lg:grid-cols-2 lg:items-center lg:px-8 lg:pt-36">
      <div className="flex min-w-0 flex-col items-start gap-6">
        <SectionEyebrow>TypeScript · Zero dependencies · 2.1 kB</SectionEyebrow>

        <h1 className="text-balance font-display text-[clamp(2.5rem,2rem+3vw,4rem)] leading-[1.05] font-medium tracking-tight text-text">
          Catch missing env vars before they ship.
        </h1>

        <p className="max-w-prose text-lg leading-[1.6] text-muted">
          Anchor validates your environment variables at build time and infers their types
          automatically — so a typo never becomes a 2 a.m. production page.
        </p>

        <CopyInstall command="npm i @anchor/env" />

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Button asChild>
            <a href="#">
              <BookOpen aria-hidden="true" />
              Read the docs
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href="#">
              <Star aria-hidden="true" />
              Star on GitHub
              <span className="font-mono text-xs text-muted">★ 12.4k</span>
            </a>
          </Button>
        </div>
      </div>

      <HeroCodePanel>
        <CodeBlock code={API_SNIPPET} lang="ts" />
      </HeroCodePanel>
    </section>
  );
}
