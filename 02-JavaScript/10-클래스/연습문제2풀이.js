// 문제1 풀이
class Student {
    constructor(depName, depNumber) {
        // 학과이름
        this._depName = depName; // get set 함수 이름과 구분하기 위해 _를 사용하는 것
        // 학번
        this._depNumber = depNumber;
    }

    get depName() {
        return this._depName;
    }

    set depName(depName) {
        this._depName = this.depName;
    }

    get depNumber() {
        return this.depNumber;
    }

    set depName(depNumber) {
        this._depNumber = this.depNumber;
    }

    // 메시지 출력 메서드
    sayHello() {
        console.log(`나는 ${this.depName}학과 ${this.depNumber}학번 입니다.`) // 멤버변수에 직접접근 X, getter setter 호출하는 것임
    }
}

const stud = new Student('컴퓨터공학', 20202);
stud.sayHello();



// 문제2 풀이
class Account {
    
}