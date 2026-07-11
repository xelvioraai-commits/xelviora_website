/* ==========================================
   XEL ENGINE 2.0
========================================== */

const xel = document.getElementById("xel");

window.addEventListener("load", initXel);

function initXel(){

    gsap.set(xel,{
        x:window.innerWidth-120,
        y:window.innerHeight-120
    });

    console.log("XEL READY");

}
