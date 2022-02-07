# 방미소 JSON 과제

> 2022-02-07

## 문제1
다음은 10명의 학생들에 대한 혈액형 데이터이다.

```
['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
```

아래와 같은 JSON을 정의하고, 각 혈액형별 학생수를 아래의 json의 각 key에 대한 value에 저장하시오. 

(혈액형별 학생 수를 for문을 활용하여 산출해야 합니다.)

```javascript
const BLOOD_TYPE = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O']
const RESULT = {"A" : 0, "B" : 0, "AB" : 0, "O" : 0};

for (k of BLOOD_TYPE) {
    RESULT[k]++;
}
console.log(RESULT);
```

![문제1](https://imgur.com/YkgmIBi.png)


&nbsp;


## 문제2
다음의 JSON은 어느 학급의 중간고사 성적을 나타낸다.
```
const exam = {
    "철수": [89, 82, 79, 91],
    "민영": [91, 95, 94, 89],
    "남철": [65, 57, 71, 64],
    "혜진": [82, 76, 81, 83]
}
```

### 2-1. 
위 데이터에서 학생별 총점과 평균을 구하시오.

```javascript
for(k in exam) {
    let sum = 0;
    for(let i = 0; i < exam[k].length; i++) {
        sum += exam[k][i]
    }
    let avg = sum / exam[k].length;
    console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", k, sum, avg);
}
```

![문제2](https://imgur.com/vq8lxIW.png)

&nbsp;

### 2-2. 
위 문제의 점수가 순서대로 국어, 영어, 수학, 과학일 경우 수학에 대한 모든 학생의 총점과 평균을 구하시오.

```javascript
let class_sum = 0;
let class_count = 0;
for(k in exam) {
    class_sum += exam[k][2];
    class_count++;
}

let avg = class_sum/class_count
console.log("모든 학생의 수학 총점은 %d점 이고 평균은 %d점 입니다.", class_sum, avg);
```

![문제2](https://imgur.com/WMCiG8U.png)


&nbsp;


## 문제3

아래의 데이터는 2021년 01월 25일부터 02월 01일까지의 Covid19 일별 확진자 수를 표현한 자료구조다.
```
covid19 = [
    {date: '0125', active: 426}, 
    {date: '0126', active: 343}, 
    {date: '0127', active: 547}, 
    {date: '0128', active: 490}, 
    {date: '0129', active: 460}, 
    {date: '0130', active: 443}, 
    {date: '0131', active: 338}, 
    {date: '0201', active: 299}
]
```

### 3-1. 
1월 25일부터 2월 1일까지의 누적 확진자 수와 일 평균 확진자 수를 구하시오.

```javascript
let day = 0;
let sum = 0;
for (count in covid19) {
    sum += covid19[count].active;
    day++;
}

console.log("누적 확진자 수: %d", sum);
console.log("평균 확진자 수: %d", sum/day);
```

![문제3](https://imgur.com/IocBvtx.png)


### 3-2. 
1월 25일부터 2월 1일까지 중에서 확진자가 가장 많이 나타난 날짜는 언제인가?

```javascript
let max = covid19[0];
for (k in covid19) {
    if(max.active < covid19[k].active) {
        max = covid19[k];
    }
}
console.log(max.date);
```

![문제4](https://imgur.com/s1EbgmY.png)