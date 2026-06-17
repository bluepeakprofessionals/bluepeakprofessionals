"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-dark-blue shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className={`${scrolled ? "bg-white rounded-lg p-2" : ""} transition-all duration-300`}>
              {/* logo.png — plain img avoids next/image setState-during-render in dev mode */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Blue Peak Pool Care" height={40} className="h-10 w-auto" />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-bold tracking-widest uppercase transition-colors hover:text-light-blue ${
                    pathname === l.href
                      ? "text-light-blue"
                      : scrolled
                      ? "text-white"
                      : "text-dark-blue"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={`text-sm font-black px-5 py-2.5 rounded-full transition-all hover:scale-105 ${
                  scrolled
                    ? "bg-light-blue text-dark-blue hover:bg-white"
                    : "bg-dark-blue text-white hover:bg-accent-blue"
                }`}
              >
                Get a Quote
              </Link>
            </li>
          </ul>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || open ? "bg-white" : "bg-dark-blue"
              } ${open ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || open ? "bg-white" : "bg-dark-blue"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                scrolled || open ? "bg-white" : "bg-dark-blue"
              } ${open ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark-blue flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <div className="bg-white rounded-lg p-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Blue Peak Pool Care" height={40} className="h-10 w-auto" />
            </div>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white font-black text-4xl uppercase tracking-widest hover:text-light-blue transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-4 bg-light-blue text-dark-blue font-black text-lg px-8 py-3 rounded-full hover:bg-white transition-colors"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
