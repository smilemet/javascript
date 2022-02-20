// 1번
const btype = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const b of btype) {
    result[b]++;
}

console.log(result)



// 2-1번
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

for (const e in exam) {
    let personalSum = 0;
    for (let i = 0; i < exam[e].length; i++) {
        personalSum += exam[e][i];
    }
    console.log(`${e}의 총점은 ${personalSum}점 이고 평균은 ${personalSum/exam[e].length}점 입니다.`);
}



// 2-2번
let count = 0;
let mathSum = 0;
for (const e in exam) {
    mathSum += exam[e][2];
    count++;
}

console.log(`모든 학생의 수학 총점은 ${mathSum}점 이고 평균은 ${mathSum/count}점 입니다.`);



// 3-1번
const covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]

let accNum = 0;
let count2 = 0
// for (const c in covid19) {
//     accNum += covid19[c].active;
//     count2++;
// }

for (const c of covid19) {
    accNum += c.active
    count2++;
}

console.log(`누적 확진자 수: ${accNum}
평균 확진자 수: ${accNum/count2}`);



// 3-2번
let max = covid19[0]
for (const c of covid19) {
    if (max.active < c.active) {
        console.log(c.active);
        max = c;
    }
}

console.log(`확진자가 가장 많이 나타난 날: ${max.date}`)