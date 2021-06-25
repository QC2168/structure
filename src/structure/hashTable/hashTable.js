const MAX_LOAD_FACTOR = 0.75;
const MIX_LOAD_FACTOR = 0.25;

export function hashFunc(str, max) {
  // 定义hashCode
  let hashCode = 0;

  // 霍纳
  // ((2n+5)31+1)31+6=3=31
  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i);
  }
  hashCode = hashCode % max;
  return hashCode;
}
// 判断是不是质数
// 性能较低
// export function isPrime(number){
// for(let i=2;i<number;i++){
//   if(number%i===0){
//     return false
//   }
// }
// return true
// }
export function isPrime(number) {
  // 获取 number 平方根
  let temp = Math.ceil(Math.sqrt(number));
  for (let i = 2; i < temp; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

export class HashTable {
  constructor() {
    this.storage = []; //数组储存元素
    this.conut = 0; // 当前储存多少元素
    this.limit = 7; // 总个数  容量
  }

  // 哈希函数
  hashFunc(str, max) {
    // 定义hashCode
    let hashCode = 0;

    // 霍纳
    // ((2n+5)31+1)31+6=3=31
    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i);
    }
    hashCode = hashCode % max;
    return hashCode;
  }

  // 放入/修改元素 HashMap -> {key:value}
  put(key, value) {
    // 1. 根据key 映射index
    const index = this.hashFunc(key, this.limit);

    // 2. 取出数组
    let bucket = this.storage[index];
    // 判断这个位置是不是一个数组
    if (bucket === undefined) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 3.查询原有值
    // 插入 / 修改
    // 判断有没有被覆盖
    let overide = false;
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        overide = true;
      }
    }

    //4. 没有覆盖  操作新增
    if (!overide) {
   bucket.push([key, value]);
   this.conut++;
      if (this.conut > this.limit * MAX_LOAD_FACTOR) {
        let newLimit = this.limit * 2;
        newLimit = this.getPrime(newLimit);
        this.resize(newLimit);
      }
    }

    // !overide && this.conut > this.limit * MAX_LOAD_FACTOR;
    // let newLimit = this.limit * 2;
    // newLimit = this.getPrime(newLimit);
    // this.resize(newLimit);
  }

  // 根据key 获取value
  get(key) {
    // 通过key 获取下标值 （index）
    const index = this.hashFunc(key, this.limit);

    // 2. bucket
    const bucket = this.storage[index];
    if (bucket === undefined) return null;

    //3. 找数据
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i];
      }
    }
    return null;
  }

  // 根据key 删除element
  remove(key) {
    // 通过key 获取下标值 （index）
    const index = this.hashFunc(key, this.limit);
    // 2. bucket
    const bucket = this.storage[index];
    if (bucket === undefined) return null;

    // 3. 删除
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this.conut--;
        if (this.limit > 8 && this.conut < this.limit * MIX_LOAD_FACTOR) {
          let newLimit = Math.floor(this.limit / 2);
          newLimit = this.getPrime(newLimit);
          this.resize(newLimit);
        }
        return tuple;
      }
      return null;
    }
  }

  isEmpty() {
    return this.conut === 0;
  }

  size() {
    return this.conut;
  }

  // 扩容函数 or 缩小容量
  resize(newLimit) {
    // 1.保存原先的数组中的内容
    let oldStorage = this.storage;
    // 2. 重置属性
    this.limit = newLimit;
    this.storage = [];
    this.conut = 0;
    // 3. 取出oldStorage所有元素
    oldStorage.forEach((bucket) => {
      if (bucket === null || bucket === undefined) return;
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.put(tuple[0], tuple[1]);
      }
    });
  }
  isPrime(number) {
    // 获取 number 平方根
    let temp = Math.ceil(Math.sqrt(number));
    for (let i = 2; i < temp; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  getPrime(number) {
    while (!isPrime(number)) {
      number++;
    }
    return number;
  }
}
