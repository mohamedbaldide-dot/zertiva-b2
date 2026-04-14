// ============================================
// engine.js - نظام Zertiva B2 الذكي
// ============================================

let currentExamData = null;
let userAnswers = {};

function loadExam(examData) {
  currentExamData = examData;
  userAnswers = {};
  
  const container = document.getElementById("examContent");
  
  let navHtml = '<div class="nav-buttons">';
  if (examData.lesen1) navHtml += '<button onclick="showPart(1)">📖 Lesen Teil 1</button>';
  if (examData.lesen2) navHtml += '<button onclick="showPart(2)">📖 Lesen Teil 2</button>';
  if (examData.lesen3) navHtml += '<button onclick="showPart(3)">📖 Lesen Teil 3</button>';
  if (examData.sprach1) navHtml += '<button onclick="showPart(4)">📝 Sprachbausteine Teil 1</button>';
  if (examData.sprach2) navHtml += '<button onclick="showPart(5)">📝 Sprachbausteine Teil 2</button>';
  if (examData.hoeren1) navHtml += '<button onclick="showPart(6)">🎧 Hören Teil 1</button>';
  if (examData.hoeren2) navHtml += '<button onclick="showPart(7)">🎧 Hören Teil 2</button>';
  if (examData.hoeren3) navHtml += '<button onclick="showPart(8)">🎧 Hören Teil 3</button>';
  navHtml += '</div><div id="partsContainer"></div>';
  
  container.innerHTML = `<h2>${examData.title}</h2>${navHtml}`;
  
  window.examParts = {};
  const partsContainer = document.getElementById("partsContainer");
  
  if (examData.lesen1) {
    const div = document.createElement("div");
    div.id = "part1";
    div.style.display = "none";
    div.innerHTML = renderLesen1(examData.lesen1);
    partsContainer.appendChild(div);
    window.examParts.part1 = div;
  }
  
  if (examData.lesen2) {
    const div = document.createElement("div");
    div.id = "part2";
    div.style.display = "none";
    div.innerHTML = renderLesen2(examData.lesen2);
    partsContainer.appendChild(div);
    window.examParts.part2 = div;
  }
  
  if (examData.lesen3) {
    const div = document.createElement("div");
    div.id = "part3";
    div.style.display = "none";
    div.innerHTML = renderLesen3(examData.lesen3);
    partsContainer.appendChild(div);
    window.examParts.part3 = div;
  }
}

function renderLesen1(data) {
  let html = '<h3>📖 Lesen Teil 1</h3>';
  
  data.texts.forEach((text, idx) => {
    const qNum = idx + 1;
    html += `
      <div class="text-card">
        <h4>Text ${qNum}</h4>
        <p>${text}</p>
        <select id="ans${qNum}" onchange="saveAnswer('lesen1_${qNum}', this.value)">
          <option value="">اختر</option>
          ${Object.entries(data.titles).map(([key, val]) => 
            `<option value="${key}">${key}. ${val}</option>`
          ).join('')}
        </select>
      </div>
    `;
  });
  
  html += `<button onclick="checkPart('lesen1', ${data.maxScore})">تصحيح</button>
           <button onclick="resetPart('lesen1')">🔄 إعادة</button>
           <p id="result_lesen1"></p>`;
  return html;
}

function renderLesen2(data) {
  let html = '<h3>📖 Lesen Teil 2</h3>';
  html += `<div class="text-card"><p>${data.text}</p></div>`;
  
  data.questions.forEach((q, idx) => {
    const qNum = idx + 1;
    html += `
      <div class="question-card">
        <p><strong>Frage ${qNum}:</strong> ${q.q}</p>
        <select id="q${qNum}" onchange="saveAnswer('lesen2_${qNum}', this.value)">
          <option value="">اختر</option>
          ${Object.entries(q.options).map(([key, val]) => 
            `<option value="${key}">${key}. ${val}</option>`
          ).join('')}
        </select>
      </div>
    `;
  });
  
  html += `<button onclick="checkPart('lesen2', ${data.maxScore})">تصحيح</button>
           <button onclick="resetPart('lesen2')">🔄 إعادة</button>
           <p id="result_lesen2"></p>`;
  return html;
}

function renderLesen3(data) {
  let html = '<h3>📖 Lesen Teil 3 - مطابقة العناوين</h3>';
  html += '<div style="display:flex; gap:20px; flex-wrap:wrap;">';
  
  html += '<div style="flex:1.5;">';
  data.texts.forEach((text, idx) => {
    html += `
      <div class="text" data-id="${idx + 1}" onclick="selectTextForMatch(${idx + 1}, this)">
        <strong>Anzeige ${String.fromCharCode(97 + idx)}:</strong>
        <p>${text}</p>
      </div>
    `;
  });
  html += '</div>';
  
  html += '<div style="flex:1;">';
  data.titles.forEach((title, idx) => {
    html += `
      <div class="title" data-id="${idx}" onclick="selectTitleForMatch(${idx}, this)">
        ${idx}. ${title}
      </div>
    `;
  });
  html += '</div></div>';
  
  html += `<button onclick="checkMatchAnswers('lesen3', ${JSON.stringify(data.correct)})">تصحيح</button>
           <button onclick="resetPart('lesen3')">🔄 إعادة</button>
           <p id="result_lesen3"></p>`;
  return html;
}

function saveAnswer(key, value) {
  userAnswers[key] = value;
}

function checkPart(partName, maxScore) {
  const correctAnswers = currentExamData[partName].correct;
  let score = 0;
  
  for (let key in correctAnswers) {
    if (userAnswers[`${partName}_${key}`] === correctAnswers[key]) {
      score++;
    }
  }
  
  const finalScore = (score * (maxScore / Object.keys(correctAnswers).length)).toFixed(2);
  document.getElementById(`result_${partName}`).innerHTML = `النتيجة: ${finalScore} / ${maxScore}`;
}

function resetPart(partName) {
  for (let key in userAnswers) {
    if (key.startsWith(partName)) delete userAnswers[key];
  }
  document.getElementById(`result_${partName}`).innerHTML = '';
  loadExam(currentExamData);
}

function showPart(num) {
  for (let i = 1; i <= 8; i++) {
    if (window.examParts[`part${i}`]) {
      window.examParts[`part${i}`].style.display = (i === num) ? "block" : "none";
    }
  }
}

// متغيرات Teil 3
let matchAnswers = {};

function selectTextForMatch(id, el) {
  matchAnswers.selectedText = id;
  document.querySelectorAll('.text').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
}

function selectTitleForMatch(id, el) {
  if (matchAnswers.selectedText) {
    matchAnswers[matchAnswers.selectedText] = id;
    document.querySelectorAll('.title').forEach(t => t.classList.remove('selected'));
    el.classList.remove('selected');
    matchAnswers.selectedText = null;
  } else {
    document.querySelectorAll('.title').forEach(t => t.classList.remove('selected'));
    el.classList.add('selected');
  }
}

function checkMatchAnswers(partName, correctMap) {
  let score = 0;
  for (let i = 1; i <= Object.keys(correctMap).length; i++) {
    if (matchAnswers[i] === correctMap[i]) score++;
  }
  const finalScore = (score * (25 / Object.keys(correctMap).length)).toFixed(2);
  document.getElementById(`result_${partName}`).innerHTML = `النتيجة: ${finalScore} / 25`;
}

window.saveAnswer = saveAnswer;
window.checkPart = checkPart;
window.resetPart = resetPart;
window.showPart = showPart;
window.selectTextForMatch = selectTextForMatch;
window.selectTitleForMatch = selectTitleForMatch;
window.checkMatchAnswers = checkMatchAnswers;