import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    idea: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", message: "", idea: "" });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs sm:text-sm mb-6">
            <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Let's Build Something Great
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Get Your </span>
            <span className="gradient-text">Free AI Audit</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Tell us about your business and we'll identify the highest-impact automation opportunities — completely free, no obligation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-border h-fit"
          >
            <div className="card-inner p-5 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4 sm:mb-6"
                  >
                    <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-400" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400 max-w-sm mx-auto text-sm sm:text-base">
                    Your request has been received. Our team will reach out within <span className="text-white">2 business hours</span> to schedule your free AI audit.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
                  >
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm text-gray-400 mb-2">Work Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Technologies Pvt. Ltd."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                      What challenges are you facing? *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your current processes, bottlenecks, and what you'd like to automate..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                      Any idea you have in mind? (Optional)
                    </label>
                    <textarea
                      name="idea"
                      value={formData.idea}
                      onChange={handleChange}
                      rows={4}
                      placeholder="If you have any idea about what could be the possible problem or solution, let us know here..."
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-gray-600 focus:border-indigo-500/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.97 }}
                    className="group w-full py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm sm:text-base hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
                  >
                    Send Request
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-3 sm:space-y-4"
          >
            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-inner p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400" />
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base mb-1">Email Us</h4>
                <p className="text-gray-400 text-xs sm:text-sm">hello@aiqon.io</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">We respond within 2 hours</p>
              </div>
            </motion.div>

            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-inner p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base mb-1">Call Us</h4>
                <p className="text-gray-400 text-xs sm:text-sm">+91 1800 123 4567</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">Mon-Fri, 9am-6pm IST</p>
              </div>
            </motion.div>

            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-inner p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                </div>
                <h4 className="text-white font-semibold text-sm sm:text-base mb-1">Location</h4>
                <p className="text-gray-400 text-xs sm:text-sm">Bengaluru, India</p>
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1">Serving clients worldwide</p>
              </div>
            </motion.div>

            {/* Quick stat card */}
            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-inner p-4 sm:p-6 bg-gradient-to-br from-indigo-500/5 to-cyan-500/5">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">2 hrs</div>
                  <p className="text-gray-400 text-xs sm:text-sm">Average Response Time</p>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/5">
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-white">200+</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Clients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base sm:text-lg font-bold text-white">98%</div>
                    <div className="text-[10px] sm:text-xs text-gray-500">Satisfaction Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
