// ============================================
// engine.js - محرك الامتحانات المتكامل
// يدعم: Matching (Custom Dropdown) + True/False + Teil 2 (نص طويل + أسئلة)
// ============================================

console.log("✅ engine.js تم تحميله (نسخة متكاملة)");

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

// ========== نظام Teil 2 (نص طويل + 5 أسئلة) ==========
let currentTeil2Data = null;
let teil2UserAnswers = {};

window.loadTeil2Exam = function(examData) {
  console.log("🟢 loadTeil2Exam", examData.title);
  currentTeil2Data = examData;
  teil2UserAnswers = {};
  renderTeil2Exam();
};

function renderTeil2Exam() {
  const container = document.getElementById("teil2");
  if (!container) return;
  container.innerHTML = "";
  
  // تقسيم الصفحة إلى عمودين (نص | أسئلة)
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
  // العمود الأيسر: النص
  const textColumn = document.createElement("div");
  textColumn.style.flex = "1";
  textColumn.style.minWidth = "300px";
  textColumn.style.backgroundColor = "#f9f9f9";
  textColumn.style.padding = "20px";
  textColumn.style.borderRadius = "12px";
  textColumn.style.border = "1px solid #ddd";
  textColumn.style.maxHeight = "600px";
  textColumn.style.overflowY = "auto";
  
  const textTitle = document.createElement("h3");
  textTitle.innerHTML = "📖 Text";
  textTitle.style.marginTop = "0";
  textTitle.style.color = "#2c3e66";
  textColumn.appendChild(textTitle);
  
  const textContent = document.createElement("div");
  textContent.innerHTML = currentTeil2Data.text;
  textContent.style.lineHeight = "1.7";
  textContent.style.fontSize = "14px";
  textContent.style.textAlign = "justify";
  textColumn.appendChild(textContent);
  
  // العمود الأيمن: الأسئلة
  const questionsColumn = document.createElement("div");
  questionsColumn.style.flex = "1";
  questionsColumn.style.minWidth = "300px";
  questionsColumn.style.backgroundColor = "#fff";
  questionsColumn.style.padding = "20px";
  questionsColumn.style.borderRadius = "12px";
  questionsColumn.style.border = "1px solid #ddd";
  
  const questionsTitle = document.createElement("h3");
  questionsTitle.innerHTML = "📝 Fragen";
  questionsTitle.style.marginTop = "0";
  questionsTitle.style.color = "#2c3e66";
  questionsColumn.appendChild(questionsTitle);
  
  const questionsContainer = document.createElement("div");
  questionsContainer.id = "teil2_questions_container";
  
  // بناء الأسئلة
  const questions = currentTeil2Data.questions;
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = "teil2_q_" + i;
    card.style.marginBottom = "20px";
    card.style.padding = "15px";
    card.style.border = "1px solid #e0e0e0";
    card.style.borderRadius = "10px";
    card.style.backgroundColor = "#fafafa";
    
    const questionText = document.createElement("div");
    questionText.className = "question-text";
    questionText.innerHTML = `<strong>${i + 1}. ${q.text}</strong>`;
    questionText.style.marginBottom = "12px";
    card.appendChild(questionText);
    
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options-container";
    optionsDiv.style.display = "flex";
    optionsDiv.style.flexDirection = "column";
    optionsDiv.style.gap = "8px";
    
    for (let j = 0; j < q.options.length; j++) {
      const label = document.createElement("label");
      label.className = "option-label";
      label.style.display = "flex";
      label.style.alignItems = "center";
      label.style.gap = "10px";
      label.style.cursor = "pointer";
      label.style.padding = "8px 12px";
      label.style.borderRadius = "8px";
      label.style.transition = "background 0.2s";
      
      const radioId = `teil2_q${i}_opt${j}`;
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `teil2_q${i}`;
      radio.value = j;
      radio.id = radioId;
      radio.style.cursor = "pointer";
      
      radio.onchange = (function(qIdx, ansIdx) {
        return function() {
          teil2UserAnswers[qIdx] = ansIdx;
          // إزالة التلوين القديم
          const oldCard = document.getElementById(`teil2_q_${qIdx}`);
          if (oldCard) {
            oldCard.classList.remove("correct-answer-card", "wrong-answer-card");
          }
        };
      })(i, j);
      
      const optionText = document.createElement("span");
      optionText.innerHTML = q.options[j];
      
      label.appendChild(radio);
      label.appendChild(optionText);
      
      label.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#f0f0f0";
      });
      label.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "transparent";
      });
      
      optionsDiv.appendChild(label);
    }
    card.appendChild(optionsDiv);
    questionsContainer.appendChild(card);
  }
  
  questionsColumn.appendChild(questionsContainer);
  
  // زر التصحيح
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح";
  checkBtn.className = "check-btn";
  checkBtn.style.width = "100%";
  checkBtn.style.marginTop = "20px";
  checkBtn.style.padding = "12px";
  checkBtn.style.backgroundColor = "#2c3e66";
  checkBtn.style.color = "white";
  checkBtn.style.border = "none";
  checkBtn.style.borderRadius = "8px";
  checkBtn.style.cursor = "pointer";
  checkBtn.style.fontSize = "16px";
  checkBtn.onclick = checkTeil2Exam;
  questionsColumn.appendChild(checkBtn);
  
  // زر إعادة تعيين
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "↺ إعادة تعيين";
  resetBtn.style.width = "100%";
  resetBtn.style.marginTop = "10px";
  resetBtn.style.padding = "10px";
  resetBtn.style.backgroundColor = "#6c757d";
  resetBtn.style.color = "white";
  resetBtn.style.border = "none";
  resetBtn.style.borderRadius = "8px";
  resetBtn.style.cursor = "pointer";
  resetBtn.style.fontSize = "14px";
  resetBtn.onclick = function() {
    // إعادة تعيين الإجابات
    teil2UserAnswers = {};
    // إلغاء تحديد جميع الراديوهات
    const allRadios = questionsColumn.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
      radio.checked = false;
    });
    // إزالة التلوين
    for (let i = 0; i < questions.length; i++) {
      const card = document.getElementById(`teil2_q_${i}`);
      if (card) {
        card.classList.remove("correct-answer-card", "wrong-answer-card");
      }
      const oldMsg = document.querySelector(`#teil2_q_${i} .correct-message`);
      if (oldMsg) oldMsg.remove();
    }
    // إخفاء نتيجة التصحيح
    const resultDiv = document.getElementById("teil2Result");
    if (resultDiv) resultDiv.style.display = "none";
  };
  questionsColumn.appendChild(resetBtn);
  
  // مكان النتيجة
  const resultDiv = document.createElement("div");
  resultDiv.id = "teil2Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  resultDiv.style.marginTop = "15px";
  resultDiv.style.padding = "12px";
  resultDiv.style.borderRadius = "8px";
  resultDiv.style.textAlign = "center";
  resultDiv.style.fontWeight = "bold";
  questionsColumn.appendChild(resultDiv);
  
  twoColumns.appendChild(textColumn);
  twoColumns.appendChild(questionsColumn);
  container.appendChild(twoColumns);
}

