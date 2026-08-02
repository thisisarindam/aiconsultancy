import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, IndianRupee, Clock, TrendingDown, ArrowRight } from "lucide-react";

// INR formatter for Indian numbering (e.g., 1,50,000)
function formatINR(amount: number): string {
  if (amount < 1000) return amount.toString();
  const numStr = Math.round(amount).toString();
  const lastThree = numStr.substring(numStr.length - 3);
  const otherNumbers = numStr.substring(0, numStr.length - 3);
  const formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return otherNumbers ? formatted + "," + lastThree : lastThree;
}

export default function ROICalculator() {
  // Indian market defaults: ₹500/hr avg, 5 employees, 15h/week saved, ₹1,50,000 one-time cost
  const [employees, setEmployees] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(500);
  const [automationCost, setAutomationCost] = useState(150000);

  const weeklySavings = useMemo(() => employees * hoursPerWeek * hourlyRate, [employees, hoursPerWeek, hourlyRate]);
  const monthlySavings = useMemo(() => weeklySavings * 4.33, [weeklySavings]);
  const annualSavings = useMemo(() => monthlySavings * 12, [monthlySavings]);
  const paybackMonths = useMemo(() => {
    if (monthlySavings <= 0) return 0;
    return automationCost / monthlySavings;
  }, [automationCost, monthlySavings]);
  const firstYearROI = useMemo(() => {
    if (automationCost <= 0) return 0;
    return ((annualSavings - automationCost) / automationCost) * 100;
  }, [annualSavings, automationCost]);

  // Touch-friendly: use native input ranges that work well on mobile
  return (
    <section id="roi-calculator" className="relative py-20 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs sm:text-sm mb-6">
            <Calculator className="w-4 h-4" />
            Interactive ROI Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Calculate Your </span>
            <span className="gradient-text">Savings</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Drag the sliders to see how much you could save with AI automation. Real numbers based on actual Indian market client deployments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Sliders */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-border h-fit"
          >
            <div className="card-inner p-5 sm:p-8 space-y-6 sm:space-y-7">
              {/* Employees */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs sm:text-sm text-gray-300 font-medium">Number of Employees</label>
                  <span className="text-sm text-indigo-400 font-bold">{employees}</span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-indigo-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-600">
                  <span>1</span>
                  <span>50</span>
                </div>
              </div>

              {/* Hours per week */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs sm:text-sm text-gray-300 font-medium">Hours Saved / Employee / Week</label>
                  <span className="text-sm text-indigo-400 font-bold">{hoursPerWeek}h</span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={40}
                  step={1}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-cyan-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-cyan-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-600">
                  <span>2h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Hourly rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs sm:text-sm text-gray-300 font-medium">Avg. Hourly Rate (₹)</label>
                  <span className="text-sm text-indigo-400 font-bold">₹{hourlyRate}</span>
                </div>
                <input
                  type="range"
                  min={200}
                  max={3000}
                  step={50}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-purple-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-600">
                  <span>₹200</span>
                  <span>₹3,000</span>
                </div>
              </div>

              {/* Automation cost */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-xs sm:text-sm text-gray-300 font-medium">One-Time Automation Cost (₹)</label>
                  <span className="text-sm text-indigo-400 font-bold">₹{formatINR(automationCost)}</span>
                </div>
                <input
                  type="range"
                  min={25000}
                  max={1000000}
                  step={10000}
                  value={automationCost}
                  onChange={(e) => setAutomationCost(Number(e.target.value))}
                  className="w-full h-2 rounded-full bg-white/10 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-green-500/40 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:active:scale-110 [&::-webkit-slider-thumb]:transition-transform"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-600">
                  <span>₹25K</span>
                  <span>₹10L</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {/* Annual Savings */}
            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-inner p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <IndianRupee className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-sm text-gray-400">Annual Savings</span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-green-400 glow-text">
                  ₹{formatINR(annualSavings)}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  ₹{formatINR(monthlySavings)}/month • ₹{formatINR(weeklySavings)}/week
                </p>
              </div>
            </motion.div>

            {/* Payback Period */}
            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-inner p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-400">Payback Period</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                  {paybackMonths < 1 ? "< 1 month" : `${paybackMonths.toFixed(1)} months`}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  After this, it's pure savings
                </p>
              </div>
            </motion.div>

            {/* First-Year ROI */}
            <motion.div
              className="card-border"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="card-inner p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className="text-sm text-gray-400">First-Year ROI</span>
                </div>
                <div className={`text-2xl sm:text-3xl font-bold ${firstYearROI >= 100 ? "text-green-400" : "text-indigo-400"}`}>
                  {firstYearROI.toFixed(0)}%
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {firstYearROI >= 500
                    ? "Exceptional return on investment!"
                    : firstYearROI >= 200
                    ? "Excellent return on investment!"
                    : "Return on your automation investment"}
                </p>
              </div>
            </motion.div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm sm:text-base hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-indigo-500/30 active:shadow-indigo-500/20"
            >
              Lock In These Savings
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
