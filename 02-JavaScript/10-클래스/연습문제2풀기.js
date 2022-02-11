// 문제 1
function Student (classname, studno) {
    this._classname = classname;
    this._studno = studno;
}

Student.prototype = {
    get classname() {
        return this._classname;
    },

    set classname(classname) {
        this._class = classname;
    },

    get studno() {
        return this._studno;
    },

    set studno(studno) {
        this._studno = studno;

    },

    sayHello: function() {
        console.log(`나는 ${this.classname}학과 ${this.studno}학번입니다.`)
    }
}

const student1 = new Student('코딩', 10101);
student1.sayHello();



// 문제2
class Account {
    constructor() {
        this._owner = null;
        this._balance = null;
    }
    
    get owner() {
        return this._owner;
    }

    set owner(owner) {
        this._owner = owner;
    }
 
    get balance() {
        return this._balance;
    }

    set balance(balance) {
        this._balance = balance;
    }

    deposit(amount) {
       this.balance += amount;
    }

    withdraw(longamount) {
        if(longamount > this.balance) {
            console.log(`통장 잔액 이상 인출 요청하였으므로 현재 잔액인 ${this.balance}원이 인출됩니다.`)
            this.balance = 0;
            return this.balance;
        }

        this.balance -= longamount;
        return longamount;
    }
}

const myAccount = new Account();
myAccount.owner = '방미소'
myAccount.balance = 100000

console.log(myAccount.balance);

myAccount.deposit(50000);
console.log(myAccount.balance);

myAccount.withdraw(70000);
console.log(myAccount.balance);

myAccount.withdraw(200000);
console.log(myAccount.balance);