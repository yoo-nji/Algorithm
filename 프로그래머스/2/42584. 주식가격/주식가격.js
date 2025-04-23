function solution(prices) {
const n = prices.length
const stack = [] //배열 인덱스를 담을 스택
const result = new Array(n).fill(0); //초기화
    
//1. 배열 돌기
for(let i = 0 ; i < n ; i++){
    
    //2. 스택이 비어있지 않으면서 만약 이전 값이 현재 들어오는 값보다 크다면
    //  while 루프 안에서 pop()을 하니까, 루프 중간에 스택이 비게 될 수 있음!
    while(stack.length && prices[stack[stack.length - 1]] > prices[i]){
      const top = stack.pop() // 이전 인덱스
      // 값 확정
      result[top] = i - top  
    } 
    
    stack.push(i)
}
       //3. 떨어지지 않고 남은 값 처리
        while (stack.length) {
            const top = stack.pop();
            result[top] = n - 1 - top;
        }
    
    return result
}