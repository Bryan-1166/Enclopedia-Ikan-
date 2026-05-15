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
    habitat: "Zona batial laut dalam (1.000–3.000 meter), Samudra Pasifik",
    ukuran: "20–30 cm",
    makanan: "Karnivora (ikan kecil, krustasea)",
    kedalaman: "1.000–3.000 meter",
    status: "Data Deficient",
    morfologi: "Tubuh bulat bengkak seperti balon berwarna merah muda/biru keunguan. Berjalan di dasar laut menggunakan sirip dada dan perut yang dimodifikasi.",
    deskripsi: "Kodok Laut Merah adalah spesies ikan laut dalam yang langka dengan tubuh berwarna merah cerah. Ia menggunakan sirip dadanya yang menyerupai kaki untuk berjalan di dasar laut dan memiliki umpan kecil di atas kepalanya untuk menarik mangsa.",
    catatan: "Tubuhnya dapat mengembang sedikit lebih besar saat merasa terancam dengan menghirup air.",
    catatanUnik: "Memiliki organ pancing (esca) di dahi yang bisa ditarik masuk ke dalam celah khusus."
  },
  {
    id: 2,
    nama: "Naga Laut Rubi",
    latin: "Phyllopteryx dewysea",
    kategori: "deepsea",
    gambar: "ikan_2.jpeg",
    habitat: "Pesisir Australia Barat (kedalaman > 50 meter)",
    ukuran: "Maksimal ± 24 cm",
    makanan: "Karnivora (plankton, krustasea kecil)",
    kedalaman: "> 50 meter",
    status: "Data Deficient",
    morfologi: "Berkerabat dengan kuda laut, berwarna merah rubi pekat dengan pelengkap tubuh minimalis (tanpa kamuflase daun besar).",
    deskripsi: "Naga Laut Rubi adalah spesies naga laut yang baru ditemukan. Berbeda dengan kerabatnya yang berwarna kuning dan hijau, spesies ini memiliki warna merah rubi pekat dengan pelengkap tubuh yang lebih minimalis.",
    catatan: "Ukurannya sedikit lebih kecil dibandingkan kerabat dekatnya, Common Seadragon.",
    catatanUnik: "Baru berhasil diidentifikasi secara resmi sebagai spesies baru pada tahun 2015 melalui analisis DNA."
  },
  {
    id: 3,
    nama: "Ikan Mata Tabung",
    latin: "Macropinna microstoma",
    kategori: "deepsea",
    gambar: "ikan_3.jpeg",
    habitat: "Zona mesopelagik (600–800 meter), Samudra Pasifik Utara",
    ukuran: "Umumnya hanya 15 cm",
    makanan: "Karnivora (ubur-ubur, zooplankton)",
    kedalaman: "600–800 meter",
    status: "Least Concern",
    morfologi: "Bagian atas kepala berupa kubah transparan berisi cairan. Mata berbentuk tabung hijau bersinar di dalam kepalanya yang bisa berputar.",
    deskripsi: "Ikan Mata Tabung memiliki kepala transparan yang berisi cairan, memungkinkan kedua matanya yang berbentuk tabung bergerak bebas ke atas untuk mendeteksi bayangan mangsa. Meskipun fotonya terlihat mengintimidasi, aslinya ikan ini tergolong sangat kecil.",
    catatan: "Meskipun penampilannya di foto terlihat besar dan mengintimidasi, aslinya ikan ini tergolong kecil.",
    catatanUnik: "Lubang di depan wajahnya bukan mata, melainkan organ penciuman (nares)."
  },
  {
    id: 4,
    nama: "Ikan Kodok Psikedelik",
    latin: "Histiophryne psychedelica",
    kategori: "deepsea",
    gambar: "ikan_4.jpeg",
    habitat: "Perairan dangkal Pulau Ambon dan Bali, Indonesia",
    ukuran: "Maksimal 8–9 cm",
    makanan: "Karnivora (ikan kecil, udang)",
    kedalaman: "1–20 meter",
    status: "Data Deficient",
    morfologi: "Pola garis meliuk putih-kuning-cokelat psikedelik. Kulit longgar dan wajah datar dengan mata menghadap ke depan.",
    deskripsi: "Ikan Kodok Psikedelik pertama kali ditemukan di Ambon, Indonesia. Kulitnya memiliki pola garis-garis psikedelik yang unik pada setiap individu. Tubuhnya pendek, tebal, dan membulat seperti kepalan tangan anak-anak.",
    catatan: "Tubuhnya pendek, tebal, dan membulat seperti kepalan tangan anak-anak.",
    catatanUnik: "Spesies endemik Indonesia yang bergerak menggunakan propulsi jet — menyemburkan air dari insang untuk meluncur di dasar laut."
  },
  {
    id: 5,
    nama: "Belut Pelikan",
    latin: "Eurypharynx pelecanoides",
    kategori: "deepsea",
    gambar: "ikan_5.jpeg",
    habitat: "Zona afotik laut dalam (500–3.000 meter), seluruh dunia",
    ukuran: "75 cm – 1 meter",
    makanan: "Karnivora (ikan, cumi-cumi, krustasea)",
    kedalaman: "500–3.000 meter",
    status: "Least Concern",
    morfologi: "Rahang sangat longgar yang dapat meregang lebar menyerupai kantung paruh burung pelikan untuk menelan mangsa besar.",
    deskripsi: "Belut Pelikan terkenal dengan mulutnya yang sangat besar dan elastis, jauh lebih besar dari tubuhnya sendiri. Sebagian besar panjang tubuhnya didominasi ekor tipis seperti cambuk, sementara badannya sendiri sangat ramping.",
    catatan: "Sebagian besar panjang tubuhnya didominasi oleh ekornya yang tipis seperti cambuk, sementara badannya sendiri sangat ramping.",
    catatanUnik: "Ujung ekornya memiliki organ bioluminesensi yang memancarkan cahaya merah muda sebagai umpan mangsa di kegelapan laut dalam."
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
    ukuran: "Diameter 45–60 cm | Panjang total (termasuk ekor) hingga 1 meter | Berat hingga 15–20 kg",
    makanan: "Karnivora (ikan kecil, invertebrata)",
    kedalaman: "Dasar sungai",
    status: "Vulnerable",
    morfologi: "Tubuh hitam legam berkilau dengan pola totol-totol putih bersih yang simetris seperti berlian.",
    deskripsi: "Pari Black Diamond adalah salah satu pari air tawar paling indah di dunia. Tubuhnya hitam legam berkilau dengan pola totol putih simetris menyerupai berlian. Spesies ini endemik Sungai Xingu dan populasinya terancam akibat pembangunan bendungan.",
    catatan: "Populasinya sangat terancam akibat pembangunan Bendungan Belo Monte di Sungai Xingu.",
    catatanUnik: "Salah satu komoditas ikan hias air tawar paling mahal di dunia karena visualnya yang luar biasa."
  },
  {
    id: 7,
    nama: "Ikan Pisau Hantu Hitam",
    latin: "Apteronotus albifrons",
    kategori: "freshwater",
    gambar: "ikan_7.jpeg",
    habitat: "Sungai berarus lambat di Basin Amazon dan wilayah Guyana",
    ukuran: "Di alam liar hingga 50 cm | Di akuarium rata-rata 30–40 cm",
    makanan: "Karnivora (larva serangga, cacing)",
    kedalaman: "Dasar sungai",
    status: "Least Concern",
    morfologi: "Tubuh pipih memanjang seperti pisau hitam pekat. Berenang mundur-maju menggunakan undulasi sirip perut yang menyatu.",
    deskripsi: "Ikan Pisau Hantu Hitam memiliki tubuh hitam mulus dengan dua garis putih tipis di ekornya. Ikan ini berenang maju dan mundur dengan halus menggunakan sirip perut panjang yang bergelombang.",
    catatan: "Aktif di malam hari dan sangat sensitif terhadap perubahan kualitas air.",
    catatanUnik: "Menghasilkan arus listrik lemah (elektrolokasi) untuk navigasi karena penglihatannya buruk di air keruh."
  },
  {
    id: 8,
    nama: "Ikan Belalai Gajah",
    latin: "Gnathonemus petersii",
    kategori: "freshwater",
    gambar: "ikan_8.jpeg",
    habitat: "Sungai-sungai bervegetasi padat di Afrika Barat dan Tengah (Sungai Kongo)",
    ukuran: "23–35 cm",
    makanan: "Omnivora (invertebrata, detritus)",
    kedalaman: "Dasar dan tengah sungai",
    status: "Least Concern",
    morfologi: "Memiliki perpanjangan berdaging di bagian dagu (bibir bawah) yang sensitif menyerupai belalai gajah pendek.",
    deskripsi: "Ikan Belalai Gajah mendapat namanya dari mulutnya yang memanjang menyerupai belalai gajah pendek, yang digunakan untuk mencari makan di lumpur dasar sungai.",
    catatan: "Belalainya sangat sensitif dan dipenuhi reseptor elektro yang mampu mendeteksi medan listrik lemah dari mangsa yang tersembunyi.",
    catatanUnik: "Memiliki rasio konsumsi oksigen otak-ke-tubuh yang sangat tinggi, bahkan melebihi manusia — salah satu ikan paling 'cerdas' yang pernah diteliti."
  },
  {
    id: 9,
    nama: "Gabus Barca",
    latin: "Channa barca",
    kategori: "freshwater",
    gambar: "ikan_9.jpeg",
    habitat: "Endemik di daerah aliran Sungai Brahmaputra (India dan Bangladesh)",
    ukuran: "90 cm – 105 cm (di atas 1 meter)",
    makanan: "Karnivora (ikan, katak)",
    kedalaman: "Dasar hingga tengah sungai",
    status: "Endangered",
    morfologi: "Gabus eksotis bercorak mosaik hijau keemasan dan biru metalik dengan sirip dorsal tegak lebar layaknya layar kapal.",
    deskripsi: "Gabus Barca adalah salah satu ikan gabus terbesar dan paling langka di dunia. Dikenal dengan corak mosaik hijau keemasan dan biru metalik yang menakjubkan, serta sirip dorsal tegak lebar seperti layar kapal.",
    catatan: "Sangat jarang ditemukan di alam liar; sebagian besar pengetahuan tentangnya berasal dari spesimen yang diperdagangkan sebagai ikan hias.",
    catatanUnik: "Hidup di lubang vertikal pinggiran sungai dan bersembunyi di lumpur dalam saat musim kemarau."
  },
  {
    id: 10,
    nama: "Ikan Aligator",
    latin: "Atractosteus spatula",
    kategori: "freshwater",
    gambar: "ikan_10.jpeg",
    habitat: "Danau dan sungai besar di Amerika Utara (Lembah Sungai Mississippi)",
    ukuran: "Panjang hingga 3 meter | Berat hingga 140 kg",
    makanan: "Karnivora (ikan, burung air, krustasea)",
    kedalaman: "Permukaan hingga dasar",
    status: "Least Concern",
    morfologi: "Moncong ganda lebar dengan gigi tajam menyerupai buaya. Tubuh dilindungi sisik ganoid keras berbentuk belah ketupat.",
    deskripsi: "Ikan Aligator adalah ikan air tawar terbesar di Amerika Utara. Spesimen terbesar yang pernah dicatat mencapai panjang 3 meter dengan berat di atas 140 kg. Tubuhnya dilindungi sisik ganoid keras seperti zirah.",
    catatan: "Ini adalah salah satu ikan air tawar terbesar di Amerika Utara — spesimen terbesar yang pernah dicatat mencapai 3 meter dan 140 kg.",
    catatanUnik: "Merupakan fosil hidup dari zaman Kapur yang memiliki paru-paru primitif untuk menghirup udara langsung dari permukaan."
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
    freshwater: "Ikan Air Tawar"
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
