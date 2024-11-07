const solution = (a, b, n) => {
  let totalBottles = 0; // 최종적으로 받은 콜라 병 수
  let emptyBottles = n; // 현재 가지고 있는 빈 병 수

  while (emptyBottles >= a) { 
    const newBottles = Math.floor(emptyBottles / a) * b; // 교환으로 받은 새 콜라 병 수
    totalBottles += newBottles; // 교환한 병을 누적

    emptyBottles = (emptyBottles % a) + newBottles; // 남은 병 + 받은 콜라 병
  }

  return totalBottles;
};