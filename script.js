'use strict';

let title = 'jsLesson';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 560;
let rollback = 50;
let fullPrice = 100000;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта ' + fullPrice + ' рублей/ долларов/гривен/юани');
console.log(screens.toLowerCase().split(','));
console.log(fullPrice * (rollback/100) + '%');


console.log('сообщение в консол');

alert('Hello world!');

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?', 'Простые');
screenPrice = parseInt(+prompt('Сколько будет стоить данная работа?', '12000'));
adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');

fullPrice = screenPrice + servicePrice1 + servicePrice2;

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback/100)));

console.log('servicePercentPrice - ', servicePercentPrice);

if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (fullPrice < 30000 && fullPrice > 15000) {
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что то пошло не так');
}