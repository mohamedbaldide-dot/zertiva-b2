// ============================================
// engine.js - محرك الامتحانات المتكامل (النسخة النهائية الشغالة)
// يدعم: Matching + True/False + Teil 2 + Teil 3 + Sprachbausteine Teil 1 + Sprachbausteine Teil 2 + Schreiben
// ============================================

console.log("✅ engine.js تم تحميله (النسخة النهائية الشغالة)");

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

// ========== نظام Schreiben ==========
let currentSchreibenData = null;

window.loadSchreibenExam = function(examData) {
  console.log("🟢 loadSchreibenExam", examData.title);
  currentSchreibenData = examData;
  renderSchreibenExam();
};

function renderSchreibenExam() {
  const container = document.getElementById("schreiben");
  if (!container) return;
  container.innerHTML = "";
  
  const data = currentSchreibenData;
  
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
  const leftColumn = document.createElement("div");
  leftColumn.style.flex = "1";
  leftColumn.style.minWidth = "350px";
  leftColumn.style.backgroundColor = "#f9f9f9";
  leftColumn.style.padding = "20px";
  leftColumn.style.borderRadius = "12px";
  leftColumn.style.border = "1px solid #ddd";
  leftColumn.style.maxHeight = "80vh";
  leftColumn.style.overflowY = "auto";
  
  const situationTitle = document.createElement("h3");
  situationTitle.innerHTML = "📌 SITUATION";
  situationTitle.style.color = "#2c3e66";
  situationTitle.style.marginTop = "0";
  situationTitle.style.borderBottom = "2px solid #2c3e66";
  situationTitle.style.paddingBottom = "8px";
  leftColumn.appendChild(situationTitle);
  
  const situationDiv = document.createElement("div");
  situationDiv.style.backgroundColor = "white";
  situationDiv.style.padding = "15px";
  situationDiv.style.borderRadius = "8px";
  situationDiv.style.border = "1px solid #e0e0e0";
  situationDiv.style.marginBottom = "20px";
  
  const situationText = document.createElement("div");
  situationText.innerHTML = `<strong style="font-size:16px; color:#007bff;">${data.situation.title}</strong><br><br>${data.situation.text.replace(/\n/g, '<br>')}`;
  situationText.style.fontSize = "14px";
  situationText.style.lineHeight = "1.6";
  situationDiv.appendChild(situationText);
  leftColumn.appendChild(situationDiv);
  
  const aufgabeTitle = document.createElement("h3");
  aufgabeTitle.innerHTML = "📝 AUFGABE";
  aufgabeTitle.style.color = "#2c3e66";
  aufgabeTitle.style.marginTop = "15px";
  aufgabeTitle.style.borderBottom = "2px solid #2c3e66";
  aufgabeTitle.style.paddingBottom = "8px";
  leftColumn.appendChild(aufgabeTitle);
  
  const aufgabeDiv = document.createElement("div");
  aufgabeDiv.style.backgroundColor = "white";
  aufgabeDiv.style.padding = "15px";
  aufgabeDiv.style.borderRadius = "8px";
  aufgabeDiv.style.border = "1px solid #e0e0e0";
  
  const wordCount = document.createElement("div");
  wordCount.innerHTML = `<strong>✏️ ${data.aufgabe.wordCount}</strong>`;
  wordCount.style.marginBottom = "15px";
  wordCount.style.color = "#e67e22";
  wordCount.style.fontSize = "16px";
  aufgabeDiv.appendChild(wordCount);
  
  const description = document.createElement("div");
  description.innerHTML = data.aufgabe.description;
  description.style.marginBottom = "15px";
  description.style.fontSize = "14px";
  description.style.lineHeight = "1.6";
  aufgabeDiv.appendChild(description);
  
  const pointsTitle = document.createElement("div");
  pointsTitle.innerHTML = "<strong>▸ Bitte beachten Sie:</strong>";
  pointsTitle.style.marginBottom = "10px";
  pointsTitle.style.marginTop = "10px";
  aufgabeDiv.appendChild(pointsTitle);
  
  const pointsList = document.createElement("ul");
  pointsList.style.margin = "0";
  pointsList.style.paddingLeft = "20px";
  for (let i = 0; i < data.aufgabe.points.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = data.aufgabe.points[i];
    li.style.marginBottom = "8px";
    li.style.fontSize = "14px";
    pointsList.appendChild(li);
  }
  aufgabeDiv.appendChild(pointsList);
  
  leftColumn.appendChild(aufgabeDiv);
  
  const rightColumn = document.createElement("div");
  rightColumn.style.flex = "1";
  rightColumn.style.minWidth = "350px";
  rightColumn.style.backgroundColor = "#f0f8ff";
  rightColumn.style.padding = "20px";
  rightColumn.style.borderRadius = "12px";
  rightColumn.style.border = "1px solid #d0e0ff";
  rightColumn.style.maxHeight = "80vh";
  rightColumn.style.overflowY = "auto";
  
  const templateTitle = document.createElement("div");
  let cleanTitle = data.template.title;
  cleanTitle = cleanTitle.replace(/✦/g, '').trim();
  templateTitle.innerHTML = `✦ ${cleanTitle}`;
  templateTitle.style.backgroundColor = "#e3f2fd";
  templateTitle.style.padding = "10px";
  templateTitle.style.borderRadius = "8px";
  templateTitle.style.marginBottom = "15px";
  templateTitle.style.fontSize = "13px";
  templateTitle.style.color = "#0d47a1";
  templateTitle.style.fontWeight = "bold";
  rightColumn.appendChild(templateTitle);
  
  const templateBox = document.createElement("div");
  templateBox.style.backgroundColor = "white";
  templateBox.style.padding = "20px";
  templateBox.style.borderRadius = "12px";
  templateBox.style.border = "1px solid #ccc";
  templateBox.style.fontFamily = "monospace";
  templateBox.style.fontSize = "13px";
  templateBox.style.lineHeight = "1.6";
  templateBox.style.whiteSpace = "pre-wrap";
  
  let templateText = data.template.text;
  const bluePoints = data.template.colors.blue_points || [];
  
  let htmlText = templateText.replace(/\n/g, '<br>');
  for (let i = 0; i < bluePoints.length; i++) {
    const point = bluePoints[i];
    const regex = new RegExp(`(${point.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'g');
    htmlText = htmlText.replace(regex, `<span style="color: ${data.template.colors.blue}; font-weight: bold;">$1</span>`);
  }
  
  templateBox.innerHTML = htmlText;
  rightColumn.appendChild(templateBox);
  
  twoColumns.appendChild(leftColumn);
  twoColumns.appendChild(rightColumn);
  container.appendChild(twoColumns);
}

// ========== نظام Sprachbausteine Teil 2 ==========
let currentSprach2Data = null;
let sprach2UserAnswers = {};
let sprach2SelectedQuestionId = null;
let sprach2SelectedWordForLinking = null;

window.loadSprach2Exam = function(examData) {
  console.log("🟢 loadSprach2Exam", examData.title);
  currentSprach2Data = examData;
  sprach2UserAnswers = {};
  sprach2SelectedQuestionId = null;
  sprach2SelectedWordForLinking = null;
  renderSprach2Exam();
};

function isSprach2WordUsed(word) {
  for (let key in sprach2UserAnswers) {
    if (sprach2UserAnswers[key] === word) {
      return true;
    }
  }
  return false;
}

function clearSprach2WordSelection() {
  document.querySelectorAll('.sprach2-word-card').forEach(card => {
    card.style.backgroundColor = "#ffffff";
    card.style.border = "1px solid #7c6ce6";
    card.classList.remove('selected-for-link');
  });
}

function clearSprach2ButtonSelection() {
  document.querySelectorAll('.sprach2-gap-btn').forEach(btn => {
    btn.classList.remove('selected-for-link');
    btn.style.border = "none";
  });
}

function renderSprach2Exam() {
  const container = document.getElementById("sprach2");
  if (!container) return;
  container.innerHTML = "";
  
  const text = currentSprach2Data.text;
  const options = currentSprach2Data.options;
  const allOptions = currentSprach2Data.allOptions;
  
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
  const leftColumn = document.createElement("div");
  leftColumn.style.flex = "1.5";
  leftColumn.style.minWidth = "400px";
  leftColumn.style.backgroundColor = "#f9f9f9";
  leftColumn.style.padding = "20px";
  leftColumn.style.borderRadius = "12px";
  leftColumn.style.border = "1px solid #ddd";
  leftColumn.style.maxHeight = "600px";
  leftColumn.style.overflowY = "auto";
  
  const leftTitle = document.createElement("h3");
  leftTitle.innerHTML = "📝 Text";
  leftTitle.style.marginTop = "0";
  leftTitle.style.color = "#2c3e66";
  leftColumn.appendChild(leftTitle);
  
  let htmlText = text;
  for (let i = 1; i <= options.length; i++) {
    const btnId = `sprach2_btn_${i}`;
    const currentAnswer = sprach2UserAnswers[i];
    const btnText = currentAnswer || `__( ${i} )__`;
    const btnHtml = `<button id="${btnId}" class="sprach2-gap-btn" data-qid="${i}" style="background-color: #e0e0e0; border: none; padding: 4px 12px; border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: bold; margin: 0 2px;">${btnText}</button>`;
    htmlText = htmlText.replace(`__( ${i} )__`, btnHtml);
    htmlText = htmlText.replace(`......(${i})......`, btnHtml);
    htmlText = htmlText.replace(`......(${i})`, btnHtml);
    htmlText = htmlText.replace(`.....( ${i} ).....`, btnHtml);
  }
  
  const textDiv = document.createElement("div");
  textDiv.innerHTML = htmlText;
  textDiv.style.lineHeight = "1.8";
  textDiv.style.fontSize = "14px";
  textDiv.style.textAlign = "justify";
  
  for (let i = 1; i <= options.length; i++) {
    const btn = textDiv.querySelector(`#sprach2_btn_${i}`);
    if (btn) {
      btn.addEventListener('click', (function(qId) {
        return function(e) {
          e.stopPropagation();
          
          // التراجع عن الإجابة إذا كانت موجودة
          if (sprach2UserAnswers[qId]) {
            const oldWord = sprach2UserAnswers[qId];
            delete sprach2UserAnswers[qId];
            
            const wordCard = document.getElementById(`sprach2_word_${oldWord}`);
            if (wordCard) {
              wordCard.style.backgroundColor = "#ffffff";
              wordCard.style.border = "1px solid #7c6ce6";
              wordCard.style.color = "#4a4a4a";
              wordCard.style.cursor = "pointer";
              wordCard.style.opacity = "1";
              wordCard.classList.remove('selected-for-link');
              
              const newCard = wordCard.cloneNode(true);
              wordCard.parentNode.replaceChild(newCard, wordCard);
              
              newCard.onclick = (function(w) {
                return function() {
                  if (sprach2SelectedQuestionId) {
                    if (isSprach2WordUsed(w)) {
                      alert(`⚠️ كلمة "${w}" تم استخدامها بالفعل!`);
                      sprach2SelectedQuestionId = null;
                      clearSprach2ButtonSelection();
                      return;
                    }
                    sprach2UserAnswers[sprach2SelectedQuestionId] = w;
                    const targetBtn = document.getElementById(`sprach2_btn_${sprach2SelectedQuestionId}`);
                    if (targetBtn) {
                      targetBtn.textContent = w;
                      targetBtn.style.backgroundColor = "#d4edda";
                      targetBtn.style.color = "#155724";
                    }
                    const cardEl = document.getElementById(`sprach2_word_${w}`);
                    if (cardEl) {
                      cardEl.style.backgroundColor = "#d4edda";
                      cardEl.style.border = "2px solid #28a745";
                      cardEl.style.color = "#155724";
                      cardEl.style.cursor = "default";
                      cardEl.style.opacity = "0.6";
                    }
                    sprach2SelectedQuestionId = null;
                    clearSprach2ButtonSelection();
                  } else {
                    clearSprach2WordSelection();
                    newCard.classList.add('selected-for-link');
                    newCard.style.backgroundColor = "#c4b5fd";
                    newCard.style.border = "2px solid #7c6ce6";
                    sprach2SelectedWordForLinking = w;
                  }
                };
              })(oldWord);
              
              newCard.onmouseenter = function() {
                if (!this.classList.contains('selected-for-link')) {
                  this.style.backgroundColor = "#e8e4ff";
                  this.style.transform = "scale(1.02)";
                }
              };
              newCard.onmouseleave = function() {
                if (!this.classList.contains('selected-for-link')) {
                  this.style.backgroundColor = "#ffffff";
                  this.style.transform = "scale(1)";
                }
              };
            }
            
            btn.textContent = `__( ${qId} )__`;
            btn.style.backgroundColor = "#e0e0e0";
            btn.style.color = "#333";
            btn.classList.remove('selected-for-link');
            btn.style.border = "none";
            
            const parentDiv = btn.parentElement;
            const existingMsg = parentDiv.querySelector('.correct-answer-hint');
            if (existingMsg) existingMsg.remove();
            return;
          }
          
          if (sprach2SelectedWordForLinking) {
            const word = sprach2SelectedWordForLinking;
            if (isSprach2WordUsed(word)) {
              alert(`⚠️ كلمة "${word}" تم استخدامها بالفعل!`);
              sprach2SelectedWordForLinking = null;
              clearSprach2WordSelection();
              return;
            }
            sprach2UserAnswers[qId] = word;
            btn.textContent = word;
            btn.style.backgroundColor = "#d4edda";
            btn.style.color = "#155724";
            
            const wordCard = document.getElementById(`sprach2_word_${word}`);
            if (wordCard) {
              wordCard.style.backgroundColor = "#d4edda";
              wordCard.style.border = "2px solid #28a745";
              wordCard.style.color = "#155724";
              wordCard.style.cursor = "default";
              wordCard.style.opacity = "0.6";
            }
            sprach2SelectedWordForLinking = null;
            clearSprach2WordSelection();
          } else {
            clearSprach2ButtonSelection();
            btn.classList.add('selected-for-link');
            btn.style.border = "2px solid #7c6ce6";
            sprach2SelectedQuestionId = qId;
          }
        };
      })(i));
    }
  }
  
  leftColumn.appendChild(textDiv);
  
  const rightColumn = document.createElement("div");
  rightColumn.style.flex = "0.8";
  rightColumn.style.minWidth = "250px";
  rightColumn.style.backgroundColor = "#f0f8ff";
  rightColumn.style.padding = "20px";
  rightColumn.style.borderRadius = "12px";
  rightColumn.style.border = "1px solid #d0e0ff";
  rightColumn.style.maxHeight = "600px";
  rightColumn.style.overflowY = "auto";
  
  const rightTitle = document.createElement("h3");
  rightTitle.innerHTML = "📋 Wörter";
  rightTitle.style.marginTop = "0";
  rightTitle.style.color = "#2c3e66";
  rightColumn.appendChild(rightTitle);
  
  const wordsGrid = document.createElement("div");
  wordsGrid.style.display = "grid";
  wordsGrid.style.gridTemplateColumns = "repeat(3, 1fr)";
  wordsGrid.style.gap = "12px";
  
  const sortedOptions = [...allOptions].sort();
  
  for (let i = 0; i < sortedOptions.length; i++) {
    const word = sortedOptions[i];
    const wordCard = document.createElement("div");
    wordCard.className = "sprach2-word-card";
    wordCard.id = `sprach2_word_${word}`;
    wordCard.textContent = word;
    wordCard.style.backgroundColor = "#ffffff";
    wordCard.style.border = "1px solid #7c6ce6";
    wordCard.style.borderRadius = "8px";
    wordCard.style.padding = "8px 12px";
    wordCard.style.textAlign = "center";
    wordCard.style.cursor = "pointer";
    wordCard.style.transition = "all 0.2s";
    wordCard.style.fontWeight = "500";
    wordCard.style.color = "#4a4a4a";
    
    if (isSprach2WordUsed(word)) {
      wordCard.style.backgroundColor = "#d4edda";
      wordCard.style.border = "2px solid #28a745";
      wordCard.style.color = "#155724";
      wordCard.style.cursor = "default";
      wordCard.style.opacity = "0.6";
    } else {
      wordCard.onclick = (function(w) {
        return function() {
          if (sprach2SelectedQuestionId) {
            if (isSprach2WordUsed(w)) {
              alert(`⚠️ كلمة "${w}" تم استخدامها بالفعل!`);
              sprach2SelectedQuestionId = null;
              clearSprach2ButtonSelection();
              return;
            }
            sprach2UserAnswers[sprach2SelectedQuestionId] = w;
            const targetBtn = document.getElementById(`sprach2_btn_${sprach2SelectedQuestionId}`);
            if (targetBtn) {
              targetBtn.textContent = w;
              targetBtn.style.backgroundColor = "#d4edda";
              targetBtn.style.color = "#155724";
            }
            const cardEl = document.getElementById(`sprach2_word_${w}`);
            if (cardEl) {
              cardEl.style.backgroundColor = "#d4edda";
              cardEl.style.border = "2px solid #28a745";
              cardEl.style.color = "#155724";
              cardEl.style.cursor = "default";
              cardEl.style.opacity = "0.6";
            }
            sprach2SelectedQuestionId = null;
            clearSprach2ButtonSelection();
          } else {
            clearSprach2WordSelection();
            wordCard.classList.add('selected-for-link');
            wordCard.style.backgroundColor = "#c4b5fd";
            wordCard.style.border = "2px solid #7c6ce6";
            sprach2SelectedWordForLinking = w;
          }
        };
      })(word);
      
      wordCard.onmouseenter = function() {
        if (!this.classList.contains('selected-for-link')) {
          this.style.backgroundColor = "#e8e4ff";
          this.style.transform = "scale(1.02)";
        }
      };
      wordCard.onmouseleave = function() {
        if (!this.classList.contains('selected-for-link')) {
          this.style.backgroundColor = "#ffffff";
          this.style.transform = "scale(1)";
        }
      };
    }
    
    wordsGrid.appendChild(wordCard);
  }
  
  rightColumn.appendChild(wordsGrid);
  
  twoColumns.appendChild(leftColumn);
  twoColumns.appendChild(rightColumn);
  container.appendChild(twoColumns);
  
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
  checkBtn.onclick = checkSprach2Exam;
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
  resetBtn.onclick = resetSprach2Exam;
  buttonContainer.appendChild(resetBtn);
  
  container.appendChild(buttonContainer);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "sprach2Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  resultDiv.style.marginTop = "20px";
  resultDiv.style.padding = "15px";
  resultDiv.style.borderRadius = "8px";
  resultDiv.style.textAlign = "center";
  resultDiv.style.fontWeight = "bold";
  container.appendChild(resultDiv);
}

function resetSprach2Exam() {
  sprach2UserAnswers = {};
  sprach2SelectedQuestionId = null;
  sprach2SelectedWordForLinking = null;
  
  for (let i = 1; i <= currentSprach2Data.options.length; i++) {
    const btn = document.getElementById(`sprach2_btn_${i}`);
    if (btn) {
      btn.textContent = `__( ${i} )__`;
      btn.style.backgroundColor = "#e0e0e0";
      btn.style.color = "#333";
      btn.classList.remove('selected-for-link');
      btn.style.border = "none";
    }
  }
  
  const allWords = document.querySelectorAll('.sprach2-word-card');
  allWords.forEach(card => {
    card.style.backgroundColor = "#ffffff";
    card.style.border = "1px solid #7c6ce6";
    card.style.color = "#4a4a4a";
    card.style.cursor = "pointer";
    card.style.opacity = "1";
    card.classList.remove('selected-for-link');
  });
  
  const resultDiv = document.getElementById("sprach2Result");
  if (resultDiv) resultDiv.style.display = "none";
  
  console.log("✅ تم إعادة تعيين Sprachbausteine Teil 2");
}

function checkSprach2Exam() {
  const options = currentSprach2Data.options;
  let score = 0;
  const total = options.length;
  const pointsPerQuestion = 25 / total;
  
  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    const userAnswer = sprach2UserAnswers[opt.id];
    const isCorrect = (userAnswer === opt.correct);
    
    if (isCorrect) {
      score++;
    }
    
    const btn = document.getElementById(`sprach2_btn_${opt.id}`);
    if (btn) {
      if (isCorrect) {
        btn.style.backgroundColor = "#28a745";
        btn.style.color = "white";
      } else if (userAnswer) {
        btn.style.backgroundColor = "#e67e22";
        btn.style.color = "white";
      } else {
        btn.style.backgroundColor = "#e67e22";
        btn.style.color = "white";
      }
    }
    
    if (btn && !isCorrect) {
      const parentDiv = btn.parentElement;
      let existingMsg = parentDiv.querySelector('.correct-answer-hint');
      if (existingMsg) existingMsg.remove();
      
      const correctMsg = document.createElement('div');
      correctMsg.className = 'correct-answer-hint';
      correctMsg.style.marginTop = '5px';
      correctMsg.style.fontSize = '12px';
      correctMsg.style.color = '#28a745';
      correctMsg.style.fontWeight = 'bold';
      correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${opt.correct}`;
      parentDiv.appendChild(correctMsg);
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("sprach2Result");
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

// ========== نظام Sprachbausteine Teil 1 ==========
let currentSprach1Data = null;
let sprach1UserAnswers = {};

window.loadSprach1Exam = function(examData) {
  console.log("🟢 loadSprach1Exam", examData.title);
  currentSprach1Data = examData;
  sprach1UserAnswers = {};
  renderSprach1Exam();
};

function renderSprach1Exam() {
  const container = document.getElementById("sprach1");
  if (!container) return;
  container.innerHTML = "";
  
  const text = currentSprach1Data.text;
  const options = currentSprach1Data.options;
  
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
  const leftColumn = document.createElement("div");
  leftColumn.style.flex = "1.5";
  leftColumn.style.minWidth = "400px";
  leftColumn.style.backgroundColor = "#f9f9f9";
  leftColumn.style.padding = "20px";
  leftColumn.style.borderRadius = "12px";
  leftColumn.style.border = "1px solid #ddd";
  leftColumn.style.maxHeight = "600px";
  leftColumn.style.overflowY = "auto";
  
  const leftTitle = document.createElement("h3");
  leftTitle.innerHTML = "📝 Text";
  leftTitle.style.marginTop = "0";
  leftTitle.style.color = "#2c3e66";
  leftColumn.appendChild(leftTitle);
  
  let htmlText = text;
  for (let i = 1; i <= options.length; i++) {
    const btnId = `sprach1_btn_${i}`;
    const currentAnswer = sprach1UserAnswers[i];
    const btnText = currentAnswer || `__(${i})__`;
    const btnHtml = `<button id="${btnId}" class="sprach1-gap-btn" style="background-color: #e0e0e0; border: none; padding: 4px 12px; border-radius: 20px; cursor: pointer; font-size: 14px; font-weight: bold; margin: 0 2px;">${btnText}</button>`;
    htmlText = htmlText.replace(`⌄ __ (${i}) __ ⌄`, btnHtml);
  }
  
  const textDiv = document.createElement("div");
  textDiv.innerHTML = htmlText;
  textDiv.style.lineHeight = "1.8";
  textDiv.style.fontSize = "14px";
  textDiv.style.textAlign = "justify";
  
  for (let i = 1; i <= options.length; i++) {
    const btn = textDiv.querySelector(`#sprach1_btn_${i}`);
    if (btn) {
      btn.onclick = (function(qId) {
        return function() { openSprach1Dropdown(qId); };
      })(i);
    }
  }
  
  leftColumn.appendChild(textDiv);
  
  const rightColumn = document.createElement("div");
  rightColumn.style.flex = "0.8";
  rightColumn.style.minWidth = "250px";
  rightColumn.style.backgroundColor = "#f0f8ff";
  rightColumn.style.padding = "20px";
  rightColumn.style.borderRadius = "12px";
  rightColumn.style.border = "1px solid #d0e0ff";
  rightColumn.style.maxHeight = "600px";
  rightColumn.style.overflowY = "auto";
  
  const rightTitle = document.createElement("h3");
  rightTitle.innerHTML = "📋 Optionen";
  rightTitle.style.marginTop = "0";
  rightTitle.style.color = "#2c3e66";
  rightColumn.appendChild(rightTitle);
  
  const optionsContainer = document.createElement("div");
  optionsContainer.id = "sprach1_options_container";
  
  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    const optDiv = document.createElement("div");
    optDiv.className = "sprach1-option-group";
    optDiv.id = `sprach1_opt_group_${opt.id}`;
    optDiv.style.marginBottom = "20px";
    optDiv.style.padding = "10px";
    optDiv.style.backgroundColor = "white";
    optDiv.style.borderRadius = "8px";
    optDiv.style.border = "1px solid #ddd";
    
    const optTitle = document.createElement("div");
    optTitle.innerHTML = `<strong>${opt.id} Optionen</strong>`;
    optTitle.style.marginBottom = "10px";
    optTitle.style.color = "#7c6ce6";
    optDiv.appendChild(optTitle);
    
    const optList = document.createElement("div");
    optList.style.display = "flex";
    optList.style.flexWrap = "wrap";
    optList.style.gap = "15px";
    
    for (let j = 0; j < opt.options.length; j++) {
      const optionLabel = document.createElement("label");
      optionLabel.style.display = "inline-flex";
      optionLabel.style.alignItems = "center";
      optionLabel.style.gap = "5px";
      optionLabel.style.cursor = "pointer";
      optionLabel.style.padding = "5px 10px";
      optionLabel.style.borderRadius = "5px";
      optionLabel.style.backgroundColor = "#f8f9fa";
      optionLabel.style.border = "1px solid #ccc";
      
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `sprach1_q${opt.id}`;
      radio.value = opt.options[j];
      radio.id = `sprach1_opt_${opt.id}_${j}`;
      
      if (sprach1UserAnswers[opt.id] === opt.options[j]) {
        radio.checked = true;
      }
      
      radio.onchange = (function(qId, selectedValue) {
        return function() {
          selectSprach1Option(qId, selectedValue);
        };
      })(opt.id, opt.options[j]);
      
      const optionText = document.createElement("span");
      optionText.textContent = opt.options[j];
      optionText.style.fontSize = "13px";
      
      optionLabel.appendChild(radio);
      optionLabel.appendChild(optionText);
      optList.appendChild(optionLabel);
    }
    
    optDiv.appendChild(optList);
    optionsContainer.appendChild(optDiv);
  }
  
  rightColumn.appendChild(optionsContainer);
  
  twoColumns.appendChild(leftColumn);
  twoColumns.appendChild(rightColumn);
  container.appendChild(twoColumns);
  
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
  checkBtn.onclick = checkSprach1Exam;
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
  resetBtn.onclick = resetSprach1Exam;
  buttonContainer.appendChild(resetBtn);
  
  container.appendChild(buttonContainer);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "sprach1Result";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  resultDiv.style.marginTop = "20px";
  resultDiv.style.padding = "15px";
  resultDiv.style.borderRadius = "8px";
  resultDiv.style.textAlign = "center";
  resultDiv.style.fontWeight = "bold";
  container.appendChild(resultDiv);
}

