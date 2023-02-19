var count=1;
var loginButton = document.querySelector("#login");
var addefButton = document.querySelector("#addef");

function switchtologoff(element) {
    loginButton.innerText = "Logoff";
}
function removeButton(element) {
    addefButton.remove();
}