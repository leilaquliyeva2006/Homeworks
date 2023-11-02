// 3) Регистрация (сложность 3)
//   1) Пользователь при заходе на сайт видит уведомление (alert) о том что щас он должен зарегистрироваться
//   2) Он должен ввести логин и пароль
//   3) Пользователю показывается уведомление (alert) о том что щас он должен авторизоваться
//   4) Он должен заново ввести пароль и логин
//   4.1) Если он правильно ввёл свои данные, т.е. те же данные что и при регистрации то ему показывается уведомление (alert) о том что всё окей
//   4.2) Если у него будет ошибка в логине или в пароле то уведомление (alert) о том что он неправильно ввёл логин или пароль
//   5) С 4-ого пункта должно повторяться пока не будут введены верные данные

// alert("Vi doljni zaregistrirovatsa");
// let login = prompt("Vvedite log:");
// let password = prompt("Vvedite parol:");
// alert("Vi doljni avtorizovatsa");
// while(true){
//     let login1 = prompt("Vvedite svoy log:");
//     let password1 = prompt("Vvedite svoy parol:");
//     if((login === login1) && (password === password1)){
//         alert("Vse okey");
//         break;
//     } else {
//         alert("Vi vveli ne pravilno log ili parol");
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////
// 4) Регистрация (сложность 4)
//   1) Пользователь при заходе на сайт видит уведомление (alert) о том что щас он должен зарегистрироваться
//   2) Он должен ввести логин и пароль
//   3) Пользователю показывается уведомление (alert) о том что щас он должен авторизоваться
//   4) Он должен заново ввести пароль и логин
//   4.1) Если он правильно ввёл свои данные, т.е. те же данные что и при регистрации то ему показывается уведомление (alert) о том что всё окей
//   4.2) Если у него будет ошибка в логине или в пароле то уведомление (alert) о том что он неправильно ввёл логин или пароль
//   5) С 4-ого пункта должно повторяться пока не будут введены верные данные (максимум повторов 3)
//   6) После 3-ей неудачной попытки предложить создать нового пользователя и зайти заново
//   7.1) Если будет отказано то вернуться к пункту 4 и сбросить количество неудачных попыток
//   7.2) Если будет принято то вернуться к пункту 1 и сбросить количество неудачных попыток

// outterLoop: while (true) {
//   alert("Vi doljni zaregistrirovatsa");
//   let login = prompt("Vvedite log:");
//   let password = prompt("Vvedite parol:");
//   alert("Vi doljni zaregistrirovatsa was. U vas tri popitki!");
//   let count_t = 3;
//   while (true) {
//     let login1 = prompt("Vvedite log:");
//     let password1 = prompt("Vvedite parol:");
//     if (login === login1 && password === password1) {
//       alert("Otlicno");
//       break outterLoop;
//     } else {
//       alert("Ne pravilniy log ili parol");
//       count_t -= 1;
//     }
//     if (count_t <= 0) {
//       count_t = 3;
//       const question = confirm("Xotite sozdat akkaunt?");
//       if (question === true) {
//         break;
//       } else {
//         continue;
//       }
//     }
//   }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Регистрация (сложность 5)
1) Пользователь при заходе на сайт видит уведомление (alert) о том что щас он должен зарегистрироваться
2) Он должен ввести логин и пароль
3) Пользователю показывается уведомление (alert) о том что щас он должен авторизоваться
4) Он должен заново ввести пароль и логин
    4.1) Если он правильно ввёл свои данные, т.е. те же данные что и при регистрации то ему показывается уведомление (alert) о том что всё окей
    4.2) Если у него будет ошибка в логине или в пароле то уведомление (alert) о том что он неправильно ввёл логин или пароль
5) С 4-ого пункта должно повторяться пока не будут введены верные данные (максимум повторов 3)
6) После 3-ей неудачной попытки предложить создать нового пользователя и зайти заново
    6.1) Если будет отказано то предложить сбросить пароль
        6.1.1) Если будет отказано то вернуться к пункту 4 и сбросить количество неудачных попыток
        6.1.2) Если будет принято то пункт 7
    6.2) Если будет принято то вернуться к пункту 1 и сбросить количество неудачных попыток
7) Если был выбран сброс пароля то пароль надо сбрасывать с помощью логина
    7.1) Если такого логина не существует, то показать уведомление о том, что такого логина не существует и предложить создать пользователя
        7.1.1) Если будет отказано то возвращаемся на 7-ой пункт
        7.1.2) Если будет принято то возвращаемся на 1-ый пункт
*/
outterLoop: while(true){ 
  alert("Vi doljni zaregistrirovatsa");
  let log = prompt("Vvedite login:");
  let password = prompt("Vvedite parol:");
  alert("Vi doljni zaregistrirovatsa was. U vas tri popitki!");
  let count_t = 3;
    innerLoop: while(true){
        alert("Vi doljni zaloginitsa,U vas est "+count_t+" wansov");
        let log1 = prompt("Vvedite login:"); 
        let password1 = prompt("Vvedite parol:");
        if((log === log1) && (password === password1)){ 
            alert("Otlicno"); 
            break outterLoop;
        } else {
            alert("Ne pravilniy login ili parol");
            count_t-=1;
        }
        if(count_t<=0){ 
            count_t = 3;
            let question = confirm("xotite sozdat noviy akkaunt");
            if (question === true){
                break innerLoop; 
            } else{
                question = confirm("Xotite pomenat parol?"); 
                if(question === false){
                    continue; 
                } else{ 
                    let change_p = prompt("VVedite login dla izmneniya parola");
                    if(change_p!==log){
                        question = confirm("takogo logina net,xotite sozdat?"); 
                        if(question == false){
                            continue; 
                        } else{
                            break innerLoop;
                        }
                    } else{
                        password = prompt("VVedite noviy parol dla '"+change_p+"' login:");
                        continue;
                    }
                }
            }
        }
    }
}