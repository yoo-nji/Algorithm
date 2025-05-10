//1. 키: 신고자 값: 신고 목록 배열 테이블 만들기
function setReportTable(report) {
    const reportTable = {}

    for(let i = 0 ; i < report.length ; i++){
        const [reporter, reported] = report[i].split(' ')
        
        if(!reportTable[reporter]){
            reportTable[reporter] = new Set();
        }
        reportTable[reporter].add(reported)
    }
    return reportTable
}

//2. 신고 누적 횟수에 따른 정지여부
function isSuspendedUsers(report, k) {
    const countReported = {}
    const isSuspended = {}
    
    for(let i = 0 ; i < report.length ; i++){
        const [reporter, reported] = report[i].split(' ')
        
        if(!countReported[reported]){
            countReported[reported] = new Set(); // 같은 사용자가 신고하면 1회로 처리됨
        }
        countReported[reported].add(reporter)
    }
      // Set → 숫자 변환 후 정지여부 계산
    for (const user in countReported) {
        if(countReported[user].size >= k) isSuspended[user] = true;
        else isSuspended[user] = false;
    }
    console.log(isSuspended)
    return isSuspended;
}

function solution(id_list, report, k) {
    const result = []
    
    const reportTable  = setReportTable(report) //키: 신고자 값: 신고 목록 배열 테이블
    const suspendedUsers = isSuspendedUsers(report, k) //정지여부
    
    for(const user of id_list){
        let count = 0
        
        // 신고 안 했으면 0
        if(!reportTable[user]) {
            result.push(0);
            continue;
        }
        //신고했으면 유저가 신고한 사람 배열을 돌면서 정지 여부 체크
        for(const reported of reportTable[user]){
            suspendedUsers[reported] ? count++ : count
        }
        
        result.push(count)
        
    }
    
    return result
}