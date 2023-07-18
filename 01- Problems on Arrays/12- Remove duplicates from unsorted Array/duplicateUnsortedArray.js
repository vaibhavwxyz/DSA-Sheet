function removeDuplicates(arr) {
  var uniqueArray = [];

  // Loop through the array
  for (var i = 0; i < arr.length; i++) {
    var isDuplicate = false;

    // Check if the element already exists in the uniqueArray
    for (var j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }

    // If the element is not a duplicate, add it to the uniqueArray
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example usage:
var unsortedArray = [1, 3, 2, 4, 2, 3, 1];
var result = removeDuplicates(unsortedArray);
console.log(result); // Output: [1, 3, 2, 4]
