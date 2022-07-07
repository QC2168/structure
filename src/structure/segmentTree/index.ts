class SegmentTree<T>{
    private data: T[]
    private tree: T[]
    constructor(arr: T[]) {
        this.data = new Array(arr.length)
        for (let i = 0; i < arr.length; i++) {
            this.data[i] = arr[i]
        }

        this.tree = new Array(4 * arr.length)
        this.buildSegmentTree(0, 0, this.data.length - 1)

        
    }

    // 构建treeIndex的位置创建表示区间[l...r]的线段树
    private buildSegmentTree(treeIndex: number, l: number, r: number) {
        if (l === r) {
            this.tree[treeIndex] = this.data[l]
            return
        }

        let leftTreeIndex = this.leftChild(treeIndex)
        let rightTreeIndex = this.rightChild(treeIndex)
        // let mid = l + (r - l) / 2
        let mid = (r - l) >> 1

        this.buildSegmentTree(leftTreeIndex, l, mid)
        this.buildSegmentTree(rightTreeIndex, mid + 1, r)

        this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex])
    }

    private merge(l:any, r:any) {
        return l + r
    }
    public getSize() {
        return this.data.length
    }
    public get(index: number) {
        if (index < 0 || index > this.data.length - 1) {
            throw new Error('超出范围')
        }
        return this.data[index]
    }

    private leftChild(index: number) {
        return (2 * index) + 1
    }
    private rightChild(index: number) {
        return (2 * index) + 2
    }
}