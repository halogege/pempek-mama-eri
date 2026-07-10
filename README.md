# Website Pempek Mama Eri

Landing page satu halaman, siap pakai. Sebelum ada foto asli, semua kotak gambar akan tampil sebagai placeholder rapi bertuliskan nama file yang dibutuhkan — jadi tetap enak dilihat, bukan ikon "broken image".

## Struktur folder

```
pempek-mama-eri/
├── index.html
├── README.md
└── assets/
    ├── style.css
    ├── script.js
    ├── logo.png          ← logo bulat kamu
    ├── hero.jpg           ← foto besar di bagian paling atas
    ├── tentang.jpg        ← foto untuk bagian "Tentang Kami"
    └── produk/
        ├── lenjer.jpg
        ├── adaan.jpg
        ├── kapal-selam-medium.jpg
        ├── kapal-selam-jumbo.jpg
        ├── kapal-selam-ranjau-pedas.jpg
        ├── paket-10pcs.jpg
        ├── paket-50-100rb.jpg
        └── paket-300-500rb.jpg
```

**Cara pakai:** buat folder `produk` di dalam `assets`, lalu taruh foto dengan nama file **persis** seperti di atas (huruf kecil semua, pakai tanda strip `-`, format `.jpg` untuk foto produk/hero/tentang dan `.png` untuk logo). Begitu file itu ada, placeholder otomatis hilang dan foto langsung muncul — tidak perlu ubah kode apa pun.

## Yang masih perlu kamu isi

Semua ada di satu tempat: buka `assets/script.js`, bagian paling atas namanya `CONFIG`.

1. **Nomor WhatsApp** — ganti `whatsappNumber` dan `waDisplayText`.
   ```js
   whatsappNumber: "6281234567890", // format 62xxxxxxxxxx, tanpa 0/spasi/strip
   waDisplayText: "0812-3456-7890",
   ```
2. **Promo** — ganti `title` dan `desc` di bagian `promo`.
3. Kalau ada perubahan harga/menu, tinggal edit array `satuan` dan `paket` di file yang sama.

Cerita "Tentang Kami" ada langsung di `index.html`, cari bagian `<section class="about" id="tentang">` kalau mau diganti dengan cerita asli.

## Cara buka / hosting

- **Coba dulu di HP/laptop:** buka file `index.html` langsung di browser.
- **Supaya bisa diakses orang lain (online):** upload seluruh folder ini ke hosting statis gratis seperti Netlify, Vercel, atau GitHub Pages — tinggal drag & drop foldernya, tanpa perlu server tambahan.

## Tombol WhatsApp

Semua tombol "Pesan" di kartu produk otomatis membuka WhatsApp dengan pesan yang sudah terisi nama produknya, jadi pembeli tinggal kirim.
