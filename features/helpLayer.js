// ============================================
// helpLayer.js - نظام الطبقة المساعدة
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// ============================================
// الأسئلة الصحيحة لكل امتحان (من ملفات JSON)
// ============================================
function getCorrectQuestions(skill, examId) {
    const correctMap = {
        // Hören Teil 1
        'hoeren1_exam1': [2, 3],
        'hoeren1_exam2': [3, 5],
        'hoeren1_exam3': [2, 3, 5],
        'hoeren1_exam4': [1, 5],
        'hoeren1_exam5': [2, 4],
        'hoeren1_exam6': [2, 4],
        'hoeren1_exam7': [1, 2, 5],
        'hoeren1_exam8': [3, 4, 5],
        'hoeren1_exam9': [1, 2],
        'hoeren1_exam10': [1, 4],
        'hoeren1_exam11': [1, 4],
        'hoeren1_exam12': [1, 4],
        'hoeren1_exam13': [3, 4, 5],
        'hoeren1_exam14': [1, 3],
        'hoeren1_exam15': [2, 3],
        'hoeren1_exam16': [2, 3, 5],
        'hoeren1_exam17': [4, 5],
        'hoeren1_exam18': [1, 3, 5],
        'hoeren1_exam19': [1, 3, 5],
        'hoeren1_exam20': [1, 3, 4],
        'hoeren1_exam21': [3],
        'hoeren1_exam22': [1, 2, 5],
        'hoeren1_exam23': [3, 5],
        'hoeren1_exam24': [1, 3, 5],
        'hoeren1_exam25': [1, 2, 5],
        'hoeren1_exam26': [1, 5],
        'hoeren1_exam27': [1, 2],
        
        // Hören Teil 2
        'hoeren2_exam1': [3, 4, 8, 9, 10],
        'hoeren2_exam2': [1, 3, 4, 8],
        'hoeren2_exam3': [1, 3, 4, 7, 8],
        'hoeren2_exam4': [2, 6, 8, 9, 10],
        'hoeren2_exam5': [2, 9, 10],
        'hoeren2_exam6': [3, 4, 7],
        'hoeren2_exam7': [3, 4, 7],
        'hoeren2_exam8': [1, 3, 4, 7, 8, 9],
        'hoeren2_exam9': [1, 3, 4, 5, 8],
        'hoeren2_exam10': [1, 3, 4, 8, 9, 10],
        'hoeren2_exam11': [1, 3, 4, 8, 9, 10],
        'hoeren2_exam12': [1, 4, 6, 7, 8],
        'hoeren2_exam13': [1, 4, 6, 7, 8],
        'hoeren2_exam14': [2, 5, 8, 9, 10],
        'hoeren2_exam15': [2, 3, 5, 6, 8, 10],
        'hoeren2_exam16': [2, 4, 5, 8, 10],
        'hoeren2_exam17': [2, 4, 5, 8, 10],
        'hoeren2_exam18': [2, 3, 4, 7, 9, 10],
        'hoeren2_exam19': [3, 4, 7, 9],
        'hoeren2_exam20': [2, 3, 5, 8, 9],
        'hoeren2_exam21': [3, 5, 9],
        'hoeren2_exam22': [3, 4, 10],
        'hoeren2_exam23': [1, 2, 4, 6],
        'hoeren2_exam24': [2, 3, 4, 6, 8, 10],
        'hoeren2_exam25': [1, 2, 3, 4, 6, 8, 9],
        'hoeren2_exam26': [3, 5, 7, 8, 10],
        'hoeren2_exam27': [2, 3, 4, 6, 8],
        'hoeren2_exam28': [1, 2, 4, 6, 8, 10],
        'hoeren2_exam29': [4, 5, 9, 10],
        'hoeren2_exam30': [2, 3, 6, 7, 10],
        'hoeren2_exam31': [2, 4, 5, 8, 9],
        
        // Hören Teil 3
        'hoeren3_exam1': [1],
        'hoeren3_exam2': [1, 3],
        'hoeren3_exam3': [1, 3],
        'hoeren3_exam4': [1, 4],
        'hoeren3_exam5': [1, 4],
        'hoeren3_exam6': [1, 5],
        'hoeren3_exam7': [1, 5],
        'hoeren3_exam8': [1, 5],
        'hoeren3_exam9': [1, 5],
        'hoeren3_exam10': [2, 5],
        'hoeren3_exam11': [1, 2, 3],
        'hoeren3_exam12': [3, 4],
        'hoeren3_exam13': [1, 2, 5],
        'hoeren3_exam14': [1, 4, 5],
        'hoeren3_exam15': [1, 2, 5],
        'hoeren3_exam16': [1, 3, 4, 5],
        'hoeren3_exam17': [1, 3],
        'hoeren3_exam18': [2, 3, 4],
        'hoeren3_exam19': [2, 4],
        'hoeren3_exam20': [1, 3],
        'hoeren3_exam21': [2],
        'hoeren3_exam22': [2, 4],
        'hoeren3_exam23': [1, 5],
        'hoeren3_exam24': [2],
        'hoeren3_exam25': [1, 3],
        'hoeren3_exam26': [1, 3, 5],
        'hoeren3_exam27': [1, 3]
    };
    
    const key = `${skill}_exam${examId}`;
    return correctMap[key] || [];
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

// إنشاء مستطيل شرح مع محتوى من HELP_DATA
function createHelpBoxWithContent(index) {
    const box = document.createElement('div');
    box.className = 'help-box';
    box.id = `helpBox_${index}`;
    
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpKey = `${skill}_exam${examId}_q${index}`;
    const helpContent = window.HELP_DATA ? window.HELP_DATA[helpKey] : null;
    
    if (helpContent) {
        let keywordsHtml = '';
        if (helpContent.keywords && helpContent.keywords.length > 0) {
            keywordsHtml = '<div style="margin: 10px 0;"><span style="color: #007bff; font-weight: bold; font-size: 15px;">📌 كلمات مهمة :</span><br>';
            for (let i = 0; i < helpContent.keywords.length; i++) {
                keywordsHtml += `<span style="display: inline-block; background: #e3f2fd; padding: 4px 12px; border-radius: 20px; font-size: 13px; margin: 3px;">${helpContent.keywords[i]}</span>`;
            }
            keywordsHtml += '</div>';
        }
        
        box.innerHTML = `
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
                    <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.simplified || 'لا يوجد'}</span>
                </div>
                <div>
                    <span style="color: #0056b3; font-weight: bold; font-size: 15px;">🎭 تخيل :</span>
                    <span style="color: #333; font-size: 15px; line-height: 1.6;"> ${helpContent.imagine || 'لا يوجد'}</span>
                </div>
            </div>
        `;
    } else {
        box.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 150px; color: #999; text-align: center;">
                <div style="font-size: 16px;">❓ لا يوجد شرح متاح حالياً</div>
                <div style="font-size: 12px; margin-top: 8px;">${helpKey}</div>
            </div>
        `;
    }
    
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

// إنشاء شبكة المستطيلات (فقط للأسئلة الصحيحة)
function createHelpBoxesWithContent(count, correctQuestions) {
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
    
    // تصفية الأسئلة الصحيحة فقط
    const validIndices = [];
    for (let i = 1; i <= count; i++) {
        if (correctQuestions.includes(i)) {
            validIndices.push(i);
        }
    }
    
    if (validIndices.length === 0) {
        const noDataDiv = document.createElement('div');
        noDataDiv.style.cssText = 'text-align: center; padding: 40px; color: #666;';
        noDataDiv.innerHTML = '📚 لا توجد أسئلة صحيحة في هذا الامتحان لعرض شروحاتها';
        container.appendChild(noDataDiv);
        return container;
    }
    
    if (count === 10) {
        for (let row = 0; row < 5; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.style.cssText = `display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 5px;`;
            let hasContent = false;
            for (let col = 0; col < 2; col++) {
                const index = row * 2 + col + 1;
                if (validIndices.includes(index)) {
                    rowDiv.appendChild(createHelpBoxWithContent(index));
                    hasContent = true;
                }
            }
            if (hasContent) {
                container.appendChild(rowDiv);
            }
        }
    } else if (count === 5) {
        const column = document.createElement('div');
        column.style.cssText = `display: flex; flex-direction: column; gap: 15px;`;
        for (let i = 1; i <= 5; i++) {
            if (validIndices.includes(i)) {
                column.appendChild(createHelpBoxWithContent(i));
            }
        }
        if (column.children.length > 0) {
            container.appendChild(column);
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
    if (!hiddenElements) return;
    hiddenElements.forEach(el => {
        if (el) el.style.display = '';
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
        const skill = getCurrentSkill();
        const examId = getCurrentExamId();
        const correctQuestions = getCorrectQuestions(skill, examId);
        
        if (boxCount > 0 && activeSection) {
            const helpLayer = createHelpBoxesWithContent(boxCount, correctQuestions);
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

console.log('✅ helpLayer.js تم التحميل');
