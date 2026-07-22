let tasks=[];

let meetings=[];
const team=[

{
    initials:"SS",
    name:"Sumukh Santosh",
    role:"Senior Business Analyst",
    department:"IT"
},

{
    initials:"PK",
    name:"Priya Kumar",
    role:"Business Analyst",
    department:"IT"
},

{
    initials:"JD",
    name:"John Doe",
    role:"Project Manager",
    department:"IT"
},

{
    initials:"DL",
    name:"David Lee",
    role:"Software Engineer",
    department:"IT"
},

{
    initials:"CB",
    name:"Chaitra B",
    role:"UI/UX Designer",
    department:"IT"
}

];
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

<div class="planner-layout">

<div class="planner-top">

<div class="calendar-card">

<h3>

Calendar

</h3>

<div id="calendar"></div>

</div>

<div class="team-card">

<h3>

👥 IT Team

</h3>

<div id="teamMembers">

</div>

<div class="xel-insights">

<h4>

Xel Insights

</h4>

<div id="xelInsights">

Loading...

</div>

</div>

</div>

</div>

<div class="planner-bottom">

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

</div>

`;

generateCalendar();

renderTasks();

renderMeetings();

renderTeam();

setupXel();
window.toggleMenu = toggleMenu;
window.toggleMeetingMenu = toggleMeetingMenu;
window.editTask = editTask;
window.editMeeting = editMeeting;
window.confirmDelete = confirmDelete;
window.deleteMeeting = deleteMeeting;
window.toggleTask = toggleTask;

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

showTaskModal({

mode:"create",

day:day

});

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
function showTaskModal(options={}){

const mode=options.mode || "create";

const task=options.task || {};

const day=options.day || "";

const modal=document.createElement("div");

modal.className="modal-overlay";

modal.innerHTML=`

<div class="task-modal">

<h2>${mode==="edit"?"Edit Task":"Add Task"}</h2>

<div class="form-grid">

<input
id="taskName"
type="text"
placeholder="Task Name"
value="${task.name || ""}">

<textarea
id="taskDescription"
placeholder="Task Description">${task.description || ""}</textarea>

<input
id="taskStart"
type="date"
value="${task.startDate || (day?`2026-07-${String(day).padStart(2,"0")}`:"")}">

<input
id="taskDue"
type="date"
value="${task.dueDate || ""}">

<select id="taskDepartment">

<option ${task.department==="Marketing"?"selected":""}>Marketing</option>
<option ${task.department==="Finance"?"selected":""}>Finance</option>
<option ${task.department==="HR"?"selected":""}>HR</option>
<option ${task.department==="IT"?"selected":""}>IT</option>
<option ${task.department==="Sales"?"selected":""}>Sales</option>

</select>

<select id="taskOwner">

<option ${task.owner==="Sarah Smith"?"selected":""}>Sarah Smith</option>
<option ${task.owner==="John Doe"?"selected":""}>John Doe</option>
<option ${task.owner==="Priya Kumar"?"selected":""}>Priya Kumar</option>

</select>

<select id="taskMembers" multiple>

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

${mode==="edit"?"Save Changes":"Create Task"}

</button>

</div>

</div>

`;

document.body.appendChild(modal);

modal.querySelector(".cancel-btn").onclick=()=>{

modal.remove();

};

modal.querySelector(".create-btn").onclick=()=>{

const updatedTask={

name:document.getElementById("taskName").value,

description:document.getElementById("taskDescription").value,

startDate:document.getElementById("taskStart").value,

dueDate:document.getElementById("taskDue").value,

department:document.getElementById("taskDepartment").value,

owner:document.getElementById("taskOwner").value,

members:[...document.getElementById("taskMembers").selectedOptions].map(x=>x.value),

completed:task.completed || false

};

if(mode==="edit"){

tasks[options.index]=updatedTask;

}else{

tasks.push(updatedTask);

}

renderTasks();

modal.remove();

};

}
function showMeetingModal(options={}){

const mode=options.mode || "create";

const meeting=options.meeting || {};

const day=options.day || "";

const modal=document.createElement("div");

modal.className="modal-overlay";

modal.innerHTML=`

<div class="task-modal">

<h2>${mode==="edit"?"Edit Meeting":"Add Meeting"}</h2>

<div class="form-grid">

<input
id="meetingTitle"
type="text"
placeholder="Meeting Title"
value="${meeting.title || ""}">

<textarea
id="meetingDescription"
placeholder="Meeting Agenda">${meeting.description || ""}</textarea>

<input
id="meetingDate"
type="date"
value="${meeting.date || (day?`2026-07-${String(day).padStart(2,"0")}`:"")}">

<input
id="meetingStart"
type="time"
value="${meeting.startTime || ""}">

<input
id="meetingEnd"
type="time"
value="${meeting.endTime || ""}">

<select id="meetingDepartment">

<option ${meeting.department==="Marketing"?"selected":""}>Marketing</option>
<option ${meeting.department==="Finance"?"selected":""}>Finance</option>
<option ${meeting.department==="HR"?"selected":""}>HR</option>
<option ${meeting.department==="IT"?"selected":""}>IT</option>
<option ${meeting.department==="Sales"?"selected":""}>Sales</option>

