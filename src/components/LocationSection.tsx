import { contactInfo } from "@/data/laundryData";
import ScrollReveal from "@/components/ScrollReveal";

export default function LocationSection() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    contactInfo.googleMapsEmbedQuery
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="lokasi" className="py-24 bg-bg-section scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tighter mb-4">
              Lokasi Kami
            </p>
            <div className="h-1 w-12 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-base text-text-muted max-w-xl mx-auto">
              Kami siap melayani kebutuhan cucian Anda langsung di workshop atau melalui layanan antar jemput gratis.
            </p>
          </div>
        </ScrollReveal>

        {/* Side-by-side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Address Details (5 cols) */}
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="bg-bg-card rounded-3xl p-8 border border-white/5 premium-card-shadow">
              {/* Address Title */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Alamat Lengkap</h3>
              </div>

              {/* Address Lines */}
              <div className="text-text-muted text-base leading-relaxed space-y-2 mb-8">
                <p className="font-semibold text-white">{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
                <p>{contactInfo.address.city}, {contactInfo.address.province}</p>
              </div>

              {/* Hours */}
              <div className="border-t border-white/5 pt-6 mb-8">
                <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Jam Operasional
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-text-muted">
                  <p className="font-medium">Setiap Hari</p>
                  <p className="text-right font-medium text-primary">{contactInfo.operationalHours}</p>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl text-sm font-bold text-bg bg-primary hover:bg-primary-hover shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 group"
              >
                Buka Google Maps
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          {/* Interactive Map (7 cols) */}
          <ScrollReveal direction="right" className="lg:col-span-7">
            <div className="h-[400px] w-full rounded-3xl overflow-hidden border border-white/5 premium-card-shadow">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full border-0 grayscale-[30%] contrast-[1.1]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bintang Laundry Location Map"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
