// 选择排序

// let arr:number[]=[1,3,4,5,2,6]
// let temp:number
// for(let i :number=0;i<arr.length-1;i++){
//     let minIndex=i
//     for(let j=i+1;j<arr.length;j++){
//        if(arr[j]<arr[minIndex]){
//         minIndex=j
//        }
//     }
//     temp=arr[i];
//     arr[i]=arr[minIndex]
//     arr[minIndex]=temp
// }

// console.log(arr);

// 冒泡排序

// let arr: number[] = [1, 3, 4, 5, 2, 6];
// for (let i: number = arr.length - 1; i > 0; i--) {
//   for (let j: number = 0; j <= i; j++) {
//     let temp: number;
//     if (arr[j] > arr[j + 1]) {
//       temp = arr[j + 1];
//       arr[j + 1] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }
// console.log(arr);

// 插入排序
// let arr: number[] = [1, 5, 6, 4, 8];
// for (let i: number = 0; i < arr.length; i++) {
//   for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
//     let temp = arr[j + 1];
//     arr[j + 1] = arr[j];
//     arr[j] = temp;
//   }
// }
// console.log(arr);
