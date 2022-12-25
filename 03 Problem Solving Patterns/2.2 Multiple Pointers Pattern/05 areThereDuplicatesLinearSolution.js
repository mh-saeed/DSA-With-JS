function areThereDuplicatesLinearSolution() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesLinearSolution(1, 2, 3)); // false
console.log(areThereDuplicatesLinearSolution("a", "b", "c", "a")); // true
