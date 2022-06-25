console.group("First");

// 개발 단계에서 부수적인 데이터를 출력하고자 할 때 사용. 지우고 배포
console.log("Hello World");
// 변수 값을 확인하기 위한 용도로 사용
// 통상적으로 console.log와 구분 X
console.debug("Hello World");
// 시스템의 정보를 출력할 때 사용. 지우고 배포
console.info("Hello World");
// 경보 단계 (에러는 아니지만 정상적이지 않다고 판단되는 경우)
console.warn("Hello World");
// 에러! 심각할 경우, 예상하지 못한 에러, 시스템 에러
console.error("Hello World");

console.groupEnd();

// 프론트엔드는 사용자가 실행
// 백엔드는 개발자가 실행 (컴퓨터 자원에 접근)
