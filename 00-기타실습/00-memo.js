const WEIGHT = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
let jumin = [0, 1, 1, 2, 1, 3, 1, 0, 0, 0, 1, 2, 3];
let sum = 0;

for (i = 0; i < jumin.length - 1; i++) {
    sum += jumin[i] * WEIGHT[i]
}

let test1 = (11 - (sum % 11) ) % 10
let test2 = test1 - parseInt(test1 / 10) * 10

if (test2 === jumin[12]) {
    console.log("유효한 주민등록번호 입니다.")
} else {
    console.log("유효하지 않은 주민등록번호 입니다.")
}




let jumin = [0, 1, 1, 2, 1, 3, 1, 0, 0, 0, 1, 2, 3];
let weight = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
let test = 0;

for (i = 0; i < jumin.length - 1; i++) {
    test += jumin[i] * weight[i]
}

test = (11 - (test % 11)) % 10
test -= parseInt(test/10) * 10
console.log(test === jumin[12] ? "유효" : "유효하지 않음");



const student = ["둘리", "도우너", "또치", "희동"];
const grade = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98],
]

let sum = 0, avg = 0;

for (let i = 0; i < grade.length; i++) {
    sum = 0;
    for (let j = 0; j < grade[i].length; j++) {
        sum += grade[i][j];    
    }

    avg = sum / grade[i].length;
    avg = avg.toFixed(2)

    console.log("%s 총점: %d점, 평균: %d점", student[i], sum, avg);
}