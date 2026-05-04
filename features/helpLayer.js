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
  if (document.getElementById('schreiben')?.style.display === 'block') return 1;
  return 5;
}

// إنشاء مستطيل شرح واحد فارغ
function createSingleHelpBox(index) {
  const box = document.createElement('div');
  box.className = 'help-box';
  box.id = `helpBox_${index}`;
  box.style.cssText = `
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border: 2px solid #007bff;
    border-radius: 16px;
    padding: 20px;
    min-height: 120px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  `;
  
  const number = document.createElement('div');
  number.textContent = `${index}`;
  number.style.cssText = `
    display: inline-block;
    background-color: #007bff;
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  `;
  
  const title = document.createElement('div');
  title.textContent = '📘 شرح للتذكر';
  title.style.cssText = `
    font-weight: bold;
    color: #2c3e66;
    margin-bottom: 10px;
    font-size: 15px;
  `;
  
  const content = document.createElement('div');
  content.className = 'help-box-content';
  content.innerHTML = `
    <div style="color: #6c757d; font-size: 13px; line-height: 1.6;">
      ✏️ سيتم إضافة الشرح قريباً...
    </div>
  `;
  
  box.appendChild(number);
  box.appendChild(title);
  box.appendChild(content);
  
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-3px)';
    box.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
    box.style.borderColor = '#28a745';
  });
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
    box.style.borderColor = '#007bff';
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
    background-color: #f0f8ff;
    border-radius: 16px;
    margin: 15px 0;
  `;
  
  if (count === 10) {
    const row1 = document.createElement('div');
    row1.style.cssText = `display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;`;
    const row2 = document.createElement('div');
    row2.style.cssText = `display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px;`;
    
    for (let i = 0; i < 5; i++) row1.appendChild(createSingleHelpBox(i + 1));
    for (let i = 0; i < 5; i++) row2.appendChild(createSingleHelpBox(i + 6));
    
    container.appendChild(row1);
    container.appendChild(row2);
  } 
  else if (count === 5) {
    const column = document.createElement('div');
    column.style.cssText = `display: flex; flex-direction: column; gap: 20px;`;
    for (let i = 0; i < 5; i++) column.appendChild(createSingleHelpBox(i + 1));
    container.appendChild(column);
  }
  else {
    const grid = document.createElement('div');
    grid.style.cssText = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;`;
    for (let i = 0; i < count; i++) grid.appendChild(createSingleHelpBox(i + 1));
    container.appendChild(grid);
  }
  
  return container;
}

