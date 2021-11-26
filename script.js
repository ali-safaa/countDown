const day = document.getElementById("day");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");


const newYears = "1 dec 2021"
function countDown(){
    const newYearDate = new Date(newYears)
    const currentDate = new Date()
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    day.innerHTML = days;
    hour.innerHTML = hours;
    min.innerHTML = format(minutes);
    sec.innerHTML = format(seconds);
}
function format(time){
    return time < 10 ? `0${time}` : time;s
}

countDown();
setInterval(countDown, 1000)