import { useState, useEffect } from "react";
import { contactInfo } from "@/data/laundryData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Price List", href: "#price-list" },
    { name: "Paket", href: "#paket" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  const waLink = `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 premium-shadow"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              BL
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors duration-300">
              Bintang<span className="text-primary"> Laundry</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Call to Action (WhatsApp & Instagram Buttons) */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Instagram Button */}
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl text-slate-400 hover:text-white bg-slate-50 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-red-500 hover:to-purple-600 border border-slate-200 hover:border-transparent transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              title="Ikuti kami di Instagram"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* WhatsApp Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-whatsapp hover:bg-whatsapp-hover shadow-lg shadow-whatsapp/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-whatsapp/25 active:translate-y-0"
            >
              {/* WhatsApp Icon SVG */}
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.003 21c-1.636 0-3.196-.407-4.577-1.127l-4.739 1.553 1.583-4.622C3.473 15.428 3 13.774 3 12.003 3 7.037 7.038 3 12.003 3s9.003 4.037 9.003 9.003c0 4.966-4.037 9.003-9.003 9.003zm4.618-5.918c-.255-.128-1.506-.743-1.74-.827-.234-.085-.404-.128-.574.128-.17.255-.658.827-.807.997-.149.17-.298.191-.553.064-.255-.128-1.077-.397-2.051-1.266-.759-.677-1.271-1.513-1.42-1.768-.149-.255-.016-.393.111-.52.115-.114.255-.298.383-.446.128-.149.17-.255.255-.425.085-.17.043-.319-.021-.446-.064-.128-.574-1.382-.787-1.892-.208-.501-.43-.432-.574-.439-.147-.008-.317-.009-.487-.009-.17 0-.446.064-.68.319-.234.255-.892.871-.892 2.125 0 1.254.913 2.463 1.04 2.633.128.17 1.797 2.744 4.354 3.847.608.262 1.082.418 1.452.536.611.194 1.168.167 1.608.101.49-.074 1.506-.616 1.718-1.21.213-.595.213-1.105.149-1.21-.064-.105-.234-.149-.49-.277z"
                  clipRule="evenodd"
                />
              </svg>
              Pesan via WA
            </a>
          </div>

          {/* Mobile Hamburger Menu Icon */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-500 hover:text-primary hover:bg-slate-50 focus:outline-none transition-colors duration-300"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Buka Menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 border-t border-slate-100 bg-white" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-3 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 px-4 space-y-3">
            {/* WhatsApp CTA */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-3 rounded-xl text-base font-semibold text-white bg-whatsapp hover:bg-whatsapp-hover shadow-lg shadow-whatsapp/15 transition-all duration-300"
            >
              {/* WhatsApp Icon SVG */}
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.003 21c-1.636 0-3.196-.407-4.577-1.127l-4.739 1.553 1.583-4.622C3.473 15.428 3 13.774 3 12.003 3 7.037 7.038 3 12.003 3s9.003 4.037 9.003 9.003c0 4.966-4.037 9.003-9.003 9.003zm4.618-5.918c-.255-.128-1.506-.743-1.74-.827-.234-.085-.404-.128-.574.128-.17.255-.658.827-.807.997-.149.17-.298.191-.553.064-.255-.128-1.077-.397-2.051-1.266-.759-.677-1.271-1.513-1.42-1.768-.149-.255-.016-.393.111-.52.115-.114.255-.298.383-.446.128-.149.17-.255.255-.425.085-.17.043-.319-.021-.446-.064-.128-.574-1.382-.787-1.892-.208-.501-.43-.432-.574-.439-.147-.008-.317-.009-.487-.009-.17 0-.446.064-.68.319-.234.255-.892.871-.892 2.125 0 1.254.913 2.463 1.04 2.633.128.17 1.797 2.744 4.354 3.847.608.262 1.082.418 1.452.536.611.194 1.168.167 1.608.101.49-.074 1.506-.616 1.718-1.21.213-.595.213-1.105.149-1.21-.064-.105-.234-.149-.49-.277z"
                  clipRule="evenodd"
                />
              </svg>
              Pesan Sekarang
            </a>

            {/* Instagram CTA */}
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Follow Instagram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
