function reverseArray(arr) {
  let ans = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    // ans.push(arr[i]);
    ans[arr.length - i - 1] = arr[i];
  }
  return ans;
}

const arr1 = [29, 78, 45, 10, 17, 44];
const arr2 = [54, 91, 32, 77, 64, 29];

let reversedArray = reverseArray(arr1);
console.log(reversedArray);
