import { highlight } from "@/lib/highlight";
import { CodeCard } from "@/components/code-card";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

const STEPS: {
  number: string;
  title: string;
  description: string;
  filename: string;
  lang: "ts" | "bash";
  code: string;
}[] = [
  {
    number: "01",
    title: "Install",
    description: "Add Anchor with your package manager of choice.",
    filename: "terminal",
    lang: "bash",
    code: "npm i @anchor/env",
  },
  {
    number: "02",
    title: "Define your schema",
    description: "Describe your environment once, validated at build time.",
    filename: "env.ts",
    lang: "ts",
    code: `import { defineEnv, url } from "@anchor/env";

export const env = defineEnv({
  DATABASE_URL: url(),
});`,
  },
  {
    number: "03",
    title: "Import anywhere",
    description: "Get a fully typed, validated object — no setup required.",
    filename: "app.ts",
    lang: "ts",
    code: `import { env } from "./env";

env.DATABASE_URL; // fully typed`,
  },
];

export async function Quickstart() {
  const steps = await Promise.all(
    STEPS.map(async ({ lang, code, ...rest }) => ({
      ...rest,
      html: await highlight(code, lang),
    }))
  );

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <Reveal>
        <SectionEyebrow>Quickstart</SectionEyebrow>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-text sm:text-4xl">
          Install it. Define it. Import it.
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1} className="min-w-0">
            <span className="font-mono text-2xl text-muted">{step.number}</span>
            <h3 className="mt-2 font-heading text-lg font-medium text-text">{step.title}</h3>
            <p className="mt-1 text-sm text-muted">{step.description}</p>
            <CodeCard filename={step.filename} html={step.html} className="mt-4" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
