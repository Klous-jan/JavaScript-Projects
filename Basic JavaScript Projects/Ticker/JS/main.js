var EndResult = document.getElementById("EndResult").value;
var Current = document.getElementById("Current").value;
var Final = document.getElementById("Final").value;
console.log(EndResult)
console.log(Current)
console.log(Final)

//Start End Result
function TestDuo() {
    var yy = document.getElementById("currentStep").value;
    var zz = document.getElementById("FinalStep").value;
    var xx = +zz - +yy;
    document.getElementById("EndResult").innerHTML = xx;
        onClickplus();
            EndResult = parseInt(xx);
            Current = parseInt(yy);
            document.getElementById("EndResult").innerHTML = EndResult;
            document.getElementById("Current").innerHTML = Current;
        onClickminus(); 
            EndResult = parseInt(xx);
            Current = parseInt(yy);
            document.getElementById("EndResult").innerHTML = EndResult;
            document.getElementById("Current").innerHTML = Current;
                if(EndResult == 0) {
                document.getElementById('sound').play();
                alert("You're Done for the day!!");
                                   }
          
}

function onInput()  {
    EndResult = document.getElementById("currentStep").value;
}

function onClickplus() {
    EndResult = parseInt(EndResult) + 1;
    Current = parseInt(Current) - 1;
    document.getElementById("EndResult").innerHTML = EndResult;
    document.getElementById("Current").innerHTML = Current;
}

function onClickminus() {
    EndResult = parseInt(EndResult) - 1;
    Current = parseInt(Current) + 1;
    document.getElementById("EndResult").innerHTML = EndResult;
    document.getElementById("Current").innerHTML = Current;
    if(EndResult == 0) {
      document.getElementById('Done').play();
      alert("You're Done for the day!!");
    }
  }
//End End Result

function CurrentStep()  {
    var yy = document.getElementById("currentStep").value;
    document.getElementById("Current").innerHTML = yy;
}

function FinalStep()  {
    var yy = document.getElementById("FinalStep").value;
    document.getElementById("Final").innerHTML = yy;
}

function play() {
    var audio = document.getElementById("Mouse");
    audio.play();
  }
