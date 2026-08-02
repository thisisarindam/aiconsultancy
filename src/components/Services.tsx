import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  MessageSquare,
  Database,
  BarChart3,
  GraduationCap,
  Cog,
} from "lucide-react";

const services = [
  {
    icon: BrainCircuit,
    title: "AI Opportunity Discovery",
    subtitle: "Bottleneck Audit & Strategy",
    description:
      "We deep-dive into your operations to identify every process that can be automated. You get a prioritized roadmap with projected time and cost savings for each opportunity.",
    highlights: ["Process Mapping", "ROI Projections", "90-Day Roadmap", "Gap Analysis"],
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: Workflow,
    title: "Custom AI Workflow Automation",
    subtitle: "End-to-End Process Automation",
    description:
      "We build tailored AI automations that connect your existing tools (CRM, email, spreadsheets, etc.) into seamless, auto-piloted workflows that run 24/7.",
    highlights: ["Zapier & Make Integration", "Custom API Connectors", "Multi-Step Logic", "Error Handling"],
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Conversational AI",
    subtitle: "Customer & Internal Support Bots",
    description:
      "Intelligent chatbots that handle customer inquiries, qualify leads, book appointments, and even assist employees with internal knowledge base queries.",
    highlights: ["24/7 Availability", "Multi-Platform", "Smart Escalation", "Analytics Dashboard"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Database,
    title: "Data Processing & Document AI",
    subtitle: "Intelligent Document Automation",
    description:
      "From invoice parsing to contract analysis, our AI extracts, categorizes, and routes data from any document — eliminating hours of manual data entry.",
    highlights: ["OCR & Text Extraction", "Auto-Categorization", "ERP Integration", "99% Accuracy"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Analytics & Reporting",
    subtitle: "Real-Time Business Intelligence",
    description:
      "Automated dashboards and AI-generated reports that give you real-time visibility into KPIs — no more Friday-afternoon spreadsheet marathons.",
    highlights: ["Custom Dashboards", "Predictive Analytics", "Auto-Report Generation", "Slack/Email Alerts"],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: GraduationCap,
    title: "Staff Training & AI Adoption",
    subtitle: "Team Enablement Program",
    description:
      "Comprehensive hands-on training so your team confidently adopts the new AI tools. We stay with you until every workflow is running smoothly.",
    highlights: ["Live Workshops", "Video Playbooks", "1-on-1 Coaching", "30-Day Support"],
    color: "from-pink-500 to-rose-600",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs sm:text-sm mb-6">
            <Cog className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">End-to-End </span>
            <span className="gradient-text">AI Automation</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From discovery to deployment to team training — we handle everything. You focus on your business while we handle the tech.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
              onTouchStart={() => setActiveService(i)}
              className={`group relative cursor-pointer transition-all duration-500 h-full ${
                activeService === i ? "scale-[1.02] z-10" : ""
              }`}
            >
              <div className="card-border h-full">
                <div className="card-inner p-4 sm:p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-indigo-400 mb-2 sm:mb-3">{service.subtitle}</p>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 flex-1">{service.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all duration-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Hover glow */}
                  <div
                    className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500 pointer-events-none`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
