
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const footerLinks = {
  Services: [
    { name: "AI Opportunity Audit", href: "/#services" },
    { name: "Workflow Automation", href: "/#services" },
    { name: "AI Chatbots", href: "/#services" },
    { name: "Document AI", href: "/#services" },
    { name: "Analytics & Reporting", href: "/#services" },
    { name: "Staff Training", href: "/#services" }
  ],
  Company: [
    { name: "About Us", href: "/#about" },
    { name: "Case Studies", href: "/#demos" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Partner Program", href: "#" }
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Data Processing", href: "#" },
    { name: "Cookie Policy", href: "/cookies" }
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center mb-4 group">
              <Logo className="w-9 h-9 drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="flex flex-col ml-3">
                <span className="text-xl font-bold tracking-wider leading-none">
                  <span className="text-white">MO</span>
                  <span className="gradient-text">DUS</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-[0.1em] uppercase mt-0.5">Intelligence in operation.</span>
              </div>
            </Link>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 max-w-xs">
              Transforming businesses through intelligent AI automation. We find bottlenecks, build solutions, and train teams — all at a fraction of traditional consulting costs.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: FaLinkedin, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaYoutube, href: "#" },
                { icon: FaGithub, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300 active:scale-90"
                >
                  <social.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white text-xs sm:text-sm font-semibold mb-3 sm:mb-4">{title}</h4>
              <ul className="space-y-2 sm:space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-gray-500 text-xs sm:text-sm hover:text-gray-300 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-500 text-xs sm:text-sm hover:text-gray-300 transition-colors"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-600 text-[10px] sm:text-xs">
            &copy; {new Date().getFullYear()} MODUS. All rights reserved. Built with ❤️ for businesses ready to automate. By Arindam Maity
          </p>
          <p className="text-gray-600 text-[10px] sm:text-xs">
            Made in Kolkata, India • Serving clients worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
