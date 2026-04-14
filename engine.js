// ============================================
// engine.js - نظام Zertiva B2 الذكي
// ============================================

// ========== المتغيرات العامة ==========
let currentExamData = null;
let userAnswers = {};

// ========== عرض الامتحان حسب نوع البيانات ==========
function loadExam(examData) {
  currentExamData = examData;
  userAnswers = {};
  
  const container = document.getElementById("examContent");
  
  // بناء واجهة التنقل
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
  
  // تخزين أجزاء الامتحان
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
  
  if (examData.sprach1) {
    const div = document.createElement("div");
    div.id = "part4";
    div.style.display = "none";
    div.innerHTML = renderSprach1(examData.sprach1);
    partsContainer.appendChild(div);
    window.examParts.part4 = div;
  }
  
  if (examData.sprach2) {
    const div = document.createElement("div");
    div.id = "part5";
    div.style.display = "none";
    div.innerHTML = renderSprach2(examData.sprach2);
    partsContainer.appendChild(div);
    window.examParts.part5 = div;
  }
  
  if (examData.hoeren1) {
    const div = document.createElement("div");
    div.id = "part6";
    div.style.display = "none";
    div.innerHTML = renderHoeren1(examData.hoeren1);
    partsContainer.appendChild(div);
    window.examParts.part6 = div;
  }
  
  if (examData.hoeren2) {
    const div = document.createElement("div");
    div.id = "part7";
    div.style.display = "none";
    div.innerHTML = renderHoeren2(examData.hoeren2);
    partsContainer.appendChild(div);
    window.examParts.part7 = div;
  }
  
  if (examData.hoeren3) {
    const div = document.createElement("div");
    div.id = "part8";
    div.style.display = "none";
    div.innerHTML = renderHoeren3(examData.hoeren3);
    partsContainer.appendChild(div);
    window.examParts.part8 = div;
  }
}

