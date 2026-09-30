import { Hammer, MessageCircleWarning, Puzzle, Share2, Wand2, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { SectionEyebrow } from "@/components/section-eyebrow";

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Hammer,
    title: "Build-time validation",
    description: "Fails the build, not production.",
  },
  {
    icon: Wand2,
    title: "Automatic type inference",
    description: "Your env object is fully typed, no generics.",
  },
  {
    icon: Puzzle,
    title: "Framework-agnostic",
    description: "Next, Vite, Node, Bun, anywhere.",
  },
  {
    icon: Zap,
    title: "Zero runtime cost",
    description: "Validation compiles away.",
  },
  {
    icon: Share2,
    title: "Composable schemas",
    description: "Share and extend across services.",
  },
  {
    icon: MessageCircleWarning,
    title: "Errors that help",
    description: "Points at the exact missing/invalid key.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <Reveal>
        <SectionEyebrow>Why Anchor</SectionEyebrow>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-text sm:text-4xl">
          Everything you’d expect. Nothing you wouldn’t.
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 min-w-0">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardContent className="flex flex-col items-start gap-3">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
