import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, TrendingUp, Users } from "lucide-react";

const rotatingWords = ["Workflows", "Customer Support", "Data Entry", "Lead Generation", "Inventory", "Scheduling"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Track mouse for interactive parallax on floating shapes
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  // Typing animation
  useEffect(() => {
    const currentWord = rotatingWords[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedWord.length < currentWord.length) {
      timeout = setTimeout(() => setTypedWord(currentWord.slice(0, typedWord.length + 1)), 80);
    } else if (!isDeleting && typedWord.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && typedWord.length > 0) {
      timeout = setTimeout(() => setTypedWord(typedWord.slice(0, -1)), 40);
    } else if (isDeleting && typedWord.length === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }

    return () => clearTimeout(timeout);
  }, [typedWord, isDeleting, wordIndex]);

  const stats = [
    { icon: Zap, label: "30-70%", sublabel: "Cost Reduction" },
    { icon: TrendingUp, label: "5x", sublabel: "Faster Processes" },
    { icon: Users, label: "500+", sublabel: "Automations Deployed" },
    { icon: Shield, label: "100%", sublabel: "ROI Guaranteed" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-4 overflow-hidden"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Interactive animated orbs that follow mouse slightly */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full pointer-events-none hidden md:block"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
        }}
        animate={{
          x: mousePos.x * 0.6 - 175,
          y: mousePos.y * 0.6 - 175,
        }}
        transition={{ type: "spring", stiffness: 20, damping: 35 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs sm:text-sm text-gray-300">#1 AI Automation Agency — Trusted by 200+ Businesses</span>
        </motion.div>

        {/* Main heading — fixed layout structure */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-wrap items-baseline justify-center gap-x-3">
            <span className="text-white whitespace-nowrap">Automate Your</span>
            <span
              className="gradient-text inline-block text-left whitespace-nowrap"
            >
              <span className="inline-block">{typedWord}</span>
              <span className="animate-blink text-indigo-400 font-light ml-0.5">|</span>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed px-2"
        >
          We identify bottlenecks in your business, implement custom AI automation, and train your team — 
          <span className="text-white font-medium"> all at a fraction of the cost</span> of traditional consulting. 
          Save time, slash costs, and scale effortlessly.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-2"
        >
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-base sm:text-lg hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.03] active:scale-[0.98]"
          >
            Get Your Free AI Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#demos"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold text-base sm:text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 active:scale-[0.98]"
          >
            <Play className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            Watch Demo Reel
          </a>
        </motion.div>

        {/* Stats — fixed height grid to prevent layout shift */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group p-4 sm:p-5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] hover:border-indigo-500/20 transition-all duration-300 cursor-default"
            >
              <stat.icon className="w-5 h-5 text-indigo-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-xl sm:text-2xl font-bold text-white group-hover:glow-text transition-all">{stat.label}</div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating shapes with mouse-parallax */}
      <motion.div
        className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-indigo-500/10 pointer-events-none"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 45, 0],
          x: mousePos.x * 0.02,
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-4 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-cyan-400/10 pointer-events-none"
        animate={{
          y: [10, -15, 10],
          rotate: [0, -30, 0],
          x: -mousePos.x * 0.015,
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
