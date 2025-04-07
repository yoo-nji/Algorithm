function solution(absolutes, signs) {
 let result = 0
 for(i=0 ; i < absolutes.length ; i++){
     console.log(absolutes[i])
    signs[i] ? result += absolutes[i] : result -= absolutes[i]
 } return result
}