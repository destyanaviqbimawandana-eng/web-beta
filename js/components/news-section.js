function renderNewsSection() {
    const newsHtml = `
        <section class="container my-5">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="section-title">📰 Berita Terbaru</h2>
                <span class="badge bg-primary" id="newsCount">0 Berita</span>
            </div>
            <div id="newsContainer" class="row g-4"></div>
            <div class="text-center mt-4" id="loadMoreContainer">
                <button id="loadMoreBtn" class="btn btn-outline-primary rounded-pill px-4">
                    <i class="bi bi-arrow-down"></i> Muat Lebih Banyak
                </button>
            </div>
            <div id="noMoreNews" class="text-center my-4" style="display: none;">
                <p class="text-muted"><i class="bi bi-inbox"></i> Tidak ada berita lagi</p>
            </div>
        </section>
    `;
    $("#newsSectionComponent").html(newsHtml);
}