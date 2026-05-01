// ============================================
// engine.js - محرك الامتحانات (Custom Dropdown - إلغاء بالضغط على نفس الخيار)
// ============================================

console.log("✅ engine.js تم تحميله (Custom Dropdown)");

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

// ========== نظام Matching (Custom Dropdown) ==========
let currentMatchingExamData = null;
let matchingSelectedAnswers = {};
let matchingAvailableOptions = [];
let openDropdownIndex = null;

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
    
    // إنشاء Custom Dropdown
    const dropdownContainer = document.createElement("div");
    dropdownContainer.className = "custom-dropdown";
    dropdownContainer.id = "m_dropdown_" + i;
    dropdownContainer.style.position = "relative";
    dropdownContainer.style.width = "100%";
    dropdownContainer.style.marginTop = "10px";
    
    // زر الاختيار
    const dropdownBtn = document.createElement("div");
    dropdownBtn.className = "dropdown-btn";
    dropdownBtn.id = "m_btn_" + i;
    dropdownBtn.style.width = "100%";
    dropdownBtn.style.padding = "10px";
    dropdownBtn.style.backgroundColor = "white";
    dropdownBtn.style.border = "1px solid #ccc";
    dropdownBtn.style.borderRadius = "8px";
    dropdownBtn.style.cursor = "pointer";
    dropdownBtn.style.display = "flex";
    dropdownBtn.style.justifyContent = "space-between";
    dropdownBtn.style.alignItems = "center";
    dropdownBtn.style.boxSizing = "border-box";
    
    // النص داخل الزر
    const btnText = document.createElement("span");
    const currentVal = matchingSelectedAnswers[i];
    btnText.textContent = currentVal || "-- اختر الإجابة --";
    btnText.style.color = currentVal ? "#333" : "#999";
    
    // سهم للأسفل
    const arrow = document.createElement("span");
    arrow.textContent = "▼";
    arrow.style.fontSize = "12px";
    arrow.style.color = "#666";
    
    dropdownBtn.appendChild(btnText);
    dropdownBtn.appendChild(arrow);
    
    // القائمة المنسدلة
    const dropdownList = document.createElement("div");
    dropdownList.className = "dropdown-list";
    dropdownList.id = "m_list_" + i;
    dropdownList.style.position = "absolute";
    dropdownList.style.top = "100%";
    dropdownList.style.left = "0";
    dropdownList.style.right = "0";
    dropdownList.style.backgroundColor = "white";
    dropdownList.style.border = "1px solid #ccc";
    dropdownList.style.borderTop = "none";
    dropdownList.style.borderRadius = "0 0 8px 8px";
    dropdownList.style.maxHeight = "200px";
    dropdownList.style.overflowY = "auto";
    dropdownList.style.zIndex = "1000";
    dropdownList.style.display = "none";
    
    dropdownContainer.appendChild(dropdownBtn);
    dropdownContainer.appendChild(dropdownList);
    card.appendChild(dropdownContainer);
    
    // تحديث القائمة
    updateDropdownList(i);
    
    // ربط الأحداث
    dropdownBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      if (openDropdownIndex !== null && openDropdownIndex !== i) {
        closeDropdown(openDropdownIndex);
      }
      if (dropdownList.style.display === "block") {
        closeDropdown(i);
      } else {
        openDropdown(i);
      }
    });
    
    container.appendChild(card);
  }
  
  document.addEventListener("click", function() {
    if (openDropdownIndex !== null) {
      closeDropdown(openDropdownIndex);
    }
  });
  
  // ✅ زر التصحيح (تم التعديل)
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح";
  checkBtn.onclick = checkMatchingExam;
  container.appendChild(checkBtn);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "matchingResult";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  container.appendChild(resultDiv);
}

