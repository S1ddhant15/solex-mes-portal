const users = [

{
username:"admin",
password:"Solex@987",
role:"Admin"
},

{
username:"production",
password:"Solex@Prod5",
role:"Production"
},

{
username:"quality",
password:"Solex@Qua7",
role:"Quality"
},

{
username:"maintenance",
password:"Solex@Maint9",
role:"Maintenance"
}

];

function login(){

const username=document.getElementById("username").value.trim();

const password=document.getElementById("password").value.trim();

const user=users.find(u=>u.username===username && u.password===password);

if(user){

sessionStorage.setItem("loggedIn","true");
sessionStorage.setItem("username",user.username);
sessionStorage.setItem("role",user.role);

window.location.href="dashboard.html";

}
else{

document.getElementById("error").innerHTML="Invalid Username or Password";

}

}

function logout(){

sessionStorage.clear();

window.location.href="index.html";

}
