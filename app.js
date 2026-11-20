/* =========================================================================
   STATE APLIKASI & REFERENSI DOM
   ========================================================================= */

const state = {
  generatorType: "simulasi", // "simulasi" | "game" | "skenario" | "custom_gen"
  stage: "sma",
  gradeId: "sma10",         // bisa berisi ID kelas atau "__manual__"
  subject: "fisika",         // bisa berisi key mapel atau "__manual__"
  mechanicId: "simulasi_mekanika", // bisa berisi ID mekanika atau "__manual__"
  subOptionId: "alur_4_tahap",     // bisa berisi key sub-opsi atau "__manual__"
  promptMode: "single",
  iterStep: 0,
  featureStates: {}
};

EXTRA_FEATURES.forEach((f) => {
  state.featureStates[f.id] = f.checked;
});

const HISTORY_KEY = "gp_edu_manual_history_v1";

const els = {
  generatorTypeGrid: document.getElementById("generatorTypeGrid"),
  customGenWrap: document.getElementById("customGenWrap"),
  customGenInput: document.getElementById("customGenInput"),

  stageGrid: document.getElementById("stageGrid"),
  customStageWrap: document.getElementById("customStageWrap"),
  customStageInput: document.getElementById("customStageInput"),

  gradePills: document.getElementById("gradePills"),
  customGradeWrap: document.getElementById("customGradeWrap"),
  customGradeInput: document.getElementById("customGradeInput"),
  levelBadge: document.getElementById("levelBadge"),

  subjectStageTag: document.getElementById("subjectStageTag"),
  subjectGrid: document.getElementById("subjectGrid"),
  customSubjectWrap: document.getElementById("customSubjectWrap"),
  customSubjectLabel: document.getElementById("customSubjectLabel"),
  customSubjectInput: document.getElementById("customSubjectInput"),

  topicInput: document.getElementById("topicInput"),
  objectiveInput: document.getElementById("objectiveInput"),

  step5Title: document.getElementById("step5Title"),
  mechanicSubLabel: document.getElementById("mechanicSubLabel"),
  mechanicGrid: document.getElementById("mechanicGrid"),
  customMechanicWrap: document.getElementById("customMechanicWrap"),
  customMechanicInput: document.getElementById("customMechanicInput"),

  detailLabel: document.getElementById("detailLabel"),
  mechanicDetail: document.getElementById("mechanicDetail"),

  subOptionLabel: document.getElementById("subOptionLabel"),
  subOptionGrid: document.getElementById("subOptionGrid"),
  customSubOptionWrap: document.getElementById("customSubOptionWrap"),
  customSubOptionInput: document.getElementById("customSubOptionInput"),

  misconceptionInput: document.getElementById("misconceptionInput"),
  featureToggles: document.getElementById("featureToggles"),
  customFeatureInput: document.getElementById("customFeatureInput"),

  activeChips: document.getElementById("activeChips"),
  precisionScoreText: document.getElementById("precisionScoreText"),
  precisionBarFill: document.getElementById("precisionBarFill"),
  precisionTip: document.getElementById("precisionTip"),
  iterTabs: document.getElementById("iterTabs"),
  promptOutput: document.getElementById("promptOutput"),
  charCount: document.getElementById("charCount"),

  btnCopyPrompt: document.getElementById("btnCopyPrompt"),
  btnSaveHistory: document.getElementById("btnSaveHistory"),
  btnDownloadTxt: document.getElementById("btnDownloadTxt"),
  btnLoadPreset: document.getElementById("btnLoadPreset"),
  btnLoadPresetInline: document.getElementById("btnLoadPresetInline"),
  btnResetForm: document.getElementById("btnResetForm"),
  btnClearHistory: document.getElementById("btnClearHistory"),
  historyList: document.getElementById("historyList"),
  toast: document.getElementById("toast")
};

/* =========================================================================
   HELPER GETTERS (MENGAKOMODASI PILIHAN PRESET MAUPUN MANUAL)
   ========================================================================= */

function getDisplayGenTitle() {
  const gt = GENERATOR_TYPES[state.generatorType];
  if (gt.isManual) {
    const manual = els.customGenInput.value.trim();
    return manual || "Media Pembelajaran Interaktif Kustom";
  }
  return gt.title;
}

function getDisplayStageAndGrade() {
  const stageObj = STAGE_DATA[state.stage];
  const stageText = stageObj.isManual
    ? (els.customStageInput.value.trim() || "Jenjang Kustom")
    : stageObj.short;

  let gradeText = "";
  if (state.gradeId === "__manual__") {
    gradeText = els.customGradeInput.value.trim() || "Kelas/Tingkat Manual";
  } else {
    const found = stageObj.grades.find((g) => g.id === state.gradeId) || stageObj.grades[0];
    gradeText = found.label;
  }

  return `${stageText} — ${gradeText}`;
}

