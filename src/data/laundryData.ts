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
    price: 7500,
    unit: "kg",
    description: "Layanan cuci basah, pengeringan, hingga setrika rapi dan wangi. Siap pakai!",
    isStartingPrice: false,
  },
  {
    id: 2,
    name: "Setrika",
    price: 5500,
    unit: "kg",
    description: "Jasa menyetrika pakaian kusut Anda menjadi super licin, rapi, dan wangi.",
    isStartingPrice: false,
  },
  {
    id: 3,
    name: "Cuci Lipat",
    price: 6000,
    unit: "kg",
    description: "Cuci bersih dan kering sempurna, dilipat rapi tanpa disetrika. Hemat & praktis.",
    isStartingPrice: false,
  },
  {
    id: 4,
    name: "Cuci Setrika Express",
    price: 11000,
    unit: "kg",
    description: "Cuci setrika express lebih cepat dibanding cuci biasa.",
    isStartingPrice: false,
  },
];

export const packages: PackageItem[] = [
  {
    id: 1,
    name: "Paket Setrika 50 Kg",
    price: 250000,
    normalPrice: 275000, // 5500 x 50
    unit: "50 kg",
    description: "Layanan hemat setrika kiloan. Berlaku hingga jatah kiloan habis.",
    isAvailable: true,
  },
  {
    id: 2,
    name: "Paket Setrika 80 Kg",
    price: 400000,
    normalPrice: 440000, // 5500 x 80
    unit: "80 kg",
    description: "Layanan setrika kiloan kapasitas besar, ideal untuk keluarga aktif. Berlaku hingga jatah kiloan habis.",
    isAvailable: true,
  },
  {
    id: 3,
    name: "Paket Cuci Setrika 80 Kg",
    price: 560000,
    normalPrice: 600000, // 7500 x 80
    unit: "80 kg",
    description: "Solusi total untuk pakaian keluarga bersih, rapi, harum, dan siap pakai. Berlaku hingga jatah kiloan habis.",
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
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "081234567890",
  formattedPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE_WA || "6281234567890",
  whatsappMessage: process.env.NEXT_PUBLIC_WA_MESSAGE || "Halo Bintang Laundry, saya ingin memesan layanan laundry. Apakah bisa antar jemput?",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_USERNAME || "@laundry_username",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/laundry_username",
  operationalHours: "08.00 - 16.00 WIB (Fleksibel)",
  address: {
    line1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 || "Cluster [Nama Cluster] Blok [No]",
    line2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 || "Cimuning, Mustika Jaya",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Bekasi",
    province: process.env.NEXT_PUBLIC_ADDRESS_PROVINCE || "Jawa Barat",
  },
  googleMapsUrl: process.env.NEXT_PUBLIC_MAPS_URL || "https://maps.google.com",
  googleMapsEmbedQuery: process.env.NEXT_PUBLIC_MAPS_QUERY || "Bekasi, Jawa Barat",
};
