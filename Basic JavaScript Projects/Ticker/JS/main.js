var clicks = document.getElementById("steps").innerHTML.value;

function onClickplus() {
  clicks = clicks + 1;
  document.getElementById("clicks").innerHTML = clicks;
}

function onClickminus() {
  clicks = clicks - 1;
  document.getElementById("clicks").innerHTML = clicks;
}

function steps()    {
    var input = document.getElementById("steps").innerHTML.value;
    document.getElementById("clicks").innerHTML = parseFloat(input);
}
