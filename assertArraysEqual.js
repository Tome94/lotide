let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${emojiHappy} Assertion passed`);
    //console.log (eqArrays(actual, expected))
  } else {
    console.log(emojiMad + "Assertion failed: ");
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


//test code
assertArraysEqual(['1', 2, 3],['1', 2, 3]);
assertArraysEqual([1, 2, 3],[1, "2", 3]);
//console.log (eqArrays (['1', 2, 3],[1, 2, 3]))