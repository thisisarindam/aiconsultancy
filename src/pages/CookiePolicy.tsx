import { motion } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookiePolicy() {
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
            <Cookie className="w-6 h-6 text-indigo-400" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-gray-400">Last updated: August 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-indigo max-w-none prose-p:text-gray-400 prose-headings:text-white prose-a:text-indigo-400"
        >
          <p>
            At MODUS, we use cookies and similar tracking technologies to enhance your experience on our website, analyze site traffic, and understand where our audience is coming from. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
          </p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate (Essential Cookies). Other cookies enable us to track and target the interests of our users to enhance the experience on our website (Analytics and Performance Cookies).
          </p>

          <h3>Essential Cookies</h3>
          <p>
            These cookies are strictly necessary to provide you with services available through our website and to use some of its features. Because these cookies are strictly necessary to deliver the website, you cannot refuse them without impacting how our site functions.
          </p>

          <h3>Analytics and Performance Cookies</h3>
          <p>
            These cookies collect information that is used either in aggregate form to help us understand how our website is being used, how effective our marketing campaigns are, or to help us customize our website for you. We may use tools like Google Analytics to evaluate site traffic and usage patterns.
          </p>

          <h2>3. Third-Party Cookies</h2>
          <p>
            In some special cases, we also use cookies provided by trusted third parties. For example, third-party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit.
          </p>

          <h2>4. Your Choices Regarding Cookies</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted. As the means by which you can refuse cookies through your web browser controls vary from browser to browser, you should visit your browser's help menu for more information.
          </p>

          <h2>5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at hello@modus.io.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
