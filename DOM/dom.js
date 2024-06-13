// When each part is done, comment it out to clear out console and reset styles

// ***** EXAMINE THE DOCUMENT OBJECT *****

// //log document directory --> #document
// console.dir(document);

// //2 ways to log url of page --> file:///C:/Users/Millan/OneDrive/Repos/practice_projects/front_end_practice/DOM/index.html
// console.log(document.URL);

// //log all elements within page with corresponding indexes --> Nodelist(23) and a dropdown w every item
// console.log(document.querySelectorAll('*'));

// //log the element corresponding to the 5th index --> <meta charset="UTF-8">
// let elements = document.querySelectorAll('*');
// console.log(elements[2]);

// //log title of the page --> Item Lister
// console.log(document.title);

// //log the head section --> <head>...</head>
// console.log(document.head); 

// //log the body section --> <body>...</body>
// console.log(document.body);

// //log all the forms on the page --> HTMLCollection [form.form-inline.mb-3]
// console.log(document.forms);



// ***** GET ELEMENT BY ID *****

// // log the header title --> <h1 id="header-title"> Item Lister </h1>
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);

// // change header title --> <h1 id="header-title"> Header 2.0 </h1>
// headerTitle.textContent = 'Header 2.0';
// console.log(headerTitle)

// // add +94px border to bottom of header --> border should appear
// let mainHeader = document.getElementById('main-header');
// mainHeader.style.borderBottom = 'solid 6px grey';
// mainHeader.style.borderTop = 'solid 6px grey';


// ***** GET ELEMENT BY CLASS NAME *****

// log elements with the class 'list-group-item' --> HTMLCollection(4)
let items = document.getElementsByClassName('list-group-item');
console.log(items);

// log the third item in the group above --> <li class="list-group-item">Item 3</li>
console.log(items[2]);

// Change the name of the first item --> item 1 should change
items[0].textContent = 'Special Item 1'

// Make the second item bold --> item 2 should appear bold
items[1].style.fontWeight = 'bold';

// Make the background of the third item light grey (#dbdbdb)
items[2].style.backgroundColor = '#dbdbdb';

// Make every other item background color coral in one code block --> Background color of item 2 and item 4 should be coral in one code block
for (let i=0; i < items.length; i++) {

}

// ***** GET ELEMENTS BY TAG NAME *****

// log the third item in the group above

// Change the name of the first item

// Make the second item bold

// Make every other item background color pink


// USE QUERY SELECTOR

// Give header bottom a blue border

// Make the input in the first form say 'Sup'

// Change the button value to say ADD

// Make item 1 red

// Make last item coral

// Make second item blue


//TRAVERSING THE DOM

// let itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode);

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#ccc';
// }