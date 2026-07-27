

const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const whatsappNumber = "2348XXXXXXXXX"; // Replace with your dad's WhatsApp number

        const text = Hello Tony Furniture Brand!

My Name: ${name}
Phone: ${phone}

Message:
${message};

        const url = "https://wa.me/2348120746423";

        window.open(url, "_blank");
    });
}