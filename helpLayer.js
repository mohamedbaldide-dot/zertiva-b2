// ============================================
// helpLayer.js - نظام الطبقة المساعدة (معدل بالكامل)
// يدعم: hören1, hören2, hören3, lesen1, lesen2, lesen3, sprach1, sprach2
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// تحديد عدد الأسئلة حسب الجزء النشط
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

// الحصول على رقم الامتحان الحالي
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

// الحصول على الجزء النشط
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

// دالة البحث المرنة عن البيانات في HELP_DATA
function findHelpData(skill, examId, questionNumber) {
    if (typeof HELP_DATA === 'undefined') {
        console.warn('HELP_DATA غير موجود');
        return null;
    }
    
    const patterns = [
        `${skill}_exam${examId}_q${questionNumber}`,
        `${skill}_exam${examId}_${questionNumber}`,
        `${skill}_exam${examId}_${String.fromCharCode(96 + questionNumber)}`
    ];
    
    for (let pattern of patterns) {
        if (HELP_DATA[pattern]) {
            return HELP_DATA[pattern];
        }
    }
    
    for (let key in HELP_DATA) {
        if (key.includes(`exam${examId}`)) {
            if (key.includes(`q${questionNumber}`)) return HELP_DATA[key];
            if (key.includes(`_${questionNumber}`)) return HELP_DATA[key];
            const letter = String.fromCharCode(96 + questionNumber);
            if (key.endsWith(`_${letter}`)) return HELP_DATA[key];
        }
    }
    
    return null;
}

// إنشاء بطاقة شرح واحدة
function createHelpBox(index, totalQuestions) {
    const box = document.createElement('div');
    box.className = 'help-box';
    box.id = `helpBox_${index}`;
    
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpContent = findHelpData(skill, examId, index);
    
    let contentHtml = '';
    
    if (helpContent) {
        let keywordsHtml = '';
        if (helpContent.keywords && helpContent.keywords.length > 0) {
            keywordsHtml = '<div style="margin: 10px 0;"><span style="color: #007bff; font-weight: bold; font-size: 15px;">📌 كلمات مهمة :</span><br>';
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
                    <span style="color: #0056b3; font-weight: bold; font-size: 15px;">📖 المعنى :</span>
                    <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.meaning || 'لا يوجد'}</span>
                </div>
                ${keywordsHtml}
                <div style="margin-bottom: 12px;">
                    <span style="color: #0056b3; font-weight: bold; font-size: 15px;">✨ تبسيط :</span>
                    <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.simplified || helpContent.meaning || 'لا يوجد'}</span>
                </div>
                <div>
                    <span style="color: #0056b3; font-weight: bold; font-size: 15px;">🎭 تخيل :</span>
                    <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.imagine || 'تخيل الجملة في سياقها'}</span>
                </div>
            </div>
        `;
    } else {
        contentHtml = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 150px; color: #999; text-align: center;">
                <div style="font-size: 16px;">❓ لا يوجد شرح للسؤال ${index}</div>
                <div style="font-size: 12px; margin-top: 8px;">${skill}_exam${examId}_q${index}</div>
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

// إنشاء شبكة البطاقات
function createHelpLayer(count) {
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
                    rowDiv.appendChild(createHelpBox(index, count));
                }
            }
            container.appendChild(rowDiv);
        }
    } else if (count === 5) {
        for (let i = 1; i <= 5; i++) {
            container.appendChild(createHelpBox(i, count));
        }
    }
    
    return container;
}

// إخفاء محتوى الامتحان
function hideExamQuestions() {
    const hidden = [];
    const activeSection = getActiveSection();
    if (!activeSection) return hidden;
    
    const allChildren = [...activeSection.children];
    for (let child of allChildren) {
        if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
            child.style.display = 'none';
            hidden.push(child);
        }
    }
    return hidden;
}

// إظهار المحتوى المخفي
function showHiddenElements(hiddenElements) {
    if (!hiddenElements) return;
    hiddenElements.forEach(el => {
        if (el) el.style.display = '';
    });
}

// إخفاء أزرار التصحيح
function hideCheckAndResetButtons() {
    const hidden = [];
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        const btnText = btn.textContent;
        if (btnText.includes('✅') || btnText.includes('تصحيح') || btnText.includes('Prüfen') || btnText.includes('↺') || btnText.includes('إعادة')) {
            if (btn.style.display !== 'none' && btn.id !== 'globalHelpButton') {
                btn.style.display = 'none';
                hidden.push(btn);
            }
        }
    });
    return hidden;
}

// إظهار الأزرار المخفية
function showCheckAndResetButtons(hiddenButtons) {
    if (!hiddenButtons) return;
    hiddenButtons.forEach(btn => {
        if (btn) btn.style.display = '';
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
            const helpLayer = createHelpLayer(boxCount);
            activeSection.appendChild(helpLayer);
        }
        helpLayerActive = true;
    }
}

// إضافة زر المساعدة
function addHelpButton() {
    if (document.getElementById('globalHelpButton')) return;
    
    const nav = document.getElementById('examNavButtons');
    if (!nav) return;
    
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
    
    nav.appendChild(helpButton);
}

// مراقبة تغييرات الصفحة
function initHelpSystem() {
    addHelpButton();
    
    const observer = new MutationObserver(() => {
        if (!document.getElementById('globalHelpButton')) {
            addHelpButton();
        }
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
    });
}

// مراقبة تغيير الامتحان لإغلاق المساعدة تلقائياً
function setupExamChangeListener() {
    let lastExamId = getCurrentExamId();
    let lastSkill = getCurrentSkill();
    setInterval(() => {
        const currentId = getCurrentExamId();
        const currentSkill = getCurrentSkill();
        if (currentId !== lastExamId || currentSkill !== lastSkill) {
            lastExamId = currentId;
            lastSkill = currentSkill;
            if (helpLayerActive) toggleHelpLayer();
            console.log(`🔄 تغير الامتحان إلى: ${currentSkill}_exam${currentId}`);
        }
    }, 500);
}

// بدء التشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initHelpSystem();
        setupExamChangeListener();
    });
} else {
    initHelpSystem();
    setupExamChangeListener();
}

console.log('✅ helpLayer.js تم تحميله بنجاح (يدعم hören1, hören2, hören3, lesen1, lesen2, lesen3, sprach1, sprach2)');