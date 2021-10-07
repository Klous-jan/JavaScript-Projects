//Step 1
var X = 10;//------------------------------------
function Add_numbers_1()    {//                 -
    document.write(20 + X + "<br>");//          -
}//                                             -
function Add_numbers_2()    {//                 --- Global Variable
    document.write(X + 100);//                  -
}//                                             -   Var X is outside the function
Add_numbers_1();//                              -   making this call globally
Add_numbers_2();//                              -
//-----------------------------------------------

document.write("<br>");

function Add_numbers_3()  {//--------------------
    var X = 10;//                               -
    document.write(20 + X + "<br");//           -
}//                                             -
function Add_numbers_4()    {//                 --- Local Variable
    document.write(X + 100);//                  -
}//                                             -   Var X is inside the function
Add_numbers_3();//                              -   making this call locally
Add_numbers_4();//                              -
//-----------------------------------------------

document.write("<br>");
//Step 3
function Add_numbers_5()  {//--------------------
    var X = 10;//                               -
    console.log(15 + Y)//                       -
}//                                             -
function Add_numbers_6()    {//                 --- console.log
    console.log(X + 100);//                     -
}//                                             -   both functions return console.log
Add_numbers_5();//                              -   so neither will show on screen,
Add_numbers_6();//                              -   but they will appreat in the Console
//-----------------------------------------------   ele ment of the dev tools

//step 2
// if statement
function get_Date()  {
    if (new Date().getHours() < 18) {                   // code is checking 'if' (local)Time is past (18)16:00 return
        document.getElementById("Greeting").innerHTML = "How are you today?";   // "How are you today?", if not do nothing
    }  
}

//if else
function test()  {
    if (new Date().getHours() < 18) {                   // code is checking 'if' (local)Time is past (18)16:00 return
        document.getElementById("testing").innerHTML = "Good Morning!";     // "How are you today?", if not return other message
    }  
    else    {
        document.getElementById("testing").innerHTML = "Good night!";
}
}

//Step 4
function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {       //if 'Time' is between X and Y return ""
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)   {   //if 'Time' is between a different set X and Y return "different message"
        Reply = "It is afterneed.";
    }
    else    {
        Reply = "It is evening time.";      //if 'Time' is between a different set X and Y return "third message"
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}