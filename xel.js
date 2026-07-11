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

 const tl = gsap.timeline();

tl

.to({},{
    duration:0.8
})

.to(xel,{
    x:"-=15",
    y:"-=8",
    rotation:-8,
    duration:0.28,
    ease:"power2.out"
})

.to(xel,{
    x:"+=15",
    y:"+=8",
    rotation:0,
    duration:0.22,
    ease:"power2.in"
})

.to(xel,{
    x:"-=30",
    y:"-=14",
    rotation:-10,
    duration:0.35,
    ease:"back.out(2)"
});

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
