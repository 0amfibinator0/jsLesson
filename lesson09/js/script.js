'use strict';

const title = document.getElementsByTagName('h1')[0];
const btn = document.getElementsByClassName('handler_btn');
const button = document.querySelector('.screen-btn');
const firstClass = document.querySelectorAll('.other-items.percent');
const secondClass = document.querySelectorAll('.other-items.number');
const input = document.querySelector('.rollback > .main-controls__range > input');
const span = document.querySelector('.rollback > .main-controls__range > .range-value');
const totalInput = document.getElementsByClassName('total-input');

for(let key of totalInput) {
    console.log(key);
}

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    isString: function (str) {
        return (!parseFloat(str) && str !== null && str.trim() !== '') ? true : false;
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', 'jsLesson');
        } while (!appData.isString(appData.title));
        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;
            do {
                name = prompt('Какие типы экранов нужно разработать?', 'Простые');
            } while (!appData.isString(name));
            do {
                price = prompt('Сколько будет стоить данная работа?');
            } while (!appData.isNumber(price));
            appData.screens.push({id: i, name: name, price: price});
        }
        let firstPrice = 0;
        let i = 0;
        do {
            i++;
            let name;
            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            } while (!appData.isString(name));
            do {
                firstPrice = prompt('Сколько это будет стоить?');
            } while (!appData.isNumber(firstPrice));
            appData.services[name] = +firstPrice;
        } while (i < 2);
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (price < 30000 && price >= 15000) {
            return 'Даем скидку в 5%';
        } else if (price < 15000 && price >= 0) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так';
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};

appData.start();

console.log(typeof appData.title);