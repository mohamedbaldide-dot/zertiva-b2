// ============================================
// exams.js - نظام الامتحانات المتكامل
// ============================================

const teile = [
  { id: 1, name: "Hören Teil 1", container: "hoeren1", skill: "hoeren1" },
  { id: 2, name: "Hören Teil 2", container: "hoeren2", skill: "hoeren2" },
  { id: 3, name: "Hören Teil 3", container: "hoeren3", skill: "hoeren3" },
  { id: 4, name: "Lesen Teil 1", container: "teil1", skill: "lesen1" },
  { id: 5, name: "Lesen Teil 2", container: "teil2", skill: "lesen2" },
  { id: 6, name: "Lesen Teil 3", container: "teil3", skill: "lesen3" },
  { id: 7, name: "Sprachbausteine Teil 1", container: "sprach1", skill: "sprach1" },
  { id: 8, name: "Sprachbausteine Teil 2", container: "sprach2", skill: "sprach2" }
];

let currentExamData = null;
let currentSkill = "lesen1";
let currentExamId = null;
let currentExamsList = [];

// ✅ قائمة جميع الامتحانات (من 1 إلى 48 حسب الترتيب المطلوب)
const allExams = [
  { id: 1, title: "Jugend Forscher" },
  { id: 2, title: "sport ist gesund" },
  { id: 3, title: "sport ist gesund (التعديل 1)" },
  { id: 4, title: "Tanzkurs" },
  { id: 5, title: "Tanzkurs (التعديل 1)" },
  { id: 6, title: "Impfung" },
  { id: 7, title: "Insel" },
  { id: 8, title: "Bilder" },
  { id: 9, title: "Grundschule" },
  { id: 10, title: "Österreich - Naschmarkt" },
  { id: 11, title: "Insekten" },
  { id: 12, title: "Insekten (التعديل 1)" },
  { id: 13, title: "das Benzin" },
  { id: 14, title: "Kaffee" },
  { id: 15, title: "Programmierer" },
  { id: 16, title: "Programmierer (التعديل 1)" },
  { id: 17, title: "Programmierer (التعديل 2)" },
  { id: 18, title: "Trampolin" },
  { id: 19, title: "Bonbons" },
  { id: 20, title: "Umwelt" },
  { id: 21, title: "Licht" },
  { id: 22, title: "Licht (التعديل 1)" },
  { id: 23, title: "Kartoffel" },
  { id: 24, title: "Kartoffel (التعديل 1)" },
  { id: 25, title: "Bienen" },
  { id: 26, title: "Spiele" },
  { id: 27, title: "Geld" },
  { id: 28, title: "Kinder und Schulen" },
  { id: 29, title: "Kindertelefon" },
  { id: 30, title: "Alpen" },
  { id: 31, title: "Alpen (التعديل 1)" },
  { id: 32, title: "Alpen (التعديل 2)" },
  { id: 33, title: "Suchtmittel - Nase" },
  { id: 34, title: "الانتخابات والمرأة الروسية" },
  { id: 35, title: "kein Zeit" },
  { id: 36, title: "kein Zeit (التعديل 1)" },
  { id: 37, title: "Limonade" },
  { id: 38, title: "Limonade (التعديل 1)" },
  { id: 39, title: "Limonade (التعديل 2)" },
  { id: 40, title: "Auf dem Weg" },
  { id: 41, title: "Schlafzug" },
  { id: 42, title: "Schlafzug (التعديل 1)" },
  { id: 43, title: "Löwen" },
  { id: 44, title: "Fisch" },
  { id: 45, title: "Frauen im Arbeitsmarkt" },
  { id: 46, title: "Baby TV" },
  { id: 47, title: "Farben" },
  { id: 48, title: "Bäder" }
];

