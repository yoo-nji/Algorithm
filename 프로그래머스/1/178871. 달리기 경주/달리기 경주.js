function solution(players, callings) {
  // 선수의 이름을 키로 하고 위치를 값으로 가지는 객체 생성
  const positions = {};
  players.forEach((player, index) => {
    positions[player] = index;
  });

  // 각 호출에 대해 선수 위치 교환
  callings.forEach((call) => {
    const currentIndex = positions[call]; // 현재 호출된 선수의 위치
    if (currentIndex > 0) { // 맨 앞에 있는 선수가 아닌 경우만 교환 수행
      const prevPlayer = players[currentIndex - 1];

      // 선수 배열에서 위치 교환
      players[currentIndex - 1] = call;
      players[currentIndex] = prevPlayer;

      // 위치 객체에서도 위치 업데이트
      positions[call] = currentIndex - 1;
      positions[prevPlayer] = currentIndex;
    }
  });

  return players;
}