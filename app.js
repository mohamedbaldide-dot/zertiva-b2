// ============================================
// app.js - التطبيق الرئيسي
// ============================================

console.log("🚀 app.js تم تحميله");

let currentSkill = null;
let currentExamId = null;
let currentExamData = null;
let currentTeilData = null;
let currentTeilIndex = 0;
let teilExamsList = [];

// ========== تهيئة الصفحة ==========
function start() {
  showPage('home');
}

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// ========== عرض الأجزاء (Teile) ==========
function renderTeile() {
  const container = document.getElementById('teileList');
  if (!container) return;
  
  container.innerHTML = '';
  
  const teile = [
    { id: 'lesen1', name: '📖 Lesen Teil 1', type: 'matching' },
    { id: 'lesen2', name: '📖 Lesen Teil 2', type: 'teil2' },
    { id: 'lesen3', name: '📖 Lesen Teil 3', type: 'teil3' },
    { id: 'hoeren1', name: '🎧 Hören Teil 1', type: 'truefalse' },
    { id: 'hoeren2', name: '🎧 Hören Teil 2', type: 'truefalse' },
    { id: 'hoeren3', name: '🎧 Hören Teil 3', type: 'truefalse' },
    { id: 'sprach1', name: '📝 Sprachbausteine Teil 1', type: 'sprach1' },
    { id: 'sprach2', name: '📝 Sprachbausteine Teil 2', type: 'sprach2' },
    { id: 'schreiben', name: '✍️ Schreiben', type: 'schreiben' }
  ];
  
  teile.forEach(teil => {
    const btn = document.createElement('button');
    btn.className = 'teil-btn';
    btn.innerHTML = teil.name;
    btn.onclick = () => loadTeilExams(teil.id, teil.name, teil.type);
    container.appendChild(btn);
  });
}

// ========== تحميل امتحانات Teil معين ==========
async function loadTeilExams(teilId, teilName, teilType) {
  currentSkill = teilId;
  currentTeilData = { id: teilId, name: teilName, type: teilType };
  
  const container = document.getElementById('examsList');
  if (!container) return;
  
  container.innerHTML = '<div class="loading">⏳ جاري تحميل الامتحانات...</div>';
  
  try {
    const exams = [];
    for (let i = 1; i <= 40; i++) {
      const examData = await window.loadExamFromFile(teilId, i);
      if (examData) {
        exams.push({ id: i, data: examData });
      }
    }
    
    if (exams.length === 0) {
      container.innerHTML = '<div class="no-exams">❌ لا توجد امتحانات متاحة حالياً</div>';
      return;
    }
    
    teilExamsList = exams;
    
    container.innerHTML = `
      <div class="exams-header">
        <h3>📚 ${teilName}</h3>
        <p>عدد الامتحانات المتاحة: ${exams.length}</p>
      </div>
      <div class="exams-grid"></div>
    `;
    
    const grid = container.querySelector('.exams-grid');
    exams.forEach((exam, idx) => {
      const examCard = document.createElement('div');
      examCard.className = 'exam-card';
      examCard.innerHTML = `
        <div class="exam-number">${idx + 1}</div>
        <div class="exam-title">${exam.data.title || `Exam ${idx + 1}`}</div>
        <button class="start-exam-btn">ابدأ الامتحان ▶</button>
      `;
      
      examCard.querySelector('.start-exam-btn').onclick = () => {
        currentExamId = exam.id;
        currentExamData = exam.data;
        startExam();
      };
      
      grid.appendChild(examCard);
    });
    
  } catch (error) {
    console.error("خطأ في تحميل الامتحانات:", error);
    container.innerHTML = '<div class="error">⚠️ حدث خطأ في تحميل الامتحانات</div>';
  }
}

