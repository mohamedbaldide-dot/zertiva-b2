// ============================================
// helpLayer.js - نظام الطبقة المساعدة
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

// ============================================
// الأسئلة الصحيحة لكل امتحان (مستخرجة من ملفات JSON)
// ============================================
function getCorrectQuestionsForExam(skill, examId) {
    const correctMap = {
        'hoeren1_exam1': [2, 3], 'hoeren1_exam2': [3, 5], 'hoeren1_exam3': [2, 3, 5],
        'hoeren1_exam4': [1, 5], 'hoeren1_exam5': [2, 4], 'hoeren1_exam6': [2, 4],
        'hoeren1_exam7': [1, 2, 5], 'hoeren1_exam8': [3, 4, 5], 'hoeren1_exam9': [1, 2],
        'hoeren1_exam10': [1, 4], 'hoeren1_exam11': [1, 4], 'hoeren1_exam12': [1, 4],
        'hoeren1_exam13': [3, 4, 5], 'hoeren1_exam14': [1, 3], 'hoeren1_exam15': [2, 3],
        'hoeren1_exam16': [2, 3, 5], 'hoeren1_exam17': [4, 5], 'hoeren1_exam18': [1, 3, 5],
        'hoeren1_exam19': [1, 3, 5], 'hoeren1_exam20': [1, 3, 4], 'hoeren1_exam21': [3],
        'hoeren1_exam22': [1, 2, 5], 'hoeren1_exam23': [3, 5], 'hoeren1_exam24': [1, 3, 5],
        'hoeren1_exam25': [1, 2, 5], 'hoeren1_exam26': [1, 5], 'hoeren1_exam27': [1, 2],
        
        'hoeren2_exam1': [3, 4, 8, 9, 10], 'hoeren2_exam2': [1, 3, 4, 8],
        'hoeren2_exam3': [1, 3, 4, 7, 8], 'hoeren2_exam4': [2, 6, 8, 9, 10],
        'hoeren2_exam5': [2, 9, 10], 'hoeren2_exam6': [3, 4, 7], 'hoeren2_exam7': [3, 4, 7],
        'hoeren2_exam8': [1, 3, 4, 7, 8, 9], 'hoeren2_exam9': [1, 3, 4, 5, 8],
        'hoeren2_exam10': [1, 3, 4, 8, 9, 10], 'hoeren2_exam11': [1, 3, 4, 8, 9, 10],
        'hoeren2_exam12': [1, 4, 6, 7, 8], 'hoeren2_exam13': [1, 4, 6, 7, 8],
        'hoeren2_exam14': [2, 5, 8, 9, 10], 'hoeren2_exam15': [2, 3, 5, 6, 8, 10],
        'hoeren2_exam16': [2, 4, 5, 8, 10], 'hoeren2_exam17': [2, 4, 5, 8, 10],
        'hoeren2_exam18': [2, 3, 4, 7, 9, 10], 'hoeren2_exam19': [3, 4, 7, 9],
        'hoeren2_exam20': [2, 3, 5, 8, 9], 'hoeren2_exam21': [3, 5, 9],
        'hoeren2_exam22': [3, 4, 10], 'hoeren2_exam23': [1, 2, 4, 6],
        'hoeren2_exam24': [2, 3, 4, 6, 8, 10], 'hoeren2_exam25': [1, 2, 3, 4, 6, 8, 9],
        'hoeren2_exam26': [3, 5, 7, 8, 10], 'hoeren2_exam27': [2, 3, 4, 6, 8],
        'hoeren2_exam28': [1, 2, 4, 6, 8, 10], 'hoeren2_exam29': [4, 5, 9, 10],
        'hoeren2_exam30': [2, 3, 6, 7, 10], 'hoeren2_exam31': [2, 4, 5, 8, 9],
        
        'hoeren3_exam1': [1], 'hoeren3_exam2': [1, 3], 'hoeren3_exam3': [1, 3],
        'hoeren3_exam4': [1, 4], 'hoeren3_exam5': [1, 4], 'hoeren3_exam6': [1, 5],
        'hoeren3_exam7': [1, 5], 'hoeren3_exam8': [1, 5], 'hoeren3_exam9': [1, 5],
        'hoeren3_exam10': [2, 5], 'hoeren3_exam11': [1, 2, 3], 'hoeren3_exam12': [3, 4],
        'hoeren3_exam13': [1, 2, 5], 'hoeren3_exam14': [1, 4, 5], 'hoeren3_exam15': [1, 2, 5],
        'hoeren3_exam16': [1, 3, 4, 5], 'hoeren3_exam17': [1, 3], 'hoeren3_exam18': [2, 3, 4],
        'hoeren3_exam19': [2, 4], 'hoeren3_exam20': [1, 3], 'hoeren3_exam21': [2],
        'hoeren3_exam22': [2, 4], 'hoeren3_exam23': [1, 5], 'hoeren3_exam24': [2],
        'hoeren3_exam25': [1, 3], 'hoeren3_exam26': [1, 3, 5], 'hoeren3_exam27': [1, 3]
    };
    return correctMap[`${skill}_exam${examId}`] || [];
}

