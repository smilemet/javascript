// // 문제 1
// const check_list = [true, false, false, true, false];
// console.log(`before --> ${check_list}`);
// for(let i = 0; i < check_list.length; i++) {
//     check_list[i] = !check_list[i];
// }

// console.log(`after --> ${check_list}`);


// // 문제 2
// const grade = [75, 82, 91];
// let sum = 0, avg = 0;

// for(let i = 0; i < grade.length; i++) {
//     sum += grade[i];
// }
// avg = sum / (grade.length)

// console.log(`총점: ${sum}점, 평균점수: ${avg.toFixed(2)}점`)


// // 문제 3
// const time = [7, 5, 5, 5, 5, 10, 7];
// let money = 0;

// for (let i = 0; i < time.length; i++) {
//     let k = i > 3 ? 5200 : 4500;
//     money += time[i] * k;
// }

// console.log(`1주일간의 전체 급여: ${money}원`);


// // 문제 4
// const price = [38000, 20000, 17900, 17900];
// const qty = [6, 4, 3, 5];

// let money2 = 0;
// for (let i = 0; i < price.length; i++) {
//     money2 += price[i]*qty[i];
// }

// console.log(`전체 결제 금액: ${money2}원`);


// // 문제 5
// let max = price[0]*qty[0];

// for (let i = 0; i < price.length; i++) {
//     if (max < price[i]*qty[i]) {
//         max = price[i]*qty[i];
//     }
// }

// console.log(`가장 비싼 항목: ${max}원`);


// // 문제 6
// let count = 0;
// for (let i = 0; i < price.length; i++) {
//     if (price[i]*qty[i] >= 80000) {
//         count++;
//     }
// }

// console.log(`무료배송 항목: ${count}건`);


// // 문제 7
// const price = [209000, 109000, 119000, 109000, 94000];
// console.log(`상품가격 --> ${price}`);

// for (let i = 0; i < price.length - 1; i++) {
//     for (let j = i+1; j < price.length; j++) {
//         if (price[i] > price[j]) {
//             console.log(i, j)
//             let tmp = price[i];
//             price[i] = price[j];
//             price[j] = tmp;
//         }
//     }
// }

// console.log(`낮은가격순 --> ${price}`);


// // 문제 8

// const arr = [5, 3, 2, 8, 9];
// console.log(`before --> ${arr}`);
// // console.log(arr.reverse());

// let k = parseInt(arr.length / 2);
// for (let i = 0; i < k; i++) {
//     let j = arr.length - 1 - i
//     let tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }

// console.log(`before --> ${arr}`)


// // 문제 9~10
// const student = ['둘리', '도우너', '또치', '희동'];
// const grade = [
//     [78, 89, 96],
//     [62, 77, 67],
//     [54, 90, 80],
//     [100, 99, 98]
// ];

// let sum = 0; avg = 0;
// for (let i = 0; i < grade.length; i++) {
//     let per_sum = 0;
//     for (let j = 0; j < grade[i].length; j++) {
//         per_sum += grade[i][j];
//     }
//     per_avg = per_sum/grade[i].length;
//     sum += per_sum;
//     avg += per_avg;
//     console.log(`${student[i]} 총점: ${per_sum}점, 평균: ${per_avg.toFixed(2)}점`);
// }
// console.log(`반 평균 = ${avg/student.length}점`);


// // 문제 11
// const price = [
//     [ 500, 291 ],
//     [ 320, 586 ],
//     [ 100, 460 ],
//     [ 120, 558 ],
//     [ 92, 18 ],
//     [ 30, 72 ],
// ];
// let money = 0;

// for (p of price) {
//     money += p[0]*p[1]*0.9;
// }

// console.log(`아이템 총 판매가격: ${money}`);


// 문제 12

const ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3];
let k = 2;
let sum = 0;

for (let i = 0; i < ssn.length-1; i++) {
    sum += ssn[i]*k++;
    if(k > 9) {
        k = 2;
    }
}

sum = (11 - (sum % 11)) % 10;
const check = sum % 10;

console.log(ssn[12] === check ? "유효" : "무효");