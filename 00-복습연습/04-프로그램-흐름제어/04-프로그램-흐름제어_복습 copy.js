// /** 1) if */
// // 논리값 true, false
// console.group(`예제`)
//     console.log(`배고픈데`);
//     const have_money = true;
//     if(have_money) {
//         console.log(`식당에서`);
//     }
//     console.log(`밥을 먹자`);
// console.groupEnd();


// // 숫자형 값 사용
// console.group(`예제`)
//     const money1 = 10000;
//     if(money1) {
//         console.log(`택시를 타고`);
//     }
//     console.log(`집에 가자`);
// console.groupEnd();


// // 비교식 조건문
// console.group(`예제`)
//     const money2 = 12000;
//     if (money2 >= 5000) {
//         const k = money2 - 5000;
//         console.log(`선물을 사고 ${k}원 남는다.`)
//     }
// console.groupEnd();


// // 논리식을 사용한 조건문 AND
// console.group(`예제`)
//     const x1 = true;
//     const y1 = true;

//     if(x1 && y1) {
//         console.log(`x1 && y1 조건문은 참입니다.`);
//     }

//     const x2 = true;
//     const y2 = false;

//     if(x2 && y2) {
//         console.log(`x2 && y2 조건문은 참입니다.`);
//     }
// console.groupEnd();


// // 논리식을 사용한 조건문 OR
// console.group(`예제`)
//     const x3 = true;
//     const y3 = true;

//     if (x3 || y3) {
//         console.log(`x3 || y3 조건문은 참입니다.`);
//     }

//     const x4 = true;
//     const y4 = false;

//     if (x4 || y4) {
//         console.log(`x4 || y4 조건문은 참입니다.`);
//     }

//     const x5 = false;
//     const y5 = false;

//     if (x5 || y5) {
//         console.log(`x5 || y5 조건문은 참입니다.`);
//     }
// console.groupEnd();


// // Not 연산
// console.group(`예제`)
//     const a = true;
//     if (!a) {
//         console.log(`Hello World`);
//     }

//     const b = false;
//     if (!b) {
//         console.log(`헬로우 월드`);
//     }
// console.groupEnd();


// // 논리식 not
// console.group(`예제`)
//     const x6 = true;
//     const y6 = false;

//     if(!(x6 && y6)) {
//         console.log(`!(x6 && y6) 조건은 참입니다.`);
//     }

//     const x7 = true;
//     const y7 = false;

//     if (!(x7 || y7)) {
//         console.timeLog(`!(x7 || y7) 조건은 참입니다.`)
//     }
// console.groupEnd();


// /** if else */
// const age = 19;
// if (age > 19) {
//     console.log(`성인입니다.`)
// } else {
//     console.log(`성인이 아닙니다.`)
// }



// /** switch */
// console.group(`예제`)
// const kor = 'b';

// switch (kor) {
//     case 'a' :
//         console.log(`a 학점입니다.`);
//         break;
//     case 'b' :
//         console.log(`b 학점입니다.`);
//         break;
//     case 'c' :
//         console.log(`c 학점입니다.`);
//         break;
//     default : 
//         console.log(`낙제`);
//         break;
// }
// console.groupEnd();


// console.group(`예제`)
// switch (kor) {
//     case 'a' :
//         console.log(`a 학점입니다.`);
//     case 'b' :
//         console.log(`b 학점입니다.`);
//     case 'c' :
//         console.log(`c 학점입니다.`);
//     default : 
//         console.log(`낙제`);
// }
// console.groupEnd();


// console.group(`예제`)
// const eng = 'a'
// switch (eng) {
//     case 'a' : 
//     case 'b' :
//     case 'c' :
//         console.log(`통과입니다.`);
//         break;
//     default : 
//         console.log(`낙제입니다.`);
//         break;
// }
// console.groupEnd();


// console.group(`예제`)
// const sci = 80;
// switch (sci > 70) {
//     case true : 
//         console.log(`통과입니다`);
//         break;
//     default : 
//         break;
// }


/** while */
console.groupEnd();
let x = 1;
while (x <= 10) {
    const k = `x = ${x}`;
    console.log(k);
    x++;
}
console.log(`x의 최종값 = ${x}`);


console.group(`예제`)
let c = 1;
while (c < 10) {
    console.log(`7 x ${c} = ${7*c}`);
    c++;
}
console.groupEnd();


console.group(`예제`)
let sum = 0;
let i = 1;
while (i < 11) {
    sum += i
    i++;
}
console.log(sum);
console.groupEnd();


for (let i = 1; i < 10; i++) {
    console.log(`7 x ${i} = ${7*i}`);
}


let sum2 = 0;
for (let i = 1; i <= 10; i++) {
    sum2 += i;
}

console.log(sum2);