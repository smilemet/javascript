const today = new Date();

today.setDate(1);
const startDay = today.getDay();
console.log(startDay);

const m = today.getMonth();
today.setMonth(m + 1);
today.setDate(0);
const lastDate = today.getDate();
console.log(lastDate);



const data = new Array(6);
for(let i = 0; i < data.length; i++) {
    data[i] = new Array(7);
}

let counter = 1;

for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
        if (i === 0 && j < startDay || counter > lastDate) {
            data[i][j] = 0
        } else {
            data[i][j] = counter
            counter++;
        }
    }
}

console.log(data);


for (const d of data) {
    let str = ""
    for (const a of d) {
        if (d === 0) {
            str += ' \t';
        } else {
            str += a + ' \t'
        }
    }
    console.log(str);
}

// for (let i = 0; i < data.length; i++) {
//     let str = ""
//     for (let j = 0; j < data[i].length; j++) {
//         if (data[i][j] === 0) {
//             str += '\t'
//         } else {
//             str += data[i][j] + '\t'
//         }
//     }
//     console.log(str);
// }


// data.forEach((v) => {
//     let str = ""
//     v.forEach((v2) => {
//         if (v2 == 0) {
//             str += '\t';
//         } else {
//             str += v2 + '\t'
//         }
//     })
//     console.log(str);
// })