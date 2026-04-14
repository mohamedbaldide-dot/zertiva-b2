// ============================================
// exam1.js - sport ist gesund (الامتحان الكامل)
// ============================================

// بيانات الامتحان
const exam1Data = {
  title: "امتحان 1 - sport ist gesund",
  
  // ========== Teil 1: البيانات ==========
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
  
  correctTeil1: { 1: "h", 2: "f", 3: "g", 4: "a", 5: "d" },
  
  // ========== Teil 2: البيانات ==========
  correctTeil2: { 1: "a", 2: "c", 3: "a", 4: "b", 5: "a" },
  
  // ========== Teil 3: البيانات ==========
  correctTeil3: {
    1: 6, 2: 4, 3: 8, 4: 1, 5: 10,
    6: 0, 7: 0, 8: 5, 9: 7, 10: 0,
    11: 0, 12: 2
  },
  
  // ========== Sprachbausteine Teil 1 ==========
  sprachAnswers: {
    1: "über den", 2: "nichts mehr", 3: "doch", 4: "Wie",
    5: "der", 6: "getan", 7: "umfallen", 8: "dir",
    9: "jede", 10: "damit"
  },
  
  sprachOptions: {
    1: ["an den", "auf dem", "über den"],
    2: ["nichts mehr", "noch nicht", "keines"],
    3: ["doch", "eben", "überhaupt"],
    4: ["Wann", "Was", "Wie"],
    5: ["der", "die", "von"],
    6: ["gelaufen", "getan", "geworden"],
    7: ["durchfallen", "umfallen", "wegfallen"],
    8: ["dich", "dir", "mal"],
    9: ["alle", "ganze", "jede"],
    10: ["dabei", "damit", "davon"]
  },
  
  // ========== Sprachbausteine Teil 2 ==========
  sprach2Answers: {
    1: "denn", 2: "für", 3: "zwischen", 4: "irgendein",
    5: "dafür", 6: "davon", 7: "weiter", 8: "dazu",
    9: "dass", 10: "daran"
  },
  
  connectorsList: ["denn", "für", "zwischen", "irgendein", "dafür", "davon", "weiter", "dazu", "dass", "daran", "daher", "damit", "gegen", "was", "zu"],
  
  // ========== Hören Teil 1 ==========
  h1Data: [
    "Die 50-Euro-Noten der Deutschen Bundesbank sind jetzt fälschungssicherer.",
    "Der Ärzteverband hat gefordert, dass junge Ärzte in Zukunft ein Pflichtjahr in einer Landarztpraxis absolvieren müssen.",
    "Wissenschaftler der Universität Mainz sind am Projekt zur Erforschung des Planeten Mars beteiligt.",
    "Der Verband 'Bildung und Erziehung' fordert 10.000 zusätzliche Lehrerstellen.",
    "Die Schwarzarbeit hat im vergangenen Jahr um 15% zugenommen."
  ],
  h1Correct: [3],
  
  // ========== Hören Teil 2 ==========
  h2Variants: {
    1: {
      title: "Roland (Spielen)",
      correct: [2, 3, 4, 7, 9, 10],
      questions: [
        "Roland wünschmann arbeitet Vollzeit als Fußballtrainer bei Viktoria Köln.",
        "Viktoria Köln möchte nicht nur gegen Mannschaften aus der Verbandsliga spielen.",
        "Zu Beginn dieser Saison hat ein Spieler Viktoria Köln verlassen.",
        "Neue Spieler kommen bei Viktoria Köln immer aus der eigenen Jugendmannschaft.",
        "Die Mannschaft von Viktoria Köln hat Schwächen in der Abwehr.",
        "Roland wünschmann wagt die Prognose, dass dieser Saison der 1 FC Mönchengladbach Meister wird.",
        "Roland wünschmann kann seinen Beruf und sein Ehrenamt als Fußballtrainer problemlos miteinander vereinbaren.",
        "Auch die Frau von Roland wünschmann engagiert sich im Fußball.",
        "Der Vereinsvorstand schätzt Herrn wünschmanns Arbeit.",
        "Roland wünschmann ist mit der bisherigen Nachwuchsförderung des Vereins zufrieden."
      ]
    },
    2: {
      title: "Roland (aufsteigen)",
      correct: [3, 4, 7, 9],
      questions: [
        "Roland wünschmann spielt selbst bei Viktoria Köln Fußball.",
        "Viktoria Köln möchte am Ende der Spielsaison aufsteigen.",
        "Zu Beginn dieser Saison hat ein Spieler Viktoria Köln verlassen.",
        "Neue Spieler kommen bei Viktoria Köln immer aus der eigenen Jugendmannschaft.",
        "Die Mannschaft von Viktoria Köln hat Schwächen in der Abwehr.",
        "Roland wünschmann wagt die Prognose, dass dieser Saison der 1 FC Mönchengladbach Meister wird.",
        "Roland wünschmann kann seinen Beruf und sein Ehrenamt als Fußballtrainer miteinander vereinbaren.",
        "Auch die Frau von Roland wünschmann engagiert sich im Fußball.",
        "Der Vereinsvorstand schätzt Herrn wünschmanns Arbeit.",
        "Roland wünschmann ist mit der bisherigen Nachwuchsförderung des Vereins noch nicht voll zufrieden."
      ]
    },
    3: {
      title: "Roland (höhere Liga)",
      correct: [2, 3, 5, 8, 9],
      questions: [
        "Roland wünschmann spielt selbst bei Viktoria Köln Fußball.",
        "Viktoria Köln spielt seit Beginn der Saison in einer höheren Liga.",
        "Die meisten Spieler haben schon in der letzten Saison bei Viktoria Köln gespielt.",
        "Neuzugänge kommen meist aus unterschiedlichen Mannschaften.",
        "Die Mannschaft möchte neue Spieltaktiken ausprobieren.",
        "Roland wünschmann wagt die Prognose, dass dieser Saison der 1 FC Mönchengladbach Meister wird.",
        "Roland wünschmann empfindet sein Ehrenamt oft als Belastung.",
        "Seine Frau engagiert sich für denselben Verein.",
        "Er und der Vorstand sind meistens einer Meinung.",
        "Er hofft auf Verbesserungen in der Nachwuchsförderung."
      ]
    }
  },
  
  // ========== Hören Teil 3 ==========
  h3Data: [
    "Besucher des Reitturniers sollten möglichst Parkplätze außerhalb des Turniergeländes nutzen.",
    "Das Open-Air-Gospelkonzert wird live im Radio übertragen.",
    "Bei der Berliner Museumsnacht können Sie mit einer Sonderbuslinie bequem erreichen.",
    "Wegen Glätte ist die A5 zwischen Mannheim und Frankfurt in beide Richtungen voll gesperrt.",
    "Hotelreservierungen in Dresden sind ausschließlich telefonisch möglich."
  ],
  h3Correct: [1, 3]
};

// ========== متغيرات الحالة ==========
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

