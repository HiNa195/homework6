/* Homework 6
   Exercise 2 JavaScript code
   -- Display the text only (no HTML)
*/

// Display text for 400 level courses
const displayText400 = () => {
    const course = Array.from(document.getElementsByClassName("400level"));
    course.forEach(element => {
        console.log(element.textContent);
    });
}
displayText400();

/*
const displayText400 = () => {
    const course = document.getElementsByClassName("400level");
    for (let i = 0; i < course.length; i++) {
        console.log(element);
    }
}
displayText400();
*/

/*
const displayText400 = () => {
    const course = Array.from(document.getElementsByClassName("400level"));
    // Using for loop
    for (let i = 0; i < course.length; i++) {
        let element = course[i].textContent; // can use innerText instead
        console.log(element);
    }
    // Using for loop
    for (let i = 0; i < course.length; i++) {
        console.log(course[i].textContent);
    }
    // Using for of loop
    for (element of course) {
        console.log(element.textContent);
    }
}
displayText400();
*/