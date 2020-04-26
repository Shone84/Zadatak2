var broj1 = prompt("Unesite prvi broj:");
var znak = prompt("Unesite matematicku operaciju:");
var broj2 = prompt("Unesite drugi broj:");

var rezultat ;

if (znak == "+") {
    rezultat= parseInt(broj1) + parseInt(broj2);
} else if 
    (znak== "-") {
        rezultat= parseInt(broj1) - parseInt(broj2);
    }
    else if 
    (znak== "*") {
        rezultat= parseInt(broj1) * parseInt(broj2);
    }
    else if 
    (znak== "/") {
        rezultat= parseInt(broj1) / parseInt(broj2);
    }

    alert("rezultat je " + rezultat);