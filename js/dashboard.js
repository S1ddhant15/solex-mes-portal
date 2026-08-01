// Check if user is logged in
const department = localStorage.getItem("department");

if (!department) {
    window.location.href = "index.html";
}

// Show logged in department
const deptElement = document.getElementById("dept");
if (deptElement) {
    deptElement.innerHTML = "Department : " + department;
}

// Logout
function logout() {
    localStorage.removeItem("department");
    window.location.href = "index.html";
}
