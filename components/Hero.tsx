"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Plus, Minus, ArrowUpRight } from "@phosphor-icons/react";
import { Magnetic } from "./Magnetic";

const SWATCHES = [
  "bg-amber-400/70",
  "bg-emerald-400/70",
  "bg-sky-400/70",
  "bg-rose-400/70",
];

const PRODUCTS = [
  { id: 1, name: "Basmati Rice", price: 14.5, swatch: 0, stock: 42 },
  { id: 2, name: "Cooking Oil", price: 9.8, swatch: 1, stock: 18 },
  { id: 3, name: "Eggs (dozen)", price: 3.4, swatch: 2, stock: 7 },
  { id: 4, name: "Milk 1L", price: 1.2, swatch: 3, stock: 26 },
];

function PosDemo() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const reduce = useReducedMotion();

  const add = useCallback((id: number) => {
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  }, []);

  const remove = useCallback((id: number) => {
    setCart((c) => {
      const next = { ...c };
      if ((next[id] ?? 0) <= 1) delete next[id];
      else next[id] -= 1;
      return next;
    });
  }, []);

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find((p) => p.id === Number(id));
    return sum + (p ? p.price * qty : 0);
  }, 0);

  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[3rem] bg-accent/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0a0b]/80 p-1.5 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="rounded-[calc(2rem-0.375rem)] bg-[#0d0d0e] p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Register
              </p>
              <p className="text-sm font-semibold">Al-Habib Megamart</p>
            </div>
            <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Live
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {PRODUCTS.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => add(p.id)}
                className="group rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-left transition-all duration-300 hover:border-accent/40 hover:bg-accent/[0.06] active:scale-[0.98]"
              >
                <span
                  className={`mb-2 block h-9 w-9 rounded-lg ${SWATCHES[p.swatch]}`}
                />
                <span className="block truncate text-[13px] font-medium text-white/90">
                  {p.name}
                </span>
                <span className="mt-0.5 flex items-center justify-between">
                  <span className="font-mono text-[12px] text-accent">
                    ${p.price.toFixed(2)}
                  </span>
                  <span className="font-mono text-[10px] text-white/35">
                    {p.stock} left
                  </span>
                </span>
              </button>
            ))}
          </div>

          <div className="mt-4 border-t border-white/8 pt-4">
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="text-white/50">Cart</span>
              <span className="font-mono text-[11px] text-white/35">
                {Object.values(cart).reduce((a, b) => a + b, 0)} items
              </span>
            </div>
            <div className="mb-3 space-y-1.5">
              {Object.entries(cart).length === 0 && (
                <p className="py-1 text-[13px] text-white/30">
                  Tap a product to add it
                </p>
              )}
              {Object.entries(cart).map(([id, qty]) => {
                const p = PRODUCTS.find((x) => x.id === Number(id));
                if (!p) return null;
                return (
                  <div
                    key={id}
                    className="flex items-center justify-between rounded-xl bg-white/[0.04] px-2.5 py-1.5"
                  >
                    <span className="truncate text-[12px] text-white/80">
                      {p.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => remove(p.id)}
                        aria-label={`Remove one ${p.name}`}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white/60 transition-colors hover:bg-white/20"
                      >
                        <Minus size={10} weight="bold" />
                      </button>
                      <span className="w-4 text-center font-mono text-[12px]">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => add(p.id)}
                        aria-label={`Add one ${p.name}`}
                        className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-ink transition-transform active:scale-90"
                      >
                        <Plus size={10} weight="bold" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-accent px-4 py-3">
              <span className="text-sm font-semibold text-accent-ink">Total</span>
              <span className="font-mono text-lg font-bold text-accent-ink">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0a0a0b]/60 px-4 py-3 backdrop-blur-xl"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
          <ArrowUpRight size={15} weight="bold" />
        </span>
        <p className="text-[13px] text-white/70">
          Every sale synced to the cloud, even when the internet drops.
        </p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-4 pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-15%] h-[40vh] w-[50vw] rounded-full bg-emerald-500/[0.05] blur-[100px]" />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-10">
        <motion.div
          variants={reduce ? undefined : container}
          initial={reduce ? false : "hidden"}
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-[12px] text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            POS software built for real shops
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[2.6rem] font-semibold leading-[1.05] tracking-tighter md:text-6xl"
          >
            Run your store.
            <br />
            <span className="text-white/45">Not your desk.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-white/55"
          >
            Sales, inventory, suppliers and reports in one fast, offline-first
            app. myPOS works when the internet does not.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-semibold text-accent-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Get myPOS
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-ink/15 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight size={15} weight="bold" />
                </span>
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-[15px] font-medium text-white/80 transition-colors duration-300 hover:bg-white/5"
              >
                See how it works
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 60, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <PosDemo />
        </motion.div>
      </div>
    </section>
  );
}
