//1. 참가자 테이블 만들기, 키: 이름, 값: 인원수
function participantHash(participant){
    const hashtable = {}
    for(const name of participant){
        hashtable[name] =  (hashtable[name] || 0) + 1; //키값이 존재하면 +1, 존재하지 않으면 0으로 초기화 후 + 1
    }
    return hashtable 
}

function solution(participant, completion) {
    const participantTable = participantHash(participant)
    //2. 참여 선수 테이블에 완주 선수가 있으면 값에 -1
    for(const name of completion){
        if (name in participantTable) participantTable[name] -=1
    }
    
    //3. 키값이 0보다 크면 return
    for (const name in participantTable) {
        if (participantTable[name] > 0) return name;
    }
}