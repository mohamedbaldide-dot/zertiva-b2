/**
 * auth.js - نظام إدارة تسجيل الدخول والاشتراك لموقع Zertiva B2
 * مع نظام الإشعارات المتكامل
 */

const WA_NUMBER = "212687561491";
const WA_URL = `https://wa.me/${WA_NUMBER}`;

let currentUserStatus = 'guest';
let currentExpiry = null;

// ========== نظام الإشعارات ==========
let notificationsData = null;
let unreadCount = 0;

// تحميل الإشعارات من الملف
async function loadNotifications() {
    try {
        const response = await fetch('notifications.json?_=' + Date.now());
        if (!response.ok) {
            console.warn("⚠️ ملف الإشعارات غير موجود");
            return null;
        }
        const data = await response.json();
        notificationsData = data;
        
        // استعادة حالة القراءة من localStorage
        restoreReadStatus();
        updateUnreadCount();
        return data;
    } catch(e) {
        console.error("❌ خطأ في تحميل الإشعارات:", e);
        return null;
    }
}

// استعادة حالة القراءة من localStorage
function restoreReadStatus() {
    const savedStatus = localStorage.getItem('zertiva_notifications_read');
    if (savedStatus && notificationsData && notificationsData.notifications) {
        const readStatus = JSON.parse(savedStatus);
        for (const notification of notificationsData.notifications) {
            if (readStatus[notification.id] !== undefined) {
                notification.read = readStatus[notification.id];
            }
        }
    }
}

// حفظ حالة القراءة في localStorage
function saveReadStatus() {
    if (!notificationsData || !notificationsData.notifications) return;
    const readStatus = {};
    for (const notification of notificationsData.notifications) {
        readStatus[notification.id] = notification.read;
    }
    localStorage.setItem('zertiva_notifications_read', JSON.stringify(readStatus));
}

// تحديث عدد الإشعارات غير المقروءة
function updateUnreadCount() {
    if (!notificationsData || !notificationsData.notifications) {
        unreadCount = 0;
    } else {
        unreadCount = notificationsData.notifications.filter(n => !n.read).length;
    }
    
    const badge = document.getElementById('notificationBadge');
    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// تنسيق التاريخ
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'اليوم';
    if (diffDays === 1) return 'أمس';
    if (diffDays < 7) return `قبل ${diffDays} أيام`;
    
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

// الحصول على لون الخلفية حسب نوع الإشعار
function getNotificationStyle(type) {
    switch(type) {
        case 'sale':
            return { bg: '#fef3c7', border: '#f59e0b', icon: '🛒' };
        case 'success':
            return { bg: '#d1fae5', border: '#10b981', icon: '✅' };
        case 'warning':
            return { bg: '#fee2e2', border: '#ef4444', icon: '⚠️' };
        case 'challenge':
            return { bg: '#e0e7ff', border: '#6366f1', icon: '🏆' };
        default:
            return { bg: '#eff6ff', border: '#3b82f6', icon: '📢' };
    }
}

// عرض قائمة الإشعارات
async function renderNotificationsDropdown() {
    const dropdown = document.getElementById('notificationsDropdown');
    const listContainer = document.getElementById('notificationsList');
    
    if (!dropdown || !listContainer) return;
    
    if (!notificationsData) {
        await loadNotifications();
    }
    
    if (!notificationsData || !notificationsData.notifications || notificationsData.notifications.length === 0) {
        listContainer.innerHTML = `
            <div class="notifications-empty">
                <div class="empty-icon">🔔</div>
                <div>لا توجد إشعارات</div>
            </div>
        `;
        dropdown.classList.add('show');
        return;
    }
    
    const sortedNotifications = [...notificationsData.notifications].sort((a, b) => b.id - a.id);
    
    let html = '';
    for (const notif of sortedNotifications) {
        const style = getNotificationStyle(notif.type);
        const dateFormatted = formatDate(notif.date);
        const isUnread = !notif.read;
        
        html += `
            <div class="notification-item ${isUnread ? 'unread' : 'read'}" data-id="${notif.id}" data-link="${notif.link || ''}">
                <div class="notification-icon" style="background: ${style.bg}; border-color: ${style.border};">
                    ${style.icon}
                </div>
                <div class="notification-content">
                    <div class="notification-title">${notif.title}</div>
                    <div class="notification-message">${notif.message}</div>
                    <div class="notification-date">📅 ${dateFormatted}</div>
                </div>
                ${isUnread ? '<div class="notification-unread-dot"></div>' : ''}
            </div>
        `;
    }
    
    listContainer.innerHTML = html;
    
    // إضافة حدث النقر على كل إشعار
    document.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', async (e) => {
            if (e.target.closest('a')) return;
            const id = parseInt(item.dataset.id);
            const link = item.dataset.link;
            
            await markNotificationAsRead(id);
            
            if (link && link !== 'null' && link !== '') {
                window.location.href = link;
            } else {
                await renderNotificationsDropdown();
            }
        });
    });
    
    dropdown.classList.add('show');
}

