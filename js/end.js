let userName = sessionStorage.getItem("Name");
let point = sessionStorage.getItem("Points");
let totalTime = sessionStorage.getItem("time");
document.querySelector(".user-name").innerHTML = userName;
document.querySelector(".user-point").innerHTML = point;
document.querySelector(".store-time").innerHTML = totalTime;

function goToStart(params) {
    window.location.replace("index.html");
}