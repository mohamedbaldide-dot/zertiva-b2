// ============================================
// enhancements.js - التعديلات المحسنة
// يدعم: الربط المزدوج لـ Teil 3 + تحسين Sprach2 + عرض الإجابات الصحيحة
// ============================================

console.log("✅ enhancements.js تم تحميله");

// ========== 1. إضافة خاصية الربط المزدوج لـ Teil 3 ==========
// دالة لإضافة خاصية النقر على الفقرة في Teil 3
function enhanceTeil3WithDoubleClick() {
    // البحث عن جميع بطاقات Teil 3 التي لم يتم تحسينها بعد
    const cards = document.querySelectorAll('#teil3 .question-card');
    cards.forEach(card => {
        // تجنب إضافة الحدث أكثر من مرة
        if (card.hasAttribute('data-enhanced')) return;
        
        const dropdownBtn = card.querySelector('.dropdown-btn');
        const dropdownList = card.querySelector('.dropdown-list');
        const questionIndex = card.id.split('_').pop();
        
        if (dropdownBtn && dropdownList) {
            // إضافة خاصية النقر على الفقرة
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(e) {
                // منع التنفيذ إذا كان النقر على الزر أو القائمة
                if (e.target.closest('.dropdown-btn') || e.target.closest('.dropdown-list')) {
                    return;
                }
                // محاكاة النقر على الزر
                dropdownBtn.click();
            });
        }
        
        card.setAttribute('data-enhanced', 'true');
    });
}

// ========== 2. تحسين Sprachbausteine Teil 2 ==========
// دالة لتحسين Sprach2 ليدعم الربط المرن (كلمة أولاً ثم زر أو العكس)
function enhanceSprach2WithFlexibleBinding() {
    // البحث عن جميع أزرار Sprach2 التي لم يتم تحسينها بعد
    const btns = document.querySelectorAll('#sprach2 .sprach2-gap-btn');
    btns.forEach(btn => {
        if (btn.hasAttribute('data-enhanced')) return;
        
        const originalOnClick = btn.onclick;
        
        // إضافة دعم للنقر المزدوج أو الطرق البديلة
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // إذا كان هناك كلمة محددة عالمياً
            if (window.sprach2SelectedWordGlobal) {
                const word = window.sprach2SelectedWordGlobal;
                const questionId = this.id.split('_').pop();
                
                // تنفيذ الربط
                if (window.assignWordToQuestionSprach2) {
                    window.assignWordToQuestionSprach2(questionId, word);
                }
            } else {
                // إذا لم تكن هناك كلمة محددة، نفتح القائمة كالمعتاد
                if (originalOnClick) originalOnClick.call(btn, e);
            }
        });
        
        btn.setAttribute('data-enhanced', 'true');
    });
    
    // تحسين بطاقات الكلمات أيضاً
    const wordCards = document.querySelectorAll('#sprach2 .sprach2-word-card');
    wordCards.forEach(card => {
        if (card.hasAttribute('data-enhanced')) return;
        
        card.addEventListener('click', function(e) {
            const word = this.textContent;
            // تخزين الكلمة المحددة عالمياً
            window.sprach2SelectedWordGlobal = word;
            
            // إزالة التمييز عن جميع البطاقات
            document.querySelectorAll('#sprach2 .sprach2-word-card').forEach(c => {
                c.style.backgroundColor = '#ffffff';
                c.style.border = '1px solid #007bff';
            });
            
            // تمييز البطاقة المحددة
            this.style.backgroundColor = '#ffc107';
            this.style.border = '2px solid #ff9800';
            
            console.log(`✅ تم اختيار الكلمة: ${word}`);
        });
        
        card.setAttribute('data-enhanced', 'true');
    });
}

