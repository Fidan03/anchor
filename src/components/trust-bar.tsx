import { Fragment } from "react";

import { StatPill } from "@/components/stat-pill";
import { Reveal } from "@/components/reveal";

const STATS = [
  { value: "12.4k", label: "stars" },
  { value: "340k", label: "weekly installs" },
  { value: "68", label: "contributors" },
  { value: "MIT", label: "licensed" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border">
      <Reveal className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8">
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && (
                <span className="text-muted select-none" aria-hidden="true">
                  ·
                </span>
              )}
              <StatPill value={stat.value} label={stat.label} />
            </Fragment>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
