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



// const data = new Array(6);
// for (let i = 0; i < data.length; i++) {
//     data[i] = new Array(7);
// }

// console.log(data);


// let counter = 0;
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         if (i === 0 && i < 3 || counter > 30) {
//             data[i][j] = 0;
//         } else {
//             data[i][j] = counter++;
//         }
//     }
// }
// console.log(data);

// for (let i = 0; i < data.length; i++) {
//     let str = ""
//     for (let j = 0; j < data[i].length; j++) {
//         if(data[i][j] === 0 ) {
//             str += "\t";
//         } else {
//             str += data[i][j] + "\t";
//         }
//     }   
//     console.log(str)
// }



// const price = [38000, 20000, 17900, 17900];
// const qty = [6, 4, 3, 5];
// let count = 0;

// for (let i = 0; i < price.length; i++) {
//     (price[i]*qty[i]>=80000 ? count++ : count; )
// }
// console.log(count);


// const student = ['둘리', '도우너', '또치', '희동'];
// const grade = [
//     [78, 89, 96],
//     [62, 77, 67],
//     [54, 90, 80],
//     [100, 99, 98],
// ];

// let classSum = 0;
// for(let i = 0; i < grade.length; i++) {
//     let sum = 0;
//     for(let j = 0; j < grade[i].length; j++) {
//         sum += grade[i][j];
//     }
//     let avg = sum/grade[i].length
//     classSum += avg;
//     console.log(`%s 총점: %d점, 평균: %d점`, student[i], sum, avg.toFixed(2));
// }
// let classAvg = classSum/student.length;
// console.log(`반 평균 = %d점`, classAvg.toFixed(2))


// const inven = [
//     [500, 291],
//     [320, 586],
//     [100, 460],
//     [120, 558],
//     [92, 18],
//     [30, 72]
// ]

// let price = 0;
// for (i of inven) {
//     price += i[0]*i[1]*0.9;
// }

// console.log(price);

const ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3]

let sum = 0;
for(let i = 0; i < ssn.length - 1; i++) {
    (i+2 < 10 ? sum += ssn[i]*(i+2) : sum += ssn[i]*(i-6))
}
let last = (11-(sum%11))%10;


console.log((ssn[12] === last%10 ? "유효" : "무효"));
