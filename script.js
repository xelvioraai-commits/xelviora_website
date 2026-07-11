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

    console.log("XEL POSITION ENGINE READY");

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
   DEBUG KEYS
========================================================== */

window.addEventListener("keydown",(e)=>{

    if(e.key==="1"){

        moveTo("button");

    }

    if(e.key==="2"){

        moveTo("hero");

    }

    if(e.key==="3"){

        moveTo("home");

    }

});
