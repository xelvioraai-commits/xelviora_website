/* ==========================================
   XEL ENGINE 3.0
========================================== */

const xel = document.getElementById("xel");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

window.addEventListener("load", startXel);

function startXel(){

    const btn = discoveryBtn.getBoundingClientRect();

    const hero = heroTitle.getBoundingClientRect();

    const startX = btn.right - 35;
    const startY = btn.top + 10;

    const heroX = hero.left + hero.width * 0.42;
    const heroY = hero.top + 25;

    const cornerX = window.innerWidth - 120;
    const cornerY = window.innerHeight - 120;

    gsap.set(xel,{
        x:startX,
        y:startY,
        scale:.82
    });

    gsap.set(bubble,{
        opacity:0
    });

    const tl = gsap.timeline();

    // Peek
    tl.to(xel,{
        y:startY-18,
        duration:.35,
        ease:"power2.out"
    });

    tl.to(xel,{
        y:startY,
        duration:.25,
        ease:"bounce.out"
    });

    // Jump to hero
    tl.to(xel,{
        x:heroX,
        y:heroY,
        scale:1,
        duration:1.2,
        ease:"power2.inOut"
    });

    // Bounce landing
    tl.to(xel,{
        y:"-=12",
        duration:.18,
        yoyo:true,
        repeat:1
    });

    // Wave
    tl.to("#xel-img",{
        rotation:18,
        duration:.18,
        transformOrigin:"bottom center",
        repeat:5,
        yoyo:true
    });

    // Bubble
    tl.call(showBubble);

    tl.to({},{
        duration:2
    });

    tl.call(hideBubble);

    // Return
    tl.to(xel,{
        x:cornerX,
        y:cornerY,
        scale:.85,
        duration:1,
        ease:"power2.inOut"
    });

    // Idle
    gsap.to(xel,{
        y:"-=8",
        repeat:-1,
        yoyo:true,
        ease:"sine.inOut",
        duration:1.8
    });

}

function showBubble(){

    bubble.style.left =
        (window.innerWidth-320)+"px";

    bubble.style.top =
        (window.innerHeight-220)+"px";

    bubble.style.opacity=1;

    bubble.style.transform="translateY(0)";

}

function hideBubble(){

    bubble.style.opacity=0;

}
