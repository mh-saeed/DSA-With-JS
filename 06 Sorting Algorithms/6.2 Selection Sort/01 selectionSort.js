// -------------- LEGACY VERSION (non ES2015 syntax) --------------

function selectionSortLegVer(arr) {
  for (var i = 0; i < arr.length; i++) {
    var indexOfLowest = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfLowest]) {
        indexOfLowest = j;
      }
    }
    if (i !== indexOfLowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[indexOfLowest];
      arr[indexOfLowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSortLegVer([0, 2, 34, 22, 10, 19, 17]));

// -------------- ES2015 VERSION --------------

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let indexOfLowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfLowest] > arr[j]) {
        indexOfLowest = j;
      }
    }
    if (i !== indexOfLowest) swap(arr, i, indexOfLowest);
  }

  return arr;
}
console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
