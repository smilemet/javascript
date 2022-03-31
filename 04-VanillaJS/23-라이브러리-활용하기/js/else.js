
// 각 항목을 분할하여 저장하기 위한 배열
const studentId = [];
const names = [];
const grade = [];
const birthdate = [];
const height = [];
const weight = [];
const deptno = [];


// 항목 분할
student.forEach((v, i) => {
  studentId[i] = v.id;
  names[i] = v.name;
  grade[i] = v.grade;
  birthdate[i] = v.birthdate;
  height[i] = v.height;
  weight[i] = v.weight;
  deptno[i] = v.deptno;
});