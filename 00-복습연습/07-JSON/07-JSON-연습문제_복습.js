// const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};
// const BLOOD_TYPE = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']

// for (const t of BLOOD_TYPE) {
//     result[t] ++;
// }

// console.log(result);



// const exam = {
//     "철수": [89, 82, 79, 91],
//     "민영": [91, 95, 94, 89],
//     "남철": [65, 57, 71, 64],
//     "혜진": [82, 76, 81, 83]
// }

// for(const e in exam) {
//     let sum = 0;
//     for(let i = 0; i < exam[e].length; i++) {
//         sum += exam[e][i]
//     }
//     console.log(`${e}의 총점은 ${sum}점 이고 평균은 ${sum/exam[e].length}점 입니다.`);
// }

// let sum = 0;
// let count = 0;
// for (let e in exam) {
//     sum += exam[e][2];
//     count++;
// }

// console.log(`모든 학생의 수학 총점은 ${sum}점 이고 평균은 ${sum/count}점 입니다.`)


// covid19 = [
//     {date: '0125', active: 426}, 
//     {date: '0126', active: 343}, 
//     {date: '0127', active: 547}, 
//     {date: '0128', active: 490}, 
//     {date: '0129', active: 460}, 
//     {date: '0130', active: 443}, 
//     {date: '0131', active: 338}, 
//     {date: '0201', active: 299}
// ]

// let sum = 0;
// let count = 0;

// for (const c of covid19) {
//     sum += c.active;
//     count++;
// }

// console.log(`누적 확진자 수: ${sum}\n평균 확진자 수: ${sum/count}`)

// let max = covid19[0]
// for (const i of covid19) {
//     if (max.active < i.active) {
//         max.active = i.active;
//         max.date = i.date;
//     }
// }

// console.log(`확진자가 가장 많이 나타난 날: ${max.date}`);