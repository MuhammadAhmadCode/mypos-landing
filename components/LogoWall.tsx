import { Reveal } from "./Reveal";

const SHOPS = [
  {
    name: "Al-Habib Megamart",
    mark: "M",
    mono: true,
  },
  {
    name: "Noor General Store",
    mark: "N",
    mono: true,
  },
  {
    name: "Sunrise Traders",
    mark: "S",
    mono: false,
  },
  {
    name: "City Fresh Mart",
    mark: "C",
    mono: true,
  },
  {
    name: "Bismillah Stores",
    mark: "B",
    mono: false,
  },
  {
    name: "Gulf Supermarket",
    mark: "G",
    mono: true,
  },
];

function ShopLogo({ name, mark, mono }: (typeof SHOPS)[number]) {
  return (
    <div className="flex items-center justify-center gap-2.5 opacity-45 transition-opacity duration-300 hover:opacity-90">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.4"
          className="text-white/50"
        />
        <text
          x="11"
          y="15"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="currentColor"
          className="text-white/70"
        >
          {mark}
        </text>
      </svg>
      <span
        className={`text-[13px] ${
          mono ? "font-mono uppercase tracking-[0.08em]" : "font-semibold"
        } text-white/70`}
      >
        {name}
      </span>
    </div>
  );
}

export default function LogoWall() {
  return (
    <section className="border-y border-white/5 px-4 py-10">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <p className="mb-7 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/30">
            Powering local shops
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 items-center gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
            {SHOPS.map((s) => (
              <ShopLogo key={s.name} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