// ========== عرض الامتحان بالكامل ==========
function renderExam() {
  const container = document.getElementById("examContent");
  
  container.innerHTML = `
    <h2>${exam1Data.title}</h2>
    
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
      ${renderTeil1()}
    </div>
    
    <!-- Teil 2 -->
    <div id="teil2" style="display:none">
      ${renderTeil2()}
    </div>
    
    <!-- Teil 3 -->
    <div id="teil3" style="display:none">
      ${renderTeil3()}
    </div>
    
    <!-- Sprachbausteine Teil 1 -->
    <div id="sprach1" style="display:none">
      ${renderSprach1()}
    </div>
    
    <!-- Sprachbausteine Teil 2 -->
    <div id="sprach2" style="display:none">
      ${renderSprach2()}
    </div>
    
    <!-- Hören Teil 1 -->
    <div id="hoeren1" style="display:none">
      ${renderH1()}
    </div>
    
    <!-- Hören Teil 2 -->
    <div id="hoeren2" style="display:none">
      ${renderH2()}
    </div>
    
    <!-- Hören Teil 3 -->
    <div id="hoeren3" style="display:none">
      ${renderH3()}
    </div>
  `;
  
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
  
  // تهيئة كل الأجزاء
  initTeil1();
  initTeil3();
  initSprach1();
  initSprach2();
  initH1();
  initH2();
  initH3();
  initVariants();
}

// ========== Teil 1 ==========
function renderTeil1() {
  return `
    <h3 id="t1">Text 1</h3>
    <p>An der Ostküste Attikas in Griechenland lag in der Antike der Orte Marathon. Dort siegte der griechische König Milthiades im Jahr 490 vor Christus über das Heer der Perser. Der Sage nach soll ein Soldat die 42,2 km lange Strecke nach Athen gerannt sein, um die Nachricht dieses für Griechenland wichtigen Sieges zu überbringen. Bei seiner Ankunft in Athen brach er, noch während er die Nachricht verkündete, vor Erschöpfung tot zusammen. Auf diese Legende geht eine sportliche Disziplin zurück: der Marathonlauf. Bereits seit 1896 ist er olympische Disziplin, seit 1984 auch für Frauen. Die Streckenlänge von 42195 m. wurde 1924 festgelegt. Der Marathonlauf gilt als einziger Leistungssport, der bis ins hohe Alter ausgeübt werden kann. Wissenschaftler erklären das mit der menschlichen Evolution. Der Mensch jagte in der Frühzeit seine Beute so lange vor sich her, bis diese vor Erschöpfung nicht mehr weiter konnte. Die Fähigkeit, ausdauernd über lange Strecken zu rennen, ist also in den menschlichen Genen verankert.</p>
    <select id="ans1"></select>
    
    <h3 id="t2">Text 2</h3>
    <p>Warum soll sich der Mensch nun auf Straßen und Wegen fortbewegen? Sich in Feld und Wald, über Stock und Stein fortzubewegen, ist mindestens ebenso interessant. Daher erfand die Autoindustrie den Geländewagen und die Fahrradindustrie das Mountainbike. Da fehlte eigentlich nur noch eine Neuentwicklung eines Gefährts, dessen Mobilitätsmöglichkeiten bisher relativ begrenzt waren: der Kinderwagen. Doch das ist jetzt auch vorbei: Im Trend liegt jetzt der Jogging-Stroller, ein Kinderwagen mit nur noch drei bereiften Rädern. Diese neuen Transportmittel für Babys können sportbegeisterte und von grenzenloser Mobilität träumende Eltern jetzt samt Kind beim Joggen oder beim Inlineskaten vor sich herschieben. Die Babys sollen begeistert sein von der Geschwindigkeit, die mit solchen Geräten erreichbar ist. Doch der die Gerätesicherheit prüfende TÜV, bei Fahrzeugbesitzern in Deutschland schon seit langem als Spielverderber bekannt, warnte vor den Jogging-Strollern: Sie haben einen ungünstigen Schwerpunkt auf der Hinterachse, d.h. sie kippen leicht nach hinten um, und sie können sich leicht selbständig machen - jedenfalls solange, bis die Babys das Bremsen gelernt haben.</p>
    <select id="ans2"></select>
    
    <h3 id="t3">Text 3</h3>
    <p>Schweizer Forscher haben herausgefunden, dass nur 6 Minuten Hochleistungstraining pro Woche - also weniger als eine Minute pro Tag - ausreichen, um den Körper fit zu halten. In einem Versuch mit mehreren Probanden nahm eine Gruppe an einem traditionellen Ausdauertraining teil, mit je ein bis zwei Trainingsstunden täglich. Die zweite Gruppe führte täglich 60 Sekunden dauernde Radsprints durch, wobei die Teilnehmer quasi aus dem Stand Höchstgeschwindigkeit erzielen mussten. Das Resultat war überraschend: Beide Gruppen zeigten die gleichen gesundheitlichen Verbesserungen. Die Muskel nahmen gleich viel Sauerstoff auf, und auch die Werte des für die Sauerstoffaufnahme verantwortlichen Zitratenzyms waren gleich. Sehr kurze und hochintensive sportliche Übungen verbessern die Fitness genauso wie das zeitraubende traditionelle Ausdauertraining.</p>
    <select id="ans3"></select>
    
    <h3 id="t4">Text 4</h3>
    <p>Mehr Bewegung als Ausgleich für zu langes Sitzen im Büro und in der Freizeit ist zurzeit angesagt, um Übergewicht, Bluthochdruck und Herz-Kreislauf-Erkrankungen vorzubeugen und um fit zu bleiben. Gerade für Einsteiger gibt es jedoch bei den die Ausdauer trainierenden Sportarten wie dem Joggen einige Grundregeln, die beachtet werden müssen, will man gesundheitliche Schäden vermeiden. Die ersten Trainingseinheiten sollen nicht länger als 20 bis 30 Minuten dauern und zweimal pro Woche durchgeführt werden. Der Puls sollte nie den Wert 200 minus Lebensalter überschreiten, bei einem 20-Jährigen kann er also bei 180, bei einem 60-Jährigen hingegen nur bei 140 liegen. Außerdem gilt für alle, die beim Sport abnehmen möchten: Je höher der Pulsschlag, desto weniger Fett wird verbrannt. Hoher Pulsschlag lässt Sporttreibenden langsamer abnehmen.</p>
    <select id="ans4"></select>
    
    <h3 id="t5">Text 5</h3>
    <p>Viele frischgebackene Eltern stehen einem riesigen Angebot an Kinderwagen gegenüber, das in Kinderläden und Großmärkten feilgeboten wird. Doch welcher ist der richtige? Experten raten, beim Kauf dieses für die ersten Jahre mit dem Kleinkind wichtigen Gefährts auf ein paar Dinge zu achten. Erstens sollte die Matratze nicht zu weich sein, damit das Kind nicht einsinkt, wodurch die Atmung behindert werden kann. Zweitens sollten die Räder gefedert sein, um Erschütterungen auf unebenen Wegen auszugleichen. Ein hoher Wagen schützt die Babys vor dem Auspuff der Autos an Straßenkreuzungen. Zusammenklappbare Wagen passen في jeden Kofferraum und lassen sich fast überallhin mitnehmen. Der Wagen sollte vor allem kippsicher sein und keine scharfen Kanten haben, an denen sich die Kinder verletzen können. Vom TÜV geprüfte Kinderwagen erhalten ein Prüfzeichen. Damit haben die Eltern eine gewisse Sicherheit, dass der Kinderwagen auch nach Dauergebrauch nicht zu einem Sicherheitsrisiko für ihr Kind werden kann.</p>
    <select id="ans5"></select>
    
    <button onclick="window.checkTeil1()">تصحيح</button>
    <button onclick="window.resetTeil1()">🔄 إعادة Teil 1</button>
    <p id="result1"></p>
  `;
}

