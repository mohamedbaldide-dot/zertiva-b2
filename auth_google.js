// ============================================
// Google Sheets API Configuration - JSONP Version
// ============================================

const API_URL = 'https://script.google.com/macros/s/AKfycbwp14kvkAzTvmYEyUzD92AVb4SrzD0os7pl85Ka8ZD_OTLVREl0JGAKrfUX7ANyE3hBOA/exec';

// ============================================
// دالة JSONP للاتصال بالـ API
// ============================================

function callJSONP(action, email) {
    return new Promise((resolve, reject) => {
        const callbackName = 'jsonp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
        const script = document.createElement('script');
        
        let url = `${API_URL}?action=${action}&callback=${callbackName}`;
        if (email) url += `&email=${encodeURIComponent(email)}`;
        
        // ✅ إضافة طابع زمني لمنع التخزين المؤقت
        url += `&_=${Date.now()}`;
        
        console.log(`📡 [${action}] Calling API:`, url);
        
        let isResolved = false;
        
        // ✅ مهلة زمنية 15 ثانية
        const timeout = setTimeout(() => {
            if (!isResolved) {
                isResolved = true;
                delete window[callbackName];
                if (script.parentNode) script.parentNode.removeChild(script);
                reject(new Error('⏰ انتهت مهلة الاتصال بالخادم'));
            }
        }, 15000);
        
        window[callbackName] = function(data) {
            if (isResolved) return;
            isResolved = true;
            clearTimeout(timeout);
            delete window[callbackName];
            if (script.parentNode) script.parentNode.removeChild(script);
            
            console.log(`📥 [${action}] Response:`, data);
            resolve(data);
        };
        
        script.onerror = function() {
            if (isResolved) return;
            isResolved = true;
            clearTimeout(timeout);
            delete window[callbackName];
            if (script.parentNode) script.parentNode.removeChild(script);
            reject(new Error('🌐 فشل الاتصال بالخادم'));
        };
        
        document.body.appendChild(script);
    });
}

// ============================================
// دوال API (مبسطة)
// ============================================

// 1. تسجيل الدخول - بدون deviceId
async function loginWithGoogleSheets(email) {
    try {
        console.log('🔑 محاولة تسجيل الدخول:', email);
        const data = await callJSONP('login', email);
        
        if (!data) {
            return {
                success: false,
                message: 'لم يتم استلام رد من الخادم',
                status: 'no_response'
            };
        }
        
        console.log('✅ رد تسجيل الدخول:', data);
        return data;
        
    } catch (error) {
        console.error('❌ خطأ في تسجيل الدخول:', error.message);
        return {
            success: false,
            message: error.message || 'حدث خطأ في الاتصال',
            status: 'connection_error'
        };
    }
}

// 2. التحقق من المستخدم (للحالة فقط)
async function checkUser(email) {
    try {
        console.log('👤 التحقق من المستخدم:', email);
        const data = await callJSONP('check', email);
        
        if (!data) {
            return { 
                success: false, 
                exists: false,
                message: 'لم يتم استلام رد من الخادم'
            };
        }
        
        console.log('✅ نتيجة التحقق من المستخدم:', data);
        return data;
        
    } catch (error) {
        console.error('❌ خطأ في التحقق من المستخدم:', error.message);
        return { 
            success: false, 
            exists: false,
            message: error.message || 'حدث خطأ في الاتصال'
        };
    }
}

// 3. تسجيل الخروج
async function logoutWithGoogleSheets(email) {
    try {
        console.log('🚪 تسجيل الخروج:', email);
        const data = await callJSONP('logout', email);
        console.log('✅ نتيجة تسجيل الخروج:', data);
        return data || { success: true };
        
    } catch (error) {
        console.error('❌ خطأ في تسجيل الخروج:', error.message);
        return { 
            success: false, 
            message: error.message || 'حدث خطأ في الاتصال' 
        };
    }
}
