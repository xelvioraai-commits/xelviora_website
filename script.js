/* ==========================================
   XEL ANIMATION ENGINE v1
========================================== */

const xel=document.getElementById("xel");

const message=document.getElementById("xel-message");

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

    xel.style.bottom="85vh";

    xel.style.right="120px";

}

function jumpToHero(){

    xel.style.bottom="58vh";

    xel.style.right="46vw";

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

function wait(ms){

    return new Promise(resolve=>setTimeout(resolve,ms));

}
