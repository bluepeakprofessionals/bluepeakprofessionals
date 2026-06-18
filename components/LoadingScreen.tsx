"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [phase, setPhase] = useState<"enter" | "hold" | "wipe" | "done">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("wipe"), 2000);
    const t3 = setTimeout(() => setPhase("done"), 2900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">

      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{ background: "linear-gradient(160deg, #0A1E4D 0%, #1E62C9 60%, #4FA3F7 100%)" }}
        animate={phase === "wipe" ? { y: "-100%" } : { y: "0%" }}
        transition={phase === "wipe" ? { duration: 0.8, ease: [0.76, 0, 0.24, 1] } : {}}
      />

      {/* Waterfall drip lines */}
      <motion.div
        className="absolute inset-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "hold" ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-px"
            style={{
              left: `${10 + i * 10}%`,
              background: "linear-gradient(to bottom, transparent, rgba(79,163,247,0.6), transparent)",
              height: "100%",
            }}
            initial={{ scaleY: 0, originY: 0, opacity: 0 }}
            animate={
              phase === "hold"
                ? { scaleY: 1, opacity: [0, 0.7, 0.3], transition: { duration: 1, delay: i * 0.08, ease: "easeIn" } }
                : { opacity: 0 }
            }
          />
        ))}
      </motion.div>

      {/* Water ripple rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-300/30"
            initial={{ width: 120, height: 120, opacity: 0 }}
            animate={
              phase === "hold"
                ? { width: [120, 320], height: [60, 160], opacity: [0.6, 0], transition: { duration: 1.2, delay, repeat: Infinity, ease: "easeOut" } }
                : { opacity: 0 }
            }
          />
        ))}
      </div>

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ y: -80, opacity: 0, scale: 0.8 }}
          animate={
            phase === "enter"
              ? { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
              : phase === "wipe"
              ? { y: 40, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }
              : { y: 0, opacity: 1, scale: 1 }
          }
          className="flex flex-col items-center gap-4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Blue Peak Pool Care"
            className="h-28 w-auto"
            style={{ filter: "brightness(0) saturate(100%) invert(63%) sepia(60%) saturate(500%) hue-rotate(185deg) brightness(105%)" }}
          />

          {/* Water drops falling from logo */}
          <div className="relative w-full flex justify-center">
            {[-20, 0, 20].map((x, i) => (
              <motion.div
                key={i}
                className="absolute w-1 rounded-full bg-cyan-300/70"
                style={{ left: `calc(50% + ${x}px)` }}
                initial={{ height: 0, y: 0, opacity: 0 }}
                animate={
                  phase === "hold"
                    ? {
                        height: [0, 14, 0],
                        y: [0, 40],
                        opacity: [0, 0.9, 0],
                        transition: { duration: 0.7, delay: i * 0.15, repeat: Infinity, repeatDelay: 0.6, ease: "easeIn" },
                      }
                    : { opacity: 0 }
                }
              />
            ))}
          </div>

          {/* Brand name */}
          <motion.p
            className="text-cyan-200 text-xs font-black uppercase tracking-[0.4em] mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "enter" ? 0 : 1, transition: { duration: 0.5, delay: 0.3 } }}
          >
            Blue Peak Pool Care
          </motion.p>
        </motion.div>
      </div>

      {/* Wipe wave overlay */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ background: "linear-gradient(to bottom, transparent, #4FA3F7)" }}
        initial={{ opacity: 0 }}
        animate={phase === "wipe" ? { opacity: [0, 1, 0], y: [0, -100], transition: { duration: 0.8 } } : { opacity: 0 }}
      />
    </div>
  );
}
