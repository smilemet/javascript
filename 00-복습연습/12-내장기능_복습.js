// console.log();
// /** isNaN(x) */
// console.group('isNaN(x)')
// console.log(isNaN(NaN));
// console.log(isNaN('string'))
// console.log(isNaN('string123'))
// console.log(isNaN(undefined))
// console.log(isNaN({}))

const RegexHelper = require("../02-JavaScript/13-예외처리/RegexHelper");

// console.log(isNaN('21'))
// console.log(isNaN(true))
// console.log(isNaN(false));
// console.log(isNaN([]))
// console.log(isNaN(""))
// console.log(isNaN(' '))
// console.log(isNaN(null))
// console.log(isNaN(37))
// console.log(isNaN('39.45'))
// console.groupEnd();


// /** parseFloat(x) */
// console.group('parseFloat(x)')
// console.log(parseFloat(3.14));
// console.log(parseFloat('3.14'));
// console.log(parseFloat(314e-2));
// console.log(parseFloat(0.314e+1))
// console.log(parseFloat('3.14.564abc'));
// console.log(parseFloat('0.314e+1'));
// console.log(parseFloat('3.14abc'));
// console.log(parseFloat('abc3.14'));
// console.log(parseFloat(false));
// console.log(parseFloat(''));
// console.log(parseFloat(' '));
// console.log(parseFloat(null));
// console.log(parseFloat([]));
// console.groupEnd();


// /** parseInt(x, 진수) */
// // 1 2 3 4 5 6 7 8   9 10 11 12 13 14 15 16 17 18 19 20 21
// // 1 2 3 4 5 6 7 8   9  A  B  C  D  E  F 10 11 12 13 14 15
// // 1 2 3 4 5 6 7 10 11 12 13 14 15 16 17 20 21 22 23 24 25 

// /** parseInt(x, 진법) */
// console.group('parseInt(x)')
// console.log(parseInt(15))
// console.log(parseInt('15'))
// console.log(parseInt('15abc'))
// console.log(parseInt('f', 16))
// console.log(parseInt('15.23.23'))
// console.log(parseInt('0xf'))
// console.log(parseInt('0o17'))
// console.log(parseInt('15,233'))
// console.log(parseInt())
// console.log(parseInt())
// console.log(parseInt())
// console.log(parseInt())
// console.groupEnd();


// const set1 = ';,/?:@&=+$#'; // 변환 X
// const set2 = "-_.!~*'()" // 변환 X
// const set3 = 'ABC abc 123' // 공백만 변환
// const set4 = '자바스크립트' // 변환 O

// const enc1 = encodeURI(set1);
// const enc2 = encodeURI(set2);
// const enc3 = encodeURI(set3);
// const enc4 = encodeURI(set4);

// console.group('encodingURI');
// console.log(enc1);
// console.log(enc2);
// console.log(enc3);
// console.log(enc4);
// console.groupEnd();

// console.group(decodeURI);
// console.log(decodeURI(enc1));
// console.log(decodeURI(enc2));
// console.log(decodeURI(enc3));
// console.log(decodeURI(enc4));
// console.groupEnd();


// const set1_1 = ';,/?:@&=+$#'; // 변환 O
// const set2_1 = "-_.!~*'()"; // 변환 X
// const set3_1 = 'ABC abc 123'; // 공백만 변환
// const set4_1 = '자바스크립트'; // 변환 O

// const enc1_1 = encodeURIComponent(set1_1);
// const enc2_1 = encodeURIComponent(set2_1);
// const enc3_1 = encodeURIComponent(set3_1);
// const enc4_1 = encodeURIComponent(set4_1);

// console.group('encodeURIComponent');
// console.log(enc1_1);
// console.log(enc2_1);
// console.log(enc3_1);
// console.log(enc4_1);
// console.groupEnd();

// setTimeout(foo, 3000);
// console.log('구구단을 외자!!');

// function foo() {
//     for (let i = 1; i < 10; i++) {
//         console.log(`3x${i} = ${3*i}`)
//     }
// }

// setTimeout(() => {
//     for (let i = 1; i < 10; i++) {
//         console.log(`5x${i} = ${3*i}`);
//     }
// }, 1500)

// console.log(`프로그램 종료~!`)

// let count1 = 0;

// console.log(`타이머1 시작`);
// const timerId1 = setInterval(() => {
//     count1++;
//     console.log(`[타이머1] ${count1}번째 자동 실행`);

//     if(count1 === 5) {
//         console.log(`타이머 1 종료`);
//         clearInterval(timerId1);
//     }
// }, 1500)