function initTeil1() {
  for (let i = 1; i <= 5; i++) {
    const s = document.getElementById("ans" + i);
    if (s) {
      s.innerHTML = '<option value="">اختر</option>';
      for (let key in exam1Data.titles) {
        s.innerHTML += `<option value="${key}">${key}. ${exam1Data.titles[key]}</option>`;
      }
      s.onchange = () => updateOptionsTeil1();
    }
  }
}

function updateOptionsTeil1() {
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

window.checkTeil1 = function() {
  let score = 0;
  for (let i = 1; i <= 5; i++) {
    const val = document.getElementById("ans" + i).value;
    const text = document.getElementById("t" + i);
    text.classList.remove("correct", "wrong");
    
    if (val === exam1Data.correctTeil1[i]) {
      text.classList.add("correct");
      score++;
    } else {
      text.classList.add("wrong");
    }
  }
  const final = (score * (25 / 5)).toFixed(2);
  document.getElementById("result1").innerText = "النتيجة: " + final + " / 25";
};

window.resetTeil1 = function() {
  for (let i = 1; i <= 5; i++) {
    const select = document.getElementById("ans" + i);
    if (select) select.value = "";
    const text = document.getElementById("t" + i);
    if (text) text.classList.remove("correct", "wrong");
  }
  document.getElementById("result1").innerText = "";
};

// ========== Teil 2 ==========
function renderTeil2() {
  return `
    <h2>Lesen Teil 2</h2>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <div style="flex:2; min-width:250px; background:#f9f9f9; padding:15px; border-radius:10px;">
        <p>Als Helmut Scherer vor genau 50 Jahren zum ersten Mal mit seinem Bollerwagen durch die westfälische Kleinstadt Unna zog, wurde er von den Leuten ausgelacht. Heute aber ist er eine städtische Berühmtheit und sogar weit über die Grenzen seiner Heimatstadt hinaus bekannt. Der 71-Jährige ist der einzige Teilnehmer des weltweit kleinsten Karnevalsumzugs. An Weiberfastnacht, dem letzten Donnerstag der Karnevalsperiode eines Jahres, zieht er mit seinem Handwagen los: Er selbst ist dann - dieses Jahr als blondes Schulmädchen - verkleidet und auf seinem Bollerwagen hat er aus Pappe und Gips Figuren aufgebaut, die humoristisch ein aktuelles gesellschaftliches Thema - diesmal die Schulreform - aufgreifen. So macht er sich nach alter karnevalistischer Tradition über Missstände lustig. Helmut Scherer legt natürlich Wert darauf, dass er von Karnevalsmusik begleitet wird, die jedoch nicht von einer Musikgruppe, sondern von einem Radiorekorder gespielt wird. Vor 50 Jahren kam Helmut Scherer aus dem katholisch geprägten Paderborn, wo er seine Kindheit und Jugend verbracht hatte, nach Unna, dessen überwiegend evangelische Bevölkerung sich recht kühl und nüchtern gibt und deshalb anfangs auch wenig Verständnis für den katholischen Karnevalsbrauch zeigte. "Die Leute haben mir einen Vogel gezeigt und den Kopf geschüttelt", beschreibt der "Narr aus Überzeugung" die Anfänge. Auch bei der Stadtverwaltung, wo Scherer für Weiberfastnacht seinen Umzug ordnungsgemäß anmeldete, stieß er zunächst auf Unverständnis. Aber da sein Karnevalszug niemanden behinderte und auch nicht zu befürchten war, dass Unnas öffentliche Ordnung gestört würde, bekam er die Erlaubnis, mit seinem humoristischen Handwagen loszumarschieren. Über 10 Jahre lang zog Scherer einsam, belächelt und verspottet durch Unna, weder eisige Kälte noch Schnee konnten ihn davon abhalten. Doch der Karneval blieb für lange Zeit sein Privatvergnügen. Als dann die lokale Presse anfing, ihn zu unterstützen, wandelte sich die Meinung der Öffentlichkeit. Der einst verspottete Karnevalist stieg langsam zum närrischen Wahrzeichen einer Stadt ohne Karneval auf. Für die Stadtoberen ist heute die "Ein-Mann-Show" die beste Werbung für Unna. Scherers Beharrlichkeit hat sich also ausgezahlt: Anlässlich seines fünfzigsten Karnevalsjubiläums wurde er sogar offiziell im Rathaus empfangen, um ihm - so wie es auch in den Karnevalshochburgen Köln, Düsseldorf und Mainz üblich ist - den goldenen Schlüssel des Rathauses zu übergeben. Obwohl er keinem Karnevalsverein angehört, wurde ihm die Ehre zuteil, als Karnevalsprinz in den Bund Deutscher Karneval aufgenommen zu werden; somit wurde es ihm möglich, auch bei den Rosenmontagszügen in den närrischen Hochburgen im Rheinland mitzuwirken. Weit über hundert Fans des standhaften Narren haben sich zu einem Fan-Club zusammengeschlossen, und etliche stehen beim jährlichen Umzug in Unna am Straßenrand und rufen statt "Spinner" den rheinischen Karnevalsgruß "Helau". Bei aller Fortschrittlichkeit soll aber eines so bleiben, wie es immer war - einen weiteren Teilnehmer am Zug duldet der Karnevalsprinz nicht: "Die Tradition soll aufrechterhalten bleiben", sagt er schmunzelnd. "Aber nur solange mich die Füße tragen!"</p>
      </div>
      <div style="flex:1; min-width:200px;">
        <p><strong>Frage 1<br>Helmut Scherer</strong></p>
        <select id="q1">
          <option value="">اختر</option>
          <option value="a">a. führt in Unna einen kleinen Karnevalsumzug durch</option>
          <option value="b">b. ist in Unna seit 50 Jahren eine gefeierte Persönlichkeit</option>
          <option value="c">c. veranstaltet den einzigen Karnevalsumzug der Welt</option>
        </select>
        <p><strong>Frage 2<br>Auf seinem Handwagen</strong></p>
        <select id="q2">
          <option value="">اختر</option>
          <option value="a">a. fährt traditionell ein blondes Schulmädchen mit</option>
          <option value="b">b. präsentiert er kleine Szenen, die auf den Alltag Bezug nehmen</option>
          <option value="c">c. stellt er sozialkritische Themen auf witzige Art und Weise dar</option>
        </select>
        <p><strong>Frage 3<br>Die Bevölkerung von Unna</strong></p>
        <select id="q3">
          <option value="">اختر</option>
          <option value="a">a. hatte zunächst wenig Verständnis für Helmut Scherer</option>
          <option value="b">b. hielt anfangs Helmut Scherer für kühl und nüchtern</option>
          <option value="c">c. verhinderte Helmut Scherers ersten Karnevalsumzug</option>
        </select>
        <p><strong>Frage 4<br>Der kleinste Karnevalsumzug der Welt</strong></p>
        <select id="q4">
          <option value="">اختر</option>
          <option value="a">a. hat Helmut Scherer sogar Geld eingebracht</option>
          <option value="b">b. ist heute eine gute Reklame für die Stadt Unna</option>
          <option value="c">c. wird in Zukunft von einer ganzen Gruppe von Leuten durchgeführt</option>
        </select>
        <p><strong>Frage 5<br>Helmut Scherer</strong></p>
        <select id="q5">
          <option value="">اختر</option>
          <option value="a">a. hat an Karnevalsumzügen in mehreren Städten teilgenommen</option>
          <option value="b">b. hat inzwischen in ganz Deutschland Fan-Clubs</option>
          <option value="c">c. sucht einen Nachfolger</option>
        </select>
        <button onclick="window.checkTeil2()">تصحيح</button>
        <button onclick="window.resetTeil2()">🔄 إعادة Teil 2</button>
        <p id="result2"></p>
      </div>
    </div>
  `;
}

window.checkTeil2 = function() {
  let score = 0;
  for (let i = 1; i <= 5; i++) {
    const val = document.getElementById("q" + i).value;
    const select = document.getElementById("q" + i);
    select.classList.remove("correct", "wrong");
    if (val === exam1Data.correctTeil2[i]) {
      select.classList.add("correct");
      score++;
    } else {
      select.classList.add("wrong");
    }
  }
  const final = (score * (25 / 5)).toFixed(2);
  document.getElementById("result2").innerText = "النتيجة: " + final + " / 25";
};

window.resetTeil2 = function() {
  for (let i = 1; i <= 5; i++) {
    const select = document.getElementById("q" + i);
    if (select) {
      select.value = "";
      select.classList.remove("correct", "wrong");
    }
  }
  document.getElementById("result2").innerText = "";
};

// ========== Teil 3 ==========
function renderTeil3() {
  let textsHtml = '';
  for (let i = 1; i <= 12; i++) {
    textsHtml += `
      <div class="text" data-id="${i}" onclick="window.selectTextTeil3(${i}, this)">
        <div class="answer-box"></div>
        <div class="solution-box"></div>
        <strong>Anzeige ${String.fromCharCode(96 + i)}:</strong> نص الإعلان ${i}
        <p style="color:#666; font-size:12px;">انقر هنا ثم اختر إجابة من اليمين</p>
      </div>
    `;
  }
  
  let titlesHtml = `
    <div class="title" data-id="0" onclick="window.selectTitleTeil3(0, this)">0. لا شيء مناسب لهذا الإعلان</div>
    <div class="title" data-id="1" onclick="window.selectTitleTeil3(1, this)">1. Eine Bekannte interessiert sich für Bücher über den Tennissport.</div>
    <div class="title" data-id="2" onclick="window.selectTitleTeil3(2, this)">2. Ein befreundetes Ehepaar steht andauernd unter Stress und möchte wieder mehr Zeit für sich und andere haben.</div>
    <div class="title" data-id="3" onclick="window.selectTitleTeil3(3, this)">3. Eine Bekannte möchte bei ihren Partys eine perfekte Gastgeberin sein.</div>
    <div class="title" data-id="4" onclick="window.selectTitleTeil3(4, this)">4. Eine Studentin sucht Informationen, wie sie besser und systematischer lernen kann.</div>
    <div class="title" data-id="5" onclick="window.selectTitleTeil3(5, this)">5. Ein Bekannter möchte wissen, welche Botschaften durch Gestik und Mimik transportiert werden.</div>
    <div class="title" data-id="6" onclick="window.selectTitleTeil3(6, this)">6. Eine Bekannte möchte ihr äußeres Erscheinungsbild optimieren.</div>
    <div class="title" data-id="7" onclick="window.selectTitleTeil3(7, this)">7. Ein Bekannter ist sich noch unsicher, wie er sich bei einem Vorstellungsgespräch am besten präsentiert.</div>
    <div class="title" data-id="8" onclick="window.selectTitleTeil3(8, this)">8. Ein Bekannter schreibt an einer Hausarbeit über gesellschaftliche Normen und Verhaltensregeln verschiedener Jahrhunderte.</div>
    <div class="title" data-id="9" onclick="window.selectTitleTeil3(9, this)">9. Ein Bekannter möchte Kalligraphie (Schmuckschriften) lernen.</div>
    <div class="title" data-id="10" onclick="window.selectTitleTeil3(10, this)">10. Eine Bekannte ist sehr verunsichert, weil sie auf Konferenzen immer wieder Angst hat, frei zu sprechen.</div>
  `;
  
  return `
    <h2>Lesen Teil 3</h2>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <div id="texts" style="flex:1.5; min-width:300px;">${textsHtml}</div>
      <div id="titles" style="flex:1; min-width:250px;">${titlesHtml}</div>
    </div>
    <button onclick="window.checkTeil3()">تصحيح Teil 3</button>
    <button onclick="window.resetTeil3()">🔄 إعادة Teil 3</button>
    <p id="result3"></p>
  `;
}

function initTeil3() {
  answersTeil3 = {};
  selectedTextTeil3 = null;
  selectedTitleTeil3 = null;
}

window.selectTextTeil3 = function(num, el) {
  if (selectedTextTeil3 === num) {
    selectedTextTeil3 = null;
    el.classList.remove("selected");
    return;
  }
  document.querySelectorAll(".text").forEach(t => t.classList.remove("selected"));
  selectedTextTeil3 = num;
  el.classList.add("selected");
  if (selectedTitleTeil3 !== null) {
    assignTeil3(num, selectedTitleTeil3);
  }
};

window.selectTitleTeil3 = function(letter, el) {
  if (selectedTitleTeil3 === letter) {
    selectedTitleTeil3 = null;
    el.classList.remove("selected");
    return;
  }
  document.querySelectorAll(".title").forEach(t => t.classList.remove("selected"));
  selectedTitleTeil3 = letter;
  el.classList.add("selected");
  if (selectedTextTeil3 !== null) {
    assignTeil3(selectedTextTeil3, selectedTitleTeil3);
  }
};

function assignTeil3(num, letter) {
  const textEl = document.querySelectorAll(".text")[num - 1];
  if (answersTeil3[num] !== undefined) {
    const oldTitle = document.querySelector(`.title[data-id="${answersTeil3[num]}"]`);
    if (oldTitle) oldTitle.style.display = "block";
  }
  answersTeil3[num] = letter;
  const old = textEl.querySelector(".moved-title");
  if (old) old.remove();
  if (letter !== 0) {
    const titleEl = document.querySelector(`.title[data-id="${letter}"]`);
    if (titleEl) {
      titleEl.style.display = "none";
      const clone = document.createElement("div");
      clone.classList.add("moved-title");
      const closeBtn = document.createElement("span");
      closeBtn.innerText = " ✖";
      closeBtn.style.cursor = "pointer";
      closeBtn.style.marginLeft = "10px";
      closeBtn.onclick = (e) => {
        e.stopPropagation();
        titleEl.style.display = "block";
        delete answersTeil3[num];
        clone.remove();
      };
      clone.innerText = titleEl.innerText;
      clone.appendChild(closeBtn);
      textEl.insertBefore(clone, textEl.children[1]);
    }
  }
  selectedTextTeil3 = null;
  selectedTitleTeil3 = null;
  document.querySelectorAll(".selected").forEach(e => e.classList.remove("selected"));
}

window.checkTeil3 = function() {
  let score = 0;
  for (let i = 1; i <= 12; i++) {
    const el = document.querySelectorAll(".text")[i - 1];
    const val = answersTeil3[i];
    const box = el.querySelector(".answer-box");
    const sol = el.querySelector(".solution-box");
    const oldTitle = el.querySelector(".moved-title");
    if (oldTitle) oldTitle.remove();
    if (val === exam1Data.correctTeil3[i]) {
      box.classList.add("green");
      score++;
    } else {
      el.classList.add("red");
      sol.innerText = "✔ الصحيح: " + exam1Data.correctTeil3[i];
    }
  }
  const finalScore = (score * (25 / 12)).toFixed(2);
  document.getElementById("result3").innerText = "النتيجة: " + finalScore + " / 25";
};

window.resetTeil3 = function() {
  answersTeil3 = {};
  selectedTextTeil3 = null;
  selectedTitleTeil3 = null;
  document.querySelectorAll(".text").forEach(el => {
    el.classList.remove("red", "selected");
    const box = el.querySelector(".answer-box");
    box.innerText = "";
    box.classList.remove("green");
    el.querySelector(".solution-box").innerText = "";
    const movedTitle = el.querySelector(".moved-title");
    if (movedTitle) movedTitle.remove();
  });
  document.querySelectorAll(".title").forEach(t => {
    t.classList.remove("selected");
    t.style.display = "block";
  });
  document.getElementById("result3").innerText = "";
};

// ========== Sprachbausteine Teil 1 ==========
function renderSprach1() {
  return `
    <h2>Sprachbausteine Teil 1</h2>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <div style="flex:1.5; min-width:300px; line-height:1.8;">
        Liebe Vanessa,<br>
        danke für deinen Brief, 
        <span class="gap" id="gap1">[1]</span>
        ich mich total gefreut habe. Du fragst dich bestimmt, warum du schon drei Wochen 
        <span class="gap" id="gap2">[2]</span>
        von mir gehört hast, oder? Ich war mit meiner Gastfamilie in Urlaub. Vierzehn Tage im Allgäu – mit den Kindern Stefan, Anja und Karina.
        <br><br>
        Du weißt 
        <span class="gap" id="gap3">[3]</span>
        selbst, wie anstrengend es ist, wenn man ständig drei kleine Kinder um sich hat, die pausenlos unterhalten werden möchten. 
        <span class="gap" id="gap4">[4]</span>
        ist es übrigens in deiner Au-pair-Familie mit der kleinen Dorothea?
        <br><br>
        Das Allgäu liegt in Süddeutschland am Fuß 
        <span class="gap" id="gap5">[5]</span>
        Alpen. Wir sind fast jeden Tag gewandert, immer bergauf und bergab. Den Kindern und mir haben ständig die Füße weh 
        <span class="gap" id="gap6">[6]</span>
        , doch meine Gasteltern, Herr und Frau Zimmer, sind einfach immer weitergelaufen. Die Deutschen lieben es nämlich, in der Natur spazieren zu gehen, bis sie vor Erschöpfung 
        <span class="gap" id="gap7">[7]</span>
        .
        <br><br>
        Unterwegs haben wir manchmal an einer sogenannten "Wassertretstelle" Rast gemacht. Das sind kleine Wasserbecken, die oft mitten im Wald liegen. Durch das Becken fließt ein Bach mit eiskaltem Wasser, das direkt von den Bergen kommt. Stell 
        <span class="gap" id="gap8">[8]</span>
        vor, alle Wanderer ziehen ihre Schuhe und Strümpfe aus und laufen durch dieses Becken. Als ich meinen Fuß in dieses kalte Wasser getaucht hatte, dachte ich, dass ich gleich sterben muss.
        <br><br>
        Am Wochenende haben wir alle Minigolf gespielt. Dabei muss ein Golfball mit einem Schläger in ein etwa zehn Meter entferntes Loch geschlagen werden. Aber vor dem Loch gibt es 
        <span class="gap" id="gap9">[9]</span>
        Menge Hindernisse: Gräben, kleine Hügel, Tunnel. Der Spieler, dessen Ball mit den wenigsten Schlägen im Loch ankommt, hat gewonnen. Die Kinder wollten gar nicht mehr 
        <span class="gap" id="gap10">[10]</span>
        aufhören.
        <br><br>
        Jetzt muss ich aber Schluss machen, die Kinder warten auf ihr Abendessen, denn die Zimmers sind heute nicht da: Sie wandern mal wieder.<br>
        Viele Grüße<br>
        deine Mercedes
      </div>
      <div style="flex:1; min-width:250px;" id="optionsContainerSprach1"></div>
    </div>
    <button onclick="window.checkSprach1()">تصحيح</button>
    <button onclick="window.resetSprach1()">🔄 إعادة</button>
    <p id="resultSprach1"></p>
  `;
}

function initSprach1() {
  sprachUser = {};
  currentGap = null;
  const container = document.getElementById("optionsContainerSprach1");
  if (!container) return;
  container.innerHTML = "";
  
  for (let i = 1; i <= 10; i++) {
    const groupDiv = document.createElement("div");
    groupDiv.className = "option-group";
    groupDiv.innerHTML = `<strong style="display:block; margin-bottom:8px;">الفراغ ${i}</strong>`;
    
    exam1Data.sprachOptions[i].forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.className = "option-btn";
      btn.setAttribute("data-gap", i);
      btn.setAttribute("data-value", opt);
      btn.onclick = () => {
        const gapId = parseInt(btn.getAttribute("data-gap"));
        const optionValue = btn.getAttribute("data-value");
        if (sprachUser[gapId] !== undefined) {
          const prevBtn = document.querySelector(`.option-btn[data-gap="${gapId}"][data-value="${sprachUser[gapId]}"]`);
          if (prevBtn) prevBtn.classList.remove("selected-option");
        }
        const gapSpan = document.getElementById("gap" + gapId);
        gapSpan.innerText = optionValue;
        sprachUser[gapId] = optionValue;
        document.querySelectorAll(`.option-btn[data-gap="${gapId}"]`).forEach(b => b.classList.remove("selected-option"));
        btn.classList.add("selected-option");
        document.querySelectorAll(".gap").forEach(g => g.classList.remove("active-gap"));
        currentGap = null;
      };
      groupDiv.appendChild(btn);
    });
    container.appendChild(groupDiv);
  }
  
  document.querySelectorAll(".gap").forEach((gapSpan, idx) => {
    gapSpan.onclick = (e) => {
      e.stopPropagation();
      const gapNum = parseInt(gapSpan.id.replace("gap", ""));
      if (currentGap === gapNum) {
        currentGap = null;
        gapSpan.classList.remove("active-gap");
        document.querySelectorAll(".option-btn").forEach(btn => {
          btn.style.background = "white";
          btn.style.color = "black";
        });
      } else {
        document.querySelectorAll(".gap").forEach(g => g.classList.remove("active-gap"));
        gapSpan.classList.add("active-gap");
        currentGap = gapNum;
        document.querySelectorAll(".option-btn").forEach(btn => {
          const btnGap = parseInt(btn.getAttribute("data-gap"));
          if (btnGap === gapNum) {
            btn.style.background = "#e7f1ff";
            btn.style.borderColor = "#0d6efd";
          } else {
            btn.style.background = "white";
            btn.style.color = "black";
          }
        });
      }
    };
  });
}