// ========== 3. تحسين عرض الإجابات الصحيحة ==========
// دالة لعرض الإجابة الصحيحة في Sprach2 حتى لو لم يجب المستخدم
function enhanceSprach2CheckWithCorrectAnswers() {
    const checkBtn = document.querySelector('#sprach2 .check-btn');
    if (!checkBtn || checkBtn.hasAttribute('data-enhanced')) return;
    
    // حفظ الدالة الأصلية
    const originalCheck = checkBtn.onclick;
    
    // استبدالها بوظيفة محسنة
    checkBtn.onclick = function(e) {
        if (originalCheck) originalCheck.call(this, e);
        
        // بعد التصحيح، نعرض الإجابات الصحيحة للأسئلة الفارغة
        setTimeout(() => {
            const options = window.currentSprach2DataOptions || [];
            for (let i = 1; i <= options.length; i++) {
                const btn = document.getElementById(`sprach2_btn_${i}`);
                const userAnswer = window.sprach2UserAnswersGlobal?.[i];
                
                if (btn && !userAnswer && options[i-1]) {
                    // إضافة تلميح الإجابة الصحيحة
                    const correctAnswer = options[i-1].correct;
                    const hintSpan = document.createElement('span');
                    hintSpan.textContent = ` ✅ الصحيح: ${correctAnswer}`;
                    hintSpan.style.color = '#28a745';
                    hintSpan.style.fontSize = '12px';
                    hintSpan.style.marginLeft = '8px';
                    hintSpan.className = 'correct-hint-sprach2';
                    
                    // إزالة أي تلميح قديم
                    const oldHint = btn.parentElement.querySelector('.correct-hint-sprach2');
                    if (oldHint) oldHint.remove();
                    
                    if (!btn.parentElement.querySelector('.correct-hint-sprach2')) {
                        btn.parentElement.appendChild(hintSpan);
                    }
                }
            }
        }, 100);
    };
    
    checkBtn.setAttribute('data-enhanced', 'true');
}

