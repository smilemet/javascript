// const student = {
//     studno:10101,
//     grade: 1,
//     name: '학생1',
//     phoneno: '010-7213-2332'
// };

// console.log(student.studno);
// console.log(student.grade)
// console.log(student['name'])


// const p = 'phoneno';
// console.log(student[p])


// const keys = Object.getOwnPropertyNames(student);
// console.log(keys);

// for (const k of keys) {
//     console.log(student[k])
// }


// const centerPoint = {
//     x: 5,
//     y: 10
// };

// const circle1 = {
//     center: centerPoint,
//     radius: 5.10
// };

// console.log(circle1.center.x, circle1.center.y);

// const circle2 = {
//     centerPoint: {
//         x: 5,
//         y: 10
//     },
//     radius: 5.10
// }


// console.log(circle2.centerPoint.x, circle2.centerPoint.y)


// const class1 = {
//     student1: {
//         studno: 10101,
//         grade: 1,
//         name: '학생1'
//     },
//     student2: {
//         studno: 20202,
//         grade: 2, 
//         name: '학생2'
//     }
// };

// console.log(class1.student1.grade, class1.student2['grade']);


// const student1 = {
//     studno: 10101,
//     grade: 1
// }
// const student2 = {
//     studno: 20202,
//     grade: 2
// }

// const class1 = {
//     student : [student1, student2]
// }

// console.log(class1);

// for (let i = 0; i < class1.student.length; i++) {
//     console.log(`>> 학번: ${class1.student[i].studno}`)
// }


// const class2 = {
//     student : [{
//         studno: 10101,
//         grade: 1
//     },{
//         studno: 20202,
//         grade: 2
//     }]
// };


// console.log(class2)


// const k1 = {}
// const k2 = {}
// const obj1 = {name: [k1, k2]}

// const obj2 = {name: [{}, {}]}


// const bbs = {
//     title: '공지사항',
//     count: 4,
//     item: [
//         {id: 1, subject: '첫 번째 게시물 제목'}, 
//         {id: 2, subject: '2 번째 게시물 제목'}, 
//         {id: 3, subject: '3 번째 게시물 제목'}, 
//         {id: 4, subject: '4 번째 게시물 제목'}
//     ]
// }

// console.log(`게시판 제목: ${bbs.title}`);
// console.log(`총 게시글 수: ${bbs.count}`);

// // for (let i = 0; i < bbs.item.length; i++) {
// //     console.log(`[${bbs.item[i].id}] ${bbs.item[i].subject}`)
// // }


// for (const b of bbs.item) {
//     console.log(`[${b.id}] ${b.subject}`);
// }

// let a = 100;
// let b = a;

// console.log(`a=${a}, b=${b}`);

// a++

// console.log(a, b)

// const user = {
//     name: 'Lee'
// };

// const user2 = user;
// user2.name = 'Kim'

// console.log(user.name)


// const a1 = [1, 2, 3];
// const a2 = new Array(a1.length);

// for (let i = 0; i < a1.length; i++) {
//     a2[i] = a1[i];
// }

// console.log(a2)
// a2[0] = 10000

// console.log(a1, a2)


// const a3 = a1.slice();
// console.log(a3)


// const addr = {
//     city: '서울',
//     gu: '서초'
// };

// const copy = new Object();

// for (let a in addr) {
//     copy[a] = addr[a];
// }

// console.log(copy)

// copy.city = '경기'

// console.log(addr, copy)


// const copy2 = new Object();
// Object.assign(copy2, addr)
// console.log(addr, copy2)


