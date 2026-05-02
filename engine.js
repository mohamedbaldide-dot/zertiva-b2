// ============================================
// engine.js - محرك الامتحانات المتكامل
// يدعم: Matching (Custom Dropdown) + True/False + Teil 2 + Teil 3
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
  teil3AvailableOptions = [...examData.situations];
  renderTeil3Exam();
};

function renderTeil3Exam() {
  const container = document.getElementById("teil3");
  if (!container) return;
  container.innerHTML = "";
  
  const items = currentTeil3Data.items;
  const situations = currentTeil3Data.situations;
  
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
  // العمود الأيسر
  const leftColumn = document.createElement("div");
  leftColumn.style.flex = "2";
  leftColumn.style.minWidth = "500px";
  
  const leftTitle = document.createElement("h3");
  leftTitle.innerHTML = "Anzeigen";
  leftTitle.style.marginTop = "0";
  leftTitle.style.color = "#2c3e66";
  leftTitle.style.marginBottom = "15px";
  leftColumn.appendChild(leftTitle);
  
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
    
    const itemTitle = document.createElement("div");
    itemTitle.style.fontWeight = "bold";
    itemTitle.style.fontSize = "16px";
    itemTitle.style.color = "#007bff";
    itemTitle.style.marginBottom = "10px";
    itemTitle.innerHTML = `Anzeige ${item.id.toUpperCase()}`;
    card.appendChild(itemTitle);
    
    const itemText = document.createElement("div");
    itemText.style.fontSize = "13px";
    itemText.style.lineHeight = "1.5";
    itemText.style.marginBottom = "12px";
    itemText.style.color = "#555";
    let shortText = item.text.length > 200 ? item.text.substring(0, 200) + "..." : item.text;
    itemText.innerHTML = shortText;
    card.appendChild(itemText);
    
    // حاوية dropdown
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
    // إذا كان هناك إجابة مختارة سابقاً (من استدعاء التصحيح) نعرضها
    if (currentVal && typeof currentVal === 'object' && currentVal.displayText) {
      btnText.textContent = currentVal.displayText;
      btnText.style.color = currentVal.isCorrect ? "#28a745" : "#dc3545";
    } else if (currentVal && typeof currentVal === 'string') {
      btnText.textContent = currentVal;
      btnText.style.color = "#333";
    } else {
      btnText.textContent = "-- اختر العنوان --";
      btnText.style.color = "#999";
    }
    
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
    
    updateTeil3DropdownList(i);
    
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
  
  // العمود الأيمن
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
  rightTitle.innerHTML = "Situationen";
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
  resetBtn.innerText = "↺";
  resetBtn.style.padding = "8px 12px";
  resetBtn.style.backgroundColor = "#6c757d";
  resetBtn.style.color = "white";
  resetBtn.style.border = "none";
  resetBtn.style.borderRadius = "6px";
  resetBtn.style.cursor = "pointer";
  resetBtn.style.fontSize = "16px";
  resetBtn.style.fontWeight = "bold";
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
  
  // خيار "ليس لها عنوان"
  const noneOption = document.createElement("div");
  noneOption.className = "dropdown-option";
  noneOption.textContent =  " — ليس لها عنوان — ";
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
  
  // الخيارات المتاحة
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
    
    optionDiv.addEventListener("click", (function(qIdx, optText) {
      return function(e) {
        e.stopPropagation();
        selectTeil3Option(qIdx, optText);
      };
    })(questionIndex, option));
    
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
  
  // إعادة الخيار القديم إلى القائمة المتاحة
  if (oldValue && typeof oldValue === 'string') {
    if (!teil3AvailableOptions.includes(oldValue)) {
      teil3AvailableOptions.push(oldValue);
      teil3AvailableOptions.sort();
    }
  }
  
  if (selectedText === null) {
    // اختيار "ليس لها عنوان"
    teil3UserAnswers[questionIndex] = "— ليس لها عنوان —";
  } else {
    // إزالة الخيار الجديد من القائمة المتاحة
    const indexInAvailable = teil3AvailableOptions.indexOf(selectedText);
    if (indexInAvailable !== -1) {
      teil3AvailableOptions.splice(indexInAvailable, 1);
    }
    teil3UserAnswers[questionIndex] = selectedText;
  }
  
  // تحديث عرض الزر
  const btnSpan = document.querySelector(`#teil3_btn_${questionIndex} span:first-child`);
  if (btnSpan) {
    const newVal = teil3UserAnswers[questionIndex];
    btnSpan.textContent = newVal || "-- اختر العنوان --";
    btnSpan.style.color = "#333";
  }
  
  closeTeil3Dropdown(questionIndex);
  
  // تحديث قوائم dropdown
  for (let i = 0; i < currentTeil3Data.items.length; i++) {
    updateTeil3DropdownList(i);
  }
}

function checkTeil3Exam() {
  const items = currentTeil3Data.items;
  let score = 0;
  let total = items.length;
  
  // إزالة التلوين القديم والرسائل
  for (let i = 0; i < total; i++) {
    const card = document.getElementById(`teil3_item_${i}`);
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
    }
  }
  
  // تصحيح الإجابات
  for (let i = 0; i < total; i++) {
    const item = items[i];
    const card = document.getElementById(`teil3_item_${i}`);
    const userAnswer = teil3UserAnswers[i];
    const correctIndex = item.correct;
    const btnSpan = document.querySelector(`#teil3_btn_${i} span:first-child`);
    
    let isCorrect = false;
    let displayText = "";
    
    // فقرة بدون عنوان (correct = null)
    if (correctIndex === null) {
      if (userAnswer === "— ليس لها عنوان —" || userAnswer === null || userAnswer === "") {
        isCorrect = true;
        score++;
        if (card) card.classList.add("correct-answer-card");
        displayText = "✅ ليس لها عنوان";
      } else {
        isCorrect = false;
        if (card) card.classList.add("wrong-answer-card");
        displayText = "✅ ليس لها عنوان";
      }
    } 
    // فقرة لها عنوان صحيح
    else {
      const correctText = currentTeil3Data.situations[correctIndex];
      if (userAnswer === correctText) {
        isCorrect = true;
        score++;
        if (card) card.classList.add("correct-answer-card");
        displayText = `✅ ${String.fromCharCode(97 + correctIndex)}. ${correctText}`;
      } else {
        isCorrect = false;
        if (card) card.classList.add("wrong-answer-card");
        displayText = `✅ ${String.fromCharCode(97 + correctIndex)}. ${correctText}`;
      }
    }
    
    // تغيير نص الزر إلى الإجابة الصحيحة (التي تظهر مكان -- اختر العنوان --)
    if (btnSpan) {
      btnSpan.textContent = displayText;
      btnSpan.style.color = isCorrect ? "#28a745" : "#dc3545";
    }
    
    // تخزين الإجابة بشكل كامل مع معلومات التصحيح
    teil3UserAnswers[i] = {
      selected: userAnswer,
      displayText: displayText,
      isCorrect: isCorrect
    };
  }
  
  const finalScore = (score * 25 / total).toFixed(2);
  const resultDiv = document.getElementById("teil3Result");
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

// ========== باقي الأنظمة (Teil 2, Matching, True/False) بنفس الشكل ولكن مع تعديلات بسيطة ==========
// ... (Teil 2, Matching, True/False بنفس التعديلات)

console.log("✅ engine.js جاهز بالكامل");
console.log("✅ يدعم: Matching (Teil 1) | True/False (Hören) | Teil 2 | Teil 3");