window.checkSprach1 = function() {
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    const gap = document.getElementById("gap" + i);
    gap.classList.remove("correct-gap", "wrong-gap");
    if (sprachUser[i] === exam1Data.sprachAnswers[i]) {
      gap.classList.add("correct-gap");
      score++;
    } else {
      gap.classList.add("wrong-gap");
      gap.innerText = exam1Data.sprachAnswers[i];
    }
  }
  const final = (score * (15 / 10)).toFixed(2);
  document.getElementById("resultSprach1").innerText = "النتيجة: " + final + " / 15";
};

window.resetSprach1 = function() {
  sprachUser = {};
  currentGap = null;
  for (let i = 1; i <= 10; i++) {
    const gap = document.getElementById("gap" + i);
    gap.innerText = "[" + i + "]";
    gap.classList.remove("correct-gap", "wrong-gap", "active-gap");
  }
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.classList.remove("selected-option");
    btn.style.background = "white";
    btn.style.color = "black";
  });
  document.getElementById("resultSprach1").innerText = "";
};

// ========== Sprachbausteine Teil 2 ==========
function renderSprach2() {
  return `
    <h2>Sprachbausteine Teil 2</h2>
    <div style="display:flex; gap:20px; flex-wrap:wrap;">
      <div style="flex:1.5; min-width:300px; line-height:1.8;">
        Selbst ist der Mann. Von der Wahrheit dieser alten deutschen Redewendung haben Frauen Generationen lang geträumt, wenn es um typische Hausarbeiten wie Waschen, Putzen oder Kochen ging. Zumindest bei Letzterem scheint sich jedoch in der letzten Jahren vieles zu ändern. 
        <span class="gap2" id="gap2_1">[1]</span>
        , immer mehr Männer in Deutschland greifen jetzt selbst zum Kochtopf. Ein Grund 
        <span class="gap2" id="gap2_2">[2]</span>
        diese Entwicklung mag sein, dass es immer mehr Ein-Personen-Haushalte in Deutschland gibt. Es ist einfach niemand anderes da, der die Kocharbeit übernehmen könnte. Und Hunger zwingt bekanntlich zum Handeln. Andererseits ist das Kochen inzwischen ein allgemein akzeptiertes Hobby geworden, besonders unter Männern. Doch welch ein Unterschied besteht 
        <span class="gap2" id="gap2_3">[3]</span>
        den Ansprüchen einer traditionellen Hausfrau und denen eines Hobbykochs, was die Ausstattung der Küche angeht! Nicht 
        <span class="gap2" id="gap2_4">[4]</span>
        Topf darf es für den selbsternannten Drei-Sterne-Küchenchef sein: Gebürsteter Edelstahl mit versiegelter Antihaftbeschichtung und integrierter digitaler Temperaturanzeige ist der Mindeststandard für einen echten kochenden Mann. Alles andere gilt als stillos.
        <br><br>
        Die zweite Voraussetzung 
        <span class="gap2" id="gap2_5">[5]</span>
        , dass die Gerichte auch gelingen, ist das Wissen, wie man welche Speise am besten zubereitet. Zu diesem Zweck bieten die Buchhandlungen Berge von Kochbüchern an - mit Rezepten von Alaska bis Zimbabwe, mit oder ohne Fleisch, für zu Dicke und zu Dünne. Jetzt hängt es nur noch 
        <span class="gap2" id="gap2_6">[6]</span>
        ab, was der Hobbykoch aus den Kochideen der Buchautoren macht. Wird es ein exzellentes Mahl oder wäre unser "Chefkoch" nicht doch lieber zum Dönerstand um die Ecke gegangen? Überraschungen gehören zum Kochen dazu. Helfen die Bücher nicht 
        <span class="gap2" id="gap2_7">[7]</span>
        , bieten zum Beispiel die Volkshochschulen zahlreiche Kochkurse an, die in der Regel - zumeist von kochwilligen Männern - gut besucht sind. Das Kursangebot umfasst neben deutscher Hausmannskost wie Schnitzel, Krautwickel oder Rinderbraten zumeist auch die mediterrane und die asiatische Küche. Das führt 
        <span class="gap2" id="gap2_8">[8]</span>
        , dass man(n) zu Hause immer öfter international kocht.
        <br><br>
        Das größte Problem der Hobbyköche ist aber, 
        <span class="gap2" id="gap2_9">[9]</span>
        es viel zu aufwändig ist, für sich alleine zu kochen. Daher sind zurzeit Internetseiten wie www.allein-kochen-ist-doof.de beliebt, wo sich Hobbyköche und -köchinnen Kochpartner für das gemeinsame Kochen und Essen suchen können. Das Interessante 
        <span class="gap2" id="gap2_10">[10]</span>
        ist, dass dabei unsere männlichen Chefköche feststellen müssen, dass es andere Menschen gibt, die mit vielleicht weniger Aufwand genauso gut ein Festmahl zubereiten können wie sie: nämlich die Frauen.
      </div>
      <div style="flex:1; min-width:250px;" id="connectorsContainerSprach2"></div>
    </div>
    <button onclick="window.checkSprach2()">تصحيح</button>
    <button onclick="window.resetSprach2()">🔄 إعادة</button>
    <p id="resultSprach2"></p>
  `;
}

