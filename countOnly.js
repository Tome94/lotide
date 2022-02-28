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
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual([1,2,3], [1,2,3]);

const countOnly = function(allItems, itemsToBeCounted) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToBeCounted[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};
const firstNames = [
  "karl",
  "tommy",
  "shiva",
  "fang",
  "joe",
  "salima",
  "fang",
  "jason"
];
const result1 = countOnly(firstNames, {'jason':true, 'karima':true, 'fang':true, 'salima':false});
assertEqual(result1['jason'], 1);
assertEqual(result1['karima'], undefined);
assertEqual(result1['fang'], 2);
assertEqual(result1['salima'], undefined);