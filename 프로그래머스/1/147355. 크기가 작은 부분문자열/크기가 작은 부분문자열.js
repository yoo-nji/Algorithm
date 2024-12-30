function solution(t, p) {
let result = 0
const pLeng = p.length
for(let i = 0 ; i < t.length - pLeng + 1 ; i++ ){
    if(t.slice(i, i + pLeng) <= p){
        result = result + 1
    }
} return result
}