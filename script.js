'use strict';

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 50;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;
let perc = fullPrice * (rollback/100);

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt('Как называется ваш проект?', 'jsLesson');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые');

    adaptive = confirm('Нужен ли адаптив на сайте?');
    
    screenPrice = prompt('Сколько будет стоить данная работа?');
    
    while (!isNumber(screenPrice)) {
        screenPrice = prompt('Сколько будет стоить данная работа?',);
    }
};

const getAllServicePrices = function allServicePrices () {
    let sum = 0;
    let i = 0;
    do {
        i++;
        if (i === 1) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 2) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        sum += +prompt('Сколько это будет стоить?');
    } while (i < 2);
    return sum;
};

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
};

const getFullPrice = function () {
    return screenPrice + allServicePrices;
};

const getServicePercentPrices = function () {
    return fullPrice - perc;
};

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%';
    } else if (price < 30000 && price >= 15000) {
        return 'Даем скидку в 5%';
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
    } else {
        return 'Что то пошло не так';
    }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.toLowerCase().split(','));
console.log(servicePercentPrice);