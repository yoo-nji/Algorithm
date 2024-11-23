function solution(k, tangerine) {
   let tangerineBox = 0 //귤 담을 바구니 초기화
   let result = 0
   
    //귤 크기를 분류하는 객체 생성
    const tangerineObj = {}
    tangerine.forEach((v)=>{
      tangerineObj[v] = (tangerineObj[v] || 0) + 1
    })
    
    //크기별 귤 개수만 내림차순 정렬 배열
    const sortArr = Object.values(tangerineObj).sort((a, b) => b - a)    
    
    // 경화가 원하는 수만큼 귤을 담을 때까지
    while(tangerineBox < k){
        tangerineBox += sortArr[0]
        sortArr.shift()
        result ++
    }
   return result
}