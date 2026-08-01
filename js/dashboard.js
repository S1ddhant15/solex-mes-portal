// ===================================
// Solex MES Dashboard
// ===================================


// Get Login Department

const department = localStorage.getItem("department");


// Security check

if (!department) {

    window.location.href = "index.html";

}


// Show Department

document.getElementById("dept").innerHTML =
    "👤 " + department + " Department";



// Logout

function logout(){

    localStorage.removeItem("department");

    window.location.href = "index.html";

}



// ===================================
// Power BI Configuration
// ===================================


const reportId =
"b6ac0c8d-cad0-4b72-beaa-fc4dc3f0d9e4";


const tenantId =
"efe10ad5-9f60-494c-991c-f4b5a28390ba";



// Page Mapping

const pages = {


    Management:
    "7b89b3c91e4d95e740e7",


    Production:
    "d583f0c64dd166a90eaa",


    Process:
    "a86e5f3003a48dcee473",


    Maintenance:
    "994fe46fc27806d8e5c4"


};



let pageName = pages[department];


if(!pageName){

    pageName = pages.Management;

}



// Power BI URL


let powerBIURL =

"https://app.powerbi.com/reportEmbed?" +

"reportId=" + reportId +

"&pageName=" + pageName +

"&navContentPaneEnabled=false" +

"&filterPaneEnabled=false" +

"&showTabs=false" +

"&autoAuth=true" +

"&ctid=" + tenantId;



document.getElementById("powerbiFrame").src = powerBIURL;





// ===================================
// Department Wise Sidebar
// ===================================


const menuList = document.getElementById("menuList");



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


menus[department].forEach(function(item){


    let li = document.createElement("li");


    li.innerHTML = `

    <a href="#">

    <i class="bi ${item[1]}"></i>

    ${item[0]}

    </a>

    `;


    menuList.appendChild(li);


});
