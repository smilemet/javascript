'use strict';
// 문제 1
function Star(num, count = 1) {
    if (count > num) {
        return;
    } else {
        let str = '';
        for (let i = 0; i < count; i++) {
            str +='*'
        }
        console.log(str);
        Star(num, ++count);
    }
}

Star(7);



// 문제 1
const ssn = '9203211';
const mf = ssn.charAt(6);
const thisYear = (new Date()).getFullYear();
const yourYear = Number(ssn.slice(0, 2)) + ((mf === '1' || mf === '2') ? 1900 : 2000 );

const gen = (mf % 2 === 0 ? '여자' : '남자');
const age = thisYear - yourYear + 1;

// 출력테스트
console.log(`당신은 ${age}세 ${gen}입니다.`);



// 문제 2
function random(a, b) {
    return parseInt(Math.random() * (b - a + 1)) + a;
}

const number = random(100, 200);
let count = 0;

for (let i = 1; i < number + 1; i++) {
    if (i % 3 === 0) {
        count += i;
    }
}

// 출력테스트
console.log(count);



// 문제 3
function solution(x) {
    let num = 0;
    for (const s of x.toString()) {
        num += Number(s);
    }
    return (x % num) === 0 ? true : false;
}

// 출력테스트
console.log(solution(10))
console.log(solution(12))
console.log(solution(11))
console.log(solution(13))



// 문제 4
function solution2(K, N, M) {
    let snack = M - K * N;
    if(snack < 0) {
        console.log(`동수가 부모님께 받아야 하는 돈은 ${Math.abs(snack)}원입니다.`)
    } else {
        snack = 0;
        console.log(`동수가 부모님께 받아야 하는 돈은 ${snack}원입니다.`)
    }
}

// 출력테스트
solution2(30, 4, 100);
solution2(250, 2, 140);
solution2(20, 6, 120);
solution2(20, 10, 320);




// 문제 5
class Student {
    constructor() {
        this._grade = new Array();
    }

    set grade(value) {
        this._grade.push(value);
    }

    getSumAvg() {
        let sum = 0
        this._grade.forEach((v) => {
            sum += v;
        })
        let avg = sum / this._grade.length;
        return [sum, avg];
    }

    getMinMax() {
        let stumin = this._grade[0];
        let stumax = this._grade[0];
        this._grade.forEach((v => {
            if(stumin > v) {
                stumin = v
            }
        }))
        this._grade.forEach((v => {
            if(stumax < v) {
                stumax = v
            }
        }))
        return {min: stumin, max:stumax};
    }

    getVar() {
        let powAll = 0
        this._grade.forEach((v) => {
            powAll += Math.pow(v - this.getSumAvg()[1], 2)
        })
        return powAll / this._grade.length;
    }

    getStd() {
        return Math.sqrt(this.getVar());
    }
}




class Student {
    constructor() {
        this.grade = new Array();
    }

    set _grade(value) {
        this.grade.push(value);
    }

    getSumAvg() {
        let sum = 0
        this.grade.forEach((v) => {
            sum += v;
        })
        let avg = sum / this.grade.length;
        return [sum, avg];
    }

    getMinMax() {
        let stumin = this.grade[0];
        let stumax = this.grade[0];
        this.grade.forEach((v => {
            if(stumin > v) {
                stumin = v
            }
        }))
        this.grade.forEach((v => {
            if(stumax < v) {
                stumax = v
            }
        }))
        return {min: stumin, max:stumax};
    }

    getVar() {
        let powAll = 0
        this.grade.forEach((v) => {
            powAll += Math.pow(v - this.getSumAvg()[1], 2)
        })
        return powAll / this.grade.length;
    }

    getStd() {
        return Math.sqrt(this.getVar());
    }
}


// 출력테스트
const test1 = new Student();
test1._grade = 82;
test1._grade = 76;
test1._grade = 91;
test1._grade = 98;
test1._grade = 64;
console.log(test1.grade)
console.log(test1.getSumAvg())
console.log(test1.getMinMax())
console.log(test1.getVar())
console.log(test1.getStd())