/* ===========================================
   XEL WALK ENGINE 1.0
=========================================== */

const xel = document.getElementById("xel");
const img = document.getElementById("xel-img");
const bubble = document.getElementById("xel-message");

const HOME = {
    x: window.innerWidth - 120,
    y: window.innerHeight - 120
};

const WALK_DISTANCE = 180;

window.addEventListener("load", startXel);

function startXel(){

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
        duration:2.8,
        ease:"none",
        onComplete:()=>{
            stopWalk();
            blink();
        }
    });

}

function blink(){

    img.src="images/xel-blink.png";

    setTimeout(()=>{

        img.src="images/xel-idle.png";

        walkRight();

    },350);

}

function walkRight(){

    animateWalk();

    gsap.to(xel,{
        x:HOME.x,
        duration:2.8,
        ease:"none",
        onComplete:()=>{
            stopWalk();
            showBubble();
        }
    });

}

let walkTimer;
let bounceTween;

function animateWalk(){

    const frames=[
        "images/xel-step1.png",
        "images/xel-step2.png"
    ];

    let i=0;

    walkTimer=setInterval(()=>{

        img.src=frames[i];

        i=(i+1)%2;

    },120);

    // Body moves slightly up and down while walking
    bounceTween = gsap.to(xel,{

        y:"-=6",

        duration:.18,

        repeat:-1,

        yoyo:true,

        ease:"power1.inOut"

    });

}

function stopWalk(){

    clearInterval(walkTimer);

    if(bounceTween){

        bounceTween.kill();

    }

    gsap.set(xel,{
        y:HOME.y
    });

    img.src="images/xel-idle.png";

}

function showBubble(){

    gsap.set(bubble,{
        left:window.innerWidth-320,
        top:window.innerHeight-180
    });

    gsap.to(bubble,{
        opacity:1,
        scale:1,
        duration:.4
    });

}
