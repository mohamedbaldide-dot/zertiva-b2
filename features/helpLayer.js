// ============================================
// helpLayer.js - نظام الطبقة المساعدة
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// تحديد عدد المستطيلات حسب نوع الامتحان
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

// إنشاء مستطيل شرح واحد فارغ
function createSingleHelpBox(index) {
  const box = document.createElement('div');
  box.className = 'help-box';
  box.id = `helpBox_${index}`;
  box.style.cssText = `
    background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
    border: 2px solid #9333ea;
    border-radius: 12px;
    padding: 20px;
    min-height: 100px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const number = document.createElement('div');
  number.textContent = `${index}`;
  number.style.cssText = `
    display: inline-block;
    background-color: #9333ea;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    font-weight: bold;
  `;
  
  box.appendChild(number);
  
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-3px)';
    box.style.boxShadow = '0 8px 20px rgba(147,51,234,0.2)';
    box.style.borderColor = '#a855f7';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
    box.style.borderColor = '#9333ea';
  });
  
  return box;
}

// إنشاء شبكة المستطيلات
function createHelpBoxes(count) {
  const container = document.createElement('div');
  container.id = 'helpLayerContainer';
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #faf5ff;
    border-radius: 16px;
    margin: 15px 0;
  `;
  
  if (count === 10) {
    // 10 مستطيلات: 2 أسفل 2 (أي 5 في كل صف)
    const row1 = document.createElement('div');
    row1.style.cssText = `display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;`;
    const row2 = document.createElement('div');
    row2.style.cssText = `display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; margin-top: 5px;`;
    
    for (let i = 0; i < 5; i++) row1.appendChild(createSingleHelpBox(i + 1));
    for (let i = 0; i < 5; i++) row2.appendChild(createSingleHelpBox(i + 6));
    
    container.appendChild(row1);
    container.appendChild(row2);
  } 
  else if (count === 5) {
    // 5 مستطيلات: عمود واحد
    const column = document.createElement('div');
    column.style.cssText = `display: flex; flex-direction: column; gap: 20px;`;
    for (let i = 0; i < 5; i++) column.appendChild(createSingleHelpBox(i + 1));
    container.appendChild(column);
  }
  
  return container;
}

// إخفاء محتوى الامتحان (الأسئلة والنصوص والفجوات والخيارات)
function hideExamQuestions() {
  const hidden = [];
  const activeSection = getActiveSection();
  if (!activeSection) return hidden;
  
  const allChildren = activeSection.children;
  for (let i = 0; i < allChildren.length; i++) {
    const child = allChildren[i];
    if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
      child.style.display = 'none';
      hidden.push(child);
    }
  }
  
  return hidden;
}

// الحصول على القسم النشط
function getActiveSection() {
  const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el && el.style.display === 'block') {
      return el;
    }
  }
  return null;
}

// إظهار المحتوى المخفي
function showHiddenElements(hiddenElements) {
  hiddenElements.forEach(el => {
    el.style.display = '';
  });
}

// إخفاء أزرار التصحيح وإعادة التعيين
function hideCheckAndResetButtons() {
  const hidden = [];
  
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(btn => {
    const btnText = btn.textContent;
    if (btnText.includes('✅') || btnText.includes('تصحيح') || btnText.includes('Prüfen') || btnText.includes('↺') || btnText.includes('إعادة تعيين')) {
      if (btn.style.display !== 'none') {
        btn.style.display = 'none';
        hidden.push(btn);
      }
    }
  });
  
  return hidden;
}

// إظهار الأزرار المخفية
function showCheckAndResetButtons(hiddenButtons) {
  hiddenButtons.forEach(btn => {
    btn.style.display = '';
  });
}

// تبديل وضع المساعدة (إظهار/إخفاء)
function toggleHelpLayer() {
  const existingHelpLayer = document.getElementById('helpLayerContainer');
  const activeSection = getActiveSection();
  
  if (helpLayerActive) {
    // إخفاء وضع المساعدة وإظهار الأسئلة
    if (existingHelpLayer) existingHelpLayer.remove();
    if (originalContentBackup) {
      showHiddenElements(originalContentBackup.hiddenQuestions);
      showCheckAndResetButtons(originalContentBackup.hiddenButtons);
      originalContentBackup = null;
    }
    helpLayerActive = false;
  } else {
    // حفظ العناصر التي سيتم إخفاؤها
    const hiddenQuestions = hideExamQuestions();
    const hiddenButtons = hideCheckAndResetButtons();
    
    originalContentBackup = { hiddenQuestions, hiddenButtons };
    
    // إنشاء وعرض المستطيلات
    const boxCount = getHelpBoxCount();
    if (boxCount > 0 && activeSection) {
      const helpLayer = createHelpBoxes(boxCount);
      activeSection.appendChild(helpLayer);
    }
    
    helpLayerActive = true;
  }
}

// إضافة زر "مساعدة ذكية للنجاح" في أعلى صفحة الامتحان
function addHelpButtonToExam() {
  if (document.getElementById('globalHelpButton')) return;
  
  // لا نضيف الزر في Schreiben
  const schreiben = document.getElementById('schreiben');
  if (schreiben && schreiben.style.display === 'block') return;
  
  const navButtons = document.getElementById('examNavButtons');
  if (navButtons) {
    const helpButton = document.createElement('button');
    helpButton.id = 'globalHelpButton';
    helpButton.textContent = 'مساعدة ذكية للنجاح';
    helpButton.style.cssText = `
      background: linear-gradient(135deg, #3b82f6, #60a5fa);
      color: white;
      border: none;
      border-radius: 30px;
      padding: 8px 20px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      margin-left: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    
    helpButton.addEventListener('mouseenter', () => {
      helpButton.style.transform = 'scale(1.02)';
      helpButton.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    });
    helpButton.addEventListener('mouseleave', () => {
      helpButton.style.transform = 'scale(1)';
      helpButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    });
    
    helpButton.onclick = (e) => {
      e.stopPropagation();
      toggleHelpLayer();
    };
    
    navButtons.appendChild(helpButton);
  }
}

// مراقبة تغييرات الصفحة
function observeForHelpButton() {
  const observer = new MutationObserver(() => {
    addHelpButtonToExam();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  addHelpButtonToExam();
}

// بدء النظام
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    observeForHelpButton();
  });
} else {
  observeForHelpButton();
}
