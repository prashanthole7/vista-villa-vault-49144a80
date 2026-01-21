import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";

export function BharatwiseHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 h-14 md:h-16 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg shadow-black/10"
    >
      <nav
        aria-label="Main navigation"
        className="container h-full flex items-center justify-between px-4 md:px-6"
      >
        {/* Logo + Brand Link */}
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-opacity hover:opacity-90"
        >
          <img
            src={logo}
            alt="Bharatwise logo"
            className="h-8 w-8 md:h-10 md:w-10 rounded-md"
          />
          <span className="text-lg md:text-xl font-semibold text-white tracking-wide drop-shadow-sm">
            Bharatwise
          </span>
        </Link>

        {/* Mobile Menu Button (placeholder for future navigation) */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </nav>
    </header>
  );
}
