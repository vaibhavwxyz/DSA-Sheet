function maxProductSubArray(arr) {
  let result = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let prod = 1;
      for (let k = i; k <= j; k++) {
        prod *= arr[k];
        result = Math.max(result, prod);
      }
    }
  }
  return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: ", maxProductSubArray(nums));
