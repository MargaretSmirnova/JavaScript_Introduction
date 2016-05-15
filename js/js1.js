/**
 * Created by User on 12.05.2016.
 */

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var a = prompt("Введите значение a", "5");
if (isNumeric(a)) {
    var b = prompt("Введите значение b", "7");
        if (isNumeric(b)) {
            var c = parseFloat(a,2)+parseFloat(b,2);
            alert(c);
        } else {
            alert( "b не число" )
        }
} else {
    alert( "a не число" )
}

