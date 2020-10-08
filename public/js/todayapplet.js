// Code to manipulate the Today section of the site

var todaylist = document.getElementsByName("today");
for (var i=0;i<todaylist;i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "completebutton";
    span.appendChild(txt);
    todaylist[i].appendChild(span);
}