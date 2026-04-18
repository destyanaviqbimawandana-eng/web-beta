function renderAboutSection() {
    const aboutHtml = `
        <section class="container my-5 fadeInUp">
            <div class="row align-items-center">
                <div class="col-md-6 mb-4 mb-md-0">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" 
                         alt="Tentang LembagaKita" 
                         class="img-fluid rounded-4 shadow-lg"
                         style="width: 100%;">
                </div>
                <div class="col-md-6">
                    <h2 class="section-title mb-4">Tentang LembagaKita</h2>
                    <p class="lead text-primary fw-bold">Semangat Proklamator dalam Setiap Pelayanan</p>
                    <p>LembagaKita adalah platform resmi yang didirikan pada tahun 2020 untuk memberikan akses informasi, layanan pendidikan, pelatihan profesional, serta konsultasi kelembagaan. Kami berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat dengan mengedepankan nilai-nilai integritas, profesionalisme, dan inovasi.</p>
                    <p>Dengan dukungan teknologi terkini, kami menyediakan informasi secara transparan serta customer service yang responsif. Bergabunglah bersama ribuan alumni yang telah merasakan manfaat layanan kami.</p>
                    <div class="row mt-4">
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-check-circle-fill text-success fs-4"></i>
                                <div>
                                    <h5 class="mb-0">Terakreditasi A</h5>
                                    <small class="text-muted">Kemendikbudristek</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="d-flex align-items-center gap-2">
                                <i class="bi bi-trophy-fill text-warning fs-4"></i>
                                <div>
                                    <h5 class="mb-0">10+ Penghargaan</h5>
                                    <small class="text-muted">Nasional & Internasional</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="about.html" class="btn btn-primary rounded-pill px-4 mt-4">
                        <i class="bi bi-arrow-right"></i> Selengkapnya
                    </a>
                </div>
            </div>
        </section>
    `;
    $("#aboutSectionComponent").html(aboutHtml);
}