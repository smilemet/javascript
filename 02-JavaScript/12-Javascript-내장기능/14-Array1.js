/** 
 * 배열의 원소를 추가, 삭제, 변경하는 방법
 */

// 테스트를 위한 배열
const data = [10, 20, 30, 40, 50];

// 배열의 맨 끝에 요소 추가 (파라미터 수 제한 없음)
data.push(60, 70);
console.log(data); // [10, 20, 30, 40, 50, 60, 70]

// 마지막 요소를 리턴하고 제거
const k = data.pop();
console.log(k); // 70
console.log(data); // [10, 20, 30, 40, 50, 60]

// 맨 앞 요소를 리턴하고 제거
const x = data.shift();
console.log(x); // 10
console.log(data); // [20, 30, 40, 50, 60]


// 맨 앞에 요소 추가 (파라미터 수 제한 X)
data.unshift(0, 10);
console.log(data); // [0, 10, 20, 30, 40, 50, 60]

// 2번째 위치부터 3개를 잘라서 반환하고 원본에서 제거
const z = data.splice(2, 3);
console.log(z); // [20, 30, 40]
console.log(data); // [0, 10, 50, 60]

// 0번째 위치부터 2개를 제거하고 그 위치에 다른 요소들을 배치함
// 제거한 수보다 추가되는 원소 수가 많을 경우 배열이 확장됨. 기존 원소는 뒤로 밀림
// 제거한 수보다 추가되는 원소 수가 적을 경우 배열이 축소됨.
data.splice(0, 2, 'a', 'b', 'c');
console.log(data); // ['a', 'b', 'c', 50, 60]
