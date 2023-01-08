// Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.

function areThereDuplicatesLinearSolution() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesLinearSolution(1, 2, 3)); // false
console.log(areThereDuplicatesLinearSolution("a", "b", "c", "a")); // true
