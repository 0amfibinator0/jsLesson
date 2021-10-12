// урок 1 //

// console.log('Дени');
// console.log('world');
// console.log('12');
// console.log(12);
// console.log('Hello' + ' world');// конкатенация
// console.log('Hello ' + 'world');
// console.log('Hello ' + 'world');
// console.log('Hello' + ' ' + 'world');
// console.log('добро' + ' пожаловать ' + 'на курс');
// console.info('Hello');
// alert('Hello');
// alert('Hello'); // всплывающее окно
// alert('Hello');

// document.getElementById('out').innerHTML = 'Hello';
// document.getElementById('out').innerHTML = '2021';
// document.getElementById('out').innerHTML = '<b>2020</b>';

// document.querySelector('h2.header').innerHTML = 5; // берет первый попавшийся селектор
// document.querySelector('.header').innerHTML = 5; // можно и так и так

// document.querySelector('#one').innerHTML = 5858; // обрашение к id через #
// document.getElementById('one').innerHTML = 6868;

// let b; // var a - устарело
// let a = document.querySelector('#one'); // внутрь a получил параграфф
// let c;
// c = document.querySelector('.header'); // можно и так

// a.innerHTML = 9999; // new! - ошибка
// c.innerHTML = 4848;

// урок 2 //

// let a = 7;
// let b = 9;
// console.log(a * b);
// let c = 7;
// let d = 9;
// console.log(c / d);
// let e = 3;
// let f = 5;
// console.log(e + f);

// console.log(a);

// let inputIn = document.querySelector('.input-in') // input
// let button = document.querySelector('.button') // button
// let div = document.querySelector('.out')

// button.onclick = function () {
//     // будет выполняться только когда кнопка нажата
//     console.log('работает');
//     // console.log(inputIn.value); // value - это то что введено в input
//     let b = +inputIn.value; // + - преобразовывает в число
//     console.log(b + 10); // '55' + 10 = 5510
//     div.innerHTML = b;
//     inputIn.value = ''; // подчистить input после клика
// }

// 3 урок //

// let a = 9;

// >= - больще либо равно 
// <= - меньше либо равно
// == - равно
// != - неравно
// if(a != 9) {
//     // true
//     console.log('Yes')
// }
// else {
//     console.log('else')
// }

const button = document.querySelector('.bt');
const input = document.querySelector('.age');

// () => - стрелочная функция (используется только одни раз)
// button.onclick = () => {
//     let num = +input.value;
//     if (num >= 16 && num < 60) { // && - оператор "и" 
//         console.log ('welcome');
//     }
//     else if (num > 60) {
//         console.log ('ты точно сюда?');
//     }
//     else {
//         console.log ('ты не пройдешь');
//     }

//     switch (num) {
//         case 15:
//             console.log('еще год потрерпи');
//             break; // не проверять остальные блоки
//         case 16:
//             console.log('можно');
//             break;
//         default: // default = else
//             console.log('ok');
//     }
// }

// let b = 5;

// console.log(b == 3 || b == 7); // || - или


// ЗАДАНИЕ 1

button.onclick = () => {
    let num = +input.value;
    if (num === 4 ) {
        console.log ('true');
    }
    else {
        console.log('false');
    }
}

// ЗАДАНИЕ 2

let button2 = document.querySelector('.btn');
let a21 = 31;
let a22 = 20;

button2.onclick = () => {
    if (a21 > a22) {
        console.log(a21);
    }
    else {
        console.log(a22);
    }
}

// ЗАДАНИЕ 3

let button3 = document.querySelector('.b');
let i31 = document.querySelector('.input1');
let i32 = document.querySelector('.input2');

button3.onclick = () => {
    let num1 = +i31.value;
    let num2 = +i32.value;

    if (num1 > num2) {
        console.log (i31.value);
    }
    else {
        console.log (i32.value);
    }
}