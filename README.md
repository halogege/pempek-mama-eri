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
    ├── logo.png          ← sudah ada (logo asli kamu)
    ├── hero.jpg           ← foto besar di bagian paling atas (masih perlu diisi)
    ├── tentang.jpg        ← foto untuk bagian "Tentang Kami" (masih perlu diisi)
    └── produk/
        ├── lenjer.jpg
        ├── adaan.jpg
        ├── kapal-selam-medium.jpg
        ├── kapal-selam-jumbo.jpg
        ├── kapal-selam-ranjau-pedas.jpg
        ├── paket-50rb.jpg
        ├── paket-100rb.jpg
        ├── paket-150rb.jpg
        ├── paket-250rb.jpg
        ├── paket-300rb.jpg
        └── paket-500rb.jpg
```

**Cara pakai:** buat folder `produk` di dalam `assets`, lalu taruh foto dengan nama file **persis** seperti di atas (huruf kecil semua, pakai tanda strip `-`, format `.jpg` untuk foto produk/hero/tentang). Begitu file itu ada, placeholder otomatis hilang dan foto langsung muncul — tidak perlu ubah kode apa pun.

Logo sudah otomatis kepasang di navbar dan jadi favicon (ikon kecil di tab browser).

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
