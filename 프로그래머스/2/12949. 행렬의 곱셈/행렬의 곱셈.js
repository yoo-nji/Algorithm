function solution(arr1, arr2) {
    let result = []
    //1. arr1 행만큼 반복됨
    for(let i = 0 ; i < arr1.length ; i++){
        let row = [] // 계산 중인 행
        for(let j = 0 ; j < arr2[0].length ; j++){
            let sum = 0
         // 2. 행에 해당하는 열의 인덱스만큼 반복
            for(let k = 0 ; k < arr2.length ; k++){      
               sum += arr1[i][k] * arr2[k][j]  
            }
            row.push(sum)
        } 
        result.push(row)
    }
    console.log(result)
   return result
}