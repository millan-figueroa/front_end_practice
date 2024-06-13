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


// GET ELEMENT BY CLASS NAME

// log elements with the class 'list-group-item'

// log the third item in the group above

// Change the name of the first item

// Make the second item bold

// Make every other item background color grey


// GET ELEMENTS BY TAG NAME

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

let itemList = document.querySelector('#items');
// parentNode
console.log(itemList.parentNode);

let odd = document.querySelectorAll('li:nth-child(odd)');

for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#ccc';
}