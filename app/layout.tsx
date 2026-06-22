import type { Metadata } from "next";
import { DM_Sans, Oswald } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), { ssr: false });

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Peak Pool Care | Premium Pool Maintenance",
  description:
    "Crystal-clear pools, every time. Blue Peak Pool Care provides premium pool maintenance, chemical balancing, equipment repair, and more.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${oswald.variable} font-dm antialiased bg-bg text-dark-blue`} suppressHydrationWarning>
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          href="tel:+18666866817"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-accent-blue text-white font-black text-sm uppercase tracking-widest px-5 py-3 rounded-full shadow-lg hover:bg-dark-blue hover:scale-105 transition-all duration-200"
          aria-label="Call us at (866) 686-6817"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12.06 19.79 19.79 0 011.4 3.52 2 2 0 013.38 1.34h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9a16 16 0 006.07 6.07l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.73 2.02z"/>
          </svg>
          Call Now
        </a>
      </body>
    </html>
  );
}
