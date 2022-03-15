// 01.
// // 변수들의 그룹으로서의 JSON

// const student = {
//     studno: 10101,
//     grade: 1,
//     name: "방미소",
//     phoneno: "010-1234-5678"
// }

// console.group("출력 type1");
//     console.log("학번: " + student.studno);
//     console.log("학년: " + student.grade);
//     console.log("이름: " + student.name);
//     console.log("연락처: " + student.phoneno);
// console.groupEnd();


// console.group("출력 type2");
//     console.log("학번: " + student['studno']);
//     console.log("학년: " + student['grade']);
//     console.log("이름: " + student['name']);
//     console.log("연락처: " + student['phoneno']);
// console.groupEnd();



// const keyName = "phoneno";
// console.log(student[keyName]);


// const keys = Object.getOwnPropertyNames(student);
// console.log(keys);


// for (k of keys) {
//     console.log(student[k]);
// }





// // 02.
// const company = {
//     name : "(주)굿모닝컴페니",
//     since : 2013,
//     department : ["기획팀", "디자인팀", "개발팀"]
// };

// console.log(company.name);
// console.log(company['since']);
// console.log(company.department[0]);
// console.log(company.department[1]);
// console.log(company['department'][2]);





// // 03.
// let centerPoint = {
//     x: 5,
//     y: 10
// };

// let circle1 = {
//     center: centerPoint,
//     radius: 5.10
// };

// console.group("circle1");
// console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
// console.log("원의 반지름: %d", circle1.radius);
// console.groupEnd();


// let circle2 = {
//     center: {
//         x: 5,
//         y: 10
//     },
//     radius: 5.10
// };

// console.group("circle2");
// console.log("원의 중점: (%d, %d)", circle2.center.x, circle2.center.y);
// console.log("원의 반지름: %d", circle2.radius);
// console.groupEnd();





// // 04.
// const student1 = {
//     studno: 10101,
//     grade: 1,
//     name: "학생1"
// };

// const student2 = {
//     studno: 20202,
//     grade: 2,
//     name: "학생2"
// };

// const classroom = {
//     student: [student1, student2]
// };

// console.log(classroom);



// for (let i = 0; i < classroom.student.length; i++) {
//     console.group(i + "번째 학생");
//     console.log(">> 학번: " + classroom.student[i].studno);
//     console.log(">> 학년: " + classroom.student[i].grade);
//     console.log(">> 이름: " + classroom.student[i].name);
//     console.groupEnd();
// }





// // 05.
// const classroom = {
//     student: [{
//         studno: 10101,
//         grade: 1,
//         name: "학생1"
//     }, {
//         studno: 20202,
//         grade: 2,
//         name: "학생2"
//     }]
// }

// for (let i = 0; i < classroom.student.length; i++) {
//     console.group(i + "번째 학생")
//     console.log(">> 학번: " + classroom.student[i].studno);
//     console.log(">> 학년: " + classroom.student[i].grade);
//     console.log(">> 이름: " + classroom.student[i].name);
//     console.groupEnd();
// }





// // 06.
// const bbs = {
//     title: "공지사항",
//     count: 4,
//     item: [
//         {id: 1, subject: "첫 번째 게시물 제목"},
//         {id: 2, subject: "두 번째 게시물 제목"},
//         {id: 3, subject: "세 번째 게시물 제목"},
//         {id: 4, subject: "네 번째 게시물 제목"},
//     ]
// };

// console.log("게시판 이름: %s", bbs.title);
// console.log("전체 게시물 수: %d", bbs.count);


// console.group("일반 for문")
// for (let i = 0; i < bbs.item.length; i++) {
//     console.log("[" + bbs.item[i].id + "] " + bbs.item[i].subject)
// }
// console.groupEnd();

// console.group("for~of문")
// for (i of bbs.item) {
//     console.log("[" + i.id + "] " + i.subject);
// }
// console.groupEnd();





// // 07.
// const foo = {
//     name: "자바스크립트",
//     age: 19
// }

// console.log(foo.email);

// const nextAge = foo.aga + 1;
// console.log(nextAge);


// foo.email = "hello@world.com"
// console.log(foo);


// const myJson = {};
// console.log(myJson);

// for (let i = 0; i < 10; i++) {
//     const key = "value" + i
//     myJson[key] = i*10;
// }

// console.log(myJson);




// // 08.
// const student = {
//     studno: 10101,
//     grade: 1,
//     name: "학생1",
//     phoeno: "010-1233-3333"
// };

// for(let s in student) {
//     console.log("%s : %s", s, student[s]);
// }





// // 09.
// let a = 100;
// let b = a;

// console.log("a=" + a + ", b=" + b);

// a++;
// console.log("a=" + a + ", b=" + b);


// const user = {
//     name: "Lee"
// };

// const member = user;
// console.log(user);
// console.log(member);

// member.name = "Kim";
// console.log(user);
// console.log(member);


// const d1 = [1, 2, 3];
// const d2 = d1;
// console.log(d1);
// console.log(d2);

// d1[0] += 10;
// d1[1] += 10;
// d1[2] += 10;
// console.log(d1);
// console.log(d2);


// const a1 = [1, 2, 3];
// const a2 = new Array(a1.length);

// for (let i = 0; i < a1.length; i++) {
//     a2[i] = a1[i];
// }

// const a3 = a1.slice();

// console.group("깊은복사")
// console.log(a2);
// console.log(a3);
// console.groupEnd();

// console.group("증감 후")
// a1[0] += 10;
// a1[1] += 10;
// a1[2] += 10;
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.groupEnd();



// const addr = {
//     city: "서울",
//     gu: "서초"
// };

// const copy = {};
// for (let key in addr) {
//     copy[key] = addr[key]
// }

// console.log(addr);
// console.log(copy);

// addr.gu = "강남";

// console.log(addr);
// console.log(copy);


// const copy2 = {};
// Object.assign(copy2, addr);
// console.log("표", copy2)





// 10.
const object = { a: 1, b: 2 };

const {a, b} = object;
console.log(a);
console.log(b);

const data = { name: "hello", age: 20, height: 172, weight: 85 };

const {name} = data;
console.log(name);

const { height: h, weight: w } = data;
console.log(h);
console.log(w);
console.log(data);


const dummy = { a1: 100, a2: 200, a3: 300, a4: 400 };
const {a1, a2, ... restA} = dummy;
console.log(a1);
console.log(a2);
console.log(restA);

const origin = { name: "javascript", age: 25 };
const newdata1 = {...origin, gender: "m"};
console.log(newdata1);

const newdata2 = {...origin, age: 30, gender: "f"};
console.log(newdata2);


const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

[b1, b2, ...restB] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(b1);
console.log(b2);
console.log(restB);