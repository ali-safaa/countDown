const day = document.querySelector("[data-day]");
const hour = document.querySelector("[data-hour]");
const min = document.querySelector("[data-min]");
const sec = document.querySelector("[data-sec]");
const container = document.querySelector("[data-container]");

const newYears = "31 dec 2023";
let days;
let hours;
let minutes;
let seconds;
let distance;

const x = setInterval(countDown, 1000);

function countDown() {
     const newYearDate = new Date(newYears);
     const currentDate = new Date();

     distance = newYearDate - currentDate;

     days = Math.floor(distance / (1000 * 60 * 60 * 24));
     hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     seconds = Math.floor((distance % (1000 * 60)) / 1000);

     day.innerHTML = "d " + days;
     hour.innerHTML = "h " + hours;
     min.innerHTML = format("m " + minutes);
     sec.innerHTML = format("s " + seconds);

     if (distance < 0) {
          clearInterval(x);
          container.innerHTML = "Happy New Year";
          container.classList.add("finish");
     }
}
function format(num) {
     return num < 10 ? `0${num}` : num;
}

countDown();
