// 반드시 외울 것!!!

const data = [1, 5, 2, 4, 3];
console.log(data);

for (let i = 0; i < data.length - 1; i++) {
    for (let j = i + 1; j < data.length; j++) {
        if(data[i] > data[j]) {
            const tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}
    
console.log(data);
