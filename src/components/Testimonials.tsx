import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "COO, Meridian Health Group",
    content:
      "MODUS identified 4 bottlenecks we didn't even know we had. Their invoice automation alone saves us 22 hours a week. The team training was so thorough, our staff adopted it within days. Best investment we made this year.",
    rating: 5,
    savings: "₹32,00,000/year saved",
    avatar: "SC",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, Elevate Digital Agency",
    content:
      "We were drowning in client reporting — every Friday was a nightmare. MODUS built an automated reporting pipeline that pulls data from 6 platforms and generates beautiful client-ready reports. We got back 30+ hours a month.",
    rating: 5,
    savings: "₹20,00,000/year saved",
    avatar: "MR",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Jennifer Park",
    role: "VP Operations, Stonegate Properties",
    content:
      "The lead qualification chatbot they built handles 70% of our initial inquiries now. Our agents only talk to pre-qualified, warm leads. Conversion rates are up 45%. The ROI calculator on their site? Those numbers are real.",
    rating: 5,
    savings: "₹43,00,000/year saved",
    avatar: "JP",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Arjun Mehta",
    role: "CTO, NovaFin Solutions India",
    content:
      "As a fintech company, we needed automation that was both powerful and compliant with RBI guidelines. MODUS's team understood our regulatory requirements and built workflows that reduced our expense processing time by 80% while maintaining full audit trails.",
    rating: 5,
    savings: "₹38,00,000/year saved",
    avatar: "AM",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Lisa Thompson",
    role: "HR Director, Pacific Retail Group",
    content:
      "Employee onboarding used to take 2 weeks of back-and-forth. MODUS automated the entire thing — from offer letters to IT setup to training schedules. New hires now go from signed offer to productive in 3 days. Incredible.",
    rating: 5,
    savings: "₹26,00,000/year saved",
    avatar: "LT",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 2000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  const t = testimonials[current];

  return (
    <section className="relative py-20 sm:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-400 text-xs sm:text-sm mb-6">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Trusted by </span>
            <span className="gradient-text">Industry Leaders</span>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div
          className="card-border glow-cyan"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <div className="card-inner p-6 sm:p-10 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-16 sm:w-20 h-16 sm:h-20 text-white/[0.02]" />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
                  "{t.content}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm sm:text-base">{t.name}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                  <div className="px-3 sm:px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="text-green-400 text-xs sm:text-sm font-semibold">{t.savings}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <div className="flex justify-center gap-3 mt-6 sm:mt-8">
              <button
                onClick={prev}
                className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition-all"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </button>
              <button
                onClick={next}
                className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition-all"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-3 sm:mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-indigo-500 w-6" : "bg-gray-600 hover:bg-gray-500 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
