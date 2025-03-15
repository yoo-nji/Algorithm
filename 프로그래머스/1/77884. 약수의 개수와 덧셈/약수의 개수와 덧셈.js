function countDivisors(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if(n % i === 0) {
            count++; 
        }
    }
    return count;
}

function solution(left, right) {
    let result = 0
    for(let i = left ; i <= right ; i++ ){
        console.log(i)
        let divCount = countDivisors(i)
        if(divCount % 2 === 0 ) result += i
        else result -= i
    }
    return result
} 