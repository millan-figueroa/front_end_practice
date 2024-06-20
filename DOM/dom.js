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


// Change the color of the parent node of items list. 



// Log the great great grandparent node of the items list to the console. parentNode & parentElement are interchangeable --> <body></body>



// Log the child nodes, then the children of the itemList. Which is easier to work with?



// Try turning the last child of items list yellow. If it doesn't work, log the last child. Notice we have the same issue as we did with childNodes? Now try doing it using lastElementChild. 



// Change the text of the last child to 'Special Item'



// Get the sibling so it logs the following element into the console --> <br>



// Change the color of the previous sibling of the items list to grey --> 'Items' header shld be grey





// ***** CREATING ELEMENTS *****

// Create a new div with a class and ID of hello



// Set a title of 'hello Div' to the new div



// Create a new text node to the div that says 'Hello World!', then add that text to the div



// Now add your newly created div to the DOM! Place the new div inside the .container div, underneath the 'Items' h2.


// Lastly, change the font size of the newDiv's text to 30px



// ***** ADDING EVENT LISTENERS FOR INTERACTIVTY *****

// Create a new button in the html, call it 'Make me Beautiful!', link an event to it by grabbing its id and assigning it to a variable, then adding an event listener and passing in a 'click' event, and a 'prettyMaker' func

let button = document.getElementById('button');button.addEventListener('click', buttonClick);


// Create a function prettyMaker that changes the 'add Items' container's background to pink when clicked 
// let header = document.getElementById('main-header');
// let items = document.getElementById('main');
// let body = items.parentNode.parentNode;
// console.log(body);
// function prettyMaker() {
//     header.className = 'bg-secondary text-white p-4 mb-3';
//     items.style.backgroundColor = 'pink';
//     button.textContent = 'Thank you!';
//     body.style.backgroundColor = 'black';
// }

// Create a function buttonClick and pass in an even parameter and click button to see its props!

// Add .target to param to see the element its targeting. Add target.id, target.className, target.classList, etc to see all the elements targeted 

// Add .clientX or .clientY to see the position of the mouse on the appropriate axis, or .offsetX / offsetY to see the axis pertaining to the element

function buttonClick(e) {
    console.log(e.clientY);
}
// Add .altKey, .ctrlKey, .shiftKey and hold any of them down to see which boolean you get

// Create a function runEvents and test out some events such as dblclick, mousedown, mouseup for the first param, and runEvent for the 2nd

// Create an empty div in the html and create a function to test 'mouseenter','mouseleave', 'mouseover', and 'mouseout' events

// Test focus / blur (click in, click out), cut/ paste (make everything disappear if you cut or paste), input 

// Create drop down menu and add event listener to listen for selection ('change event'), console.log the chose value

// Add event listener to forms and listen for submit, use preventDefault
// let box = document.getElementById('box');
// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');

itemInput.addEventListener('keydown', runEvent);
function runEvent(e) {
    console.log('EVENT TYPE: ' + e.type);
    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3';
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3';

    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
}



