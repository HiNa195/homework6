/* Homework 6
   Exercise 7 JavaScript code
   -- User Input / Sum
*/

// Pseudocode
// Input (hard code)
const n1 = prompt("Please enter the first integer");
const n2 = prompt("Please enter the second integer");

// Need validation

// Calculate sum
const sum = Number(n1) + Number(n2);

// Output
const paraElement = document.createElement("p");
// Add the text to the paragraph
// using innerHTML, innerText, textContent, add a text node...
paraElement.innerText = `${n1} + ${n2} = `;
// Create span element with the sum and red font
const spanElement = document.createElement("span");
spanElement.textContent = sum;
spanElement.style.color = "red";
spanElement.style.fontWeight = "bold";
// Add span to the paragraph
paraElement.appendChild(spanElement);
// Add the paragraph to the document
const divElement = document.getElementById("content");
divElement.appendChild(paraElement);

/*
// Alternate way using innerHTML
const paraElement2 = document.createElement("p");
paraElement2.innerHTML = `${n1} + ${n2} = <span style="color:red; font-weight:bold"> ${sum}</span>`;
divElement.appendChild(paraElement2);
*/