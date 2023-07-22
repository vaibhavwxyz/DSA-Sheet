function findRepeatingElements(arr) {
  let cnt = 0;
  let dup = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
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
