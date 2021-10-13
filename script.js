'use strict';

const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const adv = document.querySelector('.adv');
const fourthBookTitle = book[4].querySelector('a');
const secondBookChapters = book[0].querySelectorAll('li');
const fifthBookChapters = book[5].querySelectorAll('li');
const sixthBookChapters = book[2].querySelectorAll('li');
const sixthBookUl = book[2].querySelectorAll('ul');
const newChapter = document.createElement('li');

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

books[0].prepend(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
books[0].append(book[2]);

body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

fourthBookTitle.innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';

adv.remove();

secondBookChapters[3].after(secondBookChapters[6]);
secondBookChapters[6].after(secondBookChapters[8]);
secondBookChapters[9].after(secondBookChapters[2]);

fifthBookChapters[1].after(fifthBookChapters[9]);
fifthBookChapters[9].after(fifthBookChapters[3]);
fifthBookChapters[3].after(fifthBookChapters[4]);
fifthBookChapters[7].after(fifthBookChapters[5]);

newChapter.innerHTML = '<strong>Глава 8: За пределами ES6</strong>';

sixthBookUl[0].append(newChapter);
sixthBookChapters[8].after(newChapter);

appData.start();

console.log(typeof appData.title);