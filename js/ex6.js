/* Homework 6
   Exercise 6 JavaScript code
   -- Show a list
*/

const words = [{
   term: "Procrastination",
   definition: "Avoidance of doing a task that needs to be accomplished"
   }, {
   term: "Tautology",
   definition: "logical argument constructed in such a way that it is logically irrefutable"
   }, {
   term: "Oxymoron",
   definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];

function makeContent(words) {
   const x = document.getElementById('content');
   const y = document.createElement('dl');
   for (let i = 0; i < words.length; i++) {
      const t = document.createElement('dt');
      const d = document.createElement('dd');
      // Set properties
      t.textContent = words[i].term;
      d.textContent = words[i].definition;
      // Add to the dl
      y.appendChild(t);
      y.appendChild(d);
   }
   // Add the dl to the page
   x.appendChild(y);
}
makeContent(words);