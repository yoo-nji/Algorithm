function solution(progresses, speeds) {
    const n = progresses.length
    const result = []
    let count = 0 //배포될 작업 수 카운트
    // 배포 가능일
    const daysLeft = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]))
    let first = daysLeft[0]
    
    for(let i = 0 ; i < n ; i++){
        //1. 먼저 배포되어야 하는 것과 비교해서 배포 가능한 작업 수 카운트
        if(daysLeft[i] <= first){
            count++;
        } else {
            result.push(count);
            count = 1; // 초기화
            first = daysLeft[i]
        }
    }
    
    //2. 남은 작업 배포
    result.push(count)
    
    return result
 
}