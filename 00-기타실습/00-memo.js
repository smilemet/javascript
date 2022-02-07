// function myGame(n) {
    
// }

// myGame(35);


for(let i = 1; i < 35 + 1; i++) {
    let number = i + ""
    let count = 0;
    let str = ""
    for(let j = 0; j < number.length; j++) {
        if(number[j] === "3" || number[j] === "6" || number[j] === "9"){
            count++;
            str += "짝"
            console.log("%s(%s) --> %d번", str, number, count);
        }
    }
    if (count === 0) {
        console.log(i);
    }

}