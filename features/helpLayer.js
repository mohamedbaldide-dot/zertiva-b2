// ============================================
// helpLayer.js - نسخة مبسطة ومضمونة
// ============================================

let helpActive = false;
let backup = null;

// الأسئلة الصحيحة
const correctMap = {
    'hoeren1_exam1': [2,3], 'hoeren1_exam2': [3,5], 'hoeren1_exam3': [2,3,5],
    'hoeren1_exam4': [1,5], 'hoeren1_exam5': [2,4], 'hoeren1_exam6': [2,4],
    'hoeren1_exam7': [1,2,5], 'hoeren1_exam8': [3,4,5], 'hoeren1_exam9': [1,2],
    'hoeren1_exam10': [1,4], 'hoeren1_exam11': [1,4], 'hoeren1_exam12': [1,4],
    'hoeren1_exam13': [3,4,5], 'hoeren1_exam14': [1,3], 'hoeren1_exam15': [2,3],
    'hoeren1_exam16': [2,3,5], 'hoeren1_exam17': [4,5], 'hoeren1_exam18': [1,3,5],
    'hoeren1_exam19': [1,3,5], 'hoeren1_exam20': [1,3,4], 'hoeren1_exam21': [3],
    'hoeren1_exam22': [1,2,5], 'hoeren1_exam23': [3,5], 'hoeren1_exam24': [1,3,5],
    'hoeren1_exam25': [1,2,5], 'hoeren1_exam26': [1,5], 'hoeren1_exam27': [1,2],
    'hoeren2_exam1': [3,4,8,9,10], 'hoeren2_exam2': [1,3,4,8], 'hoeren2_exam3': [1,3,4,7,8],
    'hoeren2_exam4': [2,6,8,9,10], 'hoeren2_exam5': [2,9,10], 'hoeren2_exam6': [3,4,7],
    'hoeren2_exam7': [3,4,7], 'hoeren2_exam8': [1,3,4,7,8,9], 'hoeren2_exam9': [1,3,4,5,8],
    'hoeren2_exam10': [1,3,4,8,9,10], 'hoeren2_exam11': [1,3,4,8,9,10], 'hoeren2_exam12': [1,4,6,7,8],
    'hoeren2_exam13': [1,4,6,7,8], 'hoeren2_exam14': [2,5,8,9,10], 'hoeren2_exam15': [2,3,5,6,8,10],
    'hoeren2_exam16': [2,4,5,8,10], 'hoeren2_exam17': [2,4,5,8,10], 'hoeren2_exam18': [2,3,4,7,9,10],
    'hoeren2_exam19': [3,4,7,9], 'hoeren2_exam20': [2,3,5,8,9], 'hoeren2_exam21': [3,5,9],
    'hoeren2_exam22': [3,4,10], 'hoeren2_exam23': [1,2,4,6], 'hoeren2_exam24': [2,3,4,6,8,10],
    'hoeren2_exam25': [1,2,3,4,6,8,9], 'hoeren2_exam26': [3,5,7,8,10], 'hoeren2_exam27': [2,3,4,6,8],
    'hoeren2_exam28': [1,2,4,6,8,10], 'hoeren2_exam29': [4,5,9,10], 'hoeren2_exam30': [2,3,6,7,10],
    'hoeren2_exam31': [2,4,5,8,9], 'hoeren3_exam1': [1], 'hoeren3_exam2': [1,3], 'hoeren3_exam3': [1,3],
    'hoeren3_exam4': [1,4], 'hoeren3_exam5': [1,4], 'hoeren3_exam6': [1,5], 'hoeren3_exam7': [1,5],
    'hoeren3_exam8': [1,5], 'hoeren3_exam9': [1,5], 'hoeren3_exam10': [2,5], 'hoeren3_exam11': [1,2,3],
    'hoeren3_exam12': [3,4], 'hoeren3_exam13': [1,2,5], 'hoeren3_exam14': [1,4,5], 'hoeren3_exam15': [1,2,5],
    'hoeren3_exam16': [1,3,4,5], 'hoeren3_exam17': [1,3], 'hoeren3_exam18': [2,3,4], 'hoeren3_exam19': [2,4],
    'hoeren3_exam20': [1,3], 'hoeren3_exam21': [2], 'hoeren3_exam22': [2,4], 'hoeren3_exam23': [1,5],
    'hoeren3_exam24': [2], 'hoeren3_exam25': [1,3], 'hoeren3_exam26': [1,3,5], 'hoeren3_exam27': [1,3]
};

function getCurrentExam() {
    if (window.currentExamId) return window.currentExamId;
    const title = document.getElementById('examTitle')?.textContent || '';
    const match = title.match(/Exam\s+(\d+)/i);
    return match ? parseInt(match[1]) : 1;
}

function getCurrentSkill() {
    const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
    for (let s of sections) {
        if (document.getElementById(s)?.style.display === 'block') return s;
    }
    return 'hoeren1';
}

