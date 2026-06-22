"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What areas do you serve?",
        a: "We serve Ellis County and the greater DFW metroplex, including Waxahachie, Midlothian, Dallas, and surrounding communities. Not sure if you're in our service area? Give us a call and we'll let you know.",
      },
      {
        q: "How do I get started with Blue Peak Pool Care?",
        a: "Just reach out through our contact page or call us at (866) 686-6817. We'll ask a few quick questions about your pool, walk you through our service options, and get you scheduled — usually within the same week.",
      },
      {
        q: "Do you offer one-time services or only recurring plans?",
        a: "Both. We offer recurring weekly maintenance plans as well as one-time services like algae treatments, equipment repairs, filter cleanings, and pressure washing. Whatever your pool needs, we can help.",
      },
    ],
  },
  {
    category: "Maintenance",
    questions: [
      {
        q: "How often should my pool be serviced?",
        a: "For most residential pools, weekly service is the standard. During peak summer months with heavier use and heat, consistent weekly visits keep your chemistry balanced and prevent issues from building up. Monthly or bi-weekly plans may work for pools with lighter use.",
      },
      {
        q: "What does a weekly maintenance visit include?",
        a: "A typical weekly visit includes skimming debris from the surface, vacuuming the floor, brushing the walls and waterline, emptying skimmer and pump baskets, testing and adjusting water chemistry, and a visual inspection of your equipment.",
      },
      {
        q: "Will I need to be home during service visits?",
        a: "Not at all. Most of our clients aren't home during their scheduled visits. As long as we have access to your pool area, we'll take care of everything and leave a service note so you know what was done.",
      },
    ],
  },
  {
    category: "Water Chemistry",
    questions: [
      {
        q: "Why does my pool water look cloudy?",
        a: "Cloudy water is usually caused by low sanitizer levels, high pH, poor filtration, or the early stages of an algae bloom. It can also result from heavy use or rain. We can test your water and diagnose the cause quickly — don't wait, as cloudiness tends to get worse before it gets better.",
      },
      {
        q: "My pool smells strongly of chlorine. Is that a problem?",
        a: "Yes, and it's actually a common misconception. A strong chlorine smell usually means your pool has too little free chlorine, not too much. The odor comes from chloramines — a byproduct of chlorine reacting with contaminants. A shock treatment typically resolves it.",
      },
      {
        q: "How do I know if my pool chemistry is balanced?",
        a: "The clearest sign is water that looks clear, feels comfortable to swim in, and doesn't cause eye or skin irritation. A proper test measures pH (7.2–7.6), total alkalinity (80–120 ppm), free chlorine (2–4 ppm), and calcium hardness (200–400 ppm). We test all of these on every visit.",
      },
    ],
  },
  {
    category: "Safety",
    questions: [
      {
        q: "What kid-proofing services do you offer?",
        a: "We install and inspect pool safety fences, self-closing and self-latching gate hardware, surface alarms, and anti-entrapment drain covers. We can also do a full safety assessment of your pool area and recommend the right combination of barriers for your specific setup.",
      },
      {
        q: "Are your drain covers up to current safety standards?",
        a: "If your pool was built before 2008, there's a good chance the drain covers don't meet modern anti-entrapment standards. We inspect and replace drain covers as part of our kid-proofing service. It's a simple upgrade that makes a serious difference.",
      },
    ],
  },
  {
    category: "Equipment",
    questions: [
      {
        q: "What brands of pool equipment do you service?",
        a: "We work on all major brands including Pentair, Hayward, Jandy, Zodiac, and more. Whether it's a pump, heater, filter, automation system, or lighting — our technicians are trained across the full range of residential pool equipment.",
      },
      {
        q: "My pump is making a loud noise. What should I do?",
        a: "Turn it off and give us a call. Unusual noises from a pump — grinding, screeching, or rattling — usually indicate a failing bearing, cavitation, or debris in the impeller. Running a damaged pump can cause further damage or overheat the motor. We'll diagnose it and get it sorted quickly.",
      },
      {
        q: "Do you offer equipment repair warranties?",
        a: "Yes. We stand behind our work. All equipment repairs performed by our technicians are backed by a service warranty. We'll give you the specifics when we scope the job.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-black text-dark-blue text-sm md:text-base group-hover:text-accent-blue transition-colors">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-dark-blue flex items-center justify-center transition-all duration-300 ${
            open ? "bg-dark-blue rotate-45" : "bg-transparent"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 1v10M1 6h10" stroke={open ? "white" : "#0A1E4D"} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-mid-blue/70 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-20 px-6 pt-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/pool.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" aria-hidden="true" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,30,77,0.82) 0%, rgba(21,65,140,0.70) 40%, rgba(30,98,201,0.55) 100%)" }} aria-hidden="true" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,30,77,0.60) 0%, rgba(10,30,77,0.30) 50%, transparent 100%)" }} aria-hidden="true" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-light-blue text-xs font-black uppercase tracking-[0.3em] mb-4"
          >
            Got Questions?
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white uppercase leading-none"
            style={{ fontSize: "clamp(48px, 9vw, 108px)", letterSpacing: "-0.02em" }}
          >
            FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-light-blue/60 text-lg mt-4 max-w-xl"
          >
            Here are some helpful question and answers for pool owners.
          </motion.p>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="bg-bg py-20 md:py-32 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-14">
          {faqs.map((section, i) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-accent-blue mb-4">
                {section.category}
              </p>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 md:px-8">
                {section.questions.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
