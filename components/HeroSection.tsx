"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Decorative SVG mountain / water ripple */}
      <svg
        className="absolute right-0 top-0 h-full w-[55%] pointer-events-none select-none"
        viewBox="0 0 700 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        preserveAspectRatio="xMaxYMid slice"
      >
        {/* Mountain silhouette */}
        <path
          d="M350 800 L700 200 L700 900 Z"
          fill="#E8F2FE"
          opacity="0.6"
        />
        <path
          d="M200 800 L600 100 L700 300 L700 900 Z"
          fill="#D0E6FC"
          opacity="0.4"
        />
        <path
          d="M400 800 L680 320 L700 380 L700 900 Z"
          fill="#4FA3F7"
          opacity="0.15"
        />
        {/* Peak accent */}
        <path
          d="M580 100 L640 240 L520 240 Z"
          fill="#1E62C9"
          opacity="0.12"
        />
        {/* Water ripples at bottom */}
        <ellipse cx="600" cy="820" rx="280" ry="30" fill="#4FA3F7" opacity="0.08" />
        <ellipse cx="620" cy="850" rx="220" ry="22" fill="#4FA3F7" opacity="0.06" />
        <ellipse cx="580" cy="875" rx="170" ry="16" fill="#4FA3F7" opacity="0.05" />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        {/* Eyebrow label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs font-black uppercase tracking-[0.3em] text-accent-blue mb-8"
        >
          Premium Pool Care
        </motion.p>

        {/* Giant headline */}
        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-black uppercase leading-none text-dark-blue"
            style={{ fontSize: "clamp(72px, 11vw, 128px)", letterSpacing: "-0.02em" }}
          >
            BLUE
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.span
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="block font-black uppercase leading-none text-stroke-accent"
            style={{ fontSize: "clamp(72px, 11vw, 128px)", letterSpacing: "-0.02em" }}
          >
            PEAK.
          </motion.span>
        </div>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-mid-blue font-normal text-lg md:text-xl mt-6 mb-10 max-w-md"
        >
          We keep your pool clean, balanced, and ready to enjoy so you can spend more time making memories and less time worrying about maintenance.
        </motion.p>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="bg-dark-blue text-white font-black px-8 py-4 rounded-full hover:bg-accent-blue transition-all hover:scale-105 text-sm uppercase tracking-widest"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-dark-blue text-dark-blue font-black px-8 py-4 rounded-full hover:bg-dark-blue hover:text-white transition-all hover:scale-105 text-sm uppercase tracking-widest"
          >
            See Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
