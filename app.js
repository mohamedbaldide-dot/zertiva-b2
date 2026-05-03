let currentSkill = null;
let currentExam = null;
let answers = [];

// بيانات تجريبية (تضيف انت لاحقاً)
const exams = {
  hoeren1: [
    {
      questions: [
        { text: "Die Aussage ist richtig", correct: true },
        { text: "Die Aussage ist falsch", correct: false }
      ]
    }
  ],
  lesen1: [
    {
      questions: [
        { text: "Lesen Frage 1", correct: true },
        { text: "Lesen Frage 2", correct: false }
      ]
    }
  ],
  sprach1: [
    {
      questions: [
        { text: "Ich ___ Deutsch.", options: ["lernen", "lerne"], correct: 1 }
      ]
    }
  ]
};

// بدء
function start() {
  showPage('skillsPage');
}

// تغيير الصفحة
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// فتح مهارة
function openSkill(skill) {
  currentSkill = skill;
  showPage('examListPage');

  const container = document.getElementById('examListPage');
  container.innerHTML = "<h2>اختر امتحان</h2>";

  exams[skill].forEach((exam, i) => {
    let btn = document.createElement('button');
    btn.innerText = "Exam " + (i + 1);
    btn.onclick = () => openExam(i);
    container.appendChild(btn);
  });
}

// فتح امتحان
function openExam(index) {
  currentExam = exams[currentSkill][index];
  answers = [];
  showPage('examPage');
  renderExam();
}

// عرض الامتحان
function renderExam() {
  const container = document.getElementById('examContainer');
  container.innerHTML = '';

  currentExam.questions.forEach((q, i) => {
    let div = document.createElement('div');
    div.className = "question";

    let p = document.createElement('p');
    p.innerText = (i+1) + ". " + q.text;
    div.appendChild(p);

    // صح/خطأ
    if (typeof q.correct === "boolean") {
      let btn1 = document.createElement('button');
      btn1.innerText = "✔";
      btn1.onclick = () => answers[i] = true;

      let btn2 = document.createElement('button');
      btn2.innerText = "✖";
      btn2.onclick = () => answers[i] = false;

      div.appendChild(btn1);
      div.appendChild(btn2);
    }

    // اختيارات
    if (q.options) {
      q.options.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.innerText = opt;
        btn.onclick = () => answers[i] = idx;
        div.appendChild(btn);
      });
    }

    container.appendChild(div);
  });
}

// تصحيح
function checkAnswers() {
  const divs = document.querySelectorAll('.question');

  currentExam.questions.forEach((q, i) => {
    if (answers[i] === q.correct) {
      divs[i].classList.add('correct');
    } else {
      divs[i].classList.add('wrong');
    }
  });
}

// رجوع
function goBack() {
  showPage('examListPage');
}
