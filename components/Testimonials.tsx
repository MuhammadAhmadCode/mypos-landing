import { Reveal } from "./Reveal";

const QUOTES = [
  {
    quote:
      "We stopped losing track of stock the week we switched. The expiry alerts alone paid for it.",
    name: "Usman Khalid",
    role: "Owner, Al-Habib Megamart",
  },
  {
    quote:
      "Internet at our shop is unreliable. myPOS kept taking sales the whole time, and backup caught up later.",
    name: "Fatima Noor",
    role: "Manager, Noor General Store",
  },
  {
    quote:
      "The Z-report at the end of the day tells me exactly what sold and what needs restocking.",
    name: "Rahim Ansari",
    role: "Owner, City Fresh Mart",
  },
];

export default function Testimonials() {
  return (
    <section id="customers" className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="max-w-2xl">
          <h2 className="text-4xl font-semibold leading-[1.1] tracking-tighter md:text-5xl">
            Shops that switched,
            <br />
            <span className="text-white/40">and never looked back.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {QUOTES.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.12}>
              <figure className="flex h-full flex-col rounded-[2rem] border border-white/8 bg-white/[0.03] p-1.5 transition-colors duration-500 hover:border-accent/30">
                <div className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-[#0b0b0c] p-7">
                  <svg
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                    fill="none"
                    aria-hidden="true"
                    className="mb-5 text-accent"
                  >
                    <path
                      d="M0 20V12.1C0 5.3 4.2 1 10.4 0l1.2 2.6C7.3 3.9 5.1 6.6 4.9 10h4.4v10H0zM15.4 20V12.1c0-6.8 4.2-11.1 10.4-12.1l1.2 2.6C22.7 3.9 20.5 6.6 20.3 10h4.4v10h-9.3z"
                      fill="currentColor"
                    />
                  </svg>
                  <blockquote className="mb-6 text-[16px] leading-relaxed text-white/80">
                    {q.quote}
                  </blockquote>
                  <figcaption className="mt-auto border-t border-white/8 pt-4">
                    <p className="text-[14px] font-semibold">{q.name}</p>
                    <p className="mt-0.5 text-[13px] text-white/40">{q.role}</p>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