let sprach1OpenDropdownId = null;

function openSprach1Dropdown(questionId) {
  if (sprach1OpenDropdownId) {
    const oldList = document.getElementById(`sprach1_dropdown_list_${sprach1OpenDropdownId}`);
    if (oldList) oldList.remove();
  }
  
  const btn = document.getElementById(`sprach1_btn_${questionId}`);
  if (!btn) return;
  
  const oldList = document.getElementById(`sprach1_dropdown_list_${questionId}`);
  if (oldList) oldList.remove();
  
  const dropdownList = document.createElement("div");
  dropdownList.id = `sprach1_dropdown_list_${questionId}`;
  dropdownList.style.position = "absolute";
  dropdownList.style.backgroundColor = "white";
  dropdownList.style.border = "1px solid #ccc";
  dropdownList.style.borderRadius = "8px";
  dropdownList.style.padding = "5px 0";
  dropdownList.style.zIndex = "1000";
  dropdownList.style.minWidth = "150px";
  dropdownList.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
  
  const optionItem = currentSprach1Data.options.find(opt => opt.id === questionId);
  if (optionItem) {
    for (let i = 0; i < optionItem.options.length; i++) {
      const opt = optionItem.options[i];
      const optDiv = document.createElement("div");
      optDiv.textContent = opt;
      optDiv.style.padding = "8px 12px";
      optDiv.style.cursor = "pointer";
      optDiv.style.transition = "background 0.2s";
      
      optDiv.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#e8e4ff";
      });
      optDiv.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "white";
      });
      
      optDiv.addEventListener("click", (function(qId, selectedValue) {
        return function() {
          selectSprach1Option(qId, selectedValue);
          dropdownList.remove();
          sprach1OpenDropdownId = null;
        };
      })(questionId, opt));
      
      dropdownList.appendChild(optDiv);
    }
  }
  
  const rect = btn.getBoundingClientRect();
  dropdownList.style.position = "fixed";
  dropdownList.style.top = `${rect.bottom + 5}px`;
  dropdownList.style.left = `${rect.left}px`;
  
  document.body.appendChild(dropdownList);
  sprach1OpenDropdownId = questionId;
  
  setTimeout(() => {
    document.addEventListener("click", function closeDropdown(e) {
      if (!dropdownList.contains(e.target) && e.target !== btn) {
        dropdownList.remove();
        document.removeEventListener("click", closeDropdown);
        sprach1OpenDropdownId = null;
      }
    });
  }, 0);
}

