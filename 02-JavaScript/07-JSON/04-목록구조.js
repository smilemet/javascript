/** 목록의 아이템으로 사용될 JSON 객체 정의하기 */
const student1 = {
    studno: 10101,
    grade: 1,
    name: "학생1"
};

const student2 = {
    studno: 20202,
    grade: 2,
    name: "학생2"
};


// 목록 구조를 갖는 JSON 객체
const classRoom = {
    student: [student1, student2]
};

console.log(classRoom);
/**
{
  student: [
    { studno: 10101, grade: 1, name: '학생1' },
    { studno: 20202, grade: 2, name: '학생2' }
  ]
}

*/


// 배열의 기본 특성을 활용하여 반복문으로 접근할 수 있다.
for (let i = 0; i < classRoom.student.length; i++) {
    console.group(i + "번째 학생");
    console.log(" >> 학번: " + classRoom.student[i].studno);
    console.log(" >> 학년: " + classRoom.student[i].grade);
    console.log(" >> 이름: " + classRoom.student[i].name);
    console.groupEnd();
}
/*
0번째 학생
   >> 학번: 10101
   >> 학년: 1
   >> 이름: 학생1
1번째 학생
   >> 학번: 20202
   >> 학년: 2
   >> 이름: 학생2
*/


// for~of문을 사용할 경우 몇 번째 항목인지를 알기 위해
// 반복문 시작 전 별도의 초기식과 반복문 안에 별도의 증감식 추가
let i = 0; // 초기식
for (const s of classRoom.student) {
    console.group(i + "번째 학생");
    console.log(" >> 학번: " + s.studno);
    console.log(" >> 학년: " + s.grade);
    console.log(" >> 이름: " + s.name);
    console.groupEnd();
    i++;
}
/*
0번째 학생
   >> 학번: 10101
   >> 학년: 1
   >> 이름: 학생1
1번째 학생
   >> 학번: 20202
   >> 학년: 2
   >> 이름: 학생2
*/
