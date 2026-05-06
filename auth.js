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

async function getExpiryDate(email) {
    try {
        const premium = await getPremiumUsers();
        return premium[email] || null;
    } catch(e) {
        return null;
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
        background: rgba(0,0,0,0.75);
        z-index: 10000;
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

async function styleLockedExams() {
    const status = await getUserStatus();
    if (status === 'premium') return;
    
    // البحث عن جميع أزرار الامتحانات في الصفحة
    let allExamButtons = document.querySelectorAll('.exam-item, .exam-card, [data-exam], .exam-button');
    
    // إضافة نمط للامتحانات التي ليست الأولى
    allExamButtons.forEach((btn) => {
        let btnText = btn.innerText || btn.textContent || '';
        
        // تحديد إذا كان هذا الامتحان الأول (رقم 1)
        let isFirstExam = false;
        
        // فحص النص لوجود رقم 1
        if (btnText.includes('1') || btnText.includes('teil 1') || btnText.includes('Teil 1')) {
            // إذا كان هناك رقم 1 وحده تقريباً
            let match = btnText.match(/(\d+)/);
            if (match && match[1] === '1') {
                isFirstExam = true;
            }
        }
        
        // إذا لم يكن الامتحان الأول، نطبقه القفل
        if (!isFirstExam) {
            btn.style.opacity = '0.7';
            btn.style.filter = 'blur(1px)';
            btn.style.background = '#e9d5ff';
            btn.style.border = '2px solid #a855f7';
            btn.style.color = '#4a1d6d';
            btn.style.position = 'relative';
            btn.style.cursor = 'pointer';
            
            // إضافة أيقونة قفل
            let existingLock = btn.querySelector('.lock-icon');
            if (!existingLock) {
                let lockIcon = document.createElement('span');
                lockIcon.className = 'lock-icon';
                lockIcon.innerHTML = '🔒';
                lockIcon.style.cssText = 'position: absolute; top: 5px; right: 10px; font-size: 18px; filter: blur(0); opacity: 1; z-index: 10;';
                btn.style.position = 'relative';
                btn.appendChild(lockIcon);
            }
            
            let examTitle = btnText.substring(0, 50);
            
            // حفظ الحدث القديم واستبداله
            let oldClick = btn.onclick;
            btn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                showLockedMessage(examTitle);
                return false;
            };
            
            // إزالة أي مستمعين آخرين
            if (oldClick) {
                btn.removeEventListener('click', oldClick);
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
        let expiry = await getExpiryDate(email);
        alert(`✅ مرحباً ${email}\n🎉 حسابك مفعل حتى ${expiry}\nجميع الامتحانات متاحة لك.`);
        location.reload();
    } else if(status === 'expired') {
        alert(`⚠️ مرحباً ${email}\n⏰ انتهت صلاحية اشتراكك.\n✨ يرجى الاشتراك مرة أخرى.`);
    } else {
        alert(`✅ مرحباً ${email}\n📖 حسابك مجاني حالياً.\n✨ متاح لك فقط الامتحان الأول من كل قسم.\nللوصول إلى كل الامتحانات، اضغط "اشتراك" ثم ادفع.`);
    }
    
    hideLoginPopup();
    location.reload();
}

async function addUpgradeMessageToExamsList() {
    const status = await getUserStatus();
    let examsContainer = document.getElementById('examsList');
    
    if(!examsContainer) return;
    
    let oldMsg = document.getElementById('upgradeMsg');
    if(oldMsg) oldMsg.remove();
    let oldPremiumMsg = document.getElementById('premiumMsg');
    if(oldPremiumMsg) oldPremiumMsg.remove();
    
    if(status !== 'premium' && status !== 'expired' && isUserLoggedIn()) {
        let msgDiv = document.createElement('div');
        msgDiv.id = 'upgradeMsg';
        msgDiv.style.cssText = 'background:linear-gradient(135deg, #f3e8ff, #e9d5ff); padding:15px; border-radius:20px; margin:15px; text-align:center; border:1px solid #a855f7;';
        msgDiv.innerHTML = `
            <span style="font-size: 24px;">🔒</span>
            <p style="margin: 8px 0; font-weight: bold;">⭐ أنت في <strong style="color:#a855f7;">الوضع المجاني</strong></p>
            <p style="font-size: 14px; color:#555;">متاح لك فقط <strong>الامتحان الأول</strong> من كل قسم</p>
            <button id="upgradeNowBtn" style="background:linear-gradient(135deg, #f39c12, #e67e22); border:none; padding:8px 25px; border-radius:30px; margin-top:10px; cursor:pointer; font-weight:bold; color:white;">🚀 ترقية الحساب الآن</button>
        `;
        examsContainer.prepend(msgDiv);
        
        let upgradeBtn = document.getElementById('upgradeNowBtn');
        if(upgradeBtn) upgradeBtn.addEventListener('click', () => {
            window.location.href = "subscribe.html";
        });
    }
    
    if(status === 'premium' && isUserLoggedIn()) {
        let email = getLoggedInEmail();
        let expiry = await getExpiryDate(email);
        let msgDiv = document.createElement('div');
        msgDiv.id = 'premiumMsg';
        msgDiv.style.cssText = 'background:#d1fae5; padding:12px; border-radius:15px; margin:15px; text-align:center; border:1px solid #10b981;';
        msgDiv.innerHTML = `🎉 اشتراكك مفعل حتى تاريخ ${expiry}. شكراً لثقتك!`;
        examsContainer.prepend(msgDiv);
    }
    
    if(status === 'expired' && isUserLoggedIn()) {
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

function observePageChanges() {
    const observer = new MutationObserver(() => {
        let listPage = document.getElementById('list');
        if(listPage && listPage.classList.contains('active')) {
            setTimeout(() => {
                styleLockedExams();
                addUpgradeMessageToExamsList();
            }, 300);
        }
    });
    
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
}

function initAuth() {
    bindAuthEvents();
    addLogoutButton();
    observePageChanges();
    
    setTimeout(() => {
        styleLockedExams();
        addUpgradeMessageToExamsList();
    }, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}
