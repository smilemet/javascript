// 원소값을 무작위로 갖는 배열
const data = [5, 2, 7, 9, 2];

// 비교를 위해 배열의 첫 번째 원소를 복사
let max = data[0];

// 1번째 이후 원소부터 마지막 원소까지 반복

for(let i = 1; i < data.length; i++) {
    console.log("max = %d, data[%d]=%d", max, i, data[i]);
    if(max < data[i]) {
        console.log(">> max에 " + data[i] + "를 복사");
        max = data[i];
    }

}
console.log("---------")
console.log("최대값 = " + max);


// 부등호 방향에 따라 최대값이냐, 최소값이냐가 갈린다.


const data = [5, 2, 7, 9, 2];
let max = data[0];

for(i = 1; i < data.length; i++) {
    if(max < data[i]) {
        max = data[i];
    }
}


console.log("최대값 = %d", max);