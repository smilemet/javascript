// // 1번 문제
// let check_list = [true, false, false, true, false];
// console.log("before --> %s", check_list);

// for (let i = 0; i < check_list.length; i++) {
//     check_list[i] = !check_list[i];
// }

// console.log("after --> %s", check_list);



// // 2번 문제
// let grade = [75, 82, 91];
// let sum = 0, avg = 0;

// // for (let i = 0; i < grade.length; i++) {
// //     sum += grade[i];
// // }

// for (const k of grade) {
//     sum += k;
// }

// avg = (sum/grade.length).toFixed(2);
// console.log("총점: %s점, 평균점수: %s점", sum, avg);



// // 3번 문제
// let time = [7, 5, 5, 5, 5, 10, 7];
// let money = 0;

// for (let i = 0; i < time.length; i++) {
//     money += time[i] * (i > 3? 5200 : 4500);
// }

// console.log("1주일간의 전체 급여: %d원", money);



// // 4번 문제
// let price = [38000, 20000, 17900, 17900];
// let qty = [6, 4, 3, 5];
// let money = 0;

// for (let i = 0; i < price.length; i++) {
//     money += price[i]*qty[i];
// }

// console.log("전체 결제 금액: %d원", money);



// // 5번 문제
// let max = price[0]*qty[0];

// for (let i = 1; i < price.length; i++) {
//     if (max < price[i]*qty[i]) {
//         max = pprice[i]*qty[i];
//     }
// }

// console.log("가장 높은 상품금액: %d원", max);



// // 6번 문제
// let count = 0;

// for (let i = 0; i < price.length; i++) {
//     if (price[i]*qty[i] >= 80000) {
//         count++;
//     }
// }

// console.log("무료배송 항목: %d건", count);



// // 7번 문제
// 동일



// // 8번 문제
// 동일



// // 9번 문제, 10번 문제
// let student = ["둘리", "도우너", "또치", "희동"];
// let grade = [
//     [78, 89, 96],
//     [62, 77, 67],
//     [54, 90, 80],
//     [100, 99, 98]
// ]
// let sum = 0, avg = 0;
// let class_avg = 0;

// for (let i = 0; i < grade.length; i++) {
//     sum = 0;
//     for (j of grade[i]) {
//         sum += j;
//     }
//     avg = sum / grade[i].length;
//     class_avg += avg
//     avg = avg.toFixed(2);
//     console.log("%s 총점: %d점, 평균: %d점", student[i], sum, avg);
// }
// console.log("반 평균 = %d점", class_avg/grade.length);



// // 11번 문제
// let item = [
//     [500, 291],
//     [320, 586],
//     [100, 460],
//     [120, 558],
//     [92, 18],
//     [30, 72]
// ]
// let money = 0;

// for (let i = 0; i < item.length; i++) {
//     money += item[i][0]*item[i][1]*0.9;
// }

// console.log(money);



// 12번 문제

let ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3];
let sum = 0;

for (let i = 0, j = 2; i < ssn.length - 1; i++, j++) {
    if (j < 10) {
        sum += j*ssn[i];
    } else {
        sum += (j-8)*ssn[i];
    }
}

sum = (11-(sum % 11)) % 10

if(sum % 10 === ssn[12]) {
    console.log("유효")
} else {
    console.log("무효")
}
