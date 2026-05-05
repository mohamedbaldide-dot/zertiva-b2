// helpLayer.js - نظام الطبقة المساعدة الذكي
let helpLayerActive = false;
let originalContentBackup = null;

function getCorrectQuestions(skill, examId) {
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
        'hoeren2_exam31': [2,4,5,8,9],
        'hoeren3_exam1': [1], 'hoeren3_exam2': [1,3], 'hoeren3_exam3': [1,3],
        'hoeren3_exam4': [1,4], 'hoeren3_exam5': [1,4], 'hoeren3_exam6': [1,5],
        'hoeren3_exam7': [1,5], 'hoeren3_exam8': [1,5], 'hoeren3_exam9': [1,5],
        'hoeren3_exam10': [2,5], 'hoeren3_exam11': [1,2,3], 'hoeren3_exam12': [3,4],
        'hoeren3_exam13': [1,2,5], 'hoeren3_exam14': [1,4,5], 'hoeren3_exam15': [1,2,5],
        'hoeren3_exam16': [1,3,4,5], 'hoeren3_exam17': [1,3], 'hoeren3_exam18': [2,3,4],
        'hoeren3_exam19': [2,4], 'hoeren3_exam20': [1,3], 'hoeren3_exam21': [2],
        'hoeren3_exam22': [2,4], 'hoeren3_exam23': [1,5], 'hoeren3_exam24': [2],
        'hoeren3_exam25': [1,3], 'hoeren3_exam26': [1,3,5], 'hoeren3_exam27': [1,3]
    };
    return correctMap[`${skill}_exam${examId}`] || [];
}

function getCurrentExamId() {
    if (window.currentExamId) return window.currentExamId;
    const title = document.getElementById('examTitle')?.textContent || '';
    const match = title.match(/Exam\s+(\d+)/i);
    return match ? parseInt(match[1]) : 1;
}

function getCurrentSkill() {
    const activeTab = document.querySelector('.skill-tab.active');
    if (activeTab) return activeTab.dataset.skill;
    return 'hoeren1';
}

function getActiveSection() {
    const activeSkill = getCurrentSkill();
    return document.getElementById(activeSkill);
}

function createHelpCard(questionNumber) {
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpKey = `${skill}_exam${examId}_q${questionNumber}`;
    const data = window.HELP_DATA ? window.HELP_DATA[helpKey] : null;
    
    const card = document.createElement('div');
    card.className = 'help-card';
    card.style.cssText = 'background:white;border-radius:12px;padding:20px;margin-bottom:15px;box-shadow:0 2px 8px rgba(0,0,0,0.08);border:1px solid #e0e0e0';
    
    if (data) {
        let keywordsHtml = '';
        if (data.keywords && data.keywords.length) {
            keywordsHtml = '<div style="margin:12px 0"><span style="color:#007bff;font-weight:bold">📌 كلمات مهمة:</span><br>';
            data.keywords.forEach(k => {
                keywordsHtml += `<span style="display:inline-block;background:#e3f2fd;padding:5px 12px;border-radius:20px;font-size:13px;margin:3px">${k}</span>`;
            });
            keywordsHtml += '</div>';
        }
        card.innerHTML = `
            <div style="font-weight:bold;color:#2c3e66;border-right:4px solid #007bff;padding-right:12px;margin-bottom:15px">${questionNumber}️⃣ ${data.text}</div>
            <div><span style="color:#0056b3;font-weight:bold">📖 المعنى:</span> ${data.meaning}</div>
            ${keywordsHtml}
            <div><span style="color:#0056b3;font-weight:bold">✨ تبسيط:</span> ${data.simplified}</div>
            <div><span style="color:#0056b3;font-weight:bold">🎭 تخيل:</span> ${data.imagine}</div>
        `;
    } else {
        card.innerHTML = `<div style="text-align:center;padding:20px;color:#999">❓ لا يوجد شرح للسؤال ${questionNumber}</div>`;
    }
    return card;
}

function createHelpLayer() {
    const container = document.createElement('div');
    container.id = 'helpLayerContainer';
    container.style.cssText = 'background:#f8f9fa;border-radius:16px;padding:20px;margin:20px 0';
    
    const skill = getCurrentSkill();
    const examId = getCurrentExamId();
    const correctQuestions = getCorrectQuestions(skill, examId);
    
    if (correctQuestions.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#666">📚 لا توجد أسئلة صحيحة في هذا الامتحان</div>';
        return container;
    }
    
    const title = document.createElement('div');
    title.style.cssText = 'font-size:20px;font-weight:bold;margin-bottom:20px;color:#2c3e66;text-align:center';
    title.innerHTML = '🧠 الأسئلة الصحيحة في هذا الامتحان';
    container.appendChild(title);
    
    correctQuestions.forEach(q => container.appendChild(createHelpCard(q)));
    return container;
}

function hideExamContent() {
    const hidden = [];
    const section = getActiveSection();
    if (!section) return hidden;
    
    for (let child of section.children) {
        if (child.id !== 'helpLayerContainer' && child.style.display !== 'none') {
            const originalDisplay = child.style.display;
            child.style.display = 'none';
            hidden.push({ element: child, originalDisplay: originalDisplay });
        }
    }
    return hidden;
}

function hideButtons() {
    const hidden = [];
    const buttonsToHide = ['checkBtn', 'resetBtn', 'prevExamBtn', 'nextExamBtn'];
    
    buttonsToHide.forEach(id => {
        const btn = document.getElementById(id);
        if (btn && btn.style.display !== 'none') {
            const originalDisplay = btn.style.display;
            btn.style.display = 'none';
            hidden.push({ element: btn, originalDisplay: originalDisplay });
        }
    });
    return hidden;
}

function showElements(elements) {
    if (!elements) return;
    elements.forEach(item => {
        if (item && item.element) {
            item.element.style.display = item.originalDisplay || '';
        }
    });
}

function toggleHelp() {
    const existing = document.getElementById('helpLayerContainer');
    const section = getActiveSection();
    
    if (helpLayerActive) {
        if (existing) existing.remove();
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
        if (section && helpLayer.children.length > 0) {
            section.appendChild(helpLayer);
        }
        helpLayerActive = true;
    }
}

function addHelpButton() {
    if (document.getElementById('globalHelpButton')) return;
    
    const nav = document.getElementById('examNavButtons');
    if (!nav) return;
    
    const btn = document.createElement('button');
    btn.id = 'globalHelpButton';
    btn.textContent = '🧠 مساعدة ذكية للنجاح';
    btn.style.cssText = 'background:linear-gradient(135deg,#007bff,#0056b3);color:white;border:none;border-radius:30px;padding:8px 20px;font-size:14px;font-weight:bold;cursor:pointer;margin-left:10px;box-shadow:0 2px 5px rgba(0,0,0,0.2)';
    btn.onclick = (e) => { e.stopPropagation(); toggleHelp(); };
    
    const navButtons = nav.querySelector('.nav-buttons');
    if (navButtons) {
        navButtons.appendChild(btn);
    } else {
        nav.appendChild(btn);
    }
}

function initHelpLayer() {
    addHelpButton();
    console.log('✅ helpLayer.js تم تحميله وتفعيله');
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelpLayer);
} else {
    initHelpLayer();
}
