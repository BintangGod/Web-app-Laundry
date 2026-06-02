import { unitPriceList, contactInfo } from "@/data/laundryData";

export default function UnitPriceSection() {
  // Group items by category for premium visual hierarchy
  const categories = Array.from(
    new Set(unitPriceList.map((item) => item.category))
  );

  const getWaLinkForUnit = (itemName: string) => {
    const customMessage = `Halo Bintang Laundry, saya ingin menanyakan harga cuci satuan untuk barang: ${itemName}. Apakah bisa dibantu info harganya?`;
    return `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(customMessage)}`;
  };

  const getWaLinkForActiveUnit = (itemName: string, price: number) => {
    const customMessage = `Halo Bintang Laundry, saya ingin memesan cuci satuan: ${itemName} (Rp${price.toLocaleString("id-ID")}). Apakah bisa dijemput?`;
    return `https://wa.me/${contactInfo.formattedPhone}?text=${encodeURIComponent(customMessage)}`;
  };

  return (
    <section id="harga-satuan" className="py-24 bg-slate-50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Layanan Satuan
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Daftar Harga Satuan
          </p>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-600">
            Beberapa jenis pakaian dan perlengkapan rumah tangga memerlukan perawatan khusus per item (tidak bisa kiloan) agar serat kain tetap terjaga dengan baik.
          </p>
        </div>

        {/* Categories Layout */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {categories.map((category) => {
            const items = unitPriceList.filter((item) => item.category === category);
            return (
              <div key={category} className="bg-white rounded-3xl p-8 border border-slate-100 premium-shadow">
                {/* Category Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                  <span className="w-2.5 h-6 bg-primary rounded-full mr-3" />
                  {category}
                </h3>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-slate-100/30 transition-all duration-300 group"
                    >
                      <div className="pr-4">
                        <span className="font-semibold text-slate-800 group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </span>
                      </div>

                      <div>
                        {item.isAvailable && item.price ? (
                          /* Active Price */
                          <div className="flex items-center space-x-3">
                            <div className="flex items-baseline">
                              <span className="text-lg font-extrabold text-slate-900">
                                Rp{item.price.toLocaleString("id-ID")}
                              </span>
                              <span className="text-[10px] font-semibold text-slate-400 ml-0.5">
                                /{item.unit}
                              </span>
                            </div>
                            <a
                              href={getWaLinkForActiveUnit(item.name, item.price)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-primary hover:bg-primary-hover shadow-md shadow-primary/10 transition-all duration-300"
                            >
                              Pesan
                            </a>
                          </div>
                        ) : (
                          /* Placeholder / Price inquiry */
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-medium text-slate-400 italic mr-1">
                              Hubungi WA
                            </span>
                            <a
                              href={getWaLinkForUnit(item.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border border-emerald-500/10 transition-colors duration-300"
                            >
                              {/* Minimal WhatsApp Icon */}
                              <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.003 21c-1.636 0-3.196-.407-4.577-1.127l-4.739 1.553 1.583-4.622C3.473 15.428 3 13.774 3 12.003 3 7.037 7.038 3 12.003 3s9.003 4.037 9.003 9.003c0 4.966-4.037 9.003-9.003 9.003zm4.618-5.918c-.255-.128-1.506-.743-1.74-.827-.234-.085-.404-.128-.574.128-.17.255-.658.827-.807.997-.149.17-.298.191-.553.064-.255-.128-1.077-.397-2.051-1.266-.759-.677-1.271-1.513-1.42-1.768-.149-.255-.016-.393.111-.52.115-.114.255-.298.383-.446.128-.149.17-.255.255-.425.085-.17.043-.319-.021-.446-.064-.128-.574-1.382-.787-1.892-.208-.501-.43-.432-.574-.439-.147-.008-.317-.009-.487-.009-.17 0-.446.064-.68.319-.234.255-.892.871-.892 2.125 0 1.254.913 2.463 1.04 2.633.128.17 1.797 2.744 4.354 3.847.608.262 1.082.418 1.452.536.611.194 1.168.167 1.608.101.49-.074 1.506-.616 1.718-1.21.213-.595.213-1.105.149-1.21-.064-.105-.234-.149-.49-.277z"/>
                              </svg>
                              Tanya Harga
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
