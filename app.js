// ==================== تكوين المهارات ====================
const skills = {
  "hoeren1": "Hören Teil 1",
  "hoeren2": "Hören Teil 2",
  "hoeren3": "Hören Teil 3",
  "lesen1": "Lesen Teil 1",
  "lesen2": "Lesen Teil 2",
  "lesen3": "Lesen Teil 3",
  "sprach1": "Sprachbausteine Teil 1",
  "sprach2": "Sprachbausteine Teil 2"
};

// متغيرات الحالة العامة
let currentSkill = null;           // المهارة المختارة حالياً
let currentExamId = null;          // رقم الامتحان الحالي
let currentQuestions = [];          // مصفوفة الأسئلة (من JSON)
let userAnswers = {};               // تخزين إجابات المستخدم (مؤقتاً)
let savedProgress = {};             // التقدم المحفوظ (localStorage)
let allSkillsCompleted = false;     // هل انتهى المستخدم من كل المهارات؟

// عنصر الـ app الرئيسي
const appDiv = document.getElementById("app");

// تحميل التقدم المحفوظ من localStorage
function loadSavedProgress() {
  const stored = localStorage.getItem("zertiva_progress");
  if (stored) {
    savedProgress = JSON.parse(stored);
  } else {
    savedProgress = {};
  }
}

// حفظ التقدم الحالي للمهارة والامتحان المفتوح
function saveCurrentExamProgress() {
  if (!currentSkill || !currentExamId) return;
  if (!savedProgress[currentSkill]) savedProgress[currentSkill] = {};
  savedProgress[currentSkill][currentExamId] = userAnswers;
  localStorage.setItem("zertiva_progress", JSON.stringify(savedProgress));
  // تغيير مظهر زر الحفظ
  const saveBtn = document.querySelector(".save-progress-btn");
  if (saveBtn) {
    saveBtn.classList.add("saved");
    setTimeout(() => saveBtn.classList.remove("saved"), 500);
  }
}

// تحميل إجابات مخزنة لامتحان معين
function loadExamProgress(skill, examId) {
  if (savedProgress[skill] && savedProgress[skill][examId]) {
    return savedProgress[skill][examId];
  }
  return {};
}

// ==================== الصفحة 1: شاشة البداية ====================
function showStartScreen() {
  appDiv.innerHTML = `
    <div class="settings-bar">
      <button id="zoomOutBtn">🔍 - تصغير الخط</button>
      <button id="zoomInBtn">🔍 + تكبير الخط</button>
    </div>
    <div style="text-align: center; padding: 60px 20px;">
      <h1>Zertiva B2</h1>
      <p style="margin: 20px 0;">أوثق منصة للتحضير لامتحان Telc B2</p>
      <button id="startBtn" style="padding: 14px 40px; font-size: 1.2rem;">لنبدأ 🚀</button>
    </div>
  `;

  document.getElementById("startBtn").addEventListener("click", showSkillsList);
  attachZoomEvents();
}

// ==================== الصفحة 2: قائمة المهارات ====================
function showSkillsList() {
  let skillsHtml = `
    <div class="settings-bar">
      <button id="zoomOutBtn">🔍 - تصغير الخط</button>
      <button id="zoomInBtn">🔍 + تكبير الخط</button>
    </div>
    <h2>اختر المهارة</h2>
    <div class="skills-grid">
  `;
  for (const [key, name] of Object.entries(skills)) {
    skillsHtml += `
      <div class="skill-card" data-skill="${key}">
        <strong>${name}</strong>
      </div>
    `;
  }
  skillsHtml += `</div>`;

  appDiv.innerHTML = skillsHtml;

  // إضافة حدث لكل بطاقة مهارة
  document.querySelectorAll(".skill-card").forEach(card => {
    card.addEventListener("click", () => {
      const skillKey = card.dataset.skill;
      showExamsList(skillKey);
    });
  });
  attachZoomEvents();
}

