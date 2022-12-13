/* 
write a function same that accepts two arrays.
The function should return true if every value 
in the array has it's corresponding value squared 
in the second array.
The frequency(number of elements in each array) 
must be same

Expected behavior:

same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)
*/

// -------------------- NAIVE(Not Good) SOLUTION --------------------

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }

    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [9, 1, 4, 4]));
