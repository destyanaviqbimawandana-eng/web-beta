function renderNavbar() {
    const navbarHtml = `
        <nav class="navbar navbar-expand-lg bg-white shadow-sm py-2 sticky-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <span class="brand-icon"><i class="bi bi-building"></i></span> 
                    <span id="institutionName">LembagaKita</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarMenu">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active" href="index.html"><i class="bi bi-house-door"></i> <span id="menuHome">Beranda</span></a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"><i class="bi bi-person-badge"></i> <span id="menuProfile">Profil</span></a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="sejarah.html"><i class="bi bi-clock-history"></i> <span id="menuHistory">Sejarah Lembaga</span></a></li>
                                <li><a class="dropdown-item" href="visi-misi.html"><i class="bi bi-eye"></i> <span id="menuVision">Visi & Misi</span></a></li>
                                <li><a class="dropdown-item" href="struktur.html"><i class="bi bi-diagram-3"></i> <span id="menuStructure">Struktur Organisasi</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="customer-service.html"><i class="bi bi-headset"></i> <span id="menuCs">Customer Service</span></a></li>
                        <li class="nav-item"><a class="nav-link" href="about.html"><i class="bi bi-info-circle"></i> <span id="menuAbout">Tentang Kami</span></a></li>
                        <li class="nav-item" id="adminNavItem" style="display: none;"><a class="nav-link" href="admin-dashboard.html"><i class="bi bi-speedometer2"></i> <span id="adminText">Dashboard</span></a></li>
                        <li class="nav-item" id="loginNavItem"><a class="nav-link" href="login.html"><i class="bi bi-box-arrow-in-right"></i> <span id="loginText">Login</span></a></li>
                        <li class="nav-item" id="adminBadgeItem" style="display: none;"><span class="nav-link"><span class="admin-badge"><i class="bi bi-person-circle"></i> <span id="adminNameText">Admin</span></span></span></li>
                        <li class="nav-item" id="logoutNavItem" style="display: none;"><a class="nav-link logout-btn" href="#" id="navLogoutLink"><i class="bi bi-box-arrow-right"></i> <span id="logoutText">Logout</span></a></li>
                        <li class="nav-item"><div class="language-selector"><span class="lang-option" id="langId">🇮🇩 ID</span><span class="lang-option" id="langEn">🇬🇧 EN</span></div></li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    $("#navbarComponent").html(navbarHtml);
}