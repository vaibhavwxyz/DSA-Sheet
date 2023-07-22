function findRepeatingElements(arr) {
  let cnt = 0;
  let n = arr.length;
  let dup = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        dup[cnt++] = arr[i];
      }
    }
  }

  let output = "The repeating elements are: ";
  for (let i = 0; i < cnt; i++) {
    if (dup[i] !== dup[i + 1]) {
      output += dup[i] + " ";
    }
  }
  console.log(output);
}

let arr = [1, 1, 2, 3, 4, 4, 5, 2];
findRepeatingElements(arr);
