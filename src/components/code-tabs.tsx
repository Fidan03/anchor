"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeCard } from "@/components/code-card";

// html is already highlighted on the server and passed down as a string — strings
// serialize cleanly across the server→client boundary, so Shiki never ships to the
// client even though the tabs themselves are interactive.
export type CodeTab = {
  value: string;
  label: string;
  filename: string;
  html: string;
};

export function CodeTabs({ tabs }: { tabs: CodeTab[] }) {
  return (
    <Tabs defaultValue={tabs[0]?.value} className="w-full min-w-0">
      {/* Underline tabs — shadcn's default pill styling swapped for the brand's tokens. */}
      <TabsList className="mb-4 inline-flex h-auto gap-1 border-b border-border bg-transparent p-0">
        {tabs.map((t) => (
          <TabsTrigger
            key={t.value}
            value={t.value}
            className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 font-mono text-sm text-muted shadow-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-text data-[state=active]:shadow-none"
          >
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((t) => (
        <TabsContent
          key={t.value}
          value={t.value}
          className="mt-0 min-w-0 rounded-lg focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <CodeCard filename={t.filename} html={t.html} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
