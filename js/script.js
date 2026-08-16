const CENTRAL_MES_LOGIN = "/solex-digital-portal/index.html?app=mes";
const continueButton = document.getElementById("continueButton");

function openCentralLogin() {
  window.top.location.replace(CENTRAL_MES_LOGIN);
}

continueButton.addEventListener("click", openCentralLogin);
setTimeout(openCentralLogin, 900);
