// const data = [10, 20, 30, 40, 50];

// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//     sum += data[i];
// }

// console.log(`data의 총합 : ${sum}`);
// console.log(`data의 평균 : ${sum/data.length}`);


// const data = [ 5, 2, 7, 9, 3];

// let max = data[0];
// for(let i = 1; i < data.length; i++) {
//     if(max < data[i]) {
//         max = data[i];
//     }
// }

// console.log(max);


// const data = [ 5, 2, 7, 9, 3];
// const k = parseInt(data.length/2);
// for (let i = 0; i < k; i++) {
//     let rev = data.length - i - 1
//     let tmp = data[i]
//     data[i] = data[rev];
//     data[rev] = tmp;
// }

// console.log(data);


// const data = [1, 5, 2, 4, 3]

// for (let i = 0; i < data.length - 1; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if(data[i] > data[j]) {
//             const tmp = data[i]
//             data[i] = data[j];
//             data[j] = tmp;
//         }
//     }
// }

// console.log(data);


// const myArr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]


// for (let i = 0; i < myArr.length; i++) {
//     console.log(`${i}번째 행 --------`);
//     for (let j = 0; j < myArr[i].length; j++) {
//         console.log(myArr[i][j]);
//     }
// }


// const a = [1, 3, 5, 7, 9];
// const b = [2, 4, 6];

// const c = [a, b];

// for (let i = 0; i < c.length; i++) {
//     console.log(`${i}번째 배열을 탐색합니다.`)
//     console.log(c[i])
//     for (let j = 0; j < c[i].length; j++) {
//         console.log(c[i][j])
//     }
// }



// const grade = [
//     ["철수", 92, 81, 76],
//     ["영희", 72, 95, 84],
//     ["민혁", 80, 86, 98],
// ];

// let classSum = 0
// for (let i = 0; i < grade.length; i++) {
//     let sum = 0;
//     for (let j = 1; j < grade[i].length; j++) {
//         sum += grade[i][j];
//     }
//     console.log(`${grade[i][0]}의 과목 총점 = ${sum}, 평균 = ${(sum/(grade[i].length-1)).toFixed(2)}`);
//     classSum += sum;
// }

// console.log(`전체 학생 점수 총점 = ${classSum}`)


const calender = new Array(6);
for (let i = 0; i < calender.length; i++) {
    calender[i] = new Array(7);
}

let count = 1;
for (let i = 0; i < calender.length; i++) {
    for (let j = 0; j < calender[i].length; j++) {
        if (i === 0 && j < 3 || count > 30) {
            calender[i][j] = 0
        } else {
            calender[i][j] = count;
            count++;
        }
    }
}

console.log(calender)



for (let i = 0; i < calender.length; i++) {
    let str = ''
    for (let j = 0; j < calender[i].length; j++) {
        if (calender[i][j] === 0) {
            str += '\t';
        } else {
            str += calender[i][j] + '\t';
        }
    }
    console.log(str);
}