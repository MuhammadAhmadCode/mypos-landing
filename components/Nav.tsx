"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "@phosphor-icons/react";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customers", href: "#customers" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const lockScroll = useCallback((lock: boolean) => {
    document.body.style.overflow = lock ? "hidden" : "";
  }, []);

  useEffect(() => {
    lockScroll(open);
    return () => lockScroll(false);
  }, [open, lockScroll]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
      >
        <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/10 bg-[#0a0a0b]/70 px-5 py-2.5 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-2 pl-1">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-ink">
              <span className="block h-3 w-3 rounded-[3px] bg-accent-ink" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">myPOS</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm text-white/60 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] sm:inline-flex"
            >
              Get myPOS
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
            >
              {open ? (
                <X size={18} weight="bold" />
              ) : (
                <span className="flex flex-col gap-[5px]">
                  <span className="block h-[2px] w-[18px] rounded-full bg-white" />
                  <span className="block h-[2px] w-[18px] rounded-full bg-white" />
                </span>
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col justify-center bg-[#050505]/90 px-8 backdrop-blur-3xl"
          >
            <div className="mx-auto flex w-full max-w-md flex-col gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-center justify-between border-b border-white/10 py-4 text-4xl font-semibold tracking-tight text-white/90 transition-colors duration-300 hover:text-accent"
                >
                  {l.label}
                  <ArrowUpRight
                    size={26}
                    weight="light"
                    className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
