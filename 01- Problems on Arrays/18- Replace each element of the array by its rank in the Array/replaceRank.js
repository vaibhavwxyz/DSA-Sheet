function findSmallerElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let s = new Set();
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        s.add(arr[j]);
      }
    }
    result.push(s.size + 1);
  }
  return result;
}

let arr = [20, 15, 26, 2, 98, 6];
let result = findSmallerElements(arr);
console.log(result.join(" "));
