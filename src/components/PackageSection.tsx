import { packages, contactInfo } from "@/data/laundryData";

export default function PackageSection() {
  const getWaLinkForPackage = (packageName: string) => {
    const customMessage = `Halo Bintang Laundry, saya tertarik untuk memesan paket: ${packageName}. Apakah masih tersedia?`;
    return `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(customMessage)}`;
  };

  return (
    <section id="paket" className="py-24 bg-white scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Pilihan Paket
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Paket Laundry Hemat
          </p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600">
            Dapatkan harga lebih hemat dan pelayanan prioritas dengan berlangganan paket laundry bulanan kami.
          </p>
        </div>

        {/* Dynamic Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => {
            if (pkg.isAvailable) {
              // Active Package Layout (Future-proof)
              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-3xl p-8 border-2 border-primary premium-card-shadow relative overflow-hidden flex flex-col justify-between"
                >
                  {/* Decorative corner tag for active premium package */}
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl">
                    Populer
                  </div>

                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-50 pt-6 mt-6">
                    <div className="mb-6">
                      {pkg.normalPrice && (
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm text-slate-400 line-through">
                            Rp{pkg.normalPrice.toLocaleString("id-ID")}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                            Hemat Rp{(pkg.normalPrice - (pkg.price || 0)).toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline">
                        <span className="text-3xl font-extrabold text-slate-900">
                          Rp{(pkg.price || 0).toLocaleString("id-ID")}
                        </span>
                        {pkg.unit && (
                          <span className="text-sm font-semibold text-slate-400 ml-1">
                            /{pkg.unit}
                          </span>
                        )}
                      </div>
                    </div>

                    <a
                      href={getWaLinkForPackage(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl text-sm font-bold text-white bg-primary hover:bg-primary-hover shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                    >
                      Pesan Paket Sekarang
                    </a>
                  </div>
                </div>
              );
            } else {
              // Placeholder Layout (Current status)
              return (
                <div
                  key={pkg.id}
                  className="bg-slate-50/50 rounded-3xl p-8 border border-dashed border-slate-200 premium-shadow relative overflow-hidden flex flex-col justify-between min-h-[250px]"
                >
                  {/* "Coming Soon" Badge */}
                  <div className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
                    <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Segera Hadir
                  </div>

                  <div>
                    {/* Header */}
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>

                    <h3 className="text-xl font-bold text-slate-400 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100/50 pt-5 mt-auto flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-400 italic">
                      Harga akan diumumkan
                    </span>
                    
                    <span className="text-xs font-medium text-slate-400">
                      Stay tuned!
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
