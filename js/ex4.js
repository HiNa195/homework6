/* Homework 6
   Exercise 4 JavaScript code
   -- Create and run a function to add a link
*/

const addLink = () => {
   const newLi = document.createElement("li"); // Create a "li" element
   newLi.id = "cb"; // Define element ID
   const newLink = document.createElement("a"); // Create an "a" element
   newLink.textContent = "College of Business"; // Define its text content
   newLink.href = "https://www.csulb.edu/college-of-business"; // Link
   document.getElementById("csulb").appendChild(newLi).appendChild(newLink); // Insert the new element
}
addLink();