// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities: Time: O(N)

// ----------------- Solution 1 -----------------

const sameFrequency1 = (int1, int2) => {
  let int1Str = int1.toString();
  let int2Str = int2.toString();

  if (int1Str.length !== int2Str.length) {
    return false;
  }

  let str1Obj = {};
  let str2Obj = {};

  for (const val of int1Str) {
    str1Obj[val] = str1Obj[val] ? str1Obj[val] + 1 : 1;
  }

  for (const val of int2Str) {
    str2Obj[val] = str2Obj[val] + 1 || 1;
  }

  for (const key in str1Obj) {
    if (str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }
  return true;
};

console.log(`\nSolution 1`);
console.log(sameFrequency1(34, 14)); // false
console.log(sameFrequency1(3589578, 5879385)); // true
console.log(sameFrequency1(5254472, 5754224)); // true

// ----------------- Solution 2 -----------------

function sameFrequency2(num1, num2) {
  const str1 = `${num1}`;
  const str2 = `${num2}`;

  if (str1.length !== str2.length) return false;

  const obj = {};

  for (const char of str1) {
    obj[char] = ++obj[char] || 1;
  }

  // checking if character of string twi exist in object if yes then decrease that object value by one

  for (const char of str2) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}

console.log(`\nSolution 2`);
console.log(sameFrequency2(34, 14)); // false
console.log(sameFrequency2(3589578, 5879385)); // true
console.log(sameFrequency2(5254472, 5754224)); // true
