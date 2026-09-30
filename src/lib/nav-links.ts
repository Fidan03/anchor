export interface NavLink {
  label: string;
  href: string;
  meta?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Docs", href: "#" },
  { label: "GitHub", href: "#", meta: "★ 12.4k" },
  { label: "Discord", href: "#" },
];
