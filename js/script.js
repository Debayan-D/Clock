document.addEventListener('DOMContentLoaded', () => {
    function realtimeClock() {
        var rtClock = new Date();

        var hours = rtClock.getHours();
        var minutes = rtClock.getMinutes();
        var seconds = rtClock.getSeconds();

        var amPm = (hours < 12) ? "AM" : "PM";

        hours = (hours > 12) ? hours - 12 : hours;

        hours = ("0" + hours).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        seconds = ("0" + seconds).slice(-2);

        document.getElementById('clock').innerHTML = 
            hours + "  :  " + minutes + "  :  " + seconds + " " + amPm;
        var t = setTimeout(realtimeClock, 500);
        }
    function realTimeDate() {
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth() + 1;
        var FullYear = d.getFullYear();
        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        var n = weekday[d.getDay()]
        document.getElementById("date").innerHTML = n + "  " + date + "." + month + "." + FullYear;
    }
    realtimeClock();
    realTimeDate();
    
});