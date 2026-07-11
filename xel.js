/* ==========================================
   XEL ENGINE v2
========================================== */

const xel = document.getElementById("xel");
const xelImg = document.getElementById("xel-img");
const bubble = document.getElementById("xel-message");

const discoveryBtn = document.getElementById("discovery-btn");
const heroTitle = document.getElementById("hero-title");

window.addEventListener("load", startXel);

function startXel(){

    console.log(getCenter(discoveryBtn));

console.log(getCenter(heroTitle));

}
function getCenter(element){

    const rect = element.getBoundingClientRect();

    return{

        x: rect.left + rect.width/2,

        y: rect.top + rect.height/2

    };

}
