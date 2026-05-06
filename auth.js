/**
 * auth.js - نظام إدارة تسجيل الدخول والاشتراك لموقع Zertiva B2
 * رقم الواتساب: 212687561491
 */

// ========== الإعدادات الأساسية ==========
const WA_NUMBER = "212687561491";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

// ========== دوال التخزين المحلي ==========
function getLoggedInEmail() {
    return localStorage.getItem('zertiva_email');
}

function getLoggedInPassword() {
    return localStorage.getItem('zertiva_password');
}

function setLoggedInUser(email, password) {
    localStorage.setItem('zertiva_email', email);
    localStorage.setItem('zertiva_password', password);
}

function logoutUser() {
    localStorage.removeItem('zertiva_email');
    localStorage.removeItem('zertiva_password');
    alert("تم تسجيل الخروج بنجاح");
    location.reload();
}

function isUserLoggedIn() {
    return getLoggedInEmail() !== null;
}

// ========== دوال الصلاحية والاشتراك ==========
function getPremiumUsers() {
    return JSON.parse(localStorage.getItem('zertiva_premium_users') || '{}');
}

function savePremiumUsers(premium) {
    localStorage.setItem('zertiva_premium_users', JSON.stringify(premium));
}

function getUserStatus() {
    let email = getLoggedInEmail();
    if(!email) return 'guest';
    
    let premium = getPremiumUsers();
    if(premium[email]) {
        let expiry = premium[email];
        let today = new Date().toISOString().slice(0,10);
        if(today <= expiry) {
            return 'premium';
        } else {
            // انتهت الصلاحية -> حذف المستخدم من قائمة المتميزين
            delete premium[email];
            savePremiumUsers(premium);
            return 'free';
        }
    }
    return 'free';
}

function getExpiryDate(email) {
    let premium = getPremiumUsers();
    return premium[email] || null;
}

// ========== إرسال رسالة واتساب للاشتراك ==========
function sendSubscribeWhatsApp() {
    let email = getLoggedInEmail();
    let password = getLoggedInPassword();
    
    if(!email) {
        alert("⚠️ يجب أن تسجل دخولك أولاً");
        showLoginPopup();
        return;
    }
    
    let message = `مرحباً، أريد الاشتراك المدفوع لمدة شهر%0A`;
    message += `📧 الإيميل: ${encodeURIComponent(email)}%0A`;
    message += `🔑 كلمة السر: ${encodeURIComponent(password)}%0A`;
    message += `💰 سأقوم بالدفع عبر التحويل البنكي/الفودافون كاش.`;
    
    window.open(`${WA_URL}?text=${message}`, '_blank');
}

// ========== نافذة تسجيل الدخول ==========
function showLoginPopup() {
    let popup = document.getElementById('loginPopup');
    if(popup) popup.style.display = 'flex';
}

function hideLoginPopup() {
    let popup = document.getElementById('loginPopup');
    if(popup) popup.style.display = 'none';
}

function handleLogin() {
    let email = document.getElementById('popupEmail').value.trim();
    let password = document.getElementById('popupPassword').value.trim();
    
    if(!email || !password) {
        alert("يرجى إدخال البريد الإلكتروني وكلمة السر");
        return;
    }
    
    setLoggedInUser(email, password);
    
    let status = getUserStatus();
    if(status === 'premium') {
        let expiry = getExpiryDate(email);
        alert(`✅ مرحباً ${email}\n🎉 حسابك مفعل حتى ${expiry}\nجميع الامتحانات متاحة لك.`);
    } else {
        alert(`✅ مرحباً ${email}\n📖 حسابك مجاني حالياً.\n✨ للوصول إلى كل الامتحانات، اضغط زر "اشتراك" وادفع ثم سأفعلك يدوياً.`);
    }
    
    hideLoginPopup();
    
    // إعادة تحميل الصفحة لتحديث واجهة الامتحانات
    location.reload();
}

