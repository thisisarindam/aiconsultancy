import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 mb-6">
            <FileText className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: August 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-indigo max-w-none prose-p:text-gray-400 prose-headings:text-white prose-a:text-indigo-400"
        >
          <p>
            Welcome to MODUS. By accessing our website or utilizing our AI automation consulting services, you agree to be bound by these Terms of Service. Please read them carefully.
          </p>

          <h2>1. Services Description</h2>
          <p>
            MODUS provides business consulting, AI automation audits, and custom software integration services. We specialize in identifying operational bottlenecks and deploying artificial intelligence technologies to streamline business workflows.
          </p>

          <h2>2. Use of AI Technologies</h2>
          <p>
            Our services often involve the integration of third-party Artificial Intelligence (AI) models, including Large Language Models (LLMs) and computer vision systems. By engaging our services, you acknowledge that:
          </p>
          <ul>
            <li>AI-generated outputs are probabilistic and may occasionally produce inaccurate, incomplete, or biased information (often referred to as "hallucinations").</li>
            <li>You remain entirely responsible for reviewing, validating, and approving any AI-generated actions or content before they impact your clients, financial systems, or legal obligations.</li>
            <li>MODUS is not liable for indirect damages, loss of profits, or business interruptions arising from the autonomous actions of deployed AI systems.</li>
          </ul>

          <h2>3. Intellectual Property Rights</h2>
          <p>
            Unless explicitly stated in a custom Master Services Agreement (MSA), MODUS retains all intellectual property rights to the proprietary frameworks, boilerplate code, and automation architectures developed during our engagement. You are granted a non-exclusive, non-transferable license to use the customized workflows for your internal business operations. You retain full ownership of your proprietary business data and the specific prompts/fine-tuning datasets provided to us.
          </p>

          <h2>4. Client Responsibilities</h2>
          <p>
            To ensure successful project delivery, you agree to provide timely access to necessary business data, API keys, and staff interviews. Delays in providing this information may result in adjusted project timelines. You are also responsible for ensuring that your use of our deployed AI systems complies with all applicable local and international laws, including data protection regulations.
          </p>

          <h2>5. Third-Party Services and APIs</h2>
          <p>
            Our solutions may rely on third-party APIs (e.g., OpenAI, Anthropic, Zapier, Make). MODUS is not responsible for changes in pricing, service outages, or deprecations made by these third-party providers. You are responsible for maintaining your own billing accounts with these providers unless managed services are explicitly agreed upon.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MODUS shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or any AI systems deployed by us. Our total liability in any matter arising out of or related to these Terms is limited to the amount you paid us for the specific service giving rise to the claim.
          </p>

          <h2>7. Return on Investment (ROI) Guarantee</h2>
          <p>
            Our ROI Guarantee applies solely to specific deployment contracts where explicitly stated in writing. It requires full client cooperation, proper usage of the deployed systems, and accurate baseline measurements provided during the audit phase.
          </p>

          <h2>8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Kolkata, West Bengal.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions regarding these Terms, please contact us at: hello@modus.io
          </p>
        </motion.div>
      </div>
    </div>
  );
}
