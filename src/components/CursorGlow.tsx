import { useRef } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
        animate={{
          x: ["-20%", "20%", "-10%", "10%", "-20%"],
          y: ["-10%", "15%", "-20%", "5%", "-10%"],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)",
        }}
        animate={{
          x: ["15%", "-10%", "5%", "-20%", "15%"],
          y: ["5%", "-15%", "10%", "-5%", "5%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
