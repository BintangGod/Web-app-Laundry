export interface PriceItem {
  id: number;
  name: string;
  price: number;
  unit: string;
  description: string;
  isStartingPrice: boolean;
}

export interface PackageItem {
  id: number;
  name: string;
  price?: number;
  normalPrice?: number; // Harga tanpa paket (samar & dicoret)
  unit?: string;
  description: string;
  isAvailable: boolean;
}

export interface UnitPriceItem {
  id: number;
  name: string;
  price?: number;
  unit: string; // "pcs" or "m²"
  category: string;
  isAvailable: boolean;
}

export interface ContactInfo {
  phone: string;
  formattedPhone: string; // for WA link: wa.me/62...
  whatsappMessage: string;
  instagram: string;
  instagramUrl: string;
  operationalHours: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    province: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
}

export const priceList: PriceItem[] = [
  {
    id: 1,
    name: "Cuci Setrika",
    price: 6500,
    unit: "kg",
    description: "Layanan cuci basah, pengeringan, hingga setrika rapi dan wangi. Siap pakai!",
    isStartingPrice: false,
  },
  {
    id: 2,
    name: "Setrika",
    price: 4500,
    unit: "kg",
    description: "Jasa menyetrika pakaian kusut Anda menjadi super licin, rapi, dan wangi.",
    isStartingPrice: false,
  },
  {
    id: 3,
    name: "Cuci Lipat",
    price: 5000,
    unit: "kg",
    description: "Cuci bersih dan kering sempurna, dilipat rapi tanpa disetrika. Hemat & praktis.",
    isStartingPrice: false,
  },
  {
    id: 4,
    name: "Cuci Setrika Express",
    price: 10000,
    unit: "kg",
    description: "Kirim pagi sore jadi, kirim sore esok pagi jadi. Waktu pengerjaan dan harga fleksibel mengikuti permintaan customer.",
    isStartingPrice: true,
  },
];

export const packages: PackageItem[] = [
  {
    id: 1,
    name: "Paket Setrika 50 Kg",
    price: 210000,
    normalPrice: 225000,
    unit: "50 kg",
    description: "Layanan hemat setrika kiloan bulanan khusus untuk pakaian bersih Anda.",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Paket Setrika 80 Kg",
    price: 330000,
    normalPrice: 360000,
    unit: "80 kg",
    description: "Layanan setrika kiloan kapasitas besar, ideal untuk keluarga aktif.",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Paket Cuci Setrika 50 Kg",
    price: 310000,
    normalPrice: 325000,
    unit: "50 kg",
    description: "Layanan lengkap cuci basah, pengeringan, dan setrika bulanan super hemat.",
    isAvailable: true,
  },
  {
    id: 4,
    name: "Paket Cuci Setrika 80 Kg",
    price: 500000,
    normalPrice: 520000,
    unit: "80 kg",
    description: "Solusi total bulanan untuk pakaian keluarga bersih, rapi, harum, dan siap pakai.",
    isAvailable: true,
  },
];

export const unitPriceList: UnitPriceItem[] = [
  // Karpet
  {
    id: 1,
    name: "Karpet Tebal",
    price: 20000,
    unit: "m²",
    category: "Karpet",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Karpet Sedang",
    price: 17000,
    unit: "m²",
    category: "Karpet",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Karpet Tipis",
    price: 15000,
    unit: "m²",
    category: "Karpet",
    isAvailable: true,
  },
  // Sajadah
  {
    id: 4,
    name: "Sajadah Tebal",
    price: 15000,
    unit: "pcs",
    category: "Sajadah",
    isAvailable: true,
  },
  {
    id: 5,
    name: "Sajadah Sedang",
    price: 13000,
    unit: "pcs",
    category: "Sajadah",
    isAvailable: true,
  },
  {
    id: 6,
    name: "Sajadah Tipis",
    price: 10000,
    unit: "pcs",
    category: "Sajadah",
    isAvailable: true,
  },
  // Bedcover
  {
    id: 7,
    name: "Bedcover Besar (B)",
    price: 30000,
    unit: "pcs",
    category: "Bedcover",
    isAvailable: true,
  },
  {
    id: 8,
    name: "Bedcover Sedang (S)",
    price: 25000,
    unit: "pcs",
    category: "Bedcover",
    isAvailable: true,
  },
  {
    id: 9,
    name: "Bedcover Kecil (K)",
    price: 20000,
    unit: "pcs",
    category: "Bedcover",
    isAvailable: true,
  },
  // Pakaian & Tekstil
  {
    id: 10,
    name: "Jas",
    price: 17000,
    unit: "pcs",
    category: "Pakaian & Tekstil",
    isAvailable: true,
  },
  {
    id: 11,
    name: "Setelan Jas",
    price: 25000,
    unit: "pcs",
    category: "Pakaian & Tekstil",
    isAvailable: true,
  },
  {
    id: 12,
    name: "Blouse",
    price: 15000,
    unit: "pcs",
    category: "Pakaian & Tekstil",
    isAvailable: true,
  },
  {
    id: 13,
    name: "Kemeja",
    price: 15000,
    unit: "pcs",
    category: "Pakaian & Tekstil",
    isAvailable: true,
  },
  {
    id: 14,
    name: "Gamis",
    price: 17000,
    unit: "pcs",
    category: "Pakaian & Tekstil",
    isAvailable: true,
  },
];

export const contactInfo: ContactInfo = {
  phone: "08119333479",
  formattedPhone: "628119333479",
  whatsappMessage: "Halo Bintang Laundry, saya ingin memesan layanan laundry. Apakah bisa antar jemput?",
  instagram: "@bintanglaundry.btr",
  instagramUrl: "https://www.instagram.com/bintanglaundry.btr?igsh=MTZmcmNvcWNoZmJxZA==",
  operationalHours: "08.00 - 17.00 WIB (Fleksibel)",
  address: {
    line1: "Cluster Corundum Blok C2 No. 5",
    line2: "Cimuning, Mustika Jaya",
    city: "Bekasi",
    province: "Jawa Barat",
  },
  googleMapsUrl: "https://maps.app.goo.gl/6vK6ZBzACq612nZFA",
  googleMapsEmbedQuery: "Cluster Corundum Blok C2 No. 5, Cimuning, Mustika Jaya, Bekasi, Jawa Barat",
};
