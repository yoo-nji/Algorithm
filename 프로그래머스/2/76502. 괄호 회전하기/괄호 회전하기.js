function isValidBracket(bracket){
    let stack = []
    for(let i = 0 ; i < bracket.length ; i++){
        
        if(bracket[i] === '(' ||
           bracket[i] === '{' ||
           bracket[i] === '['){
            stack.push(bracket[i])
        }
        
        if(bracket[i] === ')'){
            if(stack.length === 0||
               stack[stack.length - 1] !== '('){
                return false
            } else stack.pop()
        }
        
        if(bracket[i] === '}'){
           if(stack.length === 0||
               stack[stack.length - 1] !== '{'){
                return false
            } else stack.pop()
        }
        
        if(bracket[i] === ']'){
            if(stack.length === 0||
               stack[stack.length - 1] !== '['){
                return false
            } else stack.pop()
        } 
    }

    return stack.length === 0
}

function solution(s) {
    let bracket = s.split('')
    let result = 0
    
    //1. x만큼 s를 회전(0<=x<s.length)
    for(let i = 0 ; i < bracket.length ; i++){
        
        // 2. 올바른 괄호 문자열인가?
        if(isValidBracket(bracket)) result += 1
        
        //s를 왼쪽으로 한 칸씩 이동
        const first = bracket.shift()
        bracket.push(first) 
    }
    return result
}