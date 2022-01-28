const a = [1, 2, 3];
const b = [4, 5, 6];
const myArr1 = [a, b];
console.log(myArr1); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

var myArr2 = [ [1, 2, 3], [4, 5 ,6] ];
console.log(myArr2); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

console.log(myArr2[0][0]); // 1
console.log(myArr2[0][1]); // 2
console.log(myArr2[0][2]); // 3
console.log(myArr2[1][0]); // 4
console.log(myArr2[1][1]); // 5
console.log(myArr2[1][2]); // 6

const c = new Array(10, 20, 30);
const d = new Array(50, 60, 70);
const myArr3 = new Array(c, d);
console.log(myArr3); // [ [ 10, 20, 30 ], [ 50, 60, 70 ] ]

const myArr4 = new Array( new Array(10, 20, 30), new Array(50, 60, 70));
console.log(myArr4); // [ [ 10, 20, 30 ], [ 50, 60, 70 ] ]