const grade = [
    ["철수", 92, 81, 76],
    ["영희", 72, 95, 84],
    ["민혁", 80, 86, 98],
];

let sum = 0; // 이 위치에서 변수 초기화 → 모든 학생의 총점

for(let i = 0; i < grade.length; i++) {
    let p_sum = 0; 
    // 이 위치에서 변수 초기화 → 각 학생의 총점(i 영향)
    
    for(let j = 1; j < grade[i].length; j++) {
        sum += grade[i][j];
        p_sum += grade[i][j];
    }

    const p_avg = p_sum / grade[i].length - 1;
    console.log("%s의 과목 총점 = %d, 평균 = %d", grade[i][0], p_sum, p_avg)
}

console.log("전체 학생 점수 총점 = %d", sum);