// ========== عرض Lesen Teil 1 ==========
function renderLesen1(data) {
  let html = '<h3>📖 Lesen Teil 1</h3>';
  
  data.texts.forEach((text, idx) => {
    const qNum = idx + 1;
    html += `
      <div class="text-card" id="text${qNum}">
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
  
  html += `
    <button onclick="checkPart('lesen1', ${data.maxScore})">تصحيح</button>
    <button onclick="resetPart('lesen1')">🔄 إعادة</button>
    <p id="result_lesen1"></p>
  `;
  
  return html;
}

// ========== عرض Lesen Teil 2 ==========
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
  
  html += `
    <button onclick="checkPart('lesen2', ${data.maxScore})">تصحيح</button>
    <button onclick="resetPart('lesen2')">🔄 إعادة</button>
    <p id="result_lesen2"></p>
  `;
  
  return html;
}

// ========== عرض Lesen Teil 3 (مطابقة العناوين) ==========
function renderLesen3(data) {
  let html = '<h3>📖 Lesen Teil 3 - مطابقة العناوين</h3>';
  html += '<div style="display:flex; gap:20px; flex-wrap:wrap;">';
  
  // النصوص
  html += '<div style="flex:1.5;">';
  data.texts.forEach((text, idx) => {
    html += `
      <div class="text-item" data-id="${idx + 1}" onclick="selectTextForMatch(${idx + 1}, this)">
        <strong>Anzeige ${String.fromCharCode(97 + idx)}:</strong>
        <p>${text}</p>
      </div>
    `;
  });
  html += '</div>';
  
  // العناوين
  html += '<div style="flex:1;">';
  data.titles.forEach((title, idx) => {
    html += `
      <div class="title-item" data-id="${idx}" onclick="selectTitleForMatch(${idx}, this)">
        ${idx}. ${title}
      </div>
    `;
  });
  html += '</div></div>';
  
  html += `
    <button onclick="checkMatchAnswers('lesen3', ${data.correct})">تصحيح</button>
    <button onclick="resetPart('lesen3')">🔄 إعادة</button>
    <p id="result_lesen3"></p>
  `;
  
  return html;
}

// ========== عرض Sprachbausteine Teil 1 (فراغات مع خيارات) ==========
function renderSprach1(data) {
  let html = '<h3>📝 Sprachbausteine Teil 1</h3>';
  html += '<div style="display:flex; gap:20px; flex-wrap:wrap;">';
  
  // النص مع الفراغات
  html += '<div style="flex:1.5; line-height:1.8;">';
  let textWithGaps = data.text;
  data.gaps.forEach((gap, idx) => {
    const gapNum = idx + 1;
    textWithGaps = textWithGaps.replace(
      `[${gapNum}]`,
      `<span class="gap" id="gap${gapNum}" onclick="selectGap(${gapNum})">[${gapNum}]</span>`
    );
  });
  html += textWithGaps;
  html += '</div>';
  
  // الخيارات
  html += '<div style="flex:1;">';
  data.gaps.forEach((gap, idx) => {
    const gapNum = idx + 1;
    html += `<div class="option-group"><strong>الفراغ ${gapNum}</strong><br>`;
    gap.options.forEach(opt => {
      html += `<button class="option-btn" onclick="fillGap(${gapNum}, '${opt}')">${opt}</button>`;
    });
    html += '</div>';
  });
  html += '</div></div>';
  
  html += `
    <button onclick="checkGaps('sprach1', ${data.correct})">تصحيح</button>
    <button onclick="resetPart('sprach1')">🔄 إعادة</button>
    <p id="result_sprach1"></p>
  `;
  
  return html;
}

// ========== عرض Sprachbausteine Teil 2 (أدوات ربط) ==========
function renderSprach2(data) {
  let html = '<h3>📝 Sprachbausteine Teil 2</h3>';
  html += '<div style="display:flex; gap:20px; flex-wrap:wrap;">';
  
  // النص مع الفراغات
  html += '<div style="flex:1.5; line-height:1.8;">';
  let textWithGaps = data.text;
  data.gaps.forEach((gap, idx) => {
    const gapNum = idx + 1;
    textWithGaps = textWithGaps.replace(
      `[${gapNum}]`,
      `<span class="gap2" id="gap2_${gapNum}" onclick="selectGap2(${gapNum})">[${gapNum}]</span>`
    );
  });
  html += textWithGaps;
  html += '</div>';
  
  // أدوات الربط
  html += '<div style="flex:1;">';
  html += '<div class="connector-group"><strong>أدوات الربط</strong><br>';
  data.connectors.forEach(conn => {
    html += `<button class="connector-btn" onclick="selectConnector('${conn}')">${conn}</button>`;
  });
  html += '</div></div></div>';
  
  html += `
    <button onclick="checkGaps('sprach2', ${data.correct})">تصحيح</button>
    <button onclick="resetPart('sprach2')">🔄 إعادة</button>
    <p id="result_sprach2"></p>
  `;
  
  return html;
}

// ========== عرض Hören Teil 1 (صحيح/خطأ) ==========
function renderHoeren1(data) {
  let html = '<h3>🎧 Hören Teil 1</h3><p>اختر: ✔ صحيح / ✖ خطأ</p>';
  
  data.questions.forEach((q, idx) => {
    html += `
      <div class="h-question" id="h1_${idx}">
        <span>${idx + 1}. ${q.text}</span>
        <div>
          <button class="h-btn" onclick="saveHAnswer('hoeren1_${idx}', true, this)">✔</button>
          <button class="h-btn" onclick="saveHAnswer('hoeren1_${idx}', false, this)">✖</button>
        </div>
      </div>
    `;
  });
  
  html += `
    <button onclick="checkHoeren('hoeren1', ${data.correct})">تصحيح</button>
    <button onclick="resetPart('hoeren1')">🔄 إعادة</button>
    <p id="result_hoeren1"></p>
  `;
  
  return html;
}

// ========== عرض Hören Teil 2 (نسخ متعددة) ==========
function renderHoeren2(data) {
  let html = '<h3>🎧 Hören Teil 2</h3>';
  
  // أزرار النسخ
  html += '<div id="variantButtons">';
  data.variants.forEach((variant, idx) => {
    html += `<button onclick="loadVariant(${idx})" class="variant-btn">${variant.title}</button>`;
  });
  html += '</div>';
  
  html += '<div id="h2_questions"></div>';
  html += `
    <button onclick="checkHoeren('hoeren2', ${data.corrects[0]})">تصحيح</button>
    <button onclick="resetPart('hoeren2')">🔄 إعادة</button>
    <p id="result_hoeren2"></p>
  `;
  
  return html;
}

// ========== عرض Hören Teil 3 ==========
function renderHoeren3(data) {
  let html = '<h3>🎧 Hören Teil 3</h3><p>اختر: ✔ صحيح / ✖ خطأ</p>';
  
  data.questions.forEach((q, idx) => {
    html += `
      <div class="h-question" id="h3_${idx}">
        <span>${idx + 1}. ${q.text}</span>
        <div>
          <button class="h-btn" onclick="saveHAnswer('hoeren3_${idx}', true, this)">✔</button>
          <button class="h-btn" onclick="saveHAnswer('hoeren3_${idx}', false, this)">✖</button>
        </div>
      </div>
    `;
  });
  
  html += `
    <button onclick="checkHoeren('hoeren3', ${data.correct})">تصحيح</button>
    <button onclick="resetPart('hoeren3')">🔄 إعادة</button>
    <p id="result_hoeren3"></p>
  `;
  
  return html;
}

// ========== دوال مساعدة ==========
let selectedGap = null;
let selectedGap2 = null;
let selectedConnectorValue = null;
let matchAnswers = {};

function saveAnswer(key, value) {
  userAnswers[key] = value;
}

function saveHAnswer(key, value, btn) {
  userAnswers[key] = value;
  const parent = btn.parentElement.parentElement;
  const btns = parent.querySelectorAll('.h-btn');
  btns.forEach(b => b.classList.remove('active-true', 'active-false'));
  if (value) {
    btn.classList.add('active-true');
  } else {
    btn.classList.add('active-false');
  }
}

function selectGap(num) {
  selectedGap = num;
  document.querySelectorAll('.gap').forEach(g => g.classList.remove('active-gap'));
  document.getElementById(`gap${num}`).classList.add('active-gap');
}

function fillGap(num, value) {
  if (selectedGap === num) {
    document.getElementById(`gap${num}`).innerText = value;
    userAnswers[`sprach1_${num}`] = value;
    selectedGap = null;
    document.querySelectorAll('.gap').forEach(g => g.classList.remove('active-gap'));
  }
}

function selectGap2(num) {
  if (selectedConnectorValue) {
    document.getElementById(`gap2_${num}`).innerText = selectedConnectorValue;
    userAnswers[`sprach2_${num}`] = selectedConnectorValue;
    selectedConnectorValue = null;
    document.querySelectorAll('.connector-btn').forEach(b => b.classList.remove('selected-connector'));
  } else {
    selectedGap2 = num;
    document.querySelectorAll('.gap2').forEach(g => g.classList.remove('active-gap'));
    document.getElementById(`gap2_${num}`).classList.add('active-gap');
  }
}

function selectConnector(value) {
  if (selectedGap2) {
    document.getElementById(`gap2_${selectedGap2}`).innerText = value;
    userAnswers[`sprach2_${selectedGap2}`] = value;
    selectedGap2 = null;
    document.querySelectorAll('.gap2').forEach(g => g.classList.remove('active-gap'));
  } else {
    selectedConnectorValue = value;
    document.querySelectorAll('.connector-btn').forEach(b => b.classList.remove('selected-connector'));
    event.target.classList.add('selected-connector');
  }
}

function selectTextForMatch(id, el) {
  matchAnswers.selectedText = id;
  document.querySelectorAll('.text-item').forEach(t => t.classList.remove('selected'));
  el.classList.add('selected');
}

function selectTitleForMatch(id, el) {
  if (matchAnswers.selectedText) {
    matchAnswers[matchAnswers.selectedText] = id;
    document.querySelectorAll('.title-item').forEach(t => t.classList.remove('selected'));
    el.classList.remove('selected');
    matchAnswers.selectedText = null;
  } else {
    document.querySelectorAll('.title-item').forEach(t => t.classList.remove('selected'));
    el.classList.add('selected');
    matchAnswers.selectedTitle = id;
  }
}

// ========== دوال التصحيح العامة ==========
function checkPart(partName, maxScore) {
  const correctAnswers = currentExamData[partName].correct;
  let score = 0;
  
  for (let key in correctAnswers) {
    if (userAnswers[`${partName}_${key}`] === correctAnswers[key]) {
      score++;
    }
  }
  
  const finalScore = (score * (maxScore / Object.keys(correctAnswers).length)).toFixed(2);
  document.getElementById(`result_${partName}`).innerHTML = `
    <strong>النتيجة: ${finalScore} / ${maxScore}</strong>
    <br>${score} من ${Object.keys(correctAnswers).length} إجابات صحيحة
  `;
}

function checkMatchAnswers(partName, correctMap) {
  let score = 0;
  for (let i = 1; i <= Object.keys(correctMap).length; i++) {
    if (matchAnswers[i] === correctMap[i]) score++;
  }
  const finalScore = (score * (25 / Object.keys(correctMap).length)).toFixed(2);
  document.getElementById(`result_${partName}`).innerHTML = `النتيجة: ${finalScore} / 25`;
}

function checkGaps(partName, correctMap) {
  let score = 0;
  for (let i = 1; i <= Object.keys(correctMap).length; i++) {
    if (userAnswers[`${partName}_${i}`] === correctMap[i]) score++;
  }
  const finalScore = (score * (15 / Object.keys(correctMap).length)).toFixed(2);
  document.getElementById(`result_${partName}`).innerHTML = `النتيجة: ${finalScore} / 15`;
}

function checkHoeren(partName, correctMap) {
  let score = 0;
  for (let i = 0; i < correctMap.length; i++) {
    if (userAnswers[`${partName}_${i}`] === correctMap[i]) score++;
  }
  const finalScore = (score * (25 / correctMap.length)).toFixed(2);
  document.getElementById(`result_${partName}`).innerHTML = `النتيجة: ${finalScore} / 25`;
}

function resetPart(partName) {
  for (let key in userAnswers) {
    if (key.startsWith(partName)) delete userAnswers[key];
  }
  document.getElementById(`result_${partName}`).innerHTML = '';
  loadExam(currentExamData); // إعادة تحميل الجزء
}

function showPart(num) {
  for (let i = 1; i <= 8; i++) {
    if (window.examParts[`part${i}`]) {
      window.examParts[`part${i}`].style.display = (i === num) ? "block" : "none";
    }
  }
}

// تصدير الدوال إلى window
window.loadExam = loadExam;
window.showPart = showPart;
window.saveAnswer = saveAnswer;
window.saveHAnswer = saveHAnswer;
window.selectGap = selectGap;
window.fillGap = fillGap;
window.selectGap2 = selectGap2;
window.selectConnector = selectConnector;
window.selectTextForMatch = selectTextForMatch;
window.selectTitleForMatch = selectTitleForMatch;
window.checkPart = checkPart;
window.checkMatchAnswers = checkMatchAnswers;
window.checkGaps = checkGaps;
window.checkHoeren = checkHoeren;
window.resetPart = resetPart;