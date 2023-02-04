const countSort = (inputArr) => {
  // Get the number of elements in the input array
  const n = inputArr.length;
  
  // Get the maximum and minimum values in the input array
  let maxValue = Math.max(...inputArr);
  let minValue = Math.min(...inputArr);

  // Initialize the frequency array
  let frequency = new Array(maxValue - minValue + 1).fill(0);

  // Count the frequency of each value in the input array
  for (let i = 0; i < n; i++) {
    const currentValue = inputArr[i];
    frequency[currentValue - minValue]++;
  }

  // Initialize the running sum and sorted array
  let runningSum = 0;
  let sortedArray = new Array(n);

  // Compute the running sum of the frequency array
  for (let i = 0; i < frequency.length; i++) {
    let oldSum = runningSum;
    runningSum += frequency[i];
    frequency[i] = oldSum;
  }

  // Sort the elements of the input array using the frequency array
  for (let i = 0; i < n; i++) {
    const currentValue = inputArr[i];
    sortedArray[frequency[currentValue - minValue]++] = currentValue;
  }

  return sortedArray;
};

console.log(countSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23, -100, 55]));