function initSprach2() {
  sprach2User = {};
  currentGap2 = null;
  selectedConnector = null;
  const container = document.getElementById("connectorsContainerSprach2");
  if (!container) return;
  container.innerHTML = "";
  
  const groupDiv = document.createElement("div");
  groupDiv.className = "connector-group";
  groupDiv.innerHTML = `<strong style="display:block; margin-bottom:8px;">أدوات الربط</strong>`;
  
  exam1Data.connectorsList.forEach(connector => {
    const btn = document.createElement("button");
    btn.innerText = connector;
    btn.className = "connector-btn";
    btn.setAttribute("data-value", connector);
    btn.onclick = () => {
      const value = btn.getAttribute("data-value");
      if (Object.values(sprach2User).includes(value)) return;
      if (currentGap2 !== null) {
        if (sprach2User[currentGap2] !== undefined) {
          const oldValue = sprach2User[currentGap2];
          const oldBtn = document.querySelector(`.connector-btn[data-value="${oldValue}"]`);
          if (oldBtn) oldBtn.classList.remove("selected-connector");
        }
        sprach2User[currentGap2] = value;
        const gapSpan = document.getElementById("gap2_" + currentGap2);
        gapSpan.innerText = value;
        btn.classList.add("selected-connector");
        document.querySelectorAll(".gap2").forEach(g => g.classList.remove("active-gap"));
        currentGap2 = null;
      } else {
        document.querySelectorAll(".connector-btn").forEach(b => b.classList.remove("selected-connector"));
        btn.classList.add("selected-connector");
        selectedConnector = value;
      }
    };
    groupDiv.appendChild(btn);
  });
  container.appendChild(groupDiv);
  
  document.querySelectorAll(".gap2").forEach((gapSpan) => {
    gapSpan.onclick = (e) => {
      e.stopPropagation();
      const gapNum = parseInt(gapSpan.id.replace("gap2_", ""));
      if (selectedConnector !== null) {
        if (Object.values(sprach2User).includes(selectedConnector)) {
          selectedConnector = null;
          document.querySelectorAll(".connector-btn").forEach(b => b.classList.remove("selected-connector"));
          return;
        }
        if (sprach2User[gapNum] !== undefined) {
          const oldValue = sprach2User[gapNum];
          const oldBtn = document.querySelector(`.connector-btn[data-value="${oldValue}"]`);
          if (oldBtn) oldBtn.classList.remove("selected-connector");
        }
        sprach2User[gapNum] = selectedConnector;
        gapSpan.innerText = selectedConnector;
        selectedConnector = null;
        document.querySelectorAll(".connector-btn").forEach(b => b.classList.remove("selected-connector"));
        return;
      }
      if (currentGap2 === gapNum) {
        currentGap2 = null;
        gapSpan.classList.remove("active-gap");
      } else {
        document.querySelectorAll(".gap2").forEach(g => g.classList.remove("active-gap"));
        gapSpan.classList.add("active-gap");
        currentGap2 = gapNum;
      }
    };
  });
}

