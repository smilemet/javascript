const x = 3;
const y = 5;

let z = 0;

for(let i = 1; i <= 100; i++) {
    if((i % x === 0) && (i % y === 0)) {
        console.log(i);
        z += i;
    }
}

console.log("%d와 %d의 공배수의 총 합 : %d", x, y, z);

