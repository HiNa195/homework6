/* Homework 6
   Exercise 1 JavaScript code
   -- Display all body nodes
*/

//Displays all body nodes
const bodyNodes = () => {
    for (const node of document.body.childNodes) {
        console.log(node);
    }
}
bodyNodes();

/*
// Another ways
// Using forEach
const bodyNodes = document.body.childNodes.forEach(node => {
    console.log(node);
});
// Using for loop
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}
// Using for of loop
for (const node of document.body.childNodes) {
    console.log(node);
}
//
const bodyNodes = document.body;
console.log(bodyNodes);
//
const bodyNodes = document.getElementsByTagName("body")[0];
console.log(bodyNodes);
//
const bodyNodes = document.querySelector("body");
console.log(bodyNodes);
*/