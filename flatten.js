let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`${emojiHappy} Assertion pass`);
    //console.log (eqArrays(actual, expected))
  } else {
    console.log(emojiMad + "Assertion fail");
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

const flatten = function(array) {
  let newArray = [];
  for (let index of array) {
    //console.log (Array.isArray(index))
    if (Array.isArray(index)) {
      for (let innerArray of index) {
        newArray.push(innerArray);
      }
    } else {
      newArray.push(index);
    }
  }
  return newArray;
};
const data = [1, 2, [1, 2], 3, [4]];
assertArraysEqual(flatten(data), [1, 2, 1, 2, 3, 4]);
