const solution = (a, b) => {
    let result = 0
    a.forEach((v, i)=> result += a[i]*b[i])
    return result
}