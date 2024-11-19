process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let rectangle = "";
    for (let i = 0; i < b; i++) {
        rectangle += "*".repeat(a) + "\n"; // 가로 길이만큼 별 반복 후 줄바꿈
    }
    console.log(rectangle)
});