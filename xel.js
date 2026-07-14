/* ===========================================
   XEL WALK ENGINE 2.0
=========================================== */

const xel = document.getElementById("xel");
const img = document.getElementById("xel-img");
const bubble = document.getElementById("xel-message");

const WALK_DISTANCE = 180;

const HOME = {};

window.addEventListener("load", startXel);
window.addEventListener("resize", calculateHome);

function calculateHome(){

    HOME.x = window.innerWidth - 170;
    HOME.y = window.innerHeight - 170;

}

function startXel(){

    calculateHome();

    gsap.set(xel,{
        x:HOME.x,
        y:HOME.y
    });

    setTimeout(walkLeft,800);

}

function walkLeft(){

    animateWalk();

    gsap.to(xel,{
        x:HOME.x-WALK_DISTANCE,
        duration:2.5,
        ease:"none",
        onComplete:()=>{

            stopWalk();

            setTimeout(blink,1000);

        }
    });

}

function blink(){

    console.log("Blink started");

    img.src = "images/xel-blink.png";

    setTimeout(() => {

        img.src = "images/xel-idle.png";

        console.log("Blink ended");

        setTimeout(walkRight, 1000);

    }, 500);

}

function walkRight(){

    animateWalk();

    gsap.to(xel,{

        x:HOME.x,

        duration:2.5,

        ease:"none",

        onComplete:()=>{

            stopWalk();

            showBubble();

        }

    });

}

let walkTimer;

function animateWalk(){

    const frames=[

        "images/xel-step1.png",
        "images/xel-step2.png"

    ];

    let i=0;

    img.src=frames[0];

    walkTimer=setInterval(()=>{

        i=(i+1)%2;

        img.src=frames[i];

    },180);

}

function stopWalk(){

    clearInterval(walkTimer);

    img.src="images/xel-idle.png";

}

function showBubble(){

    gsap.set(bubble,{

        left:HOME.x-180,

        top:HOME.y-20

    });

    gsap.to(bubble,{

        opacity:1,

        scale:1,

        duration:.35,

        ease:"back.out(1.7)"

    });

}
/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle=document.getElementById("menu-toggle");

const navLinks=document.getElementById("nav-links");

menuToggle.onclick=()=>{

    if(navLinks.classList.contains("active")){

        navLinks.classList.remove("active");

        menuToggle.innerHTML="☰";

    }else{

        navLinks.classList.add("active");

        menuToggle.innerHTML="✕

";

    }

}

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.onclick=()=>{

        navLinks.classList.remove("active");

        menuToggle.innerHTML="☰";

    }

});
