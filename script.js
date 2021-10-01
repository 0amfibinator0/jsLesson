let title = 'jsLesson';
const screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 560;
const rollback = 50;
let fullPrice = 100000;
const adaptive = true;

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