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

// الحصول على معرف الامتحان الحالي مباشرة من window.currentExamId
function getCurrentExamId() {
  // الطريقة الصحيحة: window.currentExamId من exams.js
  if (window.currentExamId && window.currentExamId > 0) {
    return window.currentExamId;
  }
  
  // محاولة استخراج من عنوان الصفحة
  const titleEl = document.getElementById('examTitle');
  if (titleEl) {
    const title = titleEl.textContent;
    // البحث عن "Exam 1" أو "Exam 2" إلخ
    const match = title.match(/Exam[_\s]+(\d+)/i);
    if (match) return parseInt(match[1]);
    // البحث عن رقم في نهاية النص
    const numMatch = title.match(/(\d+)$/);
    if (numMatch) return parseInt(numMatch[1]);
  }
  return 1;
}

// الحصول على نوع المهارة الحالي
function getCurrentSkill() {
  const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
  for (const section of sections) {
    const el = document.getElementById(section);
    if (el && el.style.display === 'block') {
      return section;
    }
  }
  return 'hoeren1';
}

// إنشاء مستطيل شرح مع محتوى من HELP_DATA
function createHelpBoxWithContent(index, totalQuestions) {
  const box = document.createElement('div');
  box.className = 'help-box';
  box.id = `helpBox_${index}`;
  
  const examId = getCurrentExamId();
  const skill = getCurrentSkill();
  const helpKey = `${skill}_exam${examId}_q${index}`;
  
  console.log("🔍 البحث عن:", helpKey);
  console.log("📌 رقم الامتحان:", examId, "المهارة:", skill);
  
  const helpContent = window.HELP_DATA ? window.HELP_DATA[helpKey] : null;
  
  let contentHtml = '';
  
  if (helpContent) {
    contentHtml = `
      <div style="padding: 5px;">
        <div style="font-weight: bold; color: #2c3e66; margin-bottom: 12px; font-size: 14px; border-bottom: 1px solid #dee2e6; padding-bottom: 8px;">
          📖 ${helpContent.text || ''}
        </div>
        <div style="margin-bottom: 10px;">
          <span style="color: #007bff; font-weight: bold;">📘 المعنى:</span>
          <span style="color: #333; font-size: 13px;"> ${helpContent.meaning || 'لا يوجد'}</span>
        </div>
        <div style="margin-bottom: 10px;">
          <span style="color: #28a745; font-weight: bold;">⚡ كلمات مهمة:</span>
          <div style="margin-top: 5px; display: flex; flex-wrap: wrap; gap: 5px;">
            ${helpContent.keywords ? helpContent.keywords.map(k => `<span style="background: #e9ecef; padding: 3px 10px; border-radius: 15px; font-size: 12px;">${k}</span>`).join('') : '<span style="color: #999; font-size: 12px;">لا توجد</span>'}
          </div>
        </div>
        <div style="margin-bottom: 10px;">
          <span style="color: #17a2b8; font-weight: bold;">🧠 تبسيط:</span>
          <span style="color: #333; font-size: 13px;"> ${helpContent.simplified || 'لا يوجد'}</span>
        </div>
        <div>
          <span style="color: #dc3545; font-weight: bold;">🔥 تخيل:</span>
          <span style="color: #333; font-size: 13px;"> ${helpContent.imagine || 'لا يوجد'}</span>
        </div>
      </div>
    `;
  } else {
    contentHtml = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 150px; color: #999; text-align: center;">
        <div>❓ لا يوجد شرح متاح حالياً</div>
        <div style="font-size: 11px; margin-top: 8px;">${helpKey}</div>
      </div>
    `;
  }
  
  box.innerHTML = contentHtml;
  box.style.cssText = `
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 2px solid #6c757d;
    border-radius: 12px;
    padding: 15px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    max-height: 320px;
    overflow-y: auto;
  `;
  
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-3px)';
    box.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
    box.style.borderColor = '#28a745';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
    box.style.borderColor = '#6c757d';
  });
  
  return box;
}

// إنشاء شبكة المستطيلات مع محتوى
function createHelpBoxesWithContent(count) {
  const container = document.createElement('div');
  container.id = 'helpLayerContainer';
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f0f8ff;
    border-radius: 16px;
    margin: 15px 0;
  `;
  
  if (count === 10) {
    for (let row = 0; row < 5; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.style.cssText = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 20px;`;
      for (let col = 0; col < 2; col++) {
        const index = row * 2 + col + 1;
        if (index <= 10) {
          rowDiv.appendChild(createHelpBoxWithContent(index, count));
        }
      }
      container.appendChild(rowDiv);
    }
  } 
  else if (count === 5) {
    const column = document.createElement('div');
    column.style.cssText = `display: flex; flex-direction: column; gap: 20px;`;
    for (let i = 0; i < 5; i++) {
      column.appendChild(createHelpBoxWithContent(i + 1, count));
    }
    container.appendChild(column);
  }
  
  return container;
}

// إخفاء محتوى الامتحان
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

// تبديل وضع المساعدة
function toggleHelpLayer() {
  const existingHelpLayer = document.getElementById('helpLayerContainer');
  const activeSection = getActiveSection();
  
  if (helpLayerActive) {
    if (existingHelpLayer) existingHelpLayer.remove();
    if (originalContentBackup) {
      showHiddenElements(originalContentBackup.hiddenQuestions);
      showCheckAndResetButtons(originalContentBackup.hiddenButtons);
      originalContentBackup = null;
    }
    helpLayerActive = false;
  } else {
    const hiddenQuestions = hideExamQuestions();
    const hiddenButtons = hideCheckAndResetButtons();
    originalContentBackup = { hiddenQuestions, hiddenButtons };
    
    const boxCount = getHelpBoxCount();
    if (boxCount > 0 && activeSection) {
      const helpLayer = createHelpBoxesWithContent(boxCount);
      activeSection.appendChild(helpLayer);
    }
    helpLayerActive = true;
  }
}

// إضافة زر "مساعدة ذكية للنجاح"
function addHelpButtonToExam() {
  if (document.getElementById('globalHelpButton')) return;
  
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
      helpButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
    });
    
    helpButton.onclick = (e) => {
      e.stopPropagation();
      toggleHelpLayer();
    };
    
    navButtons.appendChild(helpButton);
  }
}

// تحديث معلومات الامتحان عند تغيير الصفحة
function updateExamInfo() {
  if (window.currentExamId) {
    console.log("📌 تحديث: رقم الامتحان =", window.currentExamId);
  }
}

// مراقبة تغييرات الصفحة
function observeForHelpButton() {
  const observer = new MutationObserver(() => {
    const helpBtn = document.getElementById('globalHelpButton');
    const schreiben = document.getElementById('schreiben');
    
    if (schreiben && schreiben.style.display !== 'none') {
      if (helpBtn) helpBtn.remove();
      return;
    }
    
    if (!helpBtn) {
      addHelpButtonToExam();
    }
    updateExamInfo();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
  });
  
  addHelpButtonToExam();
  updateExamInfo();
}

// بدء النظام
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    observeForHelpButton();
  });
} else {
  observeForHelpButton();
}
