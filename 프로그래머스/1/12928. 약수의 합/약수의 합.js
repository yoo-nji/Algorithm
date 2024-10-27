const solution = (n) => {
    let results = 0
    for(let i = 0; i <= n; i++){
        if(n % i === 0) results += i
    } return results
}