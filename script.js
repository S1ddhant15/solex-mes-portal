const users = [
    {
        username: "admin",
        password: "Solex@987",
        role: "admin"
    },
    {
        username: "production",
        password: "Solex@Prod5",
        role: "production"
    },
    {
        username: "quality",
        password: "Solex@Qua7",
        role: "quality"
    },
    {
        username: "maintenance",
        password: "Solex@Maint9",
        role: "maintenance"
    }
];

function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    console.log("User Found:", user);

    if (user) {

        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("role", user.role);
        sessionStorage.setItem("username", user.username);

        console.log("Logged In:", sessionStorage.getItem("loggedIn"));

        window.location.href = "dashboard.html";

    } else {

        alert("Invalid Username or Password");

    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}
