// JSON 정의
const m3 = {
    userName: '철민',
    email: 'chulmin@naver.com'
}

// m3와 같은 구조를 같는 m4를 정의
const m4 = m3;

console.log(m3);
console.log(m4);

// 값의 변경
m3.userName = "민수";
m3.email = "ms@gmail.com";

// 객체간의 복사는 서로 영향을 준다.
// 객체끼리의 대입은 복사X 참조이므로 
// 원본의 데이터 변경 시 복사본도 함께 변경된다. (반대도 동일)

console.log(m3);
console.log(m4);