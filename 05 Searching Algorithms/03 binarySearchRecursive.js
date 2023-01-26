function binarySearch(
  array,
  searchValue,
  startIndex = 0,
  endIndex = array.length - 1
) {
  if (startIndex > endIndex) {
    return -1;
  }

  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  const middleValue = array[middleIndex];

  if (middleValue === searchValue) {
    return middleIndex;
  } else if (middleValue < searchValue) {
    return binarySearch(array, searchValue, middleIndex + 1, endIndex);
  } else {
    return binarySearch(array, searchValue, startIndex, middleIndex - 1);
  }
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 103));

console.log(
  binarySearch([5, 6, 10, 14, 18, 30, 37, 40, 44, 79, 84, 86, 98, 99], 10)
); // 2

console.log(
  binarySearch([5, 10, 16, 34, 37, 40, 44, 64, 84, 86, 95, 98, 99], 95)
); // 10

console.log(
  binarySearch([5, 6, 13, 14, 18, 64, 79, 84, 86, 95, 96, 98, 99], 100)
); // -1