function selectSprach1Option(questionId, selectedValue) {
  sprach1UserAnswers[questionId] = selectedValue;
  
  const btn = document.getElementById(`sprach1_btn_${questionId}`);
  if (btn) {
    btn.textContent = selectedValue;
    btn.style.backgroundColor = "#d4edda";
    btn.style.color = "#155724";
  }
  
  for (let i = 0; i < currentSprach1Data.options.length; i++) {
    const opt = currentSprach1Data.options[i];
    if (opt.id === questionId) {
      for (let j = 0; j < opt.options.length; j++) {
        const radio = document.getElementById(`sprach1_opt_${questionId}_${j}`);
        if (radio && radio.value === selectedValue) {
          radio.checked = true;
        }
      }
      break;
    }
  }
}

function resetSprach1Exam() {
  sprach1UserAnswers = {};
  
  for (let i = 1; i <= currentSprach1Data.options.length; i++) {
    const btn = document.getElementById(`sprach1_btn_${i}`);
    if (btn) {
      btn.textContent = `__(${i})__`;
      btn.style.backgroundColor = "#e0e0e0";
      btn.style.color = "#333";
    }
    
    for (let j = 0; j < currentSprach1Data.options.length; j++) {
      const opt = currentSprach1Data.options[j];
      if (opt.id === i) {
        for (let k = 0; k < opt.options.length; k++) {
          const radio = document.getElementById(`sprach1_opt_${i}_${k}`);
          if (radio) radio.checked = false;
        }
        break;
      }
    }
  }
  
  const resultDiv = document.getElementById("sprach1Result");
  if (resultDiv) resultDiv.style.display = "none";
  
  console.log("✅ تم إعادة تعيين Sprachbausteine Teil 1");
}

