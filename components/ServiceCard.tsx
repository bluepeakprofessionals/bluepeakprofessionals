"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: string;
  title: string;
  description?: string;
  variant?: "strip" | "full";
}

export default function ServiceCard({ icon, title, description, variant = "strip" }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(10,30,77,0.12)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group bg-white rounded-xl p-6 border-t-4 border-dark-blue hover:border-light-blue shadow-sm cursor-default flex flex-col gap-3"
    >
      <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
      <h3 className="font-black text-dark-blue text-base uppercase tracking-wide">{title}</h3>
      {variant === "full" && description && (
        <p className="text-mid-blue/70 text-sm leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
