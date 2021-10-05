'use strict';

let title = prompt('Как называется ваш проект?', 'jsLesson');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые');
let screenPrice = parseInt(+prompt('Сколько будет стоить данная работа?', '12000'));
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 50;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let perc = fullPrice * (rollback/100);
let servicePercentPrice = Math.ceil(fullPrice - perc);

const showTypeOf = function(variable) {
    return variable, typeof variable;
};

const getRollbackMessage = function(price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price < 30000 && price > 15000) {
        return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};

const allServicePrices = function getAllServicePrices () {
    return servicePrice1 + servicePrice2;
};

function getFullPrice () {
    return screenPrice + allServicePrices();
}

function getTitle () {
    return title[0].toUpperCase() + title.substr(1).toLowerCase();
}

function getServicePercentPrices () {
    return fullPrice - perc;
}

fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();

console.log(showTypeOf(title));
console.log(showTypeOf(fullPrice));
console.log(showTypeOf(adaptive));

console.log(screens.toLowerCase().split(','));

console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);

