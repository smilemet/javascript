// 묶지 않고 펼쳐놓은 상태의 코드
const name = 'miso';
const age = 3;
print(name, age);
function print(name, age) {
    console.log(name);
    console.log(age);
}



function print(person) {
    console.log(person.name);
    console.log(person.age);
}
const miso = { name: 'miso', age: 3 }; // 클래스가 없어도 {}로 바로 오브젝트 생성 가능
print(miso);


// 새 빈 오브젝트는 아래와 같이 생성할 수 있음
const obj1 = {};
const obj2 = new Object();


// 자바 스크립트는 동적 언어이므로 뒤늦게 새 요소 추가 가능
// 너무 동적으로 코딩하면 유지보수 어려움
miso.hasJob = false;

delete miso.hasJob // 뒤늦게 삭제도 가능




// 두 가지 
console.log(miso.name); // 정확히 특정 키에 해당하는 값을 가져올 때
console.log(miso['name']); // 어떤 키를 가져올지 모를 때(실시간으로 결정될 때)


