// const student = {
//     studno: 10101,
//     grade: 1,
//     name: "방미소",
//     phoneno: "010어쩌고"
// };


// console.log(student.studno);
// console.log(student['grade']);

// const key = student.name;
// console.log(key);

// const k = "phoneno"
// console.log(student[k]);

// const stuArr = Object.getOwnPropertyNames(student);
// console.log(stuArr);


// for (s of stuArr) {
//     console.log(s);
//     console.log(student[s]);
// }


// const company = {
//     name : "(주)굿모닝컴페니",
//     since : 2013,
//     department : ["기획팀", "디자인팀", "개발팀"]
// }

// console.log(company.name);
// console.log(company['since']);
// console.log(company.department[0]);
// console.log(company['department'][1]);

// let centerPoint = {
//     x : 5,
//     y : 10
// };

// let circle1 = {
//     center: centerPoint,
//     radius: 5.10
// }

// console.log(`원의 중점: (%d, %d)`, circle1.center.x, circle1.center.y);
// console.log(`원의 반지름: %d`, circle1.radius);


// let circle2 = {
//     center: {x:5, y:10},
//     radius: 5.10
// }

// console.log(`원의 중점: (%d, %d)`, circle2.center.x, circle2.center.y);
// console.log(`원의 반지름: %d`, circle2.radius);


// const student1 = {
//     studno: 10101,
//     grade: 1,
//     name: '학생1'
// }

// const student2 = {
//     studno: 20202,
//     grade: 2,
//     name: '학생2'
// }


// const classRoom = {
//     student : [student1, student2]
// };

// console.log(classRoom);


// for (let i = 0; i < classRoom.student.length; i++) {
//     console.group(`${i}번째 학생`);
//         console.log(`>> 학번: %d`, classRoom.student[i].studno);
//         console.log(`>> 학년: %d`, classRoom.student[i].grade);
//         console.log(`>> 이름: %s`, classRoom.student[i].name);
//     console.groupEnd();
// }

// let i =0;
// for (const k of classRoom.student) {
//     console.log(`${i}번째 학생`);
//     console.log(`>> 학번: %d`, k.studno);
//     console.log(`>> 학년: %d`, k.grade);
//     console.log(`>> 이름: %s`, k.name);
//     i++;
// }


// const classRoom = {
//     student: [{
//         studno: 10101,
//         grade: 1,
//         name: '학생1'
//     }, {
//         studno: 20202,
//         grade: 2,
//         name: '학생2'
//     }]
// };

// for (let i = 0; i < classRoom.student.length; i++) {
//     console.log(`${i}번째 학생`);
//     console.log(`>> 학번: %d`, classRoom.student[i].studno);
//     console.log(`>> 학년: %d`, classRoom.student[i].grade);
//     console.log(`>> 이름: %s`, classRoom.student[i].name);
// };


// const bbs = {
//     title: '공지사항',
//     count: 4,
//     item: [
//         {id: 1, subject: '첫 번째 게시글 제목'},
//         {id: 2, subject: '두 번째 게시글 제목'},
//         {id: 3, subject: '세 번째 게시글 제목'},
//         {id: 4, subject: '네 번째 게시글 제목'},
//     ]
// }

// console.log(`게시판 이름: ${bbs.title}`);
// console.log(`총 게시글 수: ${bbs.count}`);

// for (let i = 0; i < bbs.item.length; i++) {
//     console.log(`[${bbs.item[i].id}] ${bbs.item[i].subject}`);
// }


// for (let i of bbs.item) {
//     console.log(`[${i.id}] ${i.subject}`);
// }



// const json = {};

// for (let i = 0; i < 10; i++) {
//     json[`value${i}`] = i*10;
// }

// console.log(json)


// const student = {
//     studno: 10101,
//     grade: 1,
//     name: "학생1",
//     phoneno: "010-1234-5678"
// };

// for (const i in student) {
//     console.log(`${i}: ${student[i]}`);
// }


// const a1 = [1, 2, 3];
// const a2 = new Array (a1.length);

// for (i = 0; i < a1.length; i++) {
//     a2[i] = a1[i];
// }

// const a3 = a1.slice();

// a1[0] = 100;

// console.log(a1);
// console.log(a2);
// console.log(a3);


// const addr = {
//     city: '서울',
//     gu: '서초'
// };

// const copy = {};

// for (let key in addr) {
//     copy[key] = addr[key];
// }

// console.log(copy);


// const copy2 = {};
// Object.assign(copy2, addr);
// console.log(copy2);


// const object = { a: 1, b: 2 };
// const {a, b} = object;
// console.log(a);
// console.log(b);

// const data = { name: 'hello', age:20, height:172, weight:85 };
// const {name} = data;
// console.log(name);

// const {name:N} = data;
// console.log(N);


// const {name:M, age:A, ...rest} = data;
// console.log(M);
// console.log(A);
// console.log(rest);


// const origin = {name: 'javascript', age: 25};
// const newdata1 = {...origin, gender: 'M'};
// console.log(newdata1);


// origin.age = 30
// console.log(origin);
// console.log(newdata1);
