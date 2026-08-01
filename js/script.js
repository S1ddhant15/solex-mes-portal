function login(){

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var department = document.getElementById("department").value;


    if(
        (department=="Production" && username=="production" && password=="1234") ||

        (department=="Quality" && username=="quality" && password=="1234") ||

        (department=="Maintenance" && username=="maintenance" && password=="1234") ||

        (department=="Management" && username=="admin" && password=="1234")
    )
    {

        localStorage.setItem("userDepartment", department);

        window.location.href="dashboard.html";

    }

    else
    {

        document.getElementById("message").innerHTML =
        "Invalid Login Details";

    }

}
