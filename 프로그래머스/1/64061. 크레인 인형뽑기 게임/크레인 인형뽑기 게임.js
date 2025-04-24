function solution(board, moves) {
    const n = board.length
    const stack = []
    let result = 0
    // 격자의 상태가 담긴 배열 board
    // 크레인 작동 위치 moves
    // 크레인은 모두 작동시킨 뒤 터트려 사라진 인형 개수 return
    
    const boardStack = Array.from({ length: n }, () => [])
    
    //1. board 배열 스택 형태로 만들기
    for(let i = n - 1 ; i >= 0 ; i--){
        for(let j = 0 ; j < n ; j++){
            if(board[i][j] !== 0) boardStack[j].push(board[i][j])
        }
        
    }
    
    console.log(boardStack) 
    
    //2. 크레인 작동 위치 번째에 있는 가장 끝 인형 뽑아서 스택에 넣기
    for (const move of moves) {
        
        //3. 그 라인에 인형이 없으면 넘어감
         if (boardStack[move - 1].length === 0) continue; 
        
        const target = boardStack[move - 1].pop() //1번이면 배열에선 0번 인덱스이기 때문에 -1
        
        const top = stack[stack.length - 1]
        
        //4. 만약 스택이 비어있지 않고, 인형 두 개가 같을 경우 스택에서 제거
        if(stack.length && top === target){
            stack.pop()
            //4-1. 제거하면서 개수 세기
            result += 2
        } else stack.push(target)
    }
    return result 
}