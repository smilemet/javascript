'use strict';
const student = require('./js/dataset.js');
/**********************
 공용 함수
 **********************/
// 평균 계산 함수
const avgCal = (arr) => {
  let sum = 0;
  arr.forEach(v => {
    sum += v;
  });

  return sum / arr.length;
}


/**********************
 문제풀이
 **********************/
// 학과별 학생 수 나타내기
// 필요 내용 -> [학과 명...], [학생 수...]
const deptCount = {};

student.forEach(v => {
  const deptno = v.deptno;
  deptCount[deptno] = 0;
})

student.forEach(v => {
  const deptno = v.deptno;
  deptCount[deptno]++;
})

const department = Object.keys(deptCount);
const studentCount = Object.values(deptCount);



// 학년이 올라갈수록 평균 나이 변화 나타내기
// 필요 내용 -> [학년...], [평균 나이...]
// '학년:나이' 객체 만들기
const ageInfo = {};

student.forEach(v => {
  const grade = v.grade + '학년';
  ageInfo[grade] = [];
})

// 학년별 나이 입력
student.forEach(v => {
  const grade = v.grade + '학년';
  
  // 나이 구하기
  const thisyy = new Date().getFullYear();
  const studyy = v.birthdate.substring(0, 4);
  const studAge = thisyy - parseInt(studyy) + 1;

  ageInfo[grade].push(studAge);
})

// 학년 목록별 평균나이 찾기
const studAgeAvg = {};
for (let key in ageInfo) {
  studAgeAvg[key] = avgCal(ageInfo[key]);
}

const studGrade = Object.keys(studAgeAvg);
const studAge = Object.values(studAgeAvg);

// 배열 정렬 함수
const sortArr = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if(parseInt(arr1[i]) > parseInt(arr1[j])) {
        let tmp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = tmp;
  
        tmp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = tmp;
      }
    }
  }
};

sortArr(studGrade, studAge);



// 학년별 평균키, 평균 몸무게를 다중 막대 그래프로 표현하기
// 필요 내용 -> [학년] [평균키] [평균 몸무게]
// 학년:{키, 몸무게} 객체 만들기
const bodyInfo = {};

student.forEach(v => {
  const grade = v.grade;
  bodyInfo[grade + '학년'] = {height:[], weight:[]};
})

// 학년별 키, 몸무게 입력
student.forEach(v => {
  const grade = v.grade;
  const height = v.height;
  const weight = v.weight;

  bodyInfo[grade + '학년'].height.push(height);
  bodyInfo[grade + '학년'].weight.push(weight);
})

console.log(bodyInfo);

const studGrade2 = Object.keys(bodyInfo);
let studhght = [], studwght = [];

for (let key in bodyInfo) {
  studhght.push(avgCal(bodyInfo[key].height));
  studwght.push(avgCal(bodyInfo[key].weight));
}



// 배열 정렬 함수
const sortArr2 = (arr1, arr2, arr3) => {
  for(let i = 0; i < arr1.length; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if(parseInt(arr1[i]) > parseInt(arr1[j])) {
        let tmp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = tmp;
  
        tmp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = tmp;
  
        tmp = arr3[i];
        arr3[i] = arr3[j];
        arr3[j] = tmp;
      }
    }
  }
};

sortArr2(studGrade2, studhght, studwght)

console.log(studGrade2, studhght, studwght);