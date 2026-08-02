import {
  Storefront,
  Keyboard,
  PaperPlaneTilt,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: <Storefront size={24} weight="light" />,
    verb: "Install",
    title: "Load myPOS on your shop PC",
    body: "One installer, no server, no monthly contract. The app runs entirely on your own machine.",
    meta: "2 minutes",
  },
  {
    icon: <Keyboard size={24} weight="light" />,
    verb: "Configure",
    title: "Add products, prices and staff",
    body: "Barcodes, categories, expiry dates and supplier accounts. Import from Excel if you already keep a list.",
    meta: "Same day",
  },
  {
    icon: <PaperPlaneTilt size={24} weight="light" />,
    verb: "Sell",
    title: "Open the register and start selling",
    body: "Your counter works instantly. Cloud backup runs quietly in the background every 30 seconds.",
    meta: "Lifetime",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tighter md:text-5xl">
            From box to first sale
            <br />
            <span className="text-white/40">in one afternoon.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.verb} delay={i * 0.12}>
              <div className="group relative h-full rounded-[2rem] border border-white/8 bg-white/[0.03] p-1.5 transition-colors duration-500 hover:border-accent/30">
                <div className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-[#0b0b0c] p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10 text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
                      {s.icon}
                    </div>
                  </div>
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    {s.verb}
                  </p>
                  <h3 className="mb-2.5 text-[19px] font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mb-6 text-[15px] leading-relaxed text-white/50">
                    {s.body}
                  </p>
                  <p className="mt-auto border-t border-white/8 pt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
                    {s.meta}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
