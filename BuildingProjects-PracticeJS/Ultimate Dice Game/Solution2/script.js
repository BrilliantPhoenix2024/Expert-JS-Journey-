const output = document.querySelector(".output");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log("works!");
  // Build Roll
  let rollDice = roll(6);
  console.log(rollDice);
  let holder = builder(rollDice);
  console.log(output.children[0]);
  if (output.children[0]) {
    output.children[0].remove();
  }
  output.appendChild(holder);
});

function builder(num) {
  let div = document.createElement("div");
  div.setAttribute("class", "dicer");
  return div;
}

function roll(number) {
  let randomNum = Math.floor(Math.random() * number) + 1;
  return randomNum;
}
