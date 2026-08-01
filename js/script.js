function login(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let department = document.getElementById("department").value;


    let users = {

        "production": {
            username:"production",
            password:"1234"
        },

        "quality":{
            username:"quality",
            password:"1234"
        },

        "maintenance":{
            username:"maintenance",
            password:"1234"
        },

        "management":{
            username:"admin",
            password:"1234"
        }

    };


    if(users[department] &&
       username === users[department].username &&
       password === users[department].password)
    {

        localStorage.setItem("department",department);

        window.location.href="dashboard.html";

    }

    else{

        document.getElementById("error").innerHTML =
        "Invalid username or password";

    }

}
