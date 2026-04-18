function renderStatsSection() {
    const statsHtml = `
        <section class="container my-5">
            <div class="row g-4 text-center">
                <div class="col-md-3 col-6">
                    <div class="stat-card">
                        <i class="bi bi-newspaper fs-1 text-primary"></i>
                        <h3 id="totalNewsStat">0</h3>
                        <p>Total Berita</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="stat-card">
                        <i class="bi bi-people fs-1 text-primary"></i>
                        <h3>10,000+</h3>
                        <p>Alumni</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="stat-card">
                        <i class="bi bi-building fs-1 text-primary"></i>
                        <h3>500+</h3>
                        <p>Program Kerja</p>
                    </div>
                </div>
                <div class="col-md-3 col-6">
                    <div class="stat-card">
                        <i class="bi bi-star-fill fs-1 text-warning"></i>
                        <h3>4.9</h3>
                        <p>Rating</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    $("#statsSectionComponent").html(statsHtml);
}