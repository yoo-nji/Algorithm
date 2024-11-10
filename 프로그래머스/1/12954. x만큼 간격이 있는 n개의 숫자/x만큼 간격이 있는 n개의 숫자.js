function solution(x, n) {
    let add = x
    let arr = []
   for(let i = 0; i < n ; i++){
       arr.push(x)
       x += add
   }
    return arr;
}