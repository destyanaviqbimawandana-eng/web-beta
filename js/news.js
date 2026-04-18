// ======================= DATA BERITA DEFAULT =======================
const defaultNews = [
    {
        id: 1,
        title: "LembagaKita Raih Akreditasi A",
        content: "Kami dengan bangga mengumumkan bahwa LembagaKita telah meraih akreditasi A dari Kementerian Pendidikan dan Kebudayaan.",
        category: "Prestasi",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600",
        date: new Date().toISOString().split('T')[0],
        status: "published",
        views: 1250,
        likes: 45,
        dislikes: 2
    },
    {
        id: 2,
        title: "Pendaftaran Program Pelatihan Digital Marketing Dibuka",
        content: "Program pelatihan Digital Marketing angkatan ke-5 kini telah dibuka pendaftarannya.",
        category: "Pengumuman",
        image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600",
        date: new Date().toISOString().split('T')[0],
        status: "published",
        views: 890,
        likes: 32,
        dislikes: 1
    },
    {
        id: 3,
        title: "Webinar Nasional Transformasi Digital",
        content: "Bergabunglah dalam webinar nasional tentang transformasi digital di era AI.",
        category: "Acara",
        image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
        date: new Date().toISOString().split('T')[0],
        status: "published",
        views: 2100,
        likes: 78,
        dislikes: 5
    },
    {
        id: 4,
        title: "Lowongan Staf Pengajar Programmer",
        content: "Kami membuka lowongan untuk posisi Staf Pengajar bidang Programming.",
        category: "Lowongan",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600",
        date: new Date().toISOString().split('T')[0],
        status: "published",
        views: 567,
        likes: 23,
        dislikes: 0
    },
    {
        id: 5,
        title: "Kerjasama dengan Universitas Korea Selatan",
        content: "LembagaKita menjalin kerjasama dengan universitas terkemuka di Korea Selatan.",
        category: "Berita",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600",
        date: new Date().toISOString().split('T')[0],
        status: "published",
        views: 743,
        likes: 56,
        dislikes: 3
    }
];

// ======================= INISIALISASI =======================
function initNewsData() {
    if (!localStorage.getItem("lembagaNews")) {
        localStorage.setItem("lembagaNews", JSON.stringify(defaultNews));
        console.log("✅ Data default berita disimpan");
    }
    if (!localStorage.getItem("newsComments")) {
        localStorage.setItem("newsComments", JSON.stringify({}));
    }
}

// ======================= AMBIL SEMUA BERITA =======================
function getAllNews() {
    initNewsData();
    const allNews = JSON.parse(localStorage.getItem("lembagaNews"));
    const published = allNews.filter(n => n.status === "published");
    return published.sort((a, b) => b.id - a.id);
}

function getAllNewsForAdmin() {
    initNewsData();
    return JSON.parse(localStorage.getItem("lembagaNews"));
}

// ======================= LIKE / DISLIKE =======================
function likeNews(newsId) {
    let allNews = getAllNewsForAdmin();
    const index = allNews.findIndex(n => n.id === newsId);
    if (index !== -1) {
        const likedNews = JSON.parse(localStorage.getItem("likedNews") || "[]");
        const dislikedNews = JSON.parse(localStorage.getItem("dislikedNews") || "[]");
        if (likedNews.includes(newsId)) {
            alert("Anda sudah menyukai berita ini sebelumnya!");
            return false;
        }
        if (dislikedNews.includes(newsId)) {
            const newDisliked = dislikedNews.filter(id => id !== newsId);
            localStorage.setItem("dislikedNews", JSON.stringify(newDisliked));
            allNews[index].dislikes--;
        }
        allNews[index].likes++;
        likedNews.push(newsId);
        localStorage.setItem("likedNews", JSON.stringify(likedNews));
        localStorage.setItem("lembagaNews", JSON.stringify(allNews));
        return true;
    }
    return false;
}

function dislikeNews(newsId) {
    let allNews = getAllNewsForAdmin();
    const index = allNews.findIndex(n => n.id === newsId);
    if (index !== -1) {
        const likedNews = JSON.parse(localStorage.getItem("likedNews") || "[]");
        const dislikedNews = JSON.parse(localStorage.getItem("dislikedNews") || "[]");
        if (dislikedNews.includes(newsId)) {
            alert("Anda sudah tidak menyukai berita ini sebelumnya!");
            return false;
        }
        if (likedNews.includes(newsId)) {
            const newLiked = likedNews.filter(id => id !== newsId);
            localStorage.setItem("likedNews", JSON.stringify(newLiked));
            allNews[index].likes--;
        }
        allNews[index].dislikes++;
        dislikedNews.push(newsId);
        localStorage.setItem("dislikedNews", JSON.stringify(dislikedNews));
        localStorage.setItem("lembagaNews", JSON.stringify(allNews));
        return true;
    }
    return false;
}

// ======================= KOMENTAR =======================
function getComments(newsId) {
    const allComments = JSON.parse(localStorage.getItem("newsComments") || "{}");
    return allComments[newsId] || [];
}

