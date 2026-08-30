import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { FeaturesGrid } from "@/components/features-grid";
import { CodeShowcase } from "@/components/code-showcase";
import { Quickstart } from "@/components/quickstart";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturesGrid />
      <CodeShowcase />
      <Quickstart />
    </>
  );
}