// إخفاء أزرار التصحيح وإعادة التعيين
function hideCheckAndResetButtons() {
  const hidden = [];
  
  // إخفاء زر التصحيح في جميع الأجزاء
  const checkBtns = document.querySelectorAll('.check-btn, button:contains("✅ تصحيح"), button:contains("Prüfen")');
  checkBtns.forEach(btn => {
    if (btn.textContent.includes('تصحيح') || btn.textContent.includes('Prüfen')) {
      if (btn.style.display !== 'none') {
        btn.style.display = 'none';
        hidden.push(btn);
      }
    }
  });
  
  // إخفاء زر إعادة التعيين (↺)
  const resetBtns = document.querySelectorAll('button:contains("↺"), button:contains("إعادة تعيين")');
  resetBtns.forEach(btn => {
    if (btn.textContent.includes('↺') || btn.textContent.includes('إعادة تعيين')) {
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

// إخفاء محتوى الامتحان فقط (الأسئلة والنصوص والفجوات)
function hideExamQuestions() {
  const hidden = [];
  
  // Hören الأجزاء
  const hoeren1 = document.getElementById('hoeren1');
  const hoeren2 = document.getElementById('hoeren2');
  const hoeren3 = document.getElementById('hoeren3');
  
  if (hoeren1?.style.display === 'block') {
    const questionCards = hoeren1.querySelectorAll('.question-card');
    questionCards.forEach(card => {
      if (card.style.display !== 'none') {
        card.style.display = 'none';
        hidden.push(card);
      }
    });
  }
  if (hoeren2?.style.display === 'block') {
    const questionCards = hoeren2.querySelectorAll('.question-card');
    questionCards.forEach(card => {
      if (card.style.display !== 'none') {
        card.style.display = 'none';
        hidden.push(card);
      }
    });
  }
  if (hoeren3?.style.display === 'block') {
    const questionCards = hoeren3.querySelectorAll('.question-card');
    questionCards.forEach(card => {
      if (card.style.display !== 'none') {
        card.style.display = 'none';
        hidden.push(card);
      }
    });
  }
  
  // Lesen Teil 1
  const teil1 = document.getElementById('teil1');
  if (teil1?.style.display === 'block') {
    const questions = teil1.querySelectorAll('.question-card');
    questions.forEach(q => {
      if (q.style.display !== 'none') {
        q.style.display = 'none';
        hidden.push(q);
      }
    });
  }
  
  // Lesen Teil 2
  const teil2 = document.getElementById('teil2');
  if (teil2?.style.display === 'block') {
    const questions = teil2.querySelectorAll('.question-card');
    questions.forEach(q => {
      if (q.style.display !== 'none') {
        q.style.display = 'none';
        hidden.push(q);
      }
    });
  }
  
  // Lesen Teil 3
  const teil3 = document.getElementById('teil3');
  if (teil3?.style.display === 'block') {
    const items = teil3.querySelectorAll('.question-card, .itemsGrid');
    items.forEach(item => {
      if (item.style.display !== 'none') {
        item.style.display = 'none';
        hidden.push(item);
      }
    });
    const situationsList = teil3.querySelector('.situationsList, #teil3_situations_list');
    if (situationsList && situationsList.style.display !== 'none') {
      situationsList.style.display = 'none';
      hidden.push(situationsList);
    }
  }
  
  // Sprachbausteine Teil 1
  const sprach1 = document.getElementById('sprach1');
  if (sprach1?.style.display === 'block') {
    const leftColumn = sprach1.querySelector('#sprach1 .leftColumn, .twoColumns > div:first-child');
    if (leftColumn && leftColumn.style.display !== 'none') {
      leftColumn.style.display = 'none';
      hidden.push(leftColumn);
    }
    const rightColumn = sprach1.querySelector('#sprach1 .rightColumn, .twoColumns > div:last-child');
    if (rightColumn && rightColumn.style.display !== 'none') {
      rightColumn.style.display = 'none';
      hidden.push(rightColumn);
    }
  }
  
  // Sprachbausteine Teil 2
  const sprach2 = document.getElementById('sprach2');
  if (sprach2?.style.display === 'block') {
    const textDiv = sprach2.querySelector('#sprach2 .textDiv, .twoColumns > div:first-child');
    if (textDiv && textDiv.style.display !== 'none') {
      textDiv.style.display = 'none';
      hidden.push(textDiv);
    }
    const wordsDiv = sprach2.querySelector('#sprach2 .wordsDiv, .twoColumns > div:last-child');
    if (wordsDiv && wordsDiv.style.display !== 'none') {
      wordsDiv.style.display = 'none';
      hidden.push(wordsDiv);
    }
  }
  
  // Schreiben
  const schreiben = document.getElementById('schreiben');
  if (schreiben?.style.display === 'block') {
    const twoColumns = schreiben.querySelector('.twoColumns, div:first-child');
    if (twoColumns && twoColumns.style.display !== 'none') {
      twoColumns.style.display = 'none';
      hidden.push(twoColumns);
    }
  }
  
  return hidden;
}

// إظهار المحتوى المخفي
function showHiddenElements(hiddenElements) {
  hiddenElements.forEach(el => {
    el.style.display = '';
  });
}

// تبديل وضع المساعدة
function toggleHelpLayer() {
  const existingHelpLayer = document.getElementById('helpLayerContainer');
  
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
    const helpLayer = createHelpBoxes(boxCount);
    
    // إضافة المستطيلات في المكان المناسب
    const examContentArea = getContentArea();
    if (examContentArea) {
      examContentArea.appendChild(helpLayer);
    }
    
    helpLayerActive = true;
  }
}

// الحصول على المكان المناسب لإضافة المستطيلات
function getContentArea() {
  const hoeren1 = document.getElementById('hoeren1');
  if (hoeren1?.style.display === 'block') return hoeren1;
  
  const hoeren2 = document.getElementById('hoeren2');
  if (hoeren2?.style.display === 'block') return hoeren2;
  
  const hoeren3 = document.getElementById('hoeren3');
  if (hoeren3?.style.display === 'block') return hoeren3;
  
  const teil1 = document.getElementById('teil1');
  if (teil1?.style.display === 'block') return teil1;
  
  const teil2 = document.getElementById('teil2');
  if (teil2?.style.display === 'block') return teil2;
  
  const teil3 = document.getElementById('teil3');
  if (teil3?.style.display === 'block') return teil3;
  
  const sprach1 = document.getElementById('sprach1');
  if (sprach1?.style.display === 'block') return sprach1;
  
  const sprach2 = document.getElementById('sprach2');
  if (sprach2?.style.display === 'block') return sprach2;
  
  const schreiben = document.getElementById('schreiben');
  if (schreiben?.style.display === 'block') return schreiben;
  
  return document.getElementById('examContainer');
}

// إضافة زر "ساعدني" في أعلى صفحة الامتحان
function addHelpButtonToExam() {
  if (document.getElementById('globalHelpButton')) return;
  
  const navButtons = document.getElementById('examNavButtons');
  if (navButtons) {
    const helpButton = document.createElement('button');
    helpButton.id = 'globalHelpButton';
    helpButton.textContent = '❓ ساعدني على التذكر';
    helpButton.style.cssText = `
      background: linear-gradient(135deg, #28a745, #20c997);
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
    
    helpButton.onclick = toggleHelpLayer;
    
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