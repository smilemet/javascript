class Person {
    constructor(name, first, second) {
        this._name = name;
        this._first = first;
        this._second = second;
    }
    sum() {
        return this._first + this._second;
    }
}

class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second); // super이 부모 속성 구현하는 경우
        this._third = third;
    }
    sum() {
        return super.sum() + this._third;
    }
}

let kim = new PersonPlus('kim', 10, 20, 30);
console.log(`kim, ${kim.sum()}`);


cla