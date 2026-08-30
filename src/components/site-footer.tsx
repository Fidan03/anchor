import { Package, X } from "lucide-react";

import { GithubIcon, DiscordIcon } from "@/components/icons";

const FOOTER_COLUMNS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
      { label: "GitHub", href: "#" },
    ],
  },
  {
    title: "Docs",
    links: [
      { label: "Getting started", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Guides", href: "#" },
      { label: "Examples", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord", href: "#" },
      { label: "Discussions", href: "#" },
      { label: "X", href: "#" },
      { label: "Contributing", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "License (MIT)", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "npm", href: "#", icon: Package },
  { label: "GitHub", href: "#", icon: GithubIcon },
  { label: "X", href: "#", icon: X },
  { label: "Discord", href: "#", icon: DiscordIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-xs tracking-wide text-muted uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text/80 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-muted sm:text-left">
            © {new Date().getFullYear()} Anchor. MIT Licensed. Built with{" "}
            <span className="text-text/80">Anchor Kit</span>.
          </p>

          <div className="flex items-center gap-1">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-border hover:text-text"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
