function getTimes(x, y) {
    const z = x * y;
    return z;
}

const a = getTimes(123, 45);
console.log(a); // 5535

const b = getTimes(123, 45) + 10000;
console.log(b); // 15535

console.log(getTimes(100, 20)); // 2000