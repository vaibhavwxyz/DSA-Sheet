function findMedian(arr) {
  arr.sort();
  let length = arr.length - 1;
  console.log(arr);

  if (arr.length % 2 == 0) {
    let ind1 = length / 2 - 1;
    let ind2 = length / 2;
    console.log((arr[Math.ceil(ind1)] + arr[Math.ceil(ind2)]) / 2);
  } else {
    console.log(arr[length / 2]);
  }
}

const arr = [12, 22, 10, 13, 28, 30];
findMedian(arr);