// تحديث إشعار كمقروء
async function markNotificationAsRead(notificationId) {
    if (!notificationsData) return;
    
    const notification = notificationsData.notifications.find(n => n.id === notificationId);
    if (notification && !notification.read) {
        notification.read = true;
        saveReadStatus();
        updateUnreadCount();
    }
}

// تحديث كل الإشعارات كمقروءة
async function markAllAsRead() {
    if (!notificationsData) return;
    
    let changed = false;
    for (const notification of notificationsData.notifications) {
        if (!notification.read) {
            notification.read = true;
            changed = true;
        }
    }
    
    if (changed) {
        saveReadStatus();
        updateUnreadCount();
        await renderNotificationsDropdown();
    }
}

// toggle القائمة المنسدلة
function toggleNotificationsDropdown() {
    const dropdown = document.getElementById('notificationsDropdown');
    if (!dropdown) return;
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
    } else {
        renderNotificationsDropdown();
    }
}

// إغلاق القائمة عند النقر خارجها
function setupNotificationsCloseOnClick() {
    document.addEventListener('click', function(e) {
        const notificationBtn = document.getElementById('notificationBtn');
        const notificationWrapper = document.getElementById('notificationBtnWrapper');
        const dropdown = document.getElementById('notificationsDropdown');
        
        if (dropdown && dropdown.classList.contains('show')) {
            if (!notificationWrapper?.contains(e.target) && !dropdown.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        }
    });
}

// ========== دوال المصادقة الأساسية ==========

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
    localStorage.removeItem('zertiva_notifications_read');
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
                currentExpiry = expiry;
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
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.85); z-index: 100000;
        display: flex; justify-content: center; align-items: center;
        direction: rtl;
    `;
    
    modal.innerHTML = `
        <div style="background:white; border-radius:28px; padding:35px; max-width:360px; width:85%; text-align:center; box-shadow:0 25px 50px rgba(0,0,0,0.3); direction:rtl;">
            <div style="font-size:55px; margin-bottom:15px;">🔒</div>
            <h2 style="color:#2b5876; margin-bottom:12px; font-size:24px;">محـتوى مقفل</h2>
            <p style="color:#555; margin-bottom:20px;">المرجو ترقية الحساب للوصول لهذا المحتوى</p>
            <div style="background:#e9d5ff; padding:12px; border-radius:18px; margin-bottom:20px; color:#6b21a5; font-weight:bold;">📚 ${examTitle}</div>
            <p style="color:#888; margin-bottom:25px; font-size:14px;">يتطلب باقة: <strong style="color:#2b5876;">Pro</strong></p>
            <div style="display:flex; flex-direction:column; gap:12px; justify-content:center; align-items:center; margin-top:10px;">
                <button id="upgradeNowBtnModal" style="background:linear-gradient(135deg, #2b5876, #4e4376); color:white; border:none; padding:12px 28px; border-radius:50px; cursor:pointer; font-weight:bold; font-size:15px; width:80%;">🚀 ترقية الحساب الآن</button>
                <button id="closeModalBtn" style="background:#e2e8f0; border:none; padding:12px 28px; border-radius:50px; cursor:pointer; font-weight:bold; font-size:15px; color:#4a5568; width:80%;">ليس الآن</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    let upgradeBtn = document.getElementById('upgradeNowBtnModal');
    let closeBtn = document.getElementById('closeModalBtn');
    
    if(upgradeBtn) {
        upgradeBtn.onclick = function() {
            window.location.href = 'subscribe.html';
        };
    }
    
    if(closeBtn) {
        closeBtn.onclick = function() {
            modal.remove();
        };
    }
    
    modal.onclick = function(e) {
        if(e.target === modal) modal.remove();
    };
}

