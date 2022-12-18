function logAtMost5(n = 0) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
logAtMost5(10); // O(1)
