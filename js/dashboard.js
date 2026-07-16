const content = document.getElementById("content");

const menuItems = document.querySelectorAll(".menu-item");

function loadHome(){

content.innerHTML=`

<div class="home-grid">

<div class="home-card">

<h3>🤖 Ask Xel</h3>

<p>

Talk to Xel, generate reports, analyse your business and automate your work.

</p>

</div>

<div class="home-card">

<h3>📁 Xel Planner</h3>

<p>

Manage projects, tasks, timelines and team collaboration.

</p>

</div>

<div class="home-card">

<h3>🤝 CRM</h3>

<p>

Manage customers, leads, opportunities and sales.

</p>

</div>

<div class="home-card">

<h3>💰 Finance</h3>

<p>

Invoices, expenses, budgeting and financial reports.

</p>

</div>

<div class="home-card">

<h3>👥 HR</h3>

<p>

Employees, recruitment, payroll and leave management.

</p>

</div>

<div class="home-card">

<h3>📊 Analytics</h3>

<p>

Business dashboards, KPIs and AI insights.

</p>

</div>

<div class="home-card">

<h3>📦 Inventory</h3>

<p>

Products, warehouses and stock tracking.

</p>

</div>

<div class="home-card">

<h3>📄 Documents</h3>

<p>

Store contracts, invoices and company files securely.

</p>

</div>

</div>

`;

}

function loadModule(title,icon){

content.innerHTML=`

<div style="padding-top:30px;">

<h1 style="font-size:42px;margin-bottom:20px;">

${icon} ${title}

</h1>

<p style="color:#94A3B8;font-size:18px;">

This module is currently under development.

</p>

</div>

`;

}

menuItems.forEach(item=>{

item.addEventListener("click",()=>{

menuItems.forEach(btn=>btn.classList.remove("active"));

item.classList.add("active");

const page=item.dataset.page;

switch(page){

case "home":

loadHome();

break;

case "planner":

loadPlanner();

break;

case "crm":

loadModule("CRM","🤝");

break;

case "finance":

loadModule("Finance","💰");

break;

case "hr":

loadModule("Human Resources","👥");

break;

case "analytics":

loadModule("Analytics","📊");

break;

case "inventory":

loadModule("Inventory","📦");

break;

case "documents":

loadModule("Documents","📄");

break;

case "settings":

loadModule("Settings","⚙");

break;

}

});

});

loadHome();
function loadPlanner(){

content.innerHTML=`

<div class="planner">

<div class="planner-header">

<h1>

🗂️ Xel Planner

</h1>

<p>

Good Morning, Sumukh 👋

</p>

</div>

<div class="planner-search">

<p>

What would you like to plan today?

</p>

<div class="planner-ai">

<input
type="text"
placeholder="Ask Xel to create a project...">

<button>

🤖

</button>

</div>

</div>

<div class="planner-grid">

<div class="calendar-card">

<h3>

Calendar

</h3>

<div id="calendar"></div>

</div>

<div class="tasks-card">

<h3>

Today's Tasks

</h3>

<div class="task-list">

<div class="task">

<input type="checkbox">

<span>Landing Page Design</span>

</div>

<div class="task">

<input type="checkbox">

<span>Review Registration Flow</span>

</div>

<div class="task">

<input type="checkbox">

<span>Prepare Client Proposal</span>

</div>

<div class="task">

<input type="checkbox">

<span>Create Dashboard UI</span>

</div>

</div>

</div>

<div class="meeting-card">

<h3>

Today's Meetings

</h3>

<div class="meeting-list">

<div class="meeting">

<strong>10:00 AM</strong>

<p>Marketing Team</p>

</div>

<div class="meeting">

<strong>2:30 PM</strong>

<p>Client Call</p>

</div>

<div class="meeting">

<strong>5:00 PM</strong>

<p>Development Review</p>

</div>

</div>

</div>

</div>

</div>

`;

generateCalendar();
}

function generateCalendar(){

const calendar=document.getElementById("calendar");

const today=new Date();

renderCalendar(today.getMonth(),today.getFullYear());

function renderCalendar(month,year){

const months=[
"JANUARY",
"FEBRUARY",
"MARCH",
"APRIL",
"MAY",
"JUNE",
"JULY",
"AUGUST",
"SEPTEMBER",
"OCTOBER",
"NOVEMBER",
"DECEMBER"
];

const weekdays=["S","M","T","W","T","F","S"];

const firstDay=new Date(year,month,1).getDay();

const daysInMonth=new Date(year,month+1,0).getDate();

calendar.innerHTML=`

<div class="calendar-header">

<button id="prevMonth">‹</button>

<h4>${months[month]} ${year}</h4>

<button id="nextMonth">›</button>

</div>

<div class="calendar-weekdays">

${weekdays.map(day=>`<div>${day}</div>`).join("")}

</div>

<div class="calendar-grid"></div>

`;

const grid=calendar.querySelector(".calendar-grid");

for(let i=0;i<firstDay;i++){

grid.innerHTML+=`<div class="empty"></div>`;

}

for(let day=1;day<=daysInMonth;day++){

const isToday=

day===today.getDate() &&

month===today.getMonth() &&

year===today.getFullYear();

grid.innerHTML+=`

<div
class="calendar-day ${isToday?"today":""}"
data-day="${day}">

${day}

</div>

`;

}

document.getElementById("prevMonth").onclick=()=>{

month--;

if(month<0){

month=11;

year--;

}

renderCalendar(month,year);

};

document.getElementById("nextMonth").onclick=()=>{

month++;

if(month>11){

month=0;

year++;

}

renderCalendar(month,year);

};
const days=document.querySelectorAll(".calendar-day");

days.forEach(day=>{

day.addEventListener("click",(e)=>{

showCalendarMenu(

e.target,

e.target.dataset.day

);

}

}
function showCalendarMenu(element,day){

const old=document.querySelector(".calendar-menu");

if(old){

old.remove();

}

const menu=document.createElement("div");

menu.className="calendar-menu";

menu.innerHTML=`

<button id="addTaskBtn">

＋ Add Task

</button>

<button id="addMeetingBtn">

＋ Add Meeting

</button>

`;

document.body.appendChild(menu);

const rect=element.getBoundingClientRect();

menu.style.left=rect.left+"px";

menu.style.top=(rect.bottom+8)+"px";

document.addEventListener("click",closeMenu);

function closeMenu(e){

if(!menu.contains(e.target) &&

!element.contains(e.target)){

menu.remove();

document.removeEventListener("click",closeMenu);

}

}

}
