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

// console.log("1주일간의 전체 급여= %d원", money);



// 4번 문제
let price = [38000, 20000, 17900, 17900];
let qty = [6, 4, 3, 5];
let money = 0;

for (let i = 0; i < price.length; i++) {
    money += price[i]*qty[i];
}

console.log("전체 결제 금액: %d원", money);



// 5번 문제
for(let i = 0; i < price.length; i++) {


}


let moneyArray = []
    for(let i = 0; i < price.length; i++) {
        console.log(price[i]*qty[i]);
    }