var A = "\"Be who you are and say what you feel, "
+ "because those who mind don\'t matter and those who matter don\'t mind.”"
+" -Dr. Seuss" + " Testing this little bad boy";
document.write(A)
var Family = "The janaks", Brother = "wes", mom = "Brenda", sister = "tiph"
document.write(Brother)
var blues = "i have the blues.";
var blues = blues.fontcolor("yellow");
document.write(blues);
function My_First_Function()    {       //Defining a function and naming it
    var str = "This text is green!";    //Defining a variable and giving it a
                                        //string value
    var result = str.fontcolor("green");//Using the fontcolor method on
                                        //str variable
    document.getElementById("Green_Text") .innerHTML = result; //Putting the value
}                                       //of result into HTML element with "Green_Text" id