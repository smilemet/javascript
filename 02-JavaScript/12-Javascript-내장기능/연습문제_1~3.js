// 문제 1
const email = 'smilemet@gmail.com';
user1 = email.split('@');

console.log(user1[0]);
console.log(user1[1]);


/* 풀이 */




// 문제 2
const ssn = '020517-3******'
const now_year = 2022;

const yy = '20' + ssn.substring(0, 2);
const mm = ssn.substring(2, 4);
const dd = ssn.substring(4, 6);

function age(x, y) {
    return parseInt(y) - parseInt(x) + 1
}

const ages = age(yy, now_year);
console.log(`${now_year}년 ${parseInt(mm)}월 ${parseInt(dd)}일에 태어난 ${ages}세 남자 입니다`);


/* 풀이 */
// const ssn2 = '020517-3******'
// const date2 = new Date();
// const now_year = date.getFullYear();




// 문제 3

const str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다."
let c = 0;

function count(x, y=0) {
    if(str.indexOf(x, y) === -1) {
        return c;
    } else {
        c += 1;
        count(x, str.indexOf(x, y)+1);
    }
}

count('수업시간');
console.log(c);


/* 풀이 */