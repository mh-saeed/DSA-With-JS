// getDigit returns the kth digit of num
function getDigit(num, i) {
  // Use floor division and modulo operation to get the kth digit of the number
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// digitCount returns the number of digits in num
function digitCount(num) {
  // If num is 0, return 1 as it still has 1 digit
  if (num === 0) return 1;

  // Use logarithmic operation to get the number of digits and add 1
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// mostDigits returns the maximum number of digits in the input array nums
function mostDigits(nums) {
  let maxDigits = 0;

  // Find the maximum number of digits in the input array
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

// radixSort sorts the input array nums using the Radix Sort algorithm
function radixSort(nums) {
  // Get the maximum number of digits in the input array
  let maxDigitCount = mostDigits(nums);

  // Sort the input array by each digit, starting from the least significant digit
  for (let k = 0; k < maxDigitCount; k++) {
    // Create an array of 10 empty arrays, one for each possible digit (0-9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // For each element in the input array, place it in the corresponding digit bucket
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    // printing elements in buckets format
    console.log(digitBuckets);

    // Concatenate the arrays in the digit buckets to form the sorted input array
    nums = [].concat(...digitBuckets);

    // printing elements in single array format
    console.log(nums);
  }

  // Return the sorted input array
  return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));
