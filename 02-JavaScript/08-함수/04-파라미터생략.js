/** 함수의 파라미터 생략 */

// 두 개의 파라미터를 갖는 함수 정의
function foo(x, y) {
    console.log("x=" + x, ", y=" + y);
    // 파라미터가 생략될 수 있으므로 견고한 코드라고 볼 수 없다.
    // let result = x + y 같은 식이 있을 경우 undefined가 섞여 정상출력 X
    
    let result = 0;
    if (x != undefined) { result += x; }
    if (y != undefined) { result += y; }
    
    console.log("result = " + result);

}

foo(100, 200); // x=100 , y=200, result = 300
foo(500); // x=500 , y=undefined, result = 500
foo(); // x=undefined , y=undefined, result = 0

// 매번 모든 변수에 대해 일일히 걸러줄 수 없으므로 기본값 지정 -> 다음 파트