// ==================== الصفحة 3: قائمة الامتحانات لمهارة معينة ====================
async function showExamsList(skillKey) {
  // سنفترض أن لكل مهارة من 1 إلى 5 امتحانات كحد أدنى (يمكن التوسع)
  // سنجرب تحميل exam1.json ، exam2.json ... حتى نجد ملف غير موجود
  let exams = [];
  let examId = 1;
  while (true) {
    try {
      const response = await fetch(`data/${skillKey}/exam${examId}.json`);
      if (!response.ok) break;
      const data = await response.json();
      exams.push({ id: examId, title: data.title || `Exam ${examId}` });
      examId++;
    } catch (e) {
      break;
    }
  }

  if (exams.length === 0) {
    appDiv.innerHTML = `
      <div class="settings-bar"><button id="zoomOutBtn">🔍 -</button><button id="zoomInBtn">🔍 +</button></div>
      <p>⚠️ لا توجد امتحانات لهذه المهارة حالياً. أضف ملفات JSON في مجلد data/${skillKey}/</p>
      <button id="backSkillsBtn">🔙 رجوع</button>
    `;
    document.getElementById("backSkillsBtn").addEventListener("click", showSkillsList);
    attachZoomEvents();
    return;
  }

  let examsHtml = `
    <div class="settings-bar">
      <button id="zoomOutBtn">🔍 - تصغير الخط</button>
      <button id="zoomInBtn">🔍 + تكبير الخط</button>
    </div>
    <h2>${skills[skillKey]}</h2>
    <div class="exams-grid">
  `;
  exams.forEach(exam => {
    examsHtml += `
      <div class="exam-card" data-skill="${skillKey}" data-exam="${exam.id}">
        ${exam.title}
      </div>
    `;
  });
  examsHtml += `</div><button id="backSkillsBtn" class="btn-back">🔙 رجوع للمهارات</button>`;

  appDiv.innerHTML = examsHtml;

  document.querySelectorAll(".exam-card").forEach(card => {
    card.addEventListener("click", () => {
      const skill = card.dataset.skill;
      const exam = parseInt(card.dataset.exam);
      loadExam(skill, exam);
    });
  });
  document.getElementById("backSkillsBtn").addEventListener("click", showSkillsList);
  attachZoomEvents();
}

// ==================== الصفحة 4: عرض أسئلة الامتحان ====================
async function loadExam(skillKey, examId) {
  currentSkill = skillKey;
  currentExamId = examId;

  try {
    const response = await fetch(`data/${skillKey}/exam${examId}.json`);
    const examData = await response.json();
    currentQuestions = examData.questions; // مصفوفة الأسئلة
    // تحميل الإجابات المحفوظة مسبقاً
    userAnswers = loadExamProgress(skillKey, examId);
    renderExam();
  } catch (error) {
    appDiv.innerHTML = `<p>خطأ في تحميل الامتحان: ${error.message}</p><button onclick="showExamsList('${skillKey}')">رجوع</button>`;
  }
}

