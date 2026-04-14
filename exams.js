// قائمة جميع الامتحانات
const exams = [
  { id: 1, title: "sport ist gesund (الرياضة مفيدة للصحة)", file: "exam1.js" },
  { id: 2, title: "kellner (باحث شاب)", file: "exam2.js" },
  { id: 3, title: "Impfung (لقاح)", file: "exam3.js" },
  { id: 4, title: "tanzkurs 1 (دورة رقص)", file: "exam4.js" },
  { id: 5, title: "insell (الجزر)", file: "exam5.js" },
  { id: 6, title: "Bilder (صور)", file: "exam6.js" },
  { id: 7, title: "Grundschule (المدرسة)", file: "exam7.js" },
  { id: 8, title: "Österreich (النمسا)", file: "exam8.js" },
  { id: 9, title: "Insekten 1 (الحشرات)", file: "exam9.js" },
  { id: 10, title: "das Benzin (بَنْزِينٌ)", file: "exam10.js" },
  { id: 11, title: "kaffee (القهوة)", file: "exam11.js" },
  { id: 12, title: "Programmierer 1 (المبرمجين)", file: "exam12.js" },
  { id: 13, title: "Trampolin (الترامبولين)", file: "exam13.js" },
  { id: 14, title: "Schlafzug 1 (قطار النوم)", file: "exam14.js" },
  { id: 15, title: "Bonbons (الحلوى)", file: "exam15.js" },
  { id: 16, title: "Umwelt (البيئة)", file: "exam16.js" },
  { id: 17, title: "Licht (الضوء)", file: "exam17.js" },
  { id: 18, title: "Alpen 1 (الألب)", file: "exam18.js" },
  { id: 19, title: "Spiele (الألعاب)", file: "exam19.js" },
  { id: 20, title: "kartoffel (البطاطا)", file: "exam20.js" },
  { id: 21, title: "Bienen 1 (النحل)", file: "exam21.js" },
  { id: 22, title: "Geld (المال)", file: "exam22.js" },
  { id: 23, title: "Suchtmittel (المخدرات)", file: "exam23.js" },
  { id: 24, title: "Kinder und Schulen (الأطفال والمدارس)", file: "exam24.js" },
  { id: 25, title: "Kindertelefon (هاتف الأطفال)", file: "exam25.js" },
  { id: 26, title: "Wahlen (الانتخابات والمرأة الروسية)", file: "exam26.js" },
  { id: 27, title: "kein zeit 1 (لا يوجد وقت)", file: "exam27.js" },
  { id: 28, title: "Limonade (عصير الليمون)", file: "exam28.js" },
  { id: 29, title: "Auf dem Weg (في الطريق)", file: "exam29.js" },
  { id: 30, title: "Farben (الألوان)", file: "exam30.js" }
];

// دالة لعرض قائمة الامتحانات
function renderExamList() {
  const container = document.getElementById("examList");
  if (!container) return;
  
  container.innerHTML = "";
  
  exams.forEach(exam => {
    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `${exam.id} - ${exam.title}`;
    div.onclick = () => openExam(exam);
    container.appendChild(div);
  });
}