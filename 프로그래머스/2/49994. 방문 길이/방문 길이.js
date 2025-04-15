function solution(dirs) {
    let paths = [] //다녀온 좌표
    let [x, y] = [0, 0] //현재 위치 좌표
    
    //1. dirs 배열로 돌아서 움직이는 위치 추적
    for(let i = 0 ; i < dirs.length ; i++){
      let direction = dirs[i];
        const from = `${x},${y}` //이동 전 좌표
        
        //2. 조건체크 x, y 절댓값은 5, 이상 넘어가면 이동하지 않음
        let [nx, ny] = [x, y]; // 다음 좌표
        switch (direction) {
              case 'U': ny += 1; break;
              case 'D': ny += -1; break;
              case 'L': nx += -1; break;
              case 'R': nx += 1; break;
            }
        if(nx > 5 || nx < -5 || ny > 5 || ny < -5) continue;
        
        
        //3. dirs 값에 따른 이동
            switch (direction) {
              case 'U': y += 1; break;
              case 'D': y += -1; break;
              case 'L': x += -1; break;
              case 'R': x += 1; break;
            }
        console.log(x, y)
        
        //4. 이동한 좌표 저장
        const to = `${x},${y}`;
        const path = [to, from].sort().join(':'); //정렬하면 방향 무시됨
        
        //5. 경로에 저장
        paths.push(path)
        
    }console.log(paths)
    
    //6. 중복 제거 후 길이 반환
    const result = new Set(paths)
    return result.size;
}