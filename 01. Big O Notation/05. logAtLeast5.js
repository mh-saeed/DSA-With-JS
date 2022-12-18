function logAtLeast5(n = 0) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

logAtLeast5(10); // Time Complexity O(n)
