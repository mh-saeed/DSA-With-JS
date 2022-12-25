// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks
// whether the characters in the first string form a subsequence of the characters
// in the second string.

// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string, without their order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(pattern, str) {
  if (pattern.length > str.length || !pattern) return false;

  let firstPointer = 0;
  let secondPointer = 0;

  while (firstPointer < pattern.length && secondPointer < str.length) {
    console.log(firstPointer, secondPointer);

    if (pattern[firstPointer] === str[secondPointer]) {
      ++firstPointer;
      ++secondPointer;
    } else ++secondPointer;
  }
  return firstPointer === pattern.length;
}

console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
console.log(isSubsequence("", "cat")); // true
