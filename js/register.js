let currentStep = 1;

const button = document.getElementById("continueBtn");

const title = document.getElementById("formTitle");

const stepText = document.getElementById("stepText");

button.onclick = function(){

document.getElementById("step"+currentStep).classList.remove("active");

currentStep++;

if(currentStep>4){

window.location.href="workspace-setup.html";
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
const reviewBtn = document.getElementById("reviewBtn");

reviewBtn.onclick=function(){

document.getElementById("reviewSection").style.display="block";

document.getElementById("companyReview").innerHTML=`

<div class="review-row">

<span>Company Name</span>

<span>${document.getElementById("companyName").value}</span>

</div>

<div class="review-row">

<span>Business Email</span>

<span>${document.getElementById("businessEmail").value}</span>

</div>

<div class="review-row">

<span>Country</span>

<span>${document.getElementById("country").value}</span>

</div>

<div class="review-row">

<span>Industry</span>

<span>${document.getElementById("industry").value}</span>

</div>

<div class="review-row">

<span>Company Size</span>

<span>${document.getElementById("companySize").value}</span>

</div>

<div class="review-row">

<span>Business Phone</span>

<span>${document.getElementById("phone").value}</span>

</div>

<div class="review-row">

<span>Website</span>

<span>${document.getElementById("website").value}</span>

</div>

`;

document.getElementById("adminReview").innerHTML=`

<div class="review-row">

<span>Name</span>

<span>${document.getElementById("adminName").value}</span>

</div>

<div class="review-row">

<span>Job Title</span>

<span>${document.getElementById("jobTitle").value}</span>

</div>

<div class="review-row">

<span>Email</span>

<span>${document.getElementById("adminEmail").value}</span>

</div>

`;

document.getElementById("workspaceReview").innerHTML=`

<div class="review-row">

<span>Time Zone</span>

<span>${document.getElementById("timezone").value}</span>

</div>

<div class="review-row">

<span>Currency</span>

<span>${document.getElementById("currency").value}</span>

</div>

<div class="review-row">

<span>Language</span>

<span>${document.getElementById("language").value}</span>

</div>

<div class="review-row">

<span>Logo</span>

<span>${document.getElementById("companyLogo").files.length ? document.getElementById("companyLogo").files[0].name : "No Logo Uploaded"}</span>

</div>

`;

};
