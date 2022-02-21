// console.log(undefined + 1);

// function bar (x = 1, y = 2) {
//     console.log(`x=${x}, y=${y}`);
//     let result = x + y;
//     console.log(`result = ${result}`);
// };


// bar(100, 200);
// bar(100);
// bar();


// const foo = (x) => {
//     for (let i = 0; i < x; i++) {
//         console.log('Hello World');
//     }
// }

// foo(3)


// const foo = x => x + 100;
// console.log(foo(100));


// function something (x, y, cb) {
//     const result = cb(x, y);
//     console.log(`${x}와 ${y}의 연산 결과는 ${result}입니다.`);
// }

// function plus (a, b) {
//     return a + b;
// }

// something(1, 2, plus);


// something(10, 20, (x, y) => {
//     return x - y;
// })

// somethis(5, 7, (a, b) => console.log(a + b))


// function f (x) {
//     if (x <= 1) {
//         return 1;
//     } else {
//         return x * f(x-1);
//     }
// }

// console.log(f(5))


// function gugu(level, depth = 1) {
//     if (depth > 9) {
//         return;
//     } else {
//         console.log(`${level} x ${depth} = ${level*depth}`);
//         gugu(level, ++depth);
//     }
// }

// gugu(5)


// function f (x) {
//     if (x <= 2) {
//         return 1;
//     } else {
//         return f(x-1) + f(x-2);
//     }
// }

// console.log(f(6))


