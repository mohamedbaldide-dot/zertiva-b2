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

// ========== دوال الصلاحية والاشتراك (تقرأ من premium.json عبر API) ==========
async function getPremiumUsers() {
    try {
        const response = await fetch('premium.json?_=' + Date.now());
        return await response.json();
    } catch(e) {
        console.error('خطأ في قراءة premium.json', e);
        return {};
    }
}

async function getUserStatus() {
    let email = getLoggedInEmail();
    if(!email) return 'guest';
    
    try {
        const premium = await getPremiumUsers();
        if(premium[email]) {
            let expiry = premium[email];
            let today = new Date().toISOString().slice(0,10);
            if(today <= expiry) {
                return 'premium';
            } else {
                return 'expired';
            }
        }
        return 'free';
    } catch(e) {
        return 'free';
    }
}

async function getExpiryDate(email) {
    try {
        const premium = await getPremiumUsers();
        return premium[email] || null;
    } catch(e) {
        return null;
    }
}

// ========== التحقق من صلاحية الوصول لامتحان معين ==========
// قائمة الامتحانات المجانية (المفتوحة للجميع)
const FREE_EXAMS_LIST = [
    "Leseverstehen - Teil 1",
    "Sprachbausteine - Teil 1",
    "Hörverstehen - Teil 1"
];

async function canAccessExam(examName) {
    const status = await getUserStatus();
    if(status === 'premium') return true;
    if(status === 'guest') return false;
    // status === 'free' or 'expired'
    return FREE_EXAMS_LIST.includes(examName);
}