function updateDropdownList(questionIndex) {
  const list = document.getElementById("m_list_" + questionIndex);
  if (!list) return;
  
  list.innerHTML = "";
  
  for (let i = 0; i < matchingAvailableOptions.length; i++) {
    const option = matchingAvailableOptions[i];
    const optionDiv = document.createElement("div");
    optionDiv.className = "dropdown-option";
    optionDiv.textContent = option;
    optionDiv.style.padding = "10px";
    optionDiv.style.cursor = "pointer";
    optionDiv.style.borderBottom = "1px solid #eee";
    optionDiv.style.transition = "background 0.2s";
    
    optionDiv.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "#f0f0f0";
    });
    optionDiv.addEventListener("mouseleave", function() {
      this.style.backgroundColor = "white";
    });
    
    optionDiv.addEventListener("click", (function(qIdx, optText) {
      return function(e) {
        e.stopPropagation();
        selectOption(qIdx, optText);
      };
    })(questionIndex, option));
    
    list.appendChild(optionDiv);
  }
  
  if (matchingAvailableOptions.length === 0) {
    const emptyDiv = document.createElement("div");
    emptyDiv.textContent = "⚠️ لا توجد خيارات متاحة";
    emptyDiv.style.padding = "10px";
    emptyDiv.style.color = "#999";
    emptyDiv.style.textAlign = "center";
    list.appendChild(emptyDiv);
  }
}

function openDropdown(questionIndex) {
  const list = document.getElementById("m_list_" + questionIndex);
  const btn = document.getElementById("m_btn_" + questionIndex);
  if (list && btn) {
    list.style.display = "block";
    btn.style.borderRadius = "8px 8px 0 0";
    btn.style.borderBottom = "none";
    openDropdownIndex = questionIndex;
    updateDropdownList(questionIndex);
  }
}

function closeDropdown(questionIndex) {
  const list = document.getElementById("m_list_" + questionIndex);
  const btn = document.getElementById("m_btn_" + questionIndex);
  if (list && btn) {
    list.style.display = "none";
    btn.style.borderRadius = "8px";
    btn.style.border = "1px solid #ccc";
  }
  if (openDropdownIndex === questionIndex) {
    openDropdownIndex = null;
  }
}

