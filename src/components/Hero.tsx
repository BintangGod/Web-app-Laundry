import { contactInfo } from "@/data/laundryData";

export default function Hero() {
  const waLink = `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(
    contactInfo.whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background Decorative Red Accents - Subtle & Modern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-light/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary-light/30 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Modern Pill Badge (Green) */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-500/10 text-emerald-600 text-xs font-semibold tracking-wider uppercase mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Antar Jemput Area Terdekat</span>
        </div>

        {/* Brand Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-none">
          <span className="block text-slate-900">Bintang</span>
          <span className="block mt-2 bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent">
            Laundry
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-600 font-medium max-w-2xl mx-auto mb-4">
          Laundry Kiloan Cepat, Bersih & Wangi
        </p>
        
        {/* Antar Jemput Accent Text */}
        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-10 flex items-center justify-center space-x-2">
          <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>Free antar jemput area sekitar Mustika Jaya</span>
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Main CTA (WhatsApp Button) */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-white bg-whatsapp hover:bg-whatsapp-hover shadow-xl shadow-whatsapp/20 hover:shadow-whatsapp/30 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            {/* WhatsApp Icon SVG */}
            <svg
              className="w-5 h-5 mr-3"
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

          {/* Secondary CTA (Price List Scroll) */}
          <a
            href="#price-list"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 hover:text-slate-900 border border-slate-200 transition-all duration-300 hover:-translate-y-1 active:translate-y-0"
          >
            Lihat Daftar Harga
          </a>

          {/* Instagram Social CTA (Small & Optional) */}
          <a
            href={contactInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-slate-500 bg-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-red-500 hover:to-purple-600 hover:text-white border border-slate-200 hover:border-transparent transition-all duration-300 hover:-translate-y-1 active:translate-y-0 shadow-sm"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
