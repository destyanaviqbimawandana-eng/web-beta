$(document).ready(function() {
    $("#registrationForm").on("submit", function(e) {
        e.preventDefault();
        const data = {
            id: Date.now(),
            name: $("#regName").val().trim(),
            email: $("#regEmail").val().trim(),
            phone: $("#regPhone").val().trim(),
            program: $("#regProgram").val(),
            address: $("#regAddress").val().trim(),
            education: $("#regEducation").val(),
            info: $("#regInfo").val().trim(),
            date: new Date().toLocaleString('id-ID'),
            status: "pending"
        };
        if (!data.name || !data.email || !data.phone || !data.program) {
            alert("Mohon isi semua field yang wajib (*)!");
            return;
        }
        let registrations = JSON.parse(localStorage.getItem("registrations") || "[]");
        registrations.unshift(data);
        localStorage.setItem("registrations", JSON.stringify(registrations));
        $("#registrationSuccess").removeClass("d-none");
        $("#registrationForm")[0].reset();
        $("html, body").animate({ scrollTop: 0 }, 500);
        setTimeout(() => $("#registrationSuccess").addClass("d-none"), 5000);
    });
});