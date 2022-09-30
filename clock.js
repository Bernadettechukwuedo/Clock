function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let period = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        period = "PM"
    }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let Time = hh + ":" + mm + ":" + ss + period;


    document.getElementById('name1').innerHTML = Time;
    let t = setTimeout(function () { currentTime() }, 1000);

}
currentTime()

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// let monthday = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let monthday = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let d = new Date()
let week = d.getDay();
let day = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();

let days = "Day:" + weekdays[d.getDay()]
document.getElementById('name').innerHTML = days;
// let datetime = "Date:" + day + "/" + monthday[d.getMonth()] + "/" + year
let datetime = "Date:" + day + " " + monthday[d.getMonth()] + "," + " " + year
document.getElementById('name2').innerHTML = datetime;
// switch (dayofweek) {
    //     case 0:
    //         late = date;
    //         break;

    //     case 1:
    //         late = date;
    //         break;
    //     case 2:
    //         late = date;
    //         break;
    //     case 3:
    //         late = date;
    //         break;
    //     case 4:
    //         late = date;
    //         break;
    //     case 5:
    //         late = hh + mm + ss;
    //         break;
    //     case 6:
    //         late = date;
    //         break;
    // }