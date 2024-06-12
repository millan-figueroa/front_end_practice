//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelectorAll('*'));
// console.log(window.location.href);


// let allElements = document.querySelectorAll('*');
// console.log(allElements[10]);
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

//GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// let header = document.getElementById('main-header')
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENT BY CLASS NAME

let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
//items.style.backgroundColor = '#f4f4f4'; //throws error use loop
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

//GET ELEMENTS BY TAG NAME

let li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'pink';
}

//QUERY SELECTOR
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px blue';

let input = document.querySelector('input');
input.value = 'Hello World';

let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';