// 1. Проверку на то что переданная операция - это функция. Напрмер Math есть константы типа Math.PI и если я щас передам 'PI'
//    как `oper`, то он его найдёт и выведет ошибку, а надо чтобы просто вернул значение Math.PI

// 2. Если передана не существушая операция (ни в Math ни в switch), то вывести ошибку, что такой операции нет

// 3. Написать логику для multiply, division и subtract. Начальные значения 1, 1 и 0 соответсвенно


function Math_Func(oper, num1, num2) {
    if (typeof oper === 'function') {
        return oper(num1, num2);
    } else if (Math.hasOwnProperty(oper)) {
        return Math[oper];
    } else {
        switch (oper) {
            case 'multiply':
                return num1 * num2;
            case 'division':
                if (num2 !== 0) {
                    return num1 / num2;
                } else {
                    return 'Error! Tried to divide by 0!';
                }
            case 'subtract':
                return num1 - num2;
            default:
                return 'Error! Dont have this operation!';
        }
    }
}

console.log(Math_Func('PI', 0, 0));
console.log(Math_Func('multiply', 5, 10));
console.log(Math_Func('division', 8, 0)); 
console.log(Math_Func('default', 0, 0));