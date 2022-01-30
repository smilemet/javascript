// 1. 
// for(let i = 9; i > -1; i--) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }


// 2.
// let i = 9;
// while(i > -1) {
//     if(i % 2 !== 0) {
//         console.log(i)
//     }
//     i--;
// }


// 3.
// let x = 0;
// for(let i = 1; i < 20; i++) {
//     if(i % (2 || 3) === 0) {
//         console.log(i);
//         x += i;
//     }
// }
// console.log(x);


// 4.
// let x = 0;
// for(let i = 1; i < 6; i++) {
//     let j = 6 - i;
//     console.log("[ %d, %d ]", i, j);
//     x++;
// }
// console.log("경우의 수는 %d개 입니다.");


// 5.
// for(let i = 0; i < 9; i++) {
//     let x = "";
//     for(let j = i; j < 4 + i; j++) {
//         x += j + " ";
//     }
//     console.log(x);
// }


// 6. 

// for(let i = 1; i < 8; i++) {
//     let str = ""
//     for(let j = 1; j < i + 1; j++) {
//         str += j;
//     }
//     console.log(str);
// }


// 7. 

// let number = 1 || 2;
// number = 2;


// for(let i = number + 1; i < 10; i+= 2) {
//     for(j = 1; j < 10; j++) {
//         console.log("%d x %d = %d", i, j, i*j);
//     }
// }


for (let i = 0; true; i++) {
    if (i % 2 === 0) {
        continue;
    }
    if ( i > 10 ) {
        break;
    }
    console.log("Hello World ::: %d", i);
}