// ========== إرسال رسالة واتساب للاشتراك (توجه إلى subscribe.html) ==========
function sendSubscribeWhatsApp() {
    let email = getLoggedInEmail();
    
    if(!email) {
        alert("⚠️ يجب أن تسجل دخولك أولاً");
        showLoginPopup();
        return;
    }
    
    // التوجه إلى صفحة اختيار الباقة
    window.location.href = "subscribe.html";
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

async function handleLogin() {
    let email = document.getElementById('popupEmail').value.trim();
    let password = document.getElementById('popupPassword').value.trim();
    
    if(!email || !password) {
        alert("يرجى إدخال البريد الإلكتروني وكلمة السر");
        return;
    }
    
    setLoggedInUser(email, password);
    
    const status = await getUserStatus();
    if(status === 'premium') {
        let expiry = await getExpiryDate(email);
        alert(`✅ مرحباً ${email}\n🎉 حسابك مفعل حتى ${expiry}\nجميع الامتحانات متاحة لك.`);
    } else if(status === 'expired') {
        alert(`⚠️ مرحباً ${email}\n⏰ انتهت صلاحية اشتراكك.\n✨ يرجى الاشتراك مرة أخرى للوصول إلى الامتحانات.`);
    } else {
        alert(`✅ مرحباً ${email}\n📖 حسابك مجاني حالياً.\n✨ للوصول إلى كل الامتحانات، اضغط زر "اشتراك" وادفع ثم سأفعلك يدوياً.`);
    }
    
    hideLoginPopup();
    location.reload();
}

// ========== إضافة رسالة الترقية للمستخدم المجاني ==========
async function addUpgradeMessageToExamsList() {
    const status = await getUserStatus();
    let examsContainer = document.getElementById('examsList');
    
    if(!examsContainer) return;
    
    // إزالة الرسائل القديمة
    let oldMsg = document.getElementById('upgradeMsg');
    if(oldMsg) oldMsg.remove();
    let oldPremiumMsg = document.getElementById('premiumMsg');
    if(oldPremiumMsg) oldPremiumMsg.remove();
    
    if(status !== 'premium' && status !== 'expired') {
        let msgDiv = document.createElement('div');
        msgDiv.id = 'upgradeMsg';
        msgDiv.style.cssText = 'background:#fef3c7; padding:12px; border-radius:15px; margin:15px; text-align:center; border:1px solid #f59e0b;';
        msgDiv.innerHTML = `
            ⭐ أنت في <strong>الوضع المجاني</strong>: متاح لك فقط امتحان واحد من كل قسم.
            <button id="upgradeNowBtn" style="background:#f39c12; border:none; padding:5px 15px; border-radius:20px; margin-right:10px; cursor:pointer;">✨ اشترك الآن لفتح الكل</button>
        `;
        examsContainer.prepend(msgDiv);
        
        let upgradeBtn = document.getElementById('upgradeNowBtn');
        if(upgradeBtn) upgradeBtn.addEventListener('click', () => {
            window.location.href = "subscribe.html";
        });
    }
    
    if(status === 'premium') {
        let email = getLoggedInEmail();
        let expiry = await getExpiryDate(email);
        let msgDiv = document.createElement('div');
        msgDiv.id = 'premiumMsg';
        msgDiv.style.cssText = 'background:#d1fae5; padding:12px; border-radius:15px; margin:15px; text-align:center; border:1px solid #10b981;';
        msgDiv.innerHTML = `🎉 اشتراكك مفعل حتى تاريخ ${expiry}. شكراً لثقتك!`;
        examsContainer.prepend(msgDiv);
    }
    
    if(status === 'expired') {
        let msgDiv = document.createElement('div');
        msgDiv.id = 'upgradeMsg';
        msgDiv.style.cssText = 'background:#fee2e2; padding:12px; border-radius:15px; margin:15px; text-align:center; border:1px solid #ef4444;';
        msgDiv.innerHTML = `
            ⏰ <strong>انتهت صلاحية اشتراكك</strong>. يرجى الاشتراك مرة أخرى.
            <button id="renewBtn" style="background:#f39c12; border:none; padding:5px 15px; border-radius:20px; margin-right:10px; cursor:pointer;">🔄 تجديد الاشتراك</button>
        `;
        examsContainer.prepend(msgDiv);
        
        let renewBtn = document.getElementById('renewBtn');
        if(renewBtn) renewBtn.addEventListener('click', () => {
            window.location.href = "subscribe.html";
        });
    }
}

// ========== إضافة زر تسجيل الخروج ==========
function addLogoutButton() {
    let navButtons = document.querySelector('.nav-buttons-area');
    if(!navButtons) return;
    
    if(document.getElementById('logoutBtn')) return;
    
    let logoutBtn = document.createElement('button');
    logoutBtn.id = 'logoutBtn';
    logoutBtn.textContent = '🚪 تسجيل خروج';
    logoutBtn.style.cssText = 'padding:8px 20px; border-radius:30px; cursor:pointer; font-weight:bold; background:#e74c3c; color:white; border:none; margin-right:10px;';
    logoutBtn.addEventListener('click', logoutUser);
    
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
    let navLoginBtn = document.getElementById('navLoginBtn');
    if(navLoginBtn) navLoginBtn.addEventListener('click', showLoginPopup);
    
    let navSubscribeBtn = document.getElementById('navSubscribeBtn');
    if(navSubscribeBtn) navSubscribeBtn.addEventListener('click', () => {
        if(isUserLoggedIn()) {
            window.location.href = "subscribe.html";
        } else {
            showLoginPopup();
        }
    });
    
    let whatsappFloat = document.getElementById('whatsappFloat');
    if(whatsappFloat) whatsappFloat.addEventListener('click', () => window.open(WA_URL, '_blank'));
    
    let popupLoginBtn = document.getElementById('popupLoginBtn');
    if(popupLoginBtn) popupLoginBtn.addEventListener('click', handleLogin);
    
    let closePopupBtn = document.getElementById('closePopupBtn');
    if(closePopupBtn) closePopupBtn.addEventListener('click', hideLoginPopup);
    
    let loginPopup = document.getElementById('loginPopup');
    if(loginPopup) {
        loginPopup.addEventListener('click', function(e) {
            if(e.target === loginPopup) hideLoginPopup();
        });
    }
}

// ========== تهيئة النظام ==========
function initAuth() {
    bindAuthEvents();
    addLogoutButton();
    
    setTimeout(() => {
        addUpgradeMessageToExamsList();
    }, 500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}