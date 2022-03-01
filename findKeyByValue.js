let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertEqual = function(actual, expected) {
  if (actual  === expected) {
    console.log(`${emojiHappy} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(emojiMad + "Assertion failed: " + actual + " !== " + expected);
  }
};

const findKeyByValue = function(obj, value) {
  for (const key in obj) {
    if ((obj[key]) === value) {
      return key;
    }
  }
  return undefined;
};
const bestTVShowByGenre = {
  sci_fi :"The Expanse",
  comedy :"Brooklyn Nine-Nine",
  drama :"The Wire"
};
console.log(findKeyByValue(bestTVShowByGenre, 'Brooklyn Nine-Nine'));
assertEqual(findKeyByValue(bestTVShowByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowByGenre, "The Wir"), undefined);