window.checkSprach2 = function() {
  let score = 0;
  for (let i = 1; i <= 10; i++) {
    const gap = document.getElementById("gap2_" + i);
    gap.classList.remove("correct-gap2", "wrong-gap2");
    if (sprach2User[i] === exam1Data.sprach2Answers[i]) {
      gap.classList.add("correct-gap2");
      score++;
    } else {
      gap.classList.add("wrong-gap2");
      gap.innerText = exam1Data.sprach2Answers[i];
    }
  }
  const final = (score * (15 / 10)).toFixed(2);
  document.getElementById("resultSprach2").innerText = "النتيجة: " + final + " / 15";
};

window.resetSprach2 = function() {
  sprach2User = {};
  currentGap2 = null;
  selectedConnector = null;
  for (let i = 1; i <= 10; i++) {
    const gap = document.getElementById("gap2_" + i);
    gap.innerText = "[" + i + "]";
    gap.classList.remove("correct-gap2", "wrong-gap2", "active-gap");
  }
  document.querySelectorAll(".connector-btn").forEach(btn => {
    btn.classList.remove("selected-connector");
  });
  document.getElementById("resultSprach2").innerText = "";
};

// ========== Hören Teil 1 ==========
function renderH1() {
  let html = '<p>اختر: ✔ صحيح / ✖ خطأ</p><div id="h1_questions"></div>';
  return html;
}