function checkSprach1Exam() {
  const options = currentSprach1Data.options;
  let score = 0;
  const total = options.length;
  const pointsPerQuestion = 25 / total;
  
  for (let i = 0; i < options.length; i++) {
    const opt = options[i];
    const userAnswer = sprach1UserAnswers[opt.id];
    const isCorrect = (userAnswer === opt.options[opt.correct]);
    
    if (isCorrect) {
      score++;
    }
    
    const btn = document.getElementById(`sprach1_btn_${opt.id}`);
    if (btn) {
      if (isCorrect) {
        btn.style.backgroundColor = "#28a745";
        btn.style.color = "white";
      } else if (userAnswer) {
        btn.style.backgroundColor = "#e67e22";
        btn.style.color = "white";
      } else {
        btn.style.backgroundColor = "#e67e22";
        btn.style.color = "white";
      }
    }
    
    const optGroup = document.getElementById(`sprach1_opt_group_${opt.id}`);
    if (optGroup) {
      if (isCorrect) {
        optGroup.style.backgroundColor = "#d4edda";
        optGroup.style.border = "2px solid #28a745";
      } else if (userAnswer) {
        optGroup.style.backgroundColor = "#fef0e0";
        optGroup.style.border = "2px solid #e67e22";
      } else {
        optGroup.style.backgroundColor = "#fef0e0";
        optGroup.style.border = "2px solid #e67e22";
      }
    }
    
    const correctAnswer = opt.options[opt.correct];
    const correctIndex = opt.options.indexOf(correctAnswer);
    const correctRadio = document.getElementById(`sprach1_opt_${opt.id}_${correctIndex}`);
    if (correctRadio) {
      const parentLabel = correctRadio.parentElement;
      if (parentLabel && !isCorrect) {
        parentLabel.style.backgroundColor = "#d4edda";
        parentLabel.style.border = "2px solid #28a745";
      }
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("sprach1Result");
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

// ========== نظام True/False ==========
window.buildTrueFalseExam = function(container, questions, note) {
  container.innerHTML = '';
  
  if (window._trueFalseUserAnswers) {
    delete window._trueFalseUserAnswers;
  }
  window._trueFalseUserAnswers = {};
  
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
  
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
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
    
    radioTrue.onchange = (function(idx) {
      return function() {
        window._trueFalseUserAnswers[idx] = true;
      };
    })(i);
    
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
    
    radioFalse.onchange = (function(idx) {
      return function() {
        window._trueFalseUserAnswers[idx] = false;
      };
    })(i);
    
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
  }
  
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '15px';
  buttonContainer.style.justifyContent = 'space-between';
  buttonContainer.style.alignItems = 'center';
  buttonContainer.style.marginTop = '25px';
  
  const correctNumbersContainer = document.createElement('div');
  correctNumbersContainer.id = "truefalseCorrectNumbers";
  correctNumbersContainer.style.backgroundColor = "#e3f2fd";
  correctNumbersContainer.style.color = "#0d47a1";
  correctNumbersContainer.style.padding = "10px 15px";
  correctNumbersContainer.style.borderRadius = "8px";
  correctNumbersContainer.style.fontWeight = "bold";
  correctNumbersContainer.style.fontSize = "14px";
  correctNumbersContainer.style.border = "1px solid #90caf9";
  correctNumbersContainer.style.display = "none";
  correctNumbersContainer.innerHTML = '▸ : ';
  
  const buttonsDiv = document.createElement('div');
  buttonsDiv.style.display = 'flex';
  buttonsDiv.style.gap = '15px';
  
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
    checkTrueFalseExam(container, questions, window._trueFalseUserAnswers, correctNumbersContainer);
  };
  
  const resetBtn = document.createElement('button');
  resetBtn.innerText = '↺';
  resetBtn.style.padding = '8px 12px';
  resetBtn.style.backgroundColor = '#6c757d';
  resetBtn.style.color = 'white';
  resetBtn.style.border = 'none';
  resetBtn.style.borderRadius = '6px';
  resetBtn.style.cursor = 'pointer';
  resetBtn.style.fontSize = '16px';
  resetBtn.style.fontWeight = 'bold';
  
  resetBtn.onclick = function() {
    for (let key in window._trueFalseUserAnswers) {
      delete window._trueFalseUserAnswers[key];
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
    
    correctNumbersContainer.style.display = 'none';
    
    const resultDiv = document.getElementById('truefalseResult');
    if (resultDiv) {
      resultDiv.style.display = 'none';
      resultDiv.innerHTML = '';
    }
  };
  
  buttonsDiv.appendChild(checkBtn);
  buttonsDiv.appendChild(resetBtn);
  
  buttonContainer.appendChild(correctNumbersContainer);
  buttonContainer.appendChild(buttonsDiv);
  container.appendChild(buttonContainer);
  
  const resultDiv = document.createElement('div');
  resultDiv.id = 'truefalseResult';
  resultDiv.className = 'result-box';
  resultDiv.style.display = 'none';
  container.appendChild(resultDiv);
};

function checkTrueFalseExam(container, questions, answers, correctNumbersContainer) {
  let score = 0;
  const total = questions.length;
  const pointsPerQuestion = 25 / total;
  let correctIndices = [];
  
  const cards = container.querySelectorAll('.question-card');
  
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
      correctIndices.push(i + 1);
      card.classList.add('correct-answer-card');
    } else {
      card.classList.add('wrong-answer-card');
      
      const correctMsg = document.createElement('div');
      correctMsg.className = 'correct-message';
      correctMsg.style.marginTop = '10px';
      correctMsg.style.fontSize = '14px';
      correctMsg.style.fontWeight = 'bold';
      correctMsg.style.color = '#28a745';
      correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${q.correct ? 'Richtig' : 'Falsch'}`;
      card.appendChild(correctMsg);
    }
    
    const radios = card.querySelectorAll('input[type="radio"]');
    for (let r = 0; r < radios.length; r++) {
      const radio = radios[r];
      const radioValue = radio.value === 'true';
      const parentLabel = radio.parentElement;
      
      if (isCorrect && userAnswer !== undefined) {
        if (radio.checked) {
          parentLabel.style.backgroundColor = '#d4edda';
          parentLabel.style.border = '2px solid #28a745';
        }
      } else {
        if (radio.checked) {
          parentLabel.style.backgroundColor = '#fef0e0';
          parentLabel.style.border = '2px solid #e67e22';
        }
        if (radioValue === q.correct) {
          parentLabel.style.backgroundColor = '#d4edda';
          parentLabel.style.border = '2px solid #28a745';
        }
      }
    }
  }
  
  if (correctNumbersContainer) {
    correctNumbersContainer.style.display = 'block';
    if (correctIndices.length > 0) {
      correctNumbersContainer.innerHTML = `▸ : ${correctIndices.join(" ")}`;
    } else {
      correctNumbersContainer.innerHTML = "▸ : لا توجد إجابات صحيحة";
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

// ========== نظام Teil 3 (معدل بالكامل) ==========
let currentTeil3Data = null;
let teil3UserAnswers = {};
let teil3SelectedItemIndex = null;
let teil3SelectedSituationIndex = null;

window.loadTeil3Exam = function(examData) {
  console.log("🟢 loadTeil3Exam", examData.title);
  currentTeil3Data = examData;
  teil3UserAnswers = {};
  teil3SelectedItemIndex = null;
  teil3SelectedSituationIndex = null;
  renderTeil3Exam();
};

function clearTeil3ItemSelection() {
  document.querySelectorAll('.teil3-item-card').forEach(card => {
    card.classList.remove('selected-for-link');
    card.style.border = "1px solid #e0e0e0";
  });
}

function clearTeil3SituationSelection() {
  document.querySelectorAll('.teil3-situation-item').forEach(sit => {
    sit.classList.remove('selected-for-link');
    sit.style.border = "1px solid #ddd";
  });
}

function checkIfSituationUsed(sitIdx, excludeItemIdx = null) {
  for (let key in teil3UserAnswers) {
    const ans = teil3UserAnswers[key];
    if (ans !== undefined && ans !== null && typeof ans === 'number') {
      if (ans === sitIdx && parseInt(key) !== excludeItemIdx) {
        return true;
      }
    }
  }
  return false;
}

function rebindSituationClick(sitIdx) {
  const sitDiv = document.getElementById(`teil3_sit_${sitIdx}`);
  if (!sitDiv) return;
  const newSitDiv = sitDiv.cloneNode(true);
  sitDiv.parentNode.replaceChild(newSitDiv, sitDiv);
  newSitDiv.id = `teil3_sit_${sitIdx}`;
  newSitDiv.setAttribute('data-sit-index', sitIdx);
  newSitDiv.style.backgroundColor = "white";
  newSitDiv.style.border = "1px solid #ddd";
  newSitDiv.style.cursor = "pointer";
  newSitDiv.style.opacity = "1";
  newSitDiv.classList.remove('used', 'selected-for-link');
  newSitDiv.innerHTML = `${String.fromCharCode(97 + sitIdx)}. ${currentTeil3Data.situations[sitIdx]}`;
  
  newSitDiv.onclick = (e) => {
    e.stopPropagation();
    if (teil3SelectedItemIndex !== null) {
      if (newSitDiv.classList.contains('used')) {
        alert(`⚠️ الموقف "${String.fromCharCode(97 + sitIdx)}. ${currentTeil3Data.situations[sitIdx]}" تم استخدامه بالفعل!`);
        clearTeil3ItemSelection();
        teil3SelectedItemIndex = null;
        return;
      }
      const oldSitForItem = teil3UserAnswers[teil3SelectedItemIndex];
      if (oldSitForItem !== undefined && oldSitForItem !== null && typeof oldSitForItem === 'number') {
        const oldSitDiv = document.getElementById(`teil3_sit_${oldSitForItem}`);
        if (oldSitDiv) {
          oldSitDiv.style.backgroundColor = "white";
          oldSitDiv.style.border = "1px solid #ddd";
          oldSitDiv.style.cursor = "pointer";
          oldSitDiv.style.opacity = "1";
          oldSitDiv.classList.remove('used');
          rebindSituationClick(oldSitForItem);
        }
      }
      teil3UserAnswers[teil3SelectedItemIndex] = sitIdx;
      const dropdownBtn = document.getElementById(`teil3_dropdown_btn_${teil3SelectedItemIndex}`);
      if (dropdownBtn) {
        dropdownBtn.innerHTML = `<span>${String.fromCharCode(97 + sitIdx)}. ${currentTeil3Data.situations[sitIdx]}</span><span>▼</span>`;
      }
      newSitDiv.style.backgroundColor = "#d4edda";
      newSitDiv.style.border = "2px solid #28a745";
      newSitDiv.style.cursor = "default";
      newSitDiv.style.opacity = "0.6";
      newSitDiv.classList.add('used');
      clearTeil3ItemSelection();
      teil3SelectedItemIndex = null;
    } else {
      if (newSitDiv.classList.contains('used')) return;
      clearTeil3SituationSelection();
      newSitDiv.classList.add('selected-for-link');
      newSitDiv.style.border = "2px solid #7c6ce6";
      teil3SelectedSituationIndex = sitIdx;
    }
  };
  
  newSitDiv.onmouseenter = () => {
    if (!newSitDiv.classList.contains('used') && !newSitDiv.classList.contains('selected-for-link')) {
      newSitDiv.style.backgroundColor = "#e8e4ff";
    }
  };
  newSitDiv.onmouseleave = () => {
    if (!newSitDiv.classList.contains('used') && !newSitDiv.classList.contains('selected-for-link')) {
      newSitDiv.style.backgroundColor = "white";
    }
  };
}

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
    card.className = "teil3-item-card question-card";
    card.id = `teil3_item_${i}`;
    card.setAttribute('data-item-index', i);
    card.style.padding = "15px";
    card.style.border = "1px solid #e0e0e0";
    card.style.borderRadius = "12px";
    card.style.backgroundColor = "#fafafa";
    card.style.transition = "all 0.3s";
    card.style.cursor = "pointer";
    
    const itemTitle = document.createElement("div");
    itemTitle.style.fontWeight = "bold";
    itemTitle.style.fontSize = "16px";
    itemTitle.style.color = "#7c6ce6";
    itemTitle.style.marginBottom = "10px";
    itemTitle.innerHTML = `Anzeige ${item.id.toUpperCase()}`;
    card.appendChild(itemTitle);
    
    const itemText = document.createElement("div");
    itemText.style.fontSize = "13px";
    itemText.style.lineHeight = "1.5";
    itemText.style.marginBottom = "12px";
    itemText.style.color = "#555";
    itemText.innerHTML = item.text;
    card.appendChild(itemText);
    
    const dropdownContainer = document.createElement("div");
    dropdownContainer.style.position = "relative";
    dropdownContainer.style.width = "100%";
    dropdownContainer.style.marginTop = "10px";
    
    const dropdownBtn = document.createElement("div");
    dropdownBtn.className = "teil3-dropdown-btn";
    dropdownBtn.id = `teil3_dropdown_btn_${i}`;
    dropdownBtn.style.width = "100%";
    dropdownBtn.style.padding = "8px 12px";
    dropdownBtn.style.backgroundColor = "white";
    dropdownBtn.style.border = "1px solid #ccc";
    dropdownBtn.style.borderRadius = "8px";
    dropdownBtn.style.cursor = "pointer";
    dropdownBtn.style.display = "flex";
    dropdownBtn.style.justifyContent = "space-between";
    dropdownBtn.style.alignItems = "center";
    dropdownBtn.style.boxSizing = "border-box";
    dropdownBtn.style.fontSize = "13px";
    
    const currentAnswer = teil3UserAnswers[i];
    if (currentAnswer !== undefined && currentAnswer !== null && typeof currentAnswer === 'number') {
      dropdownBtn.innerHTML = `<span>${String.fromCharCode(97 + currentAnswer)}. ${situations[currentAnswer]}</span><span>▼</span>`;
    } else {
      dropdownBtn.innerHTML = `<span style="color:#999;">-- اختر العنوان --</span><span>▼</span>`;
    }
    
    const dropdownList = document.createElement("div");
    dropdownList.className = "teil3-dropdown-list";
    dropdownList.id = `teil3_dropdown_list_${i}`;
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
    
    function fillDropdownList(idx) {
      const list = document.getElementById(`teil3_dropdown_list_${idx}`);
      if (!list) return;
      list.innerHTML = "";
      
      const noneOption = document.createElement("div");
      noneOption.textContent = "— ليس لها عنوان —";
      noneOption.style.padding = "10px";
      noneOption.style.cursor = "pointer";
      noneOption.style.borderBottom = "1px solid #eee";
      noneOption.style.backgroundColor = "#f8f9fa";
      noneOption.onclick = (e) => {
        e.stopPropagation();
        const oldSit = teil3UserAnswers[idx];
        if (oldSit !== undefined && typeof oldSit === 'number') {
          const oldSitDiv = document.getElementById(`teil3_sit_${oldSit}`);
          if (oldSitDiv) {
            oldSitDiv.style.backgroundColor = "white";
            oldSitDiv.style.border = "1px solid #ddd";
            oldSitDiv.style.cursor = "pointer";
            oldSitDiv.style.opacity = "1";
            oldSitDiv.classList.remove('used');
            rebindSituationClick(oldSit);
          }
        }
        teil3UserAnswers[idx] = null;
        dropdownBtn.innerHTML = `<span style="color:#999;">-- اختر العنوان --</span><span>▼</span>`;
        list.style.display = "none";
        dropdownBtn.style.borderRadius = "8px";
      };
      noneOption.onmouseenter = () => { noneOption.style.backgroundColor = "#e8e4ff"; };
      noneOption.onmouseleave = () => { noneOption.style.backgroundColor = "#f8f9fa"; };
      list.appendChild(noneOption);
      
      for (let s = 0; s < situations.length; s++) {
        const isUsed = checkIfSituationUsed(s, idx);
        const sitDiv = document.createElement("div");
        sitDiv.textContent = `${String.fromCharCode(97 + s)}. ${situations[s]}`;
        sitDiv.style.padding = "10px";
        sitDiv.style.cursor = isUsed ? "default" : "pointer";
        sitDiv.style.borderBottom = "1px solid #eee";
        sitDiv.style.opacity = isUsed ? "0.5" : "1";
        sitDiv.style.backgroundColor = "white";
        
        if (!isUsed) {
          sitDiv.onclick = (e) => {
            e.stopPropagation();
            const oldSit = teil3UserAnswers[idx];
            if (oldSit !== undefined && typeof oldSit === 'number') {
              const oldSitDiv = document.getElementById(`teil3_sit_${oldSit}`);
              if (oldSitDiv) {
                oldSitDiv.style.backgroundColor = "white";
                oldSitDiv.style.border = "1px solid #ddd";
                oldSitDiv.style.cursor = "pointer";
                oldSitDiv.style.opacity = "1";
                oldSitDiv.classList.remove('used');
                rebindSituationClick(oldSit);
              }
            }
            teil3UserAnswers[idx] = s;
            dropdownBtn.innerHTML = `<span>${String.fromCharCode(97 + s)}. ${situations[s]}</span><span>▼</span>`;
            const targetSitDiv = document.getElementById(`teil3_sit_${s}`);
            if (targetSitDiv) {
              targetSitDiv.style.backgroundColor = "#d4edda";
              targetSitDiv.style.border = "2px solid #28a745";
              targetSitDiv.style.cursor = "default";
              targetSitDiv.style.opacity = "0.6";
              targetSitDiv.classList.add('used');
            }
            list.style.display = "none";
            dropdownBtn.style.borderRadius = "8px";
          };
          sitDiv.onmouseenter = () => { sitDiv.style.backgroundColor = "#e8e4ff"; };
          sitDiv.onmouseleave = () => { sitDiv.style.backgroundColor = "white"; };
        }
        list.appendChild(sitDiv);
      }
    }
    
    dropdownBtn.onclick = (e) => {
      e.stopPropagation();
      if (dropdownList.style.display === "block") {
        dropdownList.style.display = "none";
        dropdownBtn.style.borderRadius = "8px";
      } else {
        document.querySelectorAll('.teil3-dropdown-list').forEach(l => l.style.display = 'none');
        document.querySelectorAll('.teil3-dropdown-btn').forEach(b => b.style.borderRadius = '8px');
        dropdownList.style.display = "block";
        dropdownBtn.style.borderRadius = "8px 8px 0 0";
        fillDropdownList(i);
      }
    };
    
    dropdownContainer.appendChild(dropdownBtn);
    dropdownContainer.appendChild(dropdownList);
    card.appendChild(dropdownContainer);
    
    card.onclick = (e) => {
      e.stopPropagation();
      if (teil3SelectedSituationIndex !== null) {
        const sitIdx = teil3SelectedSituationIndex;
        if (checkIfSituationUsed(sitIdx, i)) {
          alert(`⚠️ الموقف "${String.fromCharCode(97 + sitIdx)}. ${situations[sitIdx]}" تم استخدامه بالفعل!`);
          clearTeil3SituationSelection();
          teil3SelectedSituationIndex = null;
          return;
        }
        const oldSit = teil3UserAnswers[i];
        if (oldSit !== undefined && typeof oldSit === 'number') {
          const oldSitDiv = document.getElementById(`teil3_sit_${oldSit}`);
          if (oldSitDiv) {
            oldSitDiv.style.backgroundColor = "white";
            oldSitDiv.style.border = "1px solid #ddd";
            oldSitDiv.style.cursor = "pointer";
            oldSitDiv.style.opacity = "1";
            oldSitDiv.classList.remove('used');
            rebindSituationClick(oldSit);
          }
        }
        teil3UserAnswers[i] = sitIdx;
        dropdownBtn.innerHTML = `<span>${String.fromCharCode(97 + sitIdx)}. ${situations[sitIdx]}</span><span>▼</span>`;
        const sitDiv = document.getElementById(`teil3_sit_${sitIdx}`);
        if (sitDiv) {
          sitDiv.style.backgroundColor = "#d4edda";
          sitDiv.style.border = "2px solid #28a745";
          sitDiv.style.cursor = "default";
          sitDiv.style.opacity = "0.6";
          sitDiv.classList.add('used');
        }
        clearTeil3SituationSelection();
        teil3SelectedSituationIndex = null;
      } else {
        clearTeil3ItemSelection();
        card.classList.add('selected-for-link');
        card.style.border = "2px solid #7c6ce6";
        teil3SelectedItemIndex = i;
      }
    };
    
    itemsGrid.appendChild(card);
  }
  
  leftColumn.appendChild(itemsGrid);
  
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
    sitDiv.className = "teil3-situation-item";
    sitDiv.id = `teil3_sit_${i}`;
    sitDiv.setAttribute('data-sit-index', i);
    sitDiv.style.padding = "10px 12px";
    sitDiv.style.marginBottom = "8px";
    sitDiv.style.backgroundColor = "white";
    sitDiv.style.borderRadius = "6px";
    sitDiv.style.border = "1px solid #ddd";
    sitDiv.style.fontSize = "13px";
    sitDiv.style.cursor = "pointer";
    sitDiv.style.transition = "all 0.2s";
    sitDiv.innerHTML = `${String.fromCharCode(97 + i)}. ${situations[i]}`;
    
    const isUsed = checkIfSituationUsed(i);
    if (isUsed) {
      sitDiv.style.backgroundColor = "#d4edda";
      sitDiv.style.border = "2px solid #28a745";
      sitDiv.style.cursor = "default";
      sitDiv.style.opacity = "0.6";
      sitDiv.classList.add('used');
    }
    
    sitDiv.onclick = (e) => {
      e.stopPropagation();
      if (sitDiv.classList.contains('used')) return;
      
      if (teil3SelectedItemIndex !== null) {
        if (checkIfSituationUsed(i, teil3SelectedItemIndex)) {
          alert(`⚠️ الموقف "${String.fromCharCode(97 + i)}. ${situations[i]}" تم استخدامه بالفعل!`);
          clearTeil3ItemSelection();
          teil3SelectedItemIndex = null;
          return;
        }
        const oldSit = teil3UserAnswers[teil3SelectedItemIndex];
        if (oldSit !== undefined && typeof oldSit === 'number') {
          const oldSitDiv = document.getElementById(`teil3_sit_${oldSit}`);
          if (oldSitDiv) {
            oldSitDiv.style.backgroundColor = "white";
            oldSitDiv.style.border = "1px solid #ddd";
            oldSitDiv.style.cursor = "pointer";
            oldSitDiv.style.opacity = "1";
            oldSitDiv.classList.remove('used');
            rebindSituationClick(oldSit);
          }
        }
        teil3UserAnswers[teil3SelectedItemIndex] = i;
        const dropdownBtn = document.getElementById(`teil3_dropdown_btn_${teil3SelectedItemIndex}`);
        if (dropdownBtn) {
          dropdownBtn.innerHTML = `<span>${String.fromCharCode(97 + i)}. ${situations[i]}</span><span>▼</span>`;
        }
        sitDiv.style.backgroundColor = "#d4edda";
        sitDiv.style.border = "2px solid #28a745";
        sitDiv.style.cursor = "default";
        sitDiv.style.opacity = "0.6";
        sitDiv.classList.add('used');
        clearTeil3ItemSelection();
        teil3SelectedItemIndex = null;
      } else {
        clearTeil3SituationSelection();
        sitDiv.classList.add('selected-for-link');
        sitDiv.style.border = "2px solid #7c6ce6";
        teil3SelectedSituationIndex = i;
      }
    };
    
    sitDiv.onmouseenter = () => {
      if (!sitDiv.classList.contains('used') && !sitDiv.classList.contains('selected-for-link')) {
        sitDiv.style.backgroundColor = "#e8e4ff";
      }
    };
    sitDiv.onmouseleave = () => {
      if (!sitDiv.classList.contains('used') && !sitDiv.classList.contains('selected-for-link')) {
        sitDiv.style.backgroundColor = "white";
      }
    };
    
    situationsList.appendChild(sitDiv);
  }
  
  rightColumn.appendChild(situationsList);
  
  twoColumns.appendChild(leftColumn);
  twoColumns.appendChild(rightColumn);
  container.appendChild(twoColumns);
  
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "15px";
  buttonContainer.style.justifyContent = "center";
  buttonContainer.style.marginTop = "25px";
  
  const checkBtn = document.createElement("button");
  checkBtn.innerText = "📝 Prüfen";
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

function checkTeil3Exam() {
  const items = currentTeil3Data.items;
  const situations = currentTeil3Data.situations;
  let score = 0;
  let total = items.length;
  
  for (let i = 0; i < total; i++) {
    const card = document.getElementById(`teil3_item_${i}`);
    const userAnswerVal = teil3UserAnswers[i];
    const correctIndex = items[i].correct;
    
    let isCorrect = false;
    let correctText = "";
    
    if (correctIndex === null || correctIndex === undefined) {
      correctText = "ليس لها عنوان";
      isCorrect = (userAnswerVal === null || userAnswerVal === undefined);
      if (isCorrect) score++;
    } else {
      correctText = `${String.fromCharCode(97 + correctIndex)}. ${situations[correctIndex]}`;
      isCorrect = (userAnswerVal === correctIndex);
      if (isCorrect) score++;
    }
    
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card");
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
      
      if (isCorrect) {
        card.classList.add("correct-answer-card");
      } else {
        card.classList.add("wrong-answer-card");
        
        const correctMsg = document.createElement("div");
        correctMsg.className = "correct-message";
        correctMsg.style.marginTop = "10px";
        correctMsg.style.fontSize = "13px";
        correctMsg.style.fontWeight = "bold";
        correctMsg.style.color = "#28a745";
        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${correctText}`;
        card.appendChild(correctMsg);
      }
    }
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
  teil3UserAnswers = {};
  teil3SelectedItemIndex = null;
  teil3SelectedSituationIndex = null;
  
  for (let i = 0; i < currentTeil3Data.items.length; i++) {
    const dropdownBtn = document.getElementById(`teil3_dropdown_btn_${i}`);
    if (dropdownBtn) {
      dropdownBtn.innerHTML = `<span style="color:#999;">-- اختر العنوان --</span><span>▼</span>`;
    }
    const card = document.getElementById(`teil3_item_${i}`);
    if (card) {
      card.classList.remove("correct-answer-card", "wrong-answer-card", "selected-for-link");
      card.style.border = "1px solid #e0e0e0";
      const oldMsg = card.querySelector(".correct-message");
      if (oldMsg) oldMsg.remove();
    }
  }
  
  for (let i = 0; i < currentTeil3Data.situations.length; i++) {
    const sitDiv = document.getElementById(`teil3_sit_${i}`);
    if (sitDiv) {
      sitDiv.style.backgroundColor = "white";
      sitDiv.style.border = "1px solid #ddd";
      sitDiv.style.cursor = "pointer";
      sitDiv.style.opacity = "1";
      sitDiv.classList.remove('used', 'selected-for-link');
      rebindSituationClick(i);
    }
  }
  
  const resultDiv = document.getElementById("teil3Result");
  if (resultDiv) resultDiv.style.display = "none";
  
  console.log("✅ تم إعادة تعيين Teil 3");
}

