// Write a recursive function called isPalindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.

// time complexity of this solution is O(n)

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];

  return str[0] === str[str.length - 1]
    ? isPalindrome(str.slice(1, -1))
    : false;
}

console.log(isPalindrome("civic")); // true
console.log(isPalindrome("hello")); // False
console.log(isPalindrome("level")); // true
console.log(isPalindrome("radar")); // true
