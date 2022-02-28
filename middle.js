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

const middle = function(arr) {
  const lengthOfArray = arr.length;
  const middleIndex = Math.floor(lengthOfArray / 2);
  //console.log (element)
  if (lengthOfArray > 2 && lengthOfArray % 2 !== 0) {
    return (arr[middleIndex]);
  } else if (lengthOfArray > 2 && lengthOfArray % 2 === 0) {
    return (arr[middleIndex - 1], arr [middleIndex]);
  } else {
    return [];
  }
};
assertArraysEqual(middle([10, 20]),[]);
assertArraysEqual(middle([10, 20, 30]), [20]);
assertArraysEqual(middle([10, 20, 30, 40]), ([20], [30]));

