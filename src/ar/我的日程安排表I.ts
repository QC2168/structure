class MyCalendar {
    list: number[]
    constructor() {
        this.list = []
    }

    book(start: number, end: number): boolean {
        // 判断最开始的时间和最后时间会不会冲突
        if (this.list.length === 0) {
            this.list.push(start, end)
            return true
        }
        // 判断前
        if (start < this.list[0] && end <= this.list[0]) {
            this.list.unshift(start, end)
            return true
        }
        // 判断后
        if (this.list[this.list.length - 1] <= start) {
            this.list.push(start, end)
            return true
        }
        return false
    }
}

let myCalendar = new MyCalendar();
for (const item of [[47, 50], [33, 41], [39, 45], [33, 42], [25, 32], [26, 35], [19, 25], [3, 8], [8, 13], [18, 27]]) {
    console.log(myCalendar.book(item[0], item[1]));

}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */