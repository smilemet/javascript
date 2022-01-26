let x = 0;

for(let i = 1; i <= 10; i++) {
    x += i;
    console.log("i=%d / 누적합=%d", i, x);
}

console.log("1부터 10까지의 합: ", x);
