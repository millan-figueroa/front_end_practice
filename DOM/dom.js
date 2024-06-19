// When each part is done, comment it out to clear out console and reset styles



// ***** EXAMINE THE DOCUMENT OBJECT *****

//log document directory --> #document


//2 ways to log url of page --> file:///C:/Users/Millan/OneDrive/Repos/practice_projects/front_end_practice/DOM/index.html


//log all elements within page with corresponding indexes --> Nodelist(23) and a dropdown w every item


//log the element corresponding to the 5th index --> <meta charset="UTF-8">


//log title of the page --> Item Lister


//log the head section --> <head>...</head>


//log the body section --> <body>...</body>


//log all the forms on the page --> HTMLCollection [form.form-inline.mb-3]




// ***** GET ELEMENT BY ID *****

// log the header title --> <h1 id="header-title"> Item Lister </h1>


// change header title --> <h1 id="header-title"> Header 2.0 </h1>


// add +94px border to bottom of header --> border should appear



// ***** GET ELEMENT BY CLASS NAME *****

// log elements with the class 'list-group-item' --> HTMLCollection(4)


// log the third item in the group above --> <li class="list-group-item">Item 3</li>


// Change the name of the first item --> item 1 should change


// Make the second item bold --> item 2 should appear bold


// Make the background of the third item light grey (#dbdbdb)


// Make every other item background color coral in one code block --> Background color of item 2 and item 4 should be coral in one code block



// ***** GET ELEMENTS BY TAG NAME *****

// log the third item in the group above

// Change the name of the first item

// Make the second item bold

// Make every other item background color pink


// ***** USING QUERY SELECTOR *****

// Give header bottom a blue border


// Make the input in the first form say 'Sup'


// Change the button value to say ADD


// Change the button color to blue **Challenge:use a different selector


// Make 'Item 1' text red


// Make 'Item 4' background coral


// Make 'Item 2' text blue


// Using a different selector, change the text of 'Item 4' to white


// Change the background color of Item 3 to blue and text color to white using 'nth child' selector


// Using a for loop, make the background color of the odd number Items pink



// ***** TRAVERSING THE DOM *****


// Query Select and save items list to variable and console log 
let itemList = document.querySelector('#items');

// Change the color of the parent node of items list. 
itemList.parentNode.style.backgroundColor = 'grey';

// Log the great great grandparent node of the items list to the console. parentNode & parentElement are interchangeable --> <body></body>
console.log(itemList.parentElement.parentNode.parentNode);

// Log the childNodes, then the children of the itemList. Which is better? 
console.log(itemList.childNodes);
console.log(itemList.children);

// Try turning the last child of items list yellow. If it doesn't work, log the last child. Notice we have the same issue as we did with childNodes? Now try doing it using lastElementChild. 

console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = 'yellow';

// Change the text of the last child to 'Special Item'

itemList.lastElementChild.textContent = 'Special Item';

// log the next sibling of the items list. What happens when you use nextElementSibling? --> null

console.log(itemList.nextElementSibling);

// Change the color of the previous sibling of the items list to pink. 

itemList.previousElementSibling.style.backgroundColor = 'pink';