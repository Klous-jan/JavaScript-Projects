// test js
alert(document.getElementById("p1").innerHTML);
A = "Always ";
            B = "remember: ";
            document.write(A + B);

            X = "you ";
            Y = "are ";
            document.write(X + Y);

            M = "unique " ;
            N = "just like everyone else."
            document.write(M + N);
// end test js

// while loop
function count_To_Ten() {
    var Digit = "";
    var x = 1;
    while (x <11)   {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}