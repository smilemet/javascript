/** 멤버변수만 정의한 클래스 */
// 생성자 함수 안에서 this 키워드를 통해 객체 안에 탑제될 변수들을 초기화 한다.

class MemberClass {
    /** 생성자 함수 */
    // 생성자의 이름은 고정, 이름 앞에 예약어 없음, 필요시 파라미터 정의 가능, 리턴 불가
    constructor() {
        this.userName = null;
        this.email = null;
    }
};

// 클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);   // MemberClass { userName: null, email: null }
console.log(m1.userName);   // null
console.log(m1.email);   // null

const m2 = new MemberClass();
console.log(m2);   // MemberClass { userName: null, email: null }
console.log(m2.userName);   // null
console.log(m2.email);   // null

// 객체의 특성 -> 같은 구조, 저장되는 내용은 개별적
m1.userName = '민혁';
m1.email = 'mh@gmail.com';

m2.userName = '철수';
m2.email = 'cs@gmail.com';

console.log(m1);   // MemberClass { userName: '민혁', email: 'mh@gmail.com' }
console.log(m1.userName);   // 민혁
console.log(m1.email);   // mh@gmail.com

console.log(m2);   // MemberClass { userName: '민혁', email: 'mh@gmail.com' }
console.log(m2.userName);   // 철수
console.log(m2.email);   // cs@gmail.com