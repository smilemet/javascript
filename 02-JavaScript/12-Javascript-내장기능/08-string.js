/**
 * 문자열 처리
 * 
 * 문자열은 그 자체가 객체
 * 객체라는 것은 안에 멤버변수(프로퍼티)와 메서드(함수)가 내장되어 있음을 의미
 * 그러므로 일반적으로 생성하는 문자열 변수 안에는 메서드와 프로퍼티가 자동 내장됨
 * 
 * const foo = 'Hello World';
 * foo.메서드()
 * 
 * 문자열 객체에 내장된 메서드는 변수 내용을 가공하거나 특정 내용을 추출하는 기능
 * 이 기능들의 공통점은 원본 내용은 절대 변하지 않으면서 가공 결과를 리턴한다는 점
 */

// 변수 형식으로 문자열 만들기
const str1 = 'Hello World';
console.log(str1);

// 객체 생성 방식으로 문자열 만들기
const str2 = new String('Hello Javascript');
console.log(str2);

// 기능을 확인하기 위한 문자열의 선언
const msg = 'Life is too short, you need Javascript.';
console.log(`문자열 : ${msg}`);

// 문자열의 글자 수를 가져온다.
// --> 공백과 특수문자 포함
const len = msg.length;
console.log(`문자열의 길이 : ${len}`); // 문자열의 길이 : 39

// 파라미터로 설정된 위치의 글자를 리턴한다.
// --> 위치는 0부터 카운트
const str2nd = msg.charAt(1);
console.log(`두 번째 글자 : ${str2nd}`); // 두 번째 글자 : i

// 모든 문자열은 그 자체로 배열처럼 취급될 수 있다.
console.log(`두 번째 글자 : ${msg[1]}`); // 두 번째 글자 : i

// 파라미터로 전달된 내용이 처음 나타나는 위치를 리턴한다.
const p1 = msg.indexOf('f');
console.log(`f가 처음 나타나는 위치 : ${p1}`); // f가 처음 나타나는 위치 : 2

// ↑ 찾지 못한 경우 -1을 반환한다.
console.log(`z가 처음 나타나는 위치 : ${msg.indexOf('z')}`); // z가 처음 나타나는 위치 : -1

// 단어나 문장으로 검색할 경우 일치하는 내용이 시작되는 첫 글자의 위치를 반환
console.log(`'short'가 처음 나타나는 위치 : ${msg.indexOf('short')}`); // 'short'가 처음 나타나는 위치 : 12

// indexOf에 파라미터가 두 개인 경우,
// 두 번째 숫자 값은 첫 번째 파라미터의 글자를 찾기 시작하는 위치를 의미한다.
const p2 = msg.indexOf('i');
const p3 = msg.indexOf('i', p2+1);
console.log(`'i'가 첫 번째로 나타나는 위치 : ${p2}`); // 'i'가 첫 번째로 나타나는 위치 : 1
console.log(`'i'가 두 번째로 나타나는 위치 : ${p3}`); // 'i'가 두 번째로 나타나는 위치 : 5

// 파라미터로 전달된 글자가 마지막으로 나타나는 위치를 리턴한다.
// 단 이 위치를 문자열의 끝에서부터 세는 것이 아니라 문자열의 처음부터 센다.
// 찾지 못할 경우 -1 리턴.
const p4 = msg.lastIndexOf('a');
console.log(`'a'의 마지막 위치 : ${p4}`); // 'a'의 마지막 위치 : 31

// 응용
if (msg.indexOf('Hello') > -1) {
    console.log('Hello가 포함됨');
} else {
    console.log('Hello가 포함되지 않음');
} // Hello가 포함되지 않음

// 잘라내기 위한 시작 위치와 끝 위치를 파라미터로 설정한다.
// 지정된 끝 위치의 직전 글자까지만 잘라낸다.
const substring1 = msg.substring(0, 17);
console.log(`문자열 자르기 : ${substring1}`); // 문자열 자르기 : Life is too short

// 두 번째 파라미터가 없을 경우 지정된 위치부터 끝까지 자른다.
const substring2 = msg.substring(19);
console.log(`문자열 자르기 : ${substring2}`); // 문자열 자르기 : you need Javascript.

// 모든 글자를 대문자로 변환한다.
const up = msg.toUpperCase();
console.log(`모든 글자의 대문자 변환 : ${up}`); // 모든 글자의 대문자 변환 : LIFE IS TOO SHORT, YOU NEED JAVASCRIPT.

// 모든 글자를 소문자로 변환한다.
const low = msg.toLowerCase();
console.log(`모든 글자의 소문자 변환 : ${low}`); // 모든 글자의 소문자 변환 : life is too short, you need javascript.

// 문자열의 앞/뒤 공백 지우기
const src1 = '    Hello World     ';
const src2 = src1.trim();
console.log(src1); //     Hello World     
console.log(src2); // Hello World

// 문자열에 포함된 구분자를 기준으로 문자열을 잘라 배열로 반환한다.
const txt = 'HTML, CSS, Javascript';
const arr = txt.split(',');
console.log(arr); // [ 'HTML', ' CSS', ' Javascript' ]

// 첫 번째 파라미터의 내용을 두 번째 파라미터로 변경한 결과를 반환한다.
// 첫 번째 파라미터와 일치하는 내용이 둘 이상 존재할 경우 첫 번째 항목만 변경한다.
const txt2 = txt.replace(',', '$');
console.log(txt2); // HTML$ CSS, Javascript

const test = 'Hello Javascript, World Javascript';
console.log(test.replaceAll('Javascript', '자바스크립트')); // Hello 자바스크립트, World 자바스크립트