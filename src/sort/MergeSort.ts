// let arr1 = [1, 5, 4, 5, 6, 7, 8, 2];
// function MergeSort(arr: number[], l: number, r: number) {
//   if (arr === null || arr.length < 2) {
//     return arr;
//   }
//   sort(arr1, 0, arr1.length - 1);
// }

// function sort(arr: number[], left: number, right: number) {
//   if (left === right) {
//     return
//   }

//   let mid = left + ((right - left) >> 1);
//   sort(arr, left, mid);
//   sort(arr, mid + 1, right);
//   Merge(arr, left, mid, right);
// }

// function Merge(arr: number[], l: number, m: number, r: number) {
//   let helpArr = [];
//   let i=0
//   let p1 = l;
//   let p2 = m + 1;
//   while (p1 <= m && p2 <= r) {
//     helpArr[i++]=(arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]);
//   }
//   //   当p1或者p2越界之后 （不可能同时越界）
//   while (p1 <= m) {
//     helpArr.push(arr[p1++]);
//   }
//   while (p2 <= r) {
//     helpArr.push(arr[p2++]);
//   }
//   return helpArr
// }


// let aa =MergeSort(arr1,0,arr1.length-1)
// console.log(aa);
// export default void 0

function merge(leftArr:number[],rightArr:number[]):number[]{
  let help:number[]=[]
  while(leftArr.length&&rightArr.length){
    if(leftArr[0]<=rightArr[0]){
      help.push(leftArr.shift() as number)
    }else{
      help.push(rightArr.shift() as number)
    }
  }
  return [...help,...leftArr,...rightArr]


}

function mergeSort(arr:number[]):number[]{
  if(arr.length===1){
    return arr
  }
  let mid:number = arr.length>>1
  let leftArr:number[]=arr.slice(0,mid)
  let rightArr:number[]=arr.slice(mid)
  return merge(mergeSort(leftArr),mergeSort(rightArr))
}

console.log(mergeSort([2,5,4,3,1,2]));
