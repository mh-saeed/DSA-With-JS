function numberCompare(num1, num2) {
  return num1 - num2;
}

console.log([6, 4, 15, 10].sort(numberCompare));
// [ 4, 6, 10, 15 ]

// sorting with respect to length of strings
function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

console.log(
  ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)
);
// [ "Colt", "Steele", "Algorithms", "Data Structures" ]
