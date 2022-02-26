let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertEqual = function(actual, expected) {
  if (actual  === expected) {
    console.log(`${emojiHappy} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(emojiMad + "Assertion failed: " + actual + " !== " + expected);
  }
};

/*test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
*/

const tails = function(data) {
  let newArray = [];
  for (let i = 1; i < data.length; i++) {
    newArray.push(data [i]);
  }
  return newArray;
};
//console.log(tails(["element", 2, 3]));
const result = tails(["hello", "lighthouse", "Labs"]);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "Labs");
const words = ["hi", "bye"];
tails(words);
assertEqual(words.length, 2);