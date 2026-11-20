/* =========================================================================
   DATA REFERENSI: JENIS GENERATOR, JENJANG, MAPEL INDIVIDUAL, & OPSI FITUR
   ========================================================================= */

const GENERATOR_TYPES = {
  simulasi: {
    id: "simulasi",
    badge: "Konsep & Praktikum",
    title: "Simulasi & Media Interaktif",
    desc: "Lab virtual, manipulatif matematika, peta berlapis, grafik dinamis & alur 4 tahap.",
    step5Title: "Spesifikasi Simulasi & Format Alur Belajar",
    mechanicLabel: "Pilih Mekanika Interaktivitas Utama",
    detailLabel: "Detail Variabel, Rentang Nilai, atau Objek Visual",
    detailPlaceholder: "Contoh: Sediakan slider suhu -50°C hingga 150°C, pilihan 3 zat, dan grafik perubahan wujud secara real-time.",
    subOptionLabel: "Format Struktur Alur Belajar",
    subOptions: {
      alur_4_tahap: {
        label: "Alur Lengkap 4 Tahap (Rekomendasi)",
        desc: "Apersepsi → Eksplorasi Split-Screen → Mini-Game Bintang → Rangkuman.",
        spec: [
          "Bangun menggunakan navigasi layar bertahap (4 Tahap Micro-Learning Loop) di dalam satu viewport (100vh) tanpa scroll panjang:",
          "1) Layar Apersepsi: 1 ilustrasi vektor kontekstual, 1 pertanyaan pemantik dunia nyata, dan tombol besar 'Mulai Eksplorasi' (yang sekaligus membuka kunci audio Web Audio API).",
          "2) Layar Eksplorasi (Split-Screen 70:30 desktop / atas-bawah ponsel): Area utama berisi simulasi/interaksi inti; panel samping berisi 3–4 kartu konsep mikro berurutan yang memandu siswa bereksperimen.",
          "3) Layar Tantangan (Mini-Game): Ubah simulasi menjadi 3 misi tantangan berbasis tindakan (bukan pilihan ganda teks biasa) dengan umpan balik benar/salah instan dan skor 1–3 bintang.",
          "4) Layar Rangkuman: Tampilkan 3 poin kesimpulan inti materi, perolehan bintang, serta tombol ulangi latihan."
        ]
      },
      sandbox_lab: {
        label: "Fokus Lab Virtual & Praktikum",
        desc: "Langsung ke kanvas eksperimen + kartu panduan pengamatan (cocok untuk praktikum).",
        spec: [
          "Bangun dengan tata letak langsung menuju ruang eksperimen (Split-Screen 72:28) agar guru dan siswa dapat langsung bereksperimen:",
          "1) Area Utama: Kanvas/simulasi interaktif penuh dengan tombol Reset dan Preset Pengaturan Cepat.",
          "2) Panel Samping: Tab 'Kontrol & Variabel' serta tab 'Panduan Praktikum' berisi 3 misi pengamatan singkat dan ringkasan rumus/konsep.",
          "3) Sediakan tombol mini 'Uji Pemahaman (3 Soal)' dalam bentuk pop-up modal."
        ]
      },
      tabbed_modul: {
        label: "Multi-Tab Topik / Eksplorasi",
        desc: "Beberapa sub-materi/percobaan dalam satu layar melalui navigasi tab di atas.",
        spec: [
          "Bangun menggunakan antarmuka Tabbed Interface (3–4 tab sub-materi di bilah atas) di dalam satu viewport 100vh:",
          "1) Setiap tab menyajikan simulasi/visualisasi interaktif khusus untuk sub-konsep tersebut beserta 2–3 kartu penjelasan ringkas.",
          "2) Tab terakhir berisi 'Uji Pemahaman Terpadu' yang merangkum seluruh tab sebelumnya."
        ]
      }
    }
  },

  game: {
    id: "game",
    badge: "Gamifikasi & Kuis",
    title: "Game Edukasi Interaktif",
    desc: "Balapan, Tarik Tambang, Memori Match, Cari Kata, Kuis Seru + BANK_SOAL mudah diedit.",
    step5Title: "Pilih Jenis Game & Mode Bermain",
    mechanicLabel: "Pilih Mekanika Permainan Edukasi",
    detailLabel: "Aturan Tambahan, Tingkat Kesulitan, atau Tema Visual Game",
    detailPlaceholder: "Contoh: Buat 12 soal cerita berhitung cepat, berikan bonus kecepatan jika menjawab di bawah 5 detik.",
    subOptionLabel: "Mode Bermain",
    subOptions: {
      single_time: {
        label: "Single Player — Kejar Waktu (Time Attack)",
        desc: "Pemain mengumpulkan skor tertinggi sebelum waktu habis dengan sistem kombo.",
        spec: [
          "Bangun alur Game Edukasi 3 Layar di dalam satu viewport (100vh):",
          "1) Layar Mulai: Judul game, kolom input 'Nama Pemain' & 'Kelas', aturan main singkat, pemilih tingkat kesulitan (Mudah/Sedang/Sulit), dan tombol 'Mulai Main'.",
          "2) Arena Game (Time Attack): Visual animasi SVG/Canvas yang merespons setiap jawaban benar/salah secara langsung, indikator skor, kombo beruntun, dan bilah sisa waktu.",
          "3) Layar Akhir: Menampilkan predikat pemenang, skor akhir, rincian jumlah benar/salah, pembahasan singkat soal yang keliru, dan tombol 'Main Lagi'."
        ]
      },
      single_bot: {
        label: "Single Player — Lawan Komputer (Bot AI)",
        desc: "Siswa beradu cepat/strategi melawan karakter komputer yang bergerak otomatis.",
        spec: [
          "Bangun alur Game Edukasi Duel melawan Bot AI di dalam satu viewport (100vh):",
          "1) Layar Mulai: Input 'Nama Pemain' & 'Kelas', pilihan kecepatan Bot (Santai/Tangguh), dan tombol 'Mulai Duel'.",
          "2) Arena Duel: Menampilkan progres pemain vs Bot secara visual (misal tarik tambang atau balapan lintas layar), di mana jawaban benar mendorong pemain maju dan jawaban salah memberi kesempatan Bot menyusul.",
          "3) Layar Akhir: Pengumuman pemenang duel, statistik akurasi, dan tombol 'Tanding Ulang'."
        ]
      },
      dual_offline: {
        label: "2 Pemain Offline (Satu Layar Split)",
        desc: "Duel seru 2 siswa berdampingan di satu laptop/tablet (Pemain 1 vs Pemain 2).",
        spec: [
          "Bangun alur Game Edukasi 2 Pemain Lokal (Layar Terbelah Kiri & Kanan) di dalam satu viewport (100vh):",
          "1) Layar Mulai: Input nama Pemain 1 (Kiri) dan Pemain 2 (Kanan), jumlah ronde, dan tombol 'Mulai Duel'.",
          "2) Arena 2 Pemain: Area interaksi terpisah yang adil untuk kedua pemain (mendukung multi-sentuh/tombol terpisah), animasi visual di tengah layar yang bergerak sesuai keunggulan poin, dan indikator skor kedua pemain.",
          "3) Layar Akhir: Perayaan pemenang duel, perbandingan skor & kecepatan rata-rata, dan tombol 'Main Lagi'."
        ]
      },
      survival: {
        label: "Mode Bertahan (3 Nyawa / Endless)",
        desc: "Tantangan bertingkat dengan 3 kesempatan nyawa; tingkat kesulitan naik bertahap.",
        spec: [
          "Bangun alur Game Edukasi Mode Bertahan (3 Nyawa) di dalam satu viewport (100vh):",
          "1) Layar Mulai: Input 'Nama Pemain' & 'Kelas', penjelasan sistem 3 nyawa, dan tombol 'Mulai Tantangan'.",
          "2) Arena Permainan: Tingkat kesulitan soal/tantangan meningkat otomatis tiap 3 jawaban benar; salah menjawab mengurangi 1 ikon hati (nyawa) disertai penjelasan koreksi singkat.",
          "3) Layar Akhir: Skor total, level tertinggi yang dicapai, ringkasan konsep yang perlu dipelajari ulang, dan tombol 'Coba Lagi'."
        ]
      }
    }
  },

  skenario: {
    id: "skenario",
    badge: "Karakter & Prosedur",
    title: "Skenario, Dialog & Prosedur",
    desc: "Studi kasus bercabang, dilema etika, urutan langkah ibadah/SOP kerja, & roleplay.",
    step5Title: "Pilih Bentuk Skenario & Pola Evaluasi",
    mechanicLabel: "Pilih Mekanika Skenario / Prosedur",
    detailLabel: "Konteks Kasus, Tokoh, atau Urutan Langkah Wajib",
    detailPlaceholder: "Contoh: Simulasi siswa menemukan dompet di kantin sekolah, atau urutan 6 langkah rukun wudu secara tertib.",
    subOptionLabel: "Pola Evaluasi & Umpan Balik",
    subOptions: {
      branching_meter: {
        label: "Cerita Bercabang + Meteran Dampak",
        desc: "Setiap pilihan keputusan mengubah meteran nilai (Empati, Kepatuhan, Efisiensi).",
        spec: [
          "Bangun Simulator Pengambilan Keputusan Bercabang (Branching Scenario) di dalam satu viewport (100vh):",
          "1) Layar Pengantar Peran: Menjelaskan peran siswa, latar masalah nyata, 2–3 meteran indikator keberhasilan di bilah atas, dan tombol 'Mulai Simulasi'.",
          "2) Layar Babak Kasus (4–5 Adegan): Setiap adegan menampilkan ilustrasi vektor situasi, dialog/narasi singkat, dan 3 pilihan tindakan yang langsung mengubah meteran indikator serta memunculkan konsekuensi logisnya.",
          "3) Layar Refleksi Akhir: Analisis profil keputusan siswa berdasarkan skor meteran, pesan moral/konsep kunci, dan opsi mencoba jalur keputusan lain."
        ]
      },
      sequence_check: {
        label: "Panduan Bertahap + Uji Susun Urutan",
        desc: "Belajar langkah demi langkah dulu, lalu diuji menyusun ulang urutan yang diacak.",
        spec: [
          "Bangun Media Pembelajaran Prosedural 3 Tahap di dalam satu viewport (100vh):",
          "1) Layar Pengantar: Tujuan prosedur/ibadah/SOP, syarat sah/keselamatan, dan tombol 'Pelajari Langkah'.",
          "2) Layar Panduan Interaktif: Navigasi langkah demi langkah (1 sampai N) dilengkapi ilustrasi vektor tiap tahap, penanda status (Wajib/Rukun vs Sunah/Opsional), dan penjelasan detail.",
          "3) Layar Uji Urutan & Rangkuman: Kartu langkah diacak agar siswa menyusunnya kembali secara tertib dengan validasi instan, dilanjutkan kartu kesimpulan."
        ]
      }
    }
  }
};

/* =========================================================================
   DATA MEKANIKA KHUSUS MODE GAME EDUKASI
   ========================================================================= */

const GAME_MECHANICS = [
  {
    id: "tarik_tambang",
    label: "Tarik Tambang Pengetahuan",
    desc: "Jawaban benar menarik tali ke arah tim siswa; salah membuat lawan menarik balik.",
    spec: "Bangun visual arena Tarik Tambang di kanvas/SVG dengan 2 karakter vektor yang menarik tali tambang melintasi garis tengah; setiap jawaban benar menggeser posisi tali secara mulus menuju garis kemenangan siswa."
  },
  {
    id: "balapan",
    label: "Balapan Lintas Rintangan",
    desc: "Kendaraan/karakter melaju kencang tiap menjawab benar menuju garis finis.",
    spec: "Bangun arena balapan horizontal (SVG/Canvas) dengan lintasan berjarak 100%; setiap jawaban benar memberi dorongan turbo pada kendaraan siswa menuju garis finis sambil menghindari rintangan."
  },
  {
    id: "memori_match",
    label: "Memori Match (Pasangan Kartu)",
    desc: "Mencocokkan kartu konsep dengan definisi, rumus, gambar, atau terjemahannya.",
    spec: "Bangun papan permainan kartu bolak-balik (flip cards grid 4x3 atau 4x4) dengan animasi balik kartu halus di mana siswa mencocokkan pasangan konsep dan penjelasan/pasangannya."
  },
  {
    id: "sortir_cepat",
    label: "Tangkap & Klasifikasi Cepat",
    desc: "Arahkan atau seret objek/kartu yang bermunculan ke keranjang kategori yang tepat.",
    spec: "Bangun arena klasifikasi interaktif di mana kartu/objek konsep muncul satu per satu dan siswa harus mengarahkan atau menyeretnya ke keranjang kategori yang benar sebelum waktu habis."
  },
  {
    id: "panjat_pinang",
    label: "Panjat Puncak / Tangga Juara",
    desc: "Setiap jawaban benar memanjat satu tingkat lebih tinggi hingga meraih bendera puncak.",
    spec: "Bangun visual tiang/tangga bertingkat vertikal di sisi layar dengan karakter vektor yang memanjat naik setiap kali siswa menjawab tepat, dilengkapi efek jatuh sedikit jika keliru."
  },
  {
    id: "teka_teki_kata",
    label: "Teka-Teki Kata / Cari Istilah",
    desc: "Menyusun huruf acak atau menemukan istilah kunci tersembunyi berdasarkan petunjuk.",
    spec: "Bangun papan permainan kata interaktif (susun huruf atau grid cari kata klik-seret) berbasis istilah kunci mata pelajaran lengkap dengan petunjuk definisi di samping papan."
  }
];

/* =========================================================================
   DATA PROFIL KOGNITIF PER JENJANG & KELAS
   ========================================================================= */

const COGNITIVE_PROFILES = {
  sd_rendah: {
    badge: "Mode SD Awal (Kelas 1–3): Tombol ekstra besar (52px+), bahasa sangat sederhana (maks 8–10 kata/kartu), visual cerah, maksimal 2 kontrol interaksi, dan suara TTS otomatis diaktifkan.",
    autoTTS: true,
    promptSpec: [
      "Gunakan bahasa Indonesia sangat sederhana, ramah anak, maksimal 8–10 kata per kartu instruksi.",
      "Gunakan ukuran tombol ekstra besar (minimal 52x52px), warna cerah kontras jelas, dan ikon/ilustrasi vektor dominan.",
      "Batasi kompleksitas maksimal 1–2 kontrol interaksi sederhana (klik atau drag-and-drop dasar) agar bebas beban kognitif.",
      "Berikan umpan balik ceria (animasi konfeti/bintang besar) saat siswa menjawab benar."
    ]
  },
  sd_tinggi: {
    badge: "Mode SD Atas (Kelas 4–6): Bahasa komunikatif kontekstual, 2–3 kontrol interaksi terpandu, kartu langkah singkat, dan tantangan berbasis eksplorasi permainan.",
    autoTTS: false,
    promptSpec: [
      "Gunakan bahasa Indonesia yang komunikatif, jelas, dan dekat dengan pengalaman sehari-hari siswa SD kelas atas.",
      "Sediakan maksimal 2–3 kontrol interaksi (kombinasi tombol pilihan, drag-and-drop, atau slider sederhana).",
      "Sertakan penjelasan sebab-akibat visual yang mudah ditangkap langsung pada kanvas."
    ]
  },
  smp: {
    badge: "Mode SMP (Kelas 7–9): Bahasa semi-formal dengan istilah kunci ber-glosarium, kombinasi 2–3 variabel interaktif, dan misi eksperimen berumpan balik konseptual.",
    autoTTS: false,
    promptSpec: [
      "Gunakan bahasa Indonesia semi-formal yang terstruktur serta jelaskan istilah kunci secara ringkas saat diklik.",
      "Sediakan 2–3 variabel kontrol yang saling memengaruhi dan tampilkan indikator perubahan nilai secara real-time.",
      "Rancang tantangan berbentuk misi eksperimen atau studi kasus terstruktur dengan petunjuk bertahap."
    ]
  },
  sma: {
    badge: "Mode SMA (Kelas 10–12): Antarmuka bergaya laboratorium/analitis modern, dukungan multi-variabel presisi, grafik real-time, terminologi ilmiah baku, dan penalaran HOTS.",
    autoTTS: false,
    promptSpec: [
      "Gunakan terminologi ilmiah yang baku, akurat, dan mendorong penalaran tingkat tinggi (HOTS).",
      "Gunakan antarmuka bersih bergaya laboratorium/analitis modern yang mendukung multi-variabel presisi dan pembacaan data atau grafik real-time.",
      "Rancang tantangan berbasis pemecahan masalah kompleks, optimasi parameter, atau analisis skenario bercabang."
    ]
  },
  smk: {
    badge: "Mode SMK (Vokasi): Konteks terapan dunia kerja/industri, simulasi prosedur kerja & troubleshooting, parameter alat ukur presisi, dan studi kasus efisiensi praktik.",
    autoTTS: false,
    promptSpec: [
      "Gunakan terminologi vokasi/industri yang akurat dan kaitkan konteks pembelajaran dengan skenario praktik kerja nyata.",
      "Sediakan antarmuka bergaya panel kontrol/simulator terapan yang menekankan ketepatan prosedur, keselamatan kerja (K3), dan pembacaan indikator presisi.",
      "Rancang tantangan berbentuk simulasi pemecahan masalah lapangan (troubleshooting) atau efisiensi kerja."
    ]
  }
};

