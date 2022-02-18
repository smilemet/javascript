// 문제 1
const year = 2022
let age = year - 2000 + 1
console.log(`나는 ${age}세 입니다.`)


// 문제 2
const age2 = 31
let year2 = 2022 - age2 + 1;
console.log(`나는 ${year2}년도에 태어났습니다.`)


// 문제 3
const numOfApples = 123;
let basket = Math.ceil(numOfApples / 10);
console.log(basket)

let basket2 = numOfApples%10 !==0 ? parseInt(numOfApples/10) + 1 : parseInt(numOfApples/10)
console.log(basket2)


// 문제 4

const x = 457
console.log(x - (x % 100))