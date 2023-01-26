// Write a function called collectStrings which accepts an object and
// returns an array of all the values in the object that have a typeof string.

// -------------- Helper Method Recursion Version --------------

function collectStringsHelperMethod(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStringsHelperMethod(obj)); // ['foo', 'bar', 'baz'])

// -------------- Pure Recursion Version --------------

function collectStrings(obj) {
  let result = [];

  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "string") result.push(obj[key]);
      if (typeof obj[key] === "object")
        result = result.concat(collectStrings(obj[key]));
    }
  }

  return result;
}

console.log(collectStrings(obj)); // ['foo', 'bar', 'baz'])
