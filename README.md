# 🌟 Bintang Laundry Landing Page

Website landing page single-page yang minimalis, modern, dan premium untuk usaha **Bintang Laundry**. Website ini dibangun dengan fokus pada performa maksimal, whitespace yang lega, Call-to-Action (CTA) terpusat, dan rancangan kode yang modular agar mudah dikembangkan di masa mendatang.

---

## 🛠️ Tech Stack & Fitur

- **Next.js (Pages Router) & React 19**
- **TypeScript** (Strongly Typed & Scalable)
- **Tailwind CSS v4** (Utility-first CSS modern)
- **Plus Jakarta Sans** (Google Fonts via Next.js Font Optimization)
- **Smooth Scroll Navigation** & Hamburger Menu untuk tampilan Mobile
- **Static HTML Export** (Mulus & gratis 100% saat dideploy ke Cloudflare Pages)
- **SEO Ready** (Title, Meta Description, & OpenGraph terpasang)

---

## 📂 Struktur Folder Proyek

```
/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navigasi atas yang responsif & backdrop-blur
│   │   ├── Hero.tsx               # Section 1 - Banner utama dengan tombol CTA WhatsApp
│   │   ├── PriceList.tsx          # Section 2 - Daftar harga kiloan (Cuci & Setrika)
│   │   ├── UnitPriceSection.tsx   # Section 2.5 - Daftar harga satuan (Bed Cover, Selimut, dll)
│   │   ├── PackageSection.tsx     # Section 3 - Paket langganan (dengan mode placeholder dinamis)
│   │   ├── LocationSection.tsx    # Section 4 - Alamat, peta Google Maps interaktif, & tombol navigasi
│   │   └── Footer.tsx             # Section 5 - Info medsos, copyright, & WA button
│   ├── data/
│   │   └── laundryData.ts         # Data terpusat (Harga, Paket, Alamat, Kontak WA)
│   ├── pages/
│   │   ├── _app.tsx               # Entrypoint & inisialisasi font global
│   │   ├── _document.tsx          # Pengaturan dokumen HTML (lang="id")
│   │   └── index.tsx              # Halaman utama landing page
│   └── styles/
│       └── globals.css            # Pengaturan global CSS & Tailwind v4 theme
├── next.config.ts                 # Pengaturan static export (`output: 'export'`)
├── tailwind.config.ts             # File konfigurasi opsional Tailwind
└── package.json                   # Dependensi proyek
```

---

## 🚀 1. Cara Menjalankan Proyek di Localhost

Pastikan Anda telah menginstal **Node.js** di komputer Anda.

1. **Buka Terminal / Command Prompt / PowerShell** di dalam folder proyek ini:
   `C:\Users\Bintang\Downloads\Project Bintang Laundry`
2. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```
3. **Jalankan server pengembangan lokal**:
   ```bash
   npm run dev
   ```
4. **Buka browser** dan akses alamat:
   [http://localhost:3000](http://localhost:3000)

---

## 💻 2. Cara Push ke GitHub

Jika Anda belum mengunggah proyek ini ke GitHub, ikuti langkah berikut:

1. **Inisialisasi Git** (jika belum terinisialisasi):
   ```bash
   git init
   ```
2. **Tambahkan semua file ke staging**:
   ```bash
   git add .
   ```
3. **Lakukan commit pertama Anda**:
   ```bash
   git commit -m "feat: inisialisasi landing page Bintang Laundry premium"
   ```
4. **Buat repository baru di akun GitHub Anda**, lalu jalankan perintah berikut untuk menghubungkan dan mengirimkan kode (ganti `USERNAME` dan `REPO_NAME` dengan detail akun Anda):
   ```bash
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

---

## ☁️ 3. Cara Deploy ke Cloudflare Pages

Karena proyek ini menggunakan fitur **Static HTML Export**, Anda dapat men-deploy-nya secara gratis tanpa server backend di Cloudflare Pages.

