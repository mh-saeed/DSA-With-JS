// Function to merge two sorted arrays into a single sorted array
function mergeSortedArrays(leftArray, rightArray) {
  let result = []; // Array to hold the result of merging the two input arrays
  let leftIndex = 0; // Index of the current element in the left array
  let rightIndex = 0; // Index of the current element in the right array

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

// Recursive function to merge the sorted runs until there's only one remaining run
function mergeRuns(runList) {
  if (runList.length === 1) {
    return runList[0];
  }

  let newRunList = []; // List of merged runs
  for (let i = 0; i < runList.length; i += 2) {
    if (i + 1 < runList.length) {
      newRunList.push(mergeSortedArrays(runList[i], runList[i + 1]));
    } else {
      newRunList.push(runList[i]);
    }
  }
  return mergeRuns(newRunList);
}

// ------- Timsort function to sort an array - (With Recursion) -------

function timSortRec(array) {
  let runList = []; // List of sorted runs to be merged
  let runSize = 32; // Size of each run

  // Split the array into runs of size runSize and sort each run using built-in sort method
  for (let startIndex = 0; startIndex < array.length; startIndex += runSize) {
    let endIndex = Math.min(startIndex + runSize, array.length); // End index of the current run
    let run = array.slice(startIndex, endIndex); // The current run
    run.sort((a, b) => a - b); // Sort the current run using built-in sort method
    runList.push(run); // Add the current run to the list of sorted runs
  }

  return mergeRuns(runList);
}

// ------- Timsort function to sort an array - (Non Recursion Way) -------

function timSortNonRec(array) {
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

console.log(timSortRec([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23, -100, 55]));
console.log(timSortNonRec([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23, -100, 55]));
