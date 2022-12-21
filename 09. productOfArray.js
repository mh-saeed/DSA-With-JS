/* 
Write a function called productOfArray 
which takes in an array of numbers and 
returns the product of them all. 

Expected Behavior:

productOfArray([1,2,3])    // 6
productOfArray([1,2,3,10]) // 60

*/

// Solution 1 with helper pattern

function productOfArray(arr) {
  let result = 1;
  let pointer = 0;

  function helper(inputArr, inputArrIndex) {
    if (inputArr.length === 0 || inputArrIndex > inputArr.length - 1) {
      return;
    }

    result *= inputArr[inputArrIndex];
    helper(inputArr, ++inputArrIndex);
  }

  helper(arr, pointer);

  return result;
}

console.log(
  productOfArray([1, 2, 3]), // 6
  productOfArray([1, 2, 3, 10]) // 60
);

// Solution 2 without helper pattern

function productOfArray1(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(
  productOfArray1([1, 2, 3]), // 6
  productOfArray1([1, 2, 3, 10]) // 60
);
