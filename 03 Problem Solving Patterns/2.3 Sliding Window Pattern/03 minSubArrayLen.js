// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters -
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray

// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray

// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52

// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, sum) {
  let start = 0;
  let end = arr.length;
  let totalSum = 0;
  let minSub = 0;
  let tempSum = 0;

  if (!arr) return null;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  if (totalSum < sum) return 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[start] === sum) return 1;
  }

  while(start<end){
    if
  }
}
