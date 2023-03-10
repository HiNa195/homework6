/* Homework 6
   Exercise 7 JavaScript code
   -- User Input / Sum
*/

function add()
{
   const x = document.getElementById("content");
   let y = document.createElement("input");
   y.setAttribute("type", "number");
   let z = document.createElement("input");
   z.setAttribute("type", "number");
   let sum = 0;
   sum.textContent = y + z;
   console.log(sum);
   x.value = sum;
}
add();