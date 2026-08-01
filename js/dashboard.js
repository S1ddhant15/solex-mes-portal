// ===================================
// Solex MES Dashboard
// ===================================


const department = localStorage.getItem("department");



if(!department){

window.location.href="index.html";

}




// Display Department


document.getElementById("dept").innerHTML =
"👤 " + department + " Department";





// Logout


function logout(){

localStorage.removeItem("department");

window.location.href="index.html";

}





// ===================================
// POWER BI SETTINGS
// ===================================


const reportId =
"b6ac0c8d-cad0-4b72-beaa-fc4dc3f0d9e4";


const tenantId =
"efe10ad5-9f60-494c-991c-f4b5a28390ba";





// Power BI Pages


const pages = {


Dashboard:
"7b89b3c91e4d95e740e7",


Production:
"d583f0c64dd166a90eaa",


Process:
"a86e5f3003a48dcee473",


Maintenance:
"994fe46fc27806d8e5c4",


Reports:
"7b89b3c91e4d95e740e7",


Settings:
"7b89b3c91e4d95e740e7"


};






// Load Power BI Page


function loadPowerBI(page){


console.log("Opening:",page);



let url =

"https://app.powerbi.com/reportEmbed?" +

"reportId=" + reportId +

"&pageName=" + pages[page] +

"&navContentPaneEnabled=false" +

"&filterPaneEnabled=false" +

"&showTabs=false" +

"&autoAuth=true" +

"&ctid=" + tenantId;




document.getElementById("powerbiFrame").src=url;



}








// ===================================
// SIDEBAR MENU
// ===================================



const menus = {



Production:[

["Dashboard","bi-speedometer2"],

["Production","bi-bar-chart"],

["Reports","bi-file-earmark-bar-graph"]

],



Process:[

["Dashboard","bi-speedometer2"],

["Process","bi-cpu"],

["Reports","bi-file-earmark-bar-graph"]

],



Maintenance:[

["Dashboard","bi-speedometer2"],

["Maintenance","bi-tools"],

["Reports","bi-file-earmark-bar-graph"]

],



Management:[

["Dashboard","bi-speedometer2"],

["Production","bi-bar-chart"],

["Process","bi-cpu"],

["Maintenance","bi-tools"],

["Reports","bi-file-earmark-bar-graph"],

["Settings","bi-gear"]

]


};







// Create Sidebar


const menuList=document.getElementById("menuList");



menus[department].forEach(function(item){



let li=document.createElement("li");



let a=document.createElement("a");


a.href="#";


a.innerHTML=

`
<i class="bi ${item[1]}"></i>
${item[0]}
`;



a.onclick=function(e){

e.preventDefault();

loadPowerBI(item[0]);

};



li.appendChild(a);


menuList.appendChild(li);



});







// Initial Page Load


if(department=="Production"){

loadPowerBI("Production");

}

else if(department=="Process"){

loadPowerBI("Process");

}

else if(department=="Maintenance"){

loadPowerBI("Maintenance");

}

else{

loadPowerBI("Dashboard");

}
