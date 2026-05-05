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
  if (document.getElementById('lesen1')?.style.display === 'block') return 5;
if (document.getElementById('lesen2')?.style.display === 'block') return 5;
if (document.getElementById('lesen3')?.style.display === 'block') return 10;
  if (document.getElementById('sprach1')?.style.display === 'block') return 10;
  if (document.getElementById('sprach2')?.style.display === 'block') return 10;
  return 0;
}

// الحصول على معرف الامتحان الحالي
function getCurrentExamId() {
  if (window.currentExamId && window.currentExamId > 0) {
    return window.currentExamId;
  }
  const titleEl = document.getElementById('examTitle');
  if (titleEl) {
    const title = titleEl.textContent;
    const match = title.match(/Exam\s+(\d+)/i);
    if (match) return parseInt(match[1]);
    const numMatch = title.match(/\d+/);
    if (numMatch) return parseInt(numMatch[0]);
  }
  return 1;
}

// الحصول على نوع المهارة الحالي
function getCurrentSkill() {
  const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'lesen1', 'lesen2', 'lesen3', 'sprach1', 'sprach2'];
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
  const helpContent = window.HELP_DATA ? window.HELP_DATA[helpKey] : null;
  
  let contentHtml = '';
  
  if (helpContent) {
    // تنسيق الكلمات المهمة
    let keywordsHtml = '';
    if (helpContent.keywords && helpContent.keywords.length > 0) {
      keywordsHtml = '<div style="margin: 10px 0;"><span style="color: #007bff; font-weight: bold; font-size: 15px;">كلمات مهمة :</span><br>';
      for (let i = 0; i < helpContent.keywords.length; i++) {
        keywordsHtml += `<span style="display: inline-block; background: #e3f2fd; padding: 4px 12px; border-radius: 20px; font-size: 14px; margin: 3px;">${helpContent.keywords[i]}</span>`;
      }
      keywordsHtml += '</div>';
    }
    
    contentHtml = `
      <div style="padding: 15px;">
        <div style="font-weight: bold; color: #2c3e66; margin-bottom: 15px; font-size: 18px; border-right: 4px solid #007bff; padding-right: 12px;">
          ${index}️⃣ ${helpContent.text || ''}
        </div>
        <div style="margin-bottom: 12px;">
          <span style="color: #0056b3; font-weight: bold; font-size: 15px;">المعنى :</span>
          <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.meaning || 'لا يوجد'}</span>
        </div>
        ${keywordsHtml}
        <div style="margin-bottom: 12px;">
          <span style="color: #0056b3; font-weight: bold; font-size: 15px;">تبسيط :</span>
          <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.simplified || 'لا يوجد'}</span>
        </div>
        <div>
          <span style="color: #0056b3; font-weight: bold; font-size: 15px;">تخيل :</span>
          <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.imagine || 'لا يوجد'}</span>
        </div>
      </div>
    `;
  } else {
    contentHtml = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 150px; color: #999; text-align: center;">
        <div style="font-size: 16px;">❓ لا يوجد شرح متاح حالياً</div>
        <div style="font-size: 12px; margin-top: 8px;">${helpKey}</div>
      </div>
    `;
  }
  
  box.innerHTML = contentHtml;
  box.style.cssText = `
    background: #ffffff;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 15px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    margin-bottom: 15px;
  `;
  
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-2px)';
    box.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)';
    box.style.borderColor = '#007bff';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    box.style.borderColor = '#dee2e6';
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
    gap: 15px;
    padding: 10px;
    background-color: #f5f7fa;
    border-radius: 16px;
    margin: 15px 0;
  `;
  
  if (count === 10) {
    for (let row = 0; row < 5; row++) {
      const rowDiv = document.createElement('div');
      rowDiv.style.cssText = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 5px;`;
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
    column.style.cssText = `display: flex; flex-direction: column; gap: 15px;`;
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
  const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'lesen1', 'lesen2', 'lesen3', 'sprach1', 'sprach2'];
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
      background: linear-gradient(135deg, #007bff, #0056b3);
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
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true
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
