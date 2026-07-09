import { packages, contactInfo } from "@/data/laundryData";
import ScrollReveal from "@/components/ScrollReveal";

export default function PackageSection() {
  const getWaLinkForPackage = (packageName: string) => {
    const customMessage = `Halo Bintang Laundry, saya tertarik untuk memesan paket: ${packageName}. Apakah masih tersedia?`;
    return `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(customMessage)}`;
  };

  return (
    <section id="paket" className="py-24 bg-bg-section scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-4">
              Paket Hemat
            </p>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-base text-text-muted max-w-xl mx-auto">
              Dapatkan harga lebih hemat dengan paket laundry kami. Berlaku hingga jatah kiloan habis, tanpa batasan waktu.
            </p>
          </div>
        </ScrollReveal>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            if (!pkg.isAvailable) return null;
            return (
              <ScrollReveal key={pkg.id} delay={index * 0.1}>
                <div className="bg-bg-card rounded-3xl p-8 border border-primary/20 premium-card-shadow hover:premium-card-shadow-hover transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col justify-between h-full group">
                  {/* Decorative corner tag */}
                  <div className="absolute top-0 right-0 bg-primary text-bg text-[10px] font-bold uppercase tracking-wider py-1.5 px-4 rounded-bl-xl">
                    Hemat
                  </div>

                  {/* Subtle ambient glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="relative">
                    <h3 className="text-xl font-extrabold text-white mb-2 pr-16">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-text-muted mb-6 leading-relaxed">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="relative border-t border-white/5 pt-6 mt-6">
                    <div className="mb-6">
                      {pkg.normalPrice && (
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm text-text-dim line-through opacity-50">
                            Rp{pkg.normalPrice.toLocaleString("id-ID")}
                          </span>
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded-md">
                            Hemat Rp{(pkg.normalPrice - (pkg.price || 0)).toLocaleString("id-ID")}
                          </span>
                        </div>
                      )}
                      <div className="flex items-baseline">
                        <span className="text-3xl font-extrabold text-white">
                          Rp{(pkg.price || 0).toLocaleString("id-ID")}
                        </span>
                        {pkg.unit && (
                          <span className="text-sm font-semibold text-text-dim ml-1">
                            /{pkg.unit}
                          </span>
                        )}
                      </div>
                    </div>

                    <a
                      href={getWaLinkForPackage(pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center py-3 px-6 rounded-xl text-sm font-bold text-bg bg-primary hover:bg-primary-hover shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
                    >
                      Pesan Paket Sekarang
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
