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

loadModule("Xel Planner","📁");

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
