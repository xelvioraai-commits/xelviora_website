/* ==========================================
   XEL ENGINE V3
========================================== */

const xel = document.getElementById("xel");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

window.addEventListener("load", startXel);

/* ==========================================
   START
========================================== */

function startXel(){

    const btn = discoveryBtn.getBoundingClientRect();

    gsap.set(xel,{

        x: btn.right - 25,

        y: btn.top + btn.height/2 - 45,

        scale:0.75,

        rotation:0

    });

    console.log("Xel positioned.");

}
