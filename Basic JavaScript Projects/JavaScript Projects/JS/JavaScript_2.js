//column 1
function validateForm1() {
    let a = document.forms["myForm"]["fname"].value;
    let b = document.forms["myForm"]["lname"].value;
    let c = document.forms["myForm"]["email"].value;
    let d = document.forms["myForm"]["pnum"].value;
    if (a == "" || b == "" || c == "" || d == "") {
        alert("All fields must be filled out");
        return false;
    }
}

function displaytype(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is in the " + character.innerHTML + " universe!");
}