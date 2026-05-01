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

let currentExamData = null;

// قائمة الامتحانات المتاحة (ثابتة حالياً)
const availableExamsList = [
  { id: 1, title: "Lesen Teil 1 - Exam 1: Jugend Forscher" },
  { id: 2, title: "Lesen Teil 1 - Exam 2: sport ist gesund" }
];

// عرض قائمة الامتحانات
function renderExamList() {
  console.log("🟢 renderExamList تم استدعاؤها");
  const container = document.getElementById("examsList");
  if (!container) {
    console.error("❌ عنصر examsList غير موجود");
    return;
  }
  
  container.innerHTML = "";
  
  for (let i = 0; i < availableExamsList.length; i++) {
    const exam = availableExamsList[i];
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${exam.id}. ${exam.title} ✅`;
    div.onclick = (function(id) {
      return function() { openExam(id); };
    })(exam.id);
    container.appendChild(div);
  }
  
  if (availableExamsList.length === 0) {
    container.innerHTML = '<div class="item">⚠️ لا توجد امتحانات متاحة حالياً</div>';
  }
}

// فتح امتحان محدد
async function openExam(examId) {
  console.log("🟢 فتح الامتحان رقم:", examId);
  try {
    // محاولة تحميل ملف JSON
    const response = await fetch(`data/lesen1/exam${examId}.json`);
    if (!response.ok) {
      throw new Error(`الملف exam${examId}.json غير موجود`);
    }
    currentExamData = await response.json();
    
    document.getElementById("home").classList.remove("active");
    document.getElementById("list").classList.remove("active");
    document.getElementById("exam").classList.add("active");
    document.getElementById("examTitle").innerHTML = currentExamData.title;
    
    buildNavButtons();
    
    // ✅ التعديل المطلوب: التحقق من نوع الامتحان
    if (currentExamData.type === "matching") {
      // استخدام نظام Matching (Dropdown بدون تكرار) - خاص بـ Lesen Teil 1
      if (typeof window.loadMatchingExam === "function") {
        window.loadMatchingExam(currentExamData);
      } else {
        console.error("❌ loadMatchingExam غير موجود");
        alert("نظام التصحيح غير متوفر حالياً");
      }
    } else {
      // النظام القديم (Radio Buttons) - لباقي الأجزاء
      buildTeil1(currentExamData.questions);
    }
    
    showTeil(1);
  } catch(e) {
    console.error("❌ خطأ:", e);
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
    btn.onclick = (function(num) {
      return function() { showTeil(num); };
    })(idx + 1);
    navDiv.appendChild(btn);
  });
}

// عرض جزء معين
function showTeil(teilNumber) {
  teile.forEach((teil, idx) => {
    const container = document.getElementById(teil.container);
    if (container) container.style.display = (idx + 1 === teilNumber) ? "block" : "none";
  });
  
  const btns = document.querySelectorAll(".teil-btn");
  for (let i = 0; i < btns.length; i++) {
    if (i + 1 === teilNumber) btns[i].classList.add("active");
    else btns[i].classList.remove("active");
  }
}

// بناء Teil 1 (النظام القديم - Radio Buttons) - لباقي الامتحانات التي ليس فيها type matching
function buildTeil1(questions) {
  const container = document.getElementById("teil1");
  if (!container) return;
  container.innerHTML = "";
  
  let userAnswers = {};
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = "q_" + i;
    
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerHTML = "<strong>" + (i + 1) + ". " + q.text + "</strong>";
    card.appendChild(questionText);
    
    const optionsDiv = document.createElement("div");
    for (let j = 0; j < q.options.length; j++) {
      const label = document.createElement("label");
      label.className = "option-label";
      const radioId = "q" + i + "_" + j;
      label.innerHTML = '<input type="radio" name="q' + i + '" value="' + j + '" class="option-input" id="' + radioId + '"> <span>' + q.options[j] + '</span>';
      label.onclick = (function(qIdx, ansIdx) {
        return function() {
          userAnswers[qIdx] = ansIdx;
        };
      })(i, j);
      optionsDiv.appendChild(label);
    }
    card.appendChild(optionsDiv);
    container.appendChild(card);
  }
  
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح الامتحان";
  checkBtn.onclick = function() {
    checkTeil1(questions, userAnswers);
  };
  container.appendChild(checkBtn);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "teil1Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  container.appendChild(resultDiv);
}

function checkTeil1(questions, answers) {
  let score = 0;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const card = document.getElementById("q_" + i);
    const userAnswer = answers[i];
    const isCorrect = (userAnswer === q.correct);
    
    if (isCorrect) {
      score++;
      card.classList.add("correct-answer-card");
      card.classList.remove("wrong-answer-card");
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
      correctMsg.innerHTML = "✅ الإجابة الصحيحة: " + q.options[q.correct];
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("teil1Result");
  resultDiv.innerHTML = "🎯 النتيجة: " + finalScore + " / 25 (" + score + " من " + total + " إجابات صحيحة)";
  resultDiv.style.display = "block";
}

// دوال التنقل
function goHome() {
  document.getElementById("home").classList.add("active");
  document.getElementById("list").classList.remove("active");
  document.getElementById("exam").classList.remove("active");
}

function goList() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("list").classList.add("active");
  document.getElementById("exam").classList.remove("active");
  renderExamList();
}

// ربط الأزرار
document.getElementById("startBtn").onclick = function() { goList(); };
document.getElementById("backHomeBtn").onclick = function() { goHome(); };
document.getElementById("backToListBtn").onclick = function() { goList(); };

// تحميل القائمة عند بدء الصفحة
renderExamList();

console.log("✅ exams.js تم تحميله بنجاح");
