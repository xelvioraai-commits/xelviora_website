/* ==========================================
   XEL ENGINE V5
========================================== */

const xel = document.getElementById("xel");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

let POSITIONS = {};

/* ==========================================
   START
========================================== */

window.addEventListener("load", initXel);
window.addEventListener("resize", calculatePositions);

function initXel(){

    calculatePositions();

    gsap.set(xel,{
        x:POSITIONS.button.x,
        y:POSITIONS.button.y,
        scale:0.85,
        rotation:0
    });

    gsap.set(bubble,{
        opacity:0
    });

    console.log("XEL ENGINE V5 READY");

}
/* ==========================================
   CALCULATE POSITIONS
========================================== */

function calculatePositions(){

    const btn = discoveryBtn.getBoundingClientRect();

    const hero = heroTitle.getBoundingClientRect();

    POSITIONS = {

        button:{
    x:btn.left + btn.width - 40,
    y:btn.top + 20
},

        hero:{
            x:hero.left+hero.width*0.42,
            y:hero.top+35
        },

        corner:{
            x:window.innerWidth-120,
            y:window.innerHeight-140
        }

    };

}
/* ==========================================
   MOVE
========================================== */

function moveTo(position,duration=1){

    return gsap.to(xel,{

        x:position.x,

        y:position.y,

        duration,

        ease:"power2.inOut"

    });

}
/* ==========================================
   TEST
========================================== */

window.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "ArrowLeft":
            gsap.set(xel,{x:"-=10"});
            break;

        case "ArrowRight":
            gsap.set(xel,{x:"+=10"});
            break;

        case "ArrowUp":
            gsap.set(xel,{y:"-=10"});
            break;

        case "ArrowDown":
            gsap.set(xel,{y:"+=10"});
            break;

        case "1":
            moveTo(POSITIONS.button);
            break;

        case "2":
            moveTo(POSITIONS.hero);
            break;

        case "3":
            moveTo(POSITIONS.corner);
            break;

    }

});
