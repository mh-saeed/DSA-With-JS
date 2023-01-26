// ---------------- Using swapping ----------------
function insertionSortSwap(arr) {
  // outer loop iterates through the array starting from the first element
  for (let i = 0; i < arr.length - 1; i++) {
    // inner loop starts from the next element of current element
    // it compares and swap current element with the next element if the next element is smaller
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        console.log(`Sorting: `, arr);
      } else {
        // the break statement is used to exit the inner loop when the current element is already in its correct position
        break;
      }
    }
  }
  // return the sorted array
  return arr;
}

console.log(`Output: `, insertionSortSwap([2, 1, 9, 76, 4]));

console.log("----------------------------------");

// ---------------- Using auxiliary variable ----------------
function insertionSortVar(arr) {
  var currentElement;
  // outer loop iterates through the array starting from the second element
  for (var i = 1; i < arr.length; i++) {
    currentElement = arr[i];

    // Inner loop compares current element with previous elements and moves them to the right if they are greater than current element
    for (var j = i - 1; j >= 0 && arr[j] > currentElement; j--) {
      arr[j + 1] = arr[j];
      console.log(`Sorting: `, arr);
    }
    arr[j + 1] = currentElement;
  }

  return arr;
}

console.log(`Output: `, insertionSortVar([2, 1, 9, 76, 4]));