const STAGE_DATA = {
  sd: {
    short: "SD",
    sub: "Fase A – C",
    grades: [
      { id: "sd1", label: "Kelas 1 (Fase A)", profile: "sd_rendah" },
      { id: "sd2", label: "Kelas 2 (Fase A)", profile: "sd_rendah" },
      { id: "sd3", label: "Kelas 3 (Fase B)", profile: "sd_rendah" },
      { id: "sd4", label: "Kelas 4 (Fase B)", profile: "sd_tinggi" },
      { id: "sd5", label: "Kelas 5 (Fase C)", profile: "sd_tinggi" },
      { id: "sd6", label: "Kelas 6 (Fase C)", profile: "sd_tinggi" }
    ],
    subjects: [
      "matematika",
      "bahasa_indonesia",
      "ipas",
      "pendidikan_pancasila",
      "pendidikan_agama",
      "bahasa_inggris",
      "seni_budaya",
      "pjok"
    ]
  },
  smp: {
    short: "SMP",
    sub: "Fase D",
    grades: [
      { id: "smp7", label: "Kelas 7 (Fase D)", profile: "smp" },
      { id: "smp8", label: "Kelas 8 (Fase D)", profile: "smp" },
      { id: "smp9", label: "Kelas 9 (Fase D)", profile: "smp" }
    ],
    subjects: [
      "matematika",
      "ipa",
      "ips",
      "bahasa_indonesia",
      "bahasa_inggris",
      "informatika",
      "pendidikan_pancasila",
      "pendidikan_agama",
      "seni_budaya",
      "pjok"
    ]
  },
  sma: {
    short: "SMA",
    sub: "Fase E – F",
    grades: [
      { id: "sma10", label: "Kelas 10 (Fase E)", profile: "sma" },
      { id: "sma11", label: "Kelas 11 (Fase F)", profile: "sma" },
      { id: "sma12", label: "Kelas 12 (Fase F)", profile: "sma" }
    ],
    subjects: [
      "matematika",
      "fisika",
      "kimia",
      "biologi",
      "ekonomi",
      "geografi",
      "sejarah",
      "sosiologi",
      "bahasa_indonesia",
      "bahasa_inggris",
      "informatika",
      "pendidikan_pancasila",
      "pendidikan_agama",
      "seni_budaya",
      "pjok"
    ]
  },
  smk: {
    short: "SMK",
    sub: "Fase E – F (Vokasi)",
    grades: [
      { id: "smk10", label: "Kelas 10 (Fase E)", profile: "smk" },
      { id: "smk11", label: "Kelas 11 (Fase F)", profile: "smk" },
      { id: "smk12", label: "Kelas 12 (Fase F)", profile: "smk" }
    ],
    subjects: [
      "kejuruan_smk",
      "matematika",
      "projek_ipas",
      "informatika",
      "bahasa_indonesia",
      "bahasa_inggris",
      "sejarah",
      "pendidikan_pancasila",
      "pendidikan_agama",
      "seni_budaya",
      "pjok"
    ]
  }
};

/* =========================================================================
   KATALOG MATA PELAJARAN INDIVIDUAL
   ========================================================================= */

