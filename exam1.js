// بيانات الامتحان 1
const exam1Data = {
  title: "امتحان 1 - sport ist gesund",
  titles: {
    a: "Sport ist gesund - wenn man einige wichtige Regeln beachtet",
    b: "Griechische Sportler so erfolgreich wie nie zuvor",
    c: "Fitness auch mit wenig Zeitaufwand erreichbar",
    d: "Geprüfte Qualität für Babys",
    e: "Bluthochdruck beschleunigt das Abnehmen",
    f: "Sportbegeisterte Eltern - und auch die Babys sind beim Joggen dabei",
    g: "Täglich kurze Sprints besser als langes Ausdauertraining",
    h: "Ein Leistungssport für jedes Alter",
    i: "Unüberschaubares Angebot an Kinderwagen überfordert junge Eltern",
    j: "Autoindustrie: In Zukunft Mobilität ohne Grenzen"
  },
  correctAnswers: { 1: "h", 2: "f", 3: "g", 4: "a", 5: "d" }
};

// متغيرات الحالة
let selectedTextTeil3 = null;
let selectedTitleTeil3 = null;
let answersTeil3 = {};
let currentGap = null;
let sprachUser = {};
let currentGap2 = null;
let selectedConnector = null;
let sprach2User = {};
let h1User = {};
let h2User = {};
let h3User = {};
let currentVariant = 1;

