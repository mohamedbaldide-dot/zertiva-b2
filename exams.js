// ============================================
// exams.js - قائمة الامتحانات
// ============================================

const TOTAL_EXAMS = 51;

function renderExamList() {
  const container = document.getElementById("exam-list");
  container.innerHTML = "";

  for (let i = 1; i <= TOTAL_EXAMS; i++) {
    const btn = document.createElement("button");
    btn.className = "exam-btn";
    btn.innerText = "📘 امتحان " + i;

    btn.onclick = () => loadExamFile(i);

    container.appendChild(btn);
  }
}

// تحميل ملف الامتحان
function loadExamFile(id) {
  const container = document.getElementById("exam-container");
  container.style.display = "block";
  container.innerHTML = "⏳ جاري تحميل الامتحان...";

  // حذف أي سكريبت قديم
  const oldScript = document.getElementById("exam-script");
  if (oldScript) oldScript.remove();

  const script = document.createElement("script");
  script.id = "exam-script";
  script.src = `exams/exam${id}.js`;

  script.onerror = () => {
    container.innerHTML = `
      ❌ خطأ في تحميل الامتحان<br>
      الملف exams/exam${id}.js غير موجود<br><br>
      🔙 <button onclick="goBack()">العودة للقائمة</button>
    `;
  };

  document.body.appendChild(script);
}

// الرجوع للقائمة
function goBack() {
  document.getElementById("exam-container").style.display = "none";
}
  
// عند بدء الموقع
window.onload = renderExamList;