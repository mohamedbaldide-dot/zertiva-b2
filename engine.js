// ============================================
// engine.js - محرك الامتحانات المتكامل
// يدعم: Matching (Custom Dropdown) + True/False + Teil 2 (نص طويل + أسئلة) + Teil 3 (Matching جديد)
// ============================================

console.log("✅ engine.js تم تحميله (نسخة متكاملة مع Teil 3)");

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

// ========== نظام Teil 3 (Matching جديد مع عمودين و Dropdown) ==========
let currentTeil3Data = null;
let teil3UserAnswers = {};
let teil3AvailableOptions = [];
let teil3OpenDropdownIndex = null;

window.loadTeil3Exam = function(examData) {
  console.log("🟢 loadTeil3Exam", examData.title);
  currentTeil3Data = examData;
  teil3UserAnswers = {};
  // تهيئة الخيارات المتاحة (العناوين)
  teil3AvailableOptions = [...examData.situations];
  renderTeil3Exam();
};

function renderTeil3Exam() {
  const container = document.getElementById("teil3");
  if (!container) return;
  container.innerHTML = "";
  
  const items = currentTeil3Data.items;
  const situations = currentTeil3Data.situations;
  
  // عرض الملاحظة إذا وجدت
  if (currentTeil3Data.note) {
    const noteDiv = document.createElement("div");
    noteDiv.style.backgroundColor = "#fff3cd";
    noteDiv.style.color = "#856404";
    noteDiv.style.padding = "12px 15px";
    noteDiv.style.borderRadius = "8px";
    noteDiv.style.marginBottom = "20px";
    noteDiv.style.border = "1px solid #ffeeba";
    noteDiv.style.fontSize = "14px";
    noteDiv.style.fontWeight = "bold";
    noteDiv.innerHTML = `📌 <strong>ملاحظة:</strong> ${currentTeil3Data.note}`;
    container.appendChild(noteDiv);
  }
  
  // تقسيم الصفحة إلى عمودين
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
  // ========== العمود الأيسر: الفقرات (Anzeigen) بعمودين فرعيين ==========
  const leftColumn = document.createElement("div");
  leftColumn.style.flex = "2";
  leftColumn.style.minWidth = "500px";
  
  const leftTitle = document.createElement("h3");
  leftTitle.innerHTML = "📺 Anzeigen";
  leftTitle.style.marginTop = "0";
  leftTitle.style.color = "#2c3e66";
  leftTitle.style.marginBottom = "15px";
  leftColumn.appendChild(leftTitle);
  
  // حاوية للفقرات (عمودين فرعيين)
  const itemsGrid = document.createElement("div");
  itemsGrid.style.display = "grid";
  itemsGrid.style.gridTemplateColumns = "1fr 1fr";
  itemsGrid.style.gap = "20px";
  
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `teil3_item_${i}`;
    card.style.padding = "15px";
    card.style.border = "1px solid #e0e0e0";
    card.style.borderRadius = "12px";
    card.style.backgroundColor = "#fafafa";
    card.style.transition = "all 0.3s";
    
    // عنوان الفقرة
    const itemTitle = document.createElement("div");
    itemTitle.style.fontWeight = "bold";
    itemTitle.style.fontSize = "16px";
    itemTitle.style.color = "#007bff";
    itemTitle.style.marginBottom = "10px";
    itemTitle.innerHTML = `Anzeige ${item.id.toUpperCase()}`;
    card.appendChild(itemTitle);
    
    // نص الفقرة (مختصر)
    const itemText = document.createElement("div");
    itemText.style.fontSize = "13px";
    itemText.style.lineHeight = "1.5";
    itemText.style.marginBottom = "12px";
    itemText.style.color = "#555";
    // اختصار النص الطويل
    let shortText = item.text.length > 200 ? item.text.substring(0, 200) + "..." : item.text;
    itemText.innerHTML = shortText;
    card.appendChild(itemText);
    
    // Dropdown
    const dropdownContainer = document.createElement("div");
    dropdownContainer.style.position = "relative";
    dropdownContainer.style.width = "100%";
    dropdownContainer.style.marginTop = "10px";
    
    const dropdownBtn = document.createElement("div");
    dropdownBtn.className = "dropdown-btn";
    dropdownBtn.id = `teil3_btn_${i}`;
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
    
    const currentVal = teil3UserAnswers[i];
    const btnText = document.createElement("span");
    btnText.textContent = currentVal || "-- اختر العنوان --";
    btnText.style.color = currentVal ? "#333" : "#999";
    
    const arrow = document.createElement("span");
    arrow.textContent = "▼";
    arrow.style.fontSize = "12px";
    arrow.style.color = "#666";
    
    dropdownBtn.appendChild(btnText);
    dropdownBtn.appendChild(arrow);
    
    const dropdownList = document.createElement("div");
    dropdownList.className = "dropdown-list";
    dropdownList.id = `teil3_list_${i}`;
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
    
    // تحديث قائمة الخيارات لهذا السؤال
    updateTeil3DropdownList(i);
    
    // حدث النقر على زر dropdown
    dropdownBtn.addEventListener("click", function(e) {
      e.stopPropagation();
      if (teil3OpenDropdownIndex !== null && teil3OpenDropdownIndex !== i) {
        closeTeil3Dropdown(teil3OpenDropdownIndex);
      }
      if (dropdownList.style.display === "block") {
        closeTeil3Dropdown(i);
      } else {
        openTeil3Dropdown(i);
      }
    });
    
    itemsGrid.appendChild(card);
  }
  
  leftColumn.appendChild(itemsGrid);
  
  // ========== العمود الأيمن: العناوين (Situationen) ==========
  const rightColumn = document.createElement("div");
  rightColumn.style.flex = "1";
  rightColumn.style.minWidth = "250px";
  rightColumn.style.backgroundColor = "#f0f8ff";
  rightColumn.style.padding = "20px";
  rightColumn.style.borderRadius = "12px";
  rightColumn.style.border = "1px solid #d0e0ff";
  rightColumn.style.maxHeight = "600px";
  rightColumn.style.overflowY = "auto";
  
  const rightTitle = document.createElement("h3");
  rightTitle.innerHTML = "🎯 Situationen (العناوين)";
  rightTitle.style.marginTop = "0";
  rightTitle.style.color = "#2c3e66";
  rightTitle.style.marginBottom = "15px";
  rightColumn.appendChild(rightTitle);
  
  const situationsList = document.createElement("div");
  situationsList.id = "teil3_situations_list";
  
  for (let i = 0; i < situations.length; i++) {
    const sitDiv = document.createElement("div");
    sitDiv.className = "teil3-situation";
    sitDiv.id = `teil3_sit_${i}`;
    sitDiv.style.padding = "8px 12px";
    sitDiv.style.marginBottom = "8px";
    sitDiv.style.backgroundColor = "white";
    sitDiv.style.borderRadius = "6px";
    sitDiv.style.border = "1px solid #ddd";
    sitDiv.style.fontSize = "13px";
    sitDiv.innerHTML = `${String.fromCharCode(97 + i)}. ${situations[i]}`;
    situationsList.appendChild(sitDiv);
  }
  
  rightColumn.appendChild(situationsList);
  
  twoColumns.appendChild(leftColumn);
  twoColumns.appendChild(rightColumn);
  container.appendChild(twoColumns);
  
  // أزرار التحكم
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "15px";
  buttonContainer.style.justifyContent = "center";
  buttonContainer.style.marginTop = "25px";
  
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "✅ تصحيح";
  checkBtn.className = "check-btn";
  checkBtn.style.padding = "12px 24px";
  checkBtn.style.backgroundColor = "#2c3e66";
  checkBtn.style.color = "white";
  checkBtn.style.border = "none";
  checkBtn.style.borderRadius = "8px";
  checkBtn.style.cursor = "pointer";
  checkBtn.style.fontSize = "16px";
  checkBtn.onclick = checkTeil3Exam;
  buttonContainer.appendChild(checkBtn);
  
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "↺ إعادة تعيين الكل";
  resetBtn.style.padding = "12px 24px";
  resetBtn.style.backgroundColor = "#6c757d";
  resetBtn.style.color = "white";
  resetBtn.style.border = "none";
  resetBtn.style.borderRadius = "8px";
  resetBtn.style.cursor = "pointer";
  resetBtn.style.fontSize = "16px";
  resetBtn.onclick = resetTeil3Exam;
  buttonContainer.appendChild(resetBtn);
  
  container.appendChild(buttonContainer);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "teil3Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  resultDiv.style.marginTop = "20px";
  resultDiv.style.padding = "15px";
  resultDiv.style.borderRadius = "8px";
  resultDiv.style.textAlign = "center";
  resultDiv.style.fontWeight = "bold";
  container.appendChild(resultDiv);
}

