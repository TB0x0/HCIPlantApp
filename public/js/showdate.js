function showdate() {
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    document.getElementById("date").innerHTML = m + "-" + d + "-" + y;
}

function showday(){
    var d = new Date();

    var week = new Array(7);
    week[0] = "sunday";
    week[1] = "monday";
    week[2] = "tuesday";
    week[3] = "wednesday";
    week[4] = "thursday";
    week[5] = "friday";
    week[6] = "saturday";
    week[7] = "sunday";

    var tmp = week[d.getDay()];

    document.getElementById(tmp).style.backgroundColor = "#438A5E";
}

document.addEventListener("DOMContentLoaded", function() {
    showdate();
    showday();
});