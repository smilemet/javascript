// 기본 데이터 타입
const num = 123;
const str = "hello";
const bool = true;

//추후 살펴보게 될 테이터 타입
const obj = "나중에 하자"

console.group("숫자값 출력하기")
    console.log("숫자값 출력하기 = %d", num);
    console.log("숫자값 출력하기 = %d", str);
    console.log("숫자값 출력하기 = %d", bool);
console.groupEnd();


console.group("문자열 출력하기")
console.groupEnd();

console.group("객체 출력하기")
console.groupEnd();

console.group("JSON 출력하기")
console.groupEnd();


const student = "자바스크립트학생";
const age = 20;
console.group("복합사용");
    console.log("%s님의 나이는 %d세 입니다.", student, age);
console.groupEnd();
