/**
 * 배열을 탐색하는 방법
 */

// 테스트를 위한 배열
const arr = [10, 20, 30, 40, 50];


// 배열에 대한 반복 처리(1) - 배열의 원소 스캔하기
for (let i = 0; i < arr.length; i++) {
    if (i === 3) {
        console.log(` ~~~ 반복중단!!!`);
        break;
    }
    console.log(`${i}번째 원소 ==> ${arr[i]}`);
}

console.log(`---------------`);

// 콜백함수에게 배열의 값과 인덱스를 전달한다.
// 콜백함수는 원소의 수 만큼 순차적으로 실행한다.
arr.forEach((v, i) => {
    if (i === 3) {
        console.log(` ~~~ 반복중단!!!`);
        // 콜백함수 역시 함수이므로 break를 사용해서 중단할 수 없다 (for과 while에서만 사용)
        // break; 
        // forEach의 콜백함수에서 반복을 중단하고자 return을 사용할 경우 현재 동작중인 콜백만 종료될 뿐 전체 반복에는 영향 X
        return;
    }
    console.log(`${i}번째 원소 ==> ${v}`); // 4번째 원소까지 출력하게 됨
});

console.log(`---------------`);


// -> 반복문이 중단될 일 없을 때 forEach 사용
// -> 반복문을 돌다가 조건에 따라 중단하게 하고 싶으면 some


// 배열에 대한 반복 처리(2) - 탐색 중단
arr.some((v, i) => {
    // some함수는 콜백함수가 true를 리턴하는 순간 순환을 중단한다.
    if (i === 3) {
        console.log(` ~~~ 반복 중단!!!`);
        return true;
    }
    console.log(`${i}번째 원소 ==> ${v}`);
});

console.log(`---------------`);



// 배열에 대한 반복 처리(3) - 콜백함수에서 리턴하는 값들을 하나의 배열로 묶기
// 1) 전통적인 방법
const d1 = [];
for (let i = 0; i < arr.length; i++) {
    // 배열의 맨 뒤에 새로운 원소 추가 ==> 확장
    if (arr[i] % 4 === 0) {
        d1.push(arr[i]);
    }
}
console.log(d1);


// forEach를 사용하는 방법
const d2 = [];
arr.forEach((v, i) => {
    if (v % 4 === 0) {
        d2.push(v);
    }
});
console.log(d2);



// map 배열을 복사하는 데 사용. 가공도 가능함
// map 함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 hello에 저장
const hello = arr.map(function(v, i) {
    return v + 1;
});

// 콜백함수를 화살표 함수로 변환
const hello2 = arr.map((v, i) => {
    return v + 1;
});

// 화살표 함수는 처리로직이 한줄인 경우 {}와 ;, return 키워드 생략 가능
const hello3 = arr.map((v, i) => v + 1);

console.log(hello3); // [ 11, 21, 31, 41, 51 ]