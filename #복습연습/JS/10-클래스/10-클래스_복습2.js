// class MemberClass {
//     constructor() {
//         this.username = null;
//         this.email = null;
//     }
// };


// const m1 = new MemberClass;
// const m2 = new MemberClass;

// console.log(m1);
// console.log(m1.username);
// console.log(m1.email);

// m1.username = '민혁';
// m1.email = 'mh@gmail.com';

// m2.username = '철수';
// m2.email = 'cs@gmail.com';

// console.log(m1)


// class Cal {
//     plus (x, y) {
//         return x + y;
//     }
//     minus (x, y) {
//         return x - y;
//     }
// }

// const c = new Cal;
// console.log(c.plus(1, 2));


// class HelloWorld {
//     constructor() {
//         this.message = null;
//     }

//     sayHello() {
//         console.log(this.message);
//     }

//     setEng() {
//         this.message = 'Hello Javascript';
//     }

//     setKor() {
//         this.message = '안녕하세요, 자바스크립트';
//     }
// }

// const hello = new HelloWorld();

// hello.setEng();
// hello.sayHello();


// class UserClass {
//     constructor() {
//         this._userName = null;
//         this._email = null;
//     }

//     set userName(value) {
//         if (!value) {
//             console.log(`userName을 입력해주세요.`);
//             return;
//         }

//         this._userName = value;
//     }

//     get userName() {
//         return this._userName;
//     }

//     set email(value) {
//         if(!value) {
//             console.log(`email을 입력해주세요.`);
//             return;
//         }

//         this._email = value;
//     }

//     get email() {
//         return this._email;
//     }

//     login() {
//         if(!this._userName || !this._email) {
//             console.log(`userName이나 email을 확인하세요.`);
//             return;
//         }

//         console.log(`로그인 되었습니다. >> userName = ${this._userName}, email = ${this._email}`);
//     }
// }

// const user = new UserClass();
// // user.login();

// user.userName = '';
// user.email = '';


// user.userName = 'miso';
// user.email = 'miso@gmail.com';

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
// say.kor();
// say.eng();


class Protoss {
    constructor(name, hp, dps) {
        this._name = name;
        this._hp = hp;
        this._dps = dps;
        console.log(`${name} 체력: ${hp}, 공격력: ${dps}`);
    }

    move(position) {
        console.log(`${this._name}이 ${position}으로 이동합니다.`);
    }

    attack(target) {
        console.log(`${this._name}이 ${target}을 공격합니다. 데미지: ${this._dps}`);
    }
}

class Zealot extends Protoss {
    sword(target) {
        this.attack(target);
        console.log(`>>> 검으로 찌르기`);
    }
}

class Dragoon extends Protoss {
    fire(target) {
        this.attack(target);
        console.log(`>>> 원거리 공격`);
    }
};

const z1 = new Zealot('질럿1', 50, 100);
const z2 = new Zealot('질럿1', 50, 100);

const d1 = new Dragoon('드라군1', 100, 80);
const d2 = new Dragoon('드라군2', 100, 80);


z1.sword('본진');
z1.move('본진')