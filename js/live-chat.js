// ======================= LIVE CHAT GLOBAL (DIPERBAIKI) =======================
(function() {
    // Tunggu hingga DOM siap
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLiveChat);
    } else {
        initLiveChat();
    }
    
    function initLiveChat() {
        console.log("Live Chat JS loaded");
        
        // Cek apakah elemen live chat sudah ada
        if (document.getElementById("globalLiveChat")) {
            console.log("Live Chat sudah ada");
            return;
        }
        
        // Data kata kunci dan balasan
        const chatResponses = {
            "halo": "Halo! Ada yang bisa saya bantu? 😊",
            "hai": "Hai! Selamat datang di layanan CS LembagaKita.",
            "help": "Saya bisa membantu informasi: jam operasional, alamat, email, telepon, pendaftaran.",
            "jam operasional": "Jam operasional: Senin - Sabtu, 08.00 - 16.30 WIB.",
            "alamat": "Alamat: Jl. Semanding, Banggle, Kec. Kanigoro, Kabupaten Blitar.",
            "email": "Email: cs@lembagakita.id | support@lembagakita.id",
            "telepon": "Telepon: (021) 1234-5678 | WhatsApp: +62 812-3456-7890",
            "pendaftaran": "Pendaftaran bisa dilakukan online melalui website.",
            "terima kasih": "Sama-sama! Senang bisa membantu Anda. 😊"
        };
        
        function getChatResponse(message) {
            const lowerMsg = message.toLowerCase();
            for (const [key, response] of Object.entries(chatResponses)) {
                if (lowerMsg.includes(key)) {
                    return response;
                }
            }
            return "Maaf, saya tidak mengerti. Hubungi (021) 1234-5678 atau email cs@lembagakita.id";
        }
        
        function escapeHtml(text) {
            if (!text) return '';
            return String(text).replace(/[&<>]/g, function(m) {
                if (m === '&') return '&amp;';
                if (m === '<') return '&lt;';
                if (m === '>') return '&gt;';
                return m;
            });
        }
        
        // HTML Live Chat
        const liveChatHTML = `
            <div id="globalLiveChat">
                <style>
                    .live-chat-btn {
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        width: 60px;
                        height: 60px;
                        background: linear-gradient(135deg, #25D366, #128C7E);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                        transition: all 0.3s ease;
                        z-index: 1000;
                        border: none;
                        color: white;
                        font-size: 28px;
                    }
                    .live-chat-btn:hover { transform: scale(1.1); }
                    .live-chat-window {
                        position: fixed;
                        bottom: 100px;
                        right: 30px;
                        width: 350px;
                        height: 450px;
                        background: white;
                        border-radius: 20px;
                        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                        display: none;
                        flex-direction: column;
                        overflow: hidden;
                        z-index: 1001;
                        animation: slideUp 0.3s ease;
                    }
                    .live-chat-window.active { display: flex; }
                    .live-chat-header {
                        background: linear-gradient(135deg, #25D366, #128C7E);
                        color: white;
                        padding: 15px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .live-chat-header-info { display: flex; align-items: center; gap: 10px; }
                    .live-chat-header-info i { font-size: 24px; }
                    .live-chat-close { background: none; border: none; color: white; font-size: 18px; cursor: pointer; }
                    .live-chat-messages {
                        flex: 1;
                        padding: 15px;
                        overflow-y: auto;
                        background: #f5f7fa;
                        display: flex;
                        flex-direction: column;
                        gap: 12px;
                    }
                    .chat-message { display: flex; flex-direction: column; max-width: 85%; }
                    .chat-message.user { align-self: flex-end; }
                    .chat-message.bot { align-self: flex-start; }
                    .chat-message-content {
                        padding: 10px 14px;
                        border-radius: 18px;
                        font-size: 13px;
                        line-height: 1.4;
                        word-wrap: break-word;
                    }
                    .chat-message.user .chat-message-content {
                        background: #25D366;
                        color: white;
                        border-bottom-right-radius: 5px;
                    }
                    .chat-message.bot .chat-message-content {
                        background: white;
                        color: #333;
                        border-bottom-left-radius: 5px;
                        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
                    }
                    .chat-time { font-size: 10px; color: #999; margin-top: 4px; margin-left: 8px; }
                    .live-chat-input {
                        display: flex;
                        padding: 12px;
                        background: white;
                        border-top: 1px solid #eee;
                        gap: 8px;
                    }
                    .live-chat-input input {
                        flex: 1;
                        padding: 10px 15px;
                        border: 1px solid #ddd;
                        border-radius: 25px;
                        outline: none;
                        font-size: 13px;
                    }
                    .live-chat-input input:focus { border-color: #25D366; }
                    .live-chat-input button {
                        background: #25D366;
                        border: none;
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        color: white;
                        cursor: pointer;
                        transition: 0.2s;
                    }
                    .live-chat-input button:hover { background: #128C7E; transform: scale(1.02); }
                    @keyframes slideUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                </style>
                <button class="live-chat-btn" id="liveChatBtn">
                    <i class="bi bi-chat-dots-fill"></i>
                </button>
                <div class="live-chat-window" id="liveChatWindow">
                    <div class="live-chat-header">
                        <div class="live-chat-header-info">
                            <i class="bi bi-robot"></i>
                            <div>
                                <h6 class="mb-0">CS Assistant</h6>
                                <small>Online</small>
                            </div>
                        </div>
                        <button class="live-chat-close" id="liveChatClose"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <div class="live-chat-messages" id="liveChatMessages">
                        <div class="chat-message bot">
                            <div class="chat-message-content">Halo! Ada yang bisa saya bantu? kalau bingung mau ngapain ketik 'help' ya atau hubungi no cs kita. 😊</div>
                            <div class="chat-time">Now</div>
                        </div>
                    </div>
                    <div class="live-chat-input">
                        <input type="text" id="liveChatInput" placeholder="Tulis pesan...">
                        <button id="liveChatSend"><i class="bi bi-send-fill"></i></button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', liveChatHTML);
        
        // Event handlers menggunakan vanilla JS
        const liveChatBtn = document.getElementById("liveChatBtn");
        const liveChatWindow = document.getElementById("liveChatWindow");
        const liveChatClose = document.getElementById("liveChatClose");
        const liveChatSend = document.getElementById("liveChatSend");
        const liveChatInput = document.getElementById("liveChatInput");
        const liveChatMessages = document.getElementById("liveChatMessages");
        
        function addChatMessage(text, sender) {
            const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const messageDiv = document.createElement('div');
            messageDiv.className = `chat-message ${sender}`;
            messageDiv.innerHTML = `<div class="chat-message-content">${escapeHtml(text)}</div><div class="chat-time">${time}</div>`;
            liveChatMessages.appendChild(messageDiv);
            liveChatMessages.scrollTop = liveChatMessages.scrollHeight;
        }
        
        function sendChatMessage() {
            const message = liveChatInput.value.trim();
            if (message === "") return;
            
            addChatMessage(message, "user");
            liveChatInput.value = "";
            
            // Tampilkan indikator typing
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chat-message bot typing-indicator';
            typingDiv.innerHTML = '<div class="chat-message-content">...</div>';
            liveChatMessages.appendChild(typingDiv);
            liveChatMessages.scrollTop = liveChatMessages.scrollHeight;
            
            setTimeout(() => {
                typingDiv.remove();
                const response = getChatResponse(message);
                addChatMessage(response, "bot");
            }, 500);
        }
        
        if (liveChatBtn) {
            liveChatBtn.addEventListener('click', function() {
                liveChatWindow.classList.toggle('active');
            });
        }
        
        if (liveChatClose) {
            liveChatClose.addEventListener('click', function() {
                liveChatWindow.classList.remove('active');
            });
        }
        
        if (liveChatSend) {
            liveChatSend.addEventListener('click', sendChatMessage);
        }
        
        if (liveChatInput) {
            liveChatInput.addEventListener('keypress', function(e) {
                if (e.which === 13) {
                    e.preventDefault();
                    sendChatMessage();
                }
            });
        }
        
        console.log("Live Chat berhasil dipasang!");
    }
})();