async function updateProfileDropdown() {
    let email = getLoggedInEmail();
    let profileEmail = document.getElementById('profileEmail');
    let profileExpiry = document.getElementById('profileExpiry');
    let profileStatus = document.getElementById('profileStatus');
    let profileLogoutBtn = document.getElementById('profileLogoutBtn');
    let profileIcon = document.getElementById('profileIcon');
    let navLoginBtn = document.getElementById('navLoginBtn');
    let navSubscribeBtn = document.getElementById('navSubscribeBtn');
    
    if(!profileEmail) return;
    
    if(email) {
        const oldUpgradeBtn = document.getElementById('dropdownUpgradeBtn');
        if (oldUpgradeBtn) oldUpgradeBtn.remove();
        
        let status = await getUserStatus();
        let expiry = currentExpiry;
        
        profileEmail.innerHTML = `📧 ${email}`;
        
        if(status === 'premium' && expiry) {
            let expiryDate = new Date(expiry);
            let formattedExpiry = `${expiryDate.getDate()}/${expiryDate.getMonth()+1}/${expiryDate.getFullYear()}`;
            profileExpiry.innerHTML = `📅 الصلاحية: حتى ${formattedExpiry}`;
            profileStatus.innerHTML = `✅ الحالة: <span class="status-premium">مشترك (Pro)</span>`;
            if (navSubscribeBtn) navSubscribeBtn.style.display = 'none';
        } else if(status === 'expired') {
            profileExpiry.innerHTML = `⏰ انتهت الصلاحية`;
            profileStatus.innerHTML = `⚠️ الحالة: <span class="status-free">منتهي</span>`;
            if (navSubscribeBtn) navSubscribeBtn.style.display = 'inline-flex';
        } else {
            profileExpiry.innerHTML = `📖 الوضع المجاني`;
            profileStatus.innerHTML = `⭐ الحالة: <span class="status-free">مجاني</span>`;
            if (navSubscribeBtn) navSubscribeBtn.style.display = 'inline-flex';
        }
        
        if(profileLogoutBtn) profileLogoutBtn.style.display = 'block';
        if(profileIcon) profileIcon.style.display = 'flex';
        if(navLoginBtn) navLoginBtn.style.display = 'none';
    } else {
        profileEmail.innerHTML = '👤 غير مسجل';
        profileExpiry.innerHTML = 'الوصول محدود لبعض الامتحانات';
        profileStatus.innerHTML = '';
        
        const upgradeBtn = document.createElement('button');
        upgradeBtn.id = 'dropdownUpgradeBtn';
        upgradeBtn.innerHTML = 'الترقية إلى الحساب الكامل →';
        upgradeBtn.style.cssText = `
            margin-top: 12px;
            background: #64748B;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 25px;
            cursor: pointer;
            width: 100%;
            font-size: 13px;
            font-weight: bold;
            transition: all 0.3s ease;
        `;
        upgradeBtn.onmouseenter = function() {
            this.style.background = '#475569';
        };
        upgradeBtn.onmouseleave = function() {
            this.style.background = '#64748B';
        };
        upgradeBtn.onclick = function() {
            showLoginPopup();
        };
        
        const dropdown = document.getElementById('profileDropdown');
        if (dropdown) {
            const oldBtn = document.getElementById('dropdownUpgradeBtn');
            if (oldBtn) oldBtn.remove();
            dropdown.appendChild(upgradeBtn);
        }
        
        if(profileLogoutBtn) profileLogoutBtn.style.display = 'none';
        if(profileIcon) profileIcon.style.display = 'none';
        if(navLoginBtn) navLoginBtn.style.display = 'inline-block';
        if (navSubscribeBtn) navSubscribeBtn.style.display = 'inline-flex';
    }
}

