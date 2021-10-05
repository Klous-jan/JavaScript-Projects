function TestFunction()    {       //Defining a function and naming it
    var str = "This text is blue!";    //Defining a variable and giving it a
                                        //string value
    var result = str.fontcolor("Blue");//Using the fontcolor method on
                                        //str variable
    document.getElementById("Stan") .innerHTML = result;
}