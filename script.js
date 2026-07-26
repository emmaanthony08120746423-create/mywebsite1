

// Welcome Message
console.log("Welcome to Tony Furniture Brand!");

// Smooth button animation
const button = document.querySelector(".btn");

button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
});

// Hero text animation
const heroTitle = document.querySelector(".hero h1");

heroTitle.style.opacity = "0";
heroTitle.style.transform = "translateY(-50px)";

window.addEventListener("load", () => {
    heroTitle.style.transition = "all 1s ease";
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";
});

// Navbar shadow when scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }
});