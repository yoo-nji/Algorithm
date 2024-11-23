function solution(people, limit) {
    // 무게 순으로 내림차순 정렬
    const peoples = people.sort((a, b) => b - a);

    let 보트 = 0;
    let i = 0; // 가장 무거운 사람
    let j = peoples.length - 1; // 가장 가벼운 사람
    console.log(i, j)

    while (i <= j) {
        if (peoples[i] + peoples[j] <= limit) {
            // 가장 가벼운 사람과 가장 무거운 사람 같이 탑승
            j--;
        }
        // 혼자 탑승
        i++;
        보트++;
    }

    return 보트;
}