function renderExam() {
  let questionsHtml = `
    <div class="settings-bar">
      <button id="zoomOutBtn">🔍 -</button>
      <button id="zoomInBtn">🔍 +</button>
    </div>
    <h2>${skills[currentSkill]} - الامتحان ${currentExamId}</h2>
    <div id="questionsArea"></div>
    <div class="nav-buttons">
      <button id="checkAnswersBtn" class="btn-check">📝 تصحيح</button>
      <button id="saveProgressBtn" class="save-progress-btn">💾 حفظ التقدم</button>
      <button id="backExamsBtn" class="btn-back">🔙 قائمة الامتحانات</button>
      <button id="showResultBtn" class="btn-result">📊 رؤية النتيجة النهائية</button>
    </div>
  `;
  appDiv.innerHTML = questionsHtml;

  const questionsArea = document.getElementById("questionsArea");
  // عرض كل سؤال
  currentQuestions.forEach((q, idx) => {
    const qDiv = document.createElement("div");
    qDiv.className = "question-container";
    qDiv.setAttribute("data-qidx", idx);
    qDiv.innerHTML = `
      <div class="question-text">${idx+1}. ${q.text}</div>
      <div class="answer-buttons">
        <button class="answer-true" data-idx="${idx}">✔ صحيح</button>
        <button class="answer-false" data-idx="${idx}">✖ خطأ</button>
      </div>
    `;
    // استعادة الإجابة المخزنة
    if (userAnswers[idx] !== undefined) {
      highlightAnswer(qDiv, userAnswers[idx]);
    }
    questionsArea.appendChild(qDiv);
  });

  // إضافة أحداث الأجوبة
  document.querySelectorAll(".answer-true, .answer-false").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.dataset.idx);
      const isTrue = btn.classList.contains("answer-true");
      userAnswers[idx] = isTrue;
      // تحديث لون الخلفية للتو
      const parentContainer = btn.closest(".question-container");
      highlightAnswer(parentContainer, isTrue);
    });
  });

  // أزرار التحكم
  document.getElementById("checkAnswersBtn").addEventListener("click", checkAnswers);
  document.getElementById("saveProgressBtn").addEventListener("click", () => saveCurrentExamProgress());
  document.getElementById("backExamsBtn").addEventListener("click", () => showExamsList(currentSkill));
  document.getElementById("showResultBtn").addEventListener("click", showFinalResult);
  attachZoomEvents();
}

// دالة لتلوين المربع بناءً على الإجابة (بدون عرض الصحة بعد)
function highlightAnswer(container, answer) {
  const btns = container.querySelectorAll(".answer-true, .answer-false");
  btns.forEach(btn => btn.style.opacity = "0.7");
  if (answer === true) {
    const trueBtn = container.querySelector(".answer-true");
    if (trueBtn) trueBtn.style.opacity = "1";
  } else {
    const falseBtn = container.querySelector(".answer-false");
    if (falseBtn) falseBtn.style.opacity = "1";
  }
  // إزالة الفئات القديمة
  container.classList.remove("correct-answer", "wrong-answer");
  // سيكون التصحيح هو الذي يضيف correct/wrong لاحقاً
}

// دالة التصحيح (تلوين أخضر/أحمر مع عرض الإجابة الصحيحة)
function checkAnswers() {
  if (!currentQuestions.length) return;

  for (let i = 0; i < currentQuestions.length; i++) {
    const q = currentQuestions[i];
    const userAnswer = userAnswers[i];
    const correct = q.correct; // true/false

    const container = document.querySelector(`.question-container[data-qidx='${i}']`);
    if (!container) continue;

    // إزالة الألوان القديمة
    container.classList.remove("correct-answer", "wrong-answer");

    if (userAnswer === correct) {
      container.classList.add("correct-answer");
    } else {
      container.classList.add("wrong-answer");
      // عرض الإجابة الصحيحة داخل السؤال
      let correctSpan = container.querySelector(".correct-answer-hint");
      if (!correctSpan) {
        const hintSpan = document.createElement("div");
        hintSpan.className = "correct-answer-hint";
        hintSpan.style.marginTop = "10px";
        hintSpan.style.fontSize = "0.9rem";
        hintSpan.style.color = "#059669";
        hintSpan.style.fontWeight = "bold";
        hintSpan.innerText = `✅ الإجابة الصحيحة: ${correct ? "صحيح" : "خطأ"}`;
        container.appendChild(hintSpan);
      } else {
        correctSpan.innerText = `✅ الإجابة الصحيحة: ${correct ? "صحيح" : "خطأ"}`;
      }
    }
  }
  // حفظ تلقائي بعد التصحيح
  saveCurrentExamProgress();
}

