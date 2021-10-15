'use strict';

const title = document.getElementsByTagName('h1')[0];
const button = document.querySelector('.screen-btn');

const firstClass = document.querySelectorAll('.other-items.percent');
const secondClass = document.querySelectorAll('.other-items.number');

const input = document.querySelector('.rollback > .main-controls__range > input');
const span = document.querySelector('.rollback > .main-controls__range > .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        button.addEventListener('click', appData.addScreenBlock);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        // appData.getServicePercentPrices();
        // appData.logger();
        appData.showRezult();
    },
    showRezult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
    },
    addScreens: function () {
        screens = screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
            });
        });
        console.log(appData.screens);
    },
    addServices: function () {
        firstClass.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text');
            if(check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        secondClass.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text');
            if(check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        const clonScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(clonScreen);
    }, 
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for(let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for(let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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

appData.init();