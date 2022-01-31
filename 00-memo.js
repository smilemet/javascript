// 06 배열 복습

// let myArr = [1, 2, 3, 4, "오", "six"];
// console.log(myArr);

// const len = myArr.length;
// console.log(len);

// let myArr2 = [5];
// console.log(myArr2);

// let myArr3 = new Array(5);
// console.log(myArr3);

// const testArr;
// testArr = [ "test", 1, 2, 3];



// let myArr = [1, 2, 3.14, true, false, "hello", "world"];
// console.log(myArr[0]);
// console.log(myArr[2]);
// console.log(myArr[4]);
// console.log(myArr[6]);
// console.log(myArr[7]);



// let myArr1 = [1, 3.1, true, "hello"];
// // console.log("[0]=%d, [1]=%d, [2]=%s",myArr1[0], myArr1[1], myArr1[2]);

// let myArr1 = [100];
// console.log(myArr1); // [ 100 ]

// let item1 = myArr1[0];
// console.log(item1); // 100

// let item2 = myArr1[1];
// console.log(item2); // undefined



// if (item2 !== undefined) {
//     console.log("1번째 원소 존재함");
// } else {
//     console.log("1번째 원소 존재하지 않음");
// }
// // 1번째 원소 존재하지 않음

// let [a, b] = myArr1;
// console.log(a); // 100
// console.log(b); // undefined



// 반복문의 활용
// const myArr = new Array(5);
// console.log(myArr);

// const len = myArr.length;
// console.log(len);

// for (let i = 0; i < len; i++) {
//     myArr[i] = i * 10;
// }
// console.log(myArr);



// const data = [10, 20, 30, 40, 50];

// let sum = 0;
// for(let i = 0; i < data.length; i++) {
//     sum += data[i];
// }

// console.log(sum);

// const avg = sum / data.length;
// console.log(avg);



// const data = [5, 2, 17, 9, 2];

// let max = data[0];
// for (let i = 1; i < data.length; i++) {
//     if(max > data[i]) {
//         max = data[i];
//     }
// }
// console.log(max);



// const data = [20, 13, 12, 9, 2];
// const p = parseInt(data.length/2)

// for(let i = 0; i < p; i++) {
//     const k = data.length - 1 - i;
//     const tmp = data[i];
//     data[i] = data[k];
//     data[k] = tmp;
// }

// console.log(data);



// const data = [20, 13, 12, 9, 2];

// for(let i = 0; i < data.length - 1; i++) {
//     for(let j = i + 1; j < data.length; j++) {
//         if(data[i] > data[j]) {
//             const tmp = data[i];
//             data[i] = data[j];
//             data[j] = tmp;
//         }
//     }
    
// }
// console.log(data);



// const a = [1, 2, 3];
// const b = [4, 5, 6];
// const myArr1 = [a, b];
// console.log(myArr1);

// const myArr2 = [
//     [1, 2, 3], 
//     [4, 5, 6]
// ];
// console.log(myArr2);

// console.log(myArr1[0][0]); 
// console.log(myArr1[0][1]); 
// console.log(myArr2[0][2]);
// console.log(myArr1[1][0]); 
// console.log(myArr1[1][1]); 
// console.log(myArr2[1][2]);


// const c = new Array(10, 20, 30);
// const d = new Array(40, 50, 60);
// const myArr3 = new Array(c, d);
// console.log(myArr3);

// const myArr4 = new Array(
//     new Array(10, 20, 30),
//     new Array(40, 50, 60)
// );
// console.log(myArr4);



// const myArr = [
//     [1, 2, 3],
//     [4, 5, 6]
// ];

// console.log(myArr.length); // 2, 겉 배열의 길이

// console.log(myArr[0].length); // 3, 첫번째 속 배열의 길이
// console.log(myArr[1].length); // 3, 두번째 속 배열의 길이


// for(let i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
//     for(let j = 0; j < myArr[i].length; j++) {
//         console.log(myArr[i][j]);
//     }
// }



// const a = [1, 3, 5, 7, 9];
// const b = [2, 4, 6];

// const data = [a, b];
// console.log(data);

// for(let i = 0; i < data.length; i++) {
//     for(let j = 0; j < data[i].length; j++){
//         console.log(data[i][j]);
//     }
// }



// const grade = [
//     ["철수", 92, 81, 76],
//     ["영희", 72, 95, 84],
//     ["민혁", 80, 86, 98],
// ];

// let sum = 0; // 이 위치에서 변수 초기화 → 모든 학생의 총점

// for(let i = 0; i < grade.length; i++) {
//     let p_sum = 0; 
//     // 이 위치에서 변수 초기화 → 각 학생의 총점(i 영향)
    
//     for(let j = 1; j < grade[i].length; j++) {
//         sum += grade[i][j];
//         p_sum += grade[i][j];
//     }

//     const p_avg = p_sum / grade[i].length - 1;
//     console.log("%s의 과목 총점 = %d, 평균 = %d", grade[i][0], p_sum, p_avg)
// }

// console.log("전체 학생 점수 총점 = %d", sum);



// const data = new Array (6);
// for(let i = 0; i < data.length; i++) {
//     data[i] = new Array (7);
// }

// console.log(data);


// let counter = 1;
// for(let i = 0; i < data.length; i++) {
//     for(let j = 0; j < data[i].length; j++) {
//         if(i === 0 && j < 3 || counter > 30) {
//             data[i][j] = 0;
//         } else {
//             data[i][j] = counter++;
//         }
//     }
// }

// console.log(data);


// for(let i = 0; i < data.length; i++) {
//     let str=""
//     for (let j = 0; j < data[i].length; j++) {
//         if(data[i][j] === 0) {
//             str += "\t";
//         } else {
//             str += data[i][j] + "\t";
//         }
//     }
//     console.log(str);
// }



console.group("1차 배열의 탐색");
    const data = [4, 5, 2, 1, 3];
    for (const item of data) {
        console.log(item);
    }
console.groupEnd();


console.group("2차 배열의 탐색");
    const myArr = [
        [1, 2, 3],
        [4, 5, 6]
    ];

    for(let item of myArr) {
        console.log(item);
        
        for(let sub of item) {
            console.log(sub);
        }
    }
console.groupEnd();