//step 1
document.write(3);
    document.write("<br>");     // Line Break
    
//step 2
document.write("19" + 7);
    document.write("<br>");     // Line Break

//step 3
document.write(10==110); // == This returns true
    document.write("<br>");     // Line Break

X = 100                  // ===
Y = "100"

document.write(X === Y); // this returns false
    document.write("<br>");     // Line Break

document.write(10>2);    // >
    document.write("<br>");     // Line Break

document.write(10<2);    // <
    document.write("<br>");     // Line Break

document.write(5 > 2 && 10 > 4);  // && This returns true
    document.write("<br>");     // Line Break

document.write(5 > 10 || 10 > 4);  // ||
                                   // This would return “true” because, 
                                   // while 5 is not greater than 10, 10 
                                   // is greater than 4. We can make it 
                                   // return “false” with the following 
                                   // code since neither is true:

function not_Function1() {         // !
    document.getElementById("Not1").innerHTML = !(20>10); // this would return false
}

function not_Function2() {         // !
    document.getElementById("Not2").innerHTML = !(5>10); // this would return true
}