import { priceList } from "@/data/laundryData";

export default function PriceList() {
  // Simple clean icon selector based on service name
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "cuci setrika":
        return (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "setrika":
        return (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343a8 8 0 010 11.314z" />
          </svg>
        );
      case "cuci lipat":
        return (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case "cuci setrika express":
      case "express":
      case "express 24 jam":
        return (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        );
    }
  };

  return (
    <section id="price-list" className="py-24 bg-slate-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Layanan Kami
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Daftar Harga Kiloan
          </p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600">
            Pilih layanan laundry yang sesuai dengan kebutuhan Anda. Kami menjamin kebersihan dan kerapian pakaian Anda.
          </p>
        </div>

        {/* Responsive Grid Cards (Desktop balanced 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {priceList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-100/80 premium-card-shadow hover:premium-card-shadow-hover transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.name)}
                </div>

                {/* Service Name */}
                <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Price Tag Container */}
              <div className="border-t border-slate-50 pt-5 mt-auto">
                {/* Conditionally show 'Mulai Dari' for dynamic/starting prices, otherwise show whitespace to maintain perfect card heights alignment */}
                <span className="text-xs font-medium text-slate-400 block mb-1">
                  {item.isStartingPrice ? "Mulai Dari" : "\u00A0"}
                </span>
                <div className="flex items-baseline">
                  <span className="text-2xl font-extrabold text-slate-900">
                    Rp{item.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-sm font-semibold text-slate-400 ml-1">
                     /{item.unit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
