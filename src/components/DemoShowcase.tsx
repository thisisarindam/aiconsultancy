import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const demos = [
  {
    title: "AI Invoice Processing Pipeline",
    description:
      "Watch how our AI automatically extracts data from invoices, matches them to POs, routes for approval, and syncs with your accounting software — all without human touch.",
    tags: ["Document AI", "ERP Integration", "Auto-Approval"],
    gradient: "from-indigo-600 to-purple-600",
  },
  {
    title: "Customer Support Chatbot Suite",
    description:
      "See our multi-platform AI chatbot handle 50+ concurrent customer inquiries, answer from your knowledge base, escalate complex issues, and book meetings — 24/7.",
    tags: ["NLP", "Multi-Platform", "Smart Routing"],
    gradient: "from-cyan-600 to-blue-600",
  },
  {
    title: "Lead Generation & Nurture Automation",
    description:
      "A complete demo of AI-driven lead capture, scoring, personalized outreach sequences, and CRM sync — turning cold prospects into warm leads on autopilot.",
    tags: ["Lead Scoring", "Email AI", "CRM Sync"],
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    title: "HR Onboarding Workflow Automation",
    description:
      "From offer letter generation to IT account provisioning and training schedule creation — experience end-to-end employee onboarding automated in minutes, not days.",
    tags: ["Doc Gen", "Task Automation", "HRIS Sync"],
    gradient: "from-violet-600 to-fuchsia-600",
  },
];

export default function DemoShowcase() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const demo = demos[activeDemo];

  const handlePlay = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      setProgress(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 0.5;
        });
      }, 50);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  // Reset when switching demos
  useEffect(() => {
    setIsPlaying(false);
    setProgress(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, [activeDemo]);

  const nextDemo = () => setActiveDemo((prev) => (prev + 1) % demos.length);
  const prevDemo = () => setActiveDemo((prev) => (prev - 1 + demos.length) % demos.length);

  return (
    <section id="demos" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs sm:text-sm mb-6">
            <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Interactive Demo Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">See AI Automation </span>
            <span className="gradient-text">In Action</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Experience our automations firsthand. Each demo simulates a real deployment — tap play to see the magic happen.
          </p>
        </motion.div>

        {/* Main demo viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-border mb-6 sm:mb-8"
        >
          <div className="card-inner overflow-hidden">
            {/* Simulated screen */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
              {/* Animated background grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />

              {/* Demo content simulation */}
              <div className="relative z-10 text-center px-4 sm:px-8">
                <motion.div
                  className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${demo.gradient} flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg`}
                  animate={isPlaying ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{demo.title}</h3>
                <p className="text-gray-400 text-xs sm:text-base max-w-lg mx-auto hidden sm:block">{demo.description}</p>

                {/* Simulated progress */}
                {isPlaying && (
                  <div className="mt-4 sm:mt-6 max-w-md mx-auto">
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${demo.gradient}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] sm:text-xs text-gray-500">
                      <span>Processing...</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                  </div>
                )}

                {/* Simulated log output when playing */}
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 sm:mt-4 space-y-1 text-left max-w-md mx-auto hidden sm:block"
                  >
                    {progress > 10 && (
                      <p className="text-xs text-green-400 font-mono">
                        ✓ Connected to API endpoint...
                      </p>
                    )}
                    {progress > 30 && (
                      <p className="text-xs text-green-400 font-mono">
                        ✓ Data extraction complete (247 records)...
                      </p>
                    )}
                    {progress > 55 && (
                      <p className="text-xs text-green-400 font-mono">
                        ✓ AI processing & classification done...
                      </p>
                    )}
                    {progress > 75 && (
                      <p className="text-xs text-green-400 font-mono">
                        ✓ Syncing with external systems...
                      </p>
                    )}
                    {progress >= 100 && (
                      <p className="text-xs text-cyan-400 font-mono font-semibold">
                        ✓ Automation complete! Time saved: 4.2 hours
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Mobile log */}
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 sm:hidden text-center"
                  >
                    {progress >= 100 ? (
                      <p className="text-xs text-cyan-400 font-mono font-semibold">
                        ✓ Complete! Time saved: 4.2 hrs
                      </p>
                    ) : (
                      <p className="text-xs text-green-400 font-mono">
                        ✓ Processing... {Math.round(progress)}%
                      </p>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Play button overlay */}
              {!isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors group"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform">
                    <Play className="w-5 h-5 sm:w-7 sm:h-7 text-white ml-0.5 sm:ml-1" />
                  </div>
                </button>
              )}

              {/* Pause indicator */}
              {isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 active:scale-90 transition"
                >
                  <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </button>
              )}
            </div>

            {/* Bottom bar */}
            <div className="p-3 sm:p-4 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
              <div>
                <h4 className="text-white font-medium text-xs sm:text-sm">{demo.title}</h4>
                <div className="flex gap-1.5 sm:gap-2 mt-1">
                  {demo.tags.map((tag) => (
                    <span key={tag} className="text-[10px] sm:text-xs text-gray-500 bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={prevDemo}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                </button>
                <span className="text-[10px] sm:text-xs text-gray-500 min-w-[28px] text-center">
                  {activeDemo + 1}/{demos.length}
                </span>
                <button
                  onClick={nextDemo}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 transition"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {demos.map((d, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveDemo(i)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className={`text-left p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                activeDemo === i
                  ? "bg-indigo-500/10 border border-indigo-500/40 ring-1 ring-indigo-500/20"
                  : "bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
              }`}
            >
              <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br ${d.gradient} flex items-center justify-center mb-2`}>
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
              <p className="text-[11px] sm:text-xs text-white font-medium leading-tight line-clamp-2">{d.title.split(":")[0]}</p>
              <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1">{d.tags.length} features</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
