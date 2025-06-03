import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 text-white pt-14 pb-6 mt-10 font-saira overflow-hidden">
      {/* World Map Background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 opacity-10 bg-center bg-no-repeat bg-[length:900px_auto] md:bg-[length:1200px_auto]"
        style={{ backgroundImage: "url('/world-map.png')" }}
      ></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left border-b border-white/10 pb-10">
        {/* Brand Info */}
        <div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text tracking-widest">
            SUNSOFT
          </h3>
          <p className="text-white/70 text-sm mt-2">
            Empowering businesses through custom tech solutions, outsourcing,
            and innovation.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Solutions", path: "/solutions" },

              { name: "Career", path: "/career" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.path}
                  className="inline-flex items-center gap-2 transition-all duration-300 hover:text-blue-400 group"
                >
                  <span>{link.name}</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info with Icons */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              H.no. 18-2-111/1, Falaknuma Railway Station Road Falaknuma,
              Hyderabad, Telangana - 500053 INDIA
            </li>

            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-blue-400" />
              09160517251
            </li>
            <li className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-blue-400" />
              info@sunsoftservices.com
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-white text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center text-xs text-white/60 pt-5">
        &copy; {new Date().getFullYear()} Sunsoft Services Inc. All rights
        reserved.
      </div>
    </footer>
  );
}
