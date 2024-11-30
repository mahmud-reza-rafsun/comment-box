function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option -2
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option -3
const makePurpleButton = document.getElementById("make-purple");
makePurpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option -4
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option -5 another
const makeGreen = document.getElementById("make-green");
makeGreen.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});
