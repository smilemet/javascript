let a = 3;
let count = 0;

if (a > 1) {
    if (count > 4) {
        console.log(count);
        break;
    }
    if (a > 0) {
        count++;
        continue;
    }
}