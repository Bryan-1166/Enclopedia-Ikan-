/* ============================================================
   ENSIKLOPEDIA IKAN — SCRIPT
   script.js
   ============================================================ */

/* ============================================================
   ===== DATA IKAN =====

   Di sinilah Anda menambah, mengedit, atau menghapus data ikan.

   Setiap objek ikan memiliki properti berikut:

   id          : angka unik (jangan diubah urutannya, tambah saja di bawah)
   nama        : nama umum ikan (string)
   latin       : nama ilmiah / latin (string)
   kategori    : "deepsea" atau "freshwater" (string, huruf kecil)
   gambar      : URL gambar ikan (string) — bisa diganti dengan path lokal
   habitat     : deskripsi habitat (string)
   ukuran      : panjang tubuh (string, misal "15-20 cm")
   makanan     : jenis makanan (string)
   kedalaman   : kedalaman hidup (string, opsional — isi "" jika tidak ada)
   status      : status konservasi (string, misal "Tidak Terancam", "Rentan", dll.)
   deskripsi   : paragraf deskripsi singkat (string)
   catatan     : fakta / catatan tambahan umum (string)
   catatanUnik : fakta unik / menarik yang membedakan spesies ini (string)

   ============================================================ */

const dataIkan = [

  /* ================================================================
     BAGIAN I: IKAN AIR LAUT / LAUT DALAM (Marine / Deep Sea Species)
     ================================================================ */

 {
  id: 1,
  nama: "Kodok Laut Merah",
  latin: "Chaunacops coloratus",
  kategori: "deepsea",
  gambar: "ikan_1.jpeg",
  habitat: "Zona batial laut dalam (1.000–3.000 meter) di Samudra Pasifik",
  ukuran: "20–30 sentimeter",
  makanan: "Karnivora (ikan kecil dan krustasea)",
  kedalaman: "1.000–3.000 meter",
  status: "Data Tidak Memadai",
  morfologi: "Tubuh bulat membengkak seperti balon dengan warna merah muda hingga biru keunguan. Bergerak di dasar laut menggunakan sirip dada dan sirip perut yang termodifikasi.",
  deskripsi: "Kodok Laut Merah merupakan ikan laut dalam langka dengan warna tubuh merah cerah. Ikan ini menggunakan sirip dadanya yang menyerupai kaki untuk berjalan di dasar laut dan memiliki umpan kecil di atas kepala untuk menarik mangsa.",
  catatan: "Tubuhnya dapat sedikit mengembang saat merasa terancam dengan cara menghirup air.",
  catatanUnik: "Memiliki organ pancing (esca) di dahi yang dapat ditarik masuk ke dalam celah khusus."
},
{
  id: 2,
  nama: "Naga Laut Rubi",
  latin: "Phyllopteryx dewysea",
  kategori: "deepsea",
  gambar: "ikan_2.jpeg",
  habitat: "Pesisir Australia Barat pada kedalaman lebih dari 50 meter",
  ukuran: "Maksimal sekitar 24 sentimeter",
  makanan: "Karnivora (plankton dan krustasea kecil)",
  kedalaman: "Lebih dari 50 meter",
  status: "Data Tidak Memadai",
  morfologi: "Berkerabat dengan kuda laut, memiliki warna merah rubi pekat dengan pelengkap tubuh minimalis tanpa kamuflase daun besar.",
  deskripsi: "Naga Laut Rubi adalah spesies naga laut yang baru ditemukan. Berbeda dari kerabatnya yang berwarna kuning dan hijau, spesies ini memiliki warna merah rubi pekat dengan pelengkap tubuh yang lebih sederhana.",
  catatan: "Ukurannya sedikit lebih kecil dibandingkan kerabat dekatnya, Common Seadragon.",
  catatanUnik: "Baru diidentifikasi secara resmi sebagai spesies baru pada tahun 2015 melalui analisis DNA."
},
{
  id: 3,
  nama: "Ikan Mata Tabung",
  latin: "Macropinna microstoma",
  kategori: "deepsea",
  gambar: "ikan_3.jpeg",
  habitat: "Zona mesopelagik pada kedalaman 600–800 meter di Samudra Pasifik Utara",
  ukuran: "Sekitar 15 sentimeter",
  makanan: "Karnivora (ubur-ubur dan zooplankton)",
  kedalaman: "600–800 meter",
  status: "Risiko Rendah",
  morfologi: "Bagian atas kepala berbentuk kubah transparan berisi cairan dengan mata berbentuk tabung hijau bercahaya yang dapat berputar.",
  deskripsi: "Ikan Mata Tabung memiliki kepala transparan yang memungkinkan kedua matanya bergerak bebas ke atas untuk mendeteksi bayangan mangsa. Meskipun terlihat menyeramkan pada foto, ukuran aslinya sangat kecil.",
  catatan: "Penampilannya tampak besar dan mengintimidasi di foto, tetapi sebenarnya ikan ini berukuran kecil.",
  catatanUnik: "Lubang di bagian depan wajahnya bukan mata, melainkan organ penciuman yang disebut nares."
},
{
  id: 4,
  nama: "Ikan Kodok Psikedelik",
  latin: "Histiophryne psychedelica",
  kategori: "deepsea",
  gambar: "ikan_4.jpeg",
  habitat: "Perairan dangkal Pulau Ambon dan Bali, Indonesia",
  ukuran: "Maksimal 8–9 sentimeter",
  makanan: "Karnivora (ikan kecil dan udang)",
  kedalaman: "1–20 meter",
  status: "Data Tidak Memadai",
  morfologi: "Memiliki pola garis meliuk berwarna putih, kuning, dan cokelat dengan kulit longgar serta wajah datar dan mata menghadap ke depan.",
  deskripsi: "Ikan Kodok Psikedelik pertama kali ditemukan di Ambon, Indonesia. Kulitnya memiliki pola psikedelik unik yang berbeda pada setiap individu. Tubuhnya pendek, tebal, dan membulat seperti kepalan tangan anak kecil.",
  catatan: "Tubuhnya pendek, tebal, dan membulat seperti kepalan tangan anak kecil.",
  catatanUnik: "Spesies endemik Indonesia yang bergerak menggunakan propulsi jet dengan menyemburkan air dari insang untuk meluncur di dasar laut."
},
{
  id: 5,
  nama: "Belut Pelikan",
  latin: "Eurypharynx pelecanoides",
  kategori: "deepsea",
  gambar: "ikan_5.jpeg",
  habitat: "Zona afotik laut dalam pada kedalaman 500–3.000 meter di seluruh dunia",
  ukuran: "75 sentimeter hingga 1 meter",
  makanan: "Karnivora (ikan, cumi-cumi, dan krustasea)",
  kedalaman: "500–3.000 meter",
  status: "Risiko Rendah",
  morfologi: "Memiliki rahang sangat longgar dan elastis yang dapat meregang lebar menyerupai kantung paruh burung pelikan.",
  deskripsi: "Belut Pelikan terkenal karena mulutnya yang sangat besar dan elastis, bahkan lebih besar dari tubuhnya sendiri. Sebagian besar panjang tubuhnya terdiri dari ekor tipis seperti cambuk.",
  catatan: "Sebagian besar panjang tubuhnya didominasi oleh ekor tipis menyerupai cambuk.",
  catatanUnik: "Ujung ekornya memiliki organ bioluminesensi yang memancarkan cahaya merah muda untuk menarik mangsa di kegelapan laut dalam."
},

  /* ================================================================
     BAGIAN II: IKAN AIR TAWAR (Freshwater Species)
     ================================================================ */

  {
  id: 6,
  nama: "Pari Black Diamond",
  latin: "Potamotrygon leopoldi",
  kategori: "freshwater",
  gambar: "ikan_6.jpeg",
  habitat: "Endemik di Sungai Xingu, Basin Amazon, Brasil",
  ukuran: "Diameter 45–60 sentimeter dengan panjang total hingga 1 meter",
  makanan: "Karnivora (ikan kecil dan invertebrata)",
  kedalaman: "Dasar sungai",
  status: "Rentan",
  morfologi: "Tubuh hitam pekat mengilap dengan pola totol putih simetris menyerupai berlian.",
  deskripsi: "Pari Black Diamond merupakan salah satu pari air tawar paling indah di dunia. Tubuhnya hitam mengilap dengan pola putih menyerupai berlian. Populasinya terancam akibat pembangunan bendungan di Sungai Xingu.",
  catatan: "Populasinya terancam akibat pembangunan Bendungan Belo Monte di Sungai Xingu.",
  catatanUnik: "Menjadi salah satu ikan hias air tawar termahal di dunia karena keindahan polanya."
},
{
  id: 7,
  nama: "Ikan Pisau Hantu Hitam",
  latin: "Apteronotus albifrons",
  kategori: "freshwater",
  gambar: "ikan_7.jpeg",
  habitat: "Sungai berarus lambat di Basin Amazon dan wilayah Guyana",
  ukuran: "30–50 sentimeter",
  makanan: "Karnivora (larva serangga dan cacing)",
  kedalaman: "Dasar sungai",
  status: "Risiko Rendah",
  morfologi: "Tubuh pipih memanjang seperti pisau berwarna hitam pekat dengan dua garis putih di ekor.",
  deskripsi: "Ikan Pisau Hantu Hitam berenang dengan gerakan halus menggunakan sirip perut panjang yang bergelombang sehingga dapat bergerak maju maupun mundur.",
  catatan: "Aktif pada malam hari dan sangat sensitif terhadap perubahan kualitas air.",
  catatanUnik: "Menghasilkan arus listrik lemah untuk navigasi dan mendeteksi lingkungan di air keruh."
},
{
  id: 8,
  nama: "Ikan Belalai Gajah",
  latin: "Gnathonemus petersii",
  kategori: "freshwater",
  gambar: "ikan_8.jpeg",
  habitat: "Sungai bervegetasi padat di Afrika Barat dan Tengah, terutama Sungai Kongo",
  ukuran: "23–35 sentimeter",
  makanan: "Omnivora (invertebrata dan detritus)",
  kedalaman: "Dasar hingga tengah sungai",
  status: "Risiko Rendah",
  morfologi: "Memiliki perpanjangan bibir bawah menyerupai belalai pendek yang sangat sensitif.",
  deskripsi: "Ikan Belalai Gajah menggunakan belalai pendeknya untuk mencari makanan di lumpur dasar sungai dan mendeteksi medan listrik lemah di sekitarnya.",
  catatan: "Belalainya dipenuhi reseptor elektro yang sangat sensitif.",
  catatanUnik: "Memiliki tingkat konsumsi oksigen otak yang sangat tinggi dibandingkan ukuran tubuhnya."
},
{
  id: 9,
  nama: "Gabus Barca",
  latin: "Channa barca",
  kategori: "freshwater",
  gambar: "ikan_9.jpeg",
  habitat: "Daerah aliran Sungai Brahmaputra di India dan Bangladesh",
  ukuran: "90 sentimeter hingga lebih dari 1 meter",
  makanan: "Karnivora (ikan dan katak)",
  kedalaman: "Dasar hingga tengah sungai",
  status: "Terancam Punah",
  morfologi: "Tubuh bercorak mosaik hijau keemasan dan biru metalik dengan sirip dorsal lebar menyerupai layar.",
  deskripsi: "Gabus Barca merupakan salah satu ikan gabus terbesar dan paling langka di dunia dengan warna tubuh eksotis dan mencolok.",
  catatan: "Sangat jarang ditemukan di alam liar.",
  catatanUnik: "Dapat bersembunyi di lumpur dalam saat musim kemarau."
},
{
  id: 10,
  nama: "Ikan Aligator",
  latin: "Atractosteus spatula",
  kategori: "freshwater",
  gambar: "ikan_10.jpeg",
  habitat: "Danau dan sungai besar di Amerika Utara, terutama Lembah Sungai Mississippi",
  ukuran: "Hingga 3 meter dengan berat mencapai 140 kilogram",
  makanan: "Karnivora (ikan, burung air, dan krustasea)",
  kedalaman: "Permukaan hingga dasar perairan",
  status: "Risiko Rendah",
  morfologi: "Moncong lebar dengan gigi tajam menyerupai buaya serta tubuh yang dilindungi sisik keras berbentuk belah ketupat.",
  deskripsi: "Ikan Aligator merupakan salah satu ikan air tawar terbesar di Amerika Utara dan dikenal sebagai fosil hidup.",
  catatan: "Tubuhnya dilindungi sisik ganoid keras seperti zirah.",
  catatanUnik: "Memiliki paru-paru primitif yang memungkinkannya menghirup udara langsung dari permukaan."
},
{
  id: 11,
  nama: "Megalodon",
  latin: "Otodus megalodon",
  kategori: "prehistoric",
  gambar: "ikan_11.jpeg",
  habitat: "Laut hangat purba di seluruh dunia",
  ukuran: "15–18 meter",
  makanan: "Karnivora (paus purba dan mamalia laut besar)",
  kedalaman: "Perairan laut terbuka",
  status: "Punah",
  morfologi: "Hiu raksasa dengan rahang sangat kuat dan gigi bergerigi berukuran besar.",
  deskripsi: "Megalodon merupakan predator laut terbesar yang pernah hidup dan berada di puncak rantai makanan laut purba.",
  catatan: "Diduga punah akibat perubahan iklim dan berkurangnya populasi mangsa.",
  catatanUnik: "Satu giginya dapat sebesar telapak tangan manusia dewasa."
},
{
  id: 12,
  nama: "Dunkleosteus",
  latin: "Dunkleosteus terrelli",
  kategori: "prehistoric",
  gambar: "ikan_12.jpeg",
  habitat: "Laut dangkal purba pada periode Devonian",
  ukuran: "6–9 meter",
  makanan: "Karnivora (ikan besar dan hewan bercangkang)",
  kedalaman: "Perairan laut sedang",
  status: "Punah",
  morfologi: "Tubuh besar dengan kepala berlapis tulang tebal dan rahang tajam menyerupai paruh.",
  deskripsi: "Dunkleosteus adalah ikan lapis baja purba dengan kekuatan gigitan luar biasa besar.",
  catatan: "Tidak memiliki gigi sejati, melainkan pelat tulang tajam.",
  catatanUnik: "Gigitan rahangnya mampu menghancurkan cangkang mangsa hanya dalam satu tekanan."
},
{
  id: 13,
  nama: "Helicoprion",
  latin: "Helicoprion bessonowi",
  kategori: "prehistoric",
  gambar: "ikan_13.jpeg",
  habitat: "Samudra purba periode Permian hingga Trias",
  ukuran: "3–4 meter",
  makanan: "Karnivora (cumi-cumi purba dan hewan bertubuh lunak)",
  kedalaman: "Laut terbuka",
  status: "Punah",
  morfologi: "Tubuh menyerupai hiu dengan rahang bawah berbentuk spiral gigi melingkar.",
  deskripsi: "Helicoprion terkenal karena struktur gigi spiral unik yang digunakan untuk mencabik mangsa.",
  catatan: "Para ilmuwan sempat lama kebingungan menentukan posisi spiral giginya.",
  catatanUnik: "Memiliki tooth whorl berbentuk spiral seperti gergaji berputar."
},
{
  id: 14,
  nama: "Leedsichthys",
  latin: "Leedsichthys problematicus",
  kategori: "prehistoric",
  gambar: "ikan_14.jpeg",
  habitat: "Laut purba pada periode Jura",
  ukuran: "9–16 meter",
  makanan: "Plankton dan organisme kecil",
  kedalaman: "Perairan laut terbuka",
  status: "Punah",
  morfologi: "Ikan bertulang raksasa dengan mulut besar dan struktur insang penyaring makanan.",
  deskripsi: "Leedsichthys merupakan ikan bertulang terbesar yang pernah ditemukan dan hidup sebagai penyaring plankton.",
  catatan: "Diperkirakan berenang lambat seperti hiu paus modern.",
  catatanUnik: "Menjadi salah satu filter feeder terbesar sepanjang sejarah bumi."
},
{
  id: 15,
  nama: "Cladoselache",
  latin: "Cladoselache fyleri",
  kategori: "prehistoric",
  gambar: "ikan_15.jpeg",
  habitat: "Laut purba periode Devonian",
  ukuran: "1,8 meter",
  makanan: "Karnivora (ikan kecil dan hewan laut)",
  kedalaman: "Perairan laut dangkal",
  status: "Punah",
  morfologi: "Tubuh ramping menyerupai hiu modern tetapi tanpa sisik pelindung dan tanpa klasper eksternal.",
  deskripsi: "Cladoselache merupakan salah satu hiu paling awal yang pernah hidup dengan tubuh sederhana namun sangat cepat.",
  catatan: "Kulitnya lebih halus dibandingkan hiu modern.",
  catatanUnik: "Mengandalkan kecepatan tinggi untuk menangkap mangsa di lautan purba."
}
  /* ----- TAMBAHKAN DATA IKAN BARU DI SINI ----- */
  /*
  ,{
    id: 11,                        // <- ganti angkanya (harus unik)
    nama: "Nama Ikan",
    latin: "Nama latin",
    kategori: "deepsea",           // <- "deepsea" atau "freshwater"
    gambar: "URL_GAMBAR_IKAN",
    habitat: "Deskripsi habitat",
    ukuran: "xx cm",
    makanan: "Jenis makanan",
    kedalaman: "xxx meter",
    status: "Status konservasi",
    morfologi: "Deskripsi ciri fisik / bentuk tubuh unik ikan ini.",
    deskripsi: "Paragraf deskripsi singkat ikan ini...",
    catatan: "Catatan / fakta tambahan umum tentang ikan ini.",
    catatanUnik: "Fakta unik atau aneh yang membedakan spesies ini dari yang lain."
  }
  */

]; /* ===== AKHIR DATA IKAN ===== */


