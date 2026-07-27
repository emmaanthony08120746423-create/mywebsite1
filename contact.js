

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappNumber = "2348120746423";

    const text = `Hello Tony Furniture Brand!

My Name: ${name}
Phone number: ${phone}

Message:
${message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.location.href = url;
});