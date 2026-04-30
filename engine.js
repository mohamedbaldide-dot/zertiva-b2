// ============================================
// engine.js - المحرك الرئيسي للتوافق
// ============================================

console.log("✅ engine.js تم تحميله");

// التأكد من وجود الدوال الأساسية
if (typeof window.goList !== "function") {
  window.goList = function() {
    console.log("⚠️ goList غير معرف");
  };
}

if (typeof window.goHome !== "function") {
  window.goHome = function() {
    console.log("⚠️ goHome غير معرف");
  };
}

if (typeof window.openExam !== "function") {
  window.openExam = function(examId) {
    console.log("⚠️ openExam غير معرف", examId);
    alert("جاري تحميل النظام... يرجى تحديث الصفحة");
  };
}

if (typeof window.showTeil !== "function") {
  window.showTeil = function(n) {
    console.log("⚠️ showTeil غير معرف", n);
  };
}

// دالة مساعدة لتحميل الامتحانات من مجلدات مختلفة مستقبلاً
window.loadExamFromFile = async function(skill, examId) {
  try {
    const response = await fetch(`data/${skill}/exam${examId}.json`);
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch(e) {
    console.error("خطأ في تحميل الامتحان:", e);
    return null;
  }
};