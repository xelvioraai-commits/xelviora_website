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

    // Peek
    .to(xel,{
        x:"-=18",
        duration:0.45,
        ease:"power2.out"
    })

    // Hide again
    .to(xel,{
        x:"+=18",
        duration:0.25
    })

    // Peek further
    .to(xel,{
        x:"-=35",
        duration:0.45,
        ease:"back.out(2)"
    });

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
