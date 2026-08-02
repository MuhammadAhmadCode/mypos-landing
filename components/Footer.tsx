import Link from "next/link";

const COLUMNS = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Cloud backup", "Receipt printing"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Contact", "Support"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "License"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 pb-10 pt-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-ink">
                <span className="block h-3 w-3 rounded-[3px] bg-accent-ink" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">myPOS</span>
            </div>
            <p className="max-w-[34ch] text-[14px] leading-relaxed text-white/40">
              Fast, offline-first point of sale for independent shops. Sales,
              inventory, suppliers and reports in one app.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#top"
                      className="text-[14px] text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/25">
            myPOS Software
          </p>
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} myPOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