// ========== 4. تحسين Teil 3 لعرض الإجابة الصحيحة ==========
function enhanceTeil3CheckWithCorrectAnswers() {
    const checkBtn = document.querySelector('#teil3 .check-btn');
    if (!checkBtn || checkBtn.hasAttribute('data-enhanced')) return;
    
    const originalCheck = checkBtn.onclick;
    
    checkBtn.onclick = function(e) {
        if (originalCheck) originalCheck.call(this, e);
        
        // بعد التصحيح، نضيف الإجابات الصحيحة للعناصر الفارغة
        setTimeout(() => {
            const items = window.currentTeil3DataItems || [];
            for (let i = 0; i < items.length; i++) {
                const card = document.getElementById(`teil3_item_${i}`);
                const userAnswer = window.teil3UserAnswersGlobal?.[i];
                
                if (card && (!userAnswer || userAnswer === "-- اختر العنوان --")) {
                    const correctIndex = items[i].correct;
                    let correctText = '';
                    
                    if (correctIndex === null) {
                        correctText = 'ليس لها عنوان';
                    } else {
                        const situations = window.currentTeil3DataSituations || [];
                        correctText = `${String.fromCharCode(97 + correctIndex)}. ${situations[correctIndex]}`;
                    }
                    
                    // إضافة رسالة الإجابة الصحيحة إذا لم تكن موجودة
                    if (!card.querySelector('.correct-message-teil3')) {
                        const correctMsg = document.createElement('div');
                        correctMsg.className = 'correct-message-teil3';
                        correctMsg.style.color = '#28a745';
                        correctMsg.style.marginTop = '10px';
                        correctMsg.style.fontSize = '14px';
                        correctMsg.style.fontWeight = 'bold';
                        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${correctText}`;
                        card.appendChild(correctMsg);
                    }
                }
            }
        }, 100);
    };
    
    checkBtn.setAttribute('data-enhanced', 'true');
}

// ========== 5. تحسين Teil 2 لعرض الإجابات الصحيحة ==========
function enhanceTeil2CheckWithCorrectAnswers() {
    const checkBtn = document.querySelector('#teil2 .check-btn');
    if (!checkBtn || checkBtn.hasAttribute('data-enhanced')) return;
    
    const originalCheck = checkBtn.onclick;
    
    checkBtn.onclick = function(e) {
        if (originalCheck) originalCheck.call(this, e);
        
        setTimeout(() => {
            const questions = window.currentTeil2DataQuestions || [];
            for (let i = 0; i < questions.length; i++) {
                const card = document.getElementById(`teil2_q_${i}`);
                const userAnswer = window.teil2UserAnswersGlobal?.[i];
                
                if (card && userAnswer === undefined) {
                    const correctAnswer = questions[i].options[questions[i].correct];
                    
                    if (!card.querySelector('.correct-message-teil2')) {
                        const correctMsg = document.createElement('div');
                        correctMsg.className = 'correct-message-teil2';
                        correctMsg.style.color = '#28a745';
                        correctMsg.style.marginTop = '10px';
                        correctMsg.style.fontSize = '14px';
                        correctMsg.style.fontWeight = 'bold';
                        correctMsg.innerHTML = `✅ الإجابة الصحيحة: ${correctAnswer}`;
                        card.appendChild(correctMsg);
                    }
                }
            }
        }, 100);
    };
    
    checkBtn.setAttribute('data-enhanced', 'true');
}

// ========== 6. تحسين True/False لعرض الإجابات الصحيحة ==========
function enhanceTrueFalseCheckWithCorrectAnswers() {
    const checkBtn = document.querySelector('#hoeren1 .check-btn, #hoeren2 .check-btn, #hoeren3 .check-btn');
    if (!checkBtn || checkBtn.hasAttribute('data-enhanced')) return;
    
    const originalCheck = checkBtn.onclick;
    
    checkBtn.onclick = function(e) {
        if (originalCheck) originalCheck.call(this, e);
        
        setTimeout(() => {
            const questions = window.currentTrueFalseQuestions || [];
            const cards = document.querySelectorAll('.question-card');
            
            for (let i = 0; i < questions.length; i++) {
                const card = cards[i];
                const userAnswer = window._trueFalseUserAnswers?.[i];
                
                if (card && userAnswer === undefined) {
                    const correctText = questions[i].correct ? 'Richtig' : 'Falsch';
                    
                    if (!card.querySelector('.correct-message-truefalse')) {
                        const correctMsg = document.createElement('div');
                        correctMsg.className = 'correct-message-truefalse';
                        correctMsg.style.color = '#ff9800';
                        correctMsg.style.marginTop = '10px';
                        correctMsg.style.fontSize = '14px';
                        correctMsg.style.fontWeight = 'bold';
                        correctMsg.innerHTML = `⚠️ لم يتم الإجابة - الصحيح: ${correctText}`;
                        card.appendChild(correctMsg);
                    }
                }
            }
        }, 100);
    };
    
    checkBtn.setAttribute('data-enhanced', 'true');
}

// ========== تهيئة جميع التحسينات ==========
function initAllEnhancements() {
    console.log("🟢 جاري تهيئة جميع التحسينات...");
    
    // استخدام MutationObserver لمراقبة التغييرات في DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                // تطبيق التحسينات عند ظهور العناصر
                enhanceTeil3WithDoubleClick();
                enhanceSprach2WithFlexibleBinding();
                enhanceSprach2CheckWithCorrectAnswers();
                enhanceTeil3CheckWithCorrectAnswers();
                enhanceTeil2CheckWithCorrectAnswers();
                enhanceTrueFalseCheckWithCorrectAnswers();
            }
        });
    });
    
    // بدء المراقبة
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    
    // تطبيق التحسينات فوراً أيضاً
    setTimeout(() => {
        enhanceTeil3WithDoubleClick();
        enhanceSprach2WithFlexibleBinding();
        enhanceSprach2CheckWithCorrectAnswers();
        enhanceTeil3CheckWithCorrectAnswers();
        enhanceTeil2CheckWithCorrectAnswers();
        enhanceTrueFalseCheckWithCorrectAnswers();
    }, 500);
}

// تصدير الوظائف للنطاق العام
window.initAllEnhancements = initAllEnhancements;
window.enhanceTeil3WithDoubleClick = enhanceTeil3WithDoubleClick;
window.enhanceSprach2WithFlexibleBinding = enhanceSprach2WithFlexibleBinding;

console.log("✅ enhancements.js جاهز - جميع التحسينات تم تحميلها");