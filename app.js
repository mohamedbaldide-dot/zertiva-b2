// ============================================
// app.js - التنقل والتحكم في الصفحات
// ============================================

let loadedScripts = {};
let currentExamId = null;

// قائمة الامتحانات الموجودة فعلاً
const AVAILABLE_EXAMS = [1];

// ========== دوال التنقل بين الصفحات ==========
function goList() {
  console.log("🟢 goList تم استدعاؤها - الانتقال إلى القائمة");
  
  const homePage = document.getElementById("home");
  const listPage = document.getElementById("list");
  const examPage = document.getElementById("exam");
  
  console.log("homePage:", homePage);
  console.log("listPage:", listPage);
  
  if (homePage) homePage.classList.remove("active");
  if (listPage) listPage.classList.add("active");
  if (examPage) examPage.classList.remove("active");
  
  // استدعاء عرض القائمة
  if (typeof renderExamList === "function") {
    console.log("🟢 استدعاء renderExamList");
    renderExamList();
  } else {
    console.error("❌ renderExamList غير موجود");
    const container = document.getElementById("examList");
    if (container) {
      container.innerHTML = '<div style="color:red; padding:20px;">⚠️ خطأ في تحميل قائمة الامتحانات</div>';
    }
  }
}

function goHome() {
  console.log("🟢 goHome تم استدعاؤها");
  
  const homePage = document.getElementById("home");
  const listPage = document.getElementById("list");
  const examPage = document.getElementById("exam");
  
  if (listPage) listPage.classList.remove("active");
  if (homePage) homePage.classList.add("active");
  if (examPage) examPage.classList.remove("active");
}

// ========== فتح الامتحان ==========
function openExam(exam) {
  console.log("🟢 openExam - فتح الامتحان:", exam);
  currentExamId = exam.id;
  
  if (!AVAILABLE_EXAMS.includes(exam.id)) {
    showExamNotAvailable(exam.id);
    return;
  }
  
  const homePage = document.getElementById("home");
  const listPage = document.getElementById("list");
  const examPage = document.getElementById("exam");
  
  if (listPage) listPage.classList.remove("active");
  if (homePage) homePage.classList.remove("active");
  if (examPage) examPage.classList.add("active");
  
  const examContainer = document.getElementById("examContent");
  if (examContainer) {
    examContainer.innerHTML = `
      <div style="text-align:center; padding:50px;">
        <h3>📚 جاري تحميل الامتحان...</h3>
        <p><strong>${exam.title}</strong></p>
      </div>
    `;
  }
  
  if (loadedScripts[exam.id]) {
    const oldScript = document.getElementById(`exam-script-${exam.id}`);
    if (oldScript) oldScript.remove();
    delete loadedScripts[exam.id];
  }
  
  loadExamFile(exam.file, exam.id);
}

function showExamNotAvailable(examId) {
  const examContainer = document.getElementById("examContent");
  if (examContainer) {
    examContainer.innerHTML = `
      <div style="text-align:center; padding:50px; background:#fff3cd; border-radius:10px; border:1px solid #ffc107;">
        <h3 style="color:#856404;">⚠️ الامتحان غير متوفر بعد</h3>
        <p style="color:#856404;">الامتحان رقم ${examId} سيتم إضافته قريباً.</p>
        <p style="color:#856404; font-size:14px;">✅ حالياً الامتحان 1 فقط متاح.</p>
        <button onclick="goList()" style="margin-top:20px;">🔙 العودة للقائمة</button>
      </div>
    `;
  }
  
  const homePage = document.getElementById("home");
  const listPage = document.getElementById("list");
  const examPage = document.getElementById("exam");
  
  if (listPage) listPage.classList.remove("active");
  if (homePage) homePage.classList.remove("active");
  if (examPage) examPage.classList.add("active");
}

function loadExamFile(filename, examId) {
  const oldScript = document.getElementById(`exam-script-${examId}`);
  if (oldScript) oldScript.remove();
  
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

console.log("✅ app.js تم تحميله بنجاح");
console.log("📍 الدوال المتاحة: goList, goHome, openExam");
