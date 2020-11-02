// This file contains the functions to store and retrieve the cookie values.

function storeCookie(id, name, sname, zone) {
    var parray = [name,sname,zone];
    var json_var = JSON.stringify(parray);
    document.cookie = name + "=" + json_var + ";";
}

function readCookie(id) {
    var decodeCookie = decodeURIComponent(document.cookie);
}