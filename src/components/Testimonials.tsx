import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "COO, Meridian Health Group",
    content:
      "AIQON identified 4 bottlenecks we didn't even know we had. Their invoice automation alone saves us 22 hours a week. The team training was so thorough, our staff adopted it within days. Best investment we made this year.",
    rating: 5,
    savings: "₹32,00,000/year saved",
    avatar: "SC",
    color: "from-indigo-500 to-purple-500",
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, Elevate Digital Agency",
    content:
      "We were drowning in client reporting — every Friday was a nightmare. AIQON built an automated reporting pipeline that pulls data from 6 platforms and generates beautiful client-ready reports. We got back 30+ hours a month.",
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
      "As a fintech company, we needed automation that was both powerful and compliant with RBI guidelines. AIQON's team understood our regulatory requirements and built workflows that reduced our expense processing time by 80% while maintaining full audit trails.",
    rating: 5,
    savings: "₹38,00,000/year saved",
    avatar: "AM",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Lisa Thompson",
    role: "HR Director, Pacific Retail Group",
    content:
      "Employee onboarding used to take 2 weeks of back-and-forth. AIQON automated the entire thing — from offer letters to IT setup to training schedules. New hires now go from signed offer to productive in 3 days. Incredible.",
    rating: 5,
    savings: "₹26,00,000/year saved",
    avatar: "LT",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Testimonials() {
  // Duplicate testimonials for seamless infinite scroll
  const scrollItems = [...testimonials, ...testimonials];

  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
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
      </div>

      <div className="relative flex overflow-hidden group pb-8">
        {/* Left and Right fade overlays for smooth enter/exit */}
        <div className="absolute left-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 sm:w-32 h-full bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee w-max gap-4 sm:gap-6 px-4">
          {scrollItems.map((t, i) => (
            <div key={i} className="w-[300px] sm:w-[400px] shrink-0 card-border glow-cyan flex flex-col">
              <div className="card-inner p-6 sm:p-8 relative flex-grow flex flex-col h-full hover:bg-white/[0.04] transition-colors">
                <Quote className="absolute top-4 right-4 w-10 sm:w-12 h-10 sm:h-12 text-white/[0.03]" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{t.content}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {t.avatar}
                    </div>
                    <div className="min-w-0">
                      <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                      <div className="text-xs text-gray-500 truncate">{t.role}</div>
                    </div>
                  </div>
                  <div className="px-2 py-1 rounded-md bg-green-500/10 border border-green-500/20 shrink-0 self-start sm:self-auto">
                    <span className="text-green-400 text-xs font-semibold whitespace-nowrap">{t.savings.split('/')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
