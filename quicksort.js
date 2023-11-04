function quicksort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

module.exports = [quicksort];
