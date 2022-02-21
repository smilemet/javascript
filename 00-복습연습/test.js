function gugu(level, depth = 1) {
    if (depth > 9) {
        return;
    } else {
        console.log(`${level} x ${depth} = ${level * depth}`);
        gugu(level, ++depth);
    }
}

gugu(2)



const student = {
    studno: 10101,
    grade: 1,
    name: "김코딩",
    phoneno: "010-1234-5678"
}

const a = 'studno'

console.log(student[a])

console.log(student.studno)
console.log(student['studno'])
console.log(student[a])
console.log(student.a)
