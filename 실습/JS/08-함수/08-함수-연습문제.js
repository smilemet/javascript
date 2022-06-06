// 1번



// 2번
function printRevStar(max) {
    for (let i = 0; i < max; i++) {
        let str = ""
        for (let j = 0; j < max - i; j++) {
            str += "*"
        }
        console.log(str);
    }
}
printRevStar(5);


// 3번
function myGame(n) {
    for(let i = 0; i < n + 1; i++) {
        let count = 1;
        if(n % 3 === 0) {
            while(parseInt(n / 10) !== 0) {
                count++;
            }
            console.log("짝(%d) --> %d번", n, count);
        } else {
            console.log(i)
        }
    }   
}

myGame(35);


// function myGame(n) {
//     for (let i = 1; i <= n; i++) {
//         const str = i + "";
//         console.group(i);

//         for (let j of str) { 
//             console.log(j);
        
//             if (j === ("3" || "6" || "9" ) {

//             }
//         }
//         console.log("----------")
//     }

// }


// myGame(35);