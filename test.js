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
let x = 0;
for(let i = 1; i < 6; i++) {
    let j = 6 - i;
    console.log("[ %d, %d ]", i, j);
    x++;
}
console.log("경우의 수는 %d개 입니다.", x);