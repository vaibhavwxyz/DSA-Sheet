function findSmallest(arr) {
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }

  return min;
}

const arr1 = [23, 41, 89, 13, 21, 55];
const arr2 = [59, 44, 90, 11, 37, 78];

var ans = findSmallest(arr1);
console.log(`The smallest number in arr1 is: ${ans}`);

ans = findSmallest(arr2);
console.log(`The smallest number in arr2 is: ${ans}`);
