// // 1번 문제
// let check_list = [true, false, false, true, false];
// console.log("before --> " + check_list);

// for (let i = 0; i < check_list.length; i++) {
//     if (check_list[i] === true) {
//         check_list[i] = false;
//     } else {
//         check_list[i] = true;
//     }
// }

// console.log("after --> " + check_list);



// // 2번 문제
// let grade = [
//     ["", "HTML", "CSS", "Javascript"], 
//     ["점수", 75, 82, 91]
// ];
// let sum = 0, avg = 0;

// // 총점 구하기
// let k = 1
// for(let i = 1; i < grade[k].length; i++) {
//     sum += grade[k][i];
// }

// //평균 구하기
// avg = (sum / (grade[k].length - 1)).toFixed(2);

// console.log("총점: %d점, 평균점수: %d점", sum, avg);



// // 3번 문제
// let time = [7, 5, 5, 5, 5, 10, 7];
// let money = 0;

// for (let i = 0; i < time.length; i++) {
//     if(i < 4) {
//         money += 4500*time[i];
//         console.log(money);
//     } else {
//         money += 5200*time[i];
//         console.log(money);
//     }
// }

// // console.log("1주일간의 전체 급여= %d원", money);



// // 4번 문제
// let price = [38000, 20000, 17900, 17900];
// let qty = [6, 4, 3, 5];
// let money = 0;

// for (let i = 0; i < price.length; i++) {
//     money += price[i]*qty[i];
// }

// console.log("전체 결제 금액: %d원", money);



// // 5번 문제
// let moneyArray = [
//     price[0]*qty[0],
//     price[1]*qty[1],
//     price[2]*qty[2],
//     price[3]*qty[3],
// ]
// let max = moneyArray[0];

// for (let i = 1; i < moneyArray.length; i++) {
//     if (max < moneyArray[i]) {
//         max = moneyArray[i];
//     }
// }

// console.log("가장 높은 상품금액: %d원", max);



// // 6번 문제
// const FREE_DELI = 80000;
// let count = 0;

// for (let i = 0; i < moneyArray.length; i++) {
//     if (moneyArray[i] >= FREE_DELI) {
//         count += 1;
//     }
// }

// console.log("무료배송 항목: %d건", count);



// // 7번 문제
// let price = [209000, 109000, 119000, 109000, 94000];
// console.log("상품가격 --> %d", price);

// for (let i = 0; i < price.length - 1; i++) {
//     for (let j = i + 1; j < price.length; j++) {
//         if (price[i] > price[j]) {
//             let tmp = price[i];
//             price[i] = price[j];
//             price[j] = tmp;
//         }
//     }
// }

// console.log("낮은가격순 --> %d", price);



// // 8번 문제
// let arr = [5, 3, 2, 8, 9]
// console.log("before --> %s", arr);

// for (let i = 0; i < parseInt(arr.length/2); i++) {
//     let j = arr.length - i - 1;
//     let tmp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = tmp;
// }

// console.log("after --> %s", arr);



// // 문제 9
// let student = ["둘리", "도우너", "또치", "희동"];
// let grade = [
//     [78, 89, 96],
//     [62, 77, 67],
//     [54, 90, 80],
//     [100, 99, 98],
// ]

// let sum = 0, avg = 0;

// for (let i = 0; i < student.length; i++) {
//     for (let j = 0; j < grade[i].length; j++) {
//         sum += grade[i][j];
//         avg = sum/grade[i].length;
//     }
//     console.log("%s 총점: %d점, 평균: %d점", student[i], sum, avg.toFixed(2));
//     sum = 0;
//     avg = 0;
// }



// 문제 10
let student = ["둘리", "도우너", "또치", "희동"];
let grade = [
    [78, 89, 96],
    [62, 77, 67],
    [54, 90, 80],
    [100, 99, 98],
]

let sum = 0, avg = 0;
let totalAvg = 0;

for (let i = 0; i < student.length; i++) {
    for (let j = 0; j < grade[i].length; j++) {
        sum += grade[i][j];
        avg = sum/grade[i].length;
    }
    console.log("%s 총점: %d점, 평균: %d점", student[i], sum, avg.toFixed(2));
    totalAvg += avg;
    sum = 0;
    avg = 0;
}
console.log("반 평균 = %d점", totalAvg/student.length);



// 문제 11
let price = [500, 320, 100, 120, 92, 30]
let item = [291, 586, 460, 558, 18, 72]

let sum = 0

for (let i = 0; i < price.length; i++) {
    
}