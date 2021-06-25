
export class Stack {
    constructor(){
    // 栈中属性
        this.items=[]
    }
// - push（element）添加一个新元素到栈顶位置
 push(element){
    this.items.push(element);
 }

// - pop 移除栈顶的元素，同时返回被移除的元素
 pop(){
     return this.items.pop();
 }

// - peek 返回栈顶的元素，不对栈做任何修改
peek(){
    if(this.isEmpty())return null;
    return this.items[this.items.length-1];
}

// - isEmpty 如果栈里没有任何元素就返回true，否则返回false
isEmpty(){
    return this.items.length === 0;
}

// - size 返回栈里的元素个数，这个方法和数组的length属性很像
size(){
    return  this.items.length;
}

// - toString 将栈结构的内容以字符形式返回
}

export function dec2binary(number){
    // 创建stack
    const stack = new Stack();

    // 循环取余数
    while(number>0){
        let remainder = number%2;
        number=Math.floor(number /2)
        stack.push(remainder);
    }

    // 拼接字符串
    let binString = "";
    while(!stack.isEmpty()){
        binString+=stack.pop()
    }
    return binString;
}