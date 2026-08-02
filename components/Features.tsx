import {
  CloudArrowUp,
  Receipt,
  Cube,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import type { ReactNode } from "react";

type Feature = {
  icon: ReactNode;
  title: string;
  body: string;
  span: string;
  tint?: boolean;
};

const FEATURES: Feature[] = [
  {
    icon: <Receipt size={22} weight="light" />,
    title: "Blazing fast checkout",
    body: "Tap a product, take the payment, print the receipt. myPOS is offline-first, so a dead internet connection never stops a sale.",
    span: "md:col-span-7",
  },
  {
    icon: <Cube size={22} weight="light" />,
    title: "Inventory that watches itself",
    body: "Live stock counts, low-stock alerts and expiry tracking. You always know what to reorder, before you run out.",
    span: "md:col-span-5",
    tint: true,
  },
  {
    icon: <CloudArrowUp size={22} weight="light" />,
    title: "Cloud backup, always on",
    body: "Every sale, payment and purchase is synced to the cloud in the background. If the shop PC dies, your records live on.",
    span: "md:col-span-5",
    tint: true,
  },
  {
    icon: <ChartLineUp size={22} weight="light" />,
    title: "Reports that make sense",
    body: "Daily Z-reports, profit and loss, top products and out-of-stock warnings. Decisions from data, not guesses.",
    span: "md:col-span-7",
  },
];

function FeatureCard({ f }: { f: Feature }) {
  return (
    <div
      className={`group relative h-full rounded-[2rem] border border-white/8 bg-white/[0.03] p-1.5 transition-colors duration-500 hover:border-accent/30 ${
        f.tint ? "bg-gradient-to-br from-accent/[0.06] to-transparent" : ""
      }`}
    >
      <div
        className={`flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-[#0b0b0c] p-7 ${
          f.tint ? "bg-white/[0.02]" : ""
        }`}
      >
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
          {f.icon}
        </div>
        <h3 className="mb-2.5 text-[19px] font-semibold tracking-tight">
          {f.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-white/50">{f.body}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tighter md:text-5xl">
            Everything a shop needs.
            <br />
            <span className="text-white/40">Nothing it doesn&apos;t.</span>
          </h2>
          <p className="mt-5 max-w-[52ch] text-[16px] leading-relaxed text-white/50">
            No modules to buy, no add-ons to configure. Every tool your counter
            needs ships in one app.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-12">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 0.12} className={f.span}>
              <FeatureCard f={f} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