// ========== عرض محتوى الامتحان ==========
function renderExam() {
  const container = document.getElementById("examContent");
  
  container.innerHTML = `
    <h2>${exam1Data.title}</h2>
    
    <!-- أزرار التنقل -->
    <div class="nav-buttons">
      <button onclick="window.showTeil(1, window.examParts)">Lesen Teil 1</button>
      <button onclick="window.showTeil(2, window.examParts)">Lesen Teil 2</button>
      <button onclick="window.showTeil(3, window.examParts)">Lesen Teil 3</button>
      <button onclick="window.showTeil(4, window.examParts)">Sprachbausteine Teil 1</button>
      <button onclick="window.showTeil(5, window.examParts)">Sprachbausteine Teil 2</button>
      <button onclick="window.showTeil(6, window.examParts)">Hören Teil 1</button>
      <button onclick="window.showTeil(7, window.examParts)">Hören Teil 2</button>
      <button onclick="window.showTeil(8, window.examParts)">Hören Teil 3</button>
    </div>
    
    <!-- Teil 1 -->
    <div id="teil1">
      <h3 id="t1">Text 1</h3>
      <p>An der Ostküste Attikas in Griechenland lag in der Antike der Orte Marathon. Dort siegte der griechische König Milthiades im Jahr 490 vor Christus über das Heer der Perser. Der Sage nach soll ein Soldat die 42,2 km lange Strecke nach Athen gerannt sein, um die Nachricht dieses für Griechenland wichtigen Sieges zu überbringen. Bei seiner Ankunft in Athen brach er, noch während er die Nachricht verkündete, vor Erschöpfung tot zusammen. Auf diese Legende geht eine sportliche Disziplin zurück: der Marathonlauf. Bereits seit 1896 ist er olympische Disziplin, seit 1984 auch für Frauen. Die Streckenlänge von 42195 m. wurde 1924 festgelegt. Der Marathonlauf gilt als einziger Leistungssport, der bis ins hohe Alter ausgeübt werden kann. Wissenschaftler erklären das mit der menschlichen Evolution. Der Mensch jagte in der Frühzeit seine Beute so lange vor sich her, bis diese vor Erschöpfung nicht mehr weiter konnte. Die Fähigkeit, ausdauernd über lange Strecken zu rennen, ist also in den menschlichen Genen verankert.</p>
      <select id="ans1" onchange="updateOptionsExam1()"></select>
      
      <h3 id="t2">Text 2</h3>
      <p>Warum soll sich der Mensch nun auf Straßen und Wegen fortbewegen? Sich in Feld und Wald, über Stock und Stein fortzubewegen, ist mindestens ebenso interessant. Daher erfand die Autoindustrie den Geländewagen und die Fahrradindustrie das Mountainbike. Da fehlte eigentlich nur noch eine Neuentwicklung eines Gefährts, dessen Mobilitätsmöglichkeiten bisher relativ begrenzt waren: der Kinderwagen. Doch das ist jetzt auch vorbei: Im Trend liegt jetzt der Jogging-Stroller, ein Kinderwagen mit nur noch drei bereiften Rädern. Diese neuen Transportmittel für Babys können sportbegeisterte und von grenzenloser Mobilität träumende Eltern jetzt samt Kind beim Joggen oder beim Inlineskaten vor sich herschieben. Die Babys sollen begeistert sein von der Geschwindigkeit, die mit solchen Geräten erreichbar ist. Doch der die Gerätesicherheit prüfende TÜV, bei Fahrzeugbesitzern in Deutschland schon seit langem als Spielverderber bekannt, warnte vor den Jogging-Strollern: Sie haben einen ungünstigen Schwerpunkt auf der Hinterachse, d.h. sie kippen leicht nach hinten um, und sie können sich leicht selbständig machen - jedenfalls solange, bis die Babys das Bremsen gelernt haben.</p>
      <select id="ans2" onchange="updateOptionsExam1()"></select>
      
      <h3 id="t3">Text 3</h3>
      <p>Schweizer Forscher haben herausgefunden, dass nur 6 Minuten Hochleistungstraining pro Woche - also weniger als eine Minute pro Tag - ausreichen, um den Körper fit zu halten. In einem Versuch mit mehreren Probanden nahm eine Gruppe an einem traditionellen Ausdauertraining teil, mit je ein bis zwei Trainingsstunden täglich. Die zweite Gruppe führte täglich 60 Sekunden dauernde Radsprints durch, wobei die Teilnehmer quasi aus dem Stand Höchstgeschwindigkeit erzielen mussten. Das Resultat war überraschend: Beide Gruppen zeigten die gleichen gesundheitlichen Verbesserungen. Die Muskel nahmen gleich viel Sauerstoff auf, und auch die Werte des für die Sauerstoffaufnahme verantwortlichen Zitratenzyms waren gleich. Sehr kurze und hochintensive sportliche Übungen verbessern die Fitness genauso wie das zeitraubende traditionelle Ausdauertraining.</p>
      <select id="ans3" onchange="updateOptionsExam1()"></select>
      
      <h3 id="t4">Text 4</h3>
      <p>Mehr Bewegung als Ausgleich für zu langes Sitzen im Büro und in der Freizeit ist zurzeit angesagt, um Übergewicht, Bluthochdruck und Herz-Kreislauf-Erkrankungen vorzubeugen und um fit zu bleiben. Gerade für Einsteiger gibt es jedoch bei den die Ausdauer trainierenden Sportarten wie dem Joggen einige Grundregeln, die beachtet werden müssen, will man gesundheitliche Schäden vermeiden. Die ersten Trainingseinheiten sollen nicht länger als 20 bis 30 Minuten dauern und zweimal pro Woche durchgeführt werden. Der Puls sollte nie den Wert 200 minus Lebensalter überschreiten, bei einem 20-Jährigen kann er also bei 180, bei einem 60-Jährigen hingegen nur bei 140 liegen. Außerdem gilt für alle, die beim Sport abnehmen möchten: Je höher der Pulsschlag, desto weniger Fett wird verbrannt. Hoher Pulsschlag lässt Sporttreibenden langsamer abnehmen.</p>
      <select id="ans4" onchange="updateOptionsExam1()"></select>
      
      <h3 id="t5">Text 5</h3>
      <p>Viele frischgebackene Eltern stehen einem riesigen Angebot an Kinderwagen gegenüber, das in Kinderläden und Großmärkten feilgeboten wird. Doch welcher ist der richtige? Experten raten, beim Kauf dieses für die ersten Jahre mit dem Kleinkind wichtigen Gefährts auf ein paar Dinge zu achten. Erstens sollte die Matratze nicht zu weich sein, damit das Kind nicht einsinkt, wodurch die Atmung behindert werden kann. Zweitens sollten die Räder gefedert sein, um Erschütterungen auf unebenen Wegen auszugleichen. Ein hoher Wagen schützt die Babys vor dem Auspuff der Autos an Straßenkreuzungen. Zusammenklappbare Wagen passen في jeden Kofferraum und lassen sich fast überallhin mitnehmen. Der Wagen sollte vor allem kippsicher sein und keine scharfen Kanten haben, an denen sich die Kinder verletzen können. Vom TÜV geprüfte Kinderwagen erhalten ein Prüfzeichen. Damit haben die Eltern eine gewisse Sicherheit, dass der Kinderwagen auch nach Dauergebrauch nicht zu einem Sicherheitsrisiko für ihr Kind werden kann.</p>
      <select id="ans5" onchange="updateOptionsExam1()"></select>
      
      <button onclick="checkExam1()">تصحيح</button>
      <button onclick="resetExam1()" style="margin-right:10px;">🔄 إعادة Teil 1</button>
      <p id="result1"></p>
    </div>
    
    <!-- Teil 2, 3, Sprachbausteine, Hören... (نفس المحتوى الأصلي) -->
    <div id="teil2" style="display:none;">
      <h2>Lesen Teil 2</h2>
      <p>سيتم إضافة محتوى Teil 2 هنا...</p>
    </div>
    
    <div id="teil3" style="display:none;">
      <h2>Lesen Teil 3</h2>
      <p>سيتم إضافة محتوى Teil 3 هنا...</p>
    </div>
    
    <div id="sprach1" style="display:none;">
      <h2>Sprachbausteine Teil 1</h2>
      <p>سيتم إضافة محتوى Sprachbausteine Teil 1 هنا...</p>
    </div>
    
    <div id="sprach2" style="display:none;">
      <h2>Sprachbausteine Teil 2</h2>
      <p>سيتم إضافة محتوى Sprachbausteine Teil 2 هنا...</p>
    </div>
    
    <div id="hoeren1" style="display:none;">
      <h2>Hören Teil 1</h2>
      <p>سيتم إضافة محتوى Hören Teil 1 هنا...</p>
    </div>
    
    <div id="hoeren2" style="display:none;">
      <h2>Hören Teil 2</h2>
      <p>سيتم إضافة محتوى Hören Teil 2 هنا...</p>
    </div>
    
    <div id="hoeren3" style="display:none;">
      <h2>Hören Teil 3</h2>
      <p>سيتم إضافة محتوى Hören Teil 3 هنا...</p>
    </div>
  `;
  
  // حفظ المراجع للأجزاء
  window.examParts = {
    teil1: document.getElementById("teil1"),
    teil2: document.getElementById("teil2"),
    teil3: document.getElementById("teil3"),
    teil4: document.getElementById("sprach1"),
    teil5: document.getElementById("sprach2"),
    teil6: document.getElementById("hoeren1"),
    teil7: document.getElementById("hoeren2"),
    teil8: document.getElementById("hoeren3")
  };
  
  // تحميل الخيارات لـ Teil 1
  loadOptionsExam1();
}

