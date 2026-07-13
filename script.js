/* ==========================================================
   XEL ENGINE 1.0
   FEATURE 1 - POSITION ENGINE
========================================================== */

const xel = document.getElementById("xel");
const button = document.getElementById("discovery-btn");
const hero = document.getElementById("hero-title");

const POS = {};

window.addEventListener("load", initXel);
window.addEventListener("resize", calculatePositions);

function initXel(){

    calculatePositions();

    moveTo("home",0);

    playIntro();

    console.log("XEL INTRO READY");

}

/* ==========================================================
   POSITIONS
========================================================== */

function calculatePositions(){

    const btn = button.getBoundingClientRect();

    const title = hero.getBoundingClientRect();

    POS.home = {

        x:window.innerWidth-120,

        y:window.innerHeight-120

    };

    POS.button = {

        x:btn.right-30,

        y:btn.top+8

    };

    POS.hero = {

        x:title.left+(title.width*0.42),

        y:title.top+18

    };

}

/* ==========================================================
   MOVE
========================================================== */

function moveTo(position,duration=.9){

    gsap.to(xel,{

        x:POS[position].x,

        y:POS[position].y,

        duration,

        ease:"power2.inOut"

    });

}

/* ==========================================================
   INTRO TIMELINE
========================================================== */

function playIntro(){

    const tl = gsap.timeline({

        delay:.8

    });

    // Move to navbar

    tl.to(xel,{

        x:POS.button.x,

        y:POS.button.y,

        duration:.9,

        ease:"power2.inOut"

    });

    // Peek

    tl.to(xel,{

        y:POS.button.y-18,

        duration:.28,

        ease:"power2.out"

    });

    // Peek back

    tl.to(xel,{

        y:POS.button.y,

        duration:.20,

        ease:"power2.in"

    });

    // Big jump

    tl.to(xel,{

        x:POS.hero.x,

        y:POS.hero.y,

        scale:1,

        duration:1.1,

        ease:"back.inOut(1.6)"

    });

}
// Landing bounce

tl.to(xel,{

    y:POS.hero.y-15,

    duration:.12,

    yoyo:true,

    repeat:1

});

// Wave

tl.to("#xel-img",{

    rotation:18,

    duration:.12,

    repeat:5,

    yoyo:true,

    transformOrigin:"bottom center"

});

// Bubble

tl.call(showBubble);

// Wait

tl.to({},{

    duration:2

});

// Hide bubble

tl.call(hideBubble);
/* ==========================================================
   BUBBLE
========================================================== */

function showBubble(){

    const bubble=document.getElementById("xel-message");

    gsap.set(bubble,{

        x:POS.hero.x+70,

        y:POS.hero.y-30

    });

    gsap.to(bubble,{

        opacity:1,

        scale:1,

        y:POS.hero.y-45,

        duration:.45,

        ease:"back.out(1.8)"

    });

}

function hideBubble(){

    gsap.to("#xel-message",{

        opacity:0,

        scale:.8,

        duration:.35

    });

}
