// ============================================
// exams.js - قائمة الامتحانات مع نظام النسخ
// ============================================

const exams = [
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

// ========== دالة عرض القائمة ==========
function renderExamList() {
  const container = document.getElementById("examList");
  if (!container) return;

  container.innerHTML = "";

  let examNumber = 1; // هذا هو الرقم الحقيقي للامتحان

  exams.forEach(exam => {
    for (let i = 0; i < exam.count; i++) {
      let label = "";

      if (i === 0) {
        label = "📘 أساسي";
      } else if (exam.count === 2) {
        label = "📙 معدل";
      } else {
        label = `📗 معدل ${i}`;
      }

      const div = document.createElement("div");
      div.className = "item";
      div.innerHTML = `${examNumber}. ${exam.title} (${label})`;

      // 🔥 المهم: استخدم قيمة examNumber الحالية، وليس بعد الزيادة
      const currentExamNumber = examNumber; // حفظ القيمة الحالية

      div.onclick = () => {
        console.log(`فتح الامتحان رقم: ${currentExamNumber}`); // للتأكد
        if (typeof window.openExam === "function") {
          window.openExam({
            id: currentExamNumber,
            title: `${exam.title} (${label})`,
            file: `exam${currentExamNumber}.js`
          });
        } else {
          console.error("openExam function not found!");
        }
      };

      container.appendChild(div);
      examNumber++; // الزيادة بعد حفظ القيمة
    }
  });

  console.log(`✅ تم إنشاء ${examNumber - 1} امتحان`);
}