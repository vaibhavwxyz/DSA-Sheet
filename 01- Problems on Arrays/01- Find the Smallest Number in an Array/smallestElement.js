function SmallestElement(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

let arr1 = [2, 5, 1, 3, 0];
let min = SmallestElement(arr1);
console.log("The smallest element in the array is: " + min);

let arr2 = [8, 10, 5, 7, 9];
min = SmallestElement(arr2);
console.log("The smallest element in the array is: " + min);