// ========== بدء الامتحان ==========
async function startExam() {
  if (!currentExamData) {
    console.error("لا توجد بيانات امتحان");
    return;
  }
  
  showPage('exam');
  
  const titleElement = document.getElementById('examTitle');
  if (titleElement) {
    titleElement.textContent = currentExamData.title || `${currentTeilData?.name || 'Exam'} - ${currentExamId}`;
  }
  
  // إخفاء جميع الأقسام أولاً
  const sections = ['teil1', 'teil2', 'teil3', 'sprach1', 'sprach2', 'hoeren1', 'hoeren2', 'hoeren3', 'schreiben'];
  sections.forEach(section => {
    const el = document.getElementById(section);
    if (el) el.style.display = 'none';
  });
  
  // علاج خاص لـ Schreiben
  if (currentTeilData.id === 'schreiben') {
    const schreibenSection = document.getElementById('schreiben');
    if (schreibenSection) {
      schreibenSection.style.display = 'block';
    }
    if (window.loadSchreibenExam) {
      window.loadSchreibenExam(currentExamData);
    }
    updateExamNavButtons();
    return;
  }
  
  // عرض القسم المناسب حسب النوع
  const targetSection = document.getElementById(currentSkill);
  if (targetSection) {
    targetSection.style.display = 'block';
  }
  
  // تحميل البيانات حسب النوع
  switch (currentTeilData.type) {
    case 'matching':
      if (window.loadMatchingExam) {
        window.loadMatchingExam(currentExamData);
      }
      break;
    case 'teil2':
      if (window.loadTeil2Exam) {
        window.loadTeil2Exam(currentExamData);
      }
      break;
    case 'teil3':
      if (window.loadTeil3Exam) {
        window.loadTeil3Exam(currentExamData);
        setTimeout(() => {
          if (window.currentTeil3Data) {
            window.currentTeil3DataItems = window.currentTeil3Data.items;
            window.currentTeil3DataSituations = window.currentTeil3Data.situations;
            window.teil3UserAnswersGlobal = window.teil3UserAnswers;
          }
        }, 100);
      }
      break;
    case 'sprach1':
      if (window.loadSprach1Exam) {
        window.loadSprach1Exam(currentExamData);
      }
      break;
    case 'sprach2':
      if (window.loadSprach2Exam) {
        window.loadSprach2Exam(currentExamData);
        setTimeout(() => {
          if (window.currentSprach2Data) {
            window.currentSprach2DataOptions = window.currentSprach2Data.options;
            window.sprach2UserAnswersGlobal = window.sprach2UserAnswers;
          }
        }, 100);
      }
      break;
    case 'truefalse':
      if (currentExamData.items && window.buildTrueFalseExam) {
        window.buildTrueFalseExam(targetSection, currentExamData.items, currentExamData.note || null);
        setTimeout(() => {
          window.currentTrueFalseQuestions = currentExamData.items;
        }, 100);
      }
      break;
    default:
      console.warn("نوع غير معروف:", currentTeilData.type);
  }
  
  // تشغيل التحسينات بعد تحميل المحتوى
  setTimeout(() => {
    if (window.initAllEnhancements) {
      window.initAllEnhancements();
    }
  }, 200);
  
  updateExamNavButtons();
}

// ========== التنقل بين الامتحانات ==========
function updateExamNavButtons() {
  const prevBtn = document.getElementById('prevExamBtn');
  const nextBtn = document.getElementById('nextExamBtn');
  
  if (!prevBtn || !nextBtn) return;
  
  const currentIndex = teilExamsList.findIndex(e => e.id === currentExamId);
  
  prevBtn.disabled = currentIndex <= 0;
  nextBtn.disabled = currentIndex >= teilExamsList.length - 1;
  
  prevBtn.onclick = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      currentExamId = teilExamsList[newIndex].id;
      currentExamData = teilExamsList[newIndex].data;
      startExam();
    }
  };
  
  nextBtn.onclick = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < teilExamsList.length) {
      currentExamId = teilExamsList[newIndex].id;
      currentExamData = teilExamsList[newIndex].data;
      startExam();
    }
  };
}

// ========== دوال الرجوع ==========
function goBackToList() {
  showPage('list');
  renderTeile();
  currentExamId = null;
  currentExamData = null;
}

function goHome() {
  showPage('home');
}

function goToTeile() {
  showPage('list');
  renderTeile();
}

// ========== ربط الأزرار عند تحميل الصفحة ==========
document.addEventListener('DOMContentLoaded', () => {
  console.log("🟢 DOM loaded");
  
  const startBtn = document.getElementById('startBtn');
  if (startBtn) {
    startBtn.onclick = () => {
      renderTeile();
      showPage('list');
    };
  }
  
  const backArrowBtn = document.getElementById('backArrowFromExam');
  if (backArrowBtn) {
    backArrowBtn.onclick = goBackToList;
  }
  
  const backToListBtn = document.getElementById('backToListBtn');
  if (backToListBtn) {
    backToListBtn.onclick = goBackToList;
  }
  
  const backHomeBtn = document.getElementById('backHomeBtn');
  if (backHomeBtn) {
    backHomeBtn.onclick = goHome;
  }
  
  showPage('home');
}); 
