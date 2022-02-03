// 변수들의 그룹으로서의 JSON
const student = {
    studno: 10101,
    grade: 1,
    name: "방미소",
    phoneno: "010-1234-5678"
    // 숫자, boolean, null, undefined는 따옴표 적용 안함
};

console.group("출력 type1"); // 객체이름.하위정보이름 형태. 일반적
    console.log("학번: " + student.studno);
    console.log("학년: " + student.grade);
    console.log("이름: " + student.name);
    console.log("연락처: " + student.phoneno);
console.groupEnd();

console.group("출력 type2"); // 배열의 인덱스 형식 (꼭 따옴표 포함!)
    console.log("학번: " + student['studno']);
    console.log("학년: " + student['grade']);
    console.log("이름: " + student['name']);
    console.log("연락처: " + student['phoneno']);
console.groupEnd();

// 접근하고자 하는 하위 변수의 이름을 동적으로 설정해야 할 경우 사용됨
// 변수화 -> 따로 별도 연산 추가 가능
const keyName = "phoneno";
console.log(student[keyName]);


//json의 key를 배열로 반환하는 명령
const keys = Object.getOwnPropertyNames(student);
console.log(keys);


// 추출한 key 이름은 배열이므로 반복문 처리 가능
for (const k of keys) {
    console.group(k);
    // 추출된 key이름값을 활용하여 실 데이터에 동적 접근 가능
    console.log(student[k]);
    console.groupEnd();
}

