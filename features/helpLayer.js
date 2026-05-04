// ============================================
// helpLayer.js - نظام الطبقة المساعدة (FIXED)
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;
let buttonInjected = false;

// تحديد عدد المستطيلات حسب القسم
function getHelpBoxCount() {
  if (document.getElementById('hoeren1')?.style.display === 'block') return 5;
  if (document.getElementById('hoeren2')?.style.display === 'block') return 10;
  if (document.getElementById('hoeren3')?.style.display === 'block') return 5;
  if (document.getElementById('teil1')?.style.display === 'block') return 5;
  if (document.getElementById('teil2')?.style.display === 'block') return 5;
  if (document.getElementById('teil3')?.style.display === 'block') return 10;
  if (document.getElementById('sprach1')?.style.display === 'block') return 10;
  if (document.getElementById('sprach2')?.style.display === 'block') return 10;
  return 0;
}

// إنشاء مستطيل
function createSingleHelpBox(index) {
  const box = document.createElement('div');
  box.className = 'help-box';
  box.style.cssText = `
    background:#f8f9fa;
    border:2px solid #6c757d;
    border-radius:12px;
    padding:20px;
    min-height:100px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
  `;

  const number = document.createElement('div');
  number.textContent = index;
  number.style.cssText = `
    width:40px;height:40px;
    background:#6c757d;
    color:white;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px;
    font-weight:bold;
  `;

  box.appendChild(number);
  return box;
}

// إنشاء الشبكة
function createHelpBoxes(count) {
  const container = document.createElement('div');
  container.id = 'helpLayerContainer';

  container.style.cssText = `
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
  `;

  if (count === 10) {
    for (let i = 0; i < 5; i++) {
      const row = document.createElement('div');
      row.style.display = 'grid';
      row.style.gridTemplateColumns = 'repeat(2,1fr)';
      row.style.gap = '20px';

      row.appendChild(createSingleHelpBox(i * 2 + 1));
      row.appendChild(createSingleHelpBox(i * 2 + 2));
      container.appendChild(row);
    }
  } else if (count === 5) {
    for (let i = 0; i < 5; i++) {
      container.appendChild(createSingleHelpBox(i + 1));
    }
  }

  return container;
}

// إخفاء فقط المحتوى الداخلي (بدون تدمير الصفحة)
function hideExamQuestions() {
  const hidden = [];
  const section = getActiveSection();
  if (!section) return hidden;

  const items = section.querySelectorAll('.question-card, .itemsGrid');

  items.forEach(el => {
    el.style.display = 'none';
    hidden.push(el);
  });

  return hidden;
}

// إظهار
function showHiddenElements(elements) {
  elements.forEach(el => el.style.display = '');
}

// القسم الحالي
function getActiveSection() {
  const ids = ['hoeren1','hoeren2','hoeren3','teil1','teil2','teil3','sprach1','sprach2','schreiben'];
  return ids.map(id => document.getElementById(id))
            .find(el => el && el.style.display === 'block');
}

// إخفاء الأزرار
function hideButtons() {
  const hidden = [];
  document.querySelectorAll('button').forEach(btn => {
    const t = btn.textContent;

    if (
      t.includes('تصحيح') ||
      t.includes('Prüfen') ||
      t.includes('↺')
    ) {
      btn.style.display = 'none';
      hidden.push(btn);
    }
  });
  return hidden;
}

function showButtons(list) {
  list.forEach(b => b.style.display = '');
}

// تشغيل / إيقاف
function toggleHelpLayer() {

  const schreiben = document.getElementById('schreiben');
  if (schreiben?.style.display === 'block') return; // ❌ منع كامل

  const existing = document.getElementById('helpLayerContainer');

  if (helpLayerActive) {
    existing?.remove();

    if (originalContentBackup) {
      showHiddenElements(originalContentBackup.questions);
      showButtons(originalContentBackup.buttons);
    }

    helpLayerActive = false;
    originalContentBackup = null;
    return;
  }

  const questions = hideExamQuestions();
  const buttons = hideButtons();

  originalContentBackup = { questions, buttons };

  const boxCount = getHelpBoxCount();
  const section = getActiveSection();

  if (section && boxCount > 0) {
    section.appendChild(createHelpBoxes(boxCount));
  }

  helpLayerActive = true;
}

// زر المساعدة
function addHelpButtonToExam() {

  if (buttonInjected) return;

  const schreiben = document.getElementById('schreiben');
  if (schreiben?.style.display === 'block') return;

  const nav = document.getElementById('examNavButtons');
  if (!nav) return;

  const btn = document.createElement('button');
  btn.textContent = 'مساعدة ذكية للنجاح';
  btn.style.cssText = `
    background:#3b82f6;
    color:white;
    border:none;
    border-radius:30px;
    padding:8px 16px;
    cursor:pointer;
  `;

  btn.onclick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleHelpLayer();
  };

  nav.appendChild(btn);
  buttonInjected = true;
}

// مراقبة مرة واحدة فقط
function initHelpLayer() {
  addHelpButtonToExam();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHelpLayer);
} else {
  initHelpLayer();
}