// ========== نظام Teil 2 ==========
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
  
  const twoColumns = document.createElement("div");
  twoColumns.style.display = "flex";
  twoColumns.style.gap = "30px";
  twoColumns.style.flexWrap = "wrap";
  
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
  textTitle.innerHTML = "Text";
  textTitle.style.marginTop = "0";
  textTitle.style.color = "#2c3e66";
  textColumn.appendChild(textTitle);
  
  const textContent = document.createElement("div");
  textContent.innerHTML = currentTeil2Data.text;
  textContent.style.lineHeight = "1.7";
  textContent.style.fontSize = "14px";
  textContent.style.textAlign = "justify";
  textColumn.appendChild(textContent);
  
  const questionsColumn = document.createElement("div");
  questionsColumn.style.flex = "1";
  questionsColumn.style.minWidth = "300px";
  questionsColumn.style.backgroundColor = "#fff";
  questionsColumn.style.padding = "20px";
  questionsColumn.style.borderRadius = "12px";
  questionsColumn.style.border = "1px solid #ddd";
  
  const questionsTitle = document.createElement("h3");
  questionsTitle.innerHTML = "Fragen";
  questionsTitle.style.marginTop = "0";
  questionsTitle.style.color = "#2c3e66";
  questionsColumn.appendChild(questionsTitle);
  
  const questionsContainer = document.createElement("div");
  questionsContainer.id = "teil2_questions_container";
  
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
        this.style.backgroundColor = "#e8e4ff";
      });
      label.addEventListener("mouseleave", function() {
        if (!this.querySelector('input:checked')) {
          this.style.backgroundColor = "transparent";
        }
      });
      
      optionsDiv.appendChild(label);
    }
    card.appendChild(optionsDiv);
    questionsContainer.appendChild(card);
  }
  
  questionsColumn.appendChild(questionsContainer);
  
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "15px";
  buttonContainer.style.justifyContent = "center";
  buttonContainer.style.marginTop = "20px";
  
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
  checkBtn.onclick = checkTeil2Exam;
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
      
      const optionLabels = card.querySelectorAll('.option-label');
      optionLabels.forEach(label => {
        label.style.backgroundColor = "transparent";
        label.style.border = "none";
      });
    }
    const resultDiv = document.getElementById("teil2Result");
    if (resultDiv) resultDiv.style.display = "none";
  };
  buttonContainer.appendChild(resetBtn);
  
  questionsColumn.appendChild(buttonContainer);
  
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
            parentLabel.style.backgroundColor = "#fef0e0";
            parentLabel.style.border = "2px solid #e67e22";
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

