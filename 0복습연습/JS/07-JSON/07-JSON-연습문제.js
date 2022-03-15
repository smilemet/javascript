// 문제 1
const blood = ["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

let aCount = 0;
let bCount = 0;
let abCount = 0;
let oCount = 0;

for (i = 0; i < blood.length; i++) {
    if(blood[i] === "A") {
        aCount++;
    } else if (blood[i] === "B") {
        bCount++;
    } else if (blood[i] === "AB") {
        abCount++;
    } else {
        oCount++;
    }   
}

result.A = aCount;
result.B = bCount;
result.AB = abCount;
result.O = oCount;

console.log(result);


/* 풀이

const blood_data = ["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];
const result = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (const b of blood_data) {
    result[b]++;
}

*/



// 문제 2-1

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

let sum = 0;
let avg = 0;

for (let k in exam) {
    sum = 0;
    for (i = 0, i < exam[k].length; i++;) {
        // console.log(exam[k][i]);
        // sum += exam[k][i];
        console.log("1");
    }
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", k, sum, avg);
}


/*
변수에 length 안되는지 체크

const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

for (const key in exam) {
    let sum = 0;
    for (const p of exam[key]) {
        sum += p;
    }
    let avg = sum / exam[key].length;
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다." key, sum, avg);
}
*/




// 문제 2-2
let student = 0
for (let k in exam) {
    student++;
    sum += exam[k][2];
}
avg = sum/student;
console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg)


/*
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}

let sum = 0;
let student_count = 0;

for(const key in exam) {
    sum += exam[key][2];
    student_count++;
}

let avg = sum / student_count;
console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", sum, avg);
*/



// 문제 3-1
const covid19 = [
    {date: "0125", active: 426}, 
    {date: "0126", active: 343}, 
    {date: "0127", active: 547}, 
    {date: "0128", active: 490}, 
    {date: "0129", active: 460}, 
    {date: "0130", active: 443}, 
    {date: "0131", active: 338}, 
    {date: "0201", active: 299}
]
let sum2 = 0;
let avg2 = 0;

for (k of covid19) {
    console.log(k);
    // sum2 += covid19[k].active;
}
avg2 = sum2/covid19.length;

console.log("누적 확진자 수: %d, /n일평균 확진자 수: %d", sum2, avg2);



/*
const covid19 = [
    {date: "0125", active: 426}, 
    {date: "0126", active: 343}, 
    {date: "0127", active: 547}, 
    {date: "0128", active: 490}, 
    {date: "0129", active: 460}, 
    {date: "0130", active: 443}, 
    {date: "0131", active: 338}, 
    {date: "0201", active: 299}
]
let sum = 0;
for (const j of covid19) {
    sum += j.active;
}

console.log("누적 확진자 수: %d", sum);
console.log("평균 확진자 수: %d", sum / covid19.length);
*/




// 문제 3-2
console.log("확진자가 가장 많이 나타난 날: %d")

/*
const covid19 = [
    {date: "0125", active: 426}, 
    {date: "0126", active: 343}, 
    {date: "0127", active: 547}, 
    {date: "0128", active: 490}, 
    {date: "0129", active: 460}, 
    {date: "0130", active: 443}, 
    {date: "0131", active: 338}, 
    {date: "0201", active: 299}
];

let max_active = covid19[0].active;
let max_day = covid19[0].date;

for (const j of covid19) {
    if (max_active < j.active) {
        max_active = j.active;
        max_date = j.date;
    }
}
*/