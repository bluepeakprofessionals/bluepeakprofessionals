"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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

      {/* ── Layer 1: pool.jpg background photo ── */}
      <div className="absolute inset-0">
        <Image
          src="/pool.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* ── Layer 2: dark-blue colour wash — tints photo to brand palette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(10,30,77,0.82) 0%, rgba(21,65,140,0.70) 40%, rgba(30,98,201,0.55) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 3: radial highlight — bright aqua centre, dark edges ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 45%, rgba(79,163,247,0.25) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 4: caustic shimmer + animated ripple rings ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-25"
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
        <rect width="100%" height="100%" fill="url(#shimmerGrad)" filter="url(#caustic)" />
        <ellipse cx="50%" cy="38%" rx="55%" ry="4%" fill="white" opacity="0.05" />
        <ellipse cx="48%" cy="52%" rx="45%" ry="3%" fill="white" opacity="0.04" />
        <ellipse cx="52%" cy="65%" rx="50%" ry="3.5%" fill="white" opacity="0.03" />

      </svg>

      {/* ── Layer 5: left vignette — keeps text crisp ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(10,30,77,0.60) 0%, rgba(10,30,77,0.30) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 6: hero content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs font-black uppercase tracking-[0.3em] text-cyan-200 mb-8"
        >
          Premium Pool Care
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-oswald font-bold uppercase leading-none text-white"
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
            className="block font-oswald font-bold uppercase leading-none text-white"
            style={{
              fontSize: "clamp(72px, 11vw, 128px)",
              letterSpacing: "-0.02em",
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