function addComment(newsId, name, comment) {
    if (!name || !comment) {
        alert("Nama dan komentar harus diisi!");
        return false;
    }
    const allComments = JSON.parse(localStorage.getItem("newsComments") || "{}");
    if (!allComments[newsId]) {
        allComments[newsId] = [];
    }
    allComments[newsId].unshift({
        id: Date.now(),
        name: name,
        comment: comment,
        date: new Date().toLocaleString('id-ID')
    });
    localStorage.setItem("newsComments", JSON.stringify(allComments));
    return true;
}

// ======================= CRUD ADMIN =======================
function addNewNews() {
    const title = $("#newsTitle").val().trim();
    const content = $("#newsContent").val().trim();
    const category = $("#newsCategory").val();
    const image = $("#newsImage").val().trim();
    const status = $("#newsStatus").val();
    if (!title || !content) {
        alert("Judul dan konten harus diisi!");
        return false;
    }
    const allNews = getAllNewsForAdmin();
    allNews.unshift({
        id: Date.now(),
        title: title,
        content: content,
        category: category,
        image: image || "https://placehold.co/600x400?text=Berita+Baru",
        date: new Date().toISOString().split('T')[0],
        status: status,
        views: 0,
        likes: 0,
        dislikes: 0
    });
    localStorage.setItem("lembagaNews", JSON.stringify(allNews));
    alert("✅ Berita berhasil ditambahkan!");
    return true;
}

function deleteNews(newsId) {
    let allNews = getAllNewsForAdmin();
    allNews = allNews.filter(n => n.id !== newsId);
    localStorage.setItem("lembagaNews", JSON.stringify(allNews));
    alert("✅ Berita berhasil dihapus!");
}

function incrementViewCount(newsId) {
    let allNews = getAllNewsForAdmin();
    const index = allNews.findIndex(n => n.id === newsId);
    if (index !== -1) {
        allNews[index].views++;
        localStorage.setItem("lembagaNews", JSON.stringify(allNews));
    }
}

// ======================= PAGINATION & FILTER =======================
let currentNewsData = [];
let currentPageNews = 1;
const itemsPerPage = 6;
let currentCategoryFilter = "semua";

function loadNews() {
    console.log("loadNews() dipanggil - mengambil data berita");
    
    // Ambil semua berita
    let allNews = getAllNews();
    console.log("Total berita sebelum filter:", allNews.length);
    
    // Terapkan filter kategori
    if (currentCategoryFilter !== "semua") {
        allNews = allNews.filter(n => n.category === currentCategoryFilter);
        console.log("Berita setelah filter", currentCategoryFilter + ":", allNews.length);
    }
    
    currentNewsData = allNews;
    currentPageNews = 1;
    
    // Kosongkan container
    $("#newsContainer").empty();
    $("#loadMoreContainer").show();
    $("#noMoreNews").hide();
    
    if (currentNewsData.length === 0) {
        $("#newsContainer").html(`
            <div class="col-12 text-center py-5">
                <i class="bi bi-newspaper fs-1 text-muted"></i>
                <h4>Belum Ada Berita</h4>
                <p>Silakan login sebagai admin untuk menambahkan berita</p>
            </div>
        `);
        $("#loadMoreContainer").hide();
    } else {
        // Tampilkan halaman pertama
        displayNewsPage();
    }
    
    // Update statistik
    $("#totalNewsStat").text(currentNewsData.length);
    $("#newsCount").text(`${currentNewsData.length} Berita`);
}

