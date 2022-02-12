// function something(x, y, some) {
//     const result = some(x, y);
//     console.group(some);
//     console.log(`${x}와 ${y}의 연산 결과는 ${result}`);
//     console.groupEnd();
// };


// function plus(a, b) { return a + b; };
// function minus(a, b) { return a - b; };

// something(100, 50, plus);
// something(100, 50, minus);


// something(200, 100, function(a, b) {
//     return a * b;
// });

// something(200, 100, function(a, b) {
//     return a / b;
// });


// console.group(`유형3 - 익명함수 화살표`);
// something(5, 7, (a, b) => {
//     for (let i = a; i < b; i++) {
//         console.log(`7 x ${i} = ${7*i}`);
//     }
// })
// console.groupEnd();


// something(2, 9, function (x, y) {
//     for (i = x; i < y + 1; i++) {
//         for (j = 1; j < 10; j++) {
//             console.log(`${i} x ${j} = ${i*j}`)
//         }
//     }
// })


// console.group(`유형3 - 익명함수 축약`);
// something(5, 7, (a, b) => {
//     console.log(a+b);
// });

// something(5, 7, (a, b) => console.log(a + b));
// console.groupEnd();


// function f(x) {
//     if (x < 2) {
//         return 1;
//     }
//     return x * f(x-1);
// }

// const a = f(5);
// console.log(a);


// function gugu(level, depth = 1) {
//     if (depth > 9) {
//         return;
//     } 
//     console.log(`${level} x ${depth} = ${level * depth}`);
//     gugu(level, depth+1);
// }

// gugu(5)


// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     } else {
//         return fibonacci(n-2) + fibonacci(n-1);
//     }
// }



function star(x, y) {
    for (i = 0; i < y; i++) {
        let str = "";
        for (j = 0; j < i + 1; j++) {
            str += x;
        }
        console.log(str);
    }
}

star('★', 5);


function star2(x, y) {
    for (i = 0; i < y; i++) {
        let str = "";
        for (j = 0; j < y - i; j++) {
            str += x;
        }
        console.log(str);
    }
}

star2('☆', 5);


function myGame(n) {
    for(i = 1; i < n + 1; i++) {
        const max = i + "";
        let count = 0;
        let str = ""
        for (j = 0; j < max.length; j++) {
            if (max[j] === '3' || max[j] === '6' || max[j] === '9') {
                count++;
                str += "짝"
                console.log(`${i} --> ${str}(${count})`)
            } 
        }
        if (count === 0) {
            console.log(i);
        }
    }
}

myGame(33);



function printStar(max, current = 1) {
    if(current > max) {
        return;
    } else {
        let star = "";
        for (i = 0; i < current; i++) {
            star += '*';
        }
        console.log(star);
        printStar(max, ++current);
    }
}

printStar(5);


function printStar2(max, current = 1) {
    if (current > max) {
        return;
    }
    let star = ""
    for (i = 0; i < max - current + 1; i++) {
        star += "*";
    }
    console.log(star);
    printStar2(max, ++current);
}

printStar2(5);


