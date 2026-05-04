// ============================================
// helpLayer.js - Zertiva B2 Help System
// ============================================

let helpActive = false;
let backupHidden = null;

// ============================================
// تحديد عدد المستطيلات حسب الامتحان
// ============================================
function getBoxCount() {
  if (document.getElementById('hoeren1')?.style.display === 'block') return 5;
  if (document.getElementById('hoeren2')?.style.display === 'block') return 10;
  if (document.getElementById('hoeren3')?.style.display === 'block') return 5;

  if (document.getElementById('lesen1')?.style.display === 'block') return 5;
  if (document.getElementById('lesen2')?.style.display === 'block') return 5;
  if (document.getElementById('lesen3')?.style.display === 'block') return 10;

  if (document.getElementById('sprach1')?.style.display === 'block') return 10;
  if (document.getElementById('sprach2')?.style.display === 'block') return 10;

  return 5;
}

// ============================================
// إنشاء مستطيل فارغ
// ============================================
function createBox(index) {
  const box = document.createElement("div");

  box.style.cssText = `
    background: #f8f9fa;
    border: 2px solid #007bff;
    border-radius: 14px;
    padding: 15px;
    min-height: 100px;
  `;

  box.innerHTML = `
    <div style="font-weight:bold; color:#007bff; margin-bottom:8px;">
      ${index}
    </div>
    <div style="color:#888; font-size:13px;">
      فارغ حالياً - سيتم إضافة الشرح لاحقاً
    </div>
  `;

  return box;
}

// ============================================
// إنشاء شبكة المستطيلات
// ============================================
function createGrid(count) {
  const container = document.createElement("div");

  container.style.cssText = `
    display: grid;
    gap: 15px;
    padding: 15px;
    background: #eef6ff;
    border-radius: 12px;
    margin-top: 10px;
  `;

  if (count === 10) {
    container.style.gridTemplateColumns = "repeat(2, 1fr)";
  } else {
    container.style.gridTemplateColumns = "repeat(1, 1fr)";
  }

  for (let i = 1; i <= count; i++) {
    container.appendChild(createBox(i));
  }

  return container;
}

// ============================================
// إخفاء فقط الأسئلة (بدون العناوين والأزرار)
// ============================================
function hideQuestions() {
  const hidden = [];

  document.querySelectorAll(".question-card, .itemsGrid, .textDiv, .wordsDiv")
    .forEach(el => {
      if (el.style.display !== "none") {
        el.style.display = "none";
        hidden.push(el);
      }
    });

  return hidden;
}

// ============================================
// إظهار الأسئلة
// ============================================
function showQuestions(list) {
  list.forEach(el => {
    el.style.display = "";
  });
}

// ============================================
// مكان العرض
// ============================================
function getActiveExam() {
  return document.querySelector(
    "#hoeren1, #hoeren2, #hoeren3, #lesen1, #lesen2, #lesen3, #sprach1, #sprach2"
  );
}

// ============================================
// زر المساعدة
// ============================================
function addHelpButton() {
  if (document.getElementById("helpBtn")) return;

  const nav = document.getElementById("examNavButtons");
  if (!nav) return;

  const btn = document.createElement("button");

  btn.id = "helpBtn";
  btn.innerText = "ساعدني أنا أريد أن أتذكر هذه الإجابات";

  btn.style.cssText = `
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 10px;
  `;

  btn.onclick = toggleHelp;

  nav.appendChild(btn);
}

// ============================================
// تشغيل / إيقاف النظام
// ============================================
function toggleHelp() {
  const exam = getActiveExam();
  if (!exam) return;

  if (helpActive) {
    const grid = document.getElementById("helpGrid");
    if (grid) grid.remove();

    if (backupHidden) {
      showQuestions(backupHidden);
      backupHidden = null;
    }

    helpActive = false;
  } else {
    backupHidden = hideQuestions();

    const count = getBoxCount();
    const grid = createGrid(count);

    grid.id = "helpGrid";

    exam.appendChild(grid);

    helpActive = true;
  }
}

// ============================================
// تشغيل تلقائي
// ============================================
function initHelpLayer() {
  addHelpButton();
}

// ============================================
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHelpLayer);
} else {
  initHelpLayer();
}
