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
    reset: function() {
        const selects = document.querySelectorAll('.screen select');
        const screenInputs = document.querySelectorAll('.screen input');
        const checks = document.querySelectorAll('input[type=checkbox');
        const range = document.querySelector('input[type=range');
        const rangeSpan = document.querySelector('.range-value');

        total.value = '0';
        totalCount.value = '0';
        totalCountOther.value = '0';
        fullTotalCount.value = '0';
        totalCountRollback.value = '0';

        range.value = '0';
        rangeSpan.textContent = '0';
        
        checks.forEach((check) => {
            check.checked = false;
        });

        selects.forEach((select) => {
            select.disabled = false;
            select.value = "";
        });
        screenInputs.forEach((screenInput) => {
            screenInput.disabled = false;
            screenInput.value = '';
        });

        startBtn.style = 'display: block';
        resetBtn.style = 'display: none';

        button.disabled = false;
        button.style.cursor = 'initial';
    },
    disabled: function() {
        const selects = document.querySelectorAll('.screen select');
        const screenInputs = document.querySelectorAll('.screen input');

        selects.forEach((select) => {
            select.disabled = true;
        });
        screenInputs.forEach((screenInput) => {
            screenInput.disabled = true;
        });

        startBtn.style = 'display: none';
        resetBtn.style = 'display: block';

        button.disabled = true;
        button.style.cursor = 'not-allowed';
    },
    blockCalc: function() {
        startBtn.disabled = false;
        startBtn.style.backgroundColor = '#A52A2A';
        startBtn.style.cursor = 'initial';

        const selects = document.querySelectorAll('.screen select');
        const screenInputs = document.querySelectorAll('.screen input');

        selects.forEach((select) => {
            select.addEventListener('change', this.blockCalc);
            if(!select.value) {
                startBtn.disabled = true;
                startBtn.style.backgroundColor = '#818181';
                startBtn.style.cursor = 'not-allowed';
            }
        });
        screenInputs.forEach((input) => {
            input.addEventListener('input', this.blockCalc);
            if(!input.value.trim()) {
                startBtn.disabled = true;
                startBtn.style.backgroundColor = '#818181';
                startBtn.style.cursor = 'not-allowed';
            }
        });
    },
    init: function () {
        this.blockCalc();
        this.addTitle();
        startBtn.addEventListener('click', this.start.bind(this));
        button.addEventListener('click', this.addScreenBlock);
        resetBtn.addEventListener('click', this.reset);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        this.disabled();
        this.addScreens();
        this.addServices();
        this.addPrices();
        // appData.logger();
        this.showResult();
    },
    showRollback: function () {
        range.addEventListener('input', (event) => {
            rangeSpan.textContent = event.target.value;
            this.rollback = event.target.value;
        });
    },
    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            this.screens.push({
                id: index,
                name: selectName,
                count: +input.value,
                price: +select.value * +input.value,
            });
        });
        console.log(this.screens);
    },
    addServices: function () {
        firstClass.forEach((item) => {
            const check = item.querySelector('input[type=checkbox');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text');
            if(check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });
        secondClass.forEach((item) => {
            const check = item.querySelector('input[type=checkbox');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text');
            if(check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
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
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
        }
        for(let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for(let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }
        totalCount.value = this.screens.reduce((accumulator, screen) => {
            return (accumulator += screen.count);
        }, 0);
        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;
        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));
    },
    logger: function () {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
    },
};

appData.init();

appData.showRollback();