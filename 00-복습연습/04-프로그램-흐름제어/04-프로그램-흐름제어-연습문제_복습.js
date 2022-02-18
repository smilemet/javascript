// 문제 1
const math = 'b';

switch (math) {
    case 'a':
    case 'b':
    case 'c':
        console.log(`이 과목을 Pass 했습니다.`)
        break;
    default:
        console.log(`이 과목을 Pass 하지 못했습니다.`)
        break;
}


if (math === 'a' || math ==='b' || math ==='c') {
    console.log('이 과목을 Pass 했습니다.');
} else {
    console.log('이 과목을 Pass하지 못했습니다.')
}


// 문제 2
let i = 1;
let k = 2;
while (i < 11) {
    console.log(`이진수 ${i}개는 ${k}개의 정보를 표시 가능`)
    i++;
    k *= 2;
}


// 문제 3
let k2 = 2;
for(let i = 1; i < 11; i++) {
    console.log(`이진수 ${i}개는 ${k2}개의 정보를 표시 가능`)
    k2 *= 2;
}
