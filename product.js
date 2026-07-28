

function contactWhatsApp(product) {

    const phone = "2348032108288";

    const message = `Hello Tony Furniture Brand,

I am interested in your ${product} design.

I would like to know more details.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.location.href = url;
}