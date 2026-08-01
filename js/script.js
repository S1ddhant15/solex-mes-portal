function login() {

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let department = document.getElementById("department").value;

    let users = {
        "Production": {
            username: "production",
            password: "1234"
        },
        "Quality": {
            username: "quality",
            password: "1234"
        },
        "Maintenance": {
            username: "maintenance",
            password: "1234"
        },
        "Management": {
            username: "admin",
            password: "1234"
        }
    };

    if (
        users[department] &&
        username === users[department].username &&
        password === users[department].password
    ) {
        localStorage.setItem("department", department);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").innerHTML =
            "❌ Invalid username, password or department.";
    }
}
