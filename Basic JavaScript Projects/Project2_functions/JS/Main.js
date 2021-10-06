function TestFunction()    {        
    var sentence = "I reall am curious why or when ";             //set a variable
    sentence += " you would actually use a form of concatenate";  //utilized += operator  // 1) check
    document.getElementById("Concatenate") .innerHTML = sentence; //Set ID from HTML
}                                                                 //3) notes, check

function myFunction(p1, p2) {
    return p1 * p2;
  }
  document.getElementById("demo").innerHTML = myFunction(5, 3);

  function addition_Function()  {
      var addition = 2 + 2;
      document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
  }