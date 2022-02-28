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

const letterPositions = function (sentence){
  const result = {}
  for (const [index, letter] of sentence.split('').entries()){
    if (result[letter]){
      result[letter].push (index)
  } else {
    result[letter] = [index]
  }
}
  return result
};
const test = "hello"
console.log (letterPositions (test))
//assertArraysEqual (letterPositions(test).l, [2, 3])