const numberGuess = document.querySelector(".guess");
const winNumber = document.querySelector(".number");
const buttonCheck = document.querySelector(".check");
const info = document.querySelector(".message");
const score = document.querySelector(".score");
const topScore = document.querySelector(".highscore");
const buttonagain = document.querySelector(".again");

let randomNum = Math.floor(Math.random() * 100);

let game = true;

numberGuess.addEventListener("input", () => {
  if (numberGuess.value > 100) {
    numberGuess.value = "100";
  }
  if (numberGuess.value < 0) {
    numberGuess.value = "0";
  }
  if (numberGuess.value === "") {
    info.textContent = "⛔ No number!";
  }
});

function highLow() {
  if (numberGuess.value > randomNum) {
    info.textContent = "📈 Too high!";
  }
  if (numberGuess.value < randomNum) {
    info.textContent = "📉 Too low!";
  }
  if (numberGuess.value == randomNum) {
    info.textContent = "🎉 Correct number!";
    document.body.style.backgroundColor = "#60b347";
    winNumber.textContent = randomNum;
  }
}

buttonCheck.addEventListener("click", function () {
  if (game) {
    highLow();
    score.textContent = +score.textContent + 1;

    if (numberGuess.value == randomNum) {
      game = false;
      if (topScore.textContent === "0") {
        topScore.textContent = score.textContent;
      }
      if (topScore.textContent > score.textContent) {
        topScore.textContent = score.textContent;
      }

      score.textContent = "0";
    }
  }
});

buttonagain.addEventListener("click", function () {
  reset();
});

function reset() {
  winNumber.textContent = "?";
  randomNum = Math.floor(Math.random() * 100);
  info.textContent = "Start guessing...";
  score.textContent = "0";
  numberGuess.value = "";
  document.body.style.backgroundColor = "#222";

  game = true;
}
