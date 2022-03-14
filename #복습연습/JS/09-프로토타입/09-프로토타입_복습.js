// function User() {
//     this._id = null;
//     this._email = null;
// };

// const foo = new User();
// foo._id = 'hello';
// foo._email = 'dd@google.com';

// console.log(foo);


// const bar = new User();
// bar._id = 'world';
// bar._email = 'cc@google.com';

// console.log(foo);
// console.log(bar);


// const User2 = function(id, email) {
//     this._id = id;
//     this._email = email;
// };

// const foo = new User2('hello', 'dd@gmail.com');
// const bar = new User2('world', 'cc@gmail.com');

// console.log(foo);
// console.log(bar);


// // 생성자 정의
// const User3 = function(id, email) {
//     this._id = id;
//     this._email = email;
// };


// // 생성자 프로토타입에 새 함수 등록
// User3.prototype.login = function() {
//     console.log(`로그인 되었습니다. -> id= ${this._id}, email= ${this._email}`)
// };

// User3.prototype.logout = function() {
//     console.log(`로그아웃 되었습니다. -> id= ${this._id}, email= ${this._email}`)
// };


// // 생성자를 활용해 객체 생성
// const student = new User3('쨔쟌', '33@gmail.com');
// console.log(student);


// // 만들어진 객체는 생성자의 prototype에 등록된 메서드 사용 OK
// student.login();
// student.logout();


// // 객체가 갖는 멤버변수 수정하기
// student._id = '쨔쟌2';
// student._email = '44@gmail.com';
// student.login();
// student.logout();



function User4() {
    this._id = null;
    this._email = null;
}

Object.defineProperty(User4.prototype, 'id', {
    get: function() {
        console.log("id에 대한 getter 호출됨")
    }

})