// ============================================
// engine.js - محرك الامتحانات (يدعم Matching System)
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

// ========== نظام Matching (Dropdown بدون تكرار) - خاص بـ Lesen Teil 1 فقط ==========
let currentMatchingExamData = null;
let matchingSelectedAnswers = {};
let matchingAvailableOptions = [];

window.loadMatchingExam = function(examData) {
  console.log("🟢 loadMatchingExam تم استدعاؤها", examData.title);
  currentMatchingExamData = examData;
  matchingSelectedAnswers = {};
  
  // نسخ الخيارات المتاحة
  matchingAvailableOptions = [...examData.sharedOptions];
  
  // عرض الأسئلة بنظام Matching
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
    
    // خيار فارغ
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "-- اختر الإجابة --";
    select.appendChild(emptyOption);
    
    // إضافة الخيارات المتاحة
    for (let j = 0; j < matchingAvailableOptions.length; j++) {
      const option = document.createElement("option");
      option.value = j;
      option.textContent = matchingAvailableOptions[j];
      select.appendChild(option);
    }
    
    // إذا كان هناك اختيار سابق
    if (matchingSelectedAnswers[i] !== undefined) {
      const oldVal = matchingSelectedAnswers[i];
      // نبحث عن النص القديم في القائمة الجديدة
      for (let k = 0; k < select.options.length; k++) {
        if (select.options[k].textContent === matchingSelectedAnswers[i]) {
          select.selectedIndex = k;
          break;
        }
      }
    }
    
    select.onchange = (function(qIdx, selectElement) {
      return function() {
        const oldValueText = matchingSelectedAnswers[qIdx];
        const newValueText = selectElement.options[selectElement.selectedIndex].textContent;
        
        // إذا كان الاختيار هو "-- اختر الإجابة --" نخرج
        if (selectElement.selectedIndex === 0 || newValueText === "-- اختر الإجابة --") {
          return;
        }
        
        // إذا كان هناك اختيار قديم، نعيد الخيار إلى القائمة
        if (oldValueText && oldValueText !== "-- اختر الإجابة --" && oldValueText !== "") {
          if (!matchingAvailableOptions.includes(oldValueText)) {
            matchingAvailableOptions.push(oldValueText);
            matchingAvailableOptions.sort();
          }
        }
        
        // إزالة الخيار الجديد من القائمة
        const indexInAvailable = matchingAvailableOptions.indexOf(newValueText);
        if (indexInAvailable !== -1) {
          matchingAvailableOptions.splice(indexInAvailable, 1);
        }
        
        matchingSelectedAnswers[qIdx] = newValueText;
        
        // إعادة تحميل كل الـ Dropdowns لتحديث الخيارات
        for (let k = 0; k < currentMatchingExamData.questions.length; k++) {
          const sel = document.getElementById("m_select_" + k);
          if (sel) {
            const currentVal = matchingSelectedAnswers[k];
            sel.innerHTML = "";
            
            const emptyOpt = document.createElement("option");
            emptyOpt.value = "";
            emptyOpt.textContent = "-- اختر الإجابة --";
            sel.appendChild(emptyOpt);
            
            for (let m = 0; m < matchingAvailableOptions.length; m++) {
              const opt = document.createElement("option");
              opt.value = m;
              opt.textContent = matchingAvailableOptions[m];
              sel.appendChild(opt);
            }
            
            // استعادة القيمة المختارة سابقاً
            if (currentVal && currentVal !== "" && currentVal !== "-- اختر الإجابة --") {
              for (let p = 0; p < sel.options.length; p++) {
                if (sel.options[p].textContent === currentVal) {
                  sel.selectedIndex = p;
                  break;
                }
              }
            }
          }
        }
      };
    })(i, select);
    
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
    const userAnswerText = matchingSelectedAnswers[i];
    
    // البحث عن رقم الإجابة الصحيحة
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

console.log("✅ نظام Matching (Dropdown بدون تكرار) جاهز");
