function sortedSquares(nums: number[]) {
// 计算平方
let sqrtRes:number[]=nums.map(i=>(i**2))
// 排序
return sqrtRes.sort((a,b)=>a-b)
};

console.log(sortedSquares([-7,-3,2,3,11]));
