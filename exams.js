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

// ========== نظام Matching (Dropdown بدون تكرار + إلغاء الاختيار) ==========
let currentMatchingExamData = null;
let matchingSelectedAnswers = {};
let matchingAvailableOptions = [];

window.loadMatchingExam = function(examData) {
  console.log("🟢 loadMatchingExam تم استدعاؤها", examData.title);
  currentMatchingExamData = examData;
  matchingSelectedAnswers = {};
  
  // نسخ الخيارات المتاحة كمصفوفة من الكائنات {value, text}
  matchingAvailableOptions = examData.sharedOptions.map((opt, idx) => ({
    value: idx,
    text: opt
  }));
  
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
    
    // خيار فارغ (اختر)
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "-- اختر الإجابة --";
    select.appendChild(emptyOption);
    
    // إضافة الخيارات المتاحة
    for (let j = 0; j < matchingAvailableOptions.length; j++) {
      const option = document.createElement("option");
      option.value = matchingAvailableOptions[j].value;
      option.textContent = matchingAvailableOptions[j].text;
      select.appendChild(option);
    }
    
    // إذا كان هناك اختيار سابق
    if (matchingSelectedAnswers[i] !== undefined && matchingSelectedAnswers[i] !== "") {
      for (let k = 0; k < select.options.length; k++) {
        if (select.options[k].textContent === matchingSelectedAnswers[i]) {
          select.selectedIndex = k;
          break;
        }
      }
    }
    
    // حفظ مرجع للـ select
    select.setAttribute("data-qidx", i);
    
    // الحدث عند تغيير الاختيار
    select.addEventListener("change", function(e) {
      const qIdx = parseInt(this.getAttribute("data-qidx"));
      const selectedIndex = this.selectedIndex;
      
      // حالة: اختيار "-- اختر الإجابة --" (الفارغ)
      if (selectedIndex === 0) {
        // إذا كان هناك إجابة قديمة، نعيدها إلى القائمة
        const oldAnswer = matchingSelectedAnswers[qIdx];
        if (oldAnswer && oldAnswer !== "") {
          // نبحث عن الخيار القديم في matchingAvailableOptions
          const found = matchingAvailableOptions.some(opt => opt.text === oldAnswer);
          if (!found) {
            // نستعيد النص القديم إلى القائمة
            const oldOption = { value: matchingAvailableOptions.length, text: oldAnswer };
            matchingAvailableOptions.push(oldOption);
            matchingAvailableOptions.sort((a, b) => a.text.localeCompare(b.text));
          }
        }
        matchingSelectedAnswers[qIdx] = "";
        rebuildAllDropdowns();
        return;
      }
      
      const selectedValue = this.options[selectedIndex].value;
      const selectedText = this.options[selectedIndex].textContent;
      const oldAnswer = matchingSelectedAnswers[qIdx];
      
      // حالة: اختيار نفس الإجابة مرة أخرى → إلغاء الاختيار
      if (oldAnswer === selectedText && oldAnswer !== "") {
        // نعيد الخيار إلى القائمة
        const found = matchingAvailableOptions.some(opt => opt.text === selectedText);
        if (!found) {
          const restoredOption = { value: matchingAvailableOptions.length, text: selectedText };
          matchingAvailableOptions.push(restoredOption);
          matchingAvailableOptions.sort((a, b) => a.text.localeCompare(b.text));
        }
        matchingSelectedAnswers[qIdx] = "";
        rebuildAllDropdowns();
        return;
      }
      
      // حالة: اختيار إجابة جديدة
      // نزيل الخيار الجديد من القائمة
      const indexInAvailable = matchingAvailableOptions.findIndex(opt => opt.text === selectedText);
      if (indexInAvailable !== -1) {
        matchingAvailableOptions.splice(indexInAvailable, 1);
      }
      
      // إذا كان هناك إجابة قديمة، نعيدها إلى القائمة
      if (oldAnswer && oldAnswer !== "") {
        const found = matchingAvailableOptions.some(opt => opt.text === oldAnswer);
        if (!found) {
          const restoredOption = { value: matchingAvailableOptions.length, text: oldAnswer };
          matchingAvailableOptions.push(restoredOption);
          matchingAvailableOptions.sort((a, b) => a.text.localeCompare(b.text));
        }
      }
      
      matchingSelectedAnswers[qIdx] = selectedText;
      rebuildAllDropdowns();
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

function rebuildAllDropdowns() {
  for (let k = 0; k < currentMatchingExamData.questions.length; k++) {
    const sel = document.getElementById("m_select_" + k);
    if (!sel) continue;
    
    const currentVal = matchingSelectedAnswers[k];
    const qIdx = k;
    
    // حفظ القيمة القديمة للـ value
    sel.innerHTML = "";
    
    const emptyOpt = document.createElement("option");
    emptyOpt.value = "";
    emptyOpt.textContent = "-- اختر الإجابة --";
    sel.appendChild(emptyOpt);
    
    for (let m = 0; m < matchingAvailableOptions.length; m++) {
      const opt = document.createElement("option");
      opt.value = matchingAvailableOptions[m].value;
      opt.textContent = matchingAvailableOptions[m].text;
      sel.appendChild(opt);
    }
    
    // استعادة القيمة المختارة سابقاً
    if (currentVal && currentVal !== "") {
      for (let p = 0; p < sel.options.length; p++) {
        if (sel.options[p].textContent === currentVal) {
          sel.selectedIndex = p;
          break;
        }
      }
    } else {
      sel.selectedIndex = 0;
    }
    
    // إعادة تعيين الحدث
    sel.setAttribute("data-qidx", qIdx);
    sel.removeEventListener("change", sel._listener);
    sel._listener = function(e) {
      const idx = parseInt(this.getAttribute("data-qidx"));
      const selectedIndex = this.selectedIndex;
      
      if (selectedIndex === 0) {
        const oldAnswer = matchingSelectedAnswers[idx];
        if (oldAnswer && oldAnswer !== "") {
          const found = matchingAvailableOptions.some(opt => opt.text === oldAnswer);
          if (!found) {
            matchingAvailableOptions.push({ value: matchingAvailableOptions.length, text: oldAnswer });
            matchingAvailableOptions.sort((a, b) => a.text.localeCompare(b.text));
          }
        }
        matchingSelectedAnswers[idx] = "";
        rebuildAllDropdowns();
        return;
      }
      
      const selectedText = this.options[selectedIndex].textContent;
      const oldAnswer = matchingSelectedAnswers[idx];
      
      if (oldAnswer === selectedText && oldAnswer !== "") {
        const found = matchingAvailableOptions.some(opt => opt.text === selectedText);
        if (!found) {
          matchingAvailableOptions.push({ value: matchingAvailableOptions.length, text: selectedText });
          matchingAvailableOptions.sort((a, b) => a.text.localeCompare(b.text));
        }
        matchingSelectedAnswers[idx] = "";
        rebuildAllDropdowns();
        return;
      }
      
      const indexInAvailable = matchingAvailableOptions.findIndex(opt => opt.text === selectedText);
      if (indexInAvailable !== -1) {
        matchingAvailableOptions.splice(indexInAvailable, 1);
      }
      
      if (oldAnswer && oldAnswer !== "") {
        const found = matchingAvailableOptions.some(opt => opt.text === oldAnswer);
        if (!found) {
          matchingAvailableOptions.push({ value: matchingAvailableOptions.length, text: oldAnswer });
          matchingAvailableOptions.sort((a, b) => a.text.localeCompare(b.text));
        }
      }
      
      matchingSelectedAnswers[idx] = selectedText;
      rebuildAllDropdowns();
    };
    sel.addEventListener("change", sel._listener);
  }
}

function checkMatchingExam() {
  let score = 0;
  const questions = currentMatchingExamData.questions;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  
  for (let i = 0; i < total; i++) {
    const card = document.getElementById("m_q_" + i);
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
    }
  }
  
  for (let i = 0; i < total; i++) {
    const q = questions[i];
    const card = document.getElementById("m_q_" + i);
    const userAnswerText = matchingSelectedAnswers[i];
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

console.log("✅ نظام Matching (Dropdown بدون تكرار + إلغاء الاختيار) جاهز - النسخة المحسنة");