/* ============================================================
   VARIABEL STATE (jangan diubah)
   ============================================================ */
let filterAktif = "semua";
let querySearch = "";


/* ============================================================
   RENDER KARTU IKAN
   ============================================================ */
function renderKartu(daftarIkan) {
  const grid = document.getElementById("fishGrid");
  const noResult = document.getElementById("noResult");
  const fishCount = document.getElementById("fishCount");

  grid.innerHTML = "";

  if (daftarIkan.length === 0) {
    noResult.style.display = "block";
    fishCount.textContent = "0";
    return;
  }

  noResult.style.display = "none";
  fishCount.textContent = daftarIkan.length;

  daftarIkan.forEach((ikan, idx) => {
    const badgeClass = ikan.kategori === "deepsea" ? "badge-deepsea" : "badge-freshwater";
    const badgeLabel = ikan.kategori === "deepsea" ? "deepsea" : "freshwater";

    const card = document.createElement("div");
    card.className = "fish-card";
    card.style.animationDelay = `${idx * 0.06}s`;

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${ikan.gambar}" alt="${ikan.nama}" loading="lazy"
             onerror="this.src='https://placehold.co/400x210/0a1a3a/00bcd4?text=Gambar+Tidak+Tersedia'" />
        <span class="badge ${badgeClass}">${badgeLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-name">${ikan.nama}</h3>
        <p class="card-scientific">${ikan.latin}</p>
        <div class="card-info">
          <div class="card-info-row">
            <span class="card-info-label">Habitat</span>
            <span>${ikan.habitat}</span>
          </div>
          <div class="card-info-row">
            <span class="card-info-label">Ukuran</span>
            <span>${ikan.ukuran}</span>
          </div>
          <div class="card-info-row">
            <span class="card-info-label">Makanan</span>
            <span>${ikan.makanan}</span>
          </div>
        </div>
        <button class="btn-detail" onclick="bukaModal(${ikan.id})">Lihat Detail</button>
      </div>
    `;

    grid.appendChild(card);
  });
}


/* ============================================================
   FILTER & SEARCH
   ============================================================ */
function applyFilter() {
  let hasil = dataIkan;

  // Filter kategori
  if (filterAktif !== "semua") {
    hasil = hasil.filter(i => i.kategori === filterAktif);
  }

  // Filter pencarian
  if (querySearch.trim() !== "") {
    const q = querySearch.toLowerCase();
    hasil = hasil.filter(i =>
      i.nama.toLowerCase().includes(q) ||
      i.latin.toLowerCase().includes(q) ||
      i.habitat.toLowerCase().includes(q)
    );
  }

  // Update judul section
  const titles = {
    semua: "Semua Spesies",
    deepsea: "Ikan Laut Dalam",
    freshwater: "Ikan Air Tawar",
     prehistoric:"Prasejarah"
  };
  document.getElementById("sectionTitle").textContent = titles[filterAktif] || "Semua Spesies";

  renderKartu(hasil);
}

function setFilter(kategori, btn) {
  filterAktif = kategori;
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  applyFilter();
}

function filterFish() {
  querySearch = document.getElementById("searchInput").value;
  applyFilter();
}


/* ============================================================
   MODAL DETAIL
   ============================================================ */
function bukaModal(id) {
  const ikan = dataIkan.find(i => i.id === id);
  if (!ikan) return;

  const badgeClass = ikan.kategori === "deepsea" ? "badge-deepsea" : "badge-freshwater";
  const badgeLabel = ikan.kategori === "deepsea" ? "deepsea" : "freshwater";

  document.getElementById("modalImg").src = ikan.gambar;
  document.getElementById("modalImg").alt = ikan.nama;
  document.getElementById("modalBadge").className = `badge ${badgeClass}`;
  document.getElementById("modalBadge").textContent = badgeLabel;
  document.getElementById("modalName").textContent = ikan.nama;
  document.getElementById("modalScientific").textContent = ikan.latin;
  document.getElementById("modalHabitat").textContent = ikan.habitat;
  document.getElementById("modalUkuran").textContent = ikan.ukuran;
  document.getElementById("modalMakanan").textContent = ikan.makanan;
  document.getElementById("modalKedalaman").textContent = ikan.kedalaman || "—";
  document.getElementById("modalStatus").textContent = ikan.status || "—";

  // Morfologi
  const morfologiRow = document.getElementById("modalMorfologiRow");
  if (ikan.morfologi) {
    document.getElementById("modalMorfologi").textContent = ikan.morfologi;
    morfologiRow.style.display = "flex";
  } else {
    morfologiRow.style.display = "none";
  }

  document.getElementById("modalDeskripsi").textContent = ikan.deskripsi;

  // Catatan
  const modalCatatan = document.getElementById("modalCatatan");
  const modalCatatanWrap = document.getElementById("modalCatatanWrap");
  if (ikan.catatan) {
    modalCatatan.textContent = ikan.catatan;
    modalCatatanWrap.style.display = "flex";
  } else {
    modalCatatanWrap.style.display = "none";
  }

  // Catatan Unik
  const modalCatatanUnik = document.getElementById("modalCatatanUnik");
  const modalCatatanUnikWrap = document.getElementById("modalCatatanUnikWrap");
  if (ikan.catatanUnik) {
    modalCatatanUnik.textContent = ikan.catatanUnik;
    modalCatatanUnikWrap.style.display = "flex";
  } else {
    modalCatatanUnikWrap.style.display = "none";
  }

  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

// Tutup modal dengan tombol Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});


/* ============================================================
   INIT — Jalankan saat halaman pertama kali dimuat
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderKartu(dataIkan);
});
