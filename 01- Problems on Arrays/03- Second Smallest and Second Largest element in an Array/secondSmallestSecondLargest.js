function secondSmallest(arr) {
  if (arr.length < 2) return -1;

  let small = Infinity;
  let secondSmall = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      secondSmall = small;
      small = arr[i];
    } else if (arr[i] < secondSmall && arr[i] !== small) {
      secondSmall = arr[i];
    }
  }

  return secondSmall;
}

function secondLargest(arr) {
  if (arr.length < 2) return -1;

  let largest = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLarge = largest;
      largest = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== largest) {
      secondLarge = arr[i];
    }
  }
  return secondLarge;
}

const arr1 = [29, 78, 45, 10, 17, 44];
const arr2 = [54, 91, 32, 77, 64, 29];

let secondSmall = secondSmallest(arr1);
let secondLarge = secondLargest(arr1);
console.log(`The Second Small Number in arr1: ${secondSmall}`);
console.log(`The Second Largest Number in arr1: ${secondLarge}`);

secondSmall = secondSmallest(arr2);
secondLarge = secondLargest(arr2);
console.log(`The Second Small Number in arr2: ${secondSmall}`);
console.log(`The Second Largest Number in arr2: ${secondLarge}`);
