// ============================================
// app.js - النظام الرئيسي
// ============================================

let loadedScripts = {};
let currentExamId = null;

// ========== دوال التنقل ==========
function goList() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("list").classList.add("active");
  document.getElementById("exam").classList.remove("active");
  if (typeof renderExamList === "function") {
    renderExamList();
  }
}

function goHome() {
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.add("active");
  document.getElementById("exam").classList.remove("active");
}

// ========== فتح الامتحان ==========
function openExam(exam) {
  currentExamId = exam.id;
  
  // إخفاء الصفحات الأخرى
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("exam").classList.add("active");
  
  // عرض محتوى التحميل
  const examContainer = document.getElementById("examContent");
  examContainer.innerHTML = `
    <div style="text-align:center; padding:50px;">
      <div class="loader"></div>
      <h3>📚 جاري تحميل الامتحان...</h3>
      <p><strong>${exam.title}</strong></p>
      <p style="font-size:14px; color:#666;">الملف: ${exam.file}</p>
    </div>
  `;
  
  // إزالة أي سكريبت محمل سابقاً
  if (loadedScripts[exam.id]) {
    const oldScript = document.getElementById(`exam-script-${exam.id}`);
    if (oldScript) oldScript.remove();
    delete loadedScripts[exam.id];
  }
  
  // تحميل ملف الامتحان
  loadExamFile(exam.file, exam.id);
}

function loadExamFile(filename, examId) {
  // إزالة السكريبت القديم
  const oldScript = document.getElementById(`exam-script-${examId}`);
  if (oldScript) oldScript.remove();
  
  // إنشاء سكريبت جديد
  const script = document.createElement("script");
  script.id = `exam-script-${examId}`;
  script.src = `exams/${filename}`;
  script.onload = () => {
    loadedScripts[examId] = true;
    console.log(`✅ تم تحميل ${filename} بنجاح`);
    // engine.js سيتولى العرض عبر window.loadExam
  };
  script.onerror = () => {
    document.getElementById("examContent").innerHTML = `
      <div style="color:red; text-align:center; padding:50px;">
        <h3>❌ خطأ في تحميل الامتحان</h3>
        <p>الملف <strong>exams/${filename}</strong> غير موجود</p>
        <p>الرجاء التأكد من وجود الملف في مجلد exams</p>
        <button onclick="goList()" style="margin-top:20px;">🔙 العودة للقائمة</button>
      </div>
    `;
  };
  document.body.appendChild(script);
}

// ========== دوال الأجزاء ==========
function showTeil(n, parts) {
  for (let i = 1; i <= 8; i++) {
    const el = parts[`teil${i}`];
    if (el) el.style.display = (i === n) ? "block" : "none";
  }
}

// تسجيل الدوال في window
window.goList = goList;
window.goHome = goHome;
window.openExam = openExam;
window.showTeil = showTeil;

// تهيئة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ app.js loaded");
  if (typeof renderExamList === "function") {
    renderExamList();
  }
});
