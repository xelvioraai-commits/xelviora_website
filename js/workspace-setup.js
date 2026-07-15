const progress=document.getElementById("progressBar");

const status=document.getElementById("statusText");

const steps=[

"Creating Company...",

"Creating Administrator...",

"Configuring Workspace...",

"Initializing AI...",

"Preparing Dashboard..."

];

let width=0;

let index=0;

const timer=setInterval(()=>{

width+=20;

progress.style.width=width+"%";

status.innerText=steps[index];

index++;

if(width>=100){

clearInterval(timer);

setTimeout(()=>{

window.location.href="workspace-created.html";

},1200);

}

},1200);
