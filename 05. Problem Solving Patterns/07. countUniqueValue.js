/* 
Implement a function called countUniqueValues, 
which accepts a sorted array, and counts the 
unique values in the array. There can be negative 
numbers in the array, but it will always be sorted. 

Expected Behavior:

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4

*/

// Performance of Both Solution:
// Time Complexity - O(N)
// Space Complexity - O(1) 

// -------------- Solution Without removing duplicate items (Good Solution) --------------

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;

  var firstPointer = 0;
  for (var secondPointer = 1; secondPointer < arr.length; secondPointer++) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      arr[++firstPointer] = arr[secondPointer];
    }
  }

  console.log(
    `Your New Array: [${arr}] and number of unique values are: ${
      firstPointer + 1
    }`
  );

  return firstPointer + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// -------------- Solution with removing duplicate items (Very Good Solution) --------------

const countUnique_RemoveDuplicate = (arr) => {
  if (arr.length === 0) return 0;

  let firstPointer = 0; // i
  let secondPointer = 1; // j

  while (secondPointer < arr.length) {
    if (arr[firstPointer] === arr[secondPointer]) {
      ++secondPointer;
    } else {
      arr[++firstPointer] = arr[secondPointer];
    }
  }

  arr.splice(firstPointer + 1);
  console.log(
    `Your New Array: [${arr}] and number of unique values are: ${
      firstPointer + 1
    }`
  );

  return arr.length;
};

console.log(countUnique_RemoveDuplicate([1, 1, 1, 1, 1, 2])); // 2
console.log(countUnique_RemoveDuplicate([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUnique_RemoveDuplicate([])); // 0
console.log(countUnique_RemoveDuplicate([-2, -1, -1, 0, 1])); // 4