const SUBJECT_CATALOG = {
  matematika: {
    code: "MTK",
    name: "Matematika",
    sub: "Bilangan, Aljabar, Geometri",
    interactivities: [
      {
        id: "manipulatif",
        label: "Manipulatif Digital (Drag & Drop)",
        desc: "Balok pecahan, ubin aljabar, atau keping nilai tempat yang menghitung otomatis.",
        spec: "Bangun manipulatif digital berbasis drag-and-drop (balok pecahan, ubin aljabar, atau keping bilangan) di mana setiap penempatan objek otomatis menghitung dan menampilkan representasi matematisnya secara real-time."
      },
      {
        id: "slider_grafik",
        label: "Penggeser Parameter & Grafik",
        desc: "Slider koefisien yang langsung mengubah bentuk kurva/garis pada koordinat.",
        spec: "Sediakan kanvas sistem koordinat Kartesius interaktif yang terhubung dengan slider parameter (koefisien, gradien, atau konstanta) sehingga perubahan nilai langsung memperbarui bentuk grafik dan persamaannya secara mulus."
      },
      {
        id: "geometri",
        label: "Geometri Eksploratif",
        desc: "Titik sudut yang dapat ditarik bebas atau jaring-jaring bangun ruang buka-tutup.",
        spec: "Sediakan bangun geometri interaktif (SVG/Canvas) dengan titik sudut yang dapat ditarik bebas atau kontrol buka-tutup jaring-jaring bangun ruang, lengkap dengan pengukuran sisi, sudut, luas, atau volume secara dinamis."
      },
      {
        id: "scaffolded",
        label: "Latihan Prosedural Bertahap",
        desc: "Penyelesaian langkah demi langkah dengan bantuan visual otomatis.",
        spec: "Sediakan papan pemecahan masalah bertahap (step-by-step solver) yang memvalidasi setiap langkah perhitungan siswa secara terpisah dan menampilkan bantuan visual spesifik saat keliru."
      }
    ],
    preset: {
      topic: "Pecahan Senilai dan Operasi Pecahan",
      objective: "Siswa mampu membandingkan pecahan senilai dan menjumlahkan pecahan berpenyebut berbeda melalui representasi visual balok pecahan.",
      detail: "Sediakan 2 batang pecahan interaktif yang dapat dibagi menjadi 2 hingga 12 bagian dengan slider penyebut dan pembilang, serta indikator visual saat kedua pecahan bernilai sama.",
      misconception: "Semakin besar angka penyebut, ukuran tiap potongan justru semakin kecil; penjumlahan pecahan tidak boleh langsung menjumlahkan penyebutnya."
    }
  },

  bahasa_indonesia: {
    code: "BIN",
    name: "Bahasa Indonesia",
    sub: "Literasi, Struktur, Teks",
    interactivities: [
      {
        id: "sintaksis",
        label: "Penyusun Struktur Kalimat (S-P-O-K)",
        desc: "Kartu kata berkode warna untuk menyusun kalimat efektif atau aktif-pasif.",
        spec: "Bangun papan penyusun kalimat menggunakan kartu kata berkode warna berdasarkan fungsi kalimat (Subjek, Predikat, Objek, Keterangan) yang dapat disusun ulang disertai validasi kaidah bahasa Indonesia secara instan."
      },
      {
        id: "bedah_teks",
        label: "Bedah Struktur Teks & Ide Pokok",
        desc: "Sorot bagian paragraf untuk mengidentifikasi struktur teks dan kata baku.",
        spec: "Tampilkan teks bacaan interaktif di mana siswa dapat menyorot atau mengklik kalimat untuk memetakan struktur teks serta mengecek arti kosakata baku."
      },
      {
        id: "dialog_bahasa",
        label: "Simulasi Dialog & Negosiasi",
        desc: "Percabangan percakapan untuk melatih bahasa santun, wawancara, atau negosiasi.",
        spec: "Bangun simulasi percakapan interaktif bercabang di mana siswa memilih respons berbahasa Indonesia yang efektif dan santun sesuai konteks, lalu melihat reaksi lawan bicara."
      }
    ],
    preset: {
      topic: "Kalimat Aktif dan Pasif dalam Teks Prosedur",
      objective: "Siswa mampu mengubah kalimat aktif transitif menjadi kalimat pasif dengan struktur S-P-O dan imbuhan yang tepat.",
      detail: "Sediakan kartu kata berkode warna (Subjek=Biru, Predikat=Hijau, Objek=Oranye) yang bisa disusun ulang, plus tombol 'Ubah Imbuhan me- / di-' untuk melihat transformasi posisi kata.",
      misconception: "Hanya kalimat aktif transitif (memiliki objek) yang dapat diubah menjadi kalimat pasif."
    }
  },

  bahasa_inggris: {
    code: "BIG",
    name: "Bahasa Inggris",
    sub: "Reading, Grammar, Listening",
    interactivities: [
      {
        id: "reading_tts",
        label: "Interactive Reading & Pronunciation",
        desc: "Teks bahasa Inggris klik-per-kalimat dengan TTS pelafalan & glosarium.",
        spec: "Tampilkan teks bahasa Inggris interaktif di mana setiap kalimat atau kosakata kunci dapat diklik untuk mendengar pelafalan bahasa Inggris (Web Speech API en-US/en-GB dengan kontrol kecepatan 0.75x/1.0x) dan melihat terjemahan kontekstual."
      },
      {
        id: "grammar_builder",
        label: "Sentence & Tenses Builder",
        desc: "Susun kartu kata untuk melatih tenses, subject-verb agreement, dan struktur.",
        spec: "Bangun papan penyusun kalimat bahasa Inggris berbasis kartu berkode warna (Subject, Auxiliary, Verb 1/2/3, Time Signal) yang memvalidasi tata bahasa dan menampilkan aturan tenses secara instan."
      },
      {
        id: "roleplay_en",
        label: "Branching Conversation Roleplay",
        desc: "Simulasi percakapan nyata (asking direction, ordering, interview) bercabang.",
        spec: "Bangun simulasi dialog bahasa Inggris bercabang dalam konteks kehidupan sehari-hari di mana pilihan respons siswa menentukan kelanjutan percakapan, dilengkapi tombol dengarkan pelafalan."
      }
    ],
    preset: {
      topic: "Simple Past Tense in Recount Text",
      objective: "Siswa mampu menyusun kalimat positif, negatif, dan interogatif menggunakan Verb 2 dan auxiliary 'did' dengan tepat.",
      detail: "Sediakan pemilih bentuk kalimat (+ / - / ?), kartu kata acak berkode warna, dan indikator perubahan otomatis antara Verb 2 (went, ate) dan Verb 1 saat memakai 'did'.",
      misconception: "Setelah kata bantu 'did' atau 'didn't', kata kerja harus kembali ke bentuk dasar (Verb 1), bukan tetap menggunakan Verb 2."
    }
  },

  ipas: {
    code: "IPAS",
    name: "IPAS",
    sub: "Alam & Sosial (SD)",
    interactivities: [
      {
        id: "eksperimen_mini",
        label: "Eksperimen Alam Sederhana",
        desc: "Simulasi fenomena alam sehari-hari (siklus air, gaya, magnet, tumbuhan).",
        spec: "Bangun simulasi visual sederhana dan ceria di kanvas/SVG di mana siswa mengubah 1–2 kondisi lingkungan (cahaya matahari, air, atau posisi magnet) dan langsung melihat perubahan yang terjadi."
      },
      {
        id: "eksplorasi_hotspot",
        label: "Gambar Interaktif & Titik Info",
        desc: "Klik bagian tumbuhan, peta daerah, atau panca indra untuk melihat fungsinya.",
        spec: "Bangun ilustrasi SVG berwarna cerah dengan titik hotspot bernomor yang dapat diklik siswa untuk memunculkan kartu penjelasan singkat beserta suara pembaca teks."
      },
      {
        id: "klasifikasi_ipas",
        label: "Papan Sortir & Pengelompokan",
        desc: "Tarik-lepas objek ke keranjang kategori (makhluk hidup, sumber energi, dll.).",
        spec: "Bangun aktivitas drag-and-drop mengelompokkan kartu gambar vektor ke dalam 2–3 kategori dengan umpan balik ceria dan alasan singkat saat kartu ditempatkan."
      }
    ],
    preset: {
      topic: "Siklus Air dan Perubahan Wujud di Alam",
      objective: "Siswa mampu mengurutkan tahapan evaporasi, kondensasi, dan presipitasi serta melihat pengaruh panas matahari.",
      detail: "Tampilkan ilustrasi SVG gunung, laut, awan, dan matahari dengan slider intensitas panas matahari; saat panas dinaikkan, animasi uap air, pembentukan awan, dan hujan bergerak lebih cepat.",
      misconception: "Awan bukan terbuat dari gas tak terlihat, melainkan kumpulan titik-titik air atau kristal es sangat kecil hasil pengembunan (kondensasi)."
    }
  },

  projek_ipas: {
    code: "PIPS",
    name: "Projek IPAS",
    sub: "Sains & Sosial Terapan (SMK)",
    interactivities: [
      {
        id: "simulasi_terapan",
        label: "Simulasi Energi & Lingkungan Kerja",
        desc: "Uji efisiensi energi, limbah, atau fenomena fisis dalam konteks industri.",
        spec: "Bangun simulasi terapan berbasis kanvas/SVG di mana siswa mengatur parameter operasional (efisiensi daya, pengolahan limbah, atau keselamatan kerja) dan mengamati dampaknya pada meteran biaya dan kelestarian lingkungan."
      },
      {
        id: "studi_kasus_ipas",
        label: "Analisis Kasus Sosial-Ekonomi",
        desc: "Simulasi pengambilan keputusan usaha ramah lingkungan dan interaksi sosial.",
        spec: "Bangun studi kasus interaktif bercabang terkait proyek kewirausahaan/lingkungan di mana siswa menyeimbangkan indikator ekonomi, sosial, dan ekologi."
      }
    ],
    preset: {
      topic: "Konversi Energi dan Efisiensi Daya Listrik Bengkel",
      objective: "Siswa mampu menghitung konsumsi daya peralatan kerja dan merancang strategi penghematan energi listrik.",
      detail: "Sediakan panel simulasi 4 peralatan listrik (lampu LED/pijar, AC, mesin bor, komputer) dengan sakelar nyala/mati, pengatur jam pemakaian, serta meteran kWh dan estimasi biaya bulanan real-time.",
      misconception: "Bedakan satuan daya listrik (Watt) dengan satuan energi listrik terpakai (kWh)."
    }
  },

  ipa: {
    code: "IPA",
    name: "IPA Terpadu",
    sub: "Sains Terpadu (SMP)",
    interactivities: [
      {
        id: "lab_smp",
        label: "Laboratorium Virtual Terpadu",
        desc: "Atur variabel bebas (suhu, gaya, rangkaian) dan baca alat ukur virtual.",
        spec: "Bangun simulasi laboratorium virtual di kanvas HTML5 di mana siswa mengatur 2–3 variabel bebas melalui slider/tombol dan mengamati fenomena serta pembacaan alat ukur virtual secara real-time."
      },
      {
        id: "anatomi_smp",
        label: "Lapisan Struktur & Anatomi",
        desc: "Kupas lapisan organ tubuh, sel, atau struktur bumi dengan hotspot info.",
        spec: "Bangun ilustrasi SVG berlapis dengan kontrol transparansi/toggle lapisan serta titik klik (hotspot) yang menampilkan nama bagian dan fungsinya."
      },
      {
        id: "ekosistem_smp",
        label: "Simulasi Ekosistem & Zat",
        desc: "Ubah komponen ekosistem atau pencampuran zat dan lihat grafik dampaknya.",
        spec: "Sediakan kontrol variabel populasi/zat yang menjalankan animasi simulasi disertai grafik perubahan dari waktu ke waktu."
      }
    ],
    preset: {
      topic: "Perubahan Wujud Zat dan Gerak Partikel",
      objective: "Siswa mampu menganalisis hubungan kenaikan suhu terhadap jarak, gaya tarik, dan kecepatan gerak partikel zat padat, cair, dan gas.",
      detail: "Sediakan wadah partikel di kanvas HTML5, tombol pilihan 3 zat (Air, Besi, Oksigen), dan slider suhu dari -50°C hingga 150°C disertai label wujud zat dan grafik kurva pemanasan.",
      misconception: "Saat terjadi perubahan wujud (melebur atau mendidih), suhu zat tetap konstan karena kalor digunakan untuk memutus ikatan antarpartikel."
    }
  },

  ips: {
    code: "IPS",
    name: "IPS Terpadu",
    sub: "Sejarah, Geografi, Ekonomi (SMP)",
    interactivities: [
      {
        id: "peta_ips",
        label: "Peta Tematik Interaktif",
        desc: "Peta vektor dengan toggle lapis data (iklim, penduduk, sumber daya).",
        spec: "Bangun peta vektor SVG interaktif dengan tombol lapis data (layer switcher) dan wilayah yang dapat diklik untuk menampilkan data kependudukan, sumber daya, atau jalur perdagangan."
      },
      {
        id: "timeline_ips",
        label: "Lini Masa & Interaksi Sosial",
        desc: "Garis waktu peristiwa sejarah dan simulasi dinamika interaksi masyarakat.",
        spec: "Bangun lini masa kronologis yang dapat digeser dan difilter, dilengkapi kartu sebab-akibat peristiwa serta studi kasus interaksi sosial."
      },
      {
        id: "pasar_ips",
        label: "Simulasi Kegiatan Ekonomi",
        desc: "Atur produksi, distribusi, dan harga untuk melihat keseimbangan pasar.",
        spec: "Bangun simulator kegiatan ekonomi dengan penggeser harga/persediaan serta meteran permintaan-penawaran visual."
      }
    ],
    preset: {
      topic: "Kondisi Geografis dan Persebaran Sumber Daya Alam Indonesia",
      objective: "Siswa mampu memetakan potensi sumber daya alam tiap pulau utama Indonesia dan mengaitkannya dengan aktivitas ekonomi penduduk.",
      detail: "Sediakan peta vektor Indonesia dengan 3 toggle lapisan (Pertambangan, Pertanian/Perkebunan, Kemaritiman) dan klik pulau untuk membuka kartu profil ekonomi daerah.",
      misconception: "Persebaran sumber daya alam tidak merata karena dipengaruhi kondisi geologis, jenis tanah, dan iklim tiap wilayah."
    }
  },

  fisika: {
    code: "FIS",
    name: "Fisika",
    sub: "Mekanika, Listrik, Gelombang",
    interactivities: [
      {
        id: "simulasi_mekanika",
        label: "Lab Virtual Mekanika & Vektor",
        desc: "Simulasi gerak, gaya, tumbukan, atau bidang miring lengkap dengan vektor & grafik.",
        spec: "Bangun simulasi fisika real-time 60fps di kanvas HTML5 dengan panah vektor gaya/kecepatan dinamis, kontrol slider parameter presisi (massa, sudut, gaya gesek, kecepatan awal), stopwatch virtual, serta grafik (s-t / v-t) secara bersamaan."
      },
      {
        id: "rangkaian_listrik",
        label: "Simulator Rangkaian & Gelombang",
        desc: "Atur tegangan, hambatan, frekuensi, atau panjang gelombang dan amati alat ukur.",
        spec: "Bangun simulator rangkaian listrik atau gelombang/optik berbasis kanvas/SVG dengan pembacaan voltmeter/amperemeter atau osiloskop virtual yang langsung berubah mengikuti hukum fisika."
      }
    ],
    preset: {
      topic: "Gerak Parabola dan Vektor Kecepatan",
      objective: "Siswa mampu menganalisis pengaruh sudut elevasi dan kecepatan awal terhadap tinggi maksimum serta jarak tempuh horizontal.",
      detail: "Sediakan pelontar proyektil di kanvas, slider kecepatan awal (10–50 m/s), slider sudut elevasi (15°–85°), tombol toggle panah vektor Vx & Vy, jejak lintasan, dan panel pembacaan H_max, X_max, serta waktu tempuh.",
      misconception: "Di titik tertinggi lintasan parabola, kecepatan vertikal (Vy) bernilai nol, tetapi kecepatan horizontal (Vx) tetap konstan dan percepatan gravitasi tetap bekerja ke bawah."
    }
  },

  kimia: {
    code: "KIM",
    name: "Kimia",
    sub: "Atom, Ikatan, Stoikiometri, Larutan",
    interactivities: [
      {
        id: "perakit_molekul",
        label: "Perakit Atom & Ikatan Kimia",
        desc: "Susun elektron valensi atau pasangkan atom membentuk ikatan ionik/kovalen.",
        spec: "Bangun antarmuka interaktif berbasis SVG/Canvas untuk merakit konfigurasi elektron atau memasangkan atom membentuk ikatan ionik/kovalen, lengkap dengan indikator kaidah oktet/duplet dan struktur Lewis."
      },
      {
        id: "lab_titrasi",
        label: "Lab Virtual Larutan, pH & Reaksi",
        desc: "Simulasi pencampuran pereaksi, titrasi asam-basa, atau kesetimbangan reaksi.",
        spec: "Bangun simulasi wadah reaksi kimia dengan kontrol konsentrasi, volume, suhu, atau tetesan titran yang langsung mengubah warna indikator larutan, nilai pH meter digital, dan grafik kurva titrasi."
      }
    ],
    preset: {
      topic: "Titrasi Asam Kuat dan Basa Kuat serta Kurva pH",
      objective: "Siswa mampu mengamati perubahan pH selama titrasi HCl oleh NaOH dan menentukan titik ekuivalen melalui indikator warna.",
      detail: "Sediakan buret dan labu Erlenmeyer SVG dengan tombol tetes/slider volume NaOH (0–50 mL), pilihan indikator (Fenolftalein, Metil Merah), pH meter digital, dan grafik kurva pH terhadap volume titran.",
      misconception: "Titik ekuivalen adalah saat mol H+ tepat sama dengan mol OH- (pH = 7 untuk asam kuat-basa kuat), sedangkan titik akhir titrasi ditandai oleh perubahan warna indikator."
    }
  },

  biologi: {
    code: "BIO",
    name: "Biologi",
    sub: "Sel, Anatomi, Genetika, Ekologi",
    interactivities: [
      {
        id: "lapisan_anatomi",
        label: "Inspektor Sel & Anatomi Berlapis",
        desc: "Kupas lapisan organ/sel dengan toggle transparansi dan hotspot fungsi.",
        spec: "Bangun ilustrasi vektor SVG anatomi organ atau struktur sel prokariotik/eukariotik berlapis dengan kontrol transparansi, zoom, dan titik hotspot yang menjelaskan struktur serta mekanisme fisiologisnya."
      },
      {
        id: "simulasi_genetika",
        label: "Simulator Genetika & Proses Hayati",
        desc: "Persilangan Mendel (Punnett Square), sintesis protein, atau fotosintesis.",
        spec: "Bangun simulator proses biologis interaktif (seperti papan persilangan alel, transkripsi-translasi DNA, atau laju fotosintesis terhadap intensitas cahaya/CO2) dengan visualisasi hasil fenotipe/grafik otomatis."
      }
    ],
    preset: {
      topic: "Persilangan Dihibrid Hukum Mendel II",
      objective: "Siswa mampu menentukan gamet, menyusun diagram Punnett 4x4, dan menganalisis rasio fenotipe 9:3:3:1.",
      detail: "Sediakan pemilih genotipe induk (misal BbKk x BbKk), generator gamet otomatis, kotak Punnett interaktif yang menampilkan ilustrasi biji (Bulat/Keriput, Kuning/Hijau) saat diklik, serta diagram batang rasio fenotipe.",
      misconception: "Rasio 9:3:3:1 hanya berlaku untuk persilangan dihibrid antara dua individu heterozigot (BbKk x BbKk) dengan dominansi penuh tanpa pautan gen."
    }
  },

  sejarah: {
    code: "SEJ",
    name: "Sejarah",
    sub: "Kronologi, Sumber, Peristiwa",
    interactivities: [
      {
        id: "timeline_sejarah",
        label: "Lini Masa Kronologis Interaktif",
        desc: "Garis waktu geser dengan filter era, perbandingan peristiwa, dan kausalitas.",
        spec: "Bangun lini masa (timeline) horizontal interaktif yang dapat digeser dan difilter berdasarkan periode/tema; setiap titik peristiwa membuka kartu detail berisi tanggal, tokoh, latar belakang, serta dampaknya."
      },
      {
        id: "peta_historis",
        label: "Peta Jalur & Skenario Historis",
        desc: "Peta rute peristiwa/perdagangan sejarah atau analisis sumber primer.",
        spec: "Bangun peta vektor SVG rute historis dengan kontrol tahun (time slider) untuk melihat pergeseran wilayah/jalur perdagangan, dilengkapi kartu analisis sumber sejarah."
      }
    ],
    preset: {
      topic: "Peristiwa Sekitar Proklamasi Kemerdekaan Indonesia 1945",
      objective: "Siswa mampu menganalisis kronologi dan keterkaitan sebab-akibat peristiwa sejak kekalahan Jepang hingga 17 Agustus 1945.",
      detail: "Sediakan lini masa interaktif 6–18 Agustus 1945 (Hiroshima-Nagasaki, Rengasdengklok, Perumusan Teks, Proklamasi, Sidang PPKI) dengan filter sudut pandang Golongan Tua vs Golongan Muda.",
      misconception: "Peristiwa Rengasdengklok bukan penculikan untuk mencelakai Soekarno-Hatta, melainkan upaya golongan muda menjauhkan mereka dari pengaruh Jepang agar segera memproklamasikan kemerdekaan."
    }
  },

  geografi: {
    code: "GEO",
    name: "Geografi",
    sub: "Spasial, Litosfer, Atmosfer, SIG",
    interactivities: [
      {
        id: "peta_gis",
        label: "Peta Tematik Berlapis (GIS-Lite)",
        desc: "Overlay lapisan data spasial (lempeng tektonik, curah hujan, kepadatan).",
        spec: "Bangun peta vektor SVG bergaya SIG (Sistem Informasi Geografis) dengan kontrol toggle lapis data (layer overlay), legenda dinamis, dan fitur klik wilayah untuk membaca profil spasial."
      },
      {
        id: "simulasi_geosfer",
        label: "Simulasi Fenomena Geosfer",
        desc: "Simulasi pergerakan lempeng tektonik, siklus batuan, atau dinamika atmosfer.",
        spec: "Bangun animasi penampang melintang bumi/atmosfer berbasis kanvas/SVG dengan pengatur parameter (arah gerak lempeng, suhu, ketinggian) yang langsung menunjukkan fenomena bentang alam atau cuaca."
      }
    ],
    preset: {
      topic: "Pergerakan Lempeng Tektonik dan Bentuk Muka Bumi",
      objective: "Siswa mampu membedakan gerak konvergen, divergen, dan transform serta mengidentifikasi bentang alam dan potensi bencananya.",
      detail: "Sediakan penampang melintang kerak samudra & benua SVG, tombol pilihan 3 jenis gerak lempeng, slider kecepatan/waktu (jutaan tahun), dan indikator zona subduksi, palung, atau gunung api.",
      misconception: "Gerak lempeng tektonik terjadi karena arus konveksi magma di lapisan astenosfer (mantel atas), bukan karena rotasi bumi semata."
    }
  },

  ekonomi: {
    code: "EKO",
    name: "Ekonomi",
    sub: "Pasar, Makro, Akuntansi",
    interactivities: [
      {
        id: "kurva_pasar",
        label: "Simulator Kurva & Keseimbangan Pasar",
        desc: "Geser variabel harga/pendapatan dan amati pergeseran kurva D-S serta ekuilibrium.",
        spec: "Bangun grafik kurva ekonomi interaktif di kanvas HTML5 yang terhubung dengan slider faktor harga dan non-harga, otomatis menghitung titik keseimbangan, surplus/defisit, dan elastisitas."
      },
      {
        id: "simulasi_kebijakan",
        label: "Simulator APBN / Kebijakan / Akuntansi",
        desc: "Kelola anggaran, suku bunga, atau persamaan dasar akuntansi secara real-time.",
        spec: "Bangun papan simulasi transaksi keuangan atau kebijakan moneter/fiskal di mana setiap input siswa langsung memperbarui neraca keseimbangan (Harta = Utang + Modal) atau meteran inflasi-pertumbuhan."
      }
    ],
    preset: {
      topic: "Hukum Permintaan, Penawaran, dan Harga Keseimbangan",
      objective: "Siswa mampu menganalisis pergeseran kurva permintaan dan penawaran serta menentukan titik harga keseimbangan pasar.",
      detail: "Tampilkan grafik kurva D dan S di kanvas dengan slider harga barang, pendapatan konsumen, dan biaya produksi. Tampilkan status pasar (Surplus, Defisit, Ekuilibrium) secara otomatis.",
      misconception: "Bedakan pergerakan sepanjang kurva (akibat perubahan harga barang itu sendiri) dengan pergeseran seluruh kurva (akibat faktor non-harga)."
    }
  },

  sosiologi: {
    code: "SOS",
    name: "Sosiologi",
    sub: "Interaksi, Kelompok, Konflik Sosial",
    interactivities: [
      {
        id: "simulasi_sosial",
        label: "Simulasi Dinamika & Konflik Sosial",
        desc: "Studi kasus bercabang untuk menganalisis resolusi konflik dan integrasi sosial.",
        spec: "Bangun simulator studi kasus sosiologis bercabang dengan meteran kohesi sosial dan kesenjangan; siswa memilih pendekatan mediasi, arbitrase, atau konsiliasi lalu melihat dampaknya pada masyarakat."
      },
      {
        id: "klasifikasi_sosial",
        label: "Pemetaan Stratifikasi & Lembaga Sosial",
        desc: "Klasifikasikan fenomena mobilitas sosial, kelompok sosial, atau penyimpangan.",
        spec: "Sediakan papan klasifikasi drag-and-drop fenomena sosial aktual ke dalam konsep sosiologi yang tepat, dilengkapi umpan balik analisis teori sosiologis secara ringkas."
      }
    ],
    preset: {
      topic: "Bentuk-Bentuk Mobilitas Sosial dalam Masyarakat",
      objective: "Siswa mampu membedakan mobilitas vertikal naik/turun, horizontal, dan antargenerasi melalui analisis kasus kehidupan.",
      detail: "Sediakan 8 kartu kisah perjalanan profesi/status sosial yang dapat diseret ke diagram tangga mobilitas sosial, lengkap dengan indikator faktor pendorong dan penghambatnya.",
      misconception: "Pindah pekerjaan ke jabatan setara di tempat lain termasuk mobilitas horizontal, bukan mobilitas vertikal."
    }
  },

  informatika: {
    code: "INF",
    name: "Informatika",
    sub: "Algoritma, Logika, Jaringan, Data",
    interactivities: [
      {
        id: "algoritma_step",
        label: "Visualisasi Algoritma & Logika",
        desc: "Jalankan langkah algoritma/gerbang logika/sorting per tahap (step-by-step).",
        spec: "Bangun simulator eksekusi algoritma (sorting, flowchart, atau gerbang logika) dengan tombol 'Jalankan per Langkah (Step)' yang menyorot blok aktif, alur sinyal, serta perubahan isi variabel secara real-time."
      },
      {
        id: "simulasi_jaringan",
        label: "Simulator Jaringan & Representasi Data",
        desc: "Konversi biner-desimal, topologi jaringan, atau simulasi paket data.",
        spec: "Bangun papan simulasi interaktif (misal sakelar bit biner 8-bit, pengiriman paket IP antar-node, atau enkripsi sederhana) dengan umpan balik status sistem langsung."
      }
    ],
    preset: {
      topic: "Gerbang Logika Dasar (AND, OR, NOT) & Tabel Kebenaran",
      objective: "Siswa mampu menguji kombinasi input biner (0 dan 1) pada gerbang logika dan memverifikasi outputnya.",
      detail: "Sediakan 2 sakelar input biner (0/1), pemilih gerbang logika SVG, jalur kabel yang menyala saat bernilai 1, lampu output, serta tabel kebenaran yang otomatis menyorot baris aktif.",
      misconception: "Gerbang OR menghasilkan output 1 meskipun kedua input bernilai 1 (berbeda dengan gerbang XOR)."
    }
  },

  pendidikan_pancasila: {
    code: "PP",
    name: "Pendidikan Pancasila",
    sub: "Norma, Hukum, UUD, Kewarganegaraan",
    interactivities: [
      {
        id: "dilema_etika",
        label: "Simulasi Dilema Etika Bercabang",
        desc: "Studi kasus nyata dengan pilihan tindakan dan refleksi nilai Pancasila.",
        spec: "Bangun skenario studi kasus bercabang (choose-your-own-path) dalam konteks sekolah/masyarakat; setiap pilihan menampilkan konsekuensi sosial-hukum serta indikator kesesuaian dengan nilai Pancasila."
      },
      {
        id: "hierarki_hukum",
        label: "Peta Hierarki Peraturan & Lembaga",
        desc: "Diagram piramida tata urutan peraturan atau hubungan antar-lembaga negara.",
        spec: "Bangun diagram struktural/piramida interaktif yang dapat diklik tiap tingkatannya untuk melihat dasar hukum, wewenang, dan contoh nyata penerapannya."
      },
      {
        id: "klasifikasi_norma",
        label: "Papan Klasifikasi Norma & Hak-Kewajiban",
        desc: "Drag-and-drop kartu perilaku ke kategori norma atau keseimbangan hak-kewajiban.",
        spec: "Sediakan papan kategorisasi drag-and-drop kartu studi kasus perilaku ke kolom jenis norma (Agama, Kesusilaan, Kesopanan, Hukum) atau Hak vs Kewajiban dengan umpan balik sanksi dan alasannya."
      }
    ],
    preset: {
      topic: "Penerapan Norma dalam Kehidupan Bermasyarakat",
      objective: "Siswa mampu membedakan empat macam norma (agama, kesusilaan, kesopanan, hukum) beserta sumber dan sanksinya.",
      detail: "Sediakan 8 kartu situasi nyata remaja yang dapat diseret ke 4 kolom norma, ditambah 1 skenario dilema etika tentang antrean dan aturan lalu lintas.",
      misconception: "Satu perbuatan (seperti mencuri) dapat melanggar lebih dari satu norma sekaligus, namun sanksi tegas yang memaksa dari negara hanya berasal dari norma hukum."
    }
  },

  pendidikan_agama: {
    code: "AGM",
    name: "Pendidikan Agama",
    sub: "Ibadah, Kitab Suci, Akhlak",
    interactivities: [
      {
        id: "urutan_ibadah",
        label: "Panduan Tata Cara Ibadah Bertahap",
        desc: "Simulasi urutan langkah ibadah, penanda rukun/sunah, dan susun urutan.",
        spec: "Bangun panduan visual bertahap (step-by-step sequence) untuk tata cara ibadah dengan tombol navigasi langkah, label pembeda rukun/wajib vs sunah, serta mode tantangan menyusun ulang urutan langkah."
      },
      {
        id: "eksplorator_kitab",
        label: "Eksplorator Teks Suci & Kaidah Bacaan",
        desc: "Klik per frasa untuk melihat terjemahan kata, konteks, dan sorotan kaidah bacaan.",
        spec: "Tampilkan kutipan ayat/teks suci dengan pewarnaan semantik pada kaidah bacaan (misal hukum tajwid); saat tiap frasa diklik, tampilkan penjelasan kaidah, arti per kata, dan pesan moralnya."
      },
      {
        id: "skenario_akhlak",
        label: "Simulasi Keteladanan Akhlak & Refleksi",
        desc: "Studi kasus akhlak mulia remaja dan ceklis refleksi pembiasaan privat.",
        spec: "Bangun skenario pengambilan sikap berakhlak mulia dalam keseharian remaja disertai lembar refleksi diri interaktif yang bersifat privat (hanya di memori sesi tanpa kirim ke server)."
      }
    ],
    preset: {
      topic: "Ketentuan dan Tata Cara Wudu yang Sah",
      objective: "Siswa mampu mengurutkan rukun wudu secara tertib serta membedakan antara rukun dan sunah wudu.",
      detail: "Sediakan ilustrasi vektor tiap gerakan wudu dengan label warna berbeda untuk Rukun dan Sunah, lalu pada tahap tantangan acak kartu gerakan agar siswa menyusunnya secara tertib.",
      misconception: "'Tertib' (berurutan) adalah bagian dari rukun wudu, dan membasuh sebagian kepala termasuk rukun sedangkan berkumur dan membasuh telinga termasuk sunah."
    }
  },

  seni_budaya: {
    code: "SNI",
    name: "Seni Budaya & Prakarya",
    sub: "Seni Rupa, Musik, Desain",
    interactivities: [
      {
        id: "warna_komposisi",
        label: "Kanvas Warna & Komposisi Visual",
        desc: "Pencampur warna digital dan panduan grid komposisi (Rule of Thirds).",
        spec: "Bangun studio warna dan komposisi berbasis kanvas/SVG dengan pencampur warna primer-sekunder-tersier, pemilih harmoni warna, serta toggle grid panduan komposisi."
      },
      {
        id: "studio_ritme",
        label: "Studio Ritme & Nada (Web Audio)",
        desc: "Papan ketuk/bilah nada virtual untuk menyusun pola ritme dan melodi.",
        spec: "Bangun sequencer ritme atau bilah nada interaktif menggunakan Web Audio API murni agar siswa dapat mengklik ketukan, mengatur tempo (BPM), dan mendengar langsung karya ritmenya."
      },
      {
        id: "inspektor_motif",
        label: "Inspektor Karya & Motif Beranotasi",
        desc: "Eksplorasi detail motif budaya/karya seni dengan titik sorotan makna.",
        spec: "Tampilkan ilustrasi vektor motif budaya/karya seni dengan fitur zoom kontrol serta titik anotasi (hotspot) yang menjelaskan teknik, unsur rupa, dan makna filosofisnya."
      }
    ],
    preset: {
      topic: "Teori Warna & Harmoni Komposisi Seni Rupa",
      objective: "Siswa mampu membedakan warna primer, sekunder, tersier serta menyusun skema warna komplementer dan analogus.",
      detail: "Sediakan roda warna interaktif 12 segmen, wadah pencampur 2 warna, dan pratinjau poster mini yang warnanya langsung berubah mengikuti skema pilihan siswa.",
      misconception: "Bedakan pencampuran warna pigmen/cat (RYB: Merah-Kuning-Biru) pada seni rupa dengan warna cahaya layar (RGB)."
    }
  },

  pjok: {
    code: "PJK",
    name: "PJOK",
    sub: "Olahraga, Taktik, Kesehatan",
    interactivities: [
      {
        id: "papan_taktik",
        label: "Papan Taktik Lapangan Interaktif",
        desc: "Geser ikon pemain dan gambar rute pergerakan strategi permainan tim.",
        spec: "Bangun papan taktik lapangan olahraga berbasis SVG/Canvas dengan ikon pemain yang dapat digeser bebas, tombol preset formasi, serta mode menggambar panah arah umpan/pergerakan."
      },
      {
        id: "fase_gerak",
        label: "Pemutar Fase Gerakan (Slow-Motion)",
        desc: "Kontrol frame-by-frame teknik dasar olahraga dengan indikator sudut tubuh.",
        spec: "Bangun animasi vektor teknik gerak olahraga yang dapat dikontrol dengan slider fase (awalan, pelaksanaan, lanjutan) atau slow-motion, lengkap dengan penanda titik tumpu dan sudut sendi."
      },
      {
        id: "kalkulator_bugar",
        label: "Simulasi & Kalkulator Kebugaran",
        desc: "Hitung IMT, zona detak jantung latihan, dan keseimbangan kalori.",
        spec: "Bangun simulator kebugaran interaktif (zona detak jantung latihan, IMT, atau keseimbangan kalori) dengan meteran visual real-time dan rekomendasi aktivitas fisik aman."
      }
    ],
    preset: {
      topic: "Formasi dan Pola Penyerangan Bola Basket",
      objective: "Siswa mampu memahami peran 5 posisi pemain bola basket dan merancang pola pergerakan dasar saat menyerang.",
      detail: "Sediakan setengah lapangan basket SVG, 5 pion penyerang (PG, SG, SF, PF, C) dan 5 pion bertahan yang bisa digeser, tombol preset formasi (1-2-2 dan 1-3-1), serta animasi jalur operan.",
      misconception: "Pahami aturan area 3 detik (paint area) dan perbedaan peran Point Guard sebagai pengatur serangan dengan Center di bawah ring."
    }
  },

  kejuruan_smk: {
    code: "KJR",
    name: "Kejuruan / Produktif",
    sub: "Konsentrasi Keahlian SMK",
    isCustomVocational: true,
    interactivities: [
      {
        id: "simulator_sop",
        label: "Simulator Panel Alat & SOP Kerja",
        desc: "Simulasi pengoperasian alat/panel/rangkaian sesuai prosedur keselamatan (K3).",
        spec: "Bangun panel simulator alat/sistem kejuruan berbasis SVG/Canvas di mana siswa mengoperasikan sakelar, menyambungkan komponen, atau menjalankan urutan SOP kerja dengan indikator status alat dan peringatan K3 jika urutan salah."
      },
      {
        id: "troubleshooting_smk",
        label: "Misi Diagnosis & Troubleshooting",
        desc: "Analisis gejala kerusakan dengan alat ukur virtual dan tentukan langkah perbaikan.",
        spec: "Bangun skenario diagnosis gangguan kerja lapangan (troubleshooting) di mana siswa memeriksa titik uji dengan alat ukur virtual, mengidentifikasi komponen rusak, dan memilih tindakan perbaikan paling efisien."
      },
      {
        id: "kalkulasi_produksi",
        label: "Kalkulator & Optimasi Produksi/Jasa",
        desc: "Hitung kebutuhan bahan, HPP, dimensi teknis, atau estimasi kerja real-time.",
        spec: "Bangun alat simulasi perencanaan kerja vokasi (perhitungan HPP, komposisi bahan, toleransi ukur, atau penjadwalan produksi) dengan grafik/indikator kelayakan hasil secara real-time."
      }
    ],
    preset: {
      customName: "Teknik Jaringan Komputer & Telekomunikasi (TJKT)",
      topic: "Pengalamatan IPv4 dan Subnetting Jaringan Lokal",
      objective: "Siswa mampu menentukan Network ID, Broadcast ID, dan rentang IP Host valid pada prefix /24 hingga /28.",
      detail: "Sediakan 4 komputer klien dan 1 router SVG, input/slider prefix CIDR (/24–/28), kalkulator biner visual 32-bit, serta tombol 'Uji Ping' yang menunjukkan koneksi berhasil atau gagal antar-perangkat.",
      misconception: "Alamat Network ID (pertama) dan Broadcast ID (terakhir) dalam satu subnet tidak boleh digunakan sebagai alamat IP perangkat host/komputer."
    }
  }
};

