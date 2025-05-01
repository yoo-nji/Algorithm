function solution(cards1, cards2, goal) {
const n1 = cards1.length
 const n2 = cards2.length
 let front1 = 0;
 let front2 = 0;
 
      //2. goal에 해당하는 단어가 cards의 가장 앞에 있는지 확인
        for (const word of goal){
            if(cards1[front1] === word){
             front1++
            } else if(cards2[front2] === word){
                front2++
            }  else return "No";
        }
 return "Yes";
}