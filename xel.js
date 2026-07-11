/* ==========================================
   XEL ENGINE V2
========================================== */

const xel = document.getElementById("xel");
const xelImg = document.getElementById("xel-img");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

window.addEventListener("load", startXel);

/* ==========================================
   START
========================================== */

function startXel(){

    positionBehindButton();

}

/* ==========================================
   POSITIONS
========================================== */

function centerOf(element){

    const rect = element.getBoundingClientRect();

    return{

        x:rect.left + rect.width/2,

        y:rect.top + rect.height/2

    };

}

function moveXel(x,y){

    gsap.set(xel,{

        x:x,

        y:y

    });

}

function positionBehindButton(){

    const p = centerOf(discoveryBtn);

    moveXel(

        p.x+110,

        p.y-20

    );

}
