// function twoSum(nums: number[], target: number): number[] | undefined {
//   for (let i = 0; i <= nums.length - 1; i++) {
//     for (let j = i; j <= nums.length - 1; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j]);
//         return [i, j];
//       }
//     }
//   }
// }

// function twoSum(nums: number[], target: number): number[] | undefined {
//   let map = new Map<number, number>();
//   for (let i = 0; i <= nums.length - 1; i++) {
//     let k = target - nums[i];
//     if (map.has(k)) {
//       return [map.get(k) as number, i];
//     } else {
//       map.set(nums[i], i);
//     }
//   }
// }

function twoSum(nums: number[], target: number): number[] | undefined {
  let table:{[key:number]:number}={}
  for (let i = 0; i <= nums.length - 1; i++) {
    let k = target - nums[i];
    if (k in table) {
      return [table[k], i];
    } else {
      table[nums[i]]=i
    }
  }
}
twoSum([2, 7, 11, 15], 26);
