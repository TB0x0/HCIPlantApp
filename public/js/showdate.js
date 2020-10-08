function showdate() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML += "<br>" + m + "-" + d + "-" + y;
}

function showday(){
    var d = new Date();

    var week = new Array(7);
    week[0] = "Sunday";
    week[1] = "Monday";
    week[2] = "Tuesday";
    week[3] = "Wednesday";
    week[4] = "Thursday";
    week[5] = "Friday";
    week[6] = "Saturday";
    week[7] = "Sunday";

    var tmp = week[d.getDay()];

    document.getElementById(tmp).style.backgroundColor = "#438A5E";
    document.getElementById("date").innerHTML = tmp;
}

document.addEventListener("DOMContentLoaded", function() {
    showday();
    showdate();
});