function getCurrentCognitiveProfile() {
  if (state.stage === "lainnya" || state.gradeId === "__manual__") {
    return COGNITIVE_PROFILES.umum_manual;
  }
  const stageObj = STAGE_DATA[state.stage];
  const found = stageObj.grades.find((g) => g.id === state.gradeId) || stageObj.grades[0];
  return COGNITIVE_PROFILES[found.profile] || COGNITIVE_PROFILES.umum_manual;
}

function getDisplaySubjectName() {
  if (state.subject === "__manual__") {
    const manual = els.customSubjectInput.value.trim();
    return manual || "Mata Pelajaran Manual";
  }
  const subj = SUBJECT_CATALOG[state.subject];
  if (subj.isCustomVocational) {
    const custom = els.customSubjectInput.value.trim();
    return custom ? `Kejuruan SMK — ${custom}` : "Kejuruan / Produktif SMK";
  }
  return subj.name;
}

function getAvailableMechanics() {
  if (state.generatorType === "game") {
    return GAME_MECHANICS;
  }
  const baseList = state.subject === "__manual__"
    ? [
        {
          id: "eksplorasi_visual",
          label: "Eksplorasi Visual & Hotspot Interaktif",
          desc: "Diagram/ilustrasi interaktif yang dapat diklik, digeser, atau diubah parameternya.",
          spec: "Bangun visualisasi interaktif berbasis SVG/Canvas dengan kontrol parameter dan titik informasi yang merespons tindakan siswa secara real-time."
        },
        {
          id: "klasifikasi_kartu",
          label: "Papan Sortir & Klasifikasi (Drag & Drop)",
          desc: "Mengelompokkan kartu konsep/kasus ke kategori yang tepat dengan umpan balik instan.",
          spec: "Bangun papan kategorisasi drag-and-drop kartu materi ke dalam kolom kategori yang sesuai lengkap dengan alasan umpan balik otomatis."
        }
      ]
    : SUBJECT_CATALOG[state.subject].interactivities;

  if (state.generatorType === "skenario") {
    return [
      ...baseList,
      {
        id: "dilema_universal",
        label: "Studi Kasus Dilema & Pengambilan Keputusan",
        desc: "Alur cerita bercabang dengan 3 pilihan tindakan dan analisis dampaknya.",
        spec: "Bangun simulasi studi kasus bercabang di mana siswa menghadapi situasi nyata dan memilih satu dari 3 tindakan pada tiap babak, lalu melihat dampak logis dan nilai karakternya."
      }
    ];
  }
  return baseList;
}

/* =========================================================================
   RENDER KOMPONEN ANTARMUKA
   ========================================================================= */

function renderGeneratorTypes() {
  els.generatorTypeGrid.innerHTML = "";
  Object.values(GENERATOR_TYPES).forEach((gt) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className =
      "gen-type-card" +
      (gt.isManual ? " is-manual" : "") +
      (gt.id === state.generatorType ? " active" : "");
    card.innerHTML = `
      <span class="gen-type-badge">${gt.badge}</span>
      <strong>${gt.title}</strong>
      <span>${gt.desc}</span>
    `;
    card.addEventListener("click", () => {
      state.generatorType = gt.id;
      const subKeys = Object.keys(gt.subOptions);
      if (state.subOptionId !== "__manual__") {
        state.subOptionId = subKeys[0];
      }
      renderGeneratorTypes();
      renderStep5Section();
      renderFeatureToggles();
      updateAll();
    });
    els.generatorTypeGrid.appendChild(card);
  });

  els.customGenWrap.classList.toggle("show", Boolean(GENERATOR_TYPES[state.generatorType].isManual));
}

function renderStages() {
  els.stageGrid.innerHTML = "";
  Object.entries(STAGE_DATA).forEach(([key, item]) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className =
      "stage-btn" +
      (item.isManual ? " is-manual" : "") +
      (key === state.stage ? " active" : "");
    btn.innerHTML = `<strong>${item.short}</strong><span>${item.sub}</span>`;
    btn.addEventListener("click", () => {
      state.stage = key;
      state.gradeId = STAGE_DATA[key].grades[0].id;
      const availableSubjects = STAGE_DATA[key].subjects;
      if (state.subject !== "__manual__" && !availableSubjects.includes(state.subject)) {
        state.subject = availableSubjects[0];
      }
      renderStages();
      renderGrades(true);
      renderSubjects();
      renderStep5Section();
      updateAll();
    });
    els.stageGrid.appendChild(btn);
  });

  els.customStageWrap.classList.toggle("show", Boolean(STAGE_DATA[state.stage].isManual));
}

