/**parseInt : 괄호 안의 내용에서 소수점을 버린다. (integer)

자바스크립트는 정수와 실수를 구분하지 않으므로 정수끼리 계산해도 소수가 나올 수 있음.
그러나 다른 프로그램의 경우 정수끼리의 계산은 늘 정수가 나온다.

스왑처리 -> 강의영상 한 번 볼것
Zoom 회의 2022-01-28 17-41-50

const k 가 1씩 빼주는 이유는 인덱스 넘버가 0부터 시작하기 때문임.
*/


const data = [1, 5, 2, 4, 3];
console.log(data);

const p = parseInt(data.length/2);
console.log(p);

for (let i = 0; i < p; i++) {
    const k = data.length - i - 1;

    const tmp = data[i];
    data[i] = data[k];
    data[k] = tmp;
}

console.log(data);