function initH1() {
  h1User = {};
  const container = document.getElementById("h1_questions");
  if (!container) return;
  container.innerHTML = "";
  
  exam1Data.h1Data.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "h-question";
    div.innerHTML = `
      <span>${i + 1}. ${q}</span>
      <div>
        <button class="h-btn" onclick="window.selectH1(${i}, true)">✔</button>
        <button class="h-btn" onclick="window.selectH1(${i}, false)">✖</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.selectH1 = function(i, val) {
  h1User[i] = val;
  const parent = document.getElementById("h1_questions").children[i];
  const buttons = parent.querySelectorAll(".h-btn");
  buttons.forEach(btn => btn.classList.remove("active-true", "active-false"));
  if (val) {
    buttons[0].classList.add("active-true");
  } else {
    buttons[1].classList.add("active-false");
  }
};

window.checkH1 = function() {
  let score = 0;
  const questions = document.querySelectorAll("#h1_questions .h-question");
  for (let i = 0; i < exam1Data.h1Data.length; i++) {
    const correct = exam1Data.h1Correct.includes(i + 1);
    const user = h1User[i];
    const qDiv = questions[i];
    const buttons = qDiv.querySelectorAll(".h-btn");
    const btnTrue = buttons[0];
    const btnFalse = buttons[1];
    btnTrue.style.background = "";
    btnFalse.style.background = "";
    qDiv.style.borderColor = "#ccc";
    if (user === correct) {
      score++;
      qDiv.style.borderColor = "#28a745";
      if (correct) {
        btnTrue.style.background = "#28a745";
        btnTrue.style.color = "white";
      } else {
        btnFalse.style.background = "#28a745";
        btnFalse.style.color = "white";
      }
    } else {
      qDiv.style.borderColor = "#dc3545";
      if (user === true) {
        btnTrue.style.background = "#dc3545";
        btnTrue.style.color = "white";
      } else if (user === false) {
        btnFalse.style.background = "#dc3545";
        btnFalse.style.color = "white";
      }
      if (correct) {
        btnTrue.style.background = "#28a745";
        btnTrue.style.color = "white";
      } else {
        btnFalse.style.background = "#28a745";
        btnFalse.style.color = "white";
      }
    }
  }
  const final = (score * (25 / 5)).toFixed(2);
  document.getElementById("resultH1").innerText = "النتيجة: " + final + " / 25";
};

window.resetH1 = function() {
  h1User = {};
  initH1();
  document.getElementById("resultH1").innerText = "";
};

// ========== Hören Teil 2 ==========
function renderH2() {
  return `
    <div id="variantButtonsH2"></div>
    <div id="h2_questions"></div>
    <button onclick="window.checkH2()">تصحيح</button>
    <button onclick="window.resetH2()">🔄 إعادة</button>
    <p id="resultH2"></p>
  `;
}

function initVariants() {
  const container = document.getElementById("variantButtonsH2");
  if (!container) return;
  container.innerHTML = "";
  
  for (let v in exam1Data.h2Variants) {
    const btn = document.createElement("button");
    btn.innerText = exam1Data.h2Variants[v].title;
    btn.style.margin = "5px";
    btn.style.padding = "8px 15px";
    btn.style.border = "1px solid #ccc";
    btn.style.borderRadius = "8px";
    btn.style.cursor = "pointer";
    btn.style.background = "white";
    btn.onclick = () => {
      currentVariant = parseInt(v);
      h2User = {};
      document.querySelectorAll("#variantButtonsH2 button").forEach(b => {
        b.style.background = "white";
        b.style.color = "black";
      });
      btn.style.background = "#0d6efd";
      btn.style.color = "white";
      initH2();
    };
    container.appendChild(btn);
  }
  initH2();
}

function initH2() {
  const container = document.getElementById("h2_questions");
  if (!container) return;
  container.innerHTML = "";
  h2User = {};
  const data = exam1Data.h2Variants[currentVariant];
  
  data.questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "h-question";
    div.innerHTML = `
      <span>${i + 1}. ${q}</span>
      <div>
        <button class="h-btn" onclick="window.selectH2(${i}, true)">✔</button>
        <button class="h-btn" onclick="window.selectH2(${i}, false)">✖</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.selectH2 = function(i, val) {
  h2User[i] = val;
  const parent = document.getElementById("h2_questions").children[i];
  const buttons = parent.querySelectorAll(".h-btn");
  buttons.forEach(btn => btn.classList.remove("active-true", "active-false"));
  if (val) {
    buttons[0].classList.add("active-true");
  } else {
    buttons[1].classList.add("active-false");
  }
};

window.checkH2 = function() {
  const correctList = exam1Data.h2Variants[currentVariant].correct;
  let score = 0;
  const questions = document.querySelectorAll("#h2_questions .h-question");
  for (let i = 0; i < 10; i++) {
    const correct = correctList.includes(i + 1);
    const user = h2User[i];
    const qDiv = questions[i];
    const buttons = qDiv.querySelectorAll(".h-btn");
    const btnTrue = buttons[0];
    const btnFalse = buttons[1];
    btnTrue.style.background = "";
    btnFalse.style.background = "";
    qDiv.style.borderColor = "#ccc";
    if (user === correct) {
      score++;
      qDiv.style.borderColor = "#28a745";
      if (correct) {
        btnTrue.style.background = "#28a745";
        btnTrue.style.color = "white";
      } else {
        btnFalse.style.background = "#28a745";
        btnFalse.style.color = "white";
      }
    } else {
      qDiv.style.borderColor = "#dc3545";
      if (user === true) {
        btnTrue.style.background = "#dc3545";
        btnTrue.style.color = "white";
      } else if (user === false) {
        btnFalse.style.background = "#dc3545";
        btnFalse.style.color = "white";
      }
      if (correct) {
        btnTrue.style.background = "#28a745";
        btnTrue.style.color = "white";
      } else {
        btnFalse.style.background = "#28a745";
        btnFalse.style.color = "white";
      }
    }
  }
  const final = (score * (25 / 10)).toFixed(2);
  document.getElementById("resultH2").innerText = "النتيجة: " + final + " / 25";
};

window.resetH2 = function() {
  h2User = {};
  initH2();
  document.getElementById("resultH2").innerText = "";
};

// ========== Hören Teil 3 ==========
function renderH3() {
  return '<div id="h3_questions"></div><button onclick="window.checkH3()">تصحيح</button><button onclick="window.resetH3()">🔄 إعادة</button><p id="resultH3"></p>';
}

function initH3() {
  h3User = {};
  const container = document.getElementById("h3_questions");
  if (!container) return;
  container.innerHTML = "";
  
  exam1Data.h3Data.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "h-question";
    div.innerHTML = `
      <span>${i + 1}. ${q}</span>
      <div>
        <button class="h-btn" onclick="window.selectH3(${i}, true)">✔</button>
        <button class="h-btn" onclick="window.selectH3(${i}, false)">✖</button>
      </div>
    `;
    container.appendChild(div);
  });
}

