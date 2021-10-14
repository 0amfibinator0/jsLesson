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