// function HelloWorld() {
//     console.log('Hello World');
// };

// module.exports = HelloWorld;

// //

// const my = require('./mymodule1')

// //
// //

// module.exports.name = '노드';
// module.exports.property = { id: 'nodejs', type: 'javascript' }
// module.exports.say = function() {
//     console.log('Hello World');
// }

// module.exports.home = {
//     postcode: '12345',
//     address: '서울시 강남구 역삼동',
//     getAddress: function() {
//         console.log(`${this.postcode} ${this.address}`);
//     }
// }

// //
// const my = require('./mymodule2');
// console.log(my.name);
// console.log(my.property.id);
// console.log(my.property.type);

// my.say();

// console.log(my.home.postcode);
// console.log(my.home.address);
// my.home.getAddress();

// //
// //

// class Myclass {
//     constructor() {
//         console.log('---- Myclass 의 객체가 생성되었습니다. ----');
//         this.age = 20;
//         this.name = '노드';
//     }

//     say() {
//         console.log(`이름 : ${this.name}`);
//         console.log(`나이 : ${this.age}`);
//     }
// }

// module.exports = Myclass;

// //

// class HelloWorld {
//     constructor() {
//         console.log(` ---- HelloWorld의 객체가 생성되었습니다. ---- `);
//     }
    
//     say() {
//         console.log('Hello World');
//     }
// }

// module.exports = new HelloWorld();

// //

// const myModule3 = require('./Mymodule3');

// const module_obj = new myModule3();
// module_obj.say();

// const myModule4 = require('./Mymodule4');
// myModule4.say()