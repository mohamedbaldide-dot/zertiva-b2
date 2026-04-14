// المتغيرات العامة
let currentExamId = null;
let loadedScripts = {};

// ========== دوال التنقل ==========
function goList() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("list").classList.add("active");
  document.getElementById("exam").classList.remove("active");
  renderExamList();
}

function goHome() {
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.add("active");
  document.getElementById("exam").classList.remove("active");
}

// ========== تحميل الامتحان ==========
function openExam(exam) {
  currentExamId = exam.id;
  
  // إخفاء الصفحات الأخرى
  document.getElementById("list").classList.remove("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("exam").classList.add("active");
  
  // عرض محتوى التحميل
  const examContainer = document.getElementById("examContent");
  examContainer.innerHTML = '<div style="text-align:center; padding:50px;">جاري تحميل الامتحان...</div>';
  
  // إزالة أي سكريبت محمل سابقاً لهذا الامتحان
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
    // استدعاء دالة التهيئة إذا وجدت
    if (typeof window.initExam === "function") {
      window.initExam();
    }
  };
  script.onerror = () => {
    document.getElementById("examContent").innerHTML = '<div style="color:red;">خطأ في تحميل الامتحان</div>';
  };
  document.body.appendChild(script);
}

// ========== دوال الأجزاء ==========
function showTeil(n, elements) {
  for (let i = 1; i <= 8; i++) {
    const el = elements[`teil${i}`];
    if (el) el.style.display = (i === n) ? "block" : "none";
  }
}

// تسجيل دوال عامة في window
window.goList = goList;
window.goHome = goHome;
window.openExam = openExam;
window.showTeil = showTeil;

// تهيئة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  renderExamList();
});