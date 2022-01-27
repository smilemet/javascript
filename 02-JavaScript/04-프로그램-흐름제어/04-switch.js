//** 1) Switch 기본 구문 */

console.group("1");
const 국어 = "B";
switch (국어) {
    case "A" : 
        console.log("A학점 입니다.");
        break;
    case "B" : 
        console.log("B학점 입니다.");
        break;
    case "C" :
        console.log("C학점 입니다.");
        break;
    default : 
        console.log("C학점 미만 입니다.");
        break;
}
console.groupEnd();


/** 2) break가 없는 경우 */

console.group("2");
const 영어 = "B";
switch (영어) {
    case "A" :
        console.log("A학점 입니다.");
    case "B" : 
        console.log("B학점 입니다.");
    case "C" : 
        console.log("C학점 입니다.");
    default : 
        console.log("C학점 미만 입니다.");
}
console.groupEnd();


/** 3) 의도적으로 Break 조절하기 */
console.group("3");
const 수학 = "B";
switch (수학) {
    case "A" : 
    case "B" :
    case "C" :
        console.log("이 과목을 PASS 했습니다.")
        break;
    case "D" : 
        console.log("이 과목을 PASS 하지 못했습니다.")
        break;
}
console.groupEnd();


/** 4) break의 조건을 식으로 설정하는 경우 */
console.group("4");
const 과학 = 72;
switch (과학 > 70) {
    case true : 
        console.log("이 과목을 PASS 했습니다.")
        break;
    default : 
        console.log("이 과목을 PASS 하지 못했습니다.")
        break;
}
