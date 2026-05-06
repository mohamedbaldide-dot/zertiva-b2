// ============================================
// helpLayer.js - نظام الطبقة المساعدة (النسخة النهائية)
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

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
  if (document.getElementById('hoeren1')?.style.display === 'block') return 'hoeren1';
  if (document.getElementById('hoeren2')?.style.display === 'block') return 'hoeren2';
  if (document.getElementById('hoeren3')?.style.display === 'block') return 'hoeren3';
  if (document.getElementById('teil1')?.style.display === 'block') return 'lesen1';
  if (document.getElementById('teil2')?.style.display === 'block') return 'lesen2';
  if (document.getElementById('teil3')?.style.display === 'block') return 'lesen3';
  if (document.getElementById('sprach1')?.style.display === 'block') return 'sprach1';
  if (document.getElementById('sprach2')?.style.display === 'block') return 'sprach2';
  return 'hoeren1';
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

// ========== إنشاء بطاقة من البيانات مباشرة ==========
function createHelpBoxFromData(data, index) {
  const box = document.createElement('div');
  box.className = 'help-box';
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
  
  // تنسيق الكلمات المهمة
  let keywordsHtml = '';
  if (data.keywords && data.keywords.length > 0) {
    keywordsHtml = '<div style="margin: 10px 0;"><span style="color: #007bff; font-weight: bold; font-size: 15px;">📌 كلمات مهمة :</span><br>';
    for (let i = 0; i < data.keywords.length; i++) {
      keywordsHtml += `<span style="display: inline-block; background: #e3f2fd; padding: 4px 12px; border-radius: 20px; font-size: 14px; margin: 3px;">${data.keywords[i]}</span>`;
    }
    keywordsHtml += '</div>';
  }
  
  box.innerHTML = `
    <div style="padding: 15px;">
      <div style="font-weight: bold; color: #2c3e66; margin-bottom: 15px; font-size: 17px; border-right: 4px solid #007bff; padding-right: 12px;">
        ${index}️⃣ ${data.text || ''}
      </div>
      <div style="margin-bottom: 12px;">
        <span style="color: #0056b3; font-weight: bold; font-size: 15px;">📖 المعنى :</span>
        <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${data.meaning || 'لا يوجد'}</span>
      </div>
      ${keywordsHtml}
      <div style="margin-bottom: 12px;">
        <span style="color: #0056b3; font-weight: bold; font-size: 15px;">✨ تبسيط :</span>
        <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${data.simplified || 'لا يوجد'}</span>
      </div>
      <div>
        <span style="color: #0056b3; font-weight: bold; font-size: 15px;">🎭 تخيل :</span>
        <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${data.imagine || 'لا يوجد'}</span>
      </div>
    </div>
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

// ========== الحصول على عدد الأسئلة (تقديري) ==========
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

// ========== إنشاء شبكة البطاقات بناءً على المفاتيح الموجودة فعلاً ==========
function createHelpBoxesWithContent() {
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
  
  const skill = getCurrentSkill();
  const examId = getCurrentExamId();
  
  // 🔑 الحل السحري: نأخذ المفاتيح الموجودة فعلاً في HELP_DATA
  const keys = Object.keys(window.HELP_DATA || {}).filter(k =>
    k.startsWith(`${skill}_exam${examId}`)
  );
  
  console.log(`📊 helpLayer: المفاتيح الموجودة في ${skill}_exam${examId}:`, keys);
  
  if (keys.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:40px; color:#999;">
        ❌ لا توجد بيانات مساعدة لهذا الامتحان
      </div>
    `;
    return container;
  }
  
  // ترتيب المفاتيح
  keys.sort();
  
  // إذا كان عدد المفاتيح 10 (للشبكة بعمودين) أو 5 (لعمود واحد)
  const count = keys.length;
  const isTenQuestions = (count === 10);
  
  if (isTenQuestions) {
    // شبكة بعمودين
    const grid = document.createElement('div');
    grid.style.cssText = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;`;
    
    keys.forEach((key, i) => {
      const data = window.HELP_DATA[key];
      const box = createHelpBoxFromData(data, i + 1);
      box.style.marginBottom = '0';
      box.style.height = '100%';
      grid.appendChild(box);
    });
    container.appendChild(grid);
  } else {
    // عمود واحد
    keys.forEach((key, i) => {
      const data = window.HELP_DATA[key];
      container.appendChild(createHelpBoxFromData(data, i + 1));
    });
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

// إخفاء أزرار التصحيح وإعادة التعيين
function hideCheckAndResetButtons() {
  const hidden = [];
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(btn => {
    const btnText = btn.textContent;
    if (btnText.includes('✅') || btnText.includes('تصحيح') || btnText.includes('Prüfen') || btnText.includes('↺') || btnText.includes('إعادة تعيين')) {
      if (btn.style.display !== 'none' && btn.id !== 'globalHelpButton') {
        btn.style.display = 'none';
        hidden.push(btn);
      }
    }
  });
  return hidden;
}

function showHiddenElements(hiddenElements) {
  hiddenElements.forEach(el => {
    el.style.display = '';
  });
}

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
    
    const helpLayer = createHelpBoxesWithContent();
    if (activeSection && helpLayer.children.length > 0) {
      activeSection.appendChild(helpLayer);
    }
    helpLayerActive = true;
  }
}

// إضافة زر "مساعدة ذكية للنجاح"
function addHelpButtonToExam() {
  // ❌ لا نضيف الزر في قسم Schreiben
  const schreiben = document.getElementById('schreiben');
  if (schreiben && schreiben.style.display === 'block') {
    const existingBtn = document.getElementById('globalHelpButton');
    if (existingBtn) existingBtn.remove();
    return;
  }
  
  if (document.getElementById('globalHelpButton')) return;
  
  const navButtons = document.getElementById('examNavButtons');
  if (navButtons) {
    const helpButton = document.createElement('button');
    helpButton.id = 'globalHelpButton';
    helpButton.textContent = '🧠 مساعدة ذكية للنجاح';
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
    addHelpButtonToExam();
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