// 🔧 تعيين أسماء الملفات الفعلية (لأنها لا تتطابق مع الترتيب)
const actualFileNames = {
  // الامتحانات التي تختلف أرقام ملفاتها عن أرقامها في الترتيب
  10: "exam10.json",   // Österreich - Naschmarkt
  11: "exam11.json",   // Insekten
  12: "exam12.json",   // Insekten (التعديل 1)
  13: "exam13.json",   // das Benzin
  14: "exam14.json",   // Kaffee
  15: "exam15.json",   // Programmierer
  16: "exam16.json",   // Programmierer (التعديل 1)
  17: "exam17.json",   // Programmierer (التعديل 2)
  18: "exam18.json",   // Trampolin
  19: "exam19.json",   // Bonbons
  20: "exam20.json",   // Umwelt
  21: "exam21.json",   // Licht
  22: "exam22.json",   // Licht (التعديل 1)
  23: "exam23.json",   // Kartoffel
  24: "exam24.json",   // Kartoffel (التعديل 1)
  25: "exam25.json",   // Bienen
  26: "exam26.json",   // Spiele
  27: "exam27.json",   // Geld
  28: "exam28.json",   // Kinder und Schulen
  29: "exam29.json",   // Kindertelefon
  30: "exam30.json",   // Alpen
  31: "exam31.json",   // Alpen (التعديل 1)
  32: "exam32.json",   // Alpen (التعديل 2)
  33: "exam33.json",   // Suchtmittel - Nase
  34: "exam34.json",   // الانتخابات والمرأة الروسية
  35: "exam35.json",   // kein Zeit
  36: "exam36.json",   // kein Zeit (التعديل 1)
  37: "exam37.json",   // Limonade
  38: "exam38.json",   // Limonade (التعديل 1)
  39: "exam39.json",   // Limonade (التعديل 2)
  40: "exam40.json",   // Auf dem Weg
  41: "exam41.json",   // Schlafzug
  42: "exam42.json",   // Schlafzug (التعديل 1)
  43: "exam43.json",   // Löwen
  44: "exam44.json",   // Fisch
  45: "exam48.json",   // ⚠️ Frauen im Arbeitsmarkt (ملف exam48)
  46: "exam46.json",   // ⚠️ Baby TV (ملف exam46 - سيتم إنشاؤه)
  47: "exam47.json",   // ⚠️ Farben (ملف exam47 - سيتم إنشاؤه)
  48: "exam45.json"    // ⚠️ Bäder (ملف exam45 - سيتم إنشاؤه)
};

// قائمة الامتحانات لكل جزء
const examsDatabase = {
  lesen1: allExams,
  lesen2: [],
  lesen3: [],
  sprach1: [],
  sprach2: [],
  hoeren1: [],
  hoeren2: [],
  hoeren3: []
};

// عرض أجزاء (Teile) في صف واحد
function renderTeileList() {
  const container = document.getElementById("teileList");
  if (!container) return;
  container.innerHTML = "";
  
  for (let i = 0; i < teile.length; i++) {
    const teil = teile[i];
    const div = document.createElement("div");
    div.className = "item teil-item";
    div.innerHTML = teil.name;
    div.onclick = (function(skill) {
      return function() { renderExamListForSkill(skill); };
    })(teil.skill);
    container.appendChild(div);
  }
}

// عرض الامتحانات لجزء معين
function renderExamListForSkill(skill) {
  currentSkill = skill;
  const container = document.getElementById("examsList");
  if (!container) return;
  container.innerHTML = "";
  
  const exams = examsDatabase[skill] || [];
  currentExamsList = exams;
  
  if (exams.length === 0) {
    container.innerHTML = '<div class="item" style="text-align:center; color:#999;">⚠️ لا توجد امتحانات متاحة حالياً في هذا الجزء</div>';
    return;
  }
  
  for (let i = 0; i < exams.length; i++) {
    const exam = exams[i];
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${exam.id}: ${exam.title}`;
    div.onclick = (function(id, title, skill) {
      return function() { openExam(id, title, skill); };
    })(exam.id, exam.title, skill);
    container.appendChild(div);
  }
}

// الحصول على اسم الملف الفعلي للامتحان
function getActualFileName(examId) {
  if (actualFileNames[examId]) {
    return actualFileNames[examId];
  }
  return `exam${examId}.json`;
}

// فتح امتحان محدد
async function openExam(examId, examTitle, skill) {
  currentExamId = examId;
  currentSkill = skill;
  
  const fileName = getActualFileName(examId);
  
  console.log("🟢 فتح الامتحان:", examId, examTitle, skill);
  console.log("📁 اسم الملف:", fileName);
  
  try {
    const response = await fetch(`data/${skill}/${fileName}`);
    if (!response.ok) {
      console.warn(`⚠️ الملف ${fileName} غير موجود`);
      
      // محاولة البحث عن الملف بصيغة مختلفة
      const fallbackName = `exam${examId}.json`;
      console.log(`🔄 محاولة البحث عن: ${fallbackName}`);
      
      const fallbackResponse = await fetch(`data/${skill}/${fallbackName}`);
      if (!fallbackResponse.ok) {
        alert(`⚠️ الامتحان "${examTitle}" غير متوفر حالياً.\nالملف المطلوب: ${fileName}\nيرجى إضافة هذا الامتحان لاحقاً.`);
        return;
      }
      currentExamData = await fallbackResponse.json();
    } else {
      currentExamData = await response.json();
    }
    
    document.getElementById("home").classList.remove("active");
    document.getElementById("list").classList.remove("active");
    document.getElementById("exam").classList.add("active");
    document.getElementById("examTitle").innerHTML = currentExamData.title;
    
    updateExamNavButtons();
    
    const navDiv = document.getElementById("navButtons");
    if (navDiv) navDiv.style.display = "none";
    
    if (currentExamData.type === "matching") {
      if (typeof window.loadMatchingExam === "function") {
        window.loadMatchingExam(currentExamData);
      } else {
        console.error("❌ loadMatchingExam غير موجود");
        alert("نظام التصحيح غير متوفر حالياً");
      }
    } else {
      buildTeil1(currentExamData.questions);
    }
    
    const teilIndex = teile.findIndex(t => t.skill === skill);
    showTeil(teilIndex + 1);
  } catch(e) {
    console.error("❌ خطأ:", e);
    alert("خطأ في تحميل الامتحان: " + e.message);
  }
}

// تحديث أزرار التنقل بين الامتحانات
function updateExamNavButtons() {
  const prevBtn = document.getElementById("prevExamBtn");
  const nextBtn = document.getElementById("nextExamBtn");
  
  if (!prevBtn || !nextBtn) return;
  
  const currentIndex = currentExamsList.findIndex(e => e.id === currentExamId);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < currentExamsList.length - 1;
  
  if (hasPrev) {
    prevBtn.style.display = "inline-block";
    prevBtn.onclick = () => {
      const prevExam = currentExamsList[currentIndex - 1];
      openExam(prevExam.id, prevExam.title, currentSkill);
    };
  } else {
    prevBtn.style.display = "none";
  }
  
  if (hasNext) {
    nextBtn.style.display = "inline-block";
    nextBtn.onclick = () => {
      const nextExam = currentExamsList[currentIndex + 1];
      openExam(nextExam.id, nextExam.title, currentSkill);
    };
  } else {
    nextBtn.style.display = "none";
  }
}

// عرض جزء معين
function showTeil(teilNumber) {
  teile.forEach((teil, idx) => {
    const container = document.getElementById(teil.container);
    if (container) container.style.display = (idx + 1 === teilNumber) ? "block" : "none";
  });
}

// بناء Teil 1 (النظام القديم - Radio Buttons)
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
  checkBtn.innerText = "✅ تصحيح";
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
  resultDiv.innerHTML = "النتيجة: " + finalScore + " / 25";
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
  renderTeileList();
  // عرض الامتحانات لـ Lesen Teil 1 بشكل افتراضي
  renderExamListForSkill("lesen1");
}

// ربط الأزرار
document.addEventListener("DOMContentLoaded", function() {
  const startBtn = document.getElementById("startBtn");
  const backHomeBtn = document.getElementById("backHomeBtn");
  const backToListBtn = document.getElementById("backToListBtn");
  
  if (startBtn) startBtn.onclick = function() { goList(); };
  if (backHomeBtn) backHomeBtn.onclick = function() { goHome(); };
  if (backToListBtn) backToListBtn.onclick = function() { goList(); };
});

// تحميل القائمة عند بدء الصفحة
renderTeileList();
renderExamListForSkill("lesen1");

console.log("✅ exams.js تم تحميله بنجاح");
console.log("📋 عدد امتحانات lesen1:", examsDatabase.lesen1.length);
console.log("📋 ترتيب الامتحانات حسب المطلوب:");
allExams.forEach(exam => {
  console.log(`  ${exam.id}: ${exam.title} -> ملف: ${getActualFileName(exam.id)}`);
});