// console.log(`타이머2 시작`);
// let count2 = 0;
// const timerId2 = setInterval(() => {
//     count2++;
//     console.log(`[타이머2] ${count2}번째 자동 실행`);

//     if(count2 === 5) {
//         console.log(`타이머 2 종료`);
//         clearInterval(timerId2);
//     }
// }, 1000)

// const str = 'Hello World';
// console.log(str);

// const str2 = new String('Hello World2');
// console.log(str);

// const msg = `Life is too short, you need Javascript`;
// console.log(`문자열 : ${msg}`);

// const len = str.length
// console.log(len);

// const str2nd = msg.charAt(1);
// console.log(str2nd);

// console.log(`두 번째 글자 : ${str[1]}`);

// console.log(msg.indexOf('too'));

// console.log(str.indexOf('o', 5))

// console.log(msg.lastIndexOf('r'));

// console.log(msg.substring(5,11))

// console.log(msg.toUpperCase());
// console.log(msg.toLowerCase());

// console.log(('   웅냥냥   ').trim());

// console.log(('웅,냥,냥').split(','));

// console.log(msg.replace('Javascript', '자바스크립트'));

// console.log(('웅,냥,냥').replaceAll(',','%'));


// let max = Math.max(1, 2, 3, 4, 5);
// console.log(max);

// console.log(Math.min(1, 2,3, 4, 5));

// console.log(Math.round(3.14));

// console.log(Math.ceil(3.14));
// console.log(Math.floor(3.14));

// console.log(Math.abs(-1));

// console.log(Math.random());

// function random(x, y) {
//     return parseInt(Math.random() * (y - x + 1)) + x;
// }

// console.log(random(2, 9));

// let str = ""
// for (i = 0; i < 6; i++) {
//     str += random(1, 9)
// };

// console.log(str)

// const days = ['일', '월', '화', '수', '목', '금', '토'];

// const date1 = new Date();
// console.log(date1);
// console.log(date1.getFullYear());
// console.log(date1.getMonth());
// console.log(date1.getDate());
// console.log(date1.getDay());


// console.log(date1.getHours());
// console.log(date1.getMinutes());

// console.log(date1.toDateString());
// console.log(date1.toISOString());

// console.log(date1.toLocaleString);
// console.log(date1.toLocaleString('ko-KR'));

// console.log(date1.toLocaleDateString());
// console.log(date1.toLocaleTimeString());


// const date1 = new Date();
// const ts1 = date1.getTime();
// console.log(ts1);


// const prevDay = new Date(date1.getFullYear(), 0, 1);
// const ts2 = prevDay.getTime();
// const tmp1 = ts1 - ts2

// const day1 = Math.floor(tmp1 / (24 * 60 * 60 * 1000))
// console.log(`올해는 ${day1}일 지났습니다.`);


// const nextDay = new Date(date1.getFullYear(), 11, 31);
// const ts3 = nextDay.getTime();
// const tmp2 = ts3 - ts1;

// const day2 = Math.ceil(tmp2 / (24 * 60 * 60 * 1000));
// console.log(`올해는 ${day2}일 남았습니다.`);


// const a = date1.getDate() + 50;
// date1.setDate(a);
// console.log(date1.toLocaleString());


// const b = date1.getDate() -100
// date1.setDate(b);


// const today = new Date();
// today.setDate(1);

// const start = today.getDay();
// console.log(start);

// const a = today.getMonth();
// today.setMonth(a+1);
// today.setDate(0);
// const last = today.getDate()
// console.log(last);


// const calender = new Array(6);
// for (let i = 0; i < calender.length; i++) {
//     calender[i] = new Array(7);
// }

// console.log(calender);

// let count = 1;
// for (let i = 0; i < calender.length; i++) {
//     for (let j = 0; j < calender[i].length; j++) {
//         if (i === 0 && j < start || count > last) {
//             calender[i][j] = 0;
//         } else {
//             calender[i][j] = count;
//             count++;
//         }
//     }
// }

// console.log(calender);


// for (let i = 0; i < calender.length; i++) {
//     let str =""
//     for (let j = 0; j < calender[i].length; j++) {
//         str += (calender[i][j] === 0 ? '\t' : (calender[i][j]+'\t'));
//     }
//     console.log(str);
// }

let a = new Number(123);
let b = 123;

console.log(a);
console.log(b);
console.log(typeof a);
console.log(typeof b);
console.log(a == b);
console.log(a === b)


let c = Number('123');
console.log(c);
console.log(typeof c);
console.log(c === 123);