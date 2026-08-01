// ===================================
// Solex MES Dashboard Authentication
// ===================================

const department = localStorage.getItem("department");


// If no login, return to login page

if (!department) {
    window.location.href = "index.html";
}


// Display department

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


// ===================================
// Department Wise Power BI Pages
// ===================================

const pages = {

    Management:
    "7b89b3c91e4d95e740e7",

    Production:
    "d583f0c64dd166a90eaa",

    Quality:
    "7b89b3c91e4d95e740e7",

    Process:
    "a86e5f3003a48dcee473",

    Maintenance:
    "994fe46fc27806d8e5c4"

};


// Get selected page

let pageName = pages[department];


// If page not available

if (!pageName) {

    pageName = pages.Management;

}


// ===================================
// Create Power BI Embed URL
// ===================================

let powerBIURL =
"https://app.powerbi.com/reportEmbed?" +
"reportId=" + reportId +
"&pageName=" + pageName +
"&navContentPaneEnabled=false" +
"&filterPaneEnabled=false" +
"&autoAuth=true" +
"&ctid=" + tenantId;


// Load Report

document.getElementById("powerbiFrame").src = powerBIURL;