/* =========================================================================
   DAFTAR FITUR PENDUKUNG (ADAPTIF & AMAN SANDBOX GOOGLE SITES)
   ========================================================================= */

const EXTRA_FEATURES = [
  {
    id: "optAudio",
    label: "Efek Suara Umpan Balik (Web Audio)",
    checked: true,
    modes: ["simulasi", "game", "skenario"],
    rule: "Sertakan efek suara umpan balik halus (klik, benar, salah, selesai) menggunakan Web Audio API murni bawaan peramban yang aktif setelah klik pertama siswa, dilengkapi tombol mute."
  },
  {
    id: "optScoreCopy",
    label: "Tombol Salin Bukti Skor (Google Form)",
    checked: true,
    modes: ["simulasi", "game", "skenario"],
    rule: "Pada layar akhir, sediakan tombol 'Salin Bukti Belajar' ke clipboard (dengan fallback execCommand agar berjalan di sandbox Google Sites) berisi nama/topik, skor, dan kode validasi unik untuk ditempel siswa ke Google Form."
  },
  {
    id: "optA11y",
    label: "Tombol Layar Penuh & Ukuran Teks",
    checked: true,
    modes: ["simulasi", "game", "skenario"],
    rule: "Sediakan bilah atas ringkas berisi tombol Layar Penuh (Fullscreen Toggle) dan pengatur ukuran huruf (A- / A+)."
  },
  {
    id: "optHints",
    label: "Petunjuk Bertahap saat Siswa Salah",
    checked: true,
    modes: ["simulasi", "game", "skenario"],
    rule: "Sediakan petunjuk bertahap (progressive hints) dan pembahasan singkat setiap kali siswa melakukan kesalahan."
  },
  {
    id: "optTTS",
    label: "Pembaca Teks Suara (TTS Indonesia)",
    checked: false,
    modes: ["simulasi", "game", "skenario"],
    rule: "Sertakan fitur pembaca teks otomatis/klik (Text-to-Speech via Web Speech API) pada instruksi dan soal/kartu materi."
  },
  {
    id: "optDataTable",
    label: "Tabel Data Pengamatan Otomatis",
    checked: false,
    modes: ["simulasi"],
    rule: "Sediakan tombol 'Catat Data ke Tabel' dan tabel log pengamatan otomatis di panel samping untuk merekam hasil percobaan variabel siswa beserta tombol salin tabel."
  },
  {
    id: "optCapturePng",
    label: "Unduh Bukti Simulasi/Sertifikat (PNG)",
    checked: false,
    modes: ["simulasi", "game", "skenario"],
    rule: "Sediakan tombol 'Simpan Gambar Hasil (PNG)' menggunakan konversi Canvas lokal agar siswa dapat mengunduh bukti hasil percobaan/skor tanpa perlu koneksi server."
  },
  {
    id: "optHighContrast",
    label: "Dukungan Mode Kontras Tinggi",
    checked: false,
    modes: ["simulasi", "game", "skenario"],
    rule: "Sediakan tombol pengalih Mode Kontras Tinggi untuk meningkatkan keterbacaan teks."
  }
];
