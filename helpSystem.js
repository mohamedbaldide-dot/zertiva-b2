// ============================================
// helpSystem.js - نظام المساعدة المتكامل (نسخة نهائية)
// ============================================

// ============================================
// البيانات (كل الشروحات)
// ============================================
const HELP_DATA = {};

// ========== Exam 10: Unwetterschäden (صحيح: 1,4) ==========
HELP_DATA["hoeren1_exam10_q1"] = {
    text: "Schwere Unwetter haben in Süddeutschland große Schäden verursacht.",
    meaning: "عواصف شديدة تسببت بأضرار كبيرة في جنوب ألمانيا",
    keywords: ["Unwetter = عواصف", "Schäden = أضرار", "verursacht = تسببت"],
    simplified: "العواصف دمرت أشياء كثيرة في الجنوب",
    imagine: "تخيل رياحاً قوية تقتلع الأشجار 🌪️"
};
HELP_DATA["hoeren1_exam10_q4"] = {
    text: "Die Feuerwehr war im Dauereinsatz, um die Schäden zu beseitigen.",
    meaning: "فرق الإطفاء كانت في خدمة مستمرة لإزالة الأضرار",
    keywords: ["Feuerwehr = إطفاء", "Dauereinsatz = خدمة مستمرة", "beseitigen = إزالة"],
    simplified: "رجال الإطفاء عملوا بلا توقف",
    imagine: "تخيل سيارات إطفاء تسير في كل مكان 🚒"
};

// أضف باقي البيانات هنا (من helpData.js القديم)
// يمكنك نسخ كل البيانات من helpData.js الذي لديك

// ============================================
// نظام الطبقة المساعدة
// ============================================

let helpLayerActive = false;
let originalContentBackup = null;

function getCorrectQuestions(skill, examId) {
    const correctMap = {
        'hoeren1_exam10': [1, 4],
        // أضف باقي الامتحانات هنا
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
    if (document.getElementById('hoeren1')?.style.display === 'block') return 'hoeren1';
    if (document.getElementById('hoeren2')?.style.display === 'block') return 'hoeren2';
    if (document.getElementById('hoeren3')?.style.display === 'block') return 'hoeren3';
    return 'hoeren1';
}

function getActiveSection() {
    if (document.getElementById('hoeren1')?.style.display === 'block') return document.getElementById('hoeren1');
    if (document.getElementById('hoeren2')?.style.display === 'block') return document.getElementById('hoeren2');
    if (document.getElementById('hoeren3')?.style.display === 'block') return document.getElementById('hoeren3');
    return null;
}

function createHelpCard(questionNumber) {
    const examId = getCurrentExamId();
    const skill = getCurrentSkill();
    const helpKey = `${skill}_exam${examId}_q${questionNumber}`;
    const data = HELP_DATA[helpKey];
    
    const card = document.createElement('div');
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
    
    console.log(`🔍 البحث عن شروحات: ${skill}_exam${examId}, الأسئلة الصحيحة:`, correctQuestions);
    
    if (correctQuestions.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:40px;color:#666">📚 لا توجد أسئلة صحيحة في هذا الامتحان</div>';
        return container;
    }
    
    correctQuestions.forEach(q => {
        const card = createHelpCard(q);
        if (card) container.appendChild(card);
    });
    
    return container;
}

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
        if (text.includes('✅') || text.includes('تصحيح') || text.includes('Prüfen') || text.includes('↺') || text.includes('إعادة')) {
            if (btn.style.display !== 'none') {
                btn.style.display = 'none';
                hidden.push(btn);
            }
        }
    });
    return hidden;
}

function showElements(elements) {
    if (!elements) return;
    elements.forEach(el => { if (el) el.style.display = ''; });
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
        console.log('❌ وضع المساعدة تم إيقافه');
    } else {
        const hiddenQuestions = hideExamContent();
        const hiddenButtons = hideButtons();
        originalContentBackup = { questions: hiddenQuestions, buttons: hiddenButtons };
        const helpLayer = createHelpLayer();
        if (section && helpLayer.children.length > 0) {
            section.appendChild(helpLayer);
            console.log('✅ وضع المساعدة تم تشغيله');
        } else {
            console.log('⚠️ لا توجد شروحات لعرضها');
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
    btn.style.cssText = 'background:linear-gradient(135deg,#007bff,#0056b3);color:white;border:none;border-radius:30px;padding:8px 20px;font-size:14px;font-weight:bold;cursor:pointer;margin-left:10px;box-shadow:0 2px 5px rgba(0,0,0,0.2);transition:all 0.3s';
    btn.onmouseenter = () => { btn.style.transform = 'scale(1.02)'; btn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; };
    btn.onmouseleave = () => { btn.style.transform = 'scale(1)'; btn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)'; };
    btn.onclick = (e) => { e.stopPropagation(); toggleHelp(); };
    nav.appendChild(btn);
    console.log('✅ زر المساعدة تم إضافته');
}

// بدء التشغيل
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHelpButton);
} else {
    addHelpButton();
}

console.log('✅ helpSystem.js تم التحميل بنجاح');