// class MemberClass {
//     constructor() {
//         this._username = null;
//         this._email = null;
//     }
// }

// const m1 = new MemberClass();
// m1._username = '미소';
// m1._email = 'foo@gmail.com';

// console.log(m1);


// const m2 = {
//     _username: '성원',
//     _email: 'bar@gmail.com'
// }

// const m3 = m2;

// console.log(m2._username);
// console.log(m2._email);

// console.log(m3._username);
// console.log(m3._email);


// m3._username = '은주';
// m3._email = 'sea@gmail.com';

// console.log(m2._username);
// console.log(m2._email);

// console.log(m3._username);
// console.log(m3._email);


// class Calc {
//     plus(x, y) {
//         return x + y;
//     }

//     minus(x, y) {
//         return x - y;
//     }
// }

// const calc = new Calc();
// console.log(calc.plus(1, 2));



// class HelloWorld {
//     constructor() {
//         this._message = null;
//     }

//     sayHello() {
//         console.log(this._message);
//     }

//     setEng() {
//         this._message = 'Hello Javascript';
//     }

//     setKor() {
//         this._message = '안녕하세요 자바스크립트';
//     }
// }

// const h = new HelloWorld();

// h.sayHello();

// h.setEng();
// h.sayHello();

// h.setKor();
// h.sayHello();



// class UserClass {
//     constructor() {
//         this._userName = null;
//         this._email = null;
//     }

//     get userName() {
//         return this._userName;
//     }

//     set userName(param) {
//         if(!param) {
//             console.log('userName을 입력하세요');
//             return;
//         }
//         this._userName = param;
//     }

//     get email() {
//         return this._email;
//     }

//     set email(param) {
//         if(!param) {
//             console.log('email을 입력하세요');
//             return;
//         }
//         this._email = param;
//     }

//     login() {
//         if(!this.userName || !this.email) {
//             console.log(`userName이나 email을 확인하세요.`)
//             return;
//         }

//         console.log(`로그인 되었습니다. >> userName = ${this.userName}, email = ${this.email}`);
//     }
// };

// const user = new UserClass();
// user.login();

// user.userName = "";
// user.login();

// user.email = ""
// user.login();

// user.userName = 'helloworld';
// user.email = 'hello@world.com';
// user.login();


// class SayHello {
//     eng() {
//         console.log('Hello Javascript');
//     }
// }

// class SayHelloWorld extends SayHello {
//     kor() {
//         console.log('안녕하세요 자바스크립트');
//     }
// }

// const say = new SayHelloWorld();
// say.eng();
// say.kor();


class Protoss {
    constructor(name, hp, dps) {
        this._name = name;
        this._hp = hp;
        this._dps = dps;
        console.log(`${this._name} 체력: ${this._hp}, 공격력: ${this._dps}`);
    }

    move(position) {
        console.log(`${this._name}(이)가 ${position}까지 이동합니다.`);
    }

    attack(target) {
        console.log(`${this._name}(이)가 ${target}(을)를 공격합니다. 데미지: ${this._dps}`);
    }   
};

class Zealot extends Protoss {
    sword(target) {
        this.attack(target);
        console.log(` >>>>>> 검으로 찌르기`);
    }
};

class Dragoon extends Protoss {
    fire(target) {
        this.attack(target);
        console.log(` >>>>>> 원거리 공격`);
    }
};

const z1 = new Zealot('질럿1', 300, 20);
z1.move("본진");
z1.sword("본진");


const d1 = new Dragoon('드라군1', 250, 40);
d1.move("멀티");
d1.fire("멀티");