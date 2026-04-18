function renderFooter() {
    const footerHtml = `
        <div class="footer-mini">
            <i class="bi bi-envelope-fill"></i> <span id="footerEmail">Layanan 24 Jam: help@lembagakita.id</span> | 
            <i class="bi bi-telephone-fill"></i> <span id="footerPhone">(021) 1234-5678</span>
        </div>
    `;
    $("#footerComponent").html(footerHtml);
}