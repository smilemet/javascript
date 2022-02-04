// 1번 문제
let check_list = [true, false, false, true, false];
console.log("before --> %s", check_list);

for (let i = 0; i < check_list.length; i++) {
    check_list[i] = !check_list[i];
}

console.log("after --> %s", check_list);



// 2번 문제
let grade = [75, 82, 91];
let sum = 0, avg = 0;

// for (i = 0; i < grade.length; i++) {
//     sum += grade[i];
// }

for (const k of grade) {
    sum += k;
}

avg = (sum/grade.length).toFixed(2);
console.log("총점: %s점, 평균점수: %s점", sum, avg);



// 3번 문제

