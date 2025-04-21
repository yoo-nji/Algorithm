function solution(s)
{
    const stack = []
    // 1. s 길이만큼 반복
    for(let i = 0 ; i < s.length ; i++){
        ///2. 배열 아무것도 없을 경우 push
        if(stack.length === 0) {
            stack.push(s[i])
            continue;
        }
        
        //3. 있을 경우 스택의 가장 마지막과 비교
        if(stack[stack.length - 1] === s[i]) stack.pop()
        else stack.push(s[i])
    }
    
    //3. 스택이 비어있으면 1 
    return stack.length === 0 ? 1 : 0
    
}