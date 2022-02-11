function User4() {
    // 멤버변수 정의하기
    this._id = null;
    this._email = null;
}

Object.defineProperty(User4.prototype, 'id', {
    get: function() {
        console.log(`id에 대한 getter 호출됨`);
        // 멤버변수의 값을 반환하는 기능을 함
        // 필요하다면 멤버변수의 값을 가공한 뒤 반환 가능
        return this._id;
    },

    set: function(param) {
        console.log(`id에 대한 setter 호출됨`);
        // 파라미터의 값을 멤버변수에 복사하는 기능을 함
        // 필요하다면 파라미터 값을 가공하여 멤버변수에 복사 가능
        this._id = param;
    }
});

Object.defineProperty(User4.prototype, 'email', {
    get: function() {
        console.log(`email에 대한 getter 호출됨`);
        return this._email;
    },
    set: function(param) {
        console.log(`email에 대한 setter 호출됨`);
        this._email = param;
    }
})

// 객체 생성하기
const friend = new User4();
friend.id = "친구";
console.log(friend.id);

friend.email = '11@gmail.com';
console.log(friend.email);