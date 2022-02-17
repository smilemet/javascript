// 4번

function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const lotto = new Array(0);

for (let i = 0; i < 6; i++) {
    let test = true;
    while(test) {
        let num = random(1, 45);
        if (lotto.indexOf(num) === -1) {
            lotto.push(num)
            test = false;
        }
    }
}
console.log(lotto);



// 5번
function random(n1, n2) {
    return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

const ball = new Array(45);
for (i = 0; i < 45; i++) {
    ball[i] = i+1;
}

const lotto2 = new Array(6);

for (i = 0; i < 6; i++) {
    lotto2[i] = ball.splice(random(0, 43-i), 1);
}

console.log(lotto2);



// 6번

const p = ["marina", "josipa", "nikola", "vinko", "filipa"];
const c = ["josipa", "filipa", "marina", "nikola"];


if(p.length < 1 && p.length > 100000) {
    console.log(`참가 선수 수를 확인해주세요.`);
}

if(!(p.length === c.length + 1)) {
    console.log(`완주 선수 수를 확인해주세요.`);
}

const pattern2 = /[a-z]/
if(!(p.length > 0 && p.length < 21 && pattern2.test(p))) {
    console.log(`참가자 이름을 확인해주세요.`)
}

for(let i = 0; i < p.length; i++) {
    for(let j = i + 1; j < p.length; j++) {
        if(p[i] === p[j]) {
            console.log(`동명이인 유무를 확인해주세요.`)
        }
    }
}


function solution(participant, completion) {
    for(i = 0; i < participant.length; i++) {
        if(completion.indexOf(participant[i]) === -1) {
            return participant.splice(i, 1);
        } 
    }
}
console.log(solution(p, c));