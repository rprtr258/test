let Phrase = require("rprtr258palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);
if (phrase.palindrome())
    alert(`"${string}" is a palindrome!`);
else
    alert(`"${string}" is not a palindrome!`);
