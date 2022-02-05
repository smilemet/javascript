// 예제를 위한 임의의 JSON 정의
const student = {
    studno: 10101,
    grade: 1,
    name: "학생1",
    phoneno: "010-1234-5678"
};

// JSON이나 멤버변수를 갖는 객체에 대한 반복문
// -> 변수로 선언한 k에 key가 순차적으로 저장된다.
for (let k in student) {
    console.log("%s : %s", k, student[k]);
}

// for~of 는 배열용
// for~in 은 JSON용

// for (let k of student) {
//     console.log("%s : %s", k, student[k]);
// } 
// // TypeError: student is not iterable
// // iterable은 array, string 등
// // 일반적인 객체는 of 쓸 수 없음 (iterable protocol 어쩌구)