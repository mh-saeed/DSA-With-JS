// Write a function which takes in a string and returns counts of each character in the string.

/* ------------------- 1st Refactored version ------------------- */

function charCount(str) {
  var obj = {};

  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}
console.log(charCount("My name is muhammad saeed"));

/* ------------------- 2nd Refactored version ------------------- */

function charCount1(str) {
  var obj = {};

  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount1("My name is muhammad saeed"));

/* ------------------- 3rd Refactored version ------------------- */

function charCount2(str) {
  var obj = {};

  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount2("My name is muhammad saeed"));

// regex is slower than the below, isAlphaNumeric(), method
function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);

  if (
    !(code > 74 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}
