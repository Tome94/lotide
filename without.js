let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${emojiHappy} Assertion passed`);
    //console.log (eqArrays(actual, expected))
  } else {
    console.log(emojiMad + "Assertion failed");
  }
};
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);
    }
  }
  console.log(newArray);
};
const words = ["hello", "world", "lighthouse", "hello", "lighthouse"];
without(words, ["lighthouse"]);
without(["1", "2", "3", "3"],[1, 2, "3"]);
assertArraysEqual(words, ["hello", "world", "lighthouse","hello", "lighthouse"]);