function selectOption(questionIndex, selectedText) {
  const oldValue = matchingSelectedAnswers[questionIndex] || "";
  
  if (oldValue === selectedText && oldValue !== "") {
    if (!matchingAvailableOptions.includes(selectedText)) {
      matchingAvailableOptions.push(selectedText);
      matchingAvailableOptions.sort();
    }
    matchingSelectedAnswers[questionIndex] = "";
  } 
  else {
    const indexInAvailable = matchingAvailableOptions.indexOf(selectedText);
    if (indexInAvailable !== -1) {
      matchingAvailableOptions.splice(indexInAvailable, 1);
    }
    
    if (oldValue !== "") {
      if (!matchingAvailableOptions.includes(oldValue)) {
        matchingAvailableOptions.push(oldValue);
        matchingAvailableOptions.sort();
      }
    }
    
    matchingSelectedAnswers[questionIndex] = selectedText;
  }
  
  const btnSpan = document.querySelector(`#m_btn_${questionIndex} span:first-child`);
  if (btnSpan) {
    const newVal = matchingSelectedAnswers[questionIndex];
    btnSpan.textContent = newVal || "-- اختر الإجابة --";
    btnSpan.style.color = newVal ? "#333" : "#999";
  }
  
  closeDropdown(questionIndex);
  
  for (let i = 0; i < currentMatchingExamData.questions.length; i++) {
    updateDropdownList(i);
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
  
  // ✅ تم التعديل هنا
  resultDiv.innerHTML = "النتيجة: " + finalScore + " / 25";
  resultDiv.style.display = "block";
}

// ========== عرض امتحان True/False (Richtig/Falsch) ==========
window.buildTrueFalseExam = function(container, questions) {
    container.innerHTML = '';
    
    let userAnswers = {};
    
    questions.forEach((q, i) => {
        const div = document.createElement('div');
        div.className = 'question-card';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.gap = '15px';
        div.style.marginBottom = '12px';
        div.style.flexWrap = 'wrap';
        div.style.padding = '12px';
        div.style.border = '1px solid #ddd';
        div.style.borderRadius = '10px';
        div.style.backgroundColor = '#f9f9f9';
        
        // Richtig
        const labelTrue = document.createElement('label');
        labelTrue.style.display = 'inline-flex';
        labelTrue.style.alignItems = 'center';
        labelTrue.style.gap = '5px';
        labelTrue.style.cursor = 'pointer';
        labelTrue.style.marginRight = '15px';
        
        const radioTrue = document.createElement('input');
        radioTrue.type = 'radio';
        radioTrue.name = `q${i}`;
        radioTrue.value = 'true';
        
        radioTrue.onchange = () => {
            userAnswers[i] = true;
        };
        
        labelTrue.appendChild(radioTrue);
        labelTrue.appendChild(document.createTextNode(' Richtig'));
        
        // Falsch
        const labelFalse = document.createElement('label');
        labelFalse.style.display = 'inline-flex';
        labelFalse.style.alignItems = 'center';
        labelFalse.style.gap = '5px';
        labelFalse.style.cursor = 'pointer';
        
        const radioFalse = document.createElement('input');
        radioFalse.type = 'radio';
        radioFalse.name = `q${i}`;
        radioFalse.value = 'false';
        
        radioFalse.onchange = () => {
            userAnswers[i] = false;
        };
        
        labelFalse.appendChild(radioFalse);
        labelFalse.appendChild(document.createTextNode(' Falsch'));
        
        // النص: الرقم + الجملة
        const textSpan = document.createElement('span');
        textSpan.innerHTML = `<strong>${i + 1}</strong> ${q.text}`;
        textSpan.style.flex = '1';
        textSpan.style.minWidth = '200px';
        
        div.appendChild(labelTrue);
        div.appendChild(labelFalse);
        div.appendChild(textSpan);
        
        container.appendChild(div);
    });
    
    // زر التصحيح
    const checkBtn = document.createElement('button');
    checkBtn.innerText = '📝 Prüfen';
    checkBtn.className = 'check-btn';
    checkBtn.style.marginTop = '20px';
    checkBtn.style.padding = '12px 24px';
    checkBtn.style.backgroundColor = '#2c3e66';
    checkBtn.style.color = 'white';
    checkBtn.style.border = 'none';
    checkBtn.style.borderRadius = '8px';
    checkBtn.style.cursor = 'pointer';
    
    checkBtn.onclick = () => {
        checkTrueFalseExam(questions, userAnswers);
    };
    
    container.appendChild(checkBtn);
    
    // مكان النتيجة
    const resultDiv = document.createElement('div');
    resultDiv.id = 'truefalseResult';
    resultDiv.className = 'result-box';
    resultDiv.style.display = 'none';
    container.appendChild(resultDiv);
};

// ========== تصحيح امتحان True/False ==========
function checkTrueFalseExam(questions, answers) {
    let score = 0;
    const total = questions.length;
    const pointsPerQuestion = 25 / total;
    
    const cards = document.querySelectorAll('#hoeren1 .question-card, #teil1 .question-card');
    
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const card = cards[i];
        const userAnswer = answers[i];
        const isCorrect = (userAnswer === q.correct);
        
        if (!card) continue;
        
        // إزالة التلوين القديم
        card.classList.remove('correct-answer-card', 'wrong-answer-card');
        
        // إزالة الرسالة القديمة
        const oldMsg = card.querySelector('.correct-message');
        if (oldMsg) oldMsg.remove();
        
        if (isCorrect && userAnswer !== undefined) {
            score++;
            card.classList.add('correct-answer-card');
        } else if (userAnswer !== undefined) {
            card.classList.add('wrong-answer-card');
            
            const correctMsg = document.createElement('div');
            correctMsg.className = 'correct-message';
            correctMsg.style.color = '#28a745';
            correctMsg.style.marginTop = '10px';
            correctMsg.style.fontSize = '14px';
            correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${q.correct ? 'Richtig' : 'Falsch'}`;
            card.appendChild(correctMsg);
        } else if (userAnswer === undefined) {
            card.classList.add('wrong-answer-card');
            
            const correctMsg = document.createElement('div');
            correctMsg.className = 'correct-message';
            correctMsg.style.color = '#ff9800';
            correctMsg.style.marginTop = '10px';
            correctMsg.style.fontSize = '14px';
            correctMsg.innerHTML = `⚠️ لم يتم الإجابة - الصحيح: ${q.correct ? 'Richtig' : 'Falsch'}`;
            card.appendChild(correctMsg);
        }
    }
    
    const finalScore = (score * pointsPerQuestion).toFixed(2);
    const resultDiv = document.getElementById('truefalseResult');
    if (resultDiv) {
        resultDiv.innerHTML = `النتيجة: ${finalScore} / 25`;
        resultDiv.style.display = 'block';
    }
}

console.log("✅ Custom Dropdown جاهز (إلغاء بالضغط على نفس الخيار يعمل)");
console.log("✅ True/False Exam جاهز");
