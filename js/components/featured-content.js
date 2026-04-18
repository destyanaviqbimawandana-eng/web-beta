// Data featured content (bisa disimpan di localStorage)
let featuredData = [];

function initFeaturedContent() {
    const saved = localStorage.getItem("featuredContent");
    if (saved && JSON.parse(saved).length > 0) {
        featuredData = JSON.parse(saved);
    } else {
        featuredData = [
            {
                id: 1,
                title: "Program Unggulan 2025",
                description: "Ikuti program pelatihan terbaik kami dengan kurikulum terkini dan pengajar profesional.",
                image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
                badge: "Program",
                link: "about.html",
                date: "Jan - Des 2025",
                info: "500+ Peserta"
            },
            {
                id: 2,
                title: "Layanan Konsultasi Online",
                description: "Konsultasi dengan ahli kami secara online. Jadwalkan sekarang juga!",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
                badge: "Layanan",
                link: "customer-service.html",
                date: "24/7 Available",
                info: "Live Chat"
            },
            {
                id: 3,
                title: "5 Tahun LembagaKita",
                description: "Rayakan 5 tahun perjalanan LembagaKita dalam melayani pendidikan Indonesia.",
                image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",
                badge: "Info",
                link: "sejarah.html",
                date: "Diskon 50%",
                info: "Spesial Anniversary"
            }
        ];
        localStorage.setItem("featuredContent", JSON.stringify(featuredData));
    }
}

function renderFeaturedContent() {
    initFeaturedContent();
    
    let html = `
        <div class="text-center mb-5">
            <h2 class="section-title">📌 Konten Unggulan</h2>
            <p class="text-muted">Informasi dan kegiatan terbaru dari LembagaKita</p>
        </div>
        <div class="row g-4">
    `;
    
    featuredData.forEach(item => {
        html += `
            <div class="col-md-6 col-lg-4">
                <div class="featured-card" onclick="window.location.href='${item.link}'">
                    <div class="featured-image">
                        <img src="${item.image}" alt="${item.title}">
                        <span class="featured-badge">${item.badge}</span>
                    </div>
                    <div class="featured-body">
                        <h4>${escapeHtml(item.title)}</h4>
                        <p>${escapeHtml(item.description)}</p>
                        <div class="featured-meta">
                            <span><i class="bi bi-calendar3"></i> ${item.date}</span>
                            <span><i class="bi bi-people"></i> ${item.info}</span>
                        </div>
                        <a href="${item.link}" class="btn btn-sm btn-outline-primary mt-2">Selengkapnya →</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    // Sisipkan setelah hero section
    if ($(".featured-section").length === 0) {
        $(".hero-section").after(`<section class="container my-5 featured-section">${html}</section>`);
    } else {
        $(".featured-section").html(html);
    }
}

// Panggil fungsi ini di $(document).ready()