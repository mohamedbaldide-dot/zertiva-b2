// ============================================
// exam1.js - بيانات الامتحان فقط
// ============================================

const examData = {
  id: 1,
  title: "📚 امتحان 1 - sport ist gesund",
  
  // ========== Lesen Teil 1 ==========
  lesen1: {
    maxScore: 25,
    texts: [
      "An der Ostküste Attikas in Griechenland lag in der Antike der Orte Marathon. Dort siegte der griechische König Milthiades im Jahr 490 vor Christus über das Heer der Perser...",
      "Warum soll sich der Mensch nun auf Straßen und Wegen fortbewegen? Sich in Feld und Wald, über Stock und Stein fortzubewegen, ist mindestens ebenso interessant...",
      "Schweizer Forscher haben herausgefunden, dass nur 6 Minuten Hochleistungstraining pro Woche ausreichen...",
      "Mehr Bewegung als Ausgleich für zu langes Sitzen im Büro und in der Freizeit ist zurzeit angesagt...",
      "Viele frischgebackene Eltern stehen einem riesigen Angebot an Kinderwagen gegenüber..."
    ],
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
    correct: { 1: "h", 2: "f", 3: "g", 4: "a", 5: "d" }
  },
  
  // ========== Lesen Teil 2 ==========
  lesen2: {
    maxScore: 25,
    text: "Als Helmut Scherer vor genau 50 Jahren zum ersten Mal mit seinem Bollerwagen durch die westfälische Kleinstadt Unna zog, wurde er von den Leuten ausgelacht...",
    questions: [
      {
        q: "Helmut Scherer",
        options: {
          a: "führt in Unna einen kleinen Karnevalsumzug durch",
          b: "ist in Unna seit 50 Jahren eine gefeierte Persönlichkeit",
          c: "veranstaltet den einzigen Karnevalsumzug der Welt"
        }
      },
      {
        q: "Auf seinem Handwagen",
        options: {
          a: "fährt traditionell ein blondes Schulmädchen mit",
          b: "präsentiert er kleine Szenen, die auf den Alltag Bezug nehmen",
          c: "stellt er sozialkritische Themen auf witzige Art und Weise dar"
        }
      },
      {
        q: "Die Bevölkerung von Unna",
        options: {
          a: "hatte zunächst wenig Verständnis für Helmut Scherer",
          b: "hielt anfangs Helmut Scherer für kühl und nüchtern",
          c: "verhinderte Helmut Scherers ersten Karnevalsumzug"
        }
      },
      {
        q: "Der kleinste Karnevalsumzug der Welt",
        options: {
          a: "hat Helmut Scherer sogar Geld eingebracht",
          b: "ist heute eine gute Reklame für die Stadt Unna",
          c: "wird in Zukunft von einer ganzen Gruppe von Leuten durchgeführt"
        }
      },
      {
        q: "Helmut Scherer",
        options: {
          a: "hat an Karnevalsumzügen in mehreren Städten teilgenommen",
          b: "hat inzwischen in ganz Deutschland Fan-Clubs",
          c: "sucht einen Nachfolger"
        }
      }
    ],
    correct: { 1: "a", 2: "c", 3: "a", 4: "b", 5: "a" }
  },
  
  // ========== Lesen Teil 3 ==========
  lesen3: {
    texts: [
      "Die Nachfrage nach individueller Farb- und Stilberatung ist groß...",
      "Die meisten Menschen kennen keine Strategien, wie sie ihr Lernverhalten trainieren können...",
      "Dieses Buch handelt von dem Umgang der Menschen miteinander...",
      "Tim Gallwey entwickelte die Theorie vom Tennis-Spiel, das sich im Kopf abspielt...",
      "Jeder Mensch kann seine kommunikativen Möglichkeiten entdecken...",
      "Gute Umgangsformen sind wieder 'in'. Aber gilt das auch in der Schule?",
      "Manche Missverständnisse entstehen, wenn Menschen miteinander reden...",
      "Der Körper lügt nicht, Gesten und Gebärden decken die Ebene des Unbewusstsein auf...",
      "Die Konkurrenz auf dem Arbeitsmarkt um immer knapper werdende freie Stellen ist groß...",
      "Dieses Buch ist ein Leitfaden für alle, die Teamsitzungen durchführen...",
      "Dieses Trainingsbuch ist für den Arbeitsplatz und für zu Hause gedacht...",
      "Viele Menschen wissen nicht mehr, wo Ihnen der Kopf steht..."
    ],
    titles: [
      "لا شيء مناسب",
      "Eine Bekannte interessiert sich für Bücher über den Tennissport",
      "Ein Ehepaar steht unter Stress und möchte wieder mehr Zeit haben",
      "Eine Bekannte möchte bei ihren Partys eine perfekte Gastgeberin sein",
      "Eine Studentin sucht Informationen für besseres Lernen",
      "Ein Bekannter möchte wissen, welche Botschaften durch Gestik vermittelt werden",
      "Eine Bekannte möchte ihr äußeres Erscheinungsbild optimieren",
      "Ein Bekannter ist unsicher bei Vorstellungsgesprächen",
      "Ein Bekannter schreibt über gesellschaftliche Normen verschiedener Jahrhunderte",
      "Ein Bekannter möchte Kalligraphie lernen",
      "Eine Bekannte hat Angst vor freiem Sprechen auf Konferenzen"
    ],
    correct: { 1: 6, 2: 4, 3: 8, 4: 1, 5: 10, 6: 0, 7: 0, 8: 5, 9: 7, 10: 0, 11: 0, 12: 2 }
  }
};

// عند تحميل الملف، نمرر البيانات للنظام
if (typeof window.loadExam === "function") {
  window.loadExam(examData);
}
