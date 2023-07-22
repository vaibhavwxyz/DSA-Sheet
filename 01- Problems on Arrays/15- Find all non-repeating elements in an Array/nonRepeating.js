function findNonRepeatingElement(nums) {
  let nonRepeatingElements = [];
  for (let i = 0; i < nums.length; i++) {
    let chk = false;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] === nums[j]) {
        chk = true; // To check if for current picked element is a repeating element
        break;
      }
    }
    // Since chk is false only when no repeating element has occurred while traversal and reached the end of the array.
    if (!chk) {
      nonRepeatingElements.push(nums[i]);
    }
  }
  return nonRepeatingElements;
}

let nums = [1, 2, -1, 1, 3, 1];
console.log("Non-repeating numbers are:");
let nonRepeatingNumbers = findNonRepeatingElement(nums);
console.log(nonRepeatingNumbers);
