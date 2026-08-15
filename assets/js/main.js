const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links1");

// =========================================
// ACTIVE NAVIGATION
// =========================================

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// =========================================
// MOBILE MENU
// =========================================

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

// =========================================
// DARK / LIGHT MODE
// =========================================

const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

sun.addEventListener("click", () => {
    document.body.classList.add("light-mode");

    sun.style.display = "none";
    moon.style.display = "block";
});

moon.addEventListener("click", () => {
    document.body.classList.remove("light-mode");

    moon.style.display = "none";
    sun.style.display = "block";
});

// =========================================
// ABOUT MODAL
// =========================================

const aboutModal = document.getElementById("aboutModal");
const openAboutModal = document.getElementById("openAboutModal");
const closeAboutModal = document.getElementById("closeAboutModal");

openAboutModal.addEventListener("click", function () {
    aboutModal.classList.add("show");
    document.body.style.overflow = "hidden";
});

closeAboutModal.addEventListener("click", function () {
    aboutModal.classList.remove("show");
    document.body.style.overflow = "";
});

aboutModal.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
        aboutModal.classList.remove("show");
        document.body.style.overflow = "";
    }
});

// =========================================
// SKILLS MODAL
// =========================================

const skillsModal = document.getElementById("skillsModal");
const openSkillsModal = document.getElementById("openSkillsModal");
const closeSkillsModal = document.getElementById("closeSkillsModal");
const skillsContactBtn = document.getElementById("skillsContactBtn");

openSkillsModal.addEventListener("click", function (event) {
    event.preventDefault();

    skillsModal.classList.add("show");
    document.body.style.overflow = "hidden";
});

closeSkillsModal.addEventListener("click", function () {
    skillsModal.classList.remove("show");
    document.body.style.overflow = "";
});

skillsModal.addEventListener("click", function (event) {
    if (event.target === skillsModal) {
        skillsModal.classList.remove("show");
        document.body.style.overflow = "";
    }
});

if (skillsContactBtn) {
    skillsContactBtn.addEventListener("click", function () {
        skillsModal.classList.remove("show");
        document.body.style.overflow = "";
    });
}

// =========================================
// ESC KEY - CLOSE MODALS
// =========================================

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        if (aboutModal) {
            aboutModal.classList.remove("show");
        }

        if (skillsModal) {
            skillsModal.classList.remove("show");
        }

        document.body.style.overflow = "";
    }
});