// ========== نظام Matching (Teil 1) ==========
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
    
    function updateDropdownListForIndex(idx) {
      const list = document.getElementById("m_list_" + idx);
      if (!list) return;
      list.innerHTML = "";
      
      for (let k = 0; k < matchingAvailableOptions.length; k++) {
        const option = matchingAvailableOptions[k];
        const optionDiv = document.createElement("div");
        optionDiv.className = "dropdown-option";
        optionDiv.textContent = option;
        optionDiv.style.padding = "10px";
        optionDiv.style.cursor = "pointer";
        optionDiv.style.borderBottom = "1px solid #eee";
        optionDiv.style.transition = "background 0.2s";
        
        optionDiv.addEventListener("mouseenter", function() {
          this.style.backgroundColor = "#e8e4ff";
        });
        optionDiv.addEventListener("mouseleave", function() {
          this.style.backgroundColor = "white";
        });
        
        optionDiv.addEventListener("click", (function(qIdx, optText) {
          return function(e) {
            e.stopPropagation();
            selectOption(qIdx, optText);
          };
        })(idx, option));
        
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
    
    function openDropdown(questionIndex) {
      const list = document.getElementById("m_list_" + questionIndex);
      const btn = document.getElementById("m_btn_" + questionIndex);
      if (list && btn) {
        list.style.display = "block";
        btn.style.borderRadius = "8px 8px 0 0";
        btn.style.borderBottom = "none";
        openDropdownIndex = questionIndex;
        updateDropdownListForIndex(questionIndex);
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
    
    dropdownContainer.appendChild(dropdownBtn);
    dropdownContainer.appendChild(dropdownList);
    card.appendChild(dropdownContainer);
    container.appendChild(card);
    
    window.updateDropdownListForIndex = updateDropdownListForIndex;
    window.openDropdown = openDropdown;
    window.closeDropdown = closeDropdown;
  }
  
  document.addEventListener("click", function() {
    if (openDropdownIndex !== null) {
      const list = document.getElementById("m_list_" + openDropdownIndex);
      const btn = document.getElementById("m_btn_" + openDropdownIndex);
      if (list && btn) {
        list.style.display = "none";
        btn.style.borderRadius = "8px";
        btn.style.border = "1px solid #ccc";
      }
      openDropdownIndex = null;
    }
  });
  
  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "15px";
  buttonContainer.style.justifyContent = "center";
  buttonContainer.style.marginTop = "20px";
  
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
  checkBtn.onclick = checkMatchingExam;
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
  resetBtn.onclick = function() {
    matchingSelectedAnswers = {};
    matchingAvailableOptions = [...currentMatchingExamData.sharedOptions];
    for (let i = 0; i < currentMatchingExamData.questions.length; i++) {
      const btnSpan = document.querySelector(`#m_btn_${i} span:first-child`);
      if (btnSpan) {
        btnSpan.textContent = "-- اختر الإجابة --";
        btnSpan.style.color = "#999";
      }
      if (window.updateDropdownListForIndex) window.updateDropdownListForIndex(i);
    }
    for (let i = 0; i < currentMatchingExamData.questions.length; i++) {
      const card = document.getElementById(`m_q_${i}`);
      if (card) {
        card.classList.remove("correct-answer-card", "wrong-answer-card");
        const oldMsg = card.querySelector(".correct-message");
        if (oldMsg) oldMsg.remove();
      }
    }
    const resultDiv = document.getElementById("matchingResult");
    if (resultDiv) resultDiv.style.display = "none";
  };
  buttonContainer.appendChild(resetBtn);
  
  container.appendChild(buttonContainer);
  
  const resultDiv = document.createElement("div");
  resultDiv.id = "matchingResult";
  resultDiv.className = "result-box";
  resultDiv.style.display = "none";
  container.appendChild(resultDiv);
  
  function selectOption(questionIndex, selectedText) {
    const oldValue = matchingSelectedAnswers[questionIndex] || "";
    
    if (oldValue === selectedText && oldValue !== "") {
      if (!matchingAvailableOptions.includes(selectedText)) {
        matchingAvailableOptions.push(selectedText);
        matchingAvailableOptions.sort();
      }
      matchingSelectedAnswers[questionIndex] = "";
    } else {
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
    
    if (window.closeDropdown) window.closeDropdown(questionIndex);
    
    for (let i = 0; i < currentMatchingExamData.questions.length; i++) {
      if (window.updateDropdownListForIndex) window.updateDropdownListForIndex(i);
    }
  }
  
  window.selectOption = selectOption;
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
      correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${correctAnswerText}`;
      card.appendChild(correctMsg);
    }
  }
  
  const finalScore = (score * pointsPerQuestion).toFixed(2);
  const resultDiv = document.getElementById("matchingResult");
  resultDiv.innerHTML = "النتيجة: " + finalScore + " / 25";
  resultDiv.style.display = "block";
}
// ========== إضافة نظام القفل للامتحانات ==========
// أضف هذا الكود في آخر ملف engine.js

const WA_NUMBER_FOR_LOCK = "212687561491";

function showLockedMessageForExam(examTitle) {
    let modal = document.createElement('div');
    modal.id = 'lockedModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 100000;
        display: flex;
        justify-content: center;
        align-items: center;
        direction: rtl;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 30px; padding: 35px; max-width: 380px; width: 85%; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.3);">
            <div style="font-size: 55px; margin-bottom: 15px;">🔒</div>
            <h2 style="color: #2b5876; margin-bottom: 12px; font-size: 24px;">محـتوى مقفل</h2>
            <p style="color: #555; margin-bottom: 20px;">المرجو ترقية الحساب للوصول لهذا المحتوى</p>
            <div style="background: #f3e8ff; padding: 12px; border-radius: 20px; margin-bottom: 20px;">
                <span style="color: #a855f7; font-weight: bold;">📚 ${examTitle}</span>
            </div>
            <p style="color: #888; margin-bottom: 25px; font-size: 14px;">يتطلب باقة: <strong style="color: #f39c12;">Pro</strong></p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button id="upgradeNowBtnModal" style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; border: none; padding: 12px 28px; border-radius: 50px; cursor: pointer; font-weight: bold; font-size: 15px;">🚀 ترقية الحساب الآن</button>
                <button id="closeModalBtn" style="background: #e2e8f0; border: none; padding: 12px 28px; border-radius: 50px; cursor: pointer; font-weight: bold; font-size: 15px;">ليس الآن</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('upgradeNowBtnModal')?.addEventListener('click', () => {
        window.location.href = 'subscribe.html';
    });
    
    document.getElementById('closeModalBtn')?.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

async function getUserStatusForLock() {
    let email = localStorage.getItem('zertiva_email');
    if (!email) return 'guest';
    
    try {
        const response = await fetch('premium.json?_=' + Date.now());
        const premium = await response.json();
        if (premium[email]) {
            let expiry = premium[email];
            let today = new Date().toISOString().slice(0,10);
            if (today <= expiry) return 'premium';
        }
        return 'free';
    } catch(e) {
        return 'free';
    }
}

async function applyLockToExams() {
    let userStatus = await getUserStatusForLock();
    if (userStatus === 'premium') return;
    
    // البحث عن جميع الامتحانات المعروضة في الصفحة
    let allExamDivs = document.querySelectorAll('.exam-item, #examsList div, .exam-card');
    
    allExamDivs.forEach((div, idx) => {
        let text = div.innerText || div.textContent || '';
        let match = text.match(/^(\d+)[\.:\-\s]/);
        let examNumber = match ? parseInt(match[1]) : null;
        
        if (examNumber && examNumber > 1) {
            div.style.backgroundColor = '#e9d5ff';
            div.style.border = '2px solid #a855f7';
            div.style.opacity = '0.7';
            div.style.filter = 'blur(1px)';
            div.style.position = 'relative';
            div.style.cursor = 'pointer';
            
            let examTitle = text.substring(0, 50);
            let oldOnclick = div.onclick;
            div.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                showLockedMessageForExam(examTitle);
                return false;
            };
        }
    });
}

// مراقبة الصفحة لتطبيق القفل عند تغيير المحتوى
const lockObserver = new MutationObserver(() => {
    let listPage = document.getElementById('list');
    if (listPage && listPage.classList.contains('active')) {
        setTimeout(applyLockToExams, 300);
    }
});

lockObserver.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });

// تطبيق القفل عند تحميل الصفحة
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(applyLockToExams, 800);
});
console.log("✅ engine.js جاهز بالكامل (النسخة النهائية الشغالة)");
