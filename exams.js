// ============================================
// exams.js - قائمة الامتحانات
// ============================================

// قائمة الامتحانات مع عدد النسخ
const examsList = [
  { title: "sport ist gesund (الرياضة مفيدة للصحة)", count: 2 },
  { title: "kellner (باحث شاب)", count: 1 },
  { title: "Impfung (لقاح)", count: 1 },
  { title: "tanzkurs (دورة رقص)", count: 2 },
  { title: "insell (الجزر)", count: 2 },
  { title: "Bilder (صور)", count: 1 },
  { title: "Grundschule (المدرسة)", count: 1 },
  { title: "Österreich (النمسا)", count: 1 },
  { title: "Insekten (الحشرات)", count: 2 },
  { title: "das Benzin (بَنْزِينٌ)", count: 1 },
  { title: "kaffee (القهوة)", count: 1 },
  { title: "Programmierer (المبرمجين)", count: 3 },
  { title: "Trampolin (الترامبولين)", count: 1 },
  { title: "Schlafzug (قطار النوم)", count: 2 },
  { title: "Bonbons (الحلوى)", count: 1 },
  { title: "Umwelt (البيئة)", count: 1 },
  { title: "Licht (الضوء)", count: 2 },
  { title: "Alpen (الألب)", count: 3 },
  { title: "Spiele (الألعاب)", count: 2 },
  { title: "kartoffel (البطاطا)", count: 1 },
  { title: "Bienen (النحل)", count: 2 },
  { title: "Geld (المال)", count: 2 },
  { title: "Suchtmittel (المخدرات)", count: 2 },
  { title: "Kinder und Schulen (الأطفال والمدارس)", count: 1 },
  { title: "Kindertelefon (هاتف الأطفال)", count: 1 },
  { title: "Wahlen (الانتخابات)", count: 1 },
  { title: "kein zeit (لا يوجد وقت)", count: 3 },
  { title: "Limonade (عصير الليمون)", count: 6 },
  { title: "Auf dem Weg (في الطريق)", count: 1 },
  { title: "Farben (الألوان)", count: 1 }
];

// الامتحانات المتاحة حالياً (الموجودة فعلاً في مجلد exams)
const AVAILABLE_EXAMS = [1];

// ========== دالة عرض القائمة ==========
function renderExamList() {
  console.log("🟢 renderExamList تم استدعاؤها");
  
  const container = document.getElementById("examList");
  if (!container) {
    console.error("❌ عنصر examList غير موجود في الصفحة");
    return;
  }

  container.innerHTML = "";

  let examNumber = 1;

  examsList.forEach(exam => {
    for (let i = 0; i < exam.count; i++) {
      let label = "";

      if (i === 0) {
        label = "أساسي";
      } else if (exam.count === 2) {
        label = "معدل";
      } else {
        label = `معدل ${i}`;
      }

      const isAvailable = AVAILABLE_EXAMS.includes(examNumber);
      
      const div = document.createElement("div");
      div.className = "item";
      
      if (isAvailable) {
        div.innerHTML = `${examNumber}. ${exam.title} (${label}) ✅`;
        div.style.borderLeft = "4px solid #28a745";
        div.onclick = () => {
          console.log(`✅ فتح الامتحان رقم ${examNumber}`);
          if (typeof window.openExam === "function") {
            window.openExam({
              id: examNumber,
              title: `${exam.title} (${label})`,
              file: `exam${examNumber}.js`
            });
          } else {
            console.error("❌ window.openExam غير موجود");
            alert("خطأ: نظام فتح الامتحان لم يتم تحميله");
          }
        };
      } else {
        div.innerHTML = `${examNumber}. ${exam.title} (${label}) 🔜`;
        div.style.opacity = "0.6";
        div.style.backgroundColor = "#f8f9fa";
        div.onclick = () => {
          alert(`⚠️ الامتحان رقم ${examNumber} سيتم إضافته قريباً.\n✅ حالياً الامتحان 1 فقط متاح.`);
        };
      }
      
      container.appendChild(div);
      examNumber++;
    }
  });

  console.log(`✅ تم عرض ${examNumber - 1} امتحان (${AVAILABLE_EXAMS.length} متاح حالياً)`);
}

// ========== تسجيل الدالة في window ==========
window.renderExamList = renderExamList;

// ========== استدعاء القائمة مباشرة عند تحميل الملف ==========
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", function() {
    console.log("🟢 DOMContentLoaded - استدعاء renderExamList");
    renderExamList();
  });
} else {
  console.log("🟢 DOM جاهز - استدعاء renderExamList مباشرة");
  renderExamList();
}

console.log("✅ exams.js تم تحميله بنجاح");