function getQuestionCount() {
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

function createHelpCard(index, data) {
    const card = document.createElement('div');
    card.style.cssText = 'background:#fff;border-radius:12px;padding:15px;margin-bottom:15px;box-shadow:0 2px 8px rgba(0,0,0,0.05);border:1px solid #dee2e6';
    let kwHtml = '';
    if (data.keywords?.length) {
        kwHtml = '<div style="margin:10px 0"><span style="color:#007bff;font-weight:bold">📌 كلمات مهمة:</span><br>';
        data.keywords.forEach(k => { kwHtml += `<span style="display:inline-block;background:#e3f2fd;padding:4px 12px;border-radius:20px;font-size:12px;margin:3px">${k}</span>`; });
        kwHtml += '</div>';
    }
    card.innerHTML = `
        <div style="font-weight:bold;color:#2c3e66;border-right:4px solid #007bff;padding-right:12px;margin-bottom:15px">${index}️⃣ ${data.text || ''}</div>
        <div><span style="color:#0056b3;font-weight:bold">📖 المعنى:</span> ${data.meaning || 'لا يوجد'}</div>
        ${kwHtml}
        <div><span style="color:#0056b3;font-weight:bold">✨ تبسيط:</span> ${data.simplified || 'لا يوجد'}</div>
        <div><span style="color:#0056b3;font-weight:bold">🎭 تخيل:</span> ${data.imagine || 'لا يوجد'}</div>
    `;
    return card;
}

function toggleHelp() {
    const container = document.getElementById('helpLayerContainer');
    const section = getActiveSection();
    
    if (helpActive) {
        container?.remove();
        if (backup) {
            backup.questions.forEach(el => { if (el) el.style.display = ''; });
            backup.buttons.forEach(btn => { if (btn) btn.style.display = ''; });
            backup = null;
        }
        helpActive = false;
        return;
    }
    
    // إخفاء المحتوى الحالي
    const hiddenQuestions = [];
    const hiddenButtons = [];
    if (section) {
        for (let child of section.children) {
            if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
                child.style.display = 'none';
                hiddenQuestions.push(child);
            }
        }
    }
    document.querySelectorAll('button').forEach(btn => {
        const txt = btn.textContent;
        if (txt.includes('✅') || txt.includes('تصحيح') || txt.includes('Prüfen') || txt.includes('↺') || txt.includes('إعادة')) {
            if (btn.style.display !== 'none') {
                btn.style.display = 'none';
                hiddenButtons.push(btn);
            }
        }
    });
    backup = { questions: hiddenQuestions, buttons: hiddenButtons };
    
    // عرض المساعدة
    const skill = getCurrentSkill();
    const examId = getCurrentExam();
    const correct = correctMap[`${skill}_exam${examId}`] || [];
    const total = getQuestionCount();
    
    const helpDiv = document.createElement('div');
    helpDiv.id = 'helpLayerContainer';
    helpDiv.style.cssText = 'display:flex;flex-direction:column;gap:15px;padding:15px;background:#f5f7fa;border-radius:16px;margin:15px 0';
    
    if (correct.length === 0) {
        helpDiv.innerHTML = '<div style="text-align:center;padding:40px">📚 لا توجد أسئلة صحيحة</div>';
    } else {
        if (total === 10) {
            for (let r = 0; r < 5; r++) {
                const row = document.createElement('div');
                row.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:15px';
                for (let c = 0; c < 2; c++) {
                    const idx = r * 2 + c + 1;
                    if (correct.includes(idx)) {
                        const key = `${skill}_exam${examId}_q${idx}`;
                        const data = window.HELP_DATA?.[key];
                        if (data) row.appendChild(createHelpCard(idx, data));
                    }
                }
                if (row.children.length) helpDiv.appendChild(row);
            }
        } else {
            const col = document.createElement('div');
            col.style.cssText = 'display:flex;flex-direction:column;gap:15px';
            for (let i = 1; i <= total; i++) {
                if (correct.includes(i)) {
                    const key = `${skill}_exam${examId}_q${i}`;
                    const data = window.HELP_DATA?.[key];
                    if (data) col.appendChild(createHelpCard(i, data));
                }
            }
            if (col.children.length) helpDiv.appendChild(col);
        }
    }
    
    if (section) section.appendChild(helpDiv);
    helpActive = true;
}

function getActiveSection() {
    const sections = ['hoeren1', 'hoeren2', 'hoeren3', 'teil1', 'teil2', 'teil3', 'sprach1', 'sprach2'];
    for (let s of sections) {
        const el = document.getElementById(s);
        if (el && el.style.display === 'block') return el;
    }
    return null;
}

function addHelpButton() {
    if (document.getElementById('globalHelpButton')) return;
    const nav = document.getElementById('examNavButtons');
    if (!nav) return;
    const btn = document.createElement('button');
    btn.id = 'globalHelpButton';
    btn.textContent = '🧠 مساعدة ذكية للنجاح';
    btn.style.cssText = 'background:linear-gradient(135deg,#007bff,#0056b3);color:white;border:none;border-radius:30px;padding:8px 20px;font-size:14px;font-weight:bold;cursor:pointer;margin-left:10px';
    btn.onclick = (e) => { e.stopPropagation(); toggleHelp(); };
    nav.appendChild(btn);
}

// بدء التشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHelpButton);
} else {
    addHelpButton();
}

console.log('✅ helpLayer.js تم التحميل');