// الحصول على القسم النشط
function getActiveSection() {
    const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
    for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.style.display === 'block') return el;
    }
    return null;
}

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

function getCurrentExamId() {
    if (window.currentExamId) return window.currentExamId;
    const titleEl = document.getElementById('examTitle');
    if (titleEl) {
        const match = titleEl.textContent.match(/Exam\s+(\d+)/i);
        if (match) return parseInt(match[1]);
    }
    return 1;
}

function getCurrentSkill() {
    const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
    for (const section of sections) {
        if (document.getElementById(section)?.style.display === 'block') return section;
    }
    return 'hoeren1';
}

// إنشاء بطاقة شرح واحدة
function createHelpBox(index) {
    const box = document.createElement('div');
    box.className = 'help-box';
    
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpKey = `${skill}_exam${examId}_q${index}`;
    const data = window.HELP_DATA ? window.HELP_DATA[helpKey] : null;
    
    if (data) {
        let keywordsHtml = '';
        if (data.keywords?.length) {
            keywordsHtml = `<div style="margin:10px 0"><span style="color:#007bff;font-weight:bold">📌 كلمات مهمة:</span><br>`;
            data.keywords.forEach(k => {
                keywordsHtml += `<span style="display:inline-block;background:#e3f2fd;padding:4px 12px;border-radius:20px;font-size:13px;margin:3px">${k}</span>`;
            });
            keywordsHtml += `</div>`;
        }
        
        box.innerHTML = `
            <div style="padding:15px">
                <div style="font-weight:bold;color:#2c3e66;margin-bottom:15px;font-size:18px;border-right:4px solid #007bff;padding-right:12px">
                    ${index}️⃣ ${data.text || ''}
                </div>
                <div style="margin-bottom:12px">
                    <span style="color:#0056b3;font-weight:bold">📖 المعنى:</span>
                    <span style="color:#333"> ${data.meaning || 'لا يوجد'}</span>
                </div>
                ${keywordsHtml}
                <div style="margin-bottom:12px">
                    <span style="color:#0056b3;font-weight:bold">✨ تبسيط:</span>
                    <span style="color:#333"> ${data.simplified || 'لا يوجد'}</span>
                </div>
                <div>
                    <span style="color:#0056b3;font-weight:bold">🎭 تخيل:</span>
                    <span style="color:#333"> ${data.imagine || 'لا يوجد'}</span>
                </div>
            </div>
        `;
    } else {
        box.innerHTML = `
            <div style="text-align:center;padding:40px;color:#999">
                ❓ لا يوجد شرح متاح<br>
                <small>${helpKey}</small>
            </div>
        `;
    }
    
    box.style.cssText = `background:#fff;border:1px solid #dee2e6;border-radius:12px;padding:15px;transition:all 0.3s;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,0.05);margin-bottom:15px`;
    box.onmouseenter = () => { box.style.transform = 'translateY(-2px)'; box.style.boxShadow = '0 6px 16px rgba(0,0,0,0.1)'; box.style.borderColor = '#007bff'; };
    box.onmouseleave = () => { box.style.transform = 'translateY(0)'; box.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)'; box.style.borderColor = '#dee2e6'; };
    
    return box;
}

