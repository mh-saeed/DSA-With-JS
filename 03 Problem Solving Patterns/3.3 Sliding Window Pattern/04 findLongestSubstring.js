// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and
// returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str) {
  // Initialize a variable to keep track of the longest substring with all distinct characters
  let longest = 0;

  // Initialize a variable to store the start position of the current sliding window
  let start = 0;

  // Create an object to store the positions of the characters that have been seen so far
  let seen = {};

  // Iterate over the string
  for (let i = 0; i < str.length; i++) {
    // Store the current character in a variable
    let char = str[i];

    // If the current character has already been seen, update the start position of the sliding window
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    // Update the longest substring found so far
    longest = Math.max(longest, i - start + 1);

    // Store the position of the next character to prevent double counting
    seen[char] = i + 1;
  }

  // Return the longest substring found
  return longest;
}

// Outputs 3 (the longest substring with all distinct characters is "abc")
console.log(findLongestSubstring("abcabcbb"));

// Outputs 1 (the longest substring with all distinct characters is "b")
console.log(findLongestSubstring("bbbbb"));

// Outputs 3 (the longest substring with all distinct characters is "wke")
console.log(findLongestSubstring("pwwkew"));

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
