(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"rprtr258palindrome":2}],2:[function(require,module,exports){
module.exports = Phrase;

function isLetter(c) {
    return /[a-z]/i.test(c);
}

function Phrase(content) {
    this.content = Array.from(content.toLowerCase()).filter(isLetter).join("");
    this.palindrome = () => {
        return this.content === Array.from(this.content).reverse().join("");
    }
}

},{}]},{},[1]);
