import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we see results from AI automation?",
    answer:
      "Most clients see measurable results within 2-4 weeks of deployment. Our bottleneck audit is delivered in 5 business days, and the first automation build typically takes 2-4 weeks depending on complexity. Some simpler automations can go live in as little as one week.",
  },
  {
    question: "Do we need technical expertise on our team to use the automations?",
    answer:
      "Not at all! That's exactly why we include comprehensive team training in every engagement. We design all automations with user-friendly interfaces, and our training ensures every team member — from beginners to power users — can confidently operate the tools. Plus, we provide video playbooks for future reference.",
  },
  {
    question: "What if the automation breaks or something changes in our process?",
    answer:
      "Every engagement includes at least 30 days of post-launch support (60 days for Professional plan). If anything needs adjustment, we fix it promptly. For ongoing peace of mind, you can add our monthly maintenance plan at ₹7,999/month, which covers updates, tweaks, and priority support.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "Security is built into our DNA. We use enterprise-grade encryption, follow SOC 2 best practices, and can deploy within your existing cloud infrastructure (AWS, Azure, GCP). We sign NDAs as standard practice, and we never store your data beyond what's required for the automation to function. All API keys and credentials are managed through secure vaults.",
  },
  {
    question: "What tools and platforms do you work with?",
    answer:
      "We're platform-agnostic and integrate with virtually anything that has an API. Common platforms include Salesforce, HubSpot, Slack, Microsoft Teams, Google Workspace, Office 365, QuickBooks, Xero, Shopify, WooCommerce, Zendesk, Jira, Asana, Monday.com, Tally, Zoho, and hundreds more. We also build custom API connectors when needed.",
  },
  {
    question: "Is there a guarantee on your work?",
    answer:
      "Absolutely. We offer a 100% ROI guarantee: if our automation doesn't pay for itself within 6 months of deployment, we'll work with you at no additional cost until it does — or refund the difference. We're that confident in our work. Our average client sees a 5-10x return within the first year.",
  },
  {
    question: "How is AIQON different from hiring a traditional consultant?",
    answer:
      "Traditional consultants charge ₹5,000-15,000/hour for analysis alone and often deliver slide decks without implementation. We charge a one-time project fee that includes discovery, building, deployment, AND training — all at roughly 40-60% less than a traditional consulting engagement. Plus, you get working automation, not just recommendations.",
  },
  {
    question: "Can you work with our existing IT team?",
    answer:
      "We prefer it! We're designed to complement your existing team, not replace them. We handle the AI/automation heavy lifting while working closely with your IT staff to ensure everything integrates seamlessly with your existing infrastructure and security policies.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs sm:text-sm mb-6">
            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Frequently </span>
            <span className="gradient-text">Asked Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div
                  className={`card-border cursor-pointer transition-all duration-300 ${
                    isOpen ? "glow" : ""
                  }`}
                >
                  <div
                    className="card-inner p-4 sm:p-6"
                    onClick={() => toggle(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && toggle(i)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-white font-medium text-sm sm:text-base pr-6">{faq.question}</h3>
                      <div
                        className={`shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-indigo-600 text-white"
                            : "bg-white/5 text-gray-400"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        )}
                      </div>
                    </div>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5 text-gray-400 leading-relaxed text-xs sm:text-sm">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8"
        >
          Still have questions?{" "}
          <a href="#contact" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
            Reach out to our team
          </a>{" "}
          — we respond within 2 hours.
        </motion.p>
      </div>
    </section>
  );
}
