"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getPost, posts } from "@/lib/posts";
import CTABanner from "@/components/CTABanner";

const categoryColors: Record<string, string> = {
  Maintenance: "bg-accent-blue/10 text-accent-blue",
  "Water Chemistry": "bg-cyan-100 text-cyan-700",
  Safety: "bg-green-100 text-green-700",
  Algae: "bg-emerald-100 text-emerald-700",
  Equipment: "bg-orange-100 text-orange-700",
  Cleaning: "bg-sky-100 text-sky-700",
};

function renderParagraph(text: string, i: number) {
  // Bold **text** support
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p key={i} className="text-mid-blue/80 text-base leading-relaxed">
      {parts.map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="text-dark-blue font-black">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg px-6">
        <div className="text-center">
          <h1 className="font-black text-dark-blue text-4xl mb-4">Post not found</h1>
          <Link href="/blog" className="text-accent-blue font-black uppercase tracking-widest text-sm hover:text-dark-blue transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-dark-blue pt-36 pb-16 px-6 relative overflow-hidden">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-10"
          viewBox="0 0 500 600"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path d="M250 600L500 100L500 600Z" fill="#4FA3F7" />
          <path d="M100 600L450 0L500 200L500 600Z" fill="#1E62C9" />
        </svg>
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <Link href="/blog" className="text-light-blue/60 text-xs font-black uppercase tracking-widest hover:text-light-blue transition-colors">
              ← Blog
            </Link>
            <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${categoryColors[post.category]}`}>
              {post.category}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(28px, 5vw, 56px)" }}
          >
            {post.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-light-blue/50 text-sm"
          >
            {post.date} &nbsp;·&nbsp; {post.readTime}
          </motion.p>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-bg py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 flex flex-col gap-6"
          >
            {post.content.map((para, i) => renderParagraph(para, i))}
          </motion.div>

          {/* Back link */}
          <div className="mt-10">
            <Link
              href="/blog"
              className="text-accent-blue text-sm font-black uppercase tracking-widest hover:text-dark-blue transition-colors"
            >
              ← Back to Blog
            </Link>
          </div>

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-mid-blue/40 mb-6">Related Posts</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-6 flex flex-col gap-2"
                  >
                    <span className={`text-xs font-black uppercase tracking-widest px-2 py-0.5 rounded-full self-start ${categoryColors[r.category]}`}>
                      {r.category}
                    </span>
                    <h3 className="font-black text-dark-blue text-sm leading-snug">{r.title}</h3>
                    <span className="text-accent-blue text-xs font-black uppercase tracking-widest mt-auto">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
