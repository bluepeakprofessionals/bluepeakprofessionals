"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Weekly Maintenance",
  "Chemical Balancing",
  "Equipment Repair",
  "Algae Treatment",
  "Pool Opening/Closing",
  "Filter Cleaning",
  "Kid Proofing",
  "Pressure Washing",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New Quote Request — ${formData.service || "General Inquiry"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone || "Not provided"}\nEmail: ${formData.email}\nService: ${formData.service || "Not specified"}\n\nMessage:\n${formData.message || "No message provided."}`
    );
    window.location.href = `mailto:bluepeakprofessionals@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-blue min-h-[40vh] flex items-end pb-16 px-6 pt-40 relative overflow-hidden">
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
            Let&apos;s Connect
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white uppercase leading-none"
            style={{ fontSize: "clamp(48px, 9vw, 108px)", letterSpacing: "-0.02em" }}
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* Split layout */}
      <section className="bg-bg py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-black text-dark-blue uppercase text-3xl md:text-4xl tracking-tight mb-10">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E62C9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12.06 19.79 19.79 0 011.4 3.52 2 2 0 013.38 1.34h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.73 2.02z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-black text-dark-blue text-sm uppercase tracking-wide mb-1">Phone</p>
                  <p className="text-mid-blue/80 text-sm">(888) 814-2819</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E62C9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="font-black text-dark-blue text-sm uppercase tracking-wide mb-1">Email</p>
                  <p className="text-mid-blue/80 text-sm">bluepeakprofessionals@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E62C9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="font-black text-dark-blue text-sm uppercase tracking-wide mb-1">Service Area</p>
                  <p className="text-mid-blue/80 text-sm">Serving Ellis County and DFW metroplex</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-sky flex items-center justify-center flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E62C9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="font-black text-dark-blue text-sm uppercase tracking-wide mb-1">Hours</p>
                  <p className="text-mid-blue/80 text-sm">
                    Mon – Fri: 8am – 8pm<br />
                    Sat – Sun: 8am – 8pm
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-sky"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1E62C9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="font-black text-dark-blue text-2xl">Message Received!</h3>
                <p className="text-mid-blue/70 text-sm max-w-xs">
                  Thanks for reaching out. We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="font-black text-dark-blue uppercase text-xl tracking-tight mb-2">
                  Request a Quote
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-dark-blue">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border border-sky rounded-lg px-4 py-3 text-sm text-dark-blue placeholder:text-mid-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-dark-blue">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border border-sky rounded-lg px-4 py-3 text-sm text-dark-blue placeholder:text-mid-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest text-dark-blue">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border border-sky rounded-lg px-4 py-3 text-sm text-dark-blue placeholder:text-mid-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-black uppercase tracking-widest text-dark-blue">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="border border-sky rounded-lg px-4 py-3 text-sm text-dark-blue bg-white focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  >
                    <option value="" disabled>Select a service…</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-dark-blue">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="border border-sky rounded-lg px-4 py-3 text-sm text-dark-blue placeholder:text-mid-blue/40 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent resize-none"
                    placeholder="Tell us about your pool and what you need…"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-dark-blue text-white font-black px-8 py-4 rounded-full hover:bg-accent-blue transition-all hover:scale-105 text-sm uppercase tracking-widest w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
