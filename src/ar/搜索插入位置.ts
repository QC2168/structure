function searchInsert(nums: number[], target: number):number {
    // 判断边界
    if(target<nums[0]){
       return 0
    }
    if(target>nums[nums.length-1]){
     return nums.length
    }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = (right-left >> 1) + left;
    if (target === nums[mid]) return mid;
    if(nums[mid-1]<target&&target<=nums[mid]){
        return mid
    }
    if (target > nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
return 0
}

console.log(searchInsert([1,3,5,6],4));

