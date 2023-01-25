// what is Time Complexity of the below code ?
// Answer with explanation is given below at the end

function logAtLeast5(n = 0) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(10);

// Time Complexity = O(n)
