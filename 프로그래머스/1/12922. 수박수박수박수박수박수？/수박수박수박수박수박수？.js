function solution(n) {
   let str = ["수","박"]
   let result = ""
 for(let i = 0; i < n; i++){
    i % 2 === 0 ? result += str[0] : result += str[1]
 } return result
}