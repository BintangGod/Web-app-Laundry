import { contactInfo } from "@/data/laundryData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const waLink = `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-12 border-b border-slate-800">
          {/* Left Column: Brand & Tagline */}
          <div className="space-y-4 text-center md:text-left">
            <a href="#home" className="inline-flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-white shadow-lg shadow-primary/20">
                BL
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                Bintang<span className="text-primary"> Laundry</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 max-w-sm mx-auto md:mx-0">
              Layanan laundry kiloan cepat, bersih, dan wangi dengan gratis antar jemput area sekitar Mustika Jaya, Bekasi.
            </p>
          </div>

          {/* Right Column: Social Links & Contact */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-6">
            {/* Instagram Link */}
            <a
              href={contactInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 group"
            >
              {/* Instagram Icon SVG */}
              <svg
                className="w-5 h-5 mr-2 text-slate-500 group-hover:text-primary transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              {contactInfo.instagram}
            </a>

            {/* WhatsApp CTA Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-bold text-white bg-whatsapp hover:bg-whatsapp-hover shadow-lg shadow-whatsapp/10 transition-all duration-300 hover:-translate-y-0.5"
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
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {currentYear} Bintang Laundry. All rights reserved.</p>
          <p className="flex items-center justify-center">
            Made with <span className="text-primary mx-1">♥</span> in Bekasi, Jawa Barat
          </p>
        </div>
      </div>
    </footer>
  );
}
