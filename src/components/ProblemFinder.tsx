import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, AlertCircle, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";

interface Bottleneck {
  problem: string;
  aiSolution: string;
  savings: string;
  icon: string;
}

const industries: Record<string, Bottleneck[]> = {
  "E-Commerce": [
    {
      problem: "Manual order processing & inventory sync takes hours daily",
      aiSolution: "AI-powered order management system with real-time inventory sync",
      savings: "Save 15-20 hrs/week — ~₹40,000/month",
      icon: "🛒",
    },
    {
      problem: "Customer support tickets overwhelm your small team",
      aiSolution: "AI chatbot handling 80% of routine queries with smart escalation",
      savings: "Reduce support costs by 60% — ~₹50,000/month",
      icon: "💬",
    },
    {
      problem: "Product descriptions written manually for hundreds of SKUs",
      aiSolution: "AI content generator creating SEO-optimized descriptions in bulk",
      savings: "Save 30+ hrs/month — ~₹30,000/month",
      icon: "📝",
    },
  ],
  "Healthcare": [
    {
      problem: "Patient appointment scheduling causes constant back-and-forth",
      aiSolution: "AI scheduling assistant with smart calendar management",
      savings: "Reduce admin hours by 25 hrs/week — ~₹55,000/month",
      icon: "🏥",
    },
    {
      problem: "Medical records data entry is slow and error-prone",
      aiSolution: "AI document processing with OCR and auto-categorization",
      savings: "Save 20 hrs/week, reduce errors by 95% — ~₹45,000/month",
      icon: "📋",
    },
    {
      problem: "Insurance claim processing takes weeks",
      aiSolution: "Automated claim verification and routing system",
      savings: "Speed up processing by 70% — ~₹70,000/month",
      icon: "📄",
    },
  ],
  "Real Estate": [
    {
      problem: "Lead qualification done manually, missing hot prospects",
      aiSolution: "AI lead scoring & automated follow-up sequences",
      savings: "Increase conversions by 40% — ~₹80,000+/month value",
      icon: "🏠",
    },
    {
      problem: "Property listing descriptions take too long to write",
      aiSolution: "AI listing generator with virtual staging suggestions",
      savings: "Save 15 hrs/week — ~₹25,000/month",
      icon: "🔑",
    },
  ],
  "Finance": [
    {
      problem: "Invoice processing and reconciliation is entirely manual",
      aiSolution: "AI invoice parsing with automated GL coding & approvals",
      savings: "Save 30+ hrs/week — ~₹75,000/month",
      icon: "💰",
    },
    {
      problem: "Expense report reviews take finance team days each month",
      aiSolution: "AI expense auditing with policy compliance checks",
      savings: "Reduce processing time by 80% — ~₹50,000/month",
      icon: "🧾",
    },
  ],
  "Marketing Agency": [
    {
      problem: "Client reporting takes a full day every week",
      aiSolution: "Automated data aggregation & AI-generated client reports",
      savings: "Save 30 hrs/month — ~₹40,000/month",
      icon: "📊",
    },
    {
      problem: "Content calendar planning is slow and reactive",
      aiSolution: "AI content strategist with trend analysis & auto-scheduling",
      savings: "Save 20 hrs/month — ~₹35,000/month",
      icon: "📅",
    },
  ],
};

export default function ProblemFinder() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("");
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (industry: string) => {
    setSelectedIndustry(industry);
    setShowResults(true);
  };

  const bottlenecks = selectedIndustry ? industries[selectedIndustry] : [];

  return (
    <section id="problem-finder" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs sm:text-sm mb-6">
            <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Interactive Bottleneck Finder
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-2">
            <span className="text-white">What's </span>
            <span className="gradient-text">Slowing Down</span>
            <span className="text-white"> Your Business?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Select your industry and instantly see the bottlenecks AI can eliminate — with real cost and time savings estimates.
          </p>
        </motion.div>

        {/* Industry selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10"
        >
          {Object.keys(industries).map((industry) => (
            <motion.button
              key={industry}
              onClick={() => handleSelect(industry)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedIndustry === industry
                  ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/30 scale-105"
                  : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-indigo-500/30"
              }`}
            >
              {industry}
            </motion.button>
          ))}
        </motion.div>

        {/* Results */}
        <AnimatePresence mode="wait">
          {showResults && bottlenecks.length > 0 && (
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="space-y-3 sm:space-y-4"
            >
              {bottlenecks.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ scale: 1.01 }}
                  className="card-border cursor-default"
                >
                  <div className="card-inner p-4 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      <div className="text-2xl sm:text-3xl shrink-0">{item.icon}</div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-start gap-2">
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs sm:text-sm text-amber-400/80 font-medium uppercase tracking-wide">Bottleneck</p>
                            <p className="text-white font-medium text-sm sm:text-base">{item.problem}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs sm:text-sm text-cyan-400/80 font-medium uppercase tracking-wide">AI Solution</p>
                            <p className="text-gray-300 text-sm sm:text-base">{item.aiSolution}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs sm:text-sm text-green-400/80 font-medium uppercase tracking-wide">Estimated Savings</p>
                            <p className="text-green-300 font-semibold text-sm sm:text-base">{item.savings}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center pt-4 sm:pt-6"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm sm:text-base hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/30 active:scale-95"
                >
                  Get Custom Analysis For Your Business
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