function toggleProfileDropdown() {
    let dropdown = document.getElementById('profileDropdown');
    if(dropdown) {
        dropdown.classList.toggle('show');
    }
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
    
    let status = await getUserStatus();
    if(status === 'premium') {
        let expiry = currentExpiry;
        let expiryDate = new Date(expiry);
        let formattedExpiry = `${expiryDate.getDate()}/${expiryDate.getMonth()+1}/${expiryDate.getFullYear()}`;
        alert(`✅ مرحباً ${email}\n🎉 حسابك مفعل حتى ${formattedExpiry}\nجميع الامتحانات متاحة لك.`);
    } else if(status === 'expired') {
        alert(`⚠️ مرحباً ${email}\n⏰ انتهت صلاحية اشتراكك.\n✨ يرجى الاشتراك مرة أخرى.`);
    } else {
        alert(`✅ مرحباً ${email}\n📖 حسابك مجاني حالياً.\n✨ متاح لك فقط الامتحان الأول من كل قسم.\nللوصول إلى كل الامتحانات، اضغط "اشتراك" ثم ادفع.`);
    }
    
    hideLoginPopup();
    await updateProfileDropdown();
    
    if (status !== 'premium') {
        window.location.href = 'subscribe.html';
    } else {
        location.reload();
    }
}

async function setupLockedNextButton() {
    let status = await getUserStatus();
    let nextBtn = document.getElementById('nextExamBtn');
    
    if(nextBtn && status !== 'premium') {
        nextBtn.classList.add('locked-nav');
        let oldClick = nextBtn.onclick;
        nextBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            showLockedMessage("الامتحان التالي (يتطلب ترقية)");
            return false;
        };
    }
}

function bindAuthEvents() {
    let navLoginBtn = document.getElementById('navLoginBtn');
    if(navLoginBtn) navLoginBtn.addEventListener('click', showLoginPopup);
    
    let navSubscribeBtn = document.getElementById('navSubscribeBtn');
    if(navSubscribeBtn) navSubscribeBtn.addEventListener('click', () => {
        if(isUserLoggedIn()) {
            window.location.href = 'subscribe.html';
        } else {
            showLoginPopup();
        }
    });
    
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
    
    let profileIcon = document.getElementById('profileIcon');
    if(profileIcon) profileIcon.addEventListener('click', toggleProfileDropdown);
    
    let profileLogoutBtn = document.getElementById('profileLogoutBtn');
    if(profileLogoutBtn) profileLogoutBtn.addEventListener('click', logoutUser);
    
    let logoHomeBtn = document.getElementById('logoHomeBtn');
    if(logoHomeBtn) {
        logoHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // أحداث الإشعارات
    const notificationBtn = document.getElementById('notificationBtn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', toggleNotificationsDropdown);
    }
    
    const markAllReadBtn = document.getElementById('markAllReadBtn');
    if (markAllReadBtn) {
        markAllReadBtn.addEventListener('click', markAllAsRead);
    }
    
    document.addEventListener('click', function(e) {
        let dropdown = document.getElementById('profileDropdown');
        let profileIconElem = document.getElementById('profileIcon');
        if(dropdown && profileIconElem && !profileIconElem.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    setupNotificationsCloseOnClick();
}

function observePageChanges() {
    const observer = new MutationObserver(() => {
        let listPage = document.getElementById('list');
        if(listPage && listPage.classList.contains('active')) {
            setTimeout(setupLockedNextButton, 300);
        }
        let examPage = document.getElementById('exam');
        if(examPage && examPage.classList.contains('active')) {
            setTimeout(setupLockedNextButton, 300);
        }
    });
    
    observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });
}

async function initAuth() {
    bindAuthEvents();
    await updateProfileDropdown();
    await loadNotifications();  // تحميل الإشعارات
    observePageChanges();
    setTimeout(setupLockedNextButton, 800);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAuth);
} else {
    initAuth();
}
