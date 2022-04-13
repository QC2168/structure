// 暴力法
function rotate(nums: number[], k: number): void {
    let times = k;
    while (times > 0) {
      let temp = nums[nums.length-1];
      nums.pop();
      nums.unshift(temp);
      times--;
    }
    console.log(nums);
  }

console.log(rotate([1, 2, 3, 5], 2));