</select>

<select id="meetingOrganizer">

<option ${meeting.organizer==="Sarah Smith"?"selected":""}>Sarah Smith</option>
<option ${meeting.organizer==="John Doe"?"selected":""}>John Doe</option>
<option ${meeting.organizer==="Priya Kumar"?"selected":""}>Priya Kumar</option>

</select>

<select id="meetingMembers" multiple>

<option>Sarah Smith</option>
<option>John Doe</option>
<option>Priya Kumar</option>
<option>David Lee</option>

</select>

<input
id="meetingLocation"
type="text"
placeholder="Meeting Link or Location"
value="${meeting.location || ""}">

</div>

<div class="modal-buttons">

<button class="cancel-btn">

Cancel

</button>

<button class="create-btn">

${mode==="edit"?"Save Changes":"Create Meeting"}

</button>

</div>

</div>

`;

document.body.appendChild(modal);

modal.querySelector(".cancel-btn").onclick=()=>{

modal.remove();

};

modal.querySelector(".create-btn").onclick=()=>{

const data={

title:document.getElementById("meetingTitle").value,

description:document.getElementById("meetingDescription").value,

date:document.getElementById("meetingDate").value,

startTime:document.getElementById("meetingStart").value,

endTime:document.getElementById("meetingEnd").value,

department:document.getElementById("meetingDepartment").value,

organizer:document.getElementById("meetingOrganizer").value,

members:[...document.getElementById("meetingMembers").selectedOptions].map(x=>x.value),

location:document.getElementById("meetingLocation").value

};

if(mode==="edit"){

meetings[options.index]=data;

}else{

meetings.push(data);

}

renderMeetings();

modal.remove();

};

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
function renderMeetings(){

const list=document.getElementById("meetingList");

if(!list) return;

list.innerHTML="";

meetings.forEach((meeting,index)=>{

list.innerHTML+=`

<div class="task">

<div class="task-info">

<strong>${meeting.title}</strong>

<p>${meeting.department}</p>

<small>${meeting.startTime} - ${meeting.endTime}</small>

</div>

<div class="task-menu">

<button class="menu-btn"

onclick="toggleMeetingMenu(${index})">

⋮

</button>

<div

id="meeting-menu-${index}"

class="task-popup">

<button

onclick="editMeeting(${index})">

✏️ Edit

</button>

<button

onclick="deleteMeeting(${index})">

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
function toggleMeetingMenu(index){

document.querySelectorAll(".task-popup").forEach(menu=>{

if(menu.id!="meeting-menu-"+index){

menu.classList.remove("show");

}

});

document.getElementById("meeting-menu-"+index).classList.toggle("show");

}

function editTask(index){

showTaskModal({

mode:"edit",

task:tasks[index],

index:index

});

document.getElementById("menu-"+index).classList.remove("show");

}
function editMeeting(index){

showMeetingModal({

mode:"edit",

meeting:meetings[index],

index:index

});

document.getElementById("meeting-menu-"+index).classList.remove("show");

}
function confirmDelete(index){

if(confirm("Are you sure you want to delete this task?")){

deleteTask(index);

}

}
function deleteMeeting(index){

if(confirm("Delete this meeting?")){

meetings.splice(index,1);

renderMeetings();

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

async function processCommand(){

const input=document.getElementById("xelCommand");

const text=input.value.trim();

if(text==="") return;

input.value="";

try{

const result=await askXel(text);

console.log("FULL AI RESPONSE:", result);

const reply=result.choices[0].message.content;

console.log(reply);

const ai=JSON.parse(reply);

if(ai.action==="createTask"){

createTask(ai);

}

else if(ai.action==="createMeeting"){

createMeeting(ai);

}

}

catch(error){

console.error("XEL ERROR:",error);

alert(error.message);

}

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

name:data.name || data.title || "",

description:data.description || "",

department:data.department || "General",

owner:data.owner || "",

members:data.members || [],

startDate:data.startDate || "",

dueDate:data.dueDate || "",

completed:data.completed || false

});

renderTasks();

}
function createMeeting(data){

meetings.push({

title:data.title || "",

description:data.description || "",

department:data.department || "General",

organizer:data.organizer || "",

members:data.members || [],

date:data.date || "",

startTime:data.startTime || "",

endTime:data.endTime || "",

location:data.location || ""

});

renderMeetings();

}
function renderTeam(){

const container=document.getElementById("teamMembers");

if(!container) return;

container.innerHTML="";

container.className="team-members";

team.forEach(person=>{

const taskCount=tasks.filter(t=>t.owner===person.name).length;

const meetingCount=meetings.filter(m=>m.organizer===person.name).length;

const workload=Math.min((taskCount*20)+(meetingCount*10),100);

container.innerHTML+=`

<div class="member">

<div class="member-tooltip">

<h4>${person.name}</h4>

<p>${person.department} Department</p>

<p>${person.role}</p>

</div>

<div class="member-initial">

${person.initials}

</div>

<div class="workload">

<div
class="workload-fill"
style="width:${workload}%">

</div>

</div>

<div class="member-stats">

${taskCount}T • ${meetingCount}M

</div>

</div>

`;

});

}

}
