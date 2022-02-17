// const email2 = 'leek4232@gmail.com';

// const p = email2.indexOf('@')
// const id = email2.substring(0, p);
// const domain = email2.substring(p+1);

// console.log(id);
// console.log(domain);



// const ssn = '020517-3******'

// const date = new Date();
// const now_year = date.getFullYear();

// let yy = parseInt(ssn.substring(0, 2));
// let mm = parseInt(ssn.substring(2, 4));
// let dd = parseInt(ssn.substring(4, 6));
// let gen = parseInt(ssn.substring(7, 8));

// console.log(`${yy} ${mm} ${dd} ${gen}`);

// yy = (gen > 2) ? 2000 + yy : 1900 + yy;

// const age = now_year - yy + 1;
// const sex = (gen % 2) ? "남자" : "여자";

// console.log(`${yy}년 ${mm}월 ${dd}일에 태어난 ${age}살 ${sex}입니다.`);



// str = '수업시간에 배운 것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다.';

// word = '수업시간';
// flen = word.length;
// find = true;
// count = 0;

// while(find) {
//     console.log(str);
//     let p = str.indexOf(word);
//     find = p > -1;

//     if(find) {
//         count ++;
//         str = str.substring(p+flen);
//     }
// }

// console.log(count);



// function random(n1, n2) {
//     return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
// }

// const lotto = [];
// console.log(lotto);

// for (let i = 0; i < 6; i++) {
//     while(true) {
//         const rnd = random(1, 45);

//         if(!lotto.includes(rnd)) {
//             lotto.push(rnd);
//             break;
//         }
//     }
// }

// console.log(lotto);


// function random(n1, n2) {
//     return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
// }

// const balls = new Array(45);
// for (let i = 0; i < balls.length; i++) {
//     balls[i] = i + 1;
// }

// const lotto = new Array(6);
// for (let i = 0; i < lotto.length; i++) {
//     const rnd = random(0, balls.length - 1);
//     lotto[i] = balls[rnd];
//     balls.splice(rnd, 1);
// }

// console.log(lotto);


// function random(n1, n2) {
//     return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
// }

// const ball = new Array(45);
// for (let i = 0; i < ball.length; i++) {
//     ball[i] = i+1;
// }

// const lotto2 = new Array(6);
// for (let i = 0; i < lotto2.length; i++) {
//     lotto2[i] = ball.splice(random(0, ball.length-i-1), 1);
// }

// console.log(lotto2);


function solution(participant, completion) {
    let answer = ''

    participant.some((v) => {
    if (!completion.includes(v)) {
        answer = v;
        return true;
    }
    });
    return answer;
}

console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], 
                     ["josipa", "filipa", "marina", "nikola"]));