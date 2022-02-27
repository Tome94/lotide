let emojiMad = String.fromCodePoint(0x1F621);
let emojiHappy = String.fromCodePoint(0x1F603);

const assertEqual = function(actual, expected) {
  if (actual  === expected) {
    console.log(`${emojiHappy} Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(emojiMad +"Assertion failed: " + actual + " !== " + expected);
  }
};
const eqArrays = function (array1, array2){
  for (let i = 0; i < array1.length; i++){
    if (array1[i]===array2[i]){
      return true
    }
    else {
      return false
    }
  }
}

//test code
assertEqual(eqArrays(['1', 2, 3],['1', 2, 3]), true);
assertEqual(eqArrays([1, 2, 3],[1, 2, "3"]), false);;