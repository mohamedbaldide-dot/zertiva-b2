// ============================================
// app.js - التنقل والتحكم في الصفحات
// ============================================

let loadedScripts = {};
let currentExamId = null;

// قائمة الامتحانات الموجودة فعلاً (سنضيفها تدريجياً)
const AVAILABLE_EXAMS = [1];

// ========== دوال التنقل بين الصفحات ==========
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
  
  // التحقق: هل الامتحان موجود؟
  if (!AVAILABLE_EXAMS.includes(exam.id)) {
    showExamNotAvailable(exam.id);
    return;
  }
  
  // إخفاء الصفحات الأخرى
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("exam").classList.add("active");
  
  // عرض محتوى التحميل
  const examContainer = document.getElementById("examContent");
  examContainer.innerHTML = `
    <div style="text-align:center; padding:50px;">
      <h3>📚 جاري تحميل الامتحان...</h3>
      <p><strong>${exam.title}</strong></p>
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

// دالة عرض رسالة "غير متوفر"
function showExamNotAvailable(examId) {
  const examContainer = document.getElementById("examContent");
  examContainer.innerHTML = `
    <div style="text-align:center; padding:50px; background:#fff3cd; border-radius:10px; border:1px solid #ffc107;">
      <h3 style="color:#856404;">⚠️ الامتحان غير متوفر بعد</h3>
      <p style="color:#856404;">الامتحان رقم ${examId} سيتم إضافته قريباً.</p>
      <p style="color:#856404; font-size:14px;">✅ حالياً الامتحان 1 فقط متاح.</p>
      <button onclick="goList()" style="margin-top:20px;">🔙 العودة للقائمة</button>
    </div>
  `;
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("exam").classList.add("active");
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
  };
  
  script.onerror = () => {
    console.error(`❌ فشل تحميل ${filename}`);
    showExamNotAvailable(examId);
  };
  
  document.body.appendChild(script);
}

// تسجيل الدوال في window
window.goList = goList;
window.goHome = goHome;
window.openExam = openExam;

// تهيئة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ app.js loaded");
  console.log(`✅ الامتحانات المتاحة: ${AVAILABLE_EXAMS.join(", ")}`);
  if (typeof renderExamList === "function") {
    renderExamList();
  }
});