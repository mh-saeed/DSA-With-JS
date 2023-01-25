function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      mergedArray.push(arr1[pointer1]);
      ++pointer1;
    } else if (arr1[pointer1] > arr2[pointer2]) {
      mergedArray.push(arr2[pointer2]);
      ++pointer2;
    } else {
      mergedArray.push(arr1[pointer1]);
      mergedArray.push(arr2[pointer2]);
      ++pointer1;
      ++pointer2;
    }
  }

  while (pointer1 < arr1.length) {
    mergedArray.push(arr1[pointer1]);
    ++pointer1;
  }
  while (pointer2 < arr2.length) {
    mergedArray.push(arr2[pointer2]);
    ++pointer2;
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return mergeArrays(left, right);
}

let unsortedArray = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 200) - 100
);

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", mergeSort(unsortedArray));

// console.dir will display complete array in VS terminal
// console.dir(mergeSort(unsortedArray), { maxArrayLength: null });
