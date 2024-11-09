function solution(n) {
    let x = 1
    while(x ** 2 <= n){
        if(x**2 === n){
            return (x + 1) ** 2
        }
        x++
    }
    return - 1
}