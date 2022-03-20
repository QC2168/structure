let arr = [1, 2, 7, 3, 2, 4, 3, 2, 1, 45, 5, 6, 4, 2, 9,2];

function process(arr, left, right) {
  if (left === right) {
    return arr[left];
  }

  let mid = Math.ceil((left + right) / 2);
  let leftMax = process(arr, left, mid);
  let rightMax = process(arr, mid + 1, right);
  return Math.max(leftMax, rightMax);
}

console.log(process(arr, 0, arr.length - 1));
