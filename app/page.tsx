"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

const services = [
  { icon: "🌊", title: "Weekly Maintenance" },
  { icon: "🧪", title: "Chemical Balancing" },
  { icon: "🔧", title: "Equipment Repair" },
  { icon: "🟢", title: "Algae Treatment" },
  { icon: "❄️", title: "Pool Opening/Closing" },
  { icon: "🔩", title: "Filter Cleaning" },
  { icon: "🛡️", title: "Kid Proofing" },
  { icon: "💧", title: "Pressure Washing" },
];

const whyItems = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#4FA3F7" strokeWidth="2.5"/>
        <path d="M13 20.5l5 5 9-10" stroke="#4FA3F7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Certified Technicians",
    body: "Every technician is licensed, background-checked, and trained to the highest industry standards.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z" stroke="#4FA3F7" strokeWidth="2.5"/>
        <path d="M14 20c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" stroke="#4FA3F7" strokeWidth="2.5"/>
        <path d="M20 14v-4M20 30v-4M14 20h-4M30 20h-4" stroke="#4FA3F7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Eco-Safe Chemicals",
    body: "We use biodegradable, family-safe chemical formulas that protect your pool and the planet.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="6" y="8" width="28" height="26" rx="3" stroke="#4FA3F7" strokeWidth="2.5"/>
        <path d="M6 15h28" stroke="#4FA3F7" strokeWidth="2.5"/>
        <path d="M14 6v4M26 6v4" stroke="#4FA3F7" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M12 23h6M22 23h6M12 28h4" stroke="#4FA3F7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Same-Week Service",
    body: "Flexible scheduling means we can typically have a technician at your pool within the same week.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M20 6l2.79 8.59H32l-7.38 5.36 2.79 8.59L20 23.18l-7.41 5.36 2.79-8.59L8 14.59h9.21L20 6z" stroke="#4FA3F7" strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Satisfaction Guaranteed",
    body: "Not happy with the service? We'll come back and make it right — no questions asked.",
  },
];

const testimonials = [
  {
    quote: "Blue Peak transformed our neglected pool into a showpiece. The team is professional, punctual, and genuinely cares about the quality of their work.",
    name: "Sarah M.",
    location: "Dallas, TX",
  },
  {
    quote: "I've tried three other pool services before. None of them come close. Blue Peak is in a different league — worth every penny.",
    name: "David R.",
    location: "Waxahachie, TX",
  },
  {
    quote: "Same-week service is real. I called Monday morning and they were at my house Tuesday afternoon. Water is crystal clear ever since.",
    name: "Jen & Tom K.",
    location: "Midlothian, TX",
  },
];

function CountUp({ end, label }: { end: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center md:text-left">
      <motion.p
        className="font-black text-white leading-none mb-2"
        style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {end}
      </motion.p>
      <p className="text-light-blue text-sm font-bold uppercase tracking-widest">{label}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Mountain peak SVG divider */}
      <div className="w-full overflow-hidden leading-[0] -mt-1" aria-hidden="true">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
          <path d="M0 80 L360 10 L720 60 L1080 0 L1440 50 L1440 80 Z" fill="#F4F8FE"/>
          <path d="M0 80 L1440 80 Z" fill="white"/>
        </svg>
      </div>

      {/* Services Strip */}
      <section className="bg-bg py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="text-xs font-black text-light-blue tracking-[0.3em] uppercase">01</span>
            <div className="h-px flex-1 bg-light-blue/20" />
            <h2 className="text-xs font-black uppercase tracking-widest text-dark-blue">Our Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <ServiceCard icon={s.icon} title={s.title} variant="strip" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Stats Section */}
      <section className="bg-dark-blue py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-10">
            <span className="text-xs font-black text-light-blue tracking-[0.3em] uppercase">02</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <CountUp end="50+" label="Pools Maintained" />
              <CountUp end="2+" label="Years of Service" />
              <CountUp end="99%" label="Client Satisfaction" />
              <CountUp end="5.0★" label="Avg. Rating" />
            </div>
          </div>
          <div>
            <h2
              className="font-black text-white uppercase leading-none mb-6"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", letterSpacing: "-0.02em" }}
            >
              Pool Care That Sets the Standard
            </h2>
            <p className="text-light-blue/70 text-base leading-relaxed mb-8">
              Blue Peak Pool Care was founded with a simple mission: deliver the kind of white-glove service that makes owning a pool a joy, not a chore. Our certified technicians treat every pool like it&apos;s their own — with precision, care, and an uncompromising commitment to clarity.
            </p>
            <div className="h-px bg-white/10 my-8" />
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Serving the greater metro area · Licensed & Insured
            </p>
          </div>
        </div>
      </section>

      {/* Why Blue Peak */}
      <section className="bg-bg py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <span className="text-xs font-black text-light-blue tracking-[0.3em] uppercase">03</span>
            <div className="h-px flex-1 bg-light-blue/20" />
            <h2 className="text-xs font-black uppercase tracking-widest text-dark-blue">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex flex-col gap-4"
              >
                {item.icon}
                <h3 className="font-black text-dark-blue text-lg uppercase tracking-wide">{item.title}</h3>
                <p className="text-mid-blue/70 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sky py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <span className="text-xs font-black text-light-blue tracking-[0.3em] uppercase">04</span>
            <div className="h-px flex-1 bg-accent-blue/20" />
            <h2 className="text-xs font-black uppercase tracking-widest text-dark-blue">What Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
