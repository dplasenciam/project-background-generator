var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// to change a css property
// body.style.background = "red";

//event for input
//anytime an input value changes, it's detected

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
  //textContent
  //innerHTML = reconstruct the entire DOM structure and is suspectible to cross atacks
  //createTextNode

  // THE IDEA IS TO MINIMIZE THE NUMBER OF DOM MANIPULATION AND
  // RENDERING AND EVENTS
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// buuuut you can also call it from the html itself
// but from html you only can add 1 function

console.log(body);
console.log(body.style.background);
css.textContent = body.style.background + ";";