// ========== إضافة رسالة الترقية للمستخدم المجاني ==========
function addUpgradeMessageToExamsList() {
    let status = getUserStatus();
    let examsContainer = document.getElementById('examsList');
    
    if(status !== 'premium' && examsContainer && !document.getElementById('upgradeMsg')) {
        let msgDiv = document.createElement('div');
        msgDiv.id = 'upgradeMsg';
        msgDiv.className = 'upgrade-message';
        msgDiv.innerHTML = `
            ⭐ أنت في <strong>الوضع المجاني</strong>: متاح لك فقط امتحان واحد من كل قسم.
            <button id="upgradeNowBtn">✨ اشترك الآن لفتح الكل</button>
        `;
        examsContainer.prepend(msgDiv);
        
        let upgradeBtn = document.getElementById('upgradeNowBtn');
        if(upgradeBtn) upgradeBtn.addEventListener('click', sendSubscribeWhatsApp);
    }
    
    // إذا كان المستخدم متميز، أضف رسالة ترحيب مع تاريخ الانتهاء
    if(status === 'premium' && examsContainer && !document.getElementById('premiumMsg')) {
        let email = getLoggedInEmail();
        let expiry = getExpiryDate(email);
        let msgDiv = document.createElement('div');
        msgDiv.id = 'premiumMsg';
        msgDiv.style.cssText = 'background:#d1fae5; padding:12px; border-radius:15px; margin:15px; text-align:center; border:1px solid #10b981;';
        msgDiv.innerHTML = `🎉 اشتراكك مفعل حتى تاريخ ${expiry}. شكراً لثقتك!`;
        examsContainer.prepend(msgDiv);
    }
}

// ========== إضافة زر تسجيل الخروج ==========
function addLogoutButton() {
    let navButtons = document.querySelector('.nav-buttons-area');
    if(!navButtons) return;
    
    // تجنب إضافة الزر مرتين
    if(document.getElementById('logoutBtn')) return;
    
    let logoutBtn = document.createElement('button');
    logoutBtn.id = 'logoutBtn';
    logoutBtn.textContent = '🚪 تسجيل خروج';
    logoutBtn.className = 'btn-login-nav';
    logoutBtn.style.background = '#e74c3c';
    logoutBtn.style.color = 'white';
    logoutBtn.style.border = 'none';
    logoutBtn.addEventListener('click', logoutUser);
    
    // إذا كان المستخدم مسجل دخول، أظهر زر الخروج وأخفِ زر تسجيل الدخول
    if(isUserLoggedIn()) {
        let loginBtn = document.getElementById('navLoginBtn');
        if(loginBtn) loginBtn.style.display = 'none';
        navButtons.appendChild(logoutBtn);
    } else {
        let loginBtn = document.getElementById('navLoginBtn');
        if(loginBtn) loginBtn.style.display = 'inline-block';
        let existingLogout = document.getElementById('logoutBtn');
        if(existingLogout) existingLogout.remove();
    }
}

// ========== ربط الأزرار والأحداث ==========
function bindAuthEvents() {
    // زر تسجيل الدخول في الشريط
    let navLoginBtn = document.getElementById('navLoginBtn');
    if(navLoginBtn) navLoginBtn.addEventListener('click', showLoginPopup);
    
    // زر الاشتراك في الشريط
    let navSubscribeBtn = document.getElementById('navSubscribeBtn');
    if(navSubscribeBtn) navSubscribeBtn.addEventListener('click', sendSubscribeWhatsApp);
    
    // أيقونة الواتساب الثابتة
    let whatsappFloat = document.getElementById('whatsappFloat');
    if(whatsappFloat) whatsappFloat.addEventListener('click', () => window.open(WA_URL, '_blank'));
    
    // أزرار النافذة المنبثقة
    let popupLoginBtn = document.getElementById('popupLoginBtn');
    if(popupLoginBtn) popupLoginBtn.addEventListener('click', handleLogin);
    
    let closePopupBtn = document.getElementById('closePopupBtn');
    if(closePopupBtn) closePopupBtn.addEventListener('click', hideLoginPopup);
    
    // الضغط خارج النافذة لإغلاقها
    let loginPopup = document.getElementById('loginPopup');
    if(loginPopup) {
        loginPopup.addEventListener('click', function(e) {
            if(e.target === loginPopup) hideLoginPopup();
        });
    }
}

// ========== تهيئة النظام عند تحميل الصفحة ==========
function initAuth() {
    bindAuthEvents();
    addLogoutButton();
    
    // ننتظر قليلاً حتى يتم تحميل قائمة الامتحانات من engine.js
    setTimeout(() => {
        addUpgradeMessageToExamsList();
    }, 500);
}

// بدء التشغيل عند اكتمال تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}