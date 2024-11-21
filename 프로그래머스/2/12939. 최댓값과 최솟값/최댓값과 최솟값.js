function solution(s) {
    let numarr = s.split(" ").map(num => Number(num))
    return `${Math.min(...numarr)} ${Math.max(...numarr)}`
}