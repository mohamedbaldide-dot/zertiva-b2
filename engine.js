// ============================================
// engine.js - محرك الامتحان
// ============================================

// هذه الدالة تستدعى من exam1.js أو أي exam آخر
window.loadExam = function (examData) {
  const container = document.getElementById("exam-container");

  let html = `
    <h2>${examData.title}</h2>
    <form id="exam-form">
  `;

  // ========== Lesen Teil 2 (كمثال) ==========
  if (examData.lesen2) {
    html += `<h3>📖 Lesen Teil 2</h3>`;
    html += `<p>${examData.lesen2.text}</p>`;

    examData.lesen2.questions.forEach((q, index) => {
      const qNum = index + 1;

      html += `<div class="question">`;
      html += `<p>${qNum}) ${q.q}</p>`;

      for (let key in q.options) {
        html += `
          <label>
            <input type="radio" name="q${qNum}" value="${key}">
            ${key}) ${q.options[key]}
          </label><br>
        `;
      }

      html += `</div>`;
    });
  }

  html += `
      <br>
      <button type="button" onclick="submitExam()">✅ إنهاء الامتحان</button>
      <button type="button" onclick="goBack()">🔙 رجوع</button>
    </form>

    <div id="result"></div>
  `;

  container.innerHTML = html;

  // نحفظ البيانات عالمياً للتصحيح
  window.currentExam = examData;
};

// ============================================
// تصحيح الامتحان
// ============================================

function submitExam() {
  const exam = window.currentExam;
  let score = 0;
  let total = 0;

  // فقط lesen2 حاليا (نطور لاحقاً)
  if (exam.lesen2) {
    const correct = exam.lesen2.correct;
    total += Object.keys(correct).length;

    for (let q in correct) {
      const selected = document.querySelector(`input[name="q${q}"]:checked`);

      if (selected && selected.value === correct[q]) {
        score++;
      }
    }
  }

  const resultBox = document.getElementById("result");

  resultBox.innerHTML = `
    <h3>🎯 النتيجة</h3>
    <p>✔️ ${score} / ${total}</p>
  `;
}