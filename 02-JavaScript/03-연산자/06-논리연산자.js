/** 1) and */
// --> 전체가 참인 경우만 결과가 참.
console.group("1) and");
    console.log(true && true); // t
    console.log(true && false); // f
    console.log(false && true); // f
    console.log(false && false); // f
console.groupEnd();

/** 2) and 연산 여러 개 사용 */
console.group("2) and 연산 여러 개 사용");
    console.log(true && true && true); // t
    console.log(true && true && false); // f
    console.log(false && false && true); // f
    console.log(false && true && true); // f
console.groupEnd();

/** 3) or */
// --> 하나라도 참이 포함되어 있다면 결과는 참
console.group("3) or");
    console.log(true || true); // t
    console.log(true || false); // t
    console.log(false || true); // t
    console.log(false || false); // f
console.groupEnd();

/** 4) or 연산 여러 개 사용 */
console.group("4) or연산 여러 개 사용");
    console.log(true || true || true); // t
    console.log(true || true || false); // t
    console.log(false || false || true); // t
    console.log(false || true || true); // t
console.groupEnd();

/** 5) 복합사용 */
console.group("5) 복합사용");
// AND가 OR보다 항상 우선한다
console.log (true && true || true); // t
console.log (true && true || false); // t
console.log (false && false || true); // t
console.log (false && true || true); // t

console.log (true || true && true); // t
console.log (true || true && false); // t
console.log (false || false && true); // f
console.log (false || true && true); // t
console.groupEnd();

/** 6) not */
console.group("6) not");
let success = true;
let fail = !success;
console.log(fail); // f

let k = 1;
console.log(!k); // f

let l = 0;
console.log(!l); // t

let str1 = 'Hello';
console.log(!str1); // f

let str2 = '';
console.log(!str2); // t
console.groupEnd();