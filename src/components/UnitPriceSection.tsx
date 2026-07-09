import { unitPriceList, contactInfo } from "@/data/laundryData";
import ScrollReveal from "@/components/ScrollReveal";

export default function UnitPriceSection() {
  const categories = Array.from(
    new Set(unitPriceList.map((item) => item.category))
  );

  const getWaLinkForActiveUnit = (itemName: string, price: number) => {
    const customMessage = `Halo Bintang Laundry, saya ingin memesan cuci satuan: ${itemName} (Rp${price.toLocaleString("id-ID")}). Apakah bisa dijemput?`;
    return `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(customMessage)}`;
  };

  return (
    <section id="harga-satuan" className="py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-4">
              Harga Satuan
            </p>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-base text-text-muted max-w-xl mx-auto">
              Beberapa jenis pakaian dan perlengkapan rumah tangga memerlukan perawatan khusus per item agar serat kain tetap terjaga.
            </p>
          </div>
        </ScrollReveal>

        {/* Categories Layout */}
        <div className="space-y-10 max-w-5xl mx-auto">
          {categories.map((category, catIndex) => {
            const items = unitPriceList.filter((item) => item.category === category);
            return (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div className="bg-bg-card rounded-3xl p-8 border border-white/5 premium-card-shadow">
                  {/* Category Title */}
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                    <span className="w-2.5 h-6 bg-primary rounded-full mr-3" />
                    {category}
                  </h3>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.03] hover:bg-white/[0.05] hover:border-primary/10 transition-all duration-300 group"
                      >
                        <div className="pr-4">
                          <span className="font-semibold text-text group-hover:text-primary transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>

                        <div>
                          {item.isAvailable && item.price ? (
                            <div className="flex items-center space-x-3">
                              <div className="flex items-baseline">
                                <span className="text-lg font-extrabold text-white">
                                  Rp{item.price.toLocaleString("id-ID")}
                                </span>
                                <span className="text-[10px] font-semibold text-text-dim ml-0.5">
                                  /{item.unit}
                                </span>
                              </div>
                              <a
                                href={getWaLinkForActiveUnit(item.name, item.price)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1.5 rounded-lg text-xs font-semibold text-bg bg-primary hover:bg-primary-hover shadow-md shadow-primary/10 transition-all duration-300"
                              >
                                Pesan
                              </a>
                            </div>
                          ) : (
                            <span className="text-xs font-medium text-text-dim italic">
                              Hubungi WA
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
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
