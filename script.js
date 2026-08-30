// ===============================
// DARK / LIGHT MODE TOGGLE
// ===============================

const themeBtn = document.getElementById("themeBtn");
const themeIcon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeIcon.className = "fa-regular fa-sun";
    } else {
        themeIcon.className = "fa-regular fa-moon";
    }
});

// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
    });
});

// ===============================
// ACTIVE NAVIGATION SCROLL TRACKING
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});