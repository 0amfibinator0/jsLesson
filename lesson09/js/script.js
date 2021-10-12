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