// const data = [9, 7, 5, 3, 1];

// const p = parseInt(data.length/2);

// for (let i = 0; i < p; i++) {
//     tmp = data[i];
//     data[i] = data[data.length-1];
//     data[data.length-1] = tmp;
// }

// console.log(data);



// let myArr = [[1, 2, 3], [4, 5, 6]];
// console.log(myArr);


// let myArr2 = new Array (
//     new Array(1, 2, 3),
//     new Array(4, 5, 6)
// )

// console.log(myArr2);



// const myArr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// for (let i = 0; i < myArr.length; i++) {
//     console.group(`${i}번째 행 -----`)
//         for (let j = 0; j < myArr[i].length; j++) {
//             console.log(myArr[i][j]);
//         }
//     console.groupEnd();
// }



const data = new Array(6);
for (let i = 0; i < data.length; i++) {
    data[i] = new Array(7);
}

console.log(data);


let counter = 0;
for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i === 0 && i < 3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}
console.log(data);

for (let i = 0; i < data.length; i++) {
    let str = ""
    for (let j = 0; j < data[i].length; j++) {
        if(data[i][j] === 0 ) {
            str += "\t";
        } else {
            str += data[i][j] + "\t";
        }
    }   
    console.log(str)
}