### Langkah-langkah:
1. Masuk ke **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. Masuk ke menu **Workers & Pages** -> Klik tombol **Create Application** -> Pilih tab **Pages** -> Klik **Connect to Git**.
3. Pilih repository GitHub `REPO_NAME` yang baru saja Anda push.
4. Pada bagian **Build settings**, konfigurasikan seperti berikut:
   - **Framework Preset**: Pilih `Next.js (Static HTML Export)`
   - **Build Command**: `npm run build`
   - **Build Directory**: `out`
5. Klik **Save and Deploy**.
6. Cloudflare akan menyelesaikan proses build dalam waktu kurang dari 1 menit dan memberikan Anda URL web resmi gratis (misalnya `bintang-laundry.pages.dev`). Setiap kali Anda melakukan push ke branch `main`, Cloudflare akan otomatis mengupdate websitenya secara real-time!

---

## ✏️ 4. Cara Mengubah Harga dan Mengaktifkan Paket (Data Terpusat)

Anda tidak perlu membongkar struktur komponen UI React jika ingin memperbarui harga layanan atau mengaktifkan paket hemat baru. Cukup buka dan edit berkas:
👉 **`src/data/laundryData.ts`**

### A. Mengubah Daftar Harga Kiloan
Cukup ubah nilai angka pada array `priceList`. Format rupiah akan dihitung otomatis oleh sistem:
```typescript
export const priceList: PriceItem[] = [
  {
    id: 1,
    name: "Cuci Setrika",
    price: 7000, // <--- Ubah angka ini (Contoh: naik dari 6.500 ke 7.000)
    unit: "kg",
    description: "Layanan cuci basah, pengeringan, hingga setrika rapi dan wangi. Siap pakai!",
  },
  ...
];
```

### B. Mengaktifkan Paket Hemat Baru (Mengganti Placeholder)
Secara default, paket memiliki status `isAvailable: false` yang akan memunculkan card placeholder premium berlabel *"Segera Hadir"*.

Apabila Anda sudah siap merilis paket laundry (misalnya: *Cuci Setrika 30 Kg* seharga *Rp190.000*), Anda cukup mengedit data paketnya dan mengganti `isAvailable` menjadi `true`:
```typescript
export const packages: PackageItem[] = [
  {
    id: 1,
    name: "Cuci Setrika 30 Kg",  // <--- Masukkan Nama Paket Baru
    price: 190000,               // <--- Tambahkan harga baru (dalam angka)
    unit: "paket",               // <--- Tambahkan satuan unit
    description: "Layanan cuci setrika hemat untuk kebutuhan bulanan keluarga Anda.",
    isAvailable: true,           // <--- UBAH INI MENJADI true UNTUK MENGAKTIFKAN CARD HARGA!
  },
  ...
];
```
Saat Anda mengubah `isAvailable: true`, tampilan card di website akan otomatis berubah secara dinamis dari placeholder abu-abu menjadi card harga merah premium lengkap dengan tombol CTA pemesanan WhatsApp!

### C. Mengubah Kontak dan Alamat
Anda dapat mengubah nomor telepon, alamat, URL Maps, dan pesan default WhatsApp di bagian object `contactInfo`:
```typescript
export const contactInfo: ContactInfo = {
  phone: "08119333479",
  formattedPhone: "628119333479", // <--- Format WA tanpa '+' atau spasi
  whatsappMessage: "Halo Bintang Laundry, saya ingin memesan...", // <--- Pesan pembuka otomatis
  ...
};
```

### D. Mengaktifkan Harga Satuan Baru
Sama halnya dengan paket, secara default semua item satuan memiliki status `isAvailable: false` yang akan memunculkan tombol *"Tanya Harga"* (otomatis membuka pesan tanya harga WhatsApp).

Jika Anda ingin merilis harga resmi untuk suatu item (contoh: *Bed Cover* seharga *Rp35.000*), Anda cukup mengedit `unitPriceList` dan mengubah `isAvailable` menjadi `true` serta menambahkan properti `price`:
```typescript
export const unitPriceList: UnitPriceItem[] = [
  {
    id: 1,
    name: "Bed Cover",
    price: 35000,       // <--- Tambahkan harga baru
    category: "Perlengkapan Kamar",
    isAvailable: true,  // <--- Ubah menjadi true untuk memunculkan harga & tombol Pesan
  },
  ...
];
```
