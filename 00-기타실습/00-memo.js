const k = 0;

if (k > 1 && k < 10) {
    for (let i = 1; i < 10; i++) {
        console.log(`${k} x ${i} = ${k*i}`);
    }
} else {
    console.log('2~9 사이의 수식만 출력합니다.')
}


let a = [1, 2, 3]

a[3] = 4

console.log(a)