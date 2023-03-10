/* Homework 6
   Exercise 3 JavaScript code
   -- Change all paragraph elements to bold with a yellow background
*/

//
const modifyText = () => {
   const text = document.getElementsByTagName("p");
   // Use for loop to loop through each element
   // because getElementsByTagName('p') returns a collection
   // of all paragraph tags on the page, not a single element,
   // so it would not have a "style" property
   for (let t in text) {
      // Skip the collection elements that are not indexed by numbers, such as 'length'
      if (!isNaN(t) === true) {
         text[t].style.fontWeight = "bold";
         text[t].style.backgroundColor = "yellow";
      }
   }
}
modifyText();

/*
// Use querySelector to change just the background of the 1st <p>
const modifyText = () => {
   const text = document.querySelector("p");
   text.style.backgroundColor = "yellow";
}
modifyText();
// Set a background color using getElementsByClassName
const elements = document.getElementsByClassName("iscourses");
for (let i = 0; i < elements.length; i++) {
   elements[i].style.background = "yellow";
}
// Set a background color using getElementById
document.getElementById("fall").style.backgroundColor = "yellow";
// Set a background color for a whole document
document.body.style.backgroundColor = "yellow";
*/