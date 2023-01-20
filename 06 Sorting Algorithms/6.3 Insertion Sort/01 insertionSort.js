// Using swapping
let steps = 0;
function insertionSortSwap(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        console.log(`Step ${++steps} :`, arr);
      } else break;
    }
  }

  return arr;
}

console.log(`Sorted Array : `, insertionSortSwap([2, 1, 9, 76, 4]));

console.log("----------------------------------");
steps = 0;

// Using auxiliary variable
function insertionSortVar(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(`Step ${++steps} :`, arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(`Sorted Array : `, insertionSortVar([2, 1, 9, 76, 4]));
