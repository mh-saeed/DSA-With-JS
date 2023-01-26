// Bubble sort is an O(n^2) algorithm.

function bubbleSort(arr) {
  let swap;

  for (var i = arr.length; i > 0; i--) {
    swap = false;

    for (var j = 0; j < i - 1; j++) {
      //   console.log(arr, arr[j], arr[j + 1]);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    // if swap is not true
    if (!swap) break;
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
