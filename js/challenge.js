// 1. Timer increment every second once page has loaded
let seconds = 0;
let count = document.getElementById("counter");

function incrementSeconds() {
    seconds += 1;
    count.innerText = seconds;
}

let stop = setInterval(incrementSeconds, 1000)