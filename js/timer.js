let seconds = 0;
let minutes = 0;
let mytime = setInterval(function() {
    if (seconds < 59) {
        seconds++;
    } else {
        seconds = 0;
        minutes++;
    }
    let formatted_sec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector("span.time").innerHTML = `${formatted_min} : ${formatted_sec}`;
}, 1000);