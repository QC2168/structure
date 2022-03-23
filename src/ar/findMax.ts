let res:number[] = [1, 2, 7, 3, 2, 4, 3, 2, 1, 45, 5, 6, 4, 2, 9,2];

function findMax(arr:number[], left:number, right:number) {
  if (left === right) {
    return arr[left];
  }

  // let mid = Math.ceil((left + right) / 2);
  let mid = (left + right)>>1;
  let leftMax:number = findMax(arr, left, mid);
  let rightMax:number = findMax(arr, mid + 1, right);
  return Math.max(leftMax, rightMax);
}

console.log(findMax(res, 0, res.length - 1));

