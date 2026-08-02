import { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Wrench, Play, Users, Rocket, ChevronDown } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery & Audit",
    description:
      "We analyze your current operations, interview key stakeholders, and map every process. Within 5 business days, you receive a comprehensive bottleneck report with prioritized AI opportunities.",
    deliverables: ["Process Flow Maps", "Bottleneck Report", "ROI Projections", "Prioritized Roadmap"],
    duration: "5 Business Days",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Solution Design",
    description:
      "Our AI architects design the automation blueprint — selecting the right tools, models, and integrations. You approve the plan before a single line of code is written.",
    deliverables: ["Technical Blueprint", "Tool Selection Matrix", "Integration Plan", "Timeline & Budget"],
    duration: "3-5 Business Days",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Build & Implementation",
    description:
      "We build, test, and deploy your custom AI automation. You get access to a staging environment to see it in action before going live. Iterations are fast and transparent.",
    deliverables: ["Working Automation", "Staging Access", "Testing Reports", "Documentation"],
    duration: "2-4 Weeks",
  },
  {
    icon: Play,
    number: "04",
    title: "Live Demo & Handover",
    description:
      "We walk your team through a live demo of every automation, explaining how it works and what changes. You see exactly how time and money are saved in real scenarios.",
    deliverables: ["Live Walkthrough", "Video Recording", "User Guides", "QA Session"],
    duration: "1-2 Days",
  },
  {
    icon: Users,
    number: "05",
    title: "Team Training & Adoption",
    description:
      "Hands-on workshops for your staff — from basic users to power users. We create custom playbooks and provide 1-on-1 sessions until every team member is confident using the new tools.",
    deliverables: ["Training Workshops", "Video Playbooks", "Role-Specific Guides", "Certification"],
    duration: "1-2 Weeks",
  },
  {
    icon: Rocket,
    number: "06",
    title: "Ongoing Optimization",
    description:
      "We monitor performance for 30 days post-launch, fine-tune as needed, and provide you with a maintenance plan. Optional retainers available for continuous improvements.",
    deliverables: ["30-Day Monitoring", "Performance Reports", "Optimization Tweaks", "Maintenance Plan"],
    duration: "30 Days (Included)",
  },
];

export default function Process() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-xs sm:text-sm mb-6">
            <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Our Proven Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">How We </span>
            <span className="gradient-text">Transform</span>
            <span className="text-white"> Your Business</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A battle-tested 6-step methodology that takes you from bottleneck to breakthrough — with complete transparency at every stage.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - desktop only */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent hidden md:block" />
          {/* Mobile vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent md:hidden" />

          <div className="space-y-3 sm:space-y-4">
            {steps.map((step, i) => {
              const isExpanded = expandedStep === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"}`}
                >
                  {/* Dot on timeline */}
                  <div
                    className={`absolute top-5 sm:top-6 w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] rounded-full border-2 z-10 transition-all duration-300 ${
                      isExpanded
                        ? "bg-indigo-500 border-indigo-400 shadow-lg shadow-indigo-500/50"
                        : "bg-gray-800 border-gray-600"
                    } ${i % 2 === 0 ? "md:right-[-6px] sm:md:right-[-7px]" : "md:left-[-6px] sm:md:left-[-7px]"} left-[17px] sm:left-[20px] md:left-auto`}
                  />

                  {/* Card */}
                  <div className="ml-12 sm:ml-14 md:ml-0">
                    <motion.div
                      onClick={() => setExpandedStep(isExpanded ? null : i)}
                      className="card-border cursor-pointer group"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="card-inner p-4 sm:p-6">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/10 items-center justify-center shrink-0">
                              <step.icon className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                              <div className="text-[10px] sm:text-xs text-indigo-400 font-mono mb-1">{step.number}</div>
                              <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                                {step.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px] sm:text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">
                                  {step.duration}
                                </span>
                              </div>
                            </div>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-transform duration-300 shrink-0 mt-1 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Expanded content */}
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-white/5"
                          >
                            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">{step.description}</p>
                            <div>
                              <p className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wide mb-2">Deliverables</p>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {step.deliverables.map((d) => (
                                  <span
                                    key={d}
                                    className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
