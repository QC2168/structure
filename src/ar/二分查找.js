let nums = [-1,1,2,3,4,6,7,8,];
let target = 5;

// var search = function (nums, target) {
//   let mid = nums.length >> 1;
//   if (nums[mid] === target) {
//     return mid;
//   }
//   if (nums[mid] > target) {
//     for (let i = 0; i < mid; i++) {
//       if (nums[i] === target) {
//         return i;
//       }
//     }
//     return -1;
//   } else {
//     for (let i = mid; i < nums.length; i++) {
//       if (nums[i] === target) {
//         return i;
//       }
//     }
//     return -1;
//   }
// };

// var search = function (nums, target) {
//   return nums.findIndex(item => item === target);
// }

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (right-left >> 1) + left;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
console.log(search(nums, target));
