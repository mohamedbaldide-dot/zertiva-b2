// ============================================
// exams.js - نظام الامتحانات المتكامل
// ============================================

const teile = [
  { id: 1, name: "Lesen Teil 1", container: "teil1" },
  { id: 2, name: "Lesen Teil 2", container: "teil2" },
  { id: 3, name: "Lesen Teil 3", container: "teil3" },
  { id: 4, name: "Sprachbausteine Teil 1", container: "sprach1" },
  { id: 5, name: "Sprachbausteine Teil 2", container: "sprach2" },
  { id: 6, name: "Hören Teil 1", container: "hoeren1" },
  { id: 7, name: "Hören Teil 2", container: "hoeren2" },
  { id: 8, name: "Hören Teil 3", container: "hoeren3" }
];

let currentExamId = null;
let currentExamData = null;

// دالة لقراءة جميع الامتحانات المتاحة من مجلد data/lesen1/
async function getAvailableExams() {
  const exams = [];
  for (let i = 1; i <= 40; i++) {
    try {
      const response = await fetch(`data/lesen1/exam${i}.json`);
      if (response.ok) {
        const data = await response.json();
        exams.push({ id: i, title: data.title, skill: data.skill });
      }
    } catch(e) {}
  }
  return exams;
}

// عرض قائمة الامتحانات
async function renderExamList() {
  const container = document.getElementById("examsList");
  if (!container) return;
  container.innerHTML = "";
  
  const exams = await getAvailableExams();
  
  if (exams.length === 0) {
    container.innerHTML = '<div class="item">⚠️ لا توجد امتحانات متاحة حالياً</div>';
    return;
  }
  
  exams.forEach(exam => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${exam.id}. ${exam.title}`;
    div.onclick = () => openExam(exam.id);
    container.appendChild(div);
  });
}

// فتح امتحان محدد
async function openExam(examId) {
  currentExamId = examId;
  try {
    const response = await fetch(`data/lesen1/exam${examId}.json`);
    currentExamData = await response.json();
    
    document.getElementById("list").classList.remove("active");
    document.getElementById("exam").classList.add("active");
    document.getElementById("examTitle").innerHTML = currentExamData.title;
    
    buildNavButtons();
    buildTeil1(currentExamData.questions);
    showTeil(1);
  } catch(e) {
    alert("خطأ في تحميل الامتحان: " + e.message);
  }
}

// بناء أزرار التنقل
function buildNavButtons() {
  const navDiv = document.getElementById("navButtons");
  navDiv.innerHTML = "";
  teile.forEach((teil, idx) => {
    const btn = document.createElement("button");
    btn.innerText = teil.name;
    btn.className = "teil-btn";
    btn.onclick = () => showTeil(idx + 1);
    navDiv.appendChild(btn);
  });
}

// عرض جزء معين
function showTeil(teilNumber) {
  teile.forEach((teil, idx) => {
    const container = document.getElementById(teil.container);
    if (container) container.style.display = (idx + 1 === teilNumber) ? "block" : "none";
  });
  
  document.querySelectorAll(".teil-btn").forEach((btn, idx) => {
    if (idx + 1 === teilNumber) btn.classList.add("active");
    else btn.classList.remove("active");
  });
}

// بناء Teil 1 (Lesen Teil 1)
function buildTeil1(questions) {
  const container = document.getElementById("teil1");
  if (!container) return;
  container.innerHTML = "";
  
  let userAnswers = {};
  
  questions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q_${idx}`;
    
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerHTML = `<strong>${idx + 1}. ${q.text}</strong>`;
    card.appendChild(questionText);
    
    const optionsDiv = document.createElement("div");
    q.options.forEach((opt, optIdx) => {
      const label = document.createElement("label");
      label.className = "option-label";
      label.innerHTML = `
        <input type="radio" name="q${idx}" value="${optIdx}" class="option-input" onchange="selectAnswerTeil1(${idx}, ${optIdx})">
        <span>${opt}</span>
      `;
      optionsDiv.appendChild(label);
    });
    card.appendChild(optionsDiv);
    
    container.appendChild(card);
  });
  
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح";
  checkBtn.onclick = () => checkTeil1(questions, userAnswers);
  container.appendChild(checkBtn);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "teil1Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  container.appendChild(resultDiv);
  
  window.selectAnswerTeil1 = (qIdx, ansIdx) => { userAnswers[qIdx] = ansIdx; };
  window.checkTeil1 = (questions, answers) => {
    let score = 0;
    const total = questions.length;
    const pointsPerQuestion = 25 / total;
    
    questions.forEach((q, idx) => {
      const card = document.getElementById(`q_${idx}`);
      const userAnswer = answers[idx];
      const isCorrect = (userAnswer === q.correct);
      
      if (isCorrect) {
        score++;
        card.classList.add("correct-answer-card");
        card.classList.remove("wrong-answer-card");
        
        // إزالة رسالة الخطأ السابقة إن وجدت
        const oldMsg = card.querySelector(".correct-message");
        if (oldMsg) oldMsg.remove();
      } else {
        card.classList.add("wrong-answer-card");
        card.classList.remove("correct-answer-card");
        
        let correctMsg = card.querySelector(".correct-message");
        if (!correctMsg) {
          correctMsg = document.createElement("div");
          correctMsg.className = "correct-message";
          correctMsg.style.color = "#28a745";
          correctMsg.style.marginTop = "10px";
          correctMsg.style.fontSize = "14px";
          card.appendChild(correctMsg);
        }
        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${q.options[q.correct]}`;
      }
    });
    
    const finalScore = (score * pointsPerQuestion).toFixed(2);
    const resultDiv = document.getElementById("teil1Result");
    resultDiv.innerHTML = `🎯 النتيجة: ${finalScore} / 25 (${score} من ${total} إجابات صحيحة)`;
    resultDiv.style.display = "block";
  };
}

// دوال التنقل بين الصفحات
function goList() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("list").classList.add("active");
  renderExamList();
}

function goHome() {
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.add("active");
}

// تسجيل الدوال في window
window.goList = goList;
window.goHome = goHome;
window.openExam = openExam;
window.showTeil = showTeil;

console.log("✅ exams.js تم تحميله");