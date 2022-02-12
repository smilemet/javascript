// const student1 = {
//     studno: 10101,
//     grade: 1,
//     name: '학생1'
// };

// const student2 = {
//     studno: 20202,
//     grade: 2,
//     name: '학생2'
// };

// const classRoom = {
//     student: [student1, student2]
// };

// console.log(classRoom);


// const classRoom = {
//     student: [{
//         studno: 10101,
//         grade: 1,
//         name: '학생1'
//     }, {
//         studno: 20202,
//         grade: 2,
//         name: '학생2'
//     }
// ]};

// for (let i = 0; i < classRoom.student.length; i++) {
//     console.group(`${i}번째 학생`);
//         console.log(classRoom.student[i].studno);
//         console.log(classRoom.student[i].grade);
//         console.log(classRoom.student[i].name);
//     console.groupEnd();
// }


// const bbs = {
//     title: '공지사항',
//     count: 4,
//     item: [
//         {id: 1, subject: '첫 번째 게시물 제목'},
//         {id: 2, subject: '두 번째 게시물 제목'},
//         {id: 3, subject: '세 번째 게시물 제목'},
//         {id: 4, subject: '네 번째 게시물 제목'}
//     ]
// };

// console.log(`게시판 제목: ${bbs.title}`);
// console.log(`총 게시글 수: ${bbs.count}`);

// for(let i of bbs.item) {
//     console.log(`[${i.id}] ${i.subject}`);
// }


// const myJson = {};
// console.log(myJson);

// for (let i = 0; i < 5; i++) {
//     const key = 'value' + i;
//     myJson[key] = i * 10;
// }

// console.log(myJson);

// const student = {
//     studno: 10101,
//     grade: 1,
//     name: '학생1',
//     phoneno: '010-어쩌고'
// };

// for (k in student) {
//     console.log(`${k}: ${student[k]}`);
// }

// let a = 100;
// let b = a;

// console.log(`a=${a}, b=${b}`)

// a++;
// console.log(`a=${a}, b=${b}`)

// const user = {
//     name: 'Lee'
// };

// const member = user;
// console.log(member);
// console.log(user);

// member.name = 'kim'
// console.log(member);
// console.log(user);


// const d1 = [1, 2, 3];
// const d2 = d1;

// console.log(d1);
// console.log(d2);

// d2[0] = 10;
// console.log(d1);
// console.log(d2);


// const a1 = [1, 2, 3];
// const a2 = new Array(a1.length);

// for (i = 0; i < a1.length; i++) {
//     a2[i] = a1[i];
// }

// const a3 = a1.slice();

// console.log(a1);
// console.log(a2);
// console.log(a3);

// a1[0] = 10000;
// console.log(a1);
// console.log(a2);
// console.log(a3);


// const addr = {
//     city: '서울',
//     gu: '서초'
// };

// const addr2 = addr;
// const addr3 = {}

// for(let a in addr) {
//     addr3[a] = addr[a];
// }

// console.log(addr);
// console.log(addr2);
// console.log(addr3);

// addr.city = '경기';
// console.log(addr);
// console.log(addr2);
// console.log(addr3);


// const addr4 = {};
// Object.assign(addr4, addr);
// console.log(addr4)

// addr.gu = '고양';
// console.log(addr4.gu)


// const object = { a: 1, b: 2 };

// const {a, b} = object;
// console.log(a);
// console.log(b);

// const data = { name: 'hello', age: 21, height: 172, weight: 80 };
// const {name} = data;
// console.log(name);

// const {age:ag, height:h} = data;
// console.log(ag, h)


// const dummy = { a1: 100, a2: 200, a3: 300, a4: 400 };
// const {a1, a2, ...rest} = dummy;

// console.log(a1)
// console.log(a2)
// console.log(rest)

// const origin = {name: 'javascript', age: 25};
// const newdata1 = {...origin, age: 30, gender: 'f'};
// console.log(newdata1)

// const array = [1, 2]
// const [straw, berry] = array;

// console.log(straw);

// const [h1, h2, ...rest_h] = [100, 200, 300, 400, 500];
// console.log(h1);
// console.log(rest_h);
