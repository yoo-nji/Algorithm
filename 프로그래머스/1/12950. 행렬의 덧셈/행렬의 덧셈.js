function solution(arr1, arr2) {
    // 배열 완전탐색
    let result = [ ]
    for( let i = 0 ; i < arr1.length ; i++){
        let arr = [ ]
        for(let j = 0 ; j < arr1[i].length ; j++){
            arr.push(arr1[i][j] + arr2[i][j])
        } result.push(arr)
    }
    return result
}