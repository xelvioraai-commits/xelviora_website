// ==========================================
// XELVIORA WEBSITE
// script.js
// ==========================================

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });
});


// Navbar background on scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(5,8,22,0.95)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,0.35)";

    } else {

        navbar.style.background = "rgba(255,255,255,0.05)";
        navbar.style.boxShadow = "none";

    }

});


// Scroll reveal animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .industry-card, .about-card")
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);
    el.style.transitionProperty = "opacity, transform";


});


// Button ripple effect
document.querySelectorAll(".primary-btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = this.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        },600);

    });

});


// Current year in footer (optional)
const year = new Date().getFullYear();

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML = `© ${year} Xelviora. All Rights Reserved.`;

}

console.log("✅ Xelviora Loaded Successfully");
/* ==========================================
   Mouse Spotlight
========================================== */

const glow = document.querySelector(".mouse-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});
/* ==========================================
   Active Navigation
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
