function login(){

let user =
document.getElementById("username").value;

let pass =
document.getElementById("password").value;


if(user=="admin" && pass=="solex123")
{

window.location.href="dashboard.html";

}

else{

alert("Invalid Login");

}

}
