import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="
        fixed
        top-0
        w-full
        z-50
        bg-black/50
        backdrop-blur-lg
        border-b
        border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-orange-400" aria-label="Go to homepage">
            puneet.cloud
          </a>

          <div className="hidden md:flex items-center gap-6 text-gray-300">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-orange-400">
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg border border-white/10 bg-white/5 text-gray-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3 text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="py-2 transition hover:text-orange-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
