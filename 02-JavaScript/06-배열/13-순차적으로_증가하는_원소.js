
const data = new Array (6);
for(let i = 0; i < data.length; i++) {
    data[i] = new Array (7);
}

console.log(data);


let counter = 1;
for(let i = 0; i < data.length; i++) {
    for(let j = 0; j < data[i].length; j++) {
        if(i === 0 && j < 3 || counter > 30) {
            data[i][j] = 0;
        } else {
            data[i][j] = counter++;
        }
    }
}

console.log(data);


for(let i = 0; i < data.length; i++) {
    let str=""
    for (let j = 0; j < data[i].length; j++) {
        if(data[i][j] === 0) {
            str += "\t";
        } else {
            str += data[i][j] + "\t";
        }
    }
    console.log(str);
}