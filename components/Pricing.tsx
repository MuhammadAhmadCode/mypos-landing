import { Check } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

const PLANS = [
  {
    name: "Starter",
    price: "49",
    period: "one-time",
    blurb: "For a single register and a small product list.",
    features: ["One shop register", "1,000 product rows", "Cloud backup", "Receipt printing"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "99",
    period: "one-time",
    blurb: "For growing shops that need the full picture.",
    features: [
      "Multiple registers",
      "Unlimited products",
      "Expiry tracking",
      "Z-reports & P&L",
      "Staff accounts",
      "Suppliers & purchases",
    ],
    highlight: true,
  },
  {
    name: "Multi",
    price: "149",
    period: "one-time",
    blurb: "For branches that want one shared view.",
    features: [
      "Everything in Pro",
      "Multi-branch sales",
      "Cross-branch reports",
      "Priority support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tighter md:text-5xl">
            Simple pricing. One payment.
            <br />
            <span className="text-white/40">No subscriptions.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/50">
            Pay once, own it forever. Updates and cloud backup included in
            every plan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-[2rem] p-1.5 transition-colors duration-500 ${
                  p.highlight
                    ? "border border-accent/40 bg-gradient-to-b from-accent/20 to-transparent"
                    : "border border-white/8 bg-white/[0.03]"
                }`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-ink">
                    Most popular
                  </span>
                )}
                <div className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-[#0b0b0c] p-7">
                  <div className="mb-6 flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/35">
                      {p.period}
                    </span>
                  </div>
                  <div className="mb-2 flex items-baseline gap-1">
                    <span className="font-mono text-[14px] text-white/40">$</span>
                    <span className="text-5xl font-semibold tracking-tighter">
                      {p.price}
                    </span>
                  </div>
                  <p className="mb-7 text-[14px] leading-relaxed text-white/50">
                    {p.blurb}
                  </p>
                  <ul className="mb-8 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-[14px] text-white/70">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            p.highlight
                              ? "bg-accent text-accent-ink"
                              : "bg-white/10 text-white/60"
                          }`}
                        >
                          <Check size={11} weight="bold" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#top"
                    className={`mt-auto inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                      p.highlight
                        ? "bg-accent text-accent-ink"
                        : "border border-white/15 text-white/80 hover:bg-white/5"
                    }`}
                  >
                    Get {p.name}
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
