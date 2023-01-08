// Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time Complexity - O(n log n)
// Space Complexity - O(1)

// -------------- Solution with two pointers (two variables) --------------

function areThereDuplicatesWithTwoPointers(...args) {
  if (!args.length) return false;

  args.sort();

  for (
    let firstPointer = 0, secondPointer = 1;
    secondPointer < args.length;
    firstPointer++, secondPointer++
  ) {
    if (args[firstPointer] === args[secondPointer]) return true;
  }

  return false;
}

console.log(areThereDuplicatesWithTwoPointers(1, 2, 3)); // false
console.log(areThereDuplicatesWithTwoPointers("a", "b", "c", "a")); // true

// -------------- Solution with one pointer (one variable) --------------

const areThereDuplicatesWithOnePointer = (...args) => {
  if (!args.length) return false;

  args.sort();

  for (let firstPointer = 0; firstPointer < args.length - 1; firstPointer++) {
    if (args[firstPointer] === args[firstPointer + 1]) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicatesWithOnePointer(1, 2, 3)); // false
console.log(areThereDuplicatesWithOnePointer("a", "b", "c", "a")); // true