function renderGrades(applyAutoTTS = false) {
  const grades = STAGE_DATA[state.stage].grades;
  if (state.gradeId !== "__manual__" && !grades.some((g) => g.id === state.gradeId)) {
    state.gradeId = grades[0].id;
  }

  els.gradePills.innerHTML = "";
  grades.forEach((g) => {
    const pill = document.createElement("button");
    pill.type = "button";
    pill.className = "grade-pill" + (g.id === state.gradeId ? " active" : "");
    pill.textContent = g.label;
    pill.addEventListener("click", () => {
      state.gradeId = g.id;
      renderGrades(true);
      updateAll();
    });
    els.gradePills.appendChild(pill);
  });

  // Tambah Pil Manual
  const manualPill = document.createElement("button");
  manualPill.type = "button";
  manualPill.className = "grade-pill is-manual" + (state.gradeId === "__manual__" ? " active" : "");
  manualPill.textContent = "+ Isi Kelas Manual";
  manualPill.addEventListener("click", () => {
    state.gradeId = "__manual__";
    renderGrades(false);
    updateAll();
  });
  els.gradePills.appendChild(manualPill);

  els.customGradeWrap.classList.toggle("show", state.gradeId === "__manual__");

  const profile = getCurrentCognitiveProfile();
  els.levelBadge.textContent = profile.badge;
  if (applyAutoTTS) {
    state.featureStates.optTTS = profile.autoTTS;
    renderFeatureToggles();
  }
}

function renderSubjects() {
  const stageObj = STAGE_DATA[state.stage];
  const availableKeys = stageObj.subjects;
  if (state.subject !== "__manual__" && !availableKeys.includes(state.subject)) {
    state.subject = availableKeys[0];
  }

  els.subjectStageTag.textContent = stageObj.isManual
    ? "Pilih Mapel atau Isi Manual"
    : `Kurikulum ${stageObj.short}`;
  els.subjectGrid.innerHTML = "";

  availableKeys.forEach((key) => {
    const item = SUBJECT_CATALOG[key];
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "subject-card" + (key === state.subject ? " active" : "");
    btn.innerHTML = `
      <div class="subject-code">${item.code}</div>
      <div class="subject-info">
        <strong>${item.name}</strong>
        <span>${item.sub}</span>
      </div>
    `;
    btn.addEventListener("click", () => {
      state.subject = key;
      renderSubjects();
      renderStep5Section();
      updateAll();
    });
    els.subjectGrid.appendChild(btn);
  });

  // Kartu Tambah Mapel Manual di setiap jenjang
  const manualBtn = document.createElement("button");
  manualBtn.type = "button";
  manualBtn.className = "subject-card is-manual" + (state.subject === "__manual__" ? " active" : "");
  manualBtn.innerHTML = `
    <div class="subject-code">+</div>
    <div class="subject-info">
      <strong>Mapel Lainnya (Manual)</strong>
      <span>Ketik nama mapel sendiri</span>
    </div>
  `;
  manualBtn.addEventListener("click", () => {
    state.subject = "__manual__";
    renderSubjects();
    renderStep5Section();
    updateAll();
  });
  els.subjectGrid.appendChild(manualBtn);

  const isManualSubj = state.subject === "__manual__";
  const isVocational = !isManualSubj && Boolean(SUBJECT_CATALOG[state.subject].isCustomVocational);

  if (isVocational) {
    els.customSubjectLabel.textContent = "Nama Konsentrasi Keahlian / Mapel Produktif SMK";
    els.customSubjectInput.placeholder = "Contoh: Teknik Kendaraan Ringan, Akuntansi, TJKT, atau Tata Boga";
  } else {
    els.customSubjectLabel.textContent = "Tulis Nama Mata Pelajaran / Bidang Kajian Secara Manual";
    els.customSubjectInput.placeholder = "Contoh: Bahasa Daerah, Bahasa Arab, Antropologi, atau Bimbingan Konseling";
  }

  els.customSubjectWrap.classList.toggle("show", isManualSubj || isVocational);
}

