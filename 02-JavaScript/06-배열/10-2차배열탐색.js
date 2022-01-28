const myArr = [
    [1, 2, 3],
    [4, 5, 6]
]

console.log(myArr.length); // 2

console.log(myArr[0].length); // 3
console.log(myArr[1].length); // 3

for (let i = 0; i < myArr.length; i++) {
    console.group(i + "번째 행 ---------");
    console.log(myArr[i]);

    for (let j = 0; j < myArr[i].length; j++) {
        console.log(myArr[i][j]);
    }
    console.groupEnd();
}