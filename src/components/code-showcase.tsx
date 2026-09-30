import { highlight } from "@/lib/highlight";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { CodeTabs, type CodeTab } from "@/components/code-tabs";

// The real usage arc a devtool buyer wants to see: schema → build-time failure →
// typed usage. The "Validate" tab shows the actual build error, which is the whole
// pitch of the library — don't replace it with prose.
const snippets: {
  value: string;
  label: string;
  filename: string;
  lang: "ts" | "bash";
  code: string;
}[] = [
  {
    value: "define",
    label: "Define",
    filename: "env.ts",
    lang: "ts",
    code: `import { defineEnv, string, number, url } from "@anchor/env";

export const env = defineEnv({
  DATABASE_URL: url(),
  PORT:         number().default(3000),
  STRIPE_KEY:   string().startsWith("sk_"),
});`,
  },
  {
    value: "validate",
    label: "Validate",
    filename: "terminal",
    lang: "bash",
    code: `$ next build

▲ Anchor — validating environment…

  ✖  STRIPE_KEY    must start with "sk_"   (received "pk_live_51H…")
  ✖  DATABASE_URL  required, but was missing

  Build stopped — 2 invalid variables.`,
  },
  {
    value: "use",
    label: "Use",
    filename: "app.ts",
    lang: "ts",
    code: `import { env } from "./env";

// Fully typed — autocomplete and inference just work.
const port: number = env.PORT;      // number
fetch(env.DATABASE_URL);            // validated URL string

// @ts-expect-error — Anchor knows this key doesn't exist
env.STRIPE_SECRET;`,
  },
];

export async function CodeShowcase() {
  // Highlight all snippets on the server in parallel, then hand the strings to the
  // client tabs component.
  const tabs: CodeTab[] = await Promise.all(
    snippets.map(async ({ lang, code, ...rest }) => ({
      ...rest,
      html: await highlight(code, lang),
    }))
  );

  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <Reveal>
        <SectionEyebrow>{"// how it works"}</SectionEyebrow>
        <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-text sm:text-4xl">
          From schema to safety in three steps.
        </h2>
        <p className="mt-4 max-w-prose text-base leading-[1.6] text-muted">
          Define your variables once. Anchor validates them at build time and hands
          you a fully typed object — no generics, no runtime cost.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 min-w-0">
        <CodeTabs tabs={tabs} />
      </Reveal>
    </section>
  );
}