function renderStep5Section() {
  const gt = GENERATOR_TYPES[state.generatorType];
  const subjName = getDisplaySubjectName();

  els.step5Title.innerHTML = `<span class="step-badge">5</span>${gt.step5Title}`;
  els.mechanicSubLabel.textContent =
    state.generatorType === "game"
      ? gt.mechanicLabel
      : `${gt.mechanicLabel} (${subjName})`;
  els.detailLabel.textContent = gt.detailLabel;
  els.mechanicDetail.placeholder = gt.detailPlaceholder;
  els.subOptionLabel.textContent = gt.subOptionLabel;

  // Render Mekanika + Opsi Manual
  const mechanics = getAvailableMechanics();
  if (state.mechanicId !== "__manual__" && !mechanics.some((m) => m.id === state.mechanicId)) {
    state.mechanicId = mechanics[0].id;
  }

  els.mechanicGrid.innerHTML = "";
  mechanics.forEach((item) => {
    const card = document.createElement("label");
    card.className = "option-card" + (item.id === state.mechanicId ? " active" : "");
    card.innerHTML = `
      <input type="radio" name="mechanic" value="${item.id}" ${item.id === state.mechanicId ? "checked" : ""} />
      <div>
        <strong>${item.label}</strong>
        <span>${item.desc}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      state.mechanicId = item.id;
      renderStep5Section();
      updateAll();
    });
    els.mechanicGrid.appendChild(card);
  });

  // Kartu Mekanika Manual
  const manualMechCard = document.createElement("label");
  manualMechCard.className = "option-card is-manual" + (state.mechanicId === "__manual__" ? " active" : "");
  manualMechCard.innerHTML = `
    <input type="radio" name="mechanic" value="__manual__" ${state.mechanicId === "__manual__" ? "checked" : ""} />
    <div>
      <strong>+ Mekanika Interaksi Manual</strong>
      <span>Tulis sendiri cara siswa berinteraksi atau bermain.</span>
    </div>
  `;
  manualMechCard.addEventListener("click", () => {
    state.mechanicId = "__manual__";
    renderStep5Section();
    updateAll();
  });
  els.mechanicGrid.appendChild(manualMechCard);
  els.customMechanicWrap.classList.toggle("show", state.mechanicId === "__manual__");

  // Render Sub-Opsi + Opsi Manual
  const subKeys = Object.keys(gt.subOptions);
  if (state.subOptionId !== "__manual__" && !subKeys.includes(state.subOptionId)) {
    state.subOptionId = subKeys[0];
  }

  els.subOptionGrid.innerHTML = "";
  Object.entries(gt.subOptions).forEach(([key, item]) => {
    const card = document.createElement("label");
    card.className = "option-card" + (key === state.subOptionId ? " active" : "");
    card.innerHTML = `
      <input type="radio" name="subOption" value="${key}" ${key === state.subOptionId ? "checked" : ""} />
      <div>
        <strong>${item.label}</strong>
        <span>${item.desc}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      state.subOptionId = key;
      renderStep5Section();
      updateAll();
    });
    els.subOptionGrid.appendChild(card);
  });

  // Kartu Format Manual
  const manualSubCard = document.createElement("label");
  manualSubCard.className = "option-card is-manual" + (state.subOptionId === "__manual__" ? " active" : "");
  manualSubCard.innerHTML = `
    <input type="radio" name="subOption" value="__manual__" ${state.subOptionId === "__manual__" ? "checked" : ""} />
    <div>
      <strong>+ Format Alur / Tata Letak Manual</strong>
      <span>Tulis sendiri pembagian layar atau mode permainannya.</span>
    </div>
  `;
  manualSubCard.addEventListener("click", () => {
    state.subOptionId = "__manual__";
    renderStep5Section();
    updateAll();
  });
  els.subOptionGrid.appendChild(manualSubCard);
  els.customSubOptionWrap.classList.toggle("show", state.subOptionId === "__manual__");
}

function renderFeatureToggles() {
  els.featureToggles.innerHTML = "";
  const relevantFeatures = EXTRA_FEATURES.filter((f) => f.modes.includes(state.generatorType));

  relevantFeatures.forEach((feat) => {
    const label = document.createElement("label");
    label.className = "toggle-item";
    const isChecked = Boolean(state.featureStates[feat.id]);
    label.innerHTML = `
      <input type="checkbox" data-feat-id="${feat.id}" ${isChecked ? "checked" : ""} />
      <span>${feat.label}</span>
    `;
    const input = label.querySelector("input");
    input.addEventListener("change", () => {
      state.featureStates[feat.id] = input.checked;
      updateAll();
    });
    els.featureToggles.appendChild(label);
  });
}

function renderActiveChips() {
  const mechLabel =
    state.mechanicId === "__manual__"
      ? "Mekanika Manual"
      : (getAvailableMechanics().find((m) => m.id === state.mechanicId) || getAvailableMechanics()[0]).label;

  els.activeChips.innerHTML = `
    <span class="chip chip-dark">${escapeHtml(getDisplayGenTitle())}</span>
    <span class="chip">${escapeHtml(getDisplayStageAndGrade())}</span>
    <span class="chip">${escapeHtml(getDisplaySubjectName())}</span>
    <span class="chip">${escapeHtml(mechLabel)}</span>
  `;
}

/* =========================================================================
   PERAKITAN PROMPT & METERAN PRESISI
   ========================================================================= */

