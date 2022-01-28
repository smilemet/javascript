console.group("1) 논리값을 사용한 경우");
    console.log("배고픈데"); // 무조건 실행된다.

    //const HAVE_MONEY = true;
    const HAVE_MONEY = false;
    if(HAVE_MONEY) {
        console.log("식당에서");
    }
    console.log("밥을 먹자"); // "식당에서" 라는 문구가 출력되었다가 꺼졌다가 한다.

console.groupEnd();


console.group("2) 숫자형 값을 사용한 경우");
    const MONEY1 = 10000;
    if(MONEY1) {
        console.log("택시를 타고"); // 리턴
    }
    console.log("집에 가자");
console.groupEnd();


console.group("3) 비교식을 사용한 조건문");
    const MONEY2 = 12000;
    if(MONEY2 >= 5000) {
        const k = MONEY2-5000;
        console.log("선물을 사고 %d원 남는다.", k); // 리턴
    }

console.groupEnd();


console.group("4) 논리식을 사용한 조건문(AND)");
    const x1 = true;
    const y1 = true;

    if(x1 && y1) {
        console.log("x1 && y1 조건문은 참입니다."); // 리턴
    }

    const x2 = true;
    const y2 = false;

    if(x2 && y2) {
        console.log("x2 && y2 조건문은 참입니다."); // 리턴되지 않음
    }
console.groupEnd();


console.group("5) 논리식을 사용한 조건문(OR)");
    const x3 = true;
    const y3 = true;

    if(x3 || y3) {
        console.log("x3 || y3 조건문은 참입니다."); // 리턴
    }

    const x4 = true;
    const y4 = false;

    if(x4 || y4) {
        console.log("x4 || y4 조건문은 참입니다."); // 리턴
    }

    
    const x5 = false;
    const y5 = false;

    if(x5 || y5) {
        console.log("x5 || y5 조건문은 참입니다."); // 리턴되지 않음
    }
console.groupEnd();


console.group("6) Not 연산");
    const a = true;
    if(!a) {
        console.log("Hello World");
    }

    const b = false;
    if(!b) {
        console.log("헬로월드");
    }
console.groupEnd();


console.group("7) 논리식 Not")
    const x6 = true;
    const y6 = false;

    if (!(x6 && y6)) {
        console.log("!(x6 && y6) 조건은 참입니다.");
    }

    const x7 = true;
    const y7 = false;

    if (!(x7 || y7)) {
        console.log("(x7 || y7) 조건은 참입니다.")
    }
console.groupEnd();