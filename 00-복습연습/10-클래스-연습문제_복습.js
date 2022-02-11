// class Student {
//     constructor(kor, eng, math) {
//         this._kor = kor;
//         this._eng = eng;
//         this._math = math;
//     }

//     sum() {
//         return this._kor + this._eng + this._math;
//     }

//     avg() {
//         return (this.sum() / 3);
//     }
// }


// const class1 = [
//     ['철수', 92, 81, 77],
//     ['영희', 72, 95, 98],
//     ['민혁', 80, 86, 84]
// ];

// for(c of class1) {
//     const grade = new Student(c[1], c[2], c[3]);
//     console.log(`${c[0]}의 총점은 ${grade.sum()}이고 평균은 ${grade.avg()}이다`)
// }




// class Rectangle {
//     constructor() {
//         this._width = null;
//         this._height = null;
//     }

//     get width() {
//         return this._width;
//     }

//     set width(param) {
//         this._width = param;
//     }

//     get height() {
//         return this._height;
//     }

//     set height(param) {
//         this._height = param;
//     }

//     getAround() {
//         return this.width*2 + this.height*2;
//     }

//     getArea() {
//         return this.width * this.height;
//     }
// }

// const rectangle1 = new Rectangle();

// rectangle1.width = 10;
// rectangle1.height = 5;

// console.log(`둘레의 길이는 ${rectangle1.getAround()}이고 넓이는 ${rectangle1.getArea()}입니다.`)



// class Student {
//     constructor(dep, num) {
//         this._dep = dep;
//         this._num = num;
//     }

//     get dep() {
//         return this._dep;
//     }

//     set dep(param) {
//         this._dep = param;
//     }

//     get num() {
//         return this._num;
//     }

//     set num(param) {
//         this._num = param;
//     }

//     sayHello() {
//         console.log(`나는 ${this.dep}학과 ${this.num}학번 입니다.`);
//     }
// }

// const stu1 = new Student('코딩', 10101);
// stu1.sayHello();




class Account {
    constructor(owner, balance) {
        this._owner = owner;
        this._balance = balance;
    }

    get owner() {
        return this._owner;
    }

    set owner(param) {
        this._owner = param;
    }

    get balance() {
        return this._balance;
    }

    set balance(param) {
        this._balance = param;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log(`잔액이 부족합니다.`)
            return;
        }
        this.balance -= amount;
        console.log(`현재 잔액 ${this.balance}원`);
    }
}

const acc = new Account('미소', 200000);
console.log(acc.balance);

acc.deposit(50000);
console.log(acc.balance);

acc.withdraw(300000);
console.log(acc.balance);

acc.withdraw(100000);
console.log(acc.balance);