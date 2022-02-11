class Student {
    constructor() {
        this.Kor = null;
        this.Eng = null;
        this.Math = null;
    }

    sum(kor, eng, math) {
        // console.log(this.Kor + this.Eng + this.Math);
        this.Kor = kor;
        this.Eng = eng;
        this.Math = math;
        return kor + eng + math;
    }

    avg() {
        return this.sum() / 3;
    }
}

const classGrade = [
    ['철수', 92, 81, 77],
    ['영희', 72, 95, 98],
    ['민혁', 80, 86, 84],
]

for(c of classGrade) {
    const grade = new Student();
    console.log(`${c[0]}의 총점은 ${grade.sum(c[1], c[2], c[3])}점 이고, 평균은 ${grade.avg()}점 입니다.`)
}



class Rectangle {
    constructor() {
        this._width = null;
        this._hight = null;
    }

    get width() {
        return this._width;
    }

    set width(param) {
        this._width = param;
    }

    get height() {
        return this._height;
    }

    set hight(param) {
        this._hight = param;
    }

    getAround() {
        return this.width *2 + this.height *2;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle();
rect.width = 10;
rect.width = 5;

console.log(`둘레의 길이는 ${rect.getAround()}이고 넓이는 ${rect.getArea()} 입니다.`);
