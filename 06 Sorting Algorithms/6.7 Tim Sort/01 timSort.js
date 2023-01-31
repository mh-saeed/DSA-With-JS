// Function to merge two sorted arrays into a single sorted array
function mergeSortedArrays(leftArray, rightArray) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and push the smaller one to the result array
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // Push any remaining elements from the left array
  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }

  // Push any remaining elements from the right array
  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Timsort function to sort an array
function timsort(array) {
  let runList = [];
  let runSize = 32;

  // Split the array into runs of size runSize and sort each run using built-in sort method
  for (let startIndex = 0; startIndex < array.length; startIndex += runSize) {
    let endIndex = Math.min(startIndex + runSize, array.length);
    let run = array.slice(startIndex, endIndex);
    run.sort((a, b) => a - b);
    runList.push(run);
  }

  // Merge the sorted runs until there's only one remaining run
  while (runList.length > 1) {
    let newRunList = [];
    for (let i = 0; i < runList.length; i += 2) {
      if (i + 1 < runList.length) {
        newRunList.push(mergeSortedArrays(runList[i], runList[i + 1]));
      } else {
        newRunList.push(runList[i]);
      }
    }
    runList = newRunList;
  }

  return runList[0];
}

console.log(timsort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23, -100, 55]));
