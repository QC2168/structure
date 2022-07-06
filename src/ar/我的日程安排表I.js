function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
var MyCalendar = /*#__PURE__*/ function() {
    "use strict";
    function MyCalendar() {
        _classCallCheck(this, MyCalendar);
        this.list = [];
    }
    var _proto = MyCalendar.prototype;
    _proto.book = function book(start, end) {
        // 判断最开始的时间和最后时间会不会冲突
        if (this.list.length === 0) {
            this.list.push(start, end);
            return true;
        }
        // 判断前
        if (start < this.list[0] && end <= this.list[0]) {
            this.list.unshift(start, end);
            return true;
        }
        // 判断后
        if (this.list[this.list.length - 1] <= start) {
            this.list.push(start, end);
            return true;
        }
        return false;
    };
    return MyCalendar;
}();
var myCalendar = new MyCalendar();
var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
try {
    for(var _iterator = [
        [
            47,
            50
        ],
        [
            33,
            41
        ],
        [
            39,
            45
        ],
        [
            33,
            42
        ],
        [
            25,
            32
        ],
        [
            26,
            35
        ],
        [
            19,
            25
        ],
        [
            3,
            8
        ],
        [
            8,
            13
        ],
        [
            18,
            27
        ]
    ][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
        var item = _step.value;
        console.log(myCalendar.book(item[0], item[1]));
    } /**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */ 
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally{
    try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
        }
    } finally{
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}


//# sourceMappingURL=我的日程安排表I.js.map