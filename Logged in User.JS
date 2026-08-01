if (user) {
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("role", user.role);
    sessionStorage.setItem("username", user.username);

    window.location.href = "dashboard.html";
}
