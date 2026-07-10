/* =========================================================
   KONFIGURASI — edit bagian ini kapan pun butuh update
========================================================= */
const CONFIG = {
  // Ganti dengan nomor WhatsApp asli. Format: 62 lalu nomor tanpa 0 di depan,
  // tanpa spasi/tanda hubung. Contoh nomor 0812-3456-7890 -> "6281234567890"
  whatsappNumber: "6281234567890",

  waDisplayText: "Nomor menyusul", // ganti jadi misal "0812-3456-7890" setelah nomor asli ada

  promo: {
    title: "Isi judul promo di sini",
    desc: "Tulis detail promonya di sini — misalnya potongan harga, syarat minimal order, atau periode berlakunya."
  },

  satuan: [
    { key: "lenjer", nama: "Pempek Lenjer", harga: "Rp 6.500", desc: "Bentuk lonjong klasik, tekstur padat, cocok dimakan dengan cuko pedas." },
    { key: "adaan", nama: "Pempek Adaan", harga: "Rp 6.500", desc: "Digoreng langsung tanpa direbus dulu, gurih dan renyah di luar." },
    { key: "kapal-selam-medium", nama: "Pempek Kapal Selam Medium", harga: "Rp 15.000", desc: "Isi telur utuh, ukuran pas untuk satu porsi makan." },
    { key: "kapal-selam-jumbo", nama: "Pempek Kapal Selam Jumbo", harga: "Rp 30.000", desc: "Versi jumbo, isian telur lebih banyak, mengenyangkan." },
    { key: "kapal-selam-ranjau-pedas", nama: "Pempek Kapal Selam Ranjau Pedas", harga: "Rp 35.000", desc: "Kapal selam dengan cuko ranjau extra pedas untuk pencinta rasa nendang." }
  ],

  paket: [
    { key: "paket-50rb", nama: "Paket Pempek Palembang Campur 50rb", harga: "Rp 50.000", desc: "Campuran lengkap plus cuko, mie, timun, dan cabai rawit — pas buat 1-2 orang." },
    { key: "paket-100rb", nama: "Paket Pempek Palembang Campur 100rb", harga: "Rp 100.000", desc: "Isi lebih banyak dari paket 50rb, cocok buat berdua atau nemenin ngumpul kecil." },
    { key: "paket-150rb", nama: "Paket Pempek Palembang Campur 150rb", harga: "Rp 150.000", desc: "Porsi lebih besar, pas buat keluarga kecil atau teman kantor." },
    { key: "paket-250rb", nama: "Paket Pempek Palembang Campur 250rb", harga: "Rp 250.000", desc: "Cocok buat acara kumpul-kumpul dengan tamu lebih banyak." },
    { key: "paket-300rb", nama: "Paket Pempek Palembang Campur 300rb", harga: "Rp 300.000", desc: "Ukuran besar untuk acara/arisan/kantor. Pre-order, dikirim dalam 3 hari." },
    { key: "paket-500rb", nama: "Paket Pempek Palembang Campur 500rb", harga: "Rp 500.000", desc: "Paket paling besar, cocok untuk acara besar/kantor. Pre-order, dikirim dalam 3 hari." }
  ]
};

/* =========================================================
   RENDER KARTU PRODUK
========================================================= */
function waLinkFor(productName){
  const text = encodeURIComponent(`Halo Pempek Mama Eri, saya mau pesan ${productName}.`);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function cardHTML(item){
  return `
    <article class="card reveal">
      <div class="card-media">
        <img src="assets/produk/${item.key}.jpg" alt="${item.nama}" data-fallback-key="${item.key}">
      </div>
      <div class="card-body">
        <h3>${item.nama}</h3>
        <p class="card-price">${item.harga}</p>
        <p class="card-desc">${item.desc}</p>
        <a class="card-cta" href="${waLinkFor(item.nama)}" target="_blank" rel="noopener">Pesan</a>
      </div>
    </article>
  `;
}

function renderGrids(){
  document.getElementById("grid-satuan").innerHTML = CONFIG.satuan.map(cardHTML).join("");
  document.getElementById("grid-paket").innerHTML = CONFIG.paket.map(cardHTML).join("");
}

/* =========================================================
   IMAGE FALLBACK — kalau file foto belum ada di /assets,
   tampilkan kotak placeholder rapi (bukan ikon broken image)
========================================================= */
function attachImageFallbacks(){
  document.querySelectorAll("img[data-fallback-key]").forEach(img => {
    img.addEventListener("error", () => {
      const key = img.getAttribute("data-fallback-key");
      const wrap = img.closest(".card-media, .brand-mark, .about-media") || img.parentElement;
      img.remove();
      const note = document.createElement("div");
      note.className = "placeholder-note";
      note.innerHTML = `<span class="emoji">📸</span><span>Taruh foto di<br><code>assets/${key === "logo" || key === "hero" || key === "tentang" ? key : "produk/" + key}${key === "logo" ? ".png" : ".jpg"}</code></span>`;
      wrap.appendChild(note);
    }, { once:true });
  });

  // hero background pakai CSS background-image, jadi dicek manual
  const heroBg = document.querySelector(".hero-bg");
  if (heroBg){
    const testImg = new Image();
    testImg.onerror = () => {
      heroBg.style.backgroundImage = "none";
      heroBg.style.background = "linear-gradient(135deg, var(--maroon-800), var(--maroon-950))";
    };
    testImg.src = "assets/hero.jpg";
  }
}

/* =========================================================
   TABS SATUAN / PAKET
========================================================= */
function setupTabs(){
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected","false"); });
      tab.classList.add("active");
      tab.setAttribute("aria-selected","true");

      const target = tab.getAttribute("data-tab");
      document.getElementById("grid-satuan").hidden = target !== "satuan";
      document.getElementById("grid-paket").hidden = target !== "paket";
    });
  });
}

/* =========================================================
   MOBILE NAV
========================================================= */
function setupNav(){
  const hamburger = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  hamburger.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
function setupReveal(){
  const items = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .12 });
  items.forEach(el => io.observe(el));
}

/* =========================================================
   INIT
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  // Promo
  document.getElementById("promoTitle").textContent = CONFIG.promo.title;
  document.getElementById("promoDesc").textContent = CONFIG.promo.desc;

  // WhatsApp links & display
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent("Halo Pempek Mama Eri, saya mau tanya-tanya.")}`;
  document.getElementById("navWaBtn").href = waLink;
  document.getElementById("contactWaBtn").href = waLink;
  document.getElementById("floatingWa").href = waLink;
  document.getElementById("waDisplay").textContent = CONFIG.waDisplayText;

  // Year
  document.getElementById("year").textContent = new Date().getFullYear();

  renderGrids();
  attachImageFallbacks();
  setupTabs();
  setupNav();

  // reveal on scroll (mark sections + freshly rendered cards)
  document.querySelectorAll(".menu-section, .about, .promo .coupon").forEach(el => el.classList.add("reveal"));
  setupReveal();
});
