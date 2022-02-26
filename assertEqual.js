let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertEqual = function(actual, expected) {
  if (actual  === expected) {
    console.log(`${emojiHappy} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(emojiMad + "Assertion failed: " + actual + " !== " + expected);
  }
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);