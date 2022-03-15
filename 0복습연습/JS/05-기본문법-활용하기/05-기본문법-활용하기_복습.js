// console.group(`예제`)
// let addSum = 0;
// let evenSum = 0;

// for(let i = 1; i < 11; i++) {
//     if((i % 2) === 0) {
//         console.log(`${i}는 짝수`);
//         evenSum += i;
//     } else {
//         console.log(`${i}는 홀수`);
//         addSum += i;
//     }
// }
// console.log(addSum);
// console.log(evenSum);
// console.groupEnd();


// console.group(`예제`)
// let sum = 0;
// for (let i = 1; i < 101; i++) {
//     if((i % 3) === 0 && (i % 5) === 0) {
//         sum += i;
//         console.log(`공배수 발견: ${i}`)
//     }
// }
// console.log(sum);
// console.groupEnd();


// console.group(`예제`)
// let str = ""
// for(let i = 1; i < 10; i++) {
//     str += i
//     if(i < 9) {
//         str += ", "
//     }
// }
// console.log(str)
// console.groupEnd();


// console.group(`예제`)
// for(let i = 2; i < 10; i++) {
//     for(let j = 1; j < 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }


// console.groupEnd();
// for(let i = 0; i < 5; i++) {
//     console.log(`i에 대한 반복 수행 시작 >> i=${i}`)
//     for(let j = 0; j < i + 1; j++) {
//         console.log(`i=${i}, j=${j}`)
//     }
// }

// console.group(`예제`)
// for (let i = 0; i < 5; i++) {
//     let str = ""
//     for (let j = 0; j < i + 1; j++) {
//         str += "*"
//     }
//     console.log(str)
// }

// console.groupEnd();


console.group(`예제`)
for (let i = 0; i < 5; i++) {
    let str = ""
    for (let j = 0; j < 5 - i; j++) {
        str += "*"
    }
    console.log(str)
}
console.groupEnd();


console.group(`예제`)
let y = 0;
while (true) {
    y++;
    if(y % 2 === 0) {
        continue;
    }
    if(y > 10) {
        break;
    }
    console.log(`Hello world ::: ${y}`);
}
console.groupEnd();


console.group(`예제`)
for(let i = 0; true; i++) {
    if ((i % 2) === 0) {
        continue;
    }
    if (i > 10) {
        break;
    }
    console.log(`Hello world ::: ${i}`)
}
console.groupEnd();


console.group(`예제`)

console.groupEnd();


console.group(`예제`)

console.groupEnd();