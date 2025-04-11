function solution(answers) {
    const scores = [0, 0, 0]
    
    const patterns = [
      [1, 2, 3, 4, 5],
      [ 2, 1, 2, 3, 2, 4, 2, 5],
      [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    
    // 패턴으로 문제를 모두 매칭시킨다
    for(let i = 0 ; i < answers.length ; i++){
        let answer = answers[i] // 현재 답
         for(let j = 0 ; j < patterns.length ; j++) {
            if(answer === patterns[j][i % patterns[j].length] ) scores[j] += 1
        }
    }
    
    const result = []
    
    const maxScore = Math.max(...scores) //가장 높은 점수
    for(let i = 0 ; i < scores.length ; i++){
        if(scores[i] === maxScore) result.push(i + 1)
    } 
    
  return result
}