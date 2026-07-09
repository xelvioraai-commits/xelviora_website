/* ==========================================
   XEL ANIMATION ENGINE v1
========================================== */

const xel=document.getElementById("xel");

const message=document.getElementById("xel-message");

const discoveryButton=document.getElementById("discovery-btn");

const heroTitle=document.getElementById("hero-title");

window.addEventListener("load",()=>{

    introAnimation();

});

async function introAnimation(){

    await wait(1200);

    peek();

    await wait(1000);

    jumpToHero();

    await wait(1200);

    wave();

    await wait(1200);

    speak();

    await wait(2200);

   goToCorner();

}

function peek(){

    moveToElement(discoveryButton,-20,40);

}

function jumpToHero(){

    moveToElement(heroTitle,220,-90);

}

function wave(){

    xel.classList.add("xel-wave");

}

function speak(){

    message.style.opacity="1";

    message.style.transform="translateY(0)";

}

function goToCorner(){

    xel.style.bottom="25px";

    xel.style.right="25px";

    message.style.bottom="120px";

    message.style.right="120px";

}

/* ==========================================
   MOVE TO ELEMENT
========================================== */

function moveToElement(element, offsetX=0, offsetY=0){

    const rect = element.getBoundingClientRect();

    const x = rect.left + rect.width/2 + offsetX;

    const y = rect.top + rect.height/2 + offsetY;

    xel.style.left = x + "px";

    xel.style.top = y + "px";

    xel.style.right = "auto";

    xel.style.bottom = "auto";

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}
