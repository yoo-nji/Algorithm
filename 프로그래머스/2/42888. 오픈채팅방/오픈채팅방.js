//1. 유저아이디를 키값으로 닉네임을 벨류로 저장
function getUserTable(record){
    const userTable = {}
    
    for(const user of record){
        const userArr = user.split(" ")
        let [action, id, nickname] = userArr
        if(action === 'Enter' || action === 'Change') userTable[id] = nickname
    }
    return userTable
}

function solution(record) {
    const result = []
    const userTable = getUserTable(record)
    
    // record ["행동 유저아이디 닉네임"] //Enter 입장, Leave 퇴장, Change 변경
    for(const user of record){
        const userArr = user.split(" ")
        let [action, id, nickname] = userArr
        
       if(action === "Enter") result.push(`${userTable[id]}님이 들어왔습니다.`)
        else if(action === "Leave") result.push(`${userTable[id]}님이 나갔습니다.`)
    }
    return result
}