function checkTeil2Exam() {
  const questions = currentTeil2Data.questions;
  let score = 0;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  
  for (let i = 0; i < total; i++) {
    const q = questions[i];
    const card = document.getElementById(`teil2_q_${i}`);
    const userAnswer = teil2UserAnswers[i];
    const isCorrect = (userAnswer === q.correct);
    
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
      
      if (isCorrect && userAnswer !== undefined) {
        score++;
        card.classList.add("correct-answer-card");
      } else {
        card.classList.add("wrong-answer-card");
        
        const correctMsg = document.createElement("div");
        correctMsg.className = "correct-message";
        correctMsg.style.color = "#28a745";
        correctMsg.style.marginTop = "10px";
        correctMsg.style.fontSize = "14px";
        correctMsg.style.fontWeight = "bold";
        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${q.options[q.correct]}`;
        card.appendChild(correctMsg);
      }
      
      // تلوين الخيارات
      const radios = card.querySelectorAll('input[type="radio"]');
      for (let r = 0; r < radios.length; r++) {
        const radio = radios[r];
        const radioValue = parseInt(radio.value);
        const parentLabel = radio.parentElement;
        
        if (isCorrect && userAnswer !== undefined) {
          if (radio.checked) {
            parentLabel.style.backgroundColor = "#d4edda";
            parentLabel.style.border = "2px solid #28a745";
            parentLabel.style.borderRadius = "8px";
          }
        } else {
          if (radio.checked) {
            parentLabel.style.backgroundColor = "#f8d7da";
            parentLabel.style.border = "2px solid #dc3545";
            parentLabel.style.borderRadius = "8px";
          }
          if (radioValue === q.correct) {
            parentLabel.style.backgroundColor = "#d4edda";
            parentLabel.style.border = "2px solid #28a745";
            parentLabel.style.borderRadius = "8px";
          }
        }
      }
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("teil2Result");
  resultDiv.innerHTML = `النتيجة: ${finalScore} / 25`;
  resultDiv.style.display = "block";
  
  if (finalScore >= 20) {
    resultDiv.style.backgroundColor = "#d4edda";
    resultDiv.style.color = "#155724";
  } else if (finalScore >= 15) {
    resultDiv.style.backgroundColor = "#fff3cd";
    resultDiv.style.color = "#856404";
  } else {
    resultDiv.style.backgroundColor = "#f8d7da";
    resultDiv.style.color = "#721c24";
  }
}

// ========== نظام Matching (Custom Dropdown) ==========
let currentMatchingExamData = null;
let matchingSelectedAnswers = {};
let matchingAvailableOptions = [];
let openDropdownIndex = null;

window.loadMatchingExam = function(examData) {
  console.log("🟢 loadMatchingExam", examData.title);
  currentMatchingExamData = examData;
  matchingSelectedAnswers = {};
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
    
    const dropdownContainer = document.createElement("div");
    dropdownContainer.className = "custom-dropdown";
    dropdownContainer.id = "m_dropdown_" + i;
    dropdownContainer.style.position = "relative";
    dropdownContainer.style.width = "100%";
    dropdownContainer.style.marginTop = "10px";
    
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
    
    const btnText = document.createElement("span");
    const currentVal = matchingSelectedAnswers[i];
    btnText.textContent = currentVal || "-- اختر الإجابة --";
    btnText.style.color = currentVal ? "#333" : "#999";
    
    const arrow = document.createElement("span");
    arrow.textContent = "▼";
    arrow.style.fontSize = "12px";
    arrow.style.color = "#666";
    
    dropdownBtn.appendChild(btnText);
    dropdownBtn.appendChild(arrow);
    
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
    
    updateDropdownList(i);
    
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
  
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح";
  checkBtn.className = "check-btn";
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
    
    if (isCorrect && userAnswerText !== "") {
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
  resultDiv.innerHTML = "النتيجة: " + finalScore + " / 25";
  resultDiv.style.display = "block";
}

// ========== نظام True/False (Richtig/Falsch) ==========
window.buildTrueFalseExam = function(container, questions, note) {
  container.innerHTML = '';
  
  let userAnswers = {};
  let currentQuestions = questions;
  
  if (note) {
    const noteDiv = document.createElement('div');
    noteDiv.style.backgroundColor = '#fff3cd';
    noteDiv.style.color = '#856404';
    noteDiv.style.padding = '12px 15px';
    noteDiv.style.borderRadius = '8px';
    noteDiv.style.marginBottom = '20px';
    noteDiv.style.border = '1px solid #ffeeba';
    noteDiv.style.fontSize = '14px';
    noteDiv.style.fontWeight = 'bold';
    noteDiv.innerHTML = `📌 <strong>ملاحظة:</strong> ${note}`;
    container.appendChild(noteDiv);
  }
  
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
    div.id = `truefalse_card_${i}`;
    
    const labelTrue = document.createElement('label');
    labelTrue.className = 'option-label';
    labelTrue.style.display = 'inline-flex';
    labelTrue.style.alignItems = 'center';
    labelTrue.style.gap = '5px';
    labelTrue.style.cursor = 'pointer';
    labelTrue.style.marginRight = '15px';
    labelTrue.style.padding = '5px 10px';
    labelTrue.style.border = '1px solid #ccc';
    labelTrue.style.borderRadius = '5px';
    labelTrue.style.backgroundColor = 'white';
    
    const radioTrue = document.createElement('input');
    radioTrue.type = 'radio';
    radioTrue.name = `q${i}`;
    radioTrue.value = 'true';
    radioTrue.id = `q${i}_true`;
    
    radioTrue.onchange = () => {
      userAnswers[i] = true;
    };
    
    labelTrue.appendChild(radioTrue);
    labelTrue.appendChild(document.createTextNode(' Richtig'));
    
    const labelFalse = document.createElement('label');
    labelFalse.className = 'option-label';
    labelFalse.style.display = 'inline-flex';
    labelFalse.style.alignItems = 'center';
    labelFalse.style.gap = '5px';
    labelFalse.style.cursor = 'pointer';
    labelFalse.style.padding = '5px 10px';
    labelFalse.style.border = '1px solid #ccc';
    labelFalse.style.borderRadius = '5px';
    labelFalse.style.backgroundColor = 'white';
    
    const radioFalse = document.createElement('input');
    radioFalse.type = 'radio';
    radioFalse.name = `q${i}`;
    radioFalse.value = 'false';
    radioFalse.id = `q${i}_false`;
    
    radioFalse.onchange = () => {
      userAnswers[i] = false;
    };
    
    labelFalse.appendChild(radioFalse);
    labelFalse.appendChild(document.createTextNode(' Falsch'));
    
    const textSpan = document.createElement('span');
    textSpan.innerHTML = `<strong>${i + 1}</strong> ${q.text}`;
    textSpan.style.flex = '1';
    textSpan.style.minWidth = '200px';
    
    div.appendChild(labelTrue);
    div.appendChild(labelFalse);
    div.appendChild(textSpan);
    
    container.appendChild(div);
  });
  
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '15px';
  buttonContainer.style.justifyContent = 'center';
  buttonContainer.style.marginTop = '25px';
  buttonContainer.style.alignItems = 'center';
  
  const checkBtn = document.createElement('button');
  checkBtn.innerText = '📝 Prüfen';
  checkBtn.className = 'check-btn';
  checkBtn.style.padding = '12px 24px';
  checkBtn.style.backgroundColor = '#2c3e66';
  checkBtn.style.color = 'white';
  checkBtn.style.border = 'none';
  checkBtn.style.borderRadius = '8px';
  checkBtn.style.cursor = 'pointer';
  checkBtn.style.fontSize = '16px';
  
  checkBtn.onclick = () => {
    checkTrueFalseExam(currentQuestions, userAnswers);
  };
  
  const resetBtn = document.createElement('button');
  resetBtn.innerText = '↺';
  resetBtn.className = 'reset-btn';
  resetBtn.style.padding = '12px 18px';
  resetBtn.style.backgroundColor = '#6c757d';
  resetBtn.style.color = 'white';
  resetBtn.style.border = 'none';
  resetBtn.style.borderRadius = '8px';
  resetBtn.style.cursor = 'pointer';
  resetBtn.style.fontSize = '18px';
  resetBtn.style.fontWeight = 'bold';
  
  resetBtn.onclick = function() {
    for (let key in userAnswers) {
      delete userAnswers[key];
    }
    
    const allRadios = container.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
      radio.checked = false;
    });
    
    const cards = container.querySelectorAll('.question-card');
    cards.forEach(card => {
      card.classList.remove('correct-answer-card', 'wrong-answer-card');
    });
    
    const allMessages = container.querySelectorAll('.correct-message');
    allMessages.forEach(msg => msg.remove());
    
    const optionLabels = container.querySelectorAll('.option-label');
    optionLabels.forEach(label => {
      label.style.backgroundColor = 'white';
      label.style.border = '1px solid #ccc';
    });
    
    const resultDiv = document.getElementById('truefalseResult');
    if (resultDiv) {
      resultDiv.style.display = 'none';
      resultDiv.innerHTML = '';
    }
    
    console.log("✅ تم إعادة تعيين الامتحان");
  };
  
  buttonContainer.appendChild(checkBtn);
  buttonContainer.appendChild(resetBtn);
  container.appendChild(buttonContainer);
  
  const resultDiv = document.createElement('div');
  resultDiv.id = 'truefalseResult';
  resultDiv.className = 'result-box';
  resultDiv.style.display = 'none';
  container.appendChild(resultDiv);
};

function checkTrueFalseExam(questions, answers) {
  let score = 0;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  
  const cards = document.querySelectorAll('#hoeren1 .question-card, #hoeren2 .question-card, #hoeren3 .question-card');
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    const card = cards[i];
    const userAnswer = answers[i];
    const isCorrect = (userAnswer === q.correct);
    
    if (!card) continue;
    
    card.classList.remove('correct-answer-card', 'wrong-answer-card');
    const oldMsg = card.querySelector('.correct-message');
    if (oldMsg) oldMsg.remove();
    
    if (isCorrect && userAnswer !== undefined) {
      score++;
      card.classList.add('correct-answer-card');
    } else {
      card.classList.add('wrong-answer-card');
      
      if (userAnswer !== undefined) {
        const correctMsg = document.createElement('div');
        correctMsg.className = 'correct-message';
        correctMsg.style.color = '#28a745';
        correctMsg.style.marginTop = '10px';
        correctMsg.style.fontSize = '14px';
        correctMsg.style.fontWeight = 'bold';
        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${q.correct ? 'Richtig' : 'Falsch'}`;
        card.appendChild(correctMsg);
      } else if (userAnswer === undefined) {
        const correctMsg = document.createElement('div');
        correctMsg.className = 'correct-message';
        correctMsg.style.color = '#ff9800';
        correctMsg.style.marginTop = '10px';
        correctMsg.style.fontSize = '14px';
        correctMsg.style.fontWeight = 'bold';
        correctMsg.innerHTML = `⚠️ لم يتم الإجابة - الصحيح: ${q.correct ? 'Richtig' : 'Falsch'}`;
        card.appendChild(correctMsg);
      }
    }
    
    const radios = card.querySelectorAll('input[type="radio"]');
    for (let r = 0; r < radios.length; r++) {
      const radio = radios[r];
      const radioValue = radio.value === 'true';
      const parentLabel = radio.parentElement;
      
      if (isCorrect && userAnswer !== undefined) {
        if (radio.checked) {
          parentLabel.style.backgroundColor = '#d4edda';
          parentLabel.style.borderColor = '#28a745';
          parentLabel.style.border = '2px solid #28a745';
        }
      } else {
        if (radio.checked) {
          parentLabel.style.backgroundColor = '#f8d7da';
          parentLabel.style.borderColor = '#dc3545';
          parentLabel.style.border = '2px solid #dc3545';
        }
        if (radioValue === q.correct) {
          parentLabel.style.backgroundColor = '#d4edda';
          parentLabel.style.borderColor = '#28a745';
          parentLabel.style.border = '2px solid #28a745';
        }
      }
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById('truefalseResult');
  if (resultDiv) {
    resultDiv.innerHTML = `النتيجة: ${finalScore} / 25`;
    resultDiv.style.display = 'block';
    
    if (finalScore >= 20) {
      resultDiv.style.backgroundColor = '#28a745';
      resultDiv.style.color = 'white';
    } else if (finalScore >= 15) {
      resultDiv.style.backgroundColor = '#ffc107';
      resultDiv.style.color = '#333';
    } else {
      resultDiv.style.backgroundColor = '#dc3545';
      resultDiv.style.color = 'white';
    }
  }
}

console.log("✅ engine.js جاهز بالكامل");
console.log("✅ يدعم: Matching | True/False | Teil 2 (نص طويل + أسئلة)");
