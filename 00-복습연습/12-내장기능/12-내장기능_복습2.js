// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
// const arr3 = arr1.concat(arr2);

// console.log(arr3)


// const str1 = 'hello';
// const str2 = 'world';
// const str3 = str1.concat(" ", str2)

// console.log(str3)

// const arr4 = [5, 12, 8, 131, 44];
// const result = arr4.filter((v, i, arr) => {
//     console.log(`v=${v}, i=${i}, arr=${arr}`);
//     if (v % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(result)


// const arr3 = [5, 12, 8, 131, 44];

// const found = arr3.find((v) => {
//     console.log(v);
//     if (v % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// });


// console.log(found);


// const arr = [5, 12, 8, 131, 44];
// arr.forEach((v, i, arr) => {
//     console.log(`요소: ${v}, 인덱스: ${i}, 현재 배열:${arr}`);
//     v += 10;
// });

// console.log(arr);

// const arr = [5, 12, 8, 131, 44];

// console.log(arr.includes(12));

// const arr2 = [5, 12, 8, 131, 44, NaN];

// console.log(arr2.includes())

// const arr = [5, 12, 8, 131, 44];
// console.log(arr.indexOf(8));


// const msg = 'Life is too short, you need Javascript.';
// const x = msg.lastIndexOf('e');

// console.log(x, y)

// const arr = [5, 12, 8, 131, 44];
// const d1 = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 4 === 0) {
//         d1.push(arr[i])
//     }
// }
// console.log(d1)

// const d2 = []
// arr.forEach((v => {
//     if (v % 4 === 0) {
//         d2.push(v)
//     }
// }))
// console.log(d2)


// const hello = arr.map((v, i) => v + i);
// console.log(hello)

// const arr = [10, 20, 30, 40, 50]

// // arr.reverse();
// // console.log(arr);

// let sum = 0;
// arr.some((v, i) => {
//     if(i > 3) {
//         return true;
//     } else {
//         sum += v;
//     }
// })

// console.log(sum);

// const calander = new Array(6);
// calander.some((v, i) => {
//     if (i > calander.length) {
//         return true;
//     } else {
//         v = new Array(7)
//     }
// })
// console.log(calander)


// const arr5 = [2, 1, 15];
// arr5.sort();
// console.log(arr5);

// arr5.sort((a, b) => a - b);
// console.log(arr5);


// let count1 = 0
// setInterval(() => {
//     count1++;
//     console.log(`타이머 ${count1}번째 자동 실행`);
    
//     if(count1 === 5) {
//         console.log('타이머 1 종료');
//         clearInterval(timerId1);
//     }
// }, 3000);


// function random(a, b) {
//     return parseInt(Math.random()*(b - a + 1)) + a;
// }


// let pw = ""
// for(let i = 0; i < 34; i++) {
//     pw += random(1, 9);
// }

// console.log(pw);

// Object.assign()


const date1 = new Date();
console.log(date1); // 2022-02-14T08:34:46.059Z
console.log(date1.toISOString());

console.log(date1.toString());
console.log(date1.toDateString());