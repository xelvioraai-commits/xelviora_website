/* ==========================================
   XEL ENGINE V3
========================================== */

const xel = document.getElementById("xel");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

/* ==========================================
   START
========================================== */

window.addEventListener("load", startXel);

function startXel(){

    gsap.set(xel,{

        x:0,
        y:0,
        scale:0.8,
        rotation:0

    });

    console.log("XEL V3 READY");

}
