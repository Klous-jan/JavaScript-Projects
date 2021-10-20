// break and switch
function Color_Function()   {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors)  {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "RGreen" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// get elements by class()
function Hello_World_Function()    {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"; // having a[] set to '0' its going to change the
                                              // first line associated with "Click"
}

    var c = document.getElementById("Gradient");
    var ctx = c.getContext("2d");
    var grd = ctx.createLinearGradient(0, 0, 500, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(0.5, "red");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 500, 250);