function updateTeil3DropdownList(questionIndex) {
  const list = document.getElementById(`teil3_list_${questionIndex}`);
  if (!list) return;
  
  list.innerHTML = "";
  
  // إضافة خيار "لا شيء مناسب"
  const noneOption = document.createElement("div");
  noneOption.className = "dropdown-option";
  noneOption.textContent = "❌ لا شيء مناسب";
  noneOption.style.padding = "10px";
  noneOption.style.cursor = "pointer";
  noneOption.style.borderBottom = "1px solid #eee";
  noneOption.style.color = "#d9534f";
  noneOption.style.fontStyle = "italic";
  
  noneOption.addEventListener("mouseenter", function() {
    this.style.backgroundColor = "#f8d7da";
  });
  noneOption.addEventListener("mouseleave", function() {
    this.style.backgroundColor = "white";
  });
  
  noneOption.addEventListener("click", function(e) {
    e.stopPropagation();
    selectTeil3Option(questionIndex, null);
  });
  list.appendChild(noneOption);
  
  // إضافة الخيارات المتاحة
  for (let i = 0; i < teil3AvailableOptions.length; i++) {
    const option = teil3AvailableOptions[i];
    const optionDiv = document.createElement("div");
    optionDiv.className = "dropdown-option";
    optionDiv.textContent = `${String.fromCharCode(97 + i)}. ${option}`;
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
    
    optionDiv.addEventListener("click", (function(qIdx, optText, optIdx) {
      return function(e) {
        e.stopPropagation();
        selectTeil3Option(qIdx, optText);
      };
    })(questionIndex, option, i));
    
    list.appendChild(optionDiv);
  }
}

