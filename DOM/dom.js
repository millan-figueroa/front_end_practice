//EXAMINE THE DOCUMENT OBJECT

//log document directory

//log domain

//log url of page

//log all elements within page with corresponding indexes

//log the element corresponding to the 5th index

//log title of the page

//log the head section

//log the body section

//log all the forms on the page



//GET ELEMENT BY ID

// log the header title

// change header title

// add red 4px border to bottom of header


//GET ELEMENT BY CLASS NAME

// log elements with the class 'list-group-item'

// log the third item in the group above

// Change the name of the first item

// Make the second item bold

// Make every other item background color grey


// //GET ELEMENTS BY TAG NAME

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'pink';
// }

// //QUERY SELECTOR
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px blue';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'coral';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color= 'blue';

// //TRAVERSING THE DOM

// let itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);

let odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc';
}