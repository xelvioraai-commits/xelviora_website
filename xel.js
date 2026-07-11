/* ==========================================
   XEL ENGINE V4
========================================== */

const xel = document.getElementById("xel");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

window.addEventListener("load", startXel);

function startXel(){

    hideBubble();

    positionBehindButton();

}

function hideBubble(){

    gsap.set(bubble,{
        opacity:0
    });

}

function positionBehindButton(){

    const rect = discoveryBtn.getBoundingClientRect();

    gsap.set(xel,{

        x: rect.left + rect.width - 55,

        y: rect.top + 15,

        scale:0.85

    });

}