function openTeil3Dropdown(questionIndex) {
  const list = document.getElementById(`teil3_list_${questionIndex}`);
  const btn = document.getElementById(`teil3_btn_${questionIndex}`);
  if (list && btn) {
    list.style.display = "block";
    btn.style.borderRadius = "8px 8px 0 0";
    btn.style.borderBottom = "none";
    teil3OpenDropdownIndex = questionIndex;
    updateTeil3DropdownList(questionIndex);
  }
}

function closeTeil3Dropdown(questionIndex) {
  const list = document.getElementById(`teil3_list_${questionIndex}`);
  const btn = document.getElementById(`teil3_btn_${questionIndex}`);
  if (list && btn) {
    list.style.display = "none";
    btn.style.borderRadius = "8px";
    btn.style.border = "1px solid #ccc";
  }
  if (teil3OpenDropdownIndex === questionIndex) {
    teil3OpenDropdownIndex = null;
  }
}

function selectTeil3Option(questionIndex, selectedText) {
  const oldValue = teil3UserAnswers[questionIndex] || "";
  
  // إذا كان المستخدم يريد إلغاء الاختيار (نفس الخيار)
  if (oldValue === selectedText && oldValue !== "") {
    // إعادة الخيار إلى القائمة المتاحة
    if (!teil3AvailableOptions.includes(selectedText)) {
      teil3AvailableOptions.push(selectedText);
      teil3AvailableOptions.sort();
    }
    teil3UserAnswers[questionIndex] = null;
  } 
  else {
    // إزالة الخيار الجديد من القائمة المتاحة
    if (selectedText !== null) {
      const indexInAvailable = teil3AvailableOptions.indexOf(selectedText);
      if (indexInAvailable !== -1) {
        teil3AvailableOptions.splice(indexInAvailable, 1);
      }
    }
    
    // إعادة الخيار القديم إلى القائمة المتاحة
    if (oldValue !== null && oldValue !== "") {
      if (!teil3AvailableOptions.includes(oldValue)) {
        teil3AvailableOptions.push(oldValue);
        teil3AvailableOptions.sort();
      }
    }
    
    teil3UserAnswers[questionIndex] = selectedText;
  }
  
  // تحديث عرض الزر
  const btnSpan = document.querySelector(`#teil3_btn_${questionIndex} span:first-child`);
  if (btnSpan) {
    const newVal = teil3UserAnswers[questionIndex];
    btnSpan.textContent = newVal || "-- اختر العنوان --";
    btnSpan.style.color = newVal ? "#333" : "#999";
  }
  
  closeTeil3Dropdown(questionIndex);
  
  // تحديث قوائم dropdown لجميع الأسئلة
  for (let i = 0; i < currentTeil3Data.items.length; i++) {
    updateTeil3DropdownList(i);
  }
}

