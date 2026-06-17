"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: "🌊",
    title: "Weekly Maintenance",
    description:
      "Consistent, reliable weekly visits to skim, vacuum, brush, and test your water. We handle every detail so your pool is always swim-ready.",
  },
  {
    icon: "⚗️",
    title: "Chemical Balancing",
    description:
      "Precise water chemistry testing and adjustment. We balance pH, alkalinity, chlorine, and more to keep your water safe and sparkling.",
  },
  {
    icon: "🔧",
    title: "Equipment Repair",
    description:
      "From pumps and heaters to automation systems and lighting — our certified technicians diagnose and repair all major pool equipment brands.",
  },
  {
    icon: "🟢",
    title: "Algae Treatment",
    description:
      "Green, black, or mustard algae — we have professional-grade treatments to eliminate every type and restore your pool's clarity fast.",
  },
  {
    icon: "❄️",
    title: "Pool Opening & Closing",
    description:
      "Seasonal opening and winterization handled by the pros. We protect your investment and make every opening day seamless.",
  },
  {
    icon: "🔩",
    title: "Filter Cleaning",
    description:
      "Cartridge, DE, and sand filter deep-cleans performed to manufacturer specifications. Clean filters mean cleaner water and lower energy costs.",
  },
  {
    icon: "🛡️",
    title: "Kid Proofing",
    description:
      "Extra layers of protection for peace of mind around unsupervised children. We install and inspect pool safety fences, locking gate latches, surface alarms, and anti-entrapment drain covers to meet the highest safety standards.",
  },
  {
    icon: "💦",
    title: "Pressure Washing",
    description:
      "High-pressure washing of pool decks, coping, tile lines, and surrounding hardscapes. We blast away algae, mineral deposits, staining, and grime to restore your pool area to a clean, like-new finish.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark-blue min-h-[50vh] flex items-end pb-20 px-6 pt-40 relative overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-20"
          viewBox="0 0 500 600"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path d="M250 600L500 100L500 600Z" fill="#4FA3F7" />
          <path d="M100 600L450 0L500 200L500 600Z" fill="#1E62C9" />
        </svg>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-light-blue text-xs font-black uppercase tracking-[0.3em] mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white uppercase leading-none"
            style={{ fontSize: "clamp(48px, 9vw, 108px)", letterSpacing: "-0.02em" }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-light-blue/60 text-lg mt-4 max-w-xl"
          >
            Comprehensive pool care solutions tailored to every pool and every homeowner.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-bg py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
              >
                <div className="group bg-white rounded-xl p-8 border-t-4 border-dark-blue hover:border-light-blue shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 h-full">
                  <span className="text-4xl" role="img" aria-label={s.title}>{s.icon}</span>
                  <h3 className="font-black text-dark-blue text-lg uppercase tracking-wide">{s.title}</h3>
                  <p className="text-mid-blue/70 text-sm leading-relaxed flex-1">{s.description}</p>
                  <Link
                    href="/contact"
                    className="text-accent-blue text-xs font-black uppercase tracking-widest hover:text-dark-blue transition-colors"
                  >
                    Get a Quote →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
