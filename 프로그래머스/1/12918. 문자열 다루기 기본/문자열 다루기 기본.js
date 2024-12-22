function solution(s) {
    const length = s.length
    if(length === 4 || length === 6){
        return s.split("").every(char => !isNaN(char));
    }
    
    return false;
}