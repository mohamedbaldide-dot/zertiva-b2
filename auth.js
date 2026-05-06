/**
 * auth.js - نظام إدارة تسجيل الدخول والاشتراك لموقع Zertiva B2
 */

const WA_NUMBER = "212687561491";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

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

async function getPremiumUsers() {
    try {
        const response = await fetch('premium.json?_=' + Date.now());
        return await response.json();
    } catch(e) {
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

function showLockedMessage(examTitle) {
    let modal = document.createElement('div');
    modal.id = 'lockedModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 100000;
        display: flex;
        justify-content: center;
        align-items: center;
        direction: rtl;
    `;
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 30px; padding: 35px; max-width: 380px; width: 85%; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.3);">
            <div style="font-size: 55px; margin-bottom: 15px;">🔒</div>
            <h2 style="color: #2b5876; margin-bottom: 12px; font-size: 24px;">محـتوى مقفل</h2>
            <p style="color: #555; margin-bottom: 20px;">المرجو ترقية الحساب للوصول لهذا المحتوى</p>
            <div style="background: #f3e8ff; padding: 12px; border-radius: 20px; margin-bottom: 20px;">
                <span style="color: #a855f7; font-weight: bold;">📚 ${examTitle}</span>
            </div>
            <p style="color: #888; margin-bottom: 25px; font-size: 14px;">يتطلب باقة: <strong style="color: #f39c12;">Pro</strong></p>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                <button id="upgradeNowBtnModal" style="background: linear-gradient(135deg, #f39c12, #e67e22); color: white; border: none; padding: 12px 28px; border-radius: 50px; cursor: pointer; font-weight: bold; font-size: 15px;">🚀 ترقية الحساب الآن</button>
                <button id="closeModalBtn" style="background: #e2e8f0; border: none; padding: 12px 28px; border-radius: 50px; cursor: pointer; font-weight: bold; font-size: 15px;">ليس الآن</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    document.getElementById('upgradeNowBtnModal')?.addEventListener('click', () => {
        window.location.href = 'subscribe.html';
    });
    
    document.getElementById('closeModalBtn')?.addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// دالة لتطبيق القفل على الامتحانات الداخلية
async function lockInternalExams() {
    const status = await getUserStatus();
    if (status === 'premium') return; // لا نقفل أي شيء للمشترك
    
    // البحث عن جميع عناصر الامتحانات داخل الصفحة
    // engine.js يعرض الامتحانات على شكل أزرار أو روابط داخل الـ div
    
    // نبحث عن جميع الأزرار التي تحتوي على أرقام امتحانات (2,3,4,...)
    let allExamLinks = document.querySelectorAll('#teil1 a, #teil2 a, #teil3 a, #sprach1 a, #sprach2 a, #hoeren1 a, #hoeren2 a, #hoeren3 a, #schreiben a');
    allExamLinks = [...allExamLinks, ...document.querySelectorAll('.exam-link, .exam-item, .fragen-link')];
    
    // نبحث أيضاً عن أي رابط أو زر داخل محتوى الامتحانات
    let allButtons = document.querySelectorAll('#teil1 button, #teil2 button, #teil3 button, #sprach1 button, #sprach2 button, #hoeren1 button, #hoeren2 button, #hoeren3 button, #schreiben button');
    
    let allElements = [...allExamLinks, ...allButtons];
    
    // إضافة مميزات فريدة للعناصر
    allElements.forEach((el, idx) => {
        let text = el.innerText || el.textContent || '';
        
        // استخراج رقم الامتحان من النص
        let match = text.match(/^(\d+)[\.:\-\s]/);
        let examNumber = match ? parseInt(match[1]) : null;
        
        // إذا كان رقم الامتحان موجود وأكبر من 1، نطبقه القفل
        if (examNumber && examNumber > 1) {
            // تطبيق الشكل المطلوب: لون بنفسجي هادئ + شفافية + قفل
            el.style.opacity = '0.7';
            el.style.filter = 'blur(1px)';
            el.style.backgroundColor = '#e9d5ff';
            el.style.color = '#4a1d6d';
            el.style.border = '1px solid #a855f7';
            el.style.borderRadius = '12px';
            el.style.padding = '8px 12px';
            el.style.display = 'inline-block';
            el.style.margin = '5px';
            el.style.cursor = 'pointer';
            el.style.position = 'relative';
            
            // إضافة أيقونة قفل صغيرة في الأعلى
            if (!el.querySelector('.mini-lock')) {
                let lockSpan = document.createElement('span');
                lockSpan.className = 'mini-lock';
                lockSpan.innerHTML = '🔒';
                lockSpan.style.cssText = 'position: absolute; top: -5px; right: -5px; font-size: 14px; background: white; border-radius: 50%; padding: 2px; z-index: 10;';
                el.style.position = 'relative';
                el.appendChild(lockSpan);
            }
            
            // إضافة رمز Pro صغير
            if (!el.querySelector('.pro-badge')) {
                let proSpan = document.createElement('span');
                proSpan.className = 'pro-badge';
                proSpan.innerHTML = 'PRO';
                proSpan.style.cssText = 'position: absolute; bottom: -5px; left: -5px; font-size: 10px; background: #f39c12; color: white; border-radius: 10px; padding: 2px 6px; z-index: 10; font-weight: bold;';
                el.appendChild(proSpan);
            }
            
            let examTitle = text.substring(0, 50);
            
            // حفظ الحدث الأصلي واستبداله
            let originalOnClick = el.onclick;
            el.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                showLockedMessage(examTitle);
                return false;
            };
            
            // إزالة أي مستمعين آخرين
            if (originalOnClick) {
                el.removeEventListener('click', originalOnClick);
            }
        }
    });
}

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
        alert(`✅ مرحباً ${email}\n🎉 حسابك مفعل. جميع الامتحانات متاحة لك.`);
        location.reload();
    } else if(status === 'expired') {
        alert(`⚠️ مرحباً ${email}\n⏰ انتهت صلاحية اشتراكك.\n✨ يرجى الاشتراك مرة أخرى.`);
    } else {
        alert(`✅ مرحباً ${email}\n📖 حسابك مجاني حالياً.\n✨ متاح لك فقط الامتحان الأول من كل قسم.\nللوصول إلى كل الامتحانات، اضغط "اشتراك" ثم ادفع.`);
    }
    
    hideLoginPopup();
    location.reload();
}

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

// مراقبة تغييرات الصفحة لتطبيق القفل عند تحميل المحتوى
function observePageChanges() {
    const observer = new MutationObserver(() => {
        let listPage = document.getElementById('list');
        if(listPage && listPage.classList.contains('active')) {
            setTimeout(() => {
                lockInternalExams();
            }, 500);
        }
        
        let examPage = document.getElementById('exam');
        if(examPage && examPage.classList.contains('active')) {
            setTimeout(() => {
                lockInternalExams();
            }, 500);
        }
    });
    
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
}

function initAuth() {
    bindAuthEvents();
    addLogoutButton();
    observePageChanges();
    
    setTimeout(() => {
        lockInternalExams();
    }, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}
