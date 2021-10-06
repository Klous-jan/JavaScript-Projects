function addition() {              // addition function
    var add = 5 + 2;
    document.getElementById("MathAdd").innerHTML = "5 + 2 = " + add;
}

function subtraction() {           // subtraction function
    var sub = 5 - 2;
    document.getElementById("MathSub").innerHTML = "5 - 2 = " + sub;
}

function multiplication() {         // multiplication function
    var multi = 5 * 2;
    document.getElementById("MathMul").innerHTML = "5 * 2 = " + multi;
}

function remainder() {              // remainder function
    var div = 5 % 2;
    document.getElementById("MathPer").innerHTML = "5 / 2 = " + div;
}

function plusone() {                // adding 1 to the set variable X
    var X = 15;
    X++;
    document.getElementById("Mathplusone").innerHTML = (X);
}

function minusone() {               // subtracting 1 from the set variable X
    var X = 20.15;
    X--;
    document.getElementById("Mathminusone").innerHTML = (X);
}

function random() {                 // Random number generated from 0-100
    Math.random() * 100;
    document.getElementById("Mathrandom").innerHTML = (Math.random() * 100);
}