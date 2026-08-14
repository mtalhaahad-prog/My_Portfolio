const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links1");


// Active Navigation
navLinks.forEach(link => {

    link.addEventListener("click", function () {

        // Remove active from all links
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        // Add active to clicked link
        this.classList.add("active");

    });

});


// Mobile Menu
menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");


// Sun → Light Mode
sun.addEventListener("click", () => {

    document.body.classList.add("light-mode");

    sun.style.display = "none";
    moon.style.display = "block";

});


// Moon → Dark Mode
moon.addEventListener("click", () => {

    document.body.classList.remove("light-mode");

    moon.style.display = "none";
    sun.style.display = "block";

});