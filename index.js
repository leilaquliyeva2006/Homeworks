function handleButtonClick() {
  let userInput;
  do {
    userInput = prompt("Введите число от 1 до 10");
  } while (!isValidInput(userInput));

  const userNumber = parseInt(userInput, 10);

  for (let i = 1; i <= userNumber; i++) {
    addEventListenerForNumber(i);
  }
}

function isValidInput(input) {
  const parsedInput = parseInt(input, 10);
  return !isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= 10;
}

function addEventListenerForNumber(number) {
  document.getElementById("myButton").addEventListener("click", function () {
    console.log(number);
  });
}
document
  .getElementById("myButton")
  .addEventListener("click", handleButtonClick);
