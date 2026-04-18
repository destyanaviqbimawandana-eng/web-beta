// ======================= AUTENTIKASI =======================
let currentLangAuth = localStorage.getItem("selectedLanguage") || "id";

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    
    const $loginNavItem = $("#loginNavItem");
    const $adminNavItem = $("#adminNavItem");
    const $adminBadgeItem = $("#adminBadgeItem");
    const $logoutNavItem = $("#logoutNavItem");
    const $loginText = $("#loginText");
    const $adminNameText = $("#adminNameText");
    
    if (isLoggedIn) {
        // Sembunyikan Login, tampilkan Dashboard, Badge Admin, Logout
        $loginNavItem.hide();
        $adminNavItem.show();
        $adminBadgeItem.show();
        $logoutNavItem.show();
        
        // Ubah teks menjadi Logout
        $loginText.html(`<i class="bi bi-box-arrow-right"></i> Logout`);
        
        // Tampilkan nama admin di badge
        $adminNameText.text(currentUser.displayName || currentUser.username || "Admin");
        
        // Event Logout
        $("#navLogoutLink").off("click").on("click", function(e) {
            e.preventDefault();
            logoutUser();
        });
    } else {
        // Tampilkan Login, sembunyikan Dashboard, Badge Admin, Logout
        $loginNavItem.show();
        $adminNavItem.hide();
        $adminBadgeItem.hide();
        $logoutNavItem.hide();
        
        // Reset teks Login
        const t = (typeof translations !== 'undefined' && translations[currentLangAuth]) ? translations[currentLangAuth] : { loginText: "Login" };
        $loginText.html(`<i class="bi bi-box-arrow-in-right"></i> ${t.loginText || "Login"}`);
    }
}

function logoutUser() {
    // Hapus semua data session
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isAdmin");
    
    // Redirect ke halaman index
    window.location.href = "index.html";
}

// Inisialisasi saat halaman dimuat
$(document).ready(function() {
    checkLoginStatus();
});