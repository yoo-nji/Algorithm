function solution(N, stages) {
    let stage = {} //1. 스테이지 객체 생성
    
     // 2. 스테이지 실패율 저장 객체 준비
    for(let i = 0 ; i < N ; i++){
        stage[i + 1] = 0
    }
    
    // 3. 배열 돌면서 실패 수 저장
    for(let i = 0 ; i < stages.length ; i++){
        let target = stages[i]
        if(target > N ) continue;
        stage[target] += 1;
    }
    
    // 4. 실패율 계산  
    let notCleared = 0 // 누적 실패자 
    let start = stages.length 
    for( key in stage){
        // 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
        const failed = stage[key]; // 실패한 사람 수
        stage[key] = stage[key] / (start - notCleared)
        notCleared += failed //클리어 못한 사람 더하기
    }
    console.log(stage)
    
    // 5. 내림차순 정렬
    const sort = Object.entries(stage).sort((a, b) => b[1] - a[1])
    
    // 6. 스테이지만 배열로 저장
    const result = []
    sort.map((v)=> result.push(Number(v[0])))
    return result
}