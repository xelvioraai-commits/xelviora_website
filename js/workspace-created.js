const xel = document.getElementById("xelAnimation");

const checklist = document.getElementById("successChecklist");

const button = document.getElementById("launchWorkspace");

const confettiContainer = document.getElementById("confettiContainer");

button.style.pointerEvents = "none";

button.style.opacity = "0";

checklist.style.opacity = "0";

setTimeout(() => {

    xel.src = "images/xel-holding-confetti.png";

}, 1200);

setTimeout(() => {

    xel.src = "images/xel-throwing-confetti.jpeg";

    launchConfetti();

}, 2200);

setTimeout(() => {

    checklist.style.opacity = "1";

}, 3000);

setTimeout(() => {

    button.style.opacity = "1";

    button.style.pointerEvents = "auto";

}, 3800);

function launchConfetti(){

    const colors=[

        "#2563EB",

        "#38BDF8",

        "#22C55E",

        "#F59E0B",

        "#EF4444",

        "#A855F7",

        "#FFFFFF"

    ];

    for(let i=0;i<220;i++){

        const piece=document.createElement("div");

        piece.className="confetti";

        piece.style.left=Math.random()*100+"vw";

        piece.style.top="-20px";

        piece.style.background=colors[Math.floor(Math.random()*colors.length)];

        piece.style.width=(6+Math.random()*8)+"px";

        piece.style.height=(10+Math.random()*14)+"px";

        piece.style.opacity=Math.random();

        piece.style.transform=

        `rotate(${Math.random()*360}deg)`;

        piece.style.animationDuration=

        (2+Math.random()*2)+"s";

        piece.style.animationDelay=

        (Math.random()*0.5)+"s";

        confettiContainer.appendChild(piece);

    }

}

const rows=document.querySelectorAll(".success-row");

rows.forEach(row=>{

    row.style.opacity="0";

    row.style.transform="translateX(-30px)";

});

setTimeout(()=>{

    rows[0].style.transition=".5s";

    rows[0].style.opacity="1";

    rows[0].style.transform="translateX(0)";

},3100);

setTimeout(()=>{

    rows[1].style.transition=".5s";

    rows[1].style.opacity="1";

    rows[1].style.transform="translateX(0)";

},3400);

setTimeout(()=>{

    rows[2].style.transition=".5s";

    rows[2].style.opacity="1";

    rows[2].style.transform="translateX(0)";

},3700);

button.addEventListener("mouseenter",()=>{

    button.style.transform="translateY(-4px) scale(1.02)";

});

button.addEventListener("mouseleave",()=>{

    button.style.transform="translateY(0) scale(1)";

});
