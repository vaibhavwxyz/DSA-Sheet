// Function to add an element at the start of an array
function addToStart(arr, element) {
  arr.unshift(element);
  return arr;
}

// Function to add an element at the end of an array
function addToEnd(arr, element) {
  arr.push(element);
  return arr;
}

// Function to insert an element at a specific position in an array
function insertAt(arr, element, position) {
  arr.splice(position, 0, element);
  return arr;
}

// Example usage:
var array = [2, 3, 4];

console.log(addToStart(array, 1)); // Output: [1, 2, 3, 4]
console.log(addToEnd(array, 5)); // Output: [2, 3, 4, 5]
console.log(insertAt(array, 9, 2)); // Output: [2, 3, 9, 4]
