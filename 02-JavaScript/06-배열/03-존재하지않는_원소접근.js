// 100이라는 하나의 원소를 갖는 한 칸으로 구성된 배열
let myArr = [100];
console.log(myArr);

// 0번째 원소를 변수에 할당하고 출력 -> OK
let item1 = myArr[0];
console.log(item1);

// 1번째 원소를 변수에 할당하고 출력 -> fail
// myArr은 1개의 원소를 갖기 때문에 인덱스 번호는 0만 존재함.

let item2 = myArr[1];
console.log(item2);    // undefined

if(item2 !== undefined) {
    console.log("1번째 원소가 존재함");
} else {
    console.log("1번째 원소가 존재하지 않음");
} // 1번째 원소가 존재하지 않음


// 비구조 문법으로 값 복사하기 **이후 react에서 중요!
let [a, b] = myArr;
console.log(a); // 100
console.log(b); // undefined