function getTechnicalGuardrails() {
  const rules = [
    "Hasilkan dalam SATU berkas HTML tunggal mandiri (HTML, CSS, dan Vanilla JavaScript digabung) tanpa pustaka eksternal, tanpa link CDN, tanpa file gambar/audio luar.",
    "Kunci tinggi tata letak pas satu layar (100vh) tanpa scrollbar vertikal agar tidak terjadi double-scrollbar saat disematkan di fitur 'Sematkan Kode' Google Sites, serta responsif penuh (menyamping di layar lebar/Chromebook, menumpuk rapi di layar ponsel).",
    "Bangun seluruh ilustrasi, karakter, ikon, dan visualisasi menggunakan vektor SVG internal atau Kanvas HTML5 yang tajam dan bersih dengan palet warna cerah netral agar menyatu dengan Google Sites.",
    "Pastikan seluruh interaksi (klik, slider, drag-and-drop) mendukung penuh Pointer/Touch Events untuk layar sentuh ponsel dengan ukuran target sentuh minimal 44x44px.",
    "Gunakan penyimpanan memori sesi (in-memory state) dengan cadangan try-catch aman agar aplikasi tidak macet jika LocalStorage diblokir oleh sandbox iframe Google Sites."
  ];

  if (state.generatorType === "game") {
    rules.push("WAJIB letakkan seluruh data soal/tantangan dalam satu variabel konstanta Array of Objects bernama `const BANK_SOAL = [...]` (minimal 12–15 butir soal bervariasi) di bagian paling atas tag `<script>` dengan komentar panduan singkat agar guru mudah mengganti atau menambah soal sendiri.");
  }

  EXTRA_FEATURES.forEach((feat) => {
    if (feat.modes.includes(state.generatorType) && state.featureStates[feat.id]) {
      rules.push(feat.rule);
    }
  });

  const customFeat = els.customFeatureInput.value.trim();
  if (customFeat) {
    rules.push(`Instruksi Khusus Tambahan dari Guru: ${customFeat}`);
  }

  return rules;
}

