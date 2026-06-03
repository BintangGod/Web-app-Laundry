# 🧺 Bintang Laundry Landing Page Template

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-Deploy-orange?style=for-the-badge&logo=cloudflare)](https://pages.cloudflare.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

Template website *single-page landing page* minimalis, modern, dan premium untuk usaha laundry. Proyek ini dibangun menggunakan **Next.js Pages Router**, **React 19**, **TypeScript**, dan **Tailwind CSS v4** dengan arsitektur berbasis data (*data-driven*) agar mudah dikustomisasi oleh pengembang lain.

Proyek ini telah dikonfigurasi menggunakan fitur **Static HTML Export** (`output: 'export'`) sehingga siap dideploy secara instan dan gratis ke berbagai platform CDN modern seperti Cloudflare Pages, Vercel, Netlify, atau GitHub Pages.

---

## ✨ Fitur Utama

- 🎨 **Desain Minimalis Premium**: Layout bersih dengan white-space lega, tipografi modern (Plus Jakarta Sans), dan transisi hover mikro yang interaktif.
- 📱 **Desain Mobile-First & Responsif**: UI dioptimalkan untuk performa maksimal di perangkat mobile, tablet, hingga desktop.
- ⚙️ **Arsitektur Berbasis Data (Data-Driven)**: Konten penting seperti daftar harga kiloan, harga satuan, paket bulanan, kontak WhatsApp, link Instagram, alamat, dan Google Maps terpusat pada satu file data (`laundryData.ts`).
- ⚡ **Kalkulasi Hemat Otomatis**: Menghitung secara dinamis selisih harga normal vs harga paket untuk menampilkan tag diskon (misal: "Hemat Rp 15.000") pada kartu paket.
- 🗺️ **Integrasi Peta Interaktif**: Peta lokasi Google Maps yang fleksibel berdampingan dengan informasi alamat lengkap dan jam operasional dinamis.
- 💬 **WhatsApp & Social Integrations**: Tombol Call-to-Action (CTA) WhatsApp yang otomatis memicu pesan pemesanan kustom beserta tombol pintasan Instagram dengan logo dan efek hover modern.
- 🔍 **SEO & Speed Optimized**: Dilengkapi tag meta SEO (title, meta description, OpenGraph) untuk menunjang visibilitas pencarian Google.

---

## 🛠️ Tech Stack

- **Core Framework:** Next.js 15+ (Pages Router)
- **Library Utama:** React 19, React DOM 19
- **Bahasa Pemrograman:** TypeScript
- **Styling Engine:** Tailwind CSS v4 (Direktif CSS Modern)
- **Tipografi:** Google Font *Plus Jakarta Sans* via Next.js Font Optimization
- **Build Mode:** Static HTML Export (`output: 'export'`)

---

## 🚀 Instalasi & Menjalankan Lokal

Bagi Anda yang ingin memasang, memodifikasi, atau berkontribusi pada repositori ini di komputer lokal, ikuti langkah di bawah ini:

### Prasyarat
Pastikan komputer Anda sudah terpasang [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru).

### Langkah Penginstalan
1. **Clone repositori ini:**
   ```bash
   git clone https://github.com/USERNAME/bintang-laundry.git
   cd bintang-laundry
   ```

2. **Instal dependensi proyek:**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan (development server):**
   ```bash
   npm run dev
   ```
   Buka browser Anda dan akses halaman [http://localhost:3000](http://localhost:3000).

4. **Kompilasi produksi (Build & Static Export):**
   ```bash
   npm run build
   ```
   Hasil build statis akan diekspor ke folder `/out`.

---

## ⚙️ Panduan Kustomisasi Data

Proyek ini sengaja dirancang agar pemula sekalipun dapat mengubah harga layanan tanpa perlu menyentuh atau membongkar struktur komponen UI React.

Semua konfigurasi konten terletak di:
👉 `src/data/laundryData.ts`

### 1. Kustomisasi Harga Kiloan
Ubah data pada array `priceList`. Format rupiah dan tata letak grid akan diperbarui secara otomatis.
```typescript
export const priceList: PriceItem[] = [
  {
    id: 1,
    name: "Cuci Setrika",
    price: 6500, // Ubah nilai angka di sini
    unit: "kg",
    description: "Layanan cuci basah, pengeringan, hingga setrika rapi dan wangi. Siap pakai!",
    isStartingPrice: false, // Set true jika ingin menampilkan label "Mulai Dari"
  },
  ...
];
```

### 2. Kustomisasi Paket Bulanan
Setiap paket menyertakan harga diskon (`price`) dan harga normal (`normalPrice`). Aplikasi akan secara otomatis menghitung selisih harga dan memunculkan badge hijau "Hemat Rp [Selisih]".
```typescript
export const packages: PackageItem[] = [
  {
    id: 1,
    name: "Paket Setrika 50 Kg",
    price: 210000,       // Harga setelah diskon paket
    normalPrice: 225000, // Harga normal tanpa paket (akan dicoret)
    unit: "50 kg",
    description: "Layanan hemat setrika kiloan bulanan khusus untuk pakaian bersih Anda.",
    isAvailable: true,   // Set false jika ingin menyembunyikan paket sementara (Coming Soon)
  },
  ...
];
```

### 3. Kustomisasi Layanan Satuan
Sangat berguna untuk item seperti sajadah, bedcover, jas, atau karpet yang dihitung per meter persegi (`m²`) atau per unit (`pcs`).
```typescript
export const unitPriceList: UnitPriceItem[] = [
  {
    id: 1,
    name: "Karpet Tebal",
    price: 20000,
    unit: "m²", // Sistem akan otomatis menampilkan "Rp 20.000/m²"
    category: "Karpet",
    isAvailable: true, // Jika set false, akan memunculkan tombol hijau "Tanya Harga via WA"
  },
  ...
];
```

---

## ☁️ Panduan Deployment ke Cloudflare Pages

Template ini 100% kompatibel dengan Cloudflare Pages gratis selamanya karena menggunakan Static HTML Export.

1. Masuk ke **[Cloudflare Dashboard](https://dash.cloudflare.com/)** Anda.
2. Navigasikan ke **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3. Pilih repositori GitHub Anda.
4. Di bagian **Build Settings**, konfigurasikan sebagai berikut:
   - **Framework Preset**: `Next.js (Static HTML Export)`
   - **Build Command**: `npm run build`
   - **Build Directory**: `out`
5. Klik **Save and Deploy**. Cloudflare akan men-build otomatis setiap kali Anda melakukan `git push` ke branch `main`.

---

## 🤝 Kontribusi

Kontribusi, laporan bug, masukan, dan saran penambahan fitur baru selalu kami sambut dengan senang hati!

1. Fork Repositori ini.
2. Buat branch fitur baru (`git checkout -b fitur/FiturKerenAnda`).
3. Commit perubahan Anda (`git commit -m 'feat: menambahkan Fitur Keren Anda'`).
4. Push ke branch tersebut (`git push origin fitur/FiturKerenAnda`).
5. Buat Pull Request baru di repositori utama.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - Lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

---

*Dikembangkan dengan penuh dedikasi untuk industri laundry digital.*
