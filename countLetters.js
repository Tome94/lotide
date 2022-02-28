let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertEqual = function(actual, expected) {
  if (actual  === expected) {
    console.log(`${emojiHappy} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(emojiMad + "Assertion failed: " + actual + " !== " + expected);
  }
};
const countLetter = function (words){
const resultObject = {}
for (const letter of words){
  /*skip space
      if (letter !== ' ') {
      resultObject[letter] = resultObject[letter] + 1 || 1;
    }
  */
  if (resultObject[letter]){
    resultObject[letter]+=1
  } else {
    resultObject[letter] =1
  }
}
console.log (resultObject)
return resultObject
}
const sentence = "lighthouse llllabs"
const result1 = countLetter (sentence)
assertEqual (result1["t"], 1)
assertEqual (result1["m"], 2)