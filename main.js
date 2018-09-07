let Phrase = require("rprtr258palindrome");

function palindromeTester(event) {
    event.preventDefault();
    let string = event.target.elements[0].value;
    let phrase = new Phrase(string);
    let palindromeResult = document.querySelector("#palindromeResult");
    if (phrase.palindrome())
        palindromeResult.innerHTML = `<strong>"${string}"</strong> is a palindrome!`;
    else
        palindromeResult.innerHTML = `<strong>"${string}"</strong> is not a palindrome!`;
}

document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#palindromeTester");
    form.addEventListener("submit", (event) => palindromeTester(event));
});
