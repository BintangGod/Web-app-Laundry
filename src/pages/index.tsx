import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PriceList from "@/components/PriceList";
import UnitPriceSection from "@/components/UnitPriceSection";
import PackageSection from "@/components/PackageSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bintang Laundry | Laundry Kiloan Bekasi</title>
        <meta
          name="description"
          content="Bintang Laundry menyediakan layanan laundry kiloan cepat dan bersih dengan layanan antar jemput area sekitar Mustika Jaya Bekasi."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* SEO OpenGraph Tags (Premium standard) */}
        <meta property="og:title" content="Bintang Laundry | Laundry Kiloan Bekasi" />
        <meta
          property="og:description"
          content="Bintang Laundry menyediakan layanan laundry kiloan cepat dan bersih dengan layanan antar jemput area sekitar Mustika Jaya Bekasi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="id_ID" />
      </Head>

      <div className="relative min-h-screen flex flex-col bg-white">
        {/* Header Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <Hero />

          {/* Price List Section */}
          <PriceList />

          {/* Harga Satuan Section */}
          <UnitPriceSection />

          {/* Future Package Section */}
          <PackageSection />

          {/* Location & Map Section */}
          <LocationSection />
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
}
