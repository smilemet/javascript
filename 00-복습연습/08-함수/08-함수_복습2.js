// function something(x, y, cb) {
//     const result = cb(x, y);
//     console.group(cb);
//     console.log(`${x}와 ${y}의 연산 결과는 ${result}`);
//     console.groupEnd();
// };

// function plus(a, b) {
//     return a + b;
// };

// function  minus(a, b) {
//     return a - b;
// };


// something(100, 50, plus);
// something(100, 50, minus);

// console.log(plus)

// something(100, 50, function(x, y) {
//     return x / y;
// });

// something(100, 50, (x, y) => x / y);


// function recursive(x) {
//     if(x <= 1) {
//         console.log(1)
//         return 1;
//     } else {
//         console.log(`${x} * recursive(${x-1})`);
//         return x * recursive(x-1);
//     }
// }

// console.log(recursive(5));


// function gugu(x, y=1) {
//     if (y > 9) {
//         return;
//     }
//     console.log(`${x} x ${y} = ${x*y}`);
//     gugu(x, ++y);
// }

// gugu(5);


// function fibonacci(x) {
//     if(x < 3) {
//         return 1;
//     } else {
//         return fibonacci(x-1) + fibonacci(x-2);
//     }
// }

// console.log(fibonacci(10));



// function printStar(max) {
//     for (i = 0; i < max; i++) {
//         let str = "";
//         for (j = 0; j < i + 1; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// };

// printStar(5);



// function printRevStar(max) {
//     for (i = 0; i < max; i++) {
//         let str = "";
//         for (j=0; j < max - i; j++) {
//             str += "*";
//         }
//         console.log(str);
//     }
// };

// printRevStar(5);


// function myGame(n) {
//     for (i = 1; i < n+1; i++) {
//         let str = i + "";
//         let clap = ""
//         let count = 0;

//         for(s of str) {
//             if(s === '3' || s === '6' || s === '9') {
//                 count++;
//                 clap += "짝"
//             }
//         }

//         if (count !== 0) {
//             console.log(`${clap}(${i} --> ${count}번)`);
//         } else {
//             console.log(i);
//         }
//     }
// }

// myGame(35);



// function printStar(x, y=1) {
//     let str = ""
//     if (x < y) {
//         return;
//     }

//     for(i = 0; i < y; i++) {
//         str += "*"
//     }
    
//     console.log(str);
//     return printStar(x, y + 1)
// };

// printStar(5)


// function printRevStar(x, y=1) {
//     let str = ""
//     if (x < y) {
//         return;
//     }

//     for(i = 0; i < x - y + 1; i++) {
//         str += "*"
//     }
    
//     console.log(str);
//     return printRevStar(x, y + 1)
// };

// printRevStar(5)


