// ============================================
// engine.js - محرك إضافي للتوافق
// ============================================

console.log("✅ engine.js تم تحميله");

window.loadExamFromFile = async function(skill, examId) {
  try {
    const response = await fetch(`data/${skill}/exam${examId}.json`);
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch(e) {
    console.error("خطأ:", e);
    return null;
  }
};