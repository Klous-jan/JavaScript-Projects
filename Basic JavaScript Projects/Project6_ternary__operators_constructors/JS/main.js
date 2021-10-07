//Step 1 -- ternary operator
function Vote_Function()    {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote ";
}


//Step 2 -- constructor function this / new
function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
//Step 3 -- display the results of the constructor function within an HTML element
function myFunction()   {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik Drives a " + Erik.Vehicle_Color + "-Colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

//Step 4 -- Write a nested function
function count_Function()   {
    document.getElementById("Counting").innerHTML = Count();
    function Count()    {
        var Starting_point = 9;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
}
// testing ternary operators from example
document.write(Bigger = (5 > 1) ? "Left number is bigger":"Right number is bigger");

