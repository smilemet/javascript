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
        return this.sum() / 3;
    }
}


const classGrade = [
    ['철수', 92, 81, 77],
    ['영희', 72, 95, 98],
    ['민혁', 80, 86, 84]
];

for(const c of classGrade) {
    const s = new Student(c[1], c[2], c[3]);
    console.log(`${c[0]}의 총점은 ${s.sum()}점 이고 평균은 ${s.avg()}점 입니다.`)
}




function Rectangle() {
    this._width = null;
    this._height = null;
};


Rectangle.prototype = {
    get width() {
        return this._width;
    },

    set width(value) {
        this._width = value;
    },

    get height() {
        return this._height;
    },

    set height(value) {
        this._height = value;
    },

    getAround: function() {
        return this.width*2 + this.height*2;
    },

    getArea: function() {
        return this.width * this.height;
    }
}

const rect = new Rectangle();
rect.width = 10;
rect.height = 5;

console.log(`둘레의 길이는 ${rect.getAround()}이고 넓이는 ${rect.getArea()}입니다.`)
