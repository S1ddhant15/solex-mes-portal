// ============================
// Solex MES Dashboard
// ============================

// Check Login
const department = localStorage.getItem("department");

if (!department) {
    window.location.href = "index.html";
}

// Show Department
document.getElementById("dept").innerHTML = "👤 " + department + " Department";

// Logout
function logout() {
    localStorage.removeItem("department");
    window.location.href = "index.html";
}

// Department-wise Report URLs
const reports = {

    Production:
        "https://app.powerbi.com/reportEmbed?reportId=PRODUCTION_REPORT_ID",

    Quality:
        "https://app.powerbi.com/reportEmbed?reportId=QUALITY_REPORT_ID",

    Maintenance:
        "https://app.powerbi.com/reportEmbed?reportId=MAINTENANCE_REPORT_ID",

    Management:
        "https://app.powerbi.com/reportEmbed?reportId=MANAGEMENT_REPORT_ID"

};

// Temporary: same report for all departments
reports.Production =
"https://app.powerbi.com/reportEmbed?reportId=b6ac0c8d-cad0-4b72-beaa-fc4dc3f0d9e4&autoAuth=true&ctid=efe10ad5-9f60-494c-991c-f4b5a28390ba";

reports.Quality =
reports.Production;

reports.Maintenance =
reports.Production;

reports.Management =
reports.Production;

// Load Report
document.getElementById("powerbiFrame").src = reports[department];