// ==================== النتيجة النهائية ====================
function showFinalResult() {
  // حساب النتيجة لكل مهارة بناءً على التقدم المحفوظ
  let detailedResults = [];
  let totalPoints = 0;
  let totalPossible = 0;

  for (const [skillKey, skillName] of Object.entries(skills)) {
    let skillPoints = 0;
    let skillMax = 0;
    const examsProgress = savedProgress[skillKey] || {};
    // سنحاول حساب النقاط لكل امتحان وجد في savedProgress وملفاته موجودة
    // ملاحظة: سنحتاج لتحميل كل امتحان مرة أخرى لمعرفة الأسئلة الصحيحة – لكن يمكن حساب النقاط بشكل موازٍ
    // سنقوم بجلب بيانات الامتحانات الضرورية بشكل متزامن باستخدام Promise
    // لكن للتبسيط: سنفترض أن skillMax = عدد الامتحانات * 5 (كل امتحان له 5 أسئلة افتراضياً)
    // لكن الأفضل: سيتم حسابها بناءً على الملفات الفعلية.
    // سأستخدم دالة مساعدة غير متزامنة لكننا نريد عرض النتيجة بسرعة. 
    // لذا سأقوم بعمل نسخة مبسطة: نعطي مثالاً توضيحياً ثم نستخدم localStorage.
  }

  // نسخة عملية: نجمع النقاط من التقدم المحفوظ لكل امتحان تم حله
  // سنقوم بجلب بيانات الامتحانات أثناء عرض النتيجة (باستخدام async)
  computeFullResult().then(resultHtml => {
    appDiv.innerHTML = `
      <div class="settings-bar"><button id="zoomOutBtn">🔍 -</button><button id="zoomInBtn">🔍 +</button></div>
      ${resultHtml}
      <div class="nav-buttons">
        <button id="backHomeBtn" class="btn-back">🏠 الرئيسية</button>
        <button id="backSkillsFromResultBtn" class="btn-back">📚 المهارات</button>
      </div>
    `;
    document.getElementById("backHomeBtn").addEventListener("click", showStartScreen);
    document.getElementById("backSkillsFromResultBtn").addEventListener("click", showSkillsList);
    attachZoomEvents();
  });
}

async function computeFullResult() {
  let totalScore = 0;
  let totalMax = 0;
  let skillDetails = [];

  for (const [skillKey, skillName] of Object.entries(skills)) {
    let skillScore = 0;
    let skillMax = 0;
    const examsInSkill = savedProgress[skillKey] || {};
    const examIds = Object.keys(examsInSkill);

    for (const examId of examIds) {
      try {
        const resp = await fetch(`data/${skillKey}/exam${examId}.json`);
        const examData = await resp.json();
        const questions = examData.questions;
        const userAns = examsInSkill[examId];
        let examCorrect = 0;
        questions.forEach((q, idx) => {
          if (userAns && userAns[idx] === q.correct) examCorrect++;
        });
        skillScore += examCorrect;
        skillMax += questions.length;
      } catch(e) { /* تجاهل الملفات غير الموجودة */ }
    }
    if (skillMax > 0) {
      skillDetails.push(`<div>${skillName}: ${skillScore}/${skillMax}</div>`);
      totalScore += skillScore;
      totalMax += skillMax;
    }
  }

  let percentage = totalMax ? ((totalScore / totalMax)*100).toFixed(1) : 0;
  let finalHtml = `<div class="final-result-box">
    <h3>النتيجة النهائية</h3>
    <div style="font-size: 1.5rem;">${totalScore} / ${totalMax}</div>
    <div>النسبة المئوية: ${percentage}%</div>
    <hr>
    ${skillDetails.join('')}
  </div>`;
  return finalHtml;
}

// ==================== تكبير وتصغير الخط ====================
function attachZoomEvents() {
  const zoomIn = document.getElementById("zoomInBtn");
  const zoomOut = document.getElementById("zoomOutBtn");
  if (zoomIn) {
    zoomIn.onclick = () => {
      document.body.classList.add("large-font");
    };
  }
  if (zoomOut) {
    zoomOut.onclick = () => {
      document.body.classList.remove("large-font");
    };
  }
}

// بدء التطبيق
loadSavedProgress();
showStartScreen();