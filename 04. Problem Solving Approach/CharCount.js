function charCount(str) {
  // make object to return at end
  var result = {};

  // loop over string, for each character ...
  for (let i = 0; i < str.length; i++) {
    // temp variable
    // var char = str[i].toLowerCase();

    // if the char is a number/letter AND is a key in object, add one to count
    if (result[str[i].toLowerCase()] > 0) {
      result[str[i].toLowerCase()]++;
    }
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    else {
      result[str[i].toLowerCase()] = 1;
    }
    // if char is something else (space, period, etc.) don't do anything
  }

  // return object at end
  return result;
}
console.log(charCount("My name is saeed"));
