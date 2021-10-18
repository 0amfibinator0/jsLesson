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

const range = document.querySelector('.main-controls__range > input');
const rangeSpan = document.querySelector('.range-value');

let screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [], 
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    screenNumber: [],
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    blockCalc: function() {
        startBtn.disabled = false;
        startBtn.style.backgroundColor = '#A52A2A';
        startBtn.style.cursor = 'initial';

        const selects = document.querySelectorAll('.screen select');
        const screenInputs = document.querySelectorAll('.screen input');

        selects.forEach((select) => {
            select.addEventListener('change', appData.blockCalc);
            if(!select.value) {
                startBtn.disabled = true;
                startBtn.style.backgroundColor = '#818181';
                startBtn.style.cursor = 'not-allowed';
            }
        });
        screenInputs.forEach((input) => {
            input.addEventListener('input', appData.blockCalc);
            if(!input.value.trim()) {
                startBtn.disabled = true;
                startBtn.style.backgroundColor = '#818181';
                startBtn.style.cursor = 'not-allowed';
            }
        });
    },
    init: function () {
        appData.blockCalc();
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
        // appData.logger();
        appData.showResult();
    },
    showRollback: function () {
        range.addEventListener('input', function(event) {
            rangeSpan.textContent = event.target.value;
            appData.rollback = event.target.value;
        });
    },
    showResult: function () {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            appData.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
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
        clonScreen.children[1].children[0].value = '';

        appData.blockCalc();
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
        totalCount.value = appData.screens.reduce((accumulator, screen) => {
            return (accumulator += screen.count);
        }, 0);
        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent + appData.servicePricesNumber;
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};

appData.init();

appData.showRollback();