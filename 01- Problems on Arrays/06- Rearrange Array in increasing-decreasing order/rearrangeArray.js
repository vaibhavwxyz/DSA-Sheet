let arr = [8, 7, 1, 6, 5, 9];
let n = arr.length;
arr.sort((a, b) => a - b);

for (let i = 0; i < Math.floor(n / 2); i++) {
  console.log(arr[i] + " ");
}

for (let i = n - 1; i >= Math.ceil(n / 2); i--) {
  console.log(arr[i] + " ");
}
