// ============================================
// app.js - التحكم العام
// ============================================

// عند تحميل الامتحان → ننزل للأسفل تلقائياً
function scrollToExam() {
  const container = document.getElementById("exam-container");
  container.scrollIntoView({ behavior: "smooth" });
}

// نراقب تحميل أي امتحان
const observer = new MutationObserver(() => {
  const container = document.getElementById("exam-container");

  if (container.style.display === "block") {
    scrollToExam();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// تحسين الرجوع
function goBack() {
  const container = document.getElementById("exam-container");
  container.style.display = "none";
  container.innerHTML = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}