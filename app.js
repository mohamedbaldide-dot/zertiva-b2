// ==================== تكوين المهارات (مرتبة حسب المطلوب) ====================
const skills = [
  { id: "hoeren1", name: "Hören Teil 1" },
  { id: "hoeren2", name: "Hören Teil 2" },
  { id: "hoeren3", name: "Hören Teil 3" },
  { id: "lesen1", name: "Lesen Teil 1" },
  { id: "lesen2", name: "Lesen Teil 2" },
  { id: "lesen3", name: "Lesen Teil 3" },
  { id: "sprach1", name: "Sprachbausteine Teil 1" },
  { id: "sprach2", name: "Sprachbausteine Teil 2" }
];

// متغيرات الحالة العامة
let currentSkill = null;
let currentExamId = null;
let currentQuestions = [];
let userAnswers = {};
let savedProgress = {};
let allSkillsCompleted = false;

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

function saveCurrentExamProgress() {
  if (!currentSkill || !currentExamId) return;
  if (!savedProgress[currentSkill]) savedProgress[currentSkill] = {};
  savedProgress[currentSkill][currentExamId] = userAnswers;
  localStorage.setItem("zertiva_progress", JSON.stringify(savedProgress));
  const saveBtn = document.querySelector(".save-progress-btn");
  if (saveBtn) {
    saveBtn.classList.add("saved");
    setTimeout(() => saveBtn.classList.remove("saved"), 500);
  }
}

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

// ==================== الصفحة 2: قائمة المهارات (مرتبة) ====================
function showSkillsList() {
  let skillsHtml = `
    <div class="settings-bar">
      <button id="zoomOutBtn">🔍 - تصغير الخط</button>
      <button id="zoomInBtn">🔍 + تكبير الخط</button>
    </div>
    <h2>اختر المهارة</h2>
    <div class="skills-grid">
  `;
  for (const skill of skills) {
    skillsHtml += `
      <div class="skill-card" data-skill="${skill.id}">
        <strong>${skill.name}</strong>
      </div>
    `;
  }
  skillsHtml += `</div>`;

  appDiv.innerHTML = skillsHtml;

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
    <h2>${skills.find(s => s.id === skillKey).name}</h2>
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

// ==================== باقي الدوال (نفسها تمامًا بدون تغيير) ====================
async function loadExam(skillKey, examId) {
  currentSkill = skillKey;
  currentExamId = examId;

  try {
    const response = await fetch(`data/${skillKey}/exam${examId}.json`);
    const examData = await response.json();
    currentQuestions = examData.questions;
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
    <h2>${skills.find(s => s.id === currentSkill).name} - الامتحان ${currentExamId}</h2>
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
    if (userAnswers[idx] !== undefined) {
      highlightAnswer(qDiv, userAnswers[idx]);
    }
    questionsArea.appendChild(qDiv);
  });

  document.querySelectorAll(".answer-true, .answer-false").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(btn.dataset.idx);
      const isTrue = btn.classList.contains("answer-true");
      userAnswers[idx] = isTrue;
      const parentContainer = btn.closest(".question-container");
      highlightAnswer(parentContainer, isTrue);
    });
  });

  document.getElementById("checkAnswersBtn").addEventListener("click", checkAnswers);
  document.getElementById("saveProgressBtn").addEventListener("click", () => saveCurrentExamProgress());
  document.getElementById("backExamsBtn").addEventListener("click", () => showExamsList(currentSkill));
  document.getElementById("showResultBtn").addEventListener("click", showFinalResult);
  attachZoomEvents();
}

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
  container.classList.remove("correct-answer", "wrong-answer");
}

function checkAnswers() {
  if (!currentQuestions.length) return;

  for (let i = 0; i < currentQuestions.length; i++) {
    const q = currentQuestions[i];
    const userAnswer = userAnswers[i];
    const correct = q.correct;

    const container = document.querySelector(`.question-container[data-qidx='${i}']`);
    if (!container) continue;

    container.classList.remove("correct-answer", "wrong-answer");

    if (userAnswer === correct) {
      container.classList.add("correct-answer");
    } else {
      container.classList.add("wrong-answer");
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
  saveCurrentExamProgress();
}

async function showFinalResult() {
  let resultHtml = await computeFullResult();
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
}

async function computeFullResult() {
  let totalScore = 0;
  let totalMax = 0;
  let skillDetails = [];

  for (const skill of skills) {
    const skillKey = skill.id;
    const skillName = skill.name;
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
      } catch(e) { }
    }
    if (skillMax > 0) {
      skillDetails.push(`<div>${skillName}: ${skillScore}/${skillMax}</div>`);
      totalScore += skillScore;
      totalMax += skillMax;
    }
  }

  let percentage = totalMax ? ((totalScore / totalMax)*100).toFixed(1) : 0;
  return `<div class="final-result-box">
    <h3>النتيجة النهائية</h3>
    <div style="font-size: 1.5rem;">${totalScore} / ${totalMax}</div>
    <div>النسبة المئوية: ${percentage}%</div>
    <hr>
    ${skillDetails.join('')}
  </div>`;
}

function attachZoomEvents() {
  const zoomIn = document.getElementById("zoomInBtn");
  const zoomOut = document.getElementById("zoomOutBtn");
  if (zoomIn) {
    zoomIn.onclick = () => document.body.classList.add("large-font");
  }
  if (zoomOut) {
    zoomOut.onclick = () => document.body.classList.remove("large-font");
  }
}

// بدء التطبيق
loadSavedProgress();
showStartScreen();