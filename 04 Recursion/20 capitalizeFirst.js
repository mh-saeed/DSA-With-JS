// Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  let newArr = [];

  function helper(helperArrInput) {
    if (helperArrInput.length === 0) return newArr;
    return (
      newArr.push(
        helperArrInput[0].charAt(0).toUpperCase() + helperArrInput[0].slice(1)
      ),
      helper(helperArrInput.slice(1, helperArrInput.length))
    );
  }

  return helper(arr);
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
