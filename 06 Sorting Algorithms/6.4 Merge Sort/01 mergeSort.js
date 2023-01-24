function mergeArrays(inputArr1, inputArr2) {
  if (inputArr1.length > inputArr2.length) {
    arr1 = inputArr2;
    arr2 = inputArr1;
  } else {
    arr1 = inputArr1;
    arr2 = inputArr2;
  }

  let mergedArray = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length) {
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

  if (pointer1 === arr1.length && pointer1 < arr2.length) {
    for (let i = pointer2; i < arr2.length; i++) {
      mergedArray.push(arr2[i]);
    }
  }

  return mergedArray;
}

let sortedArr1 = [1, 2, 3, 4];
let sortedArr2 = [-2, -1, 0, 1, 2, 2, 3, 5, 6, 9, 15];

console.log("Separated arrays: ", sortedArr1, sortedArr2);
console.log("Merged array: ", mergeArrays(sortedArr1, sortedArr2));
