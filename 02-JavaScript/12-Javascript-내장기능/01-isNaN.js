/* isNaN(value)
파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다
-> 숫자가 아니면 true, 숫자가 맞다면 false
-> 숫자로 변환 가능한 형식일 경우 false

javascript의 다른 모든 값과 달리, NaN은 비교연산(==, ===)을 사용해 판별할 수 없다.
따라서 NaN 여부를 판별하는 함수가 필요한 것. */


// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNaN(NaN)); // 참
console.log(isNaN(undefined)); // 참
console.log(isNaN({})); // 참
console.log(isNaN('blabla')); // 참
console.log(isNaN('123ABC')); // 참

// 숫자로 변환할 수 있다고 판단하는 경우
console.log(isNaN(true)); // 거짓 --> 1
console.log(isNaN(false)); // 거짓 --> 0
console.log(isNaN(null)); // 거짓 --> 0
console.log(isNaN(37)); // 거짓
console.log(isNaN('37')); // 거짓: 문자열이 아닌 숫자 37로 변환
console.log(isNaN('37.38')); // 거짓: 문자열이 아닌 숫자 37.38로 변환
console.log(isNaN([])); // 거짓: 빈 객체는 0으로 변환
console.log(isNaN('')); // 거짓: 빈 문자열은 0으로 변환
console.log(isNaN(' ')); // 거짓: 공백만으로 구성된 문자열은 0으로 변환
