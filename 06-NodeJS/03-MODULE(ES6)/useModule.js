// yarn init로 폴더 내에 package 파일 형성

// node에서 가져올 때는 확장자까지 표기
import my1 from "./MyModule1.js";
my1();

// --------------------------------

// 구조분해할 때는 이름 바꿀 수 X
import { name, property, say, home } from "./MyModule2.js";

console.log(name);
console.log(property.id);
console.log(property.type);
say();

console.log(home.postcode);
console.log(home.address);
home.getAddress();

// --------------------------------

import my3 from "./MyModule3.js";
let module_obj = new my3();
module_obj.say();

// --------------------------------

// 객체 형태의 모듈 참조
import my4 from "./MyModule4.js";
my4.say();
