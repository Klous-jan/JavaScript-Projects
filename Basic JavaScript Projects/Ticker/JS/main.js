var clicks = document.getElementById("steps").value;
console.log(clicks)

function onClickplus() {
  clicks = parseInt(clicks) + 1;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("steps").innerHTML = clicks;
}

function onClickminus() {
  clicks = parseInt(clicks) - 1;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("steps").innerHTML = clicks;
  if(clicks == 0) {
    document.getElementById('sound').play();
    alert("You're Done for the day!!");
  }
}

function onClickzero() {
  clicks = parseInt(clicks) + 0;
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById("steps").innerHTML = clicks;
}

function onInput()  {
  clicks = document.getElementById("steps").value;
}

function submit() {
  document.getElementById("total").innerHTML = clicks;
  document.getElementById("steps").innerHTML = "";
}