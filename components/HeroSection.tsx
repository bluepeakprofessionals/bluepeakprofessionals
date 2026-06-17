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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Pool water gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #7dd8f0 0%, #29a8d4 30%, #0e7fb5 60%, #095f8a 100%)",
        }}
        aria-hidden="true"
      />

      {/* Caustic light shimmer — SVG filter-based ripple pattern */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="caustic" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.018 0.022"
              numOctaves="4"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="28"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            <feComposite in="displaced" in2="SourceGraphic" operator="in" />
          </filter>
          <radialGradient id="shimmerGrad" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="#caf4ff" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#7de8ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0e7fb5" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Caustic ripple overlay */}
        <rect width="100%" height="100%" fill="url(#shimmerGrad)" filter="url(#caustic)" />
        {/* Surface wave lines */}
        <ellipse cx="50%" cy="38%" rx="55%" ry="4%" fill="white" opacity="0.06" />
        <ellipse cx="48%" cy="52%" rx="45%" ry="3%" fill="white" opacity="0.05" />
        <ellipse cx="52%" cy="65%" rx="50%" ry="3.5%" fill="white" opacity="0.04" />
        <ellipse cx="46%" cy="76%" rx="40%" ry="2.5%" fill="white" opacity="0.04" />
        {/* Light rays from surface */}
        <line x1="30%" y1="0" x2="15%" y2="100%" stroke="white" strokeWidth="60" opacity="0.04" />
        <line x1="55%" y1="0" x2="45%" y2="100%" stroke="white" strokeWidth="90" opacity="0.03" />
        <line x1="75%" y1="0" x2="85%" y2="100%" stroke="white" strokeWidth="50" opacity="0.035" />
        <line x1="90%" y1="0" x2="100%" y2="80%" stroke="white" strokeWidth="40" opacity="0.025" />
        {/* Bright shimmer spots */}
        <ellipse cx="62%" cy="22%" rx="6%" ry="3%" fill="white" opacity="0.18" />
        <ellipse cx="38%" cy="35%" rx="4%" ry="2%" fill="white" opacity="0.12" />
        <ellipse cx="72%" cy="48%" rx="3%" ry="1.5%" fill="white" opacity="0.1" />
        <ellipse cx="25%" cy="60%" rx="5%" ry="2%" fill="white" opacity="0.08" />
      </svg>

      {/* Dark vignette on left so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(6,40,80,0.55) 0%, rgba(6,40,80,0.25) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        {/* Eyebrow label */}
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200 mb-8"
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
            className="font-black uppercase leading-none text-white"
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
            className="block font-black uppercase leading-none"
            style={{
              fontSize: "clamp(72px, 11vw, 128px)",
              letterSpacing: "-0.02em",
              WebkitTextStroke: "3px rgba(255,255,255,0.85)",
              color: "transparent",
            }}
          >
            PEAK.
          </motion.span>
        </div>

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-cyan-100 font-normal text-lg md:text-xl mt-6 mb-10 max-w-md"
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
            className="bg-white text-dark-blue font-black px-8 py-4 rounded-full hover:bg-cyan-100 transition-all hover:scale-105 text-sm uppercase tracking-widest shadow-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white font-black px-8 py-4 rounded-full hover:bg-white hover:text-dark-blue transition-all hover:scale-105 text-sm uppercase tracking-widest"
          >
            See Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
