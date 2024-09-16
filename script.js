const answerText = document.querySelector(".answer");
const button = document.querySelector(".button");
const input = document.getElementById("guess");

let number = Math.round(Math.random() * 100);
console.log(number);

button.addEventListener("click", checkNumber);

function checkNumber() {
  console.log(input.value);

  if (number === parseInt(input.value)) {
    answerText.classList.add("animation");
    answerText.innerText = "You guessed the number";
  } else if (number > parseInt(input.value)) {
    answerText.innerText = "Your number is to low";
  } else {
    answerText.innerText = "Your number is to high";
  }
}