function checkTeil3Exam() {
  const items = currentTeil3Data.items;
  let score = 0;
  let answeredCount = 0;
  const total = items.length;
  const pointsPerQuestion = 25 / total;
  
  for (let i = 0; i < total; i++) {
    const card = document.getElementById(`teil3_item_${i}`);
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
    }
  }
  
  for (let i = 0; i < total; i++) {
    const item = items[i];
    const card = document.getElementById(`teil3_item_${i}`);
    const userAnswer = teil3UserAnswers[i];
    const correctIndex = item.correct;
    
    let isCorrect = false;
    
    // فقرة بدون عنوان (correct = null)
    if (correctIndex === null) {
      // إذا تركها المستخدم فارغة أو اختار "لا شيء مناسب"
      if (userAnswer === null || userAnswer === "") {
        isCorrect = true;
        score++;
        if (card) card.classList.add("correct-answer-card");
      } else {
        isCorrect = false;
        if (card) card.classList.add("wrong-answer-card");
      }
    } 
    // فقرة لها عنوان صحيح
    else {
      const correctText = currentTeil3Data.situations[correctIndex];
      if (userAnswer === correctText) {
        isCorrect = true;
        score++;
        if (card) card.classList.add("correct-answer-card");
      } else {
        isCorrect = false;
        if (card) card.classList.add("wrong-answer-card");
      }
    }
    
    // إضافة رسالة الإجابة الصحيحة للفقرات الخاطئة
    if (!isCorrect && card) {
      let correctMsg = card.querySelector(".correct-message");
      if (!correctMsg) {
        correctMsg = document.createElement("div");
        correctMsg.className = "correct-message";
        correctMsg.style.color = "#28a745";
        correctMsg.style.marginTop = "10px";
        correctMsg.style.fontSize = "14px";
        correctMsg.style.fontWeight = "bold";
        card.appendChild(correctMsg);
      }
      
      if (item.correct === null) {
        correctMsg.innerHTML = "✅ هذه الفقرة ليس لها عنوان مناسب (يجب تركها فارغة)";
      } else {
        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${String.fromCharCode(97 + item.correct)}. ${currentTeil3Data.situations[item.correct]}`;
      }
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("teil3Result");
  resultDiv.innerHTML = `النتيجة: ${finalScore} / 25 (${score} من ${total} إجابة صحيحة)`;
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

function resetTeil3Exam() {
  // إعادة تعيين الإجابات
  teil3UserAnswers = {};
  // إعادة تعيين القائمة المتاحة
  teil3AvailableOptions = [...currentTeil3Data.situations];
  
  // تحديث جميع أزرار dropdown
  for (let i = 0; i < currentTeil3Data.items.length; i++) {
    const btnSpan = document.querySelector(`#teil3_btn_${i} span:first-child`);
    if (btnSpan) {
      btnSpan.textContent = "-- اختر العنوان --";
      btnSpan.style.color = "#999";
    }
    updateTeil3DropdownList(i);
  }
  
  // إزالة التلوين
  for (let i = 0; i < currentTeil3Data.items.length; i++) {
    const card = document.getElementById(`teil3_item_${i}`);
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
    }
  }
  
  // إخفاء النتيجة
  const resultDiv = document.getElementById("teil3Result");
  if (resultDiv) resultDiv.style.display = "none";
  
  console.log("✅ تم إعادة تعيين Teil 3");
}

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
    teil2UserAnswers = {};
    const allRadios = questionsColumn.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
      radio.checked = false;
    });
    for (let i = 0; i < questions.length; i++) {
      const card = document.getElementById(`teil2_q_${i}`);
      if (card) {
        card.classList.remove("correct-answer-card", "wrong-answer-card");
      }
      const oldMsg = document.querySelector(`#teil2_q_${i} .correct-message`);
      if (oldMsg) oldMsg.remove();
    }
    const resultDiv = document.getElementById("teil2Result");
    if (resultDiv) resultDiv.style.display = "none";
  };
  questionsColumn.appendChild(resetBtn);
  
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

// ========== نظام Matching القديم (Custom Dropdown) ==========
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
console.log("✅ يدعم: Matching (Teil 1) | True/False (Hören) | Teil 2 (نص طويل + أسئلة) | Teil 3 (Matching جديد مع عمودين)");
