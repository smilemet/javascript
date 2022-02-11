function Student(kor, eng, math) {
    this._kor = kor;
    this._eng = eng;
    this._math = math;
};

Student.prototype = {
    sum: function() {
        return this._kor + this._eng + this._math;
    },

    avg: function() {
        return (this._kor + this._eng + this._math)/3;
    }
}

const class1 = [
    ['철수', 92, 81, 77],
    ['영희', 72, 95, 98],
    ['민혁', 80, 86, 84]
];


for(c of class1) {
    const grade = new Student(c[1], c[2], c[3]);
    console.log(`${c[0]}의 총점은 ${grade.sum()}이고 평균은 ${grade.avg()}점 입니다.`)
    
}



function Rectangle() {
    this._width = null;
    this._height = null;
}

Rectangle.prototype = {
    get width() {
        return this._width;
    },

    set width(width) {
        this._width = width;
    },

    get height() {
        return this._height;
    },

    set height(height) {
        this._height = height;
    },

    getAround: function() {
        return this._width*2 + this._height*2;
    }, 

    getArea: function() {
        return this._width * this._height;
    }
}


const shape1 = new Rectangle();
shape1.width = 10;
shape1.height = 5;

console.log(`둘레의 길이는 ${shape1.getAround()}이고 넓이는 ${shape1.getArea()}입니다.`);