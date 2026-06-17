"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-dark-blue py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-light-blue text-xs font-black uppercase tracking-[0.3em] mb-4"
        >
          Ready to get started?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black text-white uppercase leading-none mb-6"
          style={{ fontSize: "clamp(40px, 7vw, 80px)", letterSpacing: "-0.02em" }}
        >
          Your Pool Deserves Better.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-base mb-10 max-w-xl mx-auto"
        >
          Join many homeowners who trust Blue Peak for effortless, crystal-clear pool care.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-light-blue text-dark-blue font-black px-10 py-4 rounded-full hover:bg-white transition-all hover:scale-105 text-sm uppercase tracking-widest"
          >
            Book a Service
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
