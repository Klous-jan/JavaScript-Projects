function full_Sentence()    {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);     // Concatenating line 2-line 4 all togehter to make 1 sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence;
    
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    var secondtest = Sentence.slice(0,3);       // added a second .slice to mess around with
    document.getElementById("Slice").innerHTML = secondtest + ' ' + Section;  // added my 2 variables together
}

function Test_1_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.toUpperCase();                // Testing toUpperCase()
    document.getElementById("test1").innerHTML = Section;
}

function Test_2_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.search("Johnny");                // Testing search()
    document.getElementById("test2").innerHTML = Section;
}

function string_Method()    {
    var x = 182;                                // converts value to a string
    document.getElementById("Numbers_to_stirng").innerHTML = x.toString();
}

function precision_Method() {                  // makes a number (x) digits long vis x.toPrecision(7) 7 being x
    var x = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = x.toPrecision(7);
}

function Fixed_Method() {                       // converts number to a string rounding to (n) decimal
    var x = 12938.3012987376112;        
    var n = x.toFixed(1);
    document.getElementById("Fixed").innerHTML = n;
}

function valueOf1() {                           // returns the value of a string
    let str = "valueOf()";
    document.getElementById("demo").innerHTML = str.valueOf();
}