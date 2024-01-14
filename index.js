function handleButtonClick() {
    // Получаем число от пользователя и проверяем его корректность
    let userInput;
    do {
      userInput = prompt("Введите число от 1 до 10");
    } while (!isValidInput(userInput));

    // Преобразуем введенное значение в число
    const userNumber = parseInt(userInput, 10);

    // Добавляем слушатели с выводом сообщений
    for (let i = 1; i <= userNumber; i++) {
      addEventListenerForNumber(i);
    }
  }

  // Функция для проверки корректности введенного числа
  function isValidInput(input) {
    const parsedInput = parseInt(input, 10);
    return !isNaN(parsedInput) && parsedInput >= 1 && parsedInput <= 10;
  }

  // Функция для добавления слушателя для конкретного числа
  function addEventListenerForNumber(number) {
    document.getElementById('myButton').addEventListener('click', function() {
      console.log(number);
    });
  }

  // Навешиваем основной слушатель на кнопку
  document.getElementById('myButton').addEventListener('click', handleButtonClick);