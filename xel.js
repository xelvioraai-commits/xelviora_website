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

    },2000);

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
   if(bounceTween){

    bounceTween.kill();

}

gsap.set(xel,{
    y:HOME.y
});

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

    const rect = xel.getBoundingClientRect();

    gsap.set(bubble,{

        left: rect.left - 190,
        top: rect.top + 20

    });

    gsap.to(bubble,{

        opacity:1,
        scale:1,
        duration:.4,
        ease:"back.out(1.7)"

    });

}
