var bc = require('./BasicCard.js');
var cc = require('./ClozeCard.js');


var firstQuestion = new bc("Who was the first president of the United States?", "George Washington");

console.log(firstQuestion.front);
console.log(firstQuestion.back);

var secondQuestion = new cc(
    "George Washington was the first president of the United States.", "George Washington");

console.log(secondQuestion.cloze);
console.log(secondQuestion.fullText);
console.log(secondQuestion.partialText);