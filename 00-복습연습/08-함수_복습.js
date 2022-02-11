function something(x, y, some) {
    const result = some(x, y);
    console.group(some);
    console.log(`${x}와 ${y}의 연산 결과는 ${result}`);
    console.groupEnd();
};


function plus(a, b) { return a + b; };
function minus(a, b) { return a - b; };

something(100, 50, plus);
something(100, 50, minus);


something(200, 100, function(a, b) {
    return a * b;
})

something(200, 100, function(a, b) {
    return a / b;
})