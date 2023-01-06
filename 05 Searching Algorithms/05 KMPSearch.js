// Knuth-Morris-Pratt algorithm
// Write a function which accepts a string and a pattern, and returns the index
// at which the value exists. If the pattern does not exist in the string, return -1.

// Time Complexity - O(n + m)
// Space complexity - O(n)

function matchTable(word) {
  // create an array with the same length as word, filled with 0s
  let arr = Array.from({ length: word.length }).fill(0);
  // these variables will help us iterate through the word
  let suffixEnd = 1;
  let prefixEnd = 0;
  // keep looping until we reach the end of the word
  while (suffixEnd < word.length) {
    // check if the current character at the suffix and prefix match
    if (word[suffixEnd] === word[prefixEnd]) {
      // we can build a longer prefix based on this suffix
      // store the length of this longest prefix
      // move prefixEnd and suffixEnd
      prefixEnd += 1;
      arr[suffixEnd] = prefixEnd;
      suffixEnd += 1;
    } else if (word[suffixEnd] !== word[prefixEnd] && prefixEnd !== 0) {
      // there's a mismatch, so we can't build a larger prefix
      // move the prefixEnd to the position of the next largest prefix
      prefixEnd = arr[prefixEnd - 1];
    } else {
      // we can't build a proper prefix with any of the proper suffixes
      // let's move on
      arr[suffixEnd] = 0;
      suffixEnd += 1;
    }
  }
  // return the match table
  return arr;
}

function kmpSearch(long, short) {
  if (long.length === 0 || short.length === 0) return 0;
  // get the match table for the short string
  let table = matchTable(short);
  // these variables will help us iterate through the long and short strings
  let shortIdx = 0;
  let longIdx = 0;
  // keep track of how many times we've found the short string in the long string
  let count = 0;
  // keep looping until we've reached the end of the long string
  while (longIdx < long.length - short.length + shortIdx + 1) {
    // check if the current character in the long string matches the current
    // character in the short string
    if (short[shortIdx] !== long[longIdx]) {
      // we found a mismatch :(
      // if we just started searching the short, move the long pointer
      // otherwise, move the short pointer to the end of the next potential prefix
      // that will lead to a match
      if (shortIdx === 0) longIdx += 1;
      else shortIdx = table[shortIdx - 1];
    } else {
      // we found a match! shift both pointers
      shortIdx += 1;
      longIdx += 1;
      // then check to see if we've found the substring in the large string
      if (shortIdx === short.length) {
        // we found a substring! increment the count
        // then move the short pointer to the end of the next potential prefix
        count++;
        shortIdx = table[shortIdx - 1];
      }
    }
  }
  // return the count
  return count;
}

console.log(kmpSearch("dabcdabcyabkglabcdcxabcdabcdabcy", "abcdabcy")); // 2
console.log(kmpSearch("dabcdabcyabkglabcdcxabcdabcdabcy", "abcdabcyd")); // 0

// simple test cases
console.log(kmpSearch("", "")); // should print 0
console.log(kmpSearch("a", "a")); // should print 1
console.log(kmpSearch("aa", "a")); // should print 2
console.log(kmpSearch("ab", "a")); // should print 1
console.log(kmpSearch("abcabcabc", "abc")); // should print 3

// more complex test cases
console.log(kmpSearch("abcabxabcdabxabcy", "abxabc")); // should print 2
console.log(kmpSearch("abcabxabcdabxabcyabxabcdabxabcd", "abxabcdabxabcd")); // should print 1
console.log(kmpSearch("abxabcdabxabcy", "abxabcdabxabcd")); // should print 0
console.log(
  kmpSearch("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")
); // should print 1
console.log(
  kmpSearch(
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz",
    "abcdefghijklmnopqrstuvwxyz"
  )
); // should print 2
