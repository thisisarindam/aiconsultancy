import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, Zap, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "For small teams getting started",
    price: "₹79,999",
    period: "one-time",
    popular: false,
    features: [
      "Full Bottleneck Audit (1 department)",
      "1 Custom AI Automation Build",
      "Integration with 2 existing tools",
      "Team Training Session (up to 5 people)",
      "30-Day Post-Launch Support",
      "Video Documentation & Playbooks",
    ],
    cta: "Get Started",
    gradient: "from-gray-600 to-gray-500",
  },
  {
    name: "Professional",
    tagline: "Most popular for growing businesses",
    price: "₹1,99,999",
    period: "one-time",
    popular: true,
    features: [
      "Comprehensive Bottleneck Audit (3 departments)",
      "3 Custom AI Automation Builds",
      "AI Chatbot Implementation",
      "Integration with unlimited tools",
      "Full Team Training (unlimited staff)",
      "60-Day Post-Launch Support",
      "Monthly Performance Reviews (3 months)",
      "Priority WhatsApp Support Channel",
    ],
    cta: "Most Popular",
    gradient: "from-indigo-600 to-cyan-500",
  },
  {
    name: "Enterprise",
    tagline: "For organizations seeking full transformation",
    price: "Custom",
    period: "tailored",
    popular: false,
    features: [
      "Enterprise-Wide Bottleneck Discovery",
      "Unlimited Custom AI Automations",
      "Dedicated AI Solutions Architect",
      "Full API & ERP/CRM Integrations",
      "Custom AI Model Training",
      "Organization-Wide Training Program",
      "12-Month Ongoing Optimization",
      "24/7 Priority Support & SLA",
    ],
    cta: "Contact Sales",
    gradient: "from-violet-600 to-purple-500",
  },
];

export default function Pricing() {
  const [billingInterval, setBillingInterval] = useState<"onetime" | "maintenance">("onetime");

  return (
    <section id="pricing" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-400 text-xs sm:text-sm mb-6">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 px-2">
            <span className="text-white">A Fraction of </span>
            <span className="gradient-text">Traditional Consulting</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            One-time implementation costs — no hidden fees, no bloated retainers. Just results.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center mt-8 p-1 rounded-xl bg-white/5 border border-white/10">
            <button
              onClick={() => setBillingInterval("onetime")}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                billingInterval === "onetime"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              One-Time Build
            </button>
            <button
              onClick={() => setBillingInterval("maintenance")}
              className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                billingInterval === "maintenance"
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              + Monthly Maintenance
            </button>
          </div>
          {billingInterval === "maintenance" && (
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Add ongoing support & updates from <span className="text-indigo-400">₹7,999/month</span>
            </p>
          )}
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={plan.popular ? { scale: 1.03 } : { scale: 1.02 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4 z-10" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/30">
                    <Star className="w-3 h-3 fill-current" />
                    Best Value
                  </span>
                </div>
              )}

              <div className={`card-border h-full ${plan.popular ? "glow" : ""}`}>
                <div className="card-inner p-5 sm:p-8 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-6">{plan.tagline}</p>

                  <div className="mb-6">
                    <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                    {plan.period !== "tailored" && (
                      <span className="text-gray-500 text-xs sm:text-sm ml-1">/{plan.period}</span>
                    )}
                  </div>

                  <ul className="space-y-2.5 sm:space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.03]`
                        : "border border-white/10 text-white hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10 sm:mt-12"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-3 rounded-full border border-green-500/20 bg-green-500/5">
            <Check className="w-4 h-4 text-green-400 shrink-0" />
            <span className="text-xs sm:text-sm text-gray-300 text-left">
              <span className="text-green-400 font-semibold">100% ROI Guarantee</span> — If our automation doesn't pay for itself within 6 months, we'll make it right.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
