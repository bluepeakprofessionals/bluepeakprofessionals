"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { posts } from "@/lib/posts";

const categoryColors: Record<string, string> = {
  Maintenance: "bg-accent-blue/10 text-accent-blue",
  "Water Chemistry": "bg-cyan-100 text-cyan-700",
  Safety: "bg-green-100 text-green-700",
  Algae: "bg-emerald-100 text-emerald-700",
  Equipment: "bg-orange-100 text-orange-700",
  Cleaning: "bg-sky-100 text-sky-700",
};

export default function BlogPage() {
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
            Tips &amp; Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white uppercase leading-none"
            style={{ fontSize: "clamp(48px, 9vw, 108px)", letterSpacing: "-0.02em" }}
          >
            Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-light-blue/60 text-lg mt-4 max-w-xl"
          >
            Pool care advice, safety tips, and industry insights from the Blue Peak team.
          </motion.p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="bg-bg py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden border border-gray-100"
              >
                <div className="h-1.5 bg-gradient-to-r from-dark-blue to-accent-blue" />
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    <span className="text-xs text-mid-blue/40 font-medium">{post.readTime}</span>
                  </div>
                  <h2 className="font-black text-dark-blue text-lg leading-snug">{post.title}</h2>
                  <p className="text-mid-blue/70 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xs text-mid-blue/40">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent-blue text-xs font-black uppercase tracking-widest hover:text-dark-blue transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
