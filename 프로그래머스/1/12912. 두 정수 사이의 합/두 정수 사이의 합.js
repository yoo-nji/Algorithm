function solution(a, b) {
let largerNum = a > b ? a : b
let smallerNum = a > b ? b : a
let result = 0
for (let i = smallerNum ; i <= largerNum ; i++){
    result += i
}return result
}