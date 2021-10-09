//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// NOTE ::: I need more info on how the let tags work         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// while loop Test
function Call_Loop() {
    var Digit = "";     // this will make it produce the numbers (x) - (while (x < y) "y being 20")
    var x = 1;          //  using the <br> tag it will put each number on its own line
    while (x < 20)   {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// String length Test
function String_length()    {   // string length is essentially character count
    let str = "Hello World!";
    document.getElementById("String length").innerHTML = str.length
}

// FOR LOOPS Test
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    function for_Loop() {
        for (Y = 0; Y < Instruments.length; Y++)    {   //loops through a block
        Content += Instruments[Y] + "<br>";             //of code a number of times
        }
        document.getElementById("List_of_Instruments").innerHTML = Content;
    }

// ARRAYS AND OBJECTS test
function cat_pics() {
    var Cat_Picture = []
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";     // taking an array of information and injecting that text
    Cat_Picture[2] = "eating";      // into a line of text
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "in this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function()    {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function const_TEST1()   {
    const x = 10;               // not ment to return since " x is already defined as constant"
    x = 2;                      // and having "x = 2" x is already assigned
    document.getElementById("Const TEST1").innerHTML = (x);
}

function const_TEST2()   {
    var x = 10;                 // returms 2 since "x = 2" comes 2nd
    x = 2;
    document.getElementById("Const TEST2").innerHTML = (x);
}

//let
function let_TEST1()    {
    var x = 82;
    document.getElementById("let TEST1_1").innerHTML = (x);
    {
        let x = 33;     // variables written within curly brackets using var do not have block scope
        document.getElementById("let TEST1_2").innerHTML = (x); // they can be accessed from outside the block
    }                   // but the let keyword cannot be accessed outside of the block.
    document.getElementById("let TEST1_3").innerHTML = (x)
}

function let_TEST2()    {
    var x = 82;
    document.getElementById("let TEST2_1").innerHTML = (x);
    {
        var x = 33;      // the var keyword cannot have block scope
        document.getElementById("let TEST2_2").innerHTML = (x);
    }                    // while the let keyword can.
    document.getElementById("let TEST2_3").innerHTML = (x)
}

// return
function sample(name) {
    return "hello " + name;
}
// Stops the execution of a function and returns a value from the function
function return_TEST(name)   {
    var x = sample(name);
    document.getElementById("Return test").innerHTML = x;
}

function Object_Test()  {
    let car = {     // this is my Objext
        make: "Dodge ",     // these are the properties of the object
        model: "Viper ",    // these are the properties of the object
        year: "2021 ",      // these are the properties of the object
        color: "red ",      // these are the properties of the object
        description: function() {
            return "The car is a " + this.year + this.color + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}

// With Break Function
function Break_Test() {
    var text = "";
    var i;
    for (i = 1; i < 5+1; i++) {
      if (i === 3) { // the code stops the loop when 'i' is equal to 3
        break;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("Breakfunc").innerHTML = text;
  }

// Without Break Function
function NoBreak_Test() {
    var text = "";
    var i;  // no break so it run the full loop till 
    for (i = 1; i < 5+1; i++) {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("NoBreakfunc").innerHTML = text;
  }

// With continue Function
function continue_Test() {
    var text = "";
    var i;
    for (i = 1; i < 5+1; i++) {
      if (i === 3) { // the code stops the loop when 'i' is equal to 3, skips 3 and coninutes the loop
        continue;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("continuefunc").innerHTML = text;
  }

// Without continue Function
function Nocontinue_Test() {
    var text = "";
    var i;  // no continue so it run the full loop till 
    for (i = 1; i < 5+1; i++) {
      text += "The number is " + i + "<br>";
    }
    document.getElementById("Nocontinuefunc").innerHTML = text;
  }

  