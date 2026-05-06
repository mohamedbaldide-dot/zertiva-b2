// ============================================
// helpLayer.js - نظام الطبقة المساعدة (النسخة المحسنة)
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// ========== الحصول على أرقام الأسئلة المتوفرة في HELP_DATA ==========
function getAvailableQuestionNumbers(skill, examId) {
    if (!window.HELP_DATA) return [];
    
    const numbers = [];
    const prefix = `${skill}_exam${examId}_`;
    
    for (let key in window.HELP_DATA) {
        if (key.startsWith(prefix)) {
            // استخراج رقم السؤال من المفتاح
            // يدعم صيغ متعددة: _q2, _2, _a, _b
            let match = key.match(/_q(\d+)/);
            if (match) {
                numbers.push(parseInt(match[1]));
                continue;
            }
            match = key.match(/_(\d+)$/);
            if (match) {
                numbers.push(parseInt(match[1]));
                continue;
            }
            match = key.match(/_([a-z])$/);
            if (match) {
                // تحويل الحرف إلى رقم (a=1, b=2, c=3...)
                const letterToNumber = match[1].charCodeAt(0) - 96;
                numbers.push(letterToNumber);
                continue;
            }
        }
    }
    
    // إزالة التكرار وترتيب الأرقام
    return [...new Set(numbers)].sort((a, b) => a - b);
}

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
    const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
    for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.style.display === 'block') {
            return section;
        }
    }
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

// إنشاء مستطيل شرح مع محتوى من HELP_DATA (باستخدام رقم السؤال الحقيقي)
function createHelpBoxWithContent(questionNumber) {
    const box = document.createElement('div');
    box.className = 'help-box';
    box.id = `helpBox_${questionNumber}`;
    
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    
    // البحث عن البيانات باستخدام طرق متعددة
    let helpContent = null;
    
    // الطريقة 1: البحث بالصيغة مع q
    const keyWithQ = `${skill}_exam${examId}_q${questionNumber}`;
    if (window.HELP_DATA && window.HELP_DATA[keyWithQ]) {
        helpContent = window.HELP_DATA[keyWithQ];
    }
    
    // الطريقة 2: البحث بالصيغة بدون q
    if (!helpContent) {
        const keyWithNumber = `${skill}_exam${examId}_${questionNumber}`;
        if (window.HELP_DATA && window.HELP_DATA[keyWithNumber]) {
            helpContent = window.HELP_DATA[keyWithNumber];
        }
    }
    
    // الطريقة 3: البحث بالصيغة مع حرف (a,b,c...)
    if (!helpContent) {
        const letter = String.fromCharCode(96 + questionNumber);
        const keyWithLetter = `${skill}_exam${examId}_${letter}`;
        if (window.HELP_DATA && window.HELP_DATA[keyWithLetter]) {
            helpContent = window.HELP_DATA[keyWithLetter];
        }
    }
    
    // الطريقة 4: بحث شامل
    if (!helpContent && window.HELP_DATA) {
        for (let key in window.HELP_DATA) {
            if (key.includes(`exam${examId}`) && (key.includes(`_${questionNumber}`) || key.includes(`q${questionNumber}`))) {
                helpContent = window.HELP_DATA[key];
                break;
            }
        }
    }
    
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
                    ${questionNumber}️⃣ ${helpContent.text || ''}
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
                <div style="font-size: 16px;">❓ لا يوجد شرح للسؤال ${questionNumber}</div>
                <div style="font-size: 12px; margin-top: 8px;">${skill}_exam${examId}_q${questionNumber}</div>
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

// إنشاء شبكة المستطيلات مع محتوى (تعرض فقط الأسئلة الموجودة في HELP_DATA)
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
    
    const skill = getCurrentSkill();
    const examId = getCurrentExamId();
    
    // 🔑 الحل السحري: نأخذ أرقام الأسئلة المتوفرة فقط من HELP_DATA
    const availableQuestions = getAvailableQuestionNumbers(skill, examId);
    
    console.log(`📊 helpLayer.js: الامتحان ${skill}_exam${examId}`);
    console.log(`📊 الأسئلة المتوفرة: [${availableQuestions.join(', ')}]`);
    
    if (availableQuestions.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#666">📚 لا توجد أسئلة متوفرة في هذا الامتحان</div>';
        return container;
    }
    
    // إذا كان العدد 5 أو 10، نستخدم الشبكة المناسبة
    if (availableQuestions.length === 10 || availableQuestions.length === 5) {
        // نعرض جميع الأسئلة من 1 إلى العدد المطلوب
        const totalNeeded = (availableQuestions.length === 10) ? 10 : 5;
        const isTenQuestions = (totalNeeded === 10);
        
        if (isTenQuestions) {
            // شبكة بعمودين لـ 10 أسئلة
            for (let row = 0; row < 5; row++) {
                const rowDiv = document.createElement('div');
                rowDiv.style.cssText = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 5px;`;
                for (let col = 0; col < 2; col++) {
                    const qNumber = row * 2 + col + 1;
                    if (qNumber <= 10) {
                        rowDiv.appendChild(createHelpBoxWithContent(qNumber));
                    }
                }
                container.appendChild(rowDiv);
            }
        } else {
            // عمود واحد لـ 5 أسئلة
            const column = document.createElement('div');
            column.style.cssText = `display: flex; flex-direction: column; gap: 15px;`;
            for (let i = 1; i <= 5; i++) {
                column.appendChild(createHelpBoxWithContent(i));
            }
            container.appendChild(column);
        }
    } else {
        // حالة خاصة: نعرض فقط الأسئلة المتوفرة
        for (let i = 0; i < availableQuestions.length; i++) {
            container.appendChild(createHelpBoxWithContent(availableQuestions[i]));
        }
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