// 문제 1
console.log(`------------1`)
function printStar(max) {
    for (let i = 0; i < max; i++) {
        let str = ""
        for (let j = 0; j < i + 1; j++) {
            str += "*"
        }
        console.log(str);
    }
}

printStar(5)



// 문제 2
console.log(`------------2`)
function printRevStar(max) {
    for (let i = 0; i < max; i++) {
        let str =""
        for (let j = 0; j < max - i; j++) {
            str += "*"
        }
        console.log(str);
    }
}

printRevStar(5)



// 문제 3
console.log(`------------3`)
let clapCount=0
function myGame(n) {
    for(let i = 1; i < n + 1; i++) {
        let str = i + '';
        let clap = ''
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '3' || str[j] === '6' || str[j] === '9') {
                clap += '짝';
                count++;
            }
        }
        if (count !== 0) {
            console.log(`${clap}(${i}) --> ${count}번`)
            clapCount += count
        } else {
            console.log(i);
        }
    }   
}

myGame(35);
console.log(`박수를 총 ${clapCount}번 쳤습니다.`);



// 문제 4
console.log(`------------4`)
function printStar2(max, current = 1) {
    if (current > max) {
        return;
    } else {
        let str = '';
        for (let i = 0; i < current; i++) {
            str += '*';
        }
        console.log(str);
        printStar2(max, current + 1);
    }
}

printStar2(5);