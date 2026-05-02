// ============================================
// app.js - ملف مساعد (وظائف إضافية)
// لا يتعارض مع exams.js و engine.js
// ============================================

console.log("🟢 app.js (ملف مساعد) تم تحميله");

// ========== 1. حفظ تقدم المستخدم (LocalStorage) ==========

// حفظ نتيجة الامتحان
function saveExamResult(skill, examId, score, total) {
    const results = JSON.parse(localStorage.getItem('examResults') || '{}');
    const key = `${skill}_${examId}`;
    results[key] = {
        score: score,
        total: total,
        percentage: (score / total * 100).toFixed(1),
        date: new Date().toISOString()
    };
    localStorage.setItem('examResults', JSON.stringify(results));
}

// استرجاع نتائج الامتحان
function getExamResult(skill, examId) {
    const results = JSON.parse(localStorage.getItem('examResults') || '{}');
    return results[`${skill}_${examId}`];
}

// عرض إحصائيات المستخدم
function showUserStats() {
    const results = JSON.parse(localStorage.getItem('examResults') || '{}');
    const totalExams = Object.keys(results).length;
    let totalScore = 0;
    let totalPossible = 0;
    
    for (let key in results) {
        totalScore += results[key].score;
        totalPossible += results[key].total;
    }
    
    const overallPercentage = totalPossible > 0 ? (totalScore / totalPossible * 100).toFixed(1) : 0;
    
    console.log(`📊 الإحصائيات:`);
    console.log(`   - عدد الامتحانات المكتملة: ${totalExams}`);
    console.log(`   - متوسط النتيجة: ${overallPercentage}%`);
    
    return { totalExams, totalScore, totalPossible, overallPercentage };
}

// ========== 2. تصدير النتائج ==========

// تصدير النتائج إلى ملف JSON
function exportResults() {
    const results = localStorage.getItem('examResults');
    if (!results) {
        alert("لا توجد نتائج محفوظة للتصدير");
        return;
    }
    
    const dataStr = JSON.stringify(JSON.parse(results), null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exam_results_${new Date().toISOString().slice(0,19)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    alert("✅ تم تصدير النتائج بنجاح");
}

// ========== 3. إعادة تعيين جميع النتائج ==========
function resetAllResults() {
    if (confirm("⚠️ هل أنت متأكد أنك تريد حذف جميع النتائج المحفوظة؟")) {
        localStorage.removeItem('examResults');
        alert("✅ تم حذف جميع النتائج");
    }
}

// ========== 4. عرض الوقت والتاريخ الحالي ==========
function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dateTimeStr = now.toLocaleDateString('ar-EG', options);
    
    const dateTimeDiv = document.getElementById('dateTimeDisplay');
    if (dateTimeDiv) {
        dateTimeDiv.innerHTML = `📅 ${dateTimeStr}`;
    }
}

// تحديث الوقت كل دقيقة
setInterval(updateDateTime, 60000);

// ========== 5. وضع ليلي / نهاري ==========
function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
}

// تطبيق الوضع المحفوظ
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        const btn = document.getElementById('themeToggle');
        if (btn) btn.textContent = '☀️';
    }
}

// ========== 6. البحث في الامتحانات (توضع في صفحة القائمة) ==========
function searchExams(searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") {
        renderExamListForSkill(currentSkill, getTeilNameBySkill(currentSkill));
        return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = currentExamsList.filter(exam => 
        exam.title.toLowerCase().includes(term) || 
        exam.id.toString().includes(term)
    );
    
    const container = document.getElementById("examsList");
    if (!container) return;
    
    // عرض النتائج المفلترة
    container.innerHTML = `<div class="teil-header"><strong>🔍 نتائج البحث عن: "${searchTerm}"</strong></div>`;
    
    if (filtered.length === 0) {
        container.innerHTML += '<div class="item" style="text-align:center; color:#999;">⚠️ لا توجد نتائج مطابقة</div>';
        return;
    }
    
    for (let i = 0; i < filtered.length; i++) {
        const exam = filtered[i];
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `${exam.id}: ${exam.title}`;
        div.onclick = (function(id, title) {
            return function() { openExam(id, title, currentSkill); };
        })(exam.id, exam.title);
        container.appendChild(div);
    }
}

// ========== 7. إضافة شريط بحث إلى واجهة المستخدم ==========
function addSearchBar() {
    const examsContainer = document.getElementById("examsList");
    if (!examsContainer) return;
    
    // التحقق مما إذا كان شريط البحث موجوداً بالفعل
    if (document.getElementById("examSearchBar")) return;
    
    const searchDiv = document.createElement("div");
    searchDiv.style.marginBottom = "15px";
    searchDiv.style.display = "flex";
    searchDiv.style.gap = "10px";
    
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.id = "examSearchBar";
    searchInput.placeholder = "🔍 ابحث عن امتحان...";
    searchInput.style.flex = "1";
    searchInput.style.padding = "10px";
    searchInput.style.borderRadius = "8px";
    searchInput.style.border = "1px solid #ccc";
    searchInput.style.fontSize = "14px";
    
    const searchButton = document.createElement("button");
    searchButton.textContent = "بحث";
    searchButton.style.padding = "10px 20px";
    searchButton.style.backgroundColor = "#2c3e66";
    searchButton.style.color = "white";
    searchButton.style.border = "none";
    searchButton.style.borderRadius = "8px";
    searchButton.style.cursor = "pointer";
    
    searchButton.onclick = () => searchExams(searchInput.value);
    searchInput.onkeypress = (e) => { if (e.key === 'Enter') searchExams(searchInput.value); };
    
    searchDiv.appendChild(searchInput);
    searchDiv.appendChild(searchButton);
    
    examsContainer.parentNode.insertBefore(searchDiv, examsContainer);
}

// استدعاء إضافة شريط البحث عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
    applySavedTheme();
    updateDateTime();
    
    // مراقبة تغيير القائمة لإضافة شريط البحث
    const observer = new MutationObserver(function() {
        if (document.getElementById("examsList") && !document.getElementById("examSearchBar")) {
            addSearchBar();
        }
    });
    observer.observe(document.getElementById("list"), { childList: true, subtree: true });
});

console.log("✅ app.js (ملف مساعد) جاهز - يوفر: حفظ النتائج، تصدير، بحث، وضع ليلي");
