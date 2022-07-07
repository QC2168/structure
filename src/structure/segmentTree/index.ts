export default class SegmentTree<T>{
    private data: T[]
    private tree: T[]
    constructor(arr: T[]) {
        this.data = new Array(arr.length)
        for (let i = 0; i < arr.length; i++) {
            this.data[i] = arr[i]
        }

        this.tree = new Array(4 * arr.length)
        debugger
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
        let mid = l + ((r - l) >> 1);

        this.buildSegmentTree(leftTreeIndex, l, mid)
        this.buildSegmentTree(rightTreeIndex, mid + 1, r)

        this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex])
    }

    private merge(l: any, r: any) {
        return l + r
    }

    // 递归查询
    // 以treeIndex根的线段树中【left...right】范围里搜索区间【queryLeft...queryRight】的值
    public query(treeIndex:number, left:number, right:number, queryLeft:number, queryRight:number) {
        if(left===queryLeft&&right===queryRight){
            return this.tree[treeIndex]
        }

        // 求出当前查询范围中间值
        const mid=left+(right-left) >> 1

        // 如果没有中上面的判断，说明还要继续缩小范围
        const leftChild=this.leftChild(treeIndex)
        const rightChild=this.rightChild(treeIndex)

        // 判断
        /* 
        1.从左子节点还是右子节点查询，还是同时查询
        2.如果待查询的区间的左端点大于查询范围的中间值，说明只需要从右子树种进行查询即可
        
        */
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