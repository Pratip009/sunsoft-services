import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm py-2 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-y-2">
          {/* Left Group: Email & Phone */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-white/90" />
              <a
                href="mailto:info@sunsoft.com"
                className="hover:underline hover:text-white font-medium transition"
              >
                info@sunsoft.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white/90" />
              <a
                href="tel:+1234567890"
                className="hover:underline hover:text-white font-medium transition"
              >
                +1 234 567 890
              </a>
            </div>
          </div>

          {/* Right Group: Location & Sitemap */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white/90" />
              <span className="font-medium">New Jersey, USA</span>
            </div>
            <div className="flex items-center gap-1 group">
              <Link
                to="/sitemap"
                className="hover:underline hover:text-white font-semibold transition flex items-center gap-1"
              >
                Sitemap
                <ExternalLink
                  size={14}
                  className="opacity-80 group-hover:opacity-100 transition"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="fixed top-8 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text tracking-widest"
          >
            SUNSOFT
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/services" label="Services" />
            <NavItem to="/solution" label="Solution" />
            <NavItem to="/career" label="Career" />
            <NavItem to="/contact" label="Contact" />
            <Link
              to="/contact"
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full text-sm font-semibold hover:scale-105 transition"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden bg-white/90 backdrop-blur-lg transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-[300px] p-4 opacity-100"
              : "max-h-0 p-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <MobileNavItem to="/" label="Home" />
            <MobileNavItem to="/about" label="About" />
            <MobileNavItem to="/services" label="Services" />
            <MobileNavItem to="/solution" label="Solution" />
            <MobileNavItem to="/career" label="Career" />
            <MobileNavItem to="/contact" label="Contact" />
          </div>
        </div>
      </nav>
    </>
  );
}

function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="relative text-gray-700 hover:text-indigo-600 text-base font-medium transition duration-300 group"
    >
      {label}
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
}

function MobileNavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="text-gray-700 text-lg font-medium hover:text-indigo-600 transition"
      onClick={() => window.scrollTo(0, 0)}
    >
      {label}
    </Link>
  );
}