function buildPromptBundle() {
  const gt = GENERATOR_TYPES[state.generatorType];
  const profile = getCurrentCognitiveProfile();
  const displayGenTitle = getDisplayGenTitle();
  const fullLevelLabel = getDisplayStageAndGrade();
  const displaySubject = getDisplaySubjectName();

  const topic = els.topicInput.value.trim() || "[ISI TOPIK MATERI DI SINI]";
  const objective = els.objectiveInput.value.trim() || "[ISI TUJUAN PEMBELAJARAN DI SINI]";
  const detail = els.mechanicDetail.value.trim();
  const misconception = els.misconceptionInput.value.trim();
  const techRules = getTechnicalGuardrails();

  // Mekanika (Preset atau Manual)
  let mechLabel = "";
  let mechSpec = "";
  if (state.mechanicId === "__manual__") {
    mechLabel = "Mekanika Interaksi Kustom";
    mechSpec = els.customMechanicInput.value.trim() || "[ISI DESKRIPSI INTERAKTIVITAS MANUAL DI SINI]";
  } else {
    const foundMech = getAvailableMechanics().find((m) => m.id === state.mechanicId) || getAvailableMechanics()[0];
    mechLabel = foundMech.label;
    mechSpec = foundMech.spec;
  }

  // Format / Sub-Opsi (Preset atau Manual)
  let subOptLabel = "";
  let subOptionRulesText = "";
  if (state.subOptionId === "__manual__") {
    subOptLabel = "Format Tata Letak & Alur Kustom";
    const manualFormatText = els.customSubOptionInput.value.trim() || "[ISI FORMAT TATA LETAK & ALUR BELAJAR MANUAL DI SINI]";
    subOptionRulesText = `- Bangun struktur tampilan dan alur interaksi sesuai rancangan khusus guru berikut di dalam satu viewport (100vh): ${manualFormatText}`;
  } else {
    const subOpt = gt.subOptions[state.subOptionId] || Object.values(gt.subOptions)[0];
    subOptLabel = subOpt.label;
    subOptionRulesText = subOpt.spec.map((r) => `- ${r}`).join("\n");
  }

  const headerContext = [
    `JENIS MEDIA: ${displayGenTitle}`,
    `KONTEKS KURIKULUM:`,
    `- Jenjang & Kelas: ${fullLevelLabel}`,
    `- Mata Pelajaran: ${displaySubject}`,
    `- Topik Materi: ${topic}`,
    `- Tujuan Pembelajaran: ${objective}`
  ].join("\n");

  const levelRulesText = profile.promptSpec.map((r) => `- ${r}`).join("\n");
  const techRulesText = techRules.map((r) => `- ${r}`).join("\n");

  const mechanicBlock = [
    `SPESIFIKASI MEKANIKA UTAMA (${mechLabel}):`,
    `- Konsep Interaksi: ${mechSpec}`,
    detail ? `- Detail Variabel / Objek / Aturan Guru: ${detail}` : `- Rancang variabel, objek visual, dan konten soal/skenario yang paling representatif untuk topik "${topic}".`,
    misconception ? `- Akurasi Konsep & Pencegahan Miskonsepsi (WAJIB DIPATUHI): ${misconception}` : `- Pastikan seluruh rumus, fakta keilmuan, urutan prosedural, dan kunci jawaban 100% akurat sesuai kurikulum Indonesia.`
  ].join("\n");

  const single = [
    `Bertindaklah sebagai ahli pengembang media pembelajaran interaktif berbasis web (HTML5/SVG/JS) dan desainer instruksional profesional. Buatkan "${displayGenTitle}" yang siap langsung disematkan di fitur "Sematkan Kode" (Embed HTML) Google Sites dengan spesifikasi berikut:`,
    ``,
    headerContext,
    ``,
    `PENYESUAIAN KARAKTERISTIK JENJANG (${fullLevelLabel}):`,
    levelRulesText,
    ``,
    mechanicBlock,
    ``,
    `STRUKTUR & FORMAT (${subOptLabel}):`,
    subOptionRulesText,
    ``,
    `BATASAN TEKNIS SANDBOX GOOGLE SITES (WAJIB):`,
    techRulesText,
    ``,
    `INSTRUKSI OUTPUT:`,
    `- Berikan kode HTML lengkap dari <!DOCTYPE html> hingga </html> dalam satu blok kode utuh tanpa potongan atau placeholder "// lanjutkan di sini".`,
    `- Pastikan tidak ada error konsol JavaScript dan seluruh tombol bekerja sejak klik pertama.`
  ].join("\n");

  const p1 = [
    `[PUTARAN 1 DARI 3 — KERANGKA & MEKANIKA INTI]`,
    `Bertindaklah sebagai ahli pengembang media pembelajaran interaktif berbasis web dan desainer instruksional. Kita akan membangun "${displayGenTitle}" mandiri (1 file HTML tunggal) untuk disematkan langsung di Google Sites secara bertahap agar kode rapi dan bebas bug.`,
    ``,
    headerContext,
    ``,
    `Pada Putaran 1 ini, fokuslah membangun antarmuka utama dan MEKANIKA INTI terlebih dahulu sampai akurat dan mulus:`,
    mechanicBlock,
    ``,
    `PENYESUAIAN JENJANG (${fullLevelLabel}):`,
    levelRulesText,
    ``,
    `ATURAN DASAR PUTARAN 1:`,
    `- Gunakan 1 file HTML tunggal (Vanilla HTML/CSS/JS, tanpa pustaka luar, ilustrasi SVG/Canvas internal).`,
    `- Kunci tinggi kontainer pas 100vh tanpa scrollbar vertikal dan responsif desktop/ponsel.`,
    state.generatorType === "game" ? `- Siapkan struktur \`const BANK_SOAL = [...]\` berisi 12–15 soal akurat di bagian atas skrip.` : `- Fokus pastikan mekanika interaktif/simulasi utamanya bekerja 100% akurat secara konsep.`
  ].join("\n");

  const p2 = [
    `[PUTARAN 2 DARI 3 — STRUKTUR ALUR & SISTEM UMPAN BALIK]`,
    `Bagus! Sekarang kembangkan kode dari Putaran 1 dengan membungkus mekanika inti tersebut ke dalam struktur utuh (${subOptLabel}):`,
    ``,
    subOptionRulesText,
    ``,
    `TAMBAHAN PUTARAN 2:`,
    state.featureStates.optHints ? `- Tambahkan petunjuk bertahap (progressive hints) dan pembahasan singkat saat siswa melakukan kesalahan.` : `- Berikan umpan balik singkat dan jelas (benar/salah beserta alasan) pada setiap aksi.`,
    misconception ? `- Pastikan evaluasi/tantangan menguji pemahaman terkait hal ini: ${misconception}` : `- Pastikan evaluasi/tantangan benar-benar menguji tujuan pembelajaran: ${objective}`,
    `- Berikan kode HTML utuh terbaru yang sudah menggabungkan Putaran 1 dan Putaran 2 tanpa menyingkat kode.`
  ].join("\n");

  const p3 = [
    `[PUTARAN 3 DARI 3 — POLES AKSESIBILITAS & KETAHANAN SANDBOX GOOGLE SITES]`,
    `Sebagai tahap penyempurnaan akhir, audit dan tingkatkan kode utuh dari Putaran 2 agar 100% tangguh saat ditempel di fitur "Sematkan Kode" (Embed HTML) Google Sites:`,
    ``,
    techRulesText,
    ``,
    `PEMERIKSAAN AKHIR:`,
    `- Pastikan tidak ada elemen yang terpotong (overflow) pada layar kecil 360x640px maupun bingkai iframe 16:9.`,
    `- Pastikan seluruh interaksi drag/slider/tombol bekerja lancar di layar sentuh ponsel (touch/pointer events).`,
    `- Berikan versi final kode HTML lengkap dari <!DOCTYPE html> sampai </html> yang siap langsung disalin-tempel ke Google Sites.`
  ].join("\n");

  return { single, iterative: [p1, p2, p3] };
}

