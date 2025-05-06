function isMatch(obj1, obj2){
    for(const key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }
    return true;
}

function solution(want, number, discount) {
    let result = 0
  //1. 정현이가 사고 싶은 것 테이블 물건 : 수량
    let wantTable = {}
    for(let i = 0; i < want.length ; i++){
        wantTable[want[i]] = number[i]
    }
    
//2. i일에 가입하면 할인 받을 수 있는 물건 테이블
    for(let i = 0 ; i <= discount.length - 10 ; i++){
        const discountTable = {}
        for(j = i ; j < i + 10 ; j++){
            discountTable[discount[j]] = (discountTable[discount[j]] || 0) + 1
        }
        if(isMatch(wantTable, discountTable)) result += 1
    }
   
    return result
}