function displayNewsPage() {
    const start = (currentPageNews - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const newsToLoad = currentNewsData.slice(start, end);
    
    if (newsToLoad.length === 0) {
        $("#loadMoreContainer").hide();
        $("#noMoreNews").show();
        return;
    }
    
    displayNews(newsToLoad);
    currentPageNews++;
    
    if (end >= currentNewsData.length) {
        $("#loadMoreContainer").hide();
        $("#noMoreNews").show();
    }
}

function loadMoreNews() {
    console.log("loadMoreNews() dipanggil - memuat lebih banyak berita");
    displayNewsPage();
}

function displayNews(newsArray) {
    newsArray.forEach(news => {
        const icon = { 'Berita': '📰', 'Pengumuman': '📢', 'Acara': '🎉', 'Prestasi': '🏆', 'Lowongan': '💼' }[news.category] || '📰';
        const shortTitle = news.title.length > 60 ? news.title.substring(0, 60) + '...' : news.title;
        const shortContent = news.content.length > 100 ? news.content.substring(0, 100) + '...' : news.content;
        let imageUrl = news.image && news.image.trim() !== "" ? news.image : "https://placehold.co/600x400?text=Gambar+Tidak+Tersedia";
        
        const html = `
            <div class="col-md-6 col-lg-4">
                <div class="news-card" onclick="viewNewsDetail(${news.id})">
                    <div class="news-image-wrapper">
                        <img src="${imageUrl}" class="news-image" onerror="this.onerror=null; this.src='https://placehold.co/600x400?text=Gambar+Gagal+Dimuat';">
                        <span class="news-category ${news.category.toLowerCase()}">${icon} ${news.category}</span>
                    </div>
                    <div class="news-body">
                        <h5 class="news-title">${escapeHtml(shortTitle)}</h5>
                        <p class="news-excerpt">${escapeHtml(shortContent)}</p>
                        <div class="news-meta">
                            <span><i class="bi bi-calendar3"></i> ${news.date}</span>
                            <span><i class="bi bi-eye"></i> ${news.views} views</span>
                            <span><i class="bi bi-hand-thumbs-up"></i> ${news.likes}</span>
                            <span><i class="bi bi-hand-thumbs-down"></i> ${news.dislikes}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("#newsContainer").append(html);
    });
}

function filterByCategory(category) {
    console.log("filterByCategory dipanggil dengan kategori:", category);
    currentCategoryFilter = category;
    loadNews();
    $(".filter-btn").removeClass("active");
    $(`#filter-${category}`).addClass("active");
}

function searchNews(query) {
    const keyword = query.toLowerCase();
    currentNewsData = getAllNews().filter(n => n.title.toLowerCase().includes(keyword) || n.content.toLowerCase().includes(keyword));
    currentPageNews = 1;
    $("#newsContainer").empty();
    $("#loadMoreContainer").show();
    $("#noMoreNews").hide();
    displayNewsPage();
    $("#newsCount").text(`${currentNewsData.length} Berita ditemukan`);
}

function escapeHtml(text) {
    if (!text) return '';
    return String(text).replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : m === '>' ? '&gt;' : m);
}

// ======================= DETAIL BERITA MODAL =======================
function viewNewsDetail(id) {
    const news = getAllNews().find(n => n.id === id);
    if (!news) return;
    incrementViewCount(id);
    const comments = getComments(id);
    let commentsHtml = '';
    if (comments.length > 0) {
        commentsHtml = '<h6 class="mt-4"><i class="bi bi-chat-dots"></i> Komentar (' + comments.length + ')</h6><div class="comments-list">';
        comments.forEach(c => {
            commentsHtml += `<div class="comment-item mb-3 p-2 bg-light rounded"><strong><i class="bi bi-person-circle"></i> ${escapeHtml(c.name)}</strong> <small class="text-muted float-end">${c.date}</small><p class="mb-0 mt-1">${escapeHtml(c.comment)}</p></div>`;
        });
        commentsHtml += '</div>';
    } else {
        commentsHtml = '<p class="text-muted mt-3">Belum ada komentar. Jadilah yang pertama!</p>';
    }
    const modal = `<div class="modal fade" id="newsModal" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content rounded-4"><div class="modal-header border-0"><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body p-4"><img src="${news.image}" class="img-fluid rounded-3 mb-4 w-100" style="max-height:300px; object-fit:cover;" onerror="this.src='https://placehold.co/800x400?text=Gambar+Gagal+Dimuat'"><span class="badge bg-primary mb-2">${news.category}</span><h2>${escapeHtml(news.title)}</h2><div class="d-flex justify-content-between align-items-center mb-3"><div><span class="text-muted me-3"><i class="bi bi-calendar3"></i> ${news.date}</span><span class="text-muted"><i class="bi bi-eye"></i> ${news.views} views</span></div><div><button class="btn btn-sm btn-outline-success me-1" onclick="likeNewsBtn(${news.id})"><i class="bi bi-hand-thumbs-up"></i> ${news.likes}</button><button class="btn btn-sm btn-outline-danger" onclick="dislikeNewsBtn(${news.id})"><i class="bi bi-hand-thumbs-down"></i> ${news.dislikes}</button></div></div><div class="news-full-content" style="line-height:1.8;">${escapeHtml(news.content).replace(/\n/g,'<br>')}</div><hr><h5><i class="bi bi-chat-dots"></i> Tinggalkan Komentar</h5><form id="commentForm" onsubmit="submitComment(event, ${news.id})"><div class="row g-2"><div class="col-md-4"><input type="text" id="commentName" class="form-control" placeholder="Nama Anda" required></div><div class="col-md-8"><div class="input-group"><input type="text" id="commentText" class="form-control" placeholder="Tulis komentar..." required><button class="btn btn-primary" type="submit"><i class="bi bi-send"></i> Kirim</button></div></div></div></form>${commentsHtml}</div></div></div></div>`;
    $("#newsModal").remove();
    $("body").append(modal);
    new bootstrap.Modal(document.getElementById('newsModal')).show();
}

function likeNewsBtn(newsId) { if (likeNews(newsId)) viewNewsDetail(newsId); }
function dislikeNewsBtn(newsId) { if (dislikeNews(newsId)) viewNewsDetail(newsId); }
function submitComment(event, newsId) {
    event.preventDefault();
    const name = $("#commentName").val().trim();
    const comment = $("#commentText").val().trim();
    if (addComment(newsId, name, comment)) {
        $("#commentName").val("");
        $("#commentText").val("");
        viewNewsDetail(newsId);
    }
}

// Event Load More
$(document).on('click', '#loadMoreBtn', function() { 
    console.log("Tombol Load More diklik via event delegation");
    loadMoreNews(); 
});

// Inisialisasi
initNewsData();
console.log("✅ news.js loaded, total berita awal:", getAllNews().length);