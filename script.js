'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'jsLesson');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые');
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        } while (!obj.isNumber(appData.screenPrice));
    },
};

const obj = {
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function allServicePrices () {
        let sum = 0;
        let price = 0;
        let i = 0;
        do {
            i++;
            if (i === 1) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 2) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
            do {
                price = prompt('Сколько это будет стоить?');
            } while (!obj.isNumber(price));
            sum += +price;
        } while (i < 2);
        return sum;
    },
    
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },
    
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
        console.log(obj.getAllServicePrices());
        console.log(obj.getFullPrice());
        console.log(obj.getServicePercentPrices());
        console.log(obj.getTitle());
        for (let key in appData) {
            console.log(key);
        }
    },
    start: function () {
        appData.asking();
        obj.logger();
    },
};

obj.start();