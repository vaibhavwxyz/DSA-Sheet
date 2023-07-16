function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const arr = [5, 3, 4, 1, 2];
let ans = sumOfArray(arr);

console.log(ans);