function updatePrecisionMeter() {
  let score = 20;
  const missing = [];

  if (GENERATOR_TYPES[state.generatorType].isManual && els.customGenInput.value.trim().length < 3) {
    missing.push("Jenis Media Manual");
  }
  if (STAGE_DATA[state.stage].isManual && els.customStageInput.value.trim().length < 2) {
    missing.push("Nama Jenjang Manual");
  }
  if (state.gradeId === "__manual__" && els.customGradeInput.value.trim().length < 2) {
    missing.push("Kelas/Fase Manual");
  }
  if ((state.subject === "__manual__" || SUBJECT_CATALOG[state.subject]?.isCustomVocational) && els.customSubjectInput.value.trim().length < 3) {
    missing.push("Nama Mata Pelajaran/Kejuruan");
  }
  if (state.mechanicId === "__manual__" && els.customMechanicInput.value.trim().length < 8) {
    missing.push("Deskripsi Mekanika Manual");
  }
  if (state.subOptionId === "__manual__" && els.customSubOptionInput.value.trim().length < 8) {
    missing.push("Format Tata Letak Manual");
  }

  if (els.topicInput.value.trim().length >= 4) score += 25;
  else missing.push("Topik Materi");

  if (els.objectiveInput.value.trim().length >= 15) score += 25;
  else missing.push("Tujuan Pembelajaran");

  if (els.mechanicDetail.value.trim().length >= 15 || (state.mechanicId === "__manual__" && els.customMechanicInput.value.trim().length >= 15)) {
    score += 20;
  } else {
    missing.push("Detail Variabel/Aturan");
  }

  if (els.misconceptionInput.value.trim().length >= 10) score += 10;
  else missing.push("Kunci Materi/Miskonsepsi");

  els.precisionScoreText.textContent = `${score}%`;
  els.precisionBarFill.style.width = `${score}%`;

  if (score >= 90 && missing.length === 0) {
    els.precisionBarFill.style.backgroundColor = "var(--success)";
    els.precisionTip.textContent = "Sangat presisi! Prompt sudah lengkap dan siap menghasilkan media akurat.";
  } else if (score >= 70) {
    els.precisionBarFill.style.backgroundColor = "var(--primary)";
    els.precisionTip.textContent = missing.length
      ? `Sudah baik. Lengkapi ${missing.slice(0, 2).join(", ")} untuk hasil maksimal.`
      : "Sudah baik dan siap digunakan.";
  } else {
    els.precisionBarFill.style.backgroundColor = "var(--warning)";
    els.precisionTip.textContent = `Perlu dilengkapi: ${missing.slice(0, 2).join(" & ")} agar hasil AI presisi.`;
  }
}

function updateAll() {
  renderActiveChips();
  const bundle = buildPromptBundle();
  const text = state.promptMode === "single" ? bundle.single : bundle.iterative[state.iterStep];
  els.promptOutput.value = text;
  els.charCount.textContent = `${text.length.toLocaleString("id-ID")} karakter`;
  updatePrecisionMeter();
}

/* =========================================================================
   UTILITAS SALIN, UNDUH, PRESET, & RIWAYAT LOKAL
   ========================================================================= */

let toastTimer;
function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2600);
}

async function copyText(text) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.appendChild(temp);
  temp.select();
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }
  document.body.removeChild(temp);
  return ok;
}

function safeStorageGet(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderHistory() {
  const list = safeStorageGet(HISTORY_KEY);
  if (!list.length) {
    els.historyList.innerHTML = `<div class="hint">Belum ada prompt tersimpan di perangkat ini.</div>`;
    return;
  }
  els.historyList.innerHTML = "";
  list.forEach((item) => {
    const div = document.createElement("div");
    div.className = "history-item";
    div.innerHTML = `
      <div class="history-meta">
        <strong>${escapeHtml(item.topic)}</strong>
        <span>${escapeHtml(item.genTitle)} &bull; ${escapeHtml(item.subjectName)} &bull; ${escapeHtml(item.date)}</span>
      </div>
      <div class="history-actions">
        <button type="button" class="btn btn-soft btn-sm" data-copy-id="${item.id}">Salin</button>
        <button type="button" class="btn btn-outline btn-sm" data-del-id="${item.id}">Hapus</button>
      </div>
    `;
    els.historyList.appendChild(div);
  });

  els.historyList.querySelectorAll("[data-copy-id]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const found = safeStorageGet(HISTORY_KEY).find((x) => x.id === btn.dataset.copyId);
      if (found) {
        await copyText(found.promptText);
        showToast("Prompt dari riwayat disalin!");
      }
    });
  });

  els.historyList.querySelectorAll("[data-del-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const filtered = safeStorageGet(HISTORY_KEY).filter((x) => x.id !== btn.dataset.delId);
      safeStorageSet(HISTORY_KEY, filtered);
      renderHistory();
      showToast("Riwayat dihapus.");
    });
  });
}

