function countFreq(arr) {
  let visited = new Array(arr.length).fill(false);

  for (let i = 0; i < arr.length; i++) {
    // Skip this element if already processed
    if (visited[i] === true) {
      continue;
    }

    // Count frequency
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        visited[j] = true;
        count++;
      }
    }
    console.log(arr[i] + " " + count);
  }
}

let arr = [10, 5, 10, 15, 10, 5];
countFreq(arr);
