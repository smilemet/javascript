class HelloWorld {
    constructor() {
        console.log(`>>> Hello World의 객체가 생성되었습니다.`);
    }

    say() {
        console.log(`Hello World`);
    }
}

module.exports = new HelloWorld();