function loadPresetForCurrentSubject() {
  if (state.subject === "__manual__") {
    els.customSubjectInput.value = "Bahasa Daerah (Jawa)";
    els.topicInput.value = "Mengenal Aksara Jawa Nglegena dan Sandhangan Swara";
    els.objectiveInput.value = "Siswa mampu membaca dan menyusun kata sederhana menggunakan aksara Jawa nglegena serta sandhangan wulu, suku, taling, dan pepet.";
    els.mechanicDetail.value = "Sediakan papan aksara Jawa klik-susun beserta pratinjau bunyi suku katanya secara otomatis.";
    els.misconceptionInput.value = "Bedakan pengucapan taling (é) dengan pepet (ê).";
    updateAll();
    showToast("Contoh mapel manual dimuat.");
    return;
  }

  const subj = SUBJECT_CATALOG[state.subject];
  const preset = subj.preset;
  if (subj.isCustomVocational && preset.customName) {
    els.customSubjectInput.value = preset.customName;
  }
  els.topicInput.value = preset.topic;
  els.objectiveInput.value = preset.objective;
  els.mechanicDetail.value = preset.detail;
  els.misconceptionInput.value = preset.misconception;
  updateAll();
  showToast(`Contoh ${subj.name} dimuat.`);
}

/* =========================================================================
   EVENT LISTENERS
   ========================================================================= */

[
  els.customGenInput,
  els.customStageInput,
  els.customGradeInput,
  els.customSubjectInput,
  els.topicInput,
  els.objectiveInput,
  els.customMechanicInput,
  els.mechanicDetail,
  els.customSubOptionInput,
  els.misconceptionInput,
  els.customFeatureInput
].forEach((el) => {
  el.addEventListener("input", updateAll);
});

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.promptMode = btn.dataset.mode;
    document.querySelectorAll(".mode-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    els.iterTabs.classList.toggle("show", state.promptMode === "iterative");
    updateAll();
  });
});

document.querySelectorAll(".iter-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    state.iterStep = Number(tab.dataset.step);
    document.querySelectorAll(".iter-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateAll();
  });
});

els.btnCopyPrompt.addEventListener("click", async () => {
  const ok = await copyText(els.promptOutput.value);
  if (ok) {
    const label = state.promptMode === "single"
      ? "Prompt berhasil disalin! Tempel di Gemini AI."
      : `Prompt Putaran ${state.iterStep + 1} disalin!`;
    showToast(label);
  } else {
    showToast("Gagal menyalin otomatis. Silakan blok teks dan tekan Ctrl+C.");
  }
});

els.btnSaveHistory.addEventListener("click", () => {
  const topic = els.topicInput.value.trim() || "Tanpa Judul";
  const list = safeStorageGet(HISTORY_KEY);
  const entry = {
    id: "h_" + Date.now(),
    topic,
    genTitle: getDisplayGenTitle(),
    subjectName: getDisplaySubjectName(),
    date: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short" }),
    promptText: els.promptOutput.value
  };
  list.unshift(entry);
  const saved = safeStorageSet(HISTORY_KEY, list.slice(0, 15));
  if (saved) {
    renderHistory();
    showToast("Prompt disimpan ke riwayat lokal.");
  } else {
    showToast("Penyimpanan lokal dibatasi peramban; gunakan tombol Unduh .txt.");
  }
});

els.btnDownloadTxt.addEventListener("click", () => {
  const topicSlug = (els.topicInput.value.trim() || "prompt-media")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  const blob = new Blob([els.promptOutput.value], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${topicSlug || "prompt-media"}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Berkas .txt berhasil diunduh.");
});

els.btnLoadPreset.addEventListener("click", loadPresetForCurrentSubject);
els.btnLoadPresetInline.addEventListener("click", loadPresetForCurrentSubject);

els.btnResetForm.addEventListener("click", () => {
  els.customGenInput.value = "";
  els.customStageInput.value = "";
  els.customGradeInput.value = "";
  els.customSubjectInput.value = "";
  els.topicInput.value = "";
  els.objectiveInput.value = "";
  els.customMechanicInput.value = "";
  els.mechanicDetail.value = "";
  els.customSubOptionInput.value = "";
  els.misconceptionInput.value = "";
  els.customFeatureInput.value = "";
  updateAll();
  showToast("Formulir dikosongkan.");
});

els.btnClearHistory.addEventListener("click", () => {
  safeStorageSet(HISTORY_KEY, []);
  renderHistory();
  showToast("Semua riwayat dihapus.");
});

// Inisialisasi Awal
renderGeneratorTypes();
renderStages();
renderGrades(false);
renderSubjects();
renderStep5Section();
renderFeatureToggles();
renderHistory();
updateAll();