window.selectH3 = function(i, val) {
  h3User[i] = val;
  const parent = document.getElementById("h3_questions").children[i];
  const buttons = parent.querySelectorAll(".h-btn");
  buttons.forEach(btn => btn.classList.remove("active-true", "active-false"));
  if (val) {
    buttons[0].classList.add("active-true");
  } else {
    buttons[1].classList.add("active-false");
  }
};

window.checkH3 = function() {
  let score = 0;
  const questions = document.querySelectorAll("#h3_questions .h-question");
  for (let i = 0; i < exam1Data.h3Data.length; i++) {
    const correct = exam1Data.h3Correct.includes(i + 1);
    const user = h3User[i];
    const qDiv = questions[i];
    const buttons = qDiv.querySelectorAll(".h-btn");
    const btnTrue = buttons[0];
    const btnFalse = buttons[1];
    btnTrue.style.background = "";
    btnFalse.style.background = "";
    qDiv.style.borderColor = "#ccc";
    if (user === correct) {
      score++;
      qDiv.style.borderColor = "#28a745";
      if (correct) {
        btnTrue.style.background = "#28a745";
        btnTrue.style.color = "white";
      } else {
        btnFalse.style.background = "#28a745";
        btnFalse.style.color = "white";
      }
    } else {
      qDiv.style.borderColor = "#dc3545";
      if (user === true) {
        btnTrue.style.background = "#dc3545";
        btnTrue.style.color = "white";
      } else if (user === false) {
        btnFalse.style.background = "#dc3545";
        btnFalse.style.color = "white";
      }
      if (correct) {
        btnTrue.style.background = "#28a745";
        btnTrue.style.color = "white";
      } else {
        btnFalse.style.background = "#28a745";
        btnFalse.style.color = "white";
      }
    }
  }
  const final = (score * (25 / 5)).toFixed(2);
  document.getElementById("resultH3").innerText = "النتيجة: " + final + " / 25";
};

window.resetH3 = function() {
  h3User = {};
  initH3();
  document.getElementById("resultH3").innerText = "";
};

// ========== دالة التهيئة الرئيسية ==========
function initExam() {
  renderExam();
}

// تصدير الدوال إلى window
window.showTeil = function(n, parts) {
  for (let i = 1; i <= 8; i++) {
    const el = parts[`teil${i}`];
    if (el) el.style.display = (i === n) ? "block" : "none";
  }
};