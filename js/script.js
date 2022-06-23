function leapYear() {
    var n = parseInt(document.querySelector('#input').value)
    y=n;
    if ((y % 4 == 0) && ((y % 100 != 0) || (y % 400 == 0))) {
        y = "Leap Year";
    }
    else {
        y = "not Leap Year";
    }
    document.querySelector('#result').innerHTML = n+" -This year is " + y;
}