// إنشاء جميع البطاقات (فقط للأسئلة الصحيحة)
function createHelpLayer() {
    const container = document.createElement('div');
    container.id = 'helpLayerContainer';
    container.style.cssText = `display:flex;flex-direction:column;gap:15px;padding:10px;background:#f5f7fa;border-radius:16px;margin:15px 0`;
    
    const boxCount = getHelpBoxCount();
    const skill = getCurrentSkill();
    const examId = getCurrentExamId();
    const correctQuestions = getCorrectQuestionsForExam(skill, examId);
    
    if (!correctQuestions.length) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#666">📚 لا توجد أسئلة صحيحة في هذا الامتحان</div>';
        return container;
    }
    
    if (boxCount === 10) {
        for (let row = 0; row < 5; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.style.cssText = `display:grid;grid-template-columns:repeat(2,1fr);gap:15px;margin-bottom:5px`;
            for (let col = 0; col < 2; col++) {
                const idx = row * 2 + col + 1;
                if (correctQuestions.includes(idx)) {
                    rowDiv.appendChild(createHelpBox(idx));
                }
            }
            if (rowDiv.children.length) container.appendChild(rowDiv);
        }
    } else {
        const column = document.createElement('div');
        column.style.cssText = `display:flex;flex-direction:column;gap:15px`;
        for (let i = 1; i <= boxCount; i++) {
            if (correctQuestions.includes(i)) column.appendChild(createHelpBox(i));
        }
        if (column.children.length) container.appendChild(column);
    }
    
    return container;
}

// إخفاء عناصر الامتحان
function hideExamContent() {
    const hidden = [];
    const section = getActiveSection();
    if (!section) return hidden;
    
    for (let child of section.children) {
        if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
            child.style.display = 'none';
            hidden.push(child);
        }
    }
    return hidden;
}

function hideButtons() {
    const hidden = [];
    document.querySelectorAll('button').forEach(btn => {
        const text = btn.textContent;
        if (text.includes('✅') || text.includes('تصحيح') || text.includes('Prüfen') || text.includes('↺') || text.includes('إعادة تعيين')) {
            if (btn.style.display !== 'none') {
                btn.style.display = 'none';
                hidden.push(btn);
            }
        }
    });
    return hidden;
}

function showElements(elements) { elements?.forEach(el => { if (el) el.style.display = ''; }); }

// تبديل وضع المساعدة
function toggleHelp() {
    const existing = document.getElementById('helpLayerContainer');
    const section = getActiveSection();
    
    if (helpLayerActive) {
        existing?.remove();
        if (originalContentBackup) {
            showElements(originalContentBackup.questions);
            showElements(originalContentBackup.buttons);
            originalContentBackup = null;
        }
        helpLayerActive = false;
    } else {
        const hiddenQuestions = hideExamContent();
        const hiddenButtons = hideButtons();
        originalContentBackup = { questions: hiddenQuestions, buttons: hiddenButtons };
        
        const helpLayer = createHelpLayer();
        if (section && helpLayer.children.length) section.appendChild(helpLayer);
        helpLayerActive = true;
    }
}

// إضافة زر المساعدة
function addHelpButton() {
    if (document.getElementById('globalHelpButton')) return;
    if (document.getElementById('schreiben')?.style.display === 'block') return;
    
    const nav = document.getElementById('examNavButtons');
    if (nav) {
        const btn = document.createElement('button');
        btn.id = 'globalHelpButton';
        btn.textContent = '🧠 مساعدة ذكية للنجاح';
        btn.style.cssText = `background:linear-gradient(135deg,#007bff,#0056b3);color:white;border:none;border-radius:30px;padding:8px 20px;font-size:14px;font-weight:bold;cursor:pointer;transition:all 0.3s;margin-left:10px;box-shadow:0 2px 5px rgba(0,0,0,0.2)`;
        btn.onmouseenter = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; };
        btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'; };
        btn.onclick = (e) => { e.stopPropagation(); toggleHelp(); };
        nav.appendChild(btn);
    }
}

// مراقبة التغييرات
new MutationObserver(() => {
    if (document.getElementById('schreiben')?.style.display !== 'none') {
        document.getElementById('globalHelpButton')?.remove();
    } else if (!document.getElementById('globalHelpButton')) {
        addHelpButton();
    }
}).observe(document.body, { childList: true, subtree: true, attributes: true });

addHelpButton();

console.log('✅ helpLayer.js جاهز');
