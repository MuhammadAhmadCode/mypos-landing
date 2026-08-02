import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

export default function CTA() {
  return (
    <section className="px-4 pb-24 pt-4 md:pb-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-accent/25 bg-gradient-to-br from-accent/[0.14] via-[#0b0b0c] to-[#0b0b0c] p-1.5">
            <div className="pointer-events-none absolute left-1/2 top-[-60%] h-[80vh] w-[70vw] -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
            <div className="relative flex flex-col items-start gap-8 rounded-[calc(2.5rem-0.375rem)] bg-[#0b0b0c] px-8 py-14 md:flex-row md:items-center md:justify-between md:px-14">
              <div className="max-w-xl">
                <h2 className="text-4xl font-semibold leading-[1.08] tracking-tighter md:text-5xl">
                  Your shop runs on myPOS
                  <br />
                  <span className="text-white/40">tomorrow morning.</span>
                </h2>
                <p className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-white/50">
                  Install today, migrate your product list, and open the
                  register. One payment, no subscription, full ownership.
                </p>
              </div>
              <a
                href="#pricing"
                className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-accent px-8 py-4 text-[16px] font-semibold text-accent-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Start today
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={16} weight="bold" />
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
