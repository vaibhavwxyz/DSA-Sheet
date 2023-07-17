function findMedian(arr) {
  arr.sort();
  // let length = arr.length - 1;

  if (arr.length % 2 == 0) {
    console.log("Hi");
  } else {
    console.log(arr[(arr.length - 1) / 2]);
  }
}

const arr = [12, 22, 10, 13, 28, 29, 30];
findMedian(arr);
