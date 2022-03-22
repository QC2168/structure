// 两个数的交换，不产生额外的内存空间
// let arr=[1,2,3]

// arr[0]=arr[0]^arr[1]
// arr[1]=arr[0]^arr[1]
// arr[0]=arr[0]^arr[1]

// console.log(arr);

// 一个数组中有一种数出现了奇数次，其他数都出现了偶数次，怎么找到并打印这种数
// let arr = [1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
// let eor = 0;
// for (let i = 0; i < arr.length; i++) {
//   eor ^= arr[i];
// }

// console.log(eor);

// 怎么将一个数最左侧的1提取出来
// 0001 0100
// 1110 1011
// 1110 1100
// 0000 0100
// let num: number = 20;
// num = num & (~num + 1);
// console.log(num); // 4

// 一个数组中有两种数出现了奇数次，其他数都出现了偶数次，怎么找到并打印这两种数

let arr:number[] = [1, 1, 1, 1, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
let eor = 0;
for (let i = 0; i < arr.length; i++) {
  eor ^= arr[i];
}
let right = eor & (~eor + 1);
let oneAddTimes = 0;
for (let i = 0; i < arr.length; i++) {
  if ((right & arr[i]) != 0) {
    oneAddTimes ^= arr[i];
  }
}
console.log(oneAddTimes); // 3
console.log(oneAddTimes^eor); // 5

// 计算一个数中，出现1的次数
// const bit1Count = (num: number): number => {
//   let count: number = 0;
//   while (num !== 0) {
//     // 先取最右边一位
//     let rightOne = num & (~num + 1);
//     count++;
//     num ^= rightOne;
//   }
//   return count;
// };

// bit1Count(3); // 2
