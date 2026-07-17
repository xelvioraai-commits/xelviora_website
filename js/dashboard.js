let tasks=[];

let meetings=[];
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

<div class="xel-command">

<div class="xel-avatar">

🤖

</div>

<div class="xel-input">

<input
id="xelCommand"
type="text"
placeholder="What would you like me to do today?">

<button
id="xelSend">

➜

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

<div class="task-list" id="taskList">

</div>
</div>

<div class="meeting-card">

<h3>

Today's Meetings

</h3>

<div class="meeting-list" id="meetingList">

</div>
</div>

</div>

</div>

`;

generateCalendar();
renderTasks();
setupXel();
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

    });

});

} // closes renderCalendar()

} // closes generateCalendar()

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

document.getElementById("addTaskBtn").onclick=()=>{

menu.remove();

showTaskModal(day);

};

document.getElementById("addMeetingBtn").onclick=()=>{

menu.remove();

showMeetingModal(day);

};

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
function showTaskModal(day){

const modal=document.createElement("div");

modal.className="modal-overlay";

modal.innerHTML=`

<div class="task-modal">

<h2>Add Task</h2>

<div class="form-grid">

<input
type="text"
placeholder="Task Name">

<textarea
placeholder="Task Description"></textarea>

<input
type="date"
value="2026-07-${String(day).padStart(2,"0")}">

<input
type="date">

<select>

<option>Marketing</option>

<option>Finance</option>

<option>HR</option>

<option>IT</option>

<option>Sales</option>

</select>

<select>

<option>Sarah Smith</option>

<option>John Doe</option>

<option>Priya Kumar</option>

</select>

<select multiple>

<option>Sarah Smith</option>

<option>John Doe</option>

<option>Priya Kumar</option>

<option>David Lee</option>

</select>

</div>

<div class="modal-buttons">

<button class="cancel-btn">

Cancel

</button>

<button class="create-btn">

Create Task

</button>

</div>

</div>

`;

document.body.appendChild(modal);
    const createBtn=modal.querySelector(".create-btn");

createBtn.onclick=()=>{

const inputs=modal.querySelectorAll("input");

const textarea=modal.querySelector("textarea");

const selects=modal.querySelectorAll("select");

const task={

name:inputs[0].value,

description:textarea.value,

startDate:inputs[1].value,

dueDate:inputs[2].value,

department:selects[0].value,

owner:selects[1].value,

members:[...selects[2].selectedOptions].map(x=>x.value)

};

tasks.push(task);

renderTasks();

modal.remove();

};

modal.querySelector(".cancel-btn").onclick=()=>{

modal.remove();

};

}
function showMeetingModal(day){

alert("Meeting popup coming next.");

}
function renderTasks(){

const list=document.getElementById("taskList");

if(!list) return;

list.innerHTML="";

tasks.forEach((task,index)=>{

list.innerHTML+=`

<div class="task ${task.completed?"completed":""}">

<label class="task-checkbox">

<input
type="checkbox"
${task.completed?"checked":""}
onchange="toggleTask(${index})">

<span></span>

</label>

<div class="task-info">

<strong>${task.name}</strong>

<p>${task.department}</p>

</div>

<div class="task-menu">

<button class="menu-btn" onclick="toggleMenu(${index})">

⋮

</button>

<div id="menu-${index}" class="task-popup">

<button onclick="editTask(${index})">

✏️ Edit

</button>

<button onclick="confirmDelete(${index})">

🗑 Delete

</button>

</div>

</div>

</div>

`;

});

}

function deleteTask(index){

tasks.splice(index,1);

renderTasks();

}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed;

renderTasks();

}

function toggleMenu(index){

document.querySelectorAll(".task-popup").forEach(menu=>{

if(menu.id!="menu-"+index){

menu.classList.remove("show");

}

});

document.getElementById("menu-"+index).classList.toggle("show");

}

function editTask(index){

showTaskModal(index);

document.getElementById("menu-"+index).classList.remove("show");

}
function confirmDelete(index){

if(confirm("Are you sure you want to delete this task?")){

deleteTask(index);

}

}
function setupXel(){

const input=document.getElementById("xelCommand");

const send=document.getElementById("xelSend");

send.onclick=processCommand;

input.addEventListener("keydown",e=>{

if(e.key==="Enter"){

processCommand();

}

});

}

function processCommand(){

const input=document.getElementById("xelCommand");

const text=input.value.trim();

if(text==="") return;

parseCommand(text);

input.value="";

}

function parseCommand(command){

const text=command.toLowerCase();

const task={

action:"createTask",

title:"",

department:"General",

owner:"",

dueDate:"",

priority:"Normal",

description:"",

completed:false

};

const departments=[
"hr",
"finance",
"marketing",
"sales",
"it",
"operations"
];

departments.forEach(dep=>{

if(text.includes(dep)){

task.department=dep.charAt(0).toUpperCase()+dep.slice(1);

}

});

const owners=[
"sarah",
"john",
"priya",
"david"
];

owners.forEach(person=>{

if(text.includes(person)){

task.owner=person.charAt(0).toUpperCase()+person.slice(1);

}

});

const due=text.match(/due\s+([a-zA-Z0-9]+)/);

if(due){

task.dueDate=due[1];

}

let title=command;

title=title.replace(/add/gi,"");

title=title.replace(/task/gi,"");

title=title.replace(/for the/gi,"");

title=title.replace(/for/gi,"");

title=title.replace(/department/gi,"");

title=title.replace(/assign it to.*/gi,"");

title=title.replace(/due.*/gi,"");

departments.forEach(dep=>{

const regex=new RegExp(dep,"gi");

title=title.replace(regex,"");

});

task.title=title.trim();

if(task.title===""){

task.title="New Task";

}

createTask(task);

}
function createTask(data){

tasks.push({

name:data.title,

department:data.department,

owner:data.owner,

dueDate:data.dueDate,

completed:false

});

renderTasks();

}
