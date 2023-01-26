// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  let newArr = [];

  function helper(helperArrInput) {
    if (helperArrInput.length === 0) return newArr;
    return (
      newArr.push(helperArrInput[0].toUpperCase()),
      helper(helperArrInput.slice(1, helperArrInput.length))
    );
  }

  return helper(arr);
}

const words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
