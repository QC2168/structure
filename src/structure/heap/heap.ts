export default class Heap {
  heap: number[];
  heapSize: number;
  constructor() {
    this.heap = [];
    this.heapSize = 0;
  }
  push(item: number) {
    this.heap.push(item);
    this.heapSize++;
    // this.heapifyMax(this.heap);
    this.heapifyMin(this.heap);
  }
  // 大根堆 从后往前， 时间复杂度o(n)
  heapifyMax(heap: number[]) {
    // 获取当前尾部位置
    let i = heap.length - 1;
    let p = (i - 1) >> 1;
    while (p >= 0 && heap[i] > heap[p]) {
      this.swap(heap, i, p);
      i = p;
    }
  }
  // 小根堆 从后往前， 时间复杂度o(n)
  heapifyMin(heap: number[]) {
    // 获取当前尾部位置
    let i = heap.length - 1;
    let p = (i - 1) >> 1;
    while (i > 0) {
      let p = (i - 1) >> 1;
      if (heap[i] < heap[p]) {
        this.swap(heap, i, p);
      }
      i--;
    }
  }

  //   原地建堆
  buildMax(heap: number[], heapSize = heap.length) {
    let i = 0;
    while (i < heapSize) {
      this.heapifyMax(heap);
      i++;
    }
    return heap;
  }

  buildMin(heap: number[]) {
    let i = 0;
    let heapSize = heap.length;
    while (i < heapSize) {
      this.heapifyMin(heap);
      i++;
    }
    return heap;
  }

  //  堆排序
  sort(heap: number[]) {
   // 构建大顶堆
   this.buildMax(heap)
   // 设置堆的初始有效序列长度为 items.length - 1
   let heapSize = heap.length - 1
   for (let i = heap.length - 1; i > 1; i--) {
       // 交换堆顶元素与最后一个有效子元素
       this.swap(heap, 1, i);
       // 有效序列长度减 1
       heapSize --;
       // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
       this.buildMax(heap, heapSize);
   }
   return heap;
  }
  heapify(heap:number[], heapSize:number, i:number) {
    // 自上而下式堆化
    while (true) {
      var maxIndex = i;
      if (2 * i <= heapSize && heap[i] < heap[i * 2]) {
        maxIndex = i * 2;
      }
      if (2 * i + 1 <= heapSize && heap[maxIndex] < heap[i * 2 + 1]) {
        maxIndex = i * 2 + 1;
      }
      if (maxIndex === i) break;
      this.swap(heap, i, maxIndex); // 交换
      i = maxIndex;
    }
  }
  swap(arr: number[], left: number, right: number) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}
