function renderHero() {
    const heroHtml = `
        <section class="hero-section">
            <div class="container">
                <div class="welcome-title" id="welcomeTitle">Selamat Datang di Web Lembaga</div>
                <div class="search-container mt-4">
                    <div class="search-wrapper">
                        <input type="text" id="globalSearchInput" class="search-input" placeholder="Cari berita, informasi...">
                        <button id="globalSearchBtn" class="search-btn"><i class="bi bi-search"></i> <span>Cari</span></button>
                    </div>
                    <div id="searchResultInfo" class="mt-3 text-start"></div>
                </div>
            </div>
        </section>
    `;
    $("#heroComponent").html(heroHtml);
}