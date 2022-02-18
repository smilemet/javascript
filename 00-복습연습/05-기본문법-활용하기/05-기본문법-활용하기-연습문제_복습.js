// 문제 1

for(let i = 9; i > -1; i--) {
    if(i % 2 !== 0){
        console.log(i);
    }
}


// 문제 2
let i = 9;
while (i > -1) {
    if(i % 2 !== 0) {
    console.log(i);
    }
    i--;
}


// 문제 3
let sum = 0;
for(let i = 1; i < 20; i++) {
    if(i % (2*3) === 0) {
        sum += i;
    }
}
console.log(sum);


// 문제 4
let count = 0;
for(let i = 1; i < 6; i++) {
    console.log(`[${i}, ${6-i}]`);
    count ++;
}
console.log(`경우의 수는 ${count}개 입니다.`)


// 문제 5
for (let i = 0; i < 4; i++) {
    let str = ''
    let count = i;
    for (let j = 0; j < 4; j++) {
        str += count + ' '
        count++;
    }
    console.log(str);
}


for (let i = 0; i < 4; i++) {
    let str = ""
    for (let j = 0; j < 4; j++) {
        str += i + j;
        if (j < 3) {
            str += ' '
        }
    }
    console.log(str);
}


// 문제 6
for (let i = 0; i < 7; i++) {
    let str = ''
    for (let j = 0; j < i + 1; j++) {
        str += j+1
    }
    console.log(str);
}


// 문제 7
const number = 1
let k = 0;

// number === 1? k = 3: k = 2;
// for(k; k < 10; k += 2) {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${k} x ${i} = ${k*i}`)
//     }
// }

const number2 = 2;
for (let i = (4 - number2); i < 10; i += 2) {
    for (let j = 1; j < 10; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}