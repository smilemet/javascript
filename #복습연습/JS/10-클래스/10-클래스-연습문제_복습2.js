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
//         return this.sum()/3;
//     }
// };

// const grade = [
//     ['철수', 92, 81, 77],
//     ['영희', 72, 95, 98],
//     ['민혁', 80, 86, 84],
//     ['미소', 98, 95, 92]
// ]

// for (const g of grade) {
//     const stu = new Student(g[1], g[2], g[3]);
//     console.log(`${g[0]}의 총점은 ${stu.sum()}이고 평균은 ${stu.avg()}점 입니다.`)
// }


// class Rectangle {
//     constructor() {
//         this._width = null;
//         this._height = null;
//     }

//     get width() {
//         return this._width;
//     }

//     set width(value) {
//         this._width = value;
//     }
    
//     get height() {
//         return this._height;
//     }

//     set height(value) {
//         this._height = value;
//     }

//     getArount() {
//         return (this._width * 2) + (this._height * 2);
//     }

//     getArea() {
//         return this._width * this._height;
//     }
// }

// const shape1 = new Rectangle();

// shape1.width = 10;
// shape1.height = 5;

// console.log(shape1.getArount());
// console.log(shape1.getArea());


// class Student {
//     constructor(dep, studno) {
//         this._dep = dep;
//         this._studno = studno;
//     }

//     get dep() {
//         return this._dep;
//     }

//     set dep(value) {
//         this._dep = value;
//     }
    
//     get studno() {
//         return this._studno;
//     }

//     set studno(value) {
//         this._studno = value;
//     }

//     sayHello() {
//         console.log(`나는 ${this._dep}학과 ${this._studno}학번입니다.`)
//     }
// };

// const s = new Student('코딩', 10101);
// s.sayHello();



// class Account {
//     constructor(owner, balance) {
//         this._owner = owner;
//         this._balance = balance;
//     }

//     get owner() {
//         return this._owner;
//     }

//     set owner(value) {
//         this._owner = value;
//     }

//     get balance() {
//         return this._balance;
//     }

//     set balance(value) {
//         this._balance = value;
//     }

//     deposit(amount) {
//         this._balance += amount;
//     }

//     withdraw(amount) {
//         if(amount > this._balance) {
//             console.log(`잔액을 확인해주세요.`)
//             return 0;
//         } else {
//             this._balance -= amount;
//             return amount;
//         }
//     }
// };

// const myAcc = new Account('미소', 500000);
// console.log(myAcc);
// console.log(myAcc.deposit(70000));
// console.log(myAcc);
// console.log(myAcc.withdraw(600000));