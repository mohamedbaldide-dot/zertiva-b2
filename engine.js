// ============================================
// engine.js - يدعم Matching System (Dropdown بدون تكرار)
// ============================================

let currentExamData = null;
let selectedAnswers = {};
let availableOptions = [];

function loadMatchingExam(examData) {
  currentExamData = examData;
  selectedAnswers = {};
  
  // نسخ الخيارات المتاحة
  availableOptions = [...examData.sharedOptions];
  
  // عرض الأسئلة
  renderMatchingQuestions();
}

function renderMatchingQuestions() {
  const container = document.getElementById("teil1");
  if (!container) return;
  container.innerHTML = "";
  
  const questions = currentExamData.questions;
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = "q_" + i;
    
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerHTML = "<strong>" + (i + 1) + ". " + q.text + "</strong>";
    card.appendChild(questionText);
    
    // إنشاء Dropdown
    const select = document.createElement("select");
    select.className = "matching-select";
    select.id = "select_" + i;
    select.style.width = "100%";
    select.style.padding = "10px";
    select.style.marginTop = "10px";
    select.style.borderRadius = "8px";
    select.style.border = "1px solid #ccc";
    
    // خيار فارغ
    const emptyOption = document.createElement("option");
    emptyOption.value = "";
    emptyOption.textContent = "-- اختر الإجابة --";
    select.appendChild(emptyOption);
    
    // إضافة الخيارات المتاحة
    for (let j = 0; j < availableOptions.length; j++) {
      const option = document.createElement("option");
      option.value = j;
      option.textContent = availableOptions[j];
      select.appendChild(option);
    }
    
    // إذا كان هناك اختيار سابق
    if (selectedAnswers[i] !== undefined) {
      select.value = selectedAnswers[i];
    }
    
    select.onchange = (function(qIdx) {
      return function() {
        const oldValue = selectedAnswers[qIdx];
        const newValue = parseInt(this.value);
        
        // إذا كان هناك اختيار قديم، نعيد الخيار إلى القائمة
        if (oldValue !== undefined && !isNaN(oldValue)) {
          const oldOptionText = availableOptions[oldValue];
          if (oldOptionText && !availableOptions.includes(oldOptionText)) {
            availableOptions.push(oldOptionText);
          }
        }
        
        // إزالة الخيار الجديد من القائمة
        if (!isNaN(newValue)) {
          const selectedText = this.options[this.selectedIndex].textContent;
          const indexInAvailable = availableOptions.indexOf(selectedText);
          if (indexInAvailable !== -1) {
            availableOptions.splice(indexInAvailable, 1);
          }
        }
        
        selectedAnswers[qIdx] = newValue;
        
        // إعادة تحميل كل الـ Dropdowns لتحديث الخيارات
        for (let k = 0; k < currentExamData.questions.length; k++) {
          const sel = document.getElementById("select_" + k);
          if (sel) {
            const currentVal = selectedAnswers[k];
            sel.innerHTML = "";
            
            const emptyOpt = document.createElement("option");
            emptyOpt.value = "";
            emptyOpt.textContent = "-- اختر الإجابة --";
            sel.appendChild(emptyOpt);
            
            for (let m = 0; m < availableOptions.length; m++) {
              const opt = document.createElement("option");
              opt.value = m;
              opt.textContent = availableOptions[m];
              sel.appendChild(opt);
            }
            
            if (currentVal !== undefined && !isNaN(currentVal)) {
              const selectedText = selectedAnswers[k];
              const opt = document.createElement("option");
              opt.value = selectedText;
              opt.textContent = availableOptions[selectedText] || "اختيار سابق";
              opt.selected = true;
              sel.appendChild(opt);
            } else {
              sel.value = "";
            }
          }
        }
      };
    })(i);
    
    card.appendChild(select);
    container.appendChild(card);
  }
  
  // إضافة زر التصحيح
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح الامتحان";
  checkBtn.onclick = checkMatchingExam;
  container.appendChild(checkBtn);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "teil1Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  container.appendChild(resultDiv);
}

function checkMatchingExam() {
  let score = 0;
  const questions = currentExamData.questions;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  
  // إعادة تعيين الألوان
  for (let i = 0; i < total; i++) {
    const card = document.getElementById("q_" + i);
    card.classList.remove("correct-answer-card", "wrong-answer-card");
    
    // إزالة الرسائل القديمة
    const oldMsg = card.querySelector(".correct-message");
    if (oldMsg) oldMsg.remove();
  }
  
  // التصحيح
  for (let i = 0; i < total; i++) {
    const q = questions[i];
    const card = document.getElementById("q_" + i);
    const userAnswer = selectedAnswers[i];
    const isCorrect = (userAnswer === q.correct);
    
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
      correctMsg.innerHTML = "✅ الإجابة الصحيحة: " + currentExamData.sharedOptions[q.correct];
      card.appendChild(correctMsg);
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("teil1Result");
  resultDiv.innerHTML = "🎯 النتيجة: " + finalScore + " / 25 (" + score + " من " + total + " إجابات صحيحة)";
  resultDiv.style.display = "block";
}

// تصدير الدوال
window.loadMatchingExam = loadMatchingExam;
