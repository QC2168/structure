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
    this.heapifyMax(this.heap);
    // this.heapifyMin(this.heap);
  }
  // 大根堆 从后往前， 时间复杂度o(n)
  heapifyMax(heap: number[], i: number = heap.length - 1) {
    // 获取当前尾部位置
    while (heap[i] > heap[(i - 1) >> 1]) {
      this.swap(heap, i, (i - 1) >> 1);
      i = i / 2;
    }
  }
  // 小根堆 从前往后， 时间复杂度o(n)
  heapifyMin(heap: number[]) {
    // 获取当前尾部位置
    // 往从后前 时间复杂度o(n)
    let i = heap.length - 1;
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
    while (heapSize > 0) {
      this.heapifyMax(heap, heapSize);
      heapSize--;
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
    this.buildMax(heap);
    // 设置堆的初始有效序列长度为 items.length - 1
    let heapSize = heap.length - 1;
    for (let i = heap.length - 1; i > 0; i--) {
      // 交换堆顶元素与最后一个有效子元素
      this.swap(heap, 0, i);
      // 有效序列长度减 1
      heapSize--;
      // 堆化有效序列(有效序列长度为 currentHeapSize，抛除了最后一个元素)
      this.buildMax(heap, heapSize);
    }
    return heap;
  }

  swap(arr: number[], left: number, right: number) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
}
