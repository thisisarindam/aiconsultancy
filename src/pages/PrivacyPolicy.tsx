import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Shield className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: August 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-indigo max-w-none prose-p:text-gray-400 prose-headings:text-white prose-a:text-indigo-400"
        >
          <p>
            At MODUS ("we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of the personal information and business data you share with us. This Privacy Policy outlines our practices regarding the collection, use, disclosure, and protection of your data when you visit our website or engage our AI automation consulting services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you interact with MODUS, we may collect various types of information, including:
          </p>
          <ul>
            <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and company details provided via contact forms or communication.</li>
            <li><strong>Business & Technical Data:</strong> Information regarding your business processes, existing software infrastructure, and workflow bottlenecks necessary to provide our AI auditing and automation services.</li>
            <li><strong>Usage Data:</strong> Automatically collected information such as IP addresses, browser type, device information, and interactions with our website via analytics tools.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To provide, operate, and maintain our AI automation services.</li>
            <li>To communicate with you regarding project proposals, updates, and customer support.</li>
            <li>To analyze and improve our website performance, marketing efforts, and user experience.</li>
            <li>To comply with legal obligations and enforce our terms of service.</li>
          </ul>

          <h2>3. Data Security & AI Processing</h2>
          <p>
            Given the nature of our business, data security is our highest priority. When we deploy custom AI solutions or integrate third-party APIs (such as OpenAI, Anthropic, or local LLMs) into your business workflows, we ensure that:
          </p>
          <ul>
            <li>No proprietary client data is used by foundational models for public training without explicit zero-data-retention agreements.</li>
            <li>All data in transit and at rest is encrypted using industry-standard protocols.</li>
            <li>Access to your business data is strictly restricted to authorized personnel involved in your project.</li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>
            We do not sell, trade, or rent your personal identification information. We may share information with trusted third-party service providers (such as cloud hosting and analytics platforms) who assist us in operating our business, under strict confidentiality agreements.
          </p>

          <h2>5. Your Data Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal data. To exercise these rights, please contact us using the information provided below.
          </p>

          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. We will notify you of any material changes by posting the updated policy on this page with a revised "Last updated" date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data handling practices, please contact us at: <br/>
            <strong>Email:</strong> hello@modus.io <br/>
            <strong>Location:</strong> Bengaluru, India
          </p>
        </motion.div>
      </div>
    </div>
  );
}
