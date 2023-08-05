function stringFunction() {
    var name = new String("Dinesh");
    var char = name.charAt(2);
    console.log(char);
    console.log(name.charCodeAt(2));
    var fullName = name.concat(" Kumar");
    console.log(fullName);
    console.log(fullName.indexOf('n'));
    console.log(fullName.lastIndexOf());
    console.log(fullName.search("sh"));
    console.log(fullName.match("sa"));
    var replacedName = fullName.replace("Kumar", "Raj");
    console.log(replacedName);
    var substrname = fullName.substr(2, 4);
    var substringname = fullName.substring(2);
    console.log(substrname);
    console.log(substringname);
    console.log(fullName.toLowerCase());
    console.log(fullName.toUpperCase());
    var number = 10;
    var stringnumber = new String(number.toString());
    console.log(number.toString());
    console.log(stringnumber.valueOf());

    var full_name = "   Ashok kumar   ";
    var splitedName = full_name.split("m");
    console.log(splitedName[0]);
    console.log(full_name.trim());
}
stringFunction();

function getDate() {
    var todayDate = new Date();
    document.getElementById("curDate").innerHTML = todayDate.getDate() + "-" + (todayDate.getMonth() + 1) + "-" + todayDate.getFullYear();
    var hour = todayDate.getHours();
    var min = todayDate.getMinutes();
    var sec = todayDate.getSeconds();

    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("curTime").innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(function () { getDate() }, 1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}  