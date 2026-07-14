let currentStep = 1;

const button = document.getElementById("continueBtn");

const title = document.getElementById("formTitle");

const stepText = document.getElementById("stepText");

button.onclick = function(){

document.getElementById("step"+currentStep).classList.remove("active");

currentStep++;

if(currentStep>4){

window.location.href="dashboard.html";

return;

}

document.getElementById("step"+currentStep).classList.add("active");

document.querySelector(".step.active").classList.remove("active");

document.querySelectorAll(".step")[currentStep-1].classList.add("active");

stepText.innerHTML="Step "+currentStep+" of 4";

if(currentStep===2){

title.innerHTML="Administrator Account";

}

if(currentStep===3){

title.innerHTML="Workspace Configuration";

}

if(currentStep===4){

title.innerHTML="Review & Create";

button.innerHTML="Create Workspace";

}

};