// دوال Teil 1
function loadOptionsExam1() {
  for (let i = 1; i <= 5; i++) {
    const s = document.getElementById("ans" + i);
    if (s) {
      s.innerHTML = '<option value="">اختر</option>';
      for (let key in exam1Data.titles) {
        s.innerHTML += `<option value="${key}">${key}. ${exam1Data.titles[key]}</option>`;
      }
    }
  }
}

function updateOptionsExam1() {
  const selected = [];
  for (let i = 1; i <= 5; i++) {
    const v = document.getElementById("ans" + i).value;
    if (v) selected.push(v);
  }
  
  for (let i = 1; i <= 5; i++) {
    const s = document.getElementById("ans" + i);
    if (s) {
      const current = s.value;
      s.innerHTML = '<option value="">اختر</option>';
      for (let key in exam1Data.titles) {
        if (!selected.includes(key) || key === current) {
          s.innerHTML += `<option value="${key}">${key}. ${exam1Data.titles[key]}</option>`;
        }
      }
      s.value = current;
    }
  }
}

function checkExam1() {
  let score = 0;
  
  for (let i = 1; i <= 5; i++) {
    const val = document.getElementById("ans" + i).value;
    const text = document.getElementById("t" + i);
    
    text.classList.remove("correct", "wrong");
    
    if (val === exam1Data.correctAnswers[i]) {
      text.classList.add("correct");
      score++;
    } else {
      text.classList.add("wrong");
      const select = document.getElementById("ans" + i);
      
      if (!select.querySelector(".correct-answer")) {
        const opt = document.createElement("option");
        opt.value = exam1Data.correctAnswers[i];
        opt.textContent = "✔ الصحيح: " + exam1Data.correctAnswers[i] + ". " + exam1Data.titles[exam1Data.correctAnswers[i]];
        opt.classList.add("correct-answer");
        select.appendChild(opt);
      }
      select.value = exam1Data.correctAnswers[i];
    }
  }
  
  const final = (score * (25 / 5)).toFixed(2);
  document.getElementById("result1").innerText = "النتيجة: " + final + " / 25";
}

function resetExam1() {
  for (let i = 1; i <= 5; i++) {
    const select = document.getElementById("ans" + i);
    if (select) {
      const correctOptions = select.querySelectorAll(".correct-answer");
      correctOptions.forEach(opt => opt.remove());
      select.value = "";
    }
    const text = document.getElementById("t" + i);
    if (text) {
      text.classList.remove("correct", "wrong");
    }
  }
  document.getElementById("result1").innerText = "";
}

// ربط الدوال بـ window
window.updateOptionsExam1 = updateOptionsExam1;
window.checkExam1 = checkExam1;
window.resetExam1 = resetExam1;

// دالة التهيئة
function initExam1() {
  renderExam();
}

window.initExam = initExam1;