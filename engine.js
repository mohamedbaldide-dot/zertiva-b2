// ============================================
// engine.js - محرك الامتحانات (يدعم Matching System مع إلغاء الاختيار)
// ============================================

console.log("✅ engine.js تم تحميله");

window.loadExamFromFile = async function(skill, examId) {
  try {
    const response = await fetch(`data/${skill}/exam${examId}.json`);
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch(e) {
    console.error("خطأ:", e);
    return null;
  }
};

// ========== نظام Matching ==========
let currentMatchingExamData = null;
let matchingSelectedAnswers = {};
let matchingAvailableOptions = [];

window.loadMatchingExam = function(examData) {
  console.log("🟢 loadMatchingExam", examData.title);
  currentMatchingExamData = examData;
  matchingSelectedAnswers = {};
  
  // نسخ الخيارات المتاحة
  matchingAvailableOptions = [...examData.sharedOptions];
  
  renderMatchingQuestions();
};

function renderMatchingQuestions() {
  const container = document.getElementById("teil1");
  if (!container) return;
  container.innerHTML = "";
  
  const questions = currentMatchingExamData.questions;
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = "m_q_" + i;
    
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerHTML = "<strong>" + (i + 1) + ". " + q.text + "</strong>";
    card.appendChild(questionText);
    
    // إنشاء Dropdown
    const select = document.createElement("select");
    select.className = "matching-select";
    select.id = "m_select_" + i;
    select.style.width = "100%";
    select.style.padding = "10px";
    select.style.marginTop = "10px";
    select.style.borderRadius = "8px";
    select.style.border = "1px solid #ccc";
    select.style.backgroundColor = "white";
    select.style.cursor = "pointer";
    
    // حفظ رقم السؤال في الـ select نفسه
    select.setAttribute("data-question-index", i);
    
    // إضافة الخيارات
    updateSelectOptions(select, i);
    
    // ربط الحدث
    select.addEventListener("change", function(e) {
      handleSelectChange(this);
    });
    
    card.appendChild(select);
    container.appendChild(card);
  }
  
  // إضافة زر التصحيح
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح الامتحان";
  checkBtn.onclick = checkMatchingExam;
  container.appendChild(checkBtn);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "matchingResult";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  container.appendChild(resultDiv);
}

function updateSelectOptions(select, questionIndex) {
  // حفظ القيمة المختارة حالياً
  const currentValue = matchingSelectedAnswers[questionIndex] || "";
  
  // تفريغ الـ select
  select.innerHTML = "";
  
  // إضافة الخيار الفارغ
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = "-- اختر الإجابة --";
  select.appendChild(emptyOption);
  
  // إضافة الخيارات المتاحة
  for (let i = 0; i < matchingAvailableOptions.length; i++) {
    const option = document.createElement("option");
    option.value = matchingAvailableOptions[i];
    option.textContent = matchingAvailableOptions[i];
    select.appendChild(option);
  }
  
  // استعادة القيمة المختارة إذا كانت موجودة ولا تزال في القائمة
  if (currentValue !== "") {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === currentValue) {
        select.selectedIndex = i;
        break;
      }
    }
  }
}

function handleSelectChange(select) {
  const questionIndex = parseInt(select.getAttribute("data-question-index"));
  const selectedValue = select.value;
  const oldValue = matchingSelectedAnswers[questionIndex] || "";
  
  // حالة 1: إلغاء الاختيار (اختيار الخيار الفارغ)
  if (selectedValue === "") {
    if (oldValue !== "") {
      // نعيد الخيار القديم إلى القائمة المتاحة
      if (!matchingAvailableOptions.includes(oldValue)) {
        matchingAvailableOptions.push(oldValue);
        matchingAvailableOptions.sort();
      }
      matchingSelectedAnswers[questionIndex] = "";
    }
    rebuildAllDropdowns();
    return;
  }
  
  // حالة 2: اختيار نفس الإجابة مرة أخرى → إلغاء الاختيار
  if (selectedValue === oldValue && oldValue !== "") {
    // نعيد الخيار إلى القائمة المتاحة
    if (!matchingAvailableOptions.includes(selectedValue)) {
      matchingAvailableOptions.push(selectedValue);
      matchingAvailableOptions.sort();
    }
    matchingSelectedAnswers[questionIndex] = "";
    rebuildAllDropdowns();
    return;
  }
  
  // حالة 3: اختيار إجابة جديدة
  // نزيل الإجابة الجديدة من القائمة المتاحة
  const indexInAvailable = matchingAvailableOptions.indexOf(selectedValue);
  if (indexInAvailable !== -1) {
    matchingAvailableOptions.splice(indexInAvailable, 1);
  }
  
  // نعيد الإجابة القديمة إلى القائمة المتاحة (إن وجدت)
  if (oldValue !== "") {
    if (!matchingAvailableOptions.includes(oldValue)) {
      matchingAvailableOptions.push(oldValue);
      matchingAvailableOptions.sort();
    }
  }
  
  // حفظ الإجابة الجديدة
  matchingSelectedAnswers[questionIndex] = selectedValue;
  
  // إعادة بناء جميع القوائم المنسدلة
  rebuildAllDropdowns();
}

function rebuildAllDropdowns() {
  for (let i = 0; i < currentMatchingExamData.questions.length; i++) {
    const select = document.getElementById("m_select_" + i);
    if (select) {
      updateSelectOptions(select, i);
    }
  }
}

function checkMatchingExam() {
  let score = 0;
  const questions = currentMatchingExamData.questions;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  
  // إعادة تعيين الألوان
  for (let i = 0; i < total; i++) {
    const card = document.getElementById("m_q_" + i);
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
    }
  }
  
  // التصحيح
  for (let i = 0; i < total; i++) {
    const q = questions[i];
    const card = document.getElementById("m_q_" + i);
    const userAnswerText = matchingSelectedAnswers[i] || "";
    const correctAnswerText = currentMatchingExamData.sharedOptions[q.correct];
    const isCorrect = (userAnswerText === correctAnswerText);
    
    if (isCorrect) {
      score++;
      card.classList.add("correct-answer-card");
    } else {
      card.classList.add("wrong-answer-card");
      
      const correctMsg = document.createElement("div");
      correctMsg.className = "correct-message";
      correctMsg.style.color = "#28a745";
      correctMsg.style.marginTop = "10px";
      correctMsg.style.fontSize = "14px";
      correctMsg.innerHTML = "✅ الإجابة الصحيحة: " + correctAnswerText;
      card.appendChild(correctMsg);
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("matchingResult");
  resultDiv.innerHTML = "🎯 النتيجة: " + finalScore + " / 25 (" + score + " من " + total + " إجابات صحيحة)";
  resultDiv.style.display = "block";
}

console.log("✅ نظام Matching جاهز (إلغاء الاختيار يعمل)");
