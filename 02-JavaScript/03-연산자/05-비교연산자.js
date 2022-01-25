/** 1) 이상, 이하, 미만, 초과 */
let x = 100;
let y = 50;

let compare1 = x >= y;
let compare2 = x > y;
let compare3 = x <= y;
let compare4 = x < y;

console.group("1) 이상, 이하, 미만, 초과");
    console.log(compare1); // true
    console.log(compare2); // true
    console.log(compare3); // false
    console.log(compare4); // false
console.groupEnd();

/** 2) 같다 */
let a1 = "1";
let a2 = 1;
let a3 = 1.0;
let a4 = true;

console.group("2) 같다");
    console.group("내용만 비교하는 경우");
    console.log(a1 == a2); // t
    console.log(a1 == a3); // t
    console.log(a1 == a4); // t

    console.log(a2 == a3); // t
    console.log(a2 == a4); // t

    console.log(a3 == a4); //t
    console.groupEnd(); 

    console.group("데이터 타입까지 비교하는 경우");
    console.log(a1 === a2); // f
    console.log(a1 === a3); // f
    console.log(a1 === a4); // f

    console.log(a2 === a3); // t
    console.log(a2 === a4); // f

    console.log(a3 === a4); // f
    console.groupEnd();
    
console.groupEnd();

/** 3) 다르다 */
let b1 = "1";
let b2 = 1;
let b3 = 1.0;
let b4 = true;

console.group("3) 다르다");
    console.group("내용만 비교하는 경우");
    console.log(b1 != b2); // t
    console.log(b1 != b3); // t
    console.log(b1 != b4); // t

    console.log(b2 != b3); // t
    console.log(b2 != b4); // t

    console.log(b3 != b4); //t
    console.groupEnd(); 

    console.group("데이터 타입까지 비교하는 경우");
    console.log(b1 !== b2); // f
    console.log(b1 !== b3); // f
    console.log(b1 !== b4); // f

    console.log(a2 !== a3); // t
    console.log(a2 !== a4); // f

    console.log(a3 !== a4); // f
    console.groupEnd();
    
console.groupEnd();