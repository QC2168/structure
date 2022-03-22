let res:number[] = [1, 2, 7, 3, 2, 4, 3, 2, 1, 45, 5, 6, 4, 2, 9,2];
 function merge(){
     
 }
 function process(arr:number,left:number,right:number){
if(left===right){
    return
}
let mid=left+right>>1;
process(arr,left,mid);
process(arr,mid+1,right);
merge(arr,left,mid,right);
 }
