
export default class Sort {
  // 选择排序
  static SelectionSort<T = number>(arr: T[]) {
    let temp: T;
    for (let i: number = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr
  }
  // 冒泡排序
  static BubbleSort<T = number>(arr: T[]) {
    for (let i: number = arr.length - 1; i > 0; i--) {
      for (let j: number = 0; j <= i; j++) {
        let temp: T;
        if (arr[j] > arr[j + 1]) {
          temp = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr
  }
  // 插入排序
  static InsertSort<T = number>(arr: T[]) {
    for (let i: number = 0; i < arr.length; i++) {
      for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    return arr
  }

  // 归并排序
  static merge(leftArr: number[], rightArr: number[]): number[] {
    let help: number[] = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            help.push(leftArr.shift() as number)
        } else {
            help.push(rightArr.shift() as number)
        }
    }
    return [...help, ...leftArr, ...rightArr]
}

  static mergeSort(arr: number[]): number[] {
    if (arr.length === 1) {
        return arr
    }
    let mid: number = arr.length >> 1
    let leftArr: number[] = arr.slice(0, mid)
    let rightArr: number[] = arr.slice(mid)
    return Sort.merge(Sort.mergeSort(leftArr), Sort.mergeSort(rightArr))
}

  // 快速排序
  static QuickSort(){}
  // 堆排序
  static HeapSort(){}
  // 桶排序
  static BucketSort(){}
  // 计数排序
  static CountSort(arr:number[]){
    let bucket:{[key:string]:number}={}
    for(let i:number=0;i<arr.length; i++){
        if(bucket.hasOwnProperty(arr[i])){
          bucket[arr[i]]++
        }else{
          bucket[arr[i]]=1
        }
    }
    // 把这些数据导出来
    const res=[]
    for(let i=0;i<bucket.length;i++){
      console.log(bucket[i]);
      
    }

    console.log(bucket);
    
  }
}

// test
// let arr=[1,23,5,6,43,67,4,63,1]
// console.log(Sort.BubbleSort(arr));
