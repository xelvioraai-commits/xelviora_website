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

    gsap.set(xel,{

        x:300,

        y:300,

        scale:0.8,

        rotation:0

    });

    console.log("Xel Test Position");

}
