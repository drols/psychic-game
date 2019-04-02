var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var selectedLetters = [];

  var score = 0;
  var letterIndex = 0;

  var computerGuess = availableLetters[Math.floor(Math.random() * availableLetters.length)]

  

  function renderGame() {

    
    if (letterIndex <= (availableLetters.length - 1)) {
      document.querySelector("#letters-remaining").innerHTML = "Remaining letters: " + availableLetters;

      document.querySelector("#letters-guessed").innerHTML = "Letters you have guessed: " + selectedLetters;
    }
    else {
      document.querySelector("#letters-remaining").innerHTML = "Game Over!";
      document.querySelector("#wins").innerHTML = "Final Score " + score + ".";
    }
  }

  function updateScore() {
    document.querySelector("#wins").innerHTML = "Score: " + score;
  }

  renderGame();
  updateScore();

  document.onkeyup = function(event) {

    if(letterIndex === availableLetters.length) {
      return;
    }

    var userInput = event.key.toLowerCase();

    var index = availableLetters.indexOf(userInput);
      
    if (userInput === computerGuess) {
      score++;
      updateScore();
    }
    
    if (index > -1) {
        availableLetters.splice(index, 1);
        selectedLetters.push(userInput);
        console.log(userInput);
        console.log(computerGuess);
      };

    letterIndex++;
    renderGame();

  };