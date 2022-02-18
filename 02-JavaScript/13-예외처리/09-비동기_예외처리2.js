/** 비동기 처리에 대한 예외 처리(2) */
const data = [1, 2, 3];

// timer 처리와 같은 비동기 방식의 예외처리는 콜백함수 내부에서 처리해야 한다.
setTimeout(() => {
    try {
        // ---- setTimeout 안에서 try가 실행되므로 실행 중 에러를 처리할 수 있음
        console.log(`배열탐색시작`)
        for (let i = 0; i < 10; i++) {
            console.log(data[i].toFixed(2));
        }
    } catch (err) {
        console.log(`에러발생(2)`);
        console.error(err.name);
        console.error(err.message);
    }
    console.log(`배열탐색종료`);
}, 1000);

console.log(`프로그램 종료`);


// setTimeout이 실행되고 있는 바로 그 블록에서 try~catch문 적용