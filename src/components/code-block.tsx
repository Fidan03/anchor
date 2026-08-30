import { codeToHtml } from "shiki";

import { darkCodeTheme, lightCodeTheme } from "@/lib/shiki-themes";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  lang?: string;
  className?: string;
}

export async function CodeBlock({ code, lang = "ts", className }: CodeBlockProps) {
  const html = await codeToHtml(code.trim(), {
    lang,
    themes: { light: lightCodeTheme, dark: darkCodeTheme },
    defaultColor: false,
  });

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm leading-relaxed [&_pre]:bg-transparent [&_